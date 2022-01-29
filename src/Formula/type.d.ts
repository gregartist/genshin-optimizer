import { AmplifyingReactionsKey, TransformativeReactionsKey } from "../StatConstants"
import type { MainStatKey, SubstatKey } from "../Types/artifact"
import type { ArtifactSetKey, CharacterKey, ElementKey, ElementKeyWithPhy, ReactionModeKey, WeaponKey } from "../Types/consts"
import type { Path } from "../Util/KeyPathUtil"
import type { Input } from "./index"

export type NumNode = ComputeNode | ThresholdNode |
  DataNode<NumNode> |
  LookupNode<NumNode> | MatchNode<NumNode, StrNode> | MatchNode<NumNode, NumNode> |
  SubscriptNode<number> |
  ReadNode<number> | ConstantNode<number>
export type StrNode = StrPrioNode |
  DataNode<StrNode> |
  LookupNode<StrNode> |
  MatchNode<StrNode, StrNode> | MatchNode<StrNode, NumNode> |
  ReadNode<string | undefined> | ConstantNode<string | undefined>
export type AnyNode = NumNode | StrNode | {
  operation: string
  operands: readonly AnyNode[]
  info?: Info
}

interface Info {
  key?: string
  namePrefix?: string
  variant?: Variant
  asConst?: true
  pivot?: true
}
export type Variant = ElementKeyWithPhy | TransformativeReactionsKey | AmplifyingReactionsKey | "success"

interface Base {
  operands: readonly AnyNode[]
  info?: Info
}
export interface StrPrioNode extends Base {
  operation: "prio"
  operands: readonly StrNode[]
}
export interface LookupNode<N> extends Base {
  operation: "lookup"
  operands: readonly [index: StrNode] | readonly [index: StrNode, defaultNode: N]
  table: Dict<string, N>
}
export interface DataNode<N> extends Base {
  operation: "data"
  operands: readonly [N]
  data: Data
  reset?: true
}
export interface ComputeNode extends Base {
  operation: Operation
  operands: readonly NumNode[]
}
export interface ThresholdNode extends Base {
  operation: "threshold_add"
  operands: readonly [NumNode, NumNode, NumNode]
}
export interface MatchNode<N, M = StrNode> extends Base {
  operation: "match"
  operands: readonly [v1: M, v2: M, match: N, unmatch: N]
  emptyOn?: "match" | "unmatch"
}
export interface SubscriptNode<V> extends Base {
  operation: "subscript"
  operands: readonly [index: NumNode]
  list: readonly V[]
}
export interface ReadNode<V> extends Base {
  operation: "read"
  operands: readonly []
  accu?: V extends number ? CommutativeMonoidOperation : undefined
  path: readonly string[]
  type: V extends number ? "number" : V extends string ? "string" : undefined
}
export interface ConstantNode<V> extends Base {
  operation: "const"
  operands: readonly []
  value: V
  type: V extends number ? "number" : V extends string ? "string" : undefined
}

export type Data = Input & DynamicNumInput
export type DisplaySub<T = NumNode> = { [key in string]?: T }
interface DynamicNumInput<T = NumNode> {
  display?: {
    [key: string]: DisplaySub
  }
  conditional?: NodeData<T>
  teamBuff?: Input
}
export interface NodeData<T = NumNode> {
  [key: string]: typeof key extends "operation" ? never : (NodeData<T> | T)
}

export type CommutativeMonoidOperation = "min" | "max" | "add" | "mul"
export type Operation = CommutativeMonoidOperation |
  "res" |    // Resistance from base resistance
  "sum_frac" // linear fractional; operands[0] / (operands[0] + operands[1])
