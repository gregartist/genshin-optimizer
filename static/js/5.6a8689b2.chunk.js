(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[5],{159:function(n,e,t){"use strict";t.r(e);var r=t(12),i=t(550),a=t(551),u=t(552),c=t(553),o=t(554),f=t(555),d=t(556),l=t(557),b=t(558),s=t(559),m=t(560),h=t(561),g=t(562),v=t(563),p=t(564),w=t(565),y=t(566),x=t(567),O=t(568),_=t(569),I=t(570),j=t(571),H=t(572),P=t(573),S=t(574),k=t(575),R=t(576),T=t(577),A=t(578),C=t(579),D=t(580),F=t(581),K=t(582),E=t(583),B=t(584),M=t(585),q=t(586),z=t(587),J={anemo:M.b,geo:q.b,electro:z.b},L=t(588),X=t(589),G=t(590),N=t(591),V=t(592),Y=t(593),Q=t(594),W=t(595),Z={Albedo:i.b,Aloy:a.b,Amber:u.b,AratakiItto:c.b,Barbara:o.b,Beidou:f.b,Bennett:d.b,Chongyun:l.b,Diluc:b.b,Diona:s.b,Eula:m.b,Fischl:h.b,Ganyu:g.b,Gorou:v.b,HuTao:p.b,Jean:w.b,KaedeharaKazuha:y.b,Kaeya:x.b,KamisatoAyaka:O.b,Keqing:_.b,Klee:I.b,KujouSara:j.b,Lisa:H.b,Mona:P.b,Ningguang:S.b,Noelle:k.b,Qiqi:R.b,RaidenShogun:T.b,Razor:A.b,Rosaria:C.b,SangonomiyaKokomi:D.b,Sayu:F.b,Sucrose:K.b,Tartaglia:E.b,Thoma:B.b,Traveler:J,Venti:L.b,Xiao:X.b,Xiangling:G.b,Xingqiu:N.b,Xinyan:V.b,Yanfei:Y.b,Yoimiya:Q.b,Zhongli:W.b},U=t(4),$=t(450),nn=t(451),en=t(452),tn=t(453),rn=t(454),an=t(455),un=t(456),cn=t(457),on=t(458),fn=t(459),dn=t(460),ln=t(461),bn=t(462),sn=t(463),mn=t(464),hn=t(465),gn=t(466),vn=t(467),pn=t(468),wn=t(469),yn=t(470),xn=t(471),On=t(472),_n=t(473),In=t(474),jn=t(475),Hn=t(476),Pn=t(477),Sn=t(478),kn=t(479),Rn=t(480),Tn=t(481),An=t(482),Cn={AquilaFavonia:$.b,CinnabarSpindle:nn.b,FilletBlade:en.b,PrimordialJadeCutter:tn.b,SkywardBlade:rn.b,SwordOfDescension:an.a,TheBlackSword:un.b,TheFlute:cn.b,TravelersHandySword:on.b},Dn={CrescentPike:fn.b,DragonspineSpear:dn.b,EngulfingLightning:ln.b,Halberd:bn.b,SkywardSpine:sn.b,StaffOfHoma:mn.b},Fn={EverlastingMoonglow:_n.b,EyeOfPerception:In.b,Frostbearer:jn.b,OtherworldlyStory:Hn.b,PrototypeAmber:Pn.b,SkywardAtlas:Sn.b},Kn={DebateClub:hn.b,LuxuriousSeaLord:gn.b,PrototypeArchaic:vn.b,RedhornStonethresher:pn.b,SkywardPride:wn.b,SnowTombedStarsilver:yn.b,TheBell:xn.b,WhiteIronGreatsword:On.b},En={Messenger:kn.b,RecurveBow:Rn.b,SkywardHarp:Tn.a,TheViridescentHunt:An.b},Bn=Object(U.a)(Object(U.a)(Object(U.a)(Object(U.a)(Object(U.a)({},Cn),En),Dn),Fn),Kn),Mn=t(446),qn=t(447),zn=t(448),Jn=t(449),Ln={character:Z,weapon:Bn,artifact:{Adventurer:Mn.a,EmblemOfSeveredFate:qn.a,OceanHuedClam:zn.a,TravelingDoctor:Jn.a}};Object(r.c)(Ln,[],(function(n){return"function"===typeof n}),(function(n,e){return n.keys=e}));e.default=Ln},446:function(n,e,t){"use strict";var r=t(286),i={regen:function(n){return Object(r.b)(30,"finalHP")}};e.a=i},447:function(n,e,t){"use strict";var r={s4:function(n){return[function(n){var e,t;return.25*Math.min(null!==(e=null===(t=n.premod)||void 0===t?void 0:t.enerRech_)&&void 0!==e?e:n.enerRech_,300)},["enerRech_"]]}};e.a=r},448:function(n,e,t){"use strict";e.a={dmg:function(n){return[function(n){return 27e3*n.physical_enemyRes_multi},["physical_enemyRes_multi"]]}}},449:function(n,e,t){"use strict";var r=t(286),i={regen:function(n){return Object(r.b)(30,"finalHP")}};e.a=i},450:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(286),i={heal:[100,115,130,145,160],dmg:[200,230,260,290,320]},a={dmg:function(n){return Object(r.a)(i.dmg[n.weapon.refineIndex],n,"physical")},heal:function(n){var e=i.heal[n.weapon.refineIndex]/100;return[function(n){return e*n.finalATK*n.heal_multi},["finalATK","heal_multi"]]}};e.b=a},451:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(21),i={defConv:[40,50,60,70,80]},a={skill:function(n){var e=i.defConv[n.weapon.refineIndex]/100,t=Object(r.c)("skill",n)+"_multi";return[function(n){return e*n.finalDEF*n[t]},["finalDEF",t]]}};e.b=a},452:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(286),i={dmg:[240,280,320,360,400]},a={dmg:function(n){return Object(r.a)(i.dmg[n.weapon.refineIndex],n,"physical")}};e.b=a},453:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r={hp_atk:[1.2,1.5,1.8,2.1,2.4]},i={bonus:function(n){return[function(e){var t,i;return(null!==(t=null===(i=e.modStats)||void 0===i?void 0:i.finalHP)&&void 0!==t?t:e.finalHP)*r.hp_atk[n.weapon.refineIndex]/100},["finalHP"]]}};e.b=i},454:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(286),i={dmg:[20,25,30,35,40]},a={dmg:function(n){return Object(r.a)(i.dmg[n.weapon.refineIndex],n,"physical")}};e.b=a},455:function(n,e,t){"use strict";var r=t(286),i={dmg:function(n){return Object(r.a)(200,n,"physical")}};e.a=i},456:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r={dmg_:[20,25,30,35,40],heal:[60,70,80,90,100]},i={regen:function(n){var e=r.heal[n.weapon.refineIndex]/100;return[function(n){return e*n.finalATK*n.heal_multi},["finalATK","heal_multi"]]}};e.b=i},457:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(286),i={vals:[100,125,150,175,200]},a={dmg:function(n){return Object(r.a)(i.vals[n.weapon.refineIndex],n,"physical")}};e.b=a},458:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r={heal:[1,1.25,1.5,1.75,2]},i={heal:function(n){var e=r.heal[n.weapon.refineIndex]/100;return[function(n){return e*n.finalHP*n.heal_multi},["finalHP","heal_multi"]]}};e.b=i},459:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(286),i={dmg:[20,25,30,35,40]},a={dmg:function(n){return Object(r.a)(i.dmg[n.weapon.refineIndex],n,"physical")}};e.b=a},460:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(286),i={dmg:[80,95,110,125,140],dmgc:[200,240,280,320,360]},a={dmg:function(n){return Object(r.a)(i.dmg[n.weapon.refineIndex],n,"physical")},dmgc:function(n){return Object(r.a)(i.dmgc[n.weapon.refineIndex],n,"physical")}};e.b=a},461:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r={enerRechConv:[28,35,42,49,56],enerRechMax:[80,90,100,110,120]},i={conv:function(n){return[function(e){var t,i;return Math.min(((null!==(t=null===(i=e.premod)||void 0===i?void 0:i.enerRech_)&&void 0!==t?t:e.enerRech_)-100)*r.enerRechConv[n.weapon.refineIndex]/100,r.enerRechMax[n.weapon.refineIndex])},["enerRech_"]]}};e.b=i},462:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(286),i={dmg:[160,200,240,280,320]},a={dmg:function(n){return Object(r.a)(i.dmg[n.weapon.refineIndex],n,"physical")}};e.b=a},463:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(286),i={dmg:[40,55,70,85,100]},a={dmg:function(n){return Object(r.a)(i.dmg[n.weapon.refineIndex],n,"physical")}};e.b=a},464:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r={hp_atk:[.8,1,1.2,1.4,1.6],hp_atk_add:[1,1.2,1.4,1.6,1.8]},i={esj:function(n){return[function(e){var t,i;return(null!==(t=null===(i=e.modStats)||void 0===i?void 0:i.finalHP)&&void 0!==t?t:e.finalHP)*r.hp_atk[n.weapon.refineIndex]/100},["finalHP"]]},esjadd:function(n){return[function(e){var t,i;return(null!==(t=null===(i=e.modStats)||void 0===i?void 0:i.finalHP)&&void 0!==t?t:e.finalHP)*r.hp_atk_add[n.weapon.refineIndex]/100},["finalHP"]]}};e.b=i},465:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(286),i={dmg:[60,75,90,105,120]},a={dmg:function(n){return Object(r.a)(i.dmg[n.weapon.refineIndex],n,"physical")}};e.b=a},466:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(286),i={dmg:[100,125,150,175,200]},a={dmg:function(n){return Object(r.a)(i.dmg[n.weapon.refineIndex],n,"physical")}};e.b=a},467:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(286),i={dmg:[240,300,360,420,480]},a={dmg:function(n){return Object(r.a)(i.dmg[n.weapon.refineIndex],n,"physical")}};e.b=a},468:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(21),i={defConv:[40,50,60,70,80]},a={normal:function(n){var e=i.defConv[n.weapon.refineIndex]/100,t=Object(r.c)("normal",n)+"_multi";return[function(n){return e*n.finalDEF*n[t]},["finalDEF",t]]},charged:function(n){var e=i.defConv[n.weapon.refineIndex]/100,t=Object(r.c)("charged",n)+"_multi";return[function(n){return e*n.finalDEF*n[t]},["finalDEF",t]]}};e.b=a},469:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(286),i={dmg:[80,100,120,140,160]},a={dmg:function(n){return Object(r.a)(i.dmg[n.weapon.refineIndex],n,"physical")}};e.b=a},470:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(286),i={dmg:[80,95,110,125,140],dmgc:[200,240,280,320,360]},a={dmg:function(n){return Object(r.a)(i.dmg[n.weapon.refineIndex],n,"physical")},dmgc:function(n){return Object(r.a)(i.dmgc[n.weapon.refineIndex],n,"physical")}};e.b=a},471:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r={shield:[20,23,26,29,32]},i={shield:function(n){var e=r.shield[n.weapon.refineIndex]/100;return[function(n){return e*n.finalHP*(1+n.shield_/100)*1.5},["finalHP","shield_"]]}};e.b=i},472:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r={heal:[8,10,12,14,16]},i={heal:function(n){var e=r.heal[n.weapon.refineIndex]/100;return[function(n){return e*n.finalHP*n.heal_multi},["finalHP","heal_multi"]]}};e.b=i},473:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(21),i={hp_conv:[1,1.5,2,2.5,3]},a={norm:function(n){var e=i.hp_conv[n.weapon.refineIndex]/100,t=Object(r.c)("elemental",n)+"_multi";return[function(n){return e*n.finalHP*n[t]},["finalHP",t]]}};e.b=a},474:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(286),i={dmg:[240,270,300,330,360]},a={dmg:function(n){return Object(r.a)(i.dmg[n.weapon.refineIndex],n,"physical")}};e.b=a},475:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(286),i={dmg:[80,95,110,125,140],dmgc:[200,240,280,320,360]},a={dmg:function(n){return Object(r.a)(i.dmg[n.weapon.refineIndex],n,"physical")},dmgc:function(n){return Object(r.a)(i.dmgc[n.weapon.refineIndex],n,"physical")}};e.b=a},476:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r={heal:[1,1.25,1.5,1.75,2]},i={heal:function(n){var e=r.heal[n.weapon.refineIndex]/100;return[function(n){return e*n.finalHP*n.heal_multi},["finalHP","heal_multi"]]}};e.b=i},477:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r={heal:[4,4.5,5,5.5,6]},i={heal:function(n){var e=r.heal[n.weapon.refineIndex]/100;return[function(n){return e*n.finalHP*n.heal_multi},["finalHP","heal_multi"]]}};e.b=i},478:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(286),i={dmg:[160,200,240,280,320]},a={dmg:function(n){return Object(r.a)(i.dmg[n.weapon.refineIndex],n,"physical")}};e.b=a},479:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(286),i={dmg:[100,125,150,175,200]},a={dmg:function(n){return Object(r.a)(i.dmg[n.weapon.refineIndex],n,"physical")}};e.b=a},480:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r={heal:[8,10,12,14,16]},i={heal:function(n){var e=r.heal[n.weapon.refineIndex]/100;return[function(n){return e*n.finalHP*n.heal_multi},["finalHP","heal_multi"]]}};e.b=i},481:function(n,e,t){"use strict";var r=t(286),i={dmg:function(n){return Object(r.a)(125,n,"physical")}};e.a=i},482:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(286),i={vals:[40,50,60,70,80]},a={dmg:function(n){return Object(r.a)(i.vals[n.weapon.refineIndex],n,"physical")}};e.b=a}}]);
//# sourceMappingURL=5.6a8689b2.chunk.js.map