(function(){
function g(a){throw a;}var h=void 0,i=!0,j=null,l=!1,m,aa=this;
function ba(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function n(a){return"array"==ba(a)}Math.floor(2147483648*Math.random()).toString(36);function ca(a,b,c){return a.call.apply(a.bind,arguments)}function da(a,b,c){a||g(Error());if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function ea(a,b,c){ea=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ca:da;return ea.apply(j,arguments)}function fa(a,b){var c=a.split("."),d=aa;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&b!==h?d[e]=b:d=d[e]?d[e]:d[e]={}}function o(a,b){function c(){}c.prototype=b.prototype;a.yc=b.prototype;a.prototype=new c;a.prototype.constructor=a};function ga(a){Error.captureStackTrace?Error.captureStackTrace(this,ga):this.stack=Error().stack||"";a&&(this.message=String(a))}o(ga,Error);ga.prototype.name="CustomError";function p(a){return p.r(a)}fa("rethinkdb.query",p);p.db=function(a){return new ha(a)};p.db=p.db;p.ta=function(){};p.db_create=p.ta;p.ua=function(){};p.db_drop=p.ua;p.va=function(){};p.db_list=p.va;p.r=function(a){return new ia(a)};p.expr=p.r;p.Y=function(a){var b=a.split("."),a=b[0],b=b[1];b===h&&(b=a,a=h);return new t(b,a)};p.table=p.Y;function ja(){}ja.prototype.L=function(a,b){b=b||ka;b.L(this,a)};ja.prototype.run=ja.prototype.L;function la(){}o(la,ja);la.prototype.ca=function(){var a=new ma,b=this.compile();a.oa(b);b=new u;b.b(na);w(b,3,a);return b};function oa(a,b,c){this.vc=a;this.j=b;this.C=c.name;this.B=!!c.m;this.uc=!!c.required;this.i=c.a;this.ia=c.type;this.xa=l;switch(this.i){case pa:case qa:case ra:case sa:case ta:this.xa=i}this.S=c.defaultValue}var pa=3,qa=4,ra=6,sa=16,ta=18;var ua=Array.prototype;function va(a,b){return a>b?1:a<b?-1:0};function wa(a,b,c){this.Ga=a;this.C=b.name||j;this.tc=b.d||j;this.qc=b.g;this.o={};for(a=0;a<c.length;a++)b=c[a],this.o[b.j]=b}function xa(a){var a=a.o,b=[],c=0,d;for(d in a)b[c++]=a[d];ua.sort.call(b,function(a,b){return a.j-b.j}||va);return b};function x(){this.l={};this.t=this.constructor.t;this.o=this.t.o;this.q=this.ha=j}m=x.prototype;m.I=function(){return this.t};m.get=function(a,b){return y(this,a.j,b)};m.set=function(a,b){w(this,a.j,b)};m.add=function(a,b){ya(this,a.j,b)};
m.h=function(a){if(!a||this.constructor!=a.constructor)return l;for(var b=xa(this.I()),c=0;c<b.length;c++){var d=b[c];if(z(this,d.j)!=z(a,d.j))return l;if(z(this,d.j)){var e=11==d.i||10==d.i,k=za(this,d),f=za(a,d);if(d.B){if(k.length!=f.length)return l;for(d=0;d<k.length;d++)if(!(e?k[d].h(f[d]):k[d]==f[d]))return l}else if(!(e?k.h(f):k==f))return l}}return i};function z(a,b){return b in a.l&&a.l[b]!==h&&a.l[b]!==j}
function za(a,b){var c=b.j;if(!c in a.l)return j;var d=a.l[c];return d==j?j:a.ha?!(c in a.q)?(d=a.ha.rc(a,b,d),a.q[c]=d):a.q[c]:d}function y(a,b,c){b=a.o[b];a=za(a,b);if(b.B)return n(a),a[c||0];n(a);return a}function A(a,b){var c;if(z(a,b))c=y(a,b,h);else{c=a.o[b];if(c.S===h){var d=c.ia;c.S=d===Boolean?l:d===Number?0:d===String?"":new d}c=c.S}return c}function Aa(a,b){return a.o[b].B?(z(a,b)&&n(a.l[b]),z(a,b)?a.l[b].length:0):z(a,b)?1:0}function w(a,b,c){a.l[b]=c;a.q&&(a.q[b]=c)}
function ya(a,b,c){a.l[b]||(a.l[b]=[]);a.l[b].push(c);a.q&&delete a.q[b]}function B(a,b){var c=[],d,e;for(e in b)b.hasOwnProperty(e)&&(0==e?d=b[0]:c.push(new oa(a,e,b[e])));a.t=new wa(a,d,c);a.I=function(){return a.t}};function C(){x.apply(this)}o(C,x);C.prototype.na=function(a){w(this,1,a)};function Ba(){x.apply(this)}o(Ba,x);Ba.prototype.X=function(a){w(this,1,a)};Ba.prototype.oa=function(a){w(this,2,a)};function D(){x.apply(this)}o(D,x);D.prototype.b=function(a){w(this,1,a)};D.prototype.X=function(a){w(this,2,a)};function E(a,b){w(a,4,b)}var F=3,Ca={Cb:0,oc:1,Fb:2,$a:F,vb:4,mb:5,Sb:6,fc:7,JSON:8,BOOL:9,Va:10,Tb:11,rb:12,lc:13,Bb:14};function Da(){x.apply(this)}o(Da,x);function G(){x.apply(this)}o(G,x);
function H(a,b){w(a,1,b)}function I(a,b){ya(a,2,b)}function Ea(){x.apply(this)}o(Ea,x);function J(){x.apply(this)}o(J,x);J.prototype.p=function(){return A(this,1)};J.prototype.n=function(a){w(this,1,a)};J.prototype.w=function(a){w(this,2,a)};J.prototype.N=function(a){w(this,3,a)};function Fa(){x.apply(this)}o(Fa,x);Fa.prototype.p=function(){return A(this,1)};Fa.prototype.n=function(a){w(this,1,a)};function K(){x.apply(this)}o(K,x);K.prototype.b=function(a){w(this,1,a)};
K.prototype.M=function(a){w(this,2,a)};var Ga=19,Ha={Qb:1,qb:2,wb:3,ub:4,xb:5,Vb:6,yb:7,Kb:8,Wa:9,cc:11,Sa:14,gc:15,Nb:16,ib:17,Mb:18,ab:Ga,nb:20,Jb:21,bb:22,Ub:23,hb:24,Eb:26,mc:27,Rb:28,ec:29,Xa:30,ac:31,sb:32,Ua:35,Ta:36,Zb:37};function Ia(){x.apply(this)}o(Ia,x);function Ja(){x.apply(this)}o(Ja,x);Ja.prototype.z=function(a){w(this,1,a)};function Ka(){x.apply(this)}o(Ka,x);Ka.prototype.z=function(a){w(this,1,a)};function La(){x.apply(this)}o(La,x);La.prototype.M=function(a){w(this,1,a)};
function Ma(){x.apply(this)}o(Ma,x);function Na(){x.apply(this)}o(Na,x);Na.prototype.w=function(a){w(this,1,a)};function Oa(){x.apply(this)}o(Oa,x);Oa.prototype.G=function(a){w(this,4,a)};function L(){x.apply(this)}o(L,x);L.prototype.W=function(a){w(this,1,a)};L.prototype.G=function(a){w(this,2,a)};function Pa(){x.apply(this)}o(Pa,x);Pa.prototype.W=function(a){w(this,1,a)};Pa.prototype.G=function(a){w(this,2,a)};function ma(){x.apply(this)}o(ma,x);ma.prototype.oa=function(a){w(this,1,a)};
function M(){x.apply(this)}o(M,x);M.prototype.b=function(a){w(this,1,a)};function Qa(){x.apply(this)}o(Qa,x);Qa.prototype.z=function(a){w(this,2,a)};function Ra(){x.apply(this)}o(Ra,x);function Sa(){x.apply(this)}o(Sa,x);Sa.prototype.z=function(a){w(this,2,a)};function Ta(){x.apply(this)}o(Ta,x);Ta.prototype.p=function(){return A(this,1)};Ta.prototype.n=function(a){w(this,1,a)};function Ua(){x.apply(this)}o(Ua,x);Ua.prototype.p=function(){return A(this,1)};Ua.prototype.n=function(a){w(this,1,a)};
function Va(){x.apply(this)}o(Va,x);Va.prototype.X=function(a){w(this,2,a)};function Wa(){x.apply(this)}o(Wa,x);m=Wa.prototype;m.p=function(){return A(this,1)};m.n=function(a){w(this,1,a)};m.w=function(a){w(this,2,a)};m.N=function(a){w(this,3,a)};m.z=function(a){w(this,4,a)};function N(){x.apply(this)}o(N,x);N.prototype.p=function(){return A(this,1)};N.prototype.n=function(a){w(this,1,a)};N.prototype.w=function(a){w(this,2,a)};N.prototype.N=function(a){w(this,3,a)};function Xa(){x.apply(this)}
o(Xa,x);m=Xa.prototype;m.p=function(){return A(this,1)};m.n=function(a){w(this,1,a)};m.w=function(a){w(this,2,a)};m.N=function(a){w(this,3,a)};m.z=function(a){w(this,4,a)};function Ya(){x.apply(this)}o(Ya,x);Ya.prototype.b=function(a){w(this,1,a)};Ya.prototype.na=function(a){w(this,2,a)};function Za(){x.apply(this)}o(Za,x);Za.prototype.p=function(){return A(this,3)};Za.prototype.n=function(a){w(this,3,a)};function u(){x.apply(this)}o(u,x);u.prototype.b=function(a){w(this,1,a)};
u.prototype.u=function(){return y(this,2)};u.prototype.pa=function(a){w(this,2,a)};var na=1,$a={$b:na,pc:2,cb:3,dc:4,Lb:5};function ab(){x.apply(this)}o(ab,x);ab.prototype.u=function(){return y(this,2)};ab.prototype.pa=function(a){w(this,2,a)};function bb(){x.apply(this)}o(bb,x);B(C,{"0":{name:"TableRef",d:"TableRef"},1:{name:"db_name",a:9,type:String},2:{name:"table_name",a:9,type:String}});B(Ba,{"0":{name:"VarTermTuple",d:"VarTermTuple"},1:{name:"var",a:9,type:String},2:{name:"term",a:11,type:D}});
B(D,{"0":{name:"Term",d:"Term"},1:{name:"type",a:14,defaultValue:0,type:Ca},2:{name:"var",a:9,type:String},3:{name:"let",a:11,type:Da},4:{name:"call",a:11,type:G},5:{name:"if_",a:11,type:Ea},6:{name:"error",a:9,type:String},7:{name:"number",a:1,type:Number},8:{name:"valuestring",a:9,type:String},9:{name:"jsonstring",a:9,type:String},10:{name:"valuebool",a:8,type:Boolean},11:{name:"array",m:i,a:11,type:D},12:{name:"object",m:i,a:11,type:Ba},14:{name:"get_by_key",a:11,type:J},15:{name:"table",a:11,
type:Fa},16:{name:"javascript",a:9,type:String}});B(Da,{"0":{name:"Let",g:D,d:"Term.Let"},1:{name:"binds",m:i,a:11,type:Ba},2:{name:"expr",a:11,type:D}});B(G,{"0":{name:"Call",g:D,d:"Term.Call"},1:{name:"builtin",a:11,type:K},2:{name:"args",m:i,a:11,type:D}});B(Ea,{"0":{name:"If",g:D,d:"Term.If"},1:{name:"test",a:11,type:D},2:{name:"true_branch",a:11,type:D},3:{name:"false_branch",a:11,type:D}});
B(J,{"0":{name:"GetByKey",g:D,d:"Term.GetByKey"},1:{name:"table_ref",a:11,type:C},2:{name:"attrname",a:9,type:String},3:{name:"key",a:11,type:D}});B(Fa,{"0":{name:"Table",g:D,d:"Term.Table"},1:{name:"table_ref",a:11,type:C}});
B(K,{"0":{name:"Builtin",d:"Builtin"},1:{name:"type",a:14,defaultValue:1,type:Ha},2:{name:"attr",a:9,type:String},3:{name:"attrs",m:i,a:9,type:String},4:{name:"comparison",a:14,defaultValue:1,type:{lb:1,Pb:2,Ib:3,Db:4,tb:5,pb:6}},5:{name:"filter",a:11,type:Ia},6:{name:"map",a:11,type:Ja},7:{name:"concat_map",a:11,type:Ka},8:{name:"order_by",m:i,a:11,type:La},9:{name:"reduce",a:11,type:Oa},10:{name:"grouped_map_reduce",a:11,type:Ma},11:{name:"range",a:11,type:Na}});
B(Ia,{"0":{name:"Filter",g:K,d:"Builtin.Filter"},1:{name:"predicate",a:11,type:Pa}});B(Ja,{"0":{name:"Map",g:K,d:"Builtin.Map"},1:{name:"mapping",a:11,type:L}});B(Ka,{"0":{name:"ConcatMap",g:K,d:"Builtin.ConcatMap"},1:{name:"mapping",a:11,type:L}});B(La,{"0":{name:"OrderBy",g:K,d:"Builtin.OrderBy"},1:{name:"attr",a:9,type:String},2:{name:"ascending",a:8,defaultValue:1,type:Boolean}});
B(Ma,{"0":{name:"GroupedMapReduce",g:K,d:"Builtin.GroupedMapReduce"},1:{name:"group_mapping",a:11,type:L},2:{name:"value_mapping",a:11,type:L},3:{name:"reduction",a:11,type:Oa}});B(Na,{"0":{name:"Range",g:K,d:"Builtin.Range"},1:{name:"attrname",a:9,type:String},2:{name:"lowerbound",a:11,type:D},3:{name:"upperbound",a:11,type:D}});B(Oa,{"0":{name:"Reduction",d:"Reduction"},1:{name:"base",a:11,type:D},2:{name:"var1",a:9,type:String},3:{name:"var2",a:9,type:String},4:{name:"body",a:11,type:D}});
B(L,{"0":{name:"Mapping",d:"Mapping"},1:{name:"arg",a:9,type:String},2:{name:"body",a:11,type:D}});B(Pa,{"0":{name:"Predicate",d:"Predicate"},1:{name:"arg",a:9,type:String},2:{name:"body",a:11,type:D}});B(ma,{"0":{name:"ReadQuery",d:"ReadQuery"},1:{name:"term",a:11,type:D},2:{name:"max_chunk_size",a:3,type:String},3:{name:"max_age",a:3,type:String}});
B(M,{"0":{name:"WriteQuery",d:"WriteQuery"},1:{name:"type",a:14,defaultValue:1,type:{nc:1,gb:2,Ob:3,zb:4,Ab:5,ob:6,Yb:7,Wb:8,Xb:9}},2:{name:"update",a:11,type:Qa},3:{name:"delete",a:11,type:Ra},4:{name:"mutate",a:11,type:Sa},5:{name:"insert",a:11,type:Ta},6:{name:"insert_stream",a:11,type:Ua},7:{name:"for_each",a:11,type:Va},8:{name:"point_update",a:11,type:Wa},9:{name:"point_delete",a:11,type:N},10:{name:"point_mutate",a:11,type:Xa}});
B(Qa,{"0":{name:"Update",g:M,d:"WriteQuery.Update"},1:{name:"view",a:11,type:D},2:{name:"mapping",a:11,type:L}});B(Ra,{"0":{name:"Delete",g:M,d:"WriteQuery.Delete"},1:{name:"view",a:11,type:D}});B(Sa,{"0":{name:"Mutate",g:M,d:"WriteQuery.Mutate"},1:{name:"view",a:11,type:D},2:{name:"mapping",a:11,type:L}});B(Ta,{"0":{name:"Insert",g:M,d:"WriteQuery.Insert"},1:{name:"table_ref",a:11,type:C},2:{name:"terms",m:i,a:11,type:D}});
B(Ua,{"0":{name:"InsertStream",g:M,d:"WriteQuery.InsertStream"},1:{name:"table_ref",a:11,type:C},2:{name:"stream",a:11,type:D}});B(Va,{"0":{name:"ForEach",g:M,d:"WriteQuery.ForEach"},1:{name:"stream",a:11,type:D},2:{name:"var",a:9,type:String},3:{name:"queries",m:i,a:11,type:M}});B(Wa,{"0":{name:"PointUpdate",g:M,d:"WriteQuery.PointUpdate"},1:{name:"table_ref",a:11,type:C},2:{name:"attrname",a:9,type:String},3:{name:"key",a:11,type:D},4:{name:"mapping",a:11,type:L}});
B(N,{"0":{name:"PointDelete",g:M,d:"WriteQuery.PointDelete"},1:{name:"table_ref",a:11,type:C},2:{name:"attrname",a:9,type:String},3:{name:"key",a:11,type:D}});B(Xa,{"0":{name:"PointMutate",g:M,d:"WriteQuery.PointMutate"},1:{name:"table_ref",a:11,type:C},2:{name:"attrname",a:9,type:String},3:{name:"key",a:11,type:D},4:{name:"mapping",a:11,type:L}});
B(Ya,{"0":{name:"MetaQuery",d:"MetaQuery"},1:{name:"type",a:14,defaultValue:1,type:{eb:1,jb:2,Gb:3,fb:4,kb:5,Hb:6}},2:{name:"db_name",a:9,type:String},3:{name:"create_table",a:11,type:Za},4:{name:"drop_table",a:11,type:C}});B(Za,{"0":{name:"CreateTable",g:Ya,d:"MetaQuery.CreateTable"},1:{name:"datacenter",a:9,type:String},3:{name:"table_ref",a:11,type:C},4:{name:"primary_key",a:9,defaultValue:"id",type:String}});
B(u,{"0":{name:"Query",d:"Query"},1:{name:"type",a:14,defaultValue:na,type:$a},2:{name:"token",a:3,type:String},3:{name:"read_query",a:11,type:ma},4:{name:"write_query",a:11,type:M},5:{name:"meta_query",a:11,type:Ya}});B(ab,{"0":{name:"Response",d:"Response"},1:{name:"status_code",a:14,defaultValue:0,type:{hc:0,ic:1,jc:2,kc:3,Za:101,Ya:102,bc:103}},2:{name:"token",a:3,type:String},3:{name:"response",m:i,a:9,type:String},4:{name:"error_message",a:9,type:String},5:{name:"backtrace",a:11,type:bb}});
B(bb,{"0":{name:"Backtrace",g:ab,d:"Response.Backtrace"},1:{name:"frame",m:i,a:9,type:String}});function O(){}o(O,la);function ia(a){this.Qa=a}o(ia,O);ia.prototype.compile=function(){var a=new D;a.b(8);var b=JSON.stringify(this.Qa);w(a,9,b);return a};function cb(a,b){return function(){var c=new D;c.b(F);var d=new G,e=new K;e.b(a);b&&w(e,4,b);H(d,e);I(d,this.Ea.compile());I(d,this.Ma.compile());E(c,d);return c}}
function P(a,b,c,d){var e=p[a]=function(a,b){this.Ea=a;this.Ma=b};o(e,O);e.prototype.compile=d?cb(Ga,b):cb(b);O.prototype[c]=function(a){return a instanceof O?new e(this,a):new e(this,p.r(a))}}P("AddExpression",14,"add");P("SubtractExpression",15,"sub");P("MultiplyExpression",16,"mul");P("DivideExpression",17,"div");P("ModuloExpression",18,"mod");P("EqualsExpression",1,"eq",i);P("NotEqualsExpression",2,"ne",i);P("LessThanExpression",3,"lt",i);P("LessThanOrEqualsExpression",4,"le",i);
P("GreaterThanExpression",5,"gt",i);P("GreaterThanOrEqualsExpression",6,"ge",i);function db(a){this.f=a}o(db,O);db.prototype.compile=function(){var a=new K;a.b(1);var b=new G;H(b,a);I(b,this.f.compile());a=new D;a.b(F);E(a,b);return a};O.prototype.U=function(){return new db(this)};O.prototype.not=O.prototype.U;function eb(a){this.f=a}o(eb,O);eb.prototype.compile=function(){var a=new K;a.b(26);var b=new G;H(b,a);I(b,this.f.compile());a=new D;a.b(F);E(a,b);return a};O.prototype.length=function(){return new eb(this)};
O.prototype.length=O.prototype.length;function fb(a){this.K=[];for(var b in arguments)arguments.hasOwnProperty(b)&&this.K.push(arguments[b])}o(fb,O);fb.prototype.compile=function(){var a=new K;a.b(this.da);var b=new G;H(b,a);for(a=0;a<this.K.length;a++)I(b,this.K[a].compile());a=new D;a.b(F);E(a,b);return a};function gb(a){fb.apply(this,arguments);this.da=36}o(gb,fb);O.prototype.$=function(a){return a instanceof O?new gb(this,a):new gb(this,p.r(a))};O.prototype.and=O.prototype.$;
function hb(a){fb.apply(this,arguments);this.da=35}o(hb,fb);O.prototype.ja=function(a){return a instanceof O?new hb(this,a):new hb(this,p.r(a))};O.prototype.or=O.prototype.ja;function ib(a,b,c,d,e){this.f=a;this.Oa=b;this.za=c;this.xc="undefined"===typeof d?l:d;this.sc="undefined"===typeof e?l:e}o(ib,O);
ib.prototype.compile=function(){var a=new Na;a.w("id");var b=this.Oa.compile();w(a,2,b);b=this.za.compile();w(a,3,b);b=new K;b.b(37);w(b,11,a);a=new G;H(a,b);I(a,this.f.compile());b=new D;b.b(F);E(b,a);return b};O.prototype.ra=function(a,b,c,d){return new ib(this,a,b,c,d)};O.prototype.between=O.prototype.ra;function jb(a,b,c){this.f=a;this.Da=b;this.la=c||j}o(jb,O);
jb.prototype.compile=function(){var a=new D;a.b(F);var b=new G,c=new K;c.b(11);H(b,c);I(b,this.f.compile());c=new D;c.b(6);w(c,7,this.Da);I(b,c);c=new D;this.la!==j?(c.b(6),w(c,7,this.la)):c.b(0);I(b,c);E(a,b);return a};O.prototype.slice=function(a,b){return new jb(this,a,b)};O.prototype.slice=O.prototype.slice;O.prototype.Fa=function(a){return new jb(this,0,a)};O.prototype.limit=O.prototype.Fa;O.prototype.Na=function(a){return new jb(this,a)};O.prototype.skip=O.prototype.Na;
function kb(a,b){this.f=a;this.Aa=b}o(kb,O);kb.prototype.compile=function(){var a=new D;a.b(F);var b=new G,c=new K;c.b(28);H(b,c);I(b,this.f.compile());c=new D;c.b(6);w(c,7,this.Aa);I(b,c);E(a,b);return a};O.prototype.Ia=function(a){return new kb(this,a)};O.prototype.nth=O.prototype.Ia;
function lb(a,b){this.f=a;if(b instanceof mb)this.J=b;else if(b instanceof O)this.J=new mb([""],b);else{var c=new gb,d;for(d in b)if(b.hasOwnProperty(d)){var e=p.O(d).eq(p.r(b[d]));c.K.push(e)}this.J=new mb([""],c)}}o(lb,O);lb.prototype.compile=function(){var a=new Pa;a.W(this.J.H[0]);a.G(this.J.body.compile());var b=new Ia;w(b,1,a);a=new K;a.b(20);w(a,5,b);b=new G;H(b,a);I(b,this.f.compile());a=new D;a.b(F);E(a,b);return a};O.prototype.filter=function(a){return new lb(this,a)};
O.prototype.filter=O.prototype.filter;function nb(a,b){this.f=a;b instanceof mb?this.T=b:b instanceof O&&(this.T=p.fa("",b))}o(nb,O);nb.prototype.compile=function(){var a=new L;a.W(this.T.H[0]);a.G(this.T.body.compile());var b=new Ja;b.z(a);a=new K;a.b(21);w(a,6,b);b=new G;H(b,a);I(b,this.f.compile());a=new D;a.b(F);E(a,b);return a};O.prototype.map=function(a){return new nb(this,a)};O.prototype.map=O.prototype.map;function ob(a,b){this.f=a;this.ka=b}o(ob,O);
ob.prototype.compile=function(){var a=new K;a.b(23);for(var b=0;b<this.ka.length;b++){var c=i,d=this.ka[b];"-"===d[0]&&(c=l,d=d.slice(1));var e=new La;e.M(d);w(e,2,c);ya(a,8,e)}b=new G;H(b,a);I(b,this.f.compile());a=new D;a.b(F);E(a,b);return a};O.prototype.Ja=function(a){var b=Array.prototype.slice.call(arguments,0);return new ob(this,b)};O.prototype.orderby=O.prototype.Ja;function pb(a,b){this.f=a;this.aa=b||j}o(pb,O);
pb.prototype.compile=function(){var a=this.f;this.aa&&(a=a.map(p.O(this.aa)));var b=new K;b.b(24);var c=new G;H(c,b);I(c,a.compile());a=new D;a.b(F);E(a,c);return a};O.prototype.ya=function(a){return new pb(this,a)};O.prototype.distinct=O.prototype.ya;function qb(a,b,c){this.f=a;this.qa=b;this.V=c}o(qb,O);
qb.prototype.compile=function(){var a=new Oa,b=this.qa.compile();w(a,1,b);w(a,2,this.V.H[0]);w(a,3,this.V.H[1]);a.G(this.V.body.compile());b=new K;b.b(31);w(b,9,a);a=new G;H(a,b);I(a,this.f.compile());b=new D;b.b(F);E(b,a);return b};O.prototype.reduce=function(a,b){return new qb(this,a,b)};O.prototype.reduce=O.prototype.reduce;function rb(a,b){n(b)||(b=[b]);this.f=a;this.ba=b}o(rb,O);
rb.prototype.compile=function(){var a=new K;a.b(7);for(var b in this.ba)ya(a,3,this.ba[b]);b=new G;H(b,a);I(b,this.f.compile());a=new D;a.b(F);E(a,b);return a};O.prototype.La=function(a){return new rb(this,a)};O.prototype.pluck=O.prototype.La;function mb(a,b){this.H=a;this.body=b}p.fa=function(a){var b=arguments[arguments.length-1],c=Array.prototype.slice.call(arguments,0,arguments.length-1);return new mb(c,b)};p.fn=p.fa;function sb(a){this.Ra=a}o(sb,O);
sb.prototype.compile=function(){var a=new D;a.b(1);a.X(this.Ra);return a};function tb(a,b){this.f=a;this.P=b}o(tb,O);tb.prototype.compile=function(){var a=new K;a.b(2);a.M(this.P);var b=new G;H(b,a);I(b,this.f.compile());a=new D;a.b(F);E(a,b);return a};function ub(a){this.P=a}o(ub,O);ub.prototype.compile=function(){var a=new K;a.b(3);a.M(this.P);var b=new G;H(b,a);a=new D;a.b(F);E(a,b);return a};
p.O=function(a){for(var a=a.split("."),b=a.shift(),c=j,c="$"===b[0]?new sb(b.slice(1)):new ub(b);b=a.shift();)c=new tb(c,b);return c};p.R=p.O;function wb(a,b){this.f=a;this.Ka=b instanceof O?b:p.r(b)}o(wb,O);wb.prototype.compile=function(){var a=new K;a.b(8);var b=new G;H(b,a);I(b,this.f.compile());I(b,this.Ka.compile());a=new D;a.b(F);E(a,b);return a};O.prototype.extend=function(a){return new wb(this,a)};O.prototype.extend=O.prototype.extend;function ha(a){this.C=a}ha.prototype.Y=function(a){return new t(a,this.C)};ha.prototype.table=ha.prototype.Y;function xb(){}xb.prototype.ga=function(a,b){return 11==a.i||10==a.i?yb(this,b):b};function zb(a,b){this.e=a|0;this.c=b|0}var Ab={};function Bb(a){if(-128<=a&&128>a){var b=Ab[a];if(b)return b}b=new zb(a|0,0>a?-1:0);-128<=a&&128>a&&(Ab[a]=b);return b}function Q(a){return isNaN(a)||!isFinite(a)?R:a<=-Cb?S:a+1>=Cb?Db:0>a?T(Q(-a)):new zb(a%U|0,a/U|0)}function V(a,b){return new zb(a,b)}var U=4294967296,Cb=U*U/2,R=Bb(0),Eb=Bb(1),Fb=Bb(-1),Db=V(-1,2147483647),S=V(0,-2147483648),Gb=Bb(16777216);m=zb.prototype;
m.toString=function(a){a=a||10;(2>a||36<a)&&g(Error("radix out of range: "+a));if(Hb(this))return"0";if(0>this.c){if(this.h(S)){var b=Q(a),c=W(this,b),b=Ib(c.multiply(b),this);return c.toString(a)+b.e.toString(a)}return"-"+T(this).toString(a)}for(var c=Q(Math.pow(a,6)),b=this,d="";;){var e=W(b,c),k=Ib(b,e.multiply(c)).e.toString(a),b=e;if(Hb(b))return k+d;for(;6>k.length;)k="0"+k;d=""+k+d}};function Jb(a){return 0<=a.e?a.e:U+a.e}function Hb(a){return 0==a.c&&0==a.e}
m.h=function(a){return this.c==a.c&&this.e==a.e};function Kb(a,b){if(a.h(b))return 0;var c=0>a.c,d=0>b.c;return c&&!d?-1:!c&&d?1:0>Ib(a,b).c?-1:1}function T(a){return a.h(S)?S:a.U().add(Eb)}m.add=function(a){var b=this.c>>>16,c=this.c&65535,d=this.e>>>16,e=a.c>>>16,k=a.c&65535,f=a.e>>>16,q;q=0+((this.e&65535)+(a.e&65535));a=0+(q>>>16);a+=d+f;d=0+(a>>>16);d+=c+k;c=0+(d>>>16);return V((a&65535)<<16|q&65535,(c+(b+e)&65535)<<16|d&65535)};function Ib(a,b){return a.add(T(b))}
m.multiply=function(a){if(Hb(this)||Hb(a))return R;if(this.h(S))return 1==(a.e&1)?S:R;if(a.h(S))return 1==(this.e&1)?S:R;if(0>this.c)return 0>a.c?T(this).multiply(T(a)):T(T(this).multiply(a));if(0>a.c)return T(this.multiply(T(a)));if(0>Kb(this,Gb)&&0>Kb(a,Gb))return Q((this.c*U+Jb(this))*(a.c*U+Jb(a)));var b=this.c>>>16,c=this.c&65535,d=this.e>>>16,e=this.e&65535,k=a.c>>>16,f=a.c&65535,q=a.e>>>16,a=a.e&65535,s,r,v,vb;vb=0+e*a;v=0+(vb>>>16);v+=d*a;r=0+(v>>>16);v=(v&65535)+e*q;r+=v>>>16;r+=c*a;s=0+
(r>>>16);r=(r&65535)+d*q;s+=r>>>16;r=(r&65535)+e*f;s+=r>>>16;return V((v&65535)<<16|vb&65535,(s+(b*a+c*q+d*f+e*k)&65535)<<16|r&65535)};
function W(a,b){Hb(b)&&g(Error("division by zero"));if(Hb(a))return R;if(a.h(S)){if(b.h(Eb)||b.h(Fb))return S;if(b.h(S))return Eb;var c=W(Lb(a,1),b).shiftLeft(1);if(c.h(R))return 0>b.c?Eb:Fb;var d=Ib(a,b.multiply(c));return c.add(W(d,b))}if(b.h(S))return R;if(0>a.c)return 0>b.c?W(T(a),T(b)):T(W(T(a),b));if(0>b.c)return T(W(a,T(b)));for(var e=R,d=a;0<=Kb(d,b);){for(var c=Math.max(1,Math.floor((d.c*U+Jb(d))/(b.c*U+Jb(b)))),k=Math.ceil(Math.log(c)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),f=Q(c),q=f.multiply(b);0>
q.c||0<Kb(q,d);)c-=k,f=Q(c),q=f.multiply(b);Hb(f)&&(f=Eb);e=e.add(f);d=Ib(d,q)}return e}m.U=function(){return V(~this.e,~this.c)};m.$=function(a){return V(this.e&a.e,this.c&a.c)};m.ja=function(a){return V(this.e|a.e,this.c|a.c)};function Mb(a,b){return V(a.e^b.e,a.c^b.c)}m.shiftLeft=function(a){a&=63;if(0==a)return this;var b=this.e;return 32>a?V(b<<a,this.c<<a|b>>>32-a):V(0,b<<a-32)};function Lb(a,b){b&=63;if(0==b)return a;var c=a.c;return 32>b?V(a.e>>>b|c<<32-b,c>>b):V(c>>b-32,0<=c?0:-1)};function Nb(){this.k=0}o(Nb,xb);function X(a){g(new ga("Error deserializing incorrectly formated message, "+a))}function yb(a,b){for(var c=xa(b.I()),d=[],e=0,k=0;k<c.length;k++){var f=c[k];if(z(b,f.j)){var q=0;do{var s=a.ga(f,b.get(f,q));d.push(s);e+=s.byteLength;q++}while(f.B&&q<Aa(b,f.j))}}c=new Uint8Array(e);for(k=e=0;k<d.length;k++)f=d[k],c.set(new Uint8Array(f),e),e+=f.byteLength;return c}
Nb.prototype.ga=function(a,b){var c=a.i,d=Ob[c],e=Pb(Q(a.j<<3|d)),k;switch(d){case Y:var f=Q(b);if(c==ta||17==c)f=Mb(f.shiftLeft(1),Lb(f,63));k=Pb(f);break;case Qb:f=new ArrayBuffer(8);c=new DataView(f);switch(a.i){case 1:c.setFloat64(0,b,i);break;case ra:k=Q(b);c.setUint32(0,Jb(k),i);c.setUint32(4,k.c,i);break;case sa:k=Q(b);c.setUint32(0,Jb(k),i);c.setInt32(4,k.c,i);break;default:X("Unexpected field type")}k=new Uint8Array(f);break;case Rb:switch(a.i){case 11:f=yb(this,b);break;case 9:case 12:f=
TextEncoder("utf-8").encode(b);break;default:X("Unexpected field type")}k=f.length;c=Pb(Q(k));k=new Uint8Array(c.length+k);k.set(c,0);k.set(f,c.length);break;case Sb:X("Use of Groups deprecated and not supported");break;case Tb:f=new ArrayBuffer(4);c=new DataView(f);switch(a.i){case 2:c.setFloat32(0,b,i);break;case 7:c.setUint32(0,b,i);break;case 15:c.setInt32(0,b,i);break;default:X("Unexpected field type")}k=new Uint8Array(f);break;default:X("Unexpected wire type")}f=new Uint8Array(e.length+k.length);
f.set(new Uint8Array(e),0);f.set(new Uint8Array(k),e.length);return f};function Pb(a){function b(a){var d=Q(128),d=Ib(a,W(a,d).multiply(d)).e,e=Q(127);0<Kb(a,e)?(d+=128,a=b(Lb(a,7)),a.unshift(d)):a=[d];return a}a=b(a);return new Uint8Array(a)}
function Ub(a,b,c){var d=b.I();for(a.k=0;a.k<c.length;){var e=Vb(a,c),k=d.o[parseInt(e>>3,10)]||j,f=a,q=e%8,s=k,e=c,r=h;switch(q){case Y:e=Vb(f,e);if(s){f=h;switch(s.i){case pa:case qa:f=e.toString();break;case 5:case 13:case 14:f=e;break;case 17:e=Q(e);f=Mb(Lb(e,1),e.shiftLeft(63)).e;break;case ta:e=Q(e);f=Mb(Lb(e,1),e.shiftLeft(63)).toString();break;case 8:f=0===f?l:i;break;default:X("Unexpected field type")}r=f}else r=j;break;case Rb:q=e;e=Vb(f,q);q=new Uint8Array(q.buffer,q.byteOffset+f.k,e);
f.k+=e;if(s){e=h;switch(s.i){case 9:case 12:e=TextDecoder("utf-8").decode(q);break;case 11:e=q;f=new Nb;s=new s.ia.t.Ga;Ub(f,s,e);e=s;break;default:X("Unexpected field type")}r=e}else r=j;break;case Tb:e=new DataView(e.buffer,f.k,4);f.k+=4;if(s){f=h;switch(s.i){case 2:f=e.getFloat32(0,i);break;case 7:f=e.getUint32(0,i);break;case 15:f=e.getInt32(0,i);break;default:X("Unexpected field type")}r=f}else r=j;break;case Qb:e=new DataView(e.buffer,f.k,8);f.k+=8;if(s){f=h;switch(s.i){case 1:f=e.getFloat64(0,
i);break;case ra:f=(new zb(e.getUint32(0,i),e.getUint32(4,i))).toString();break;case sa:f=(new zb(e.getUint32(0,i),e.getInt32(4,i))).toString();break;default:X("Unexpected field type")}r=f}else r=j;break;default:X("Unexpected wire type of "+q)}e=r;k!=j&&e!=j&&(k.B?b.add(k,e):b.set(k,e))}}function Vb(a,b){var c=b[a.k++];if(127<c)var c=c-128,d=Vb(a,b),c=c+(d<<7);return c}var Y=0,Qb=1,Rb=2,Sb=3,Tb=5,Ob=[-1,Qb,Tb,Y,Y,Y,Qb,Tb,Y,Rb,Sb,Rb,Rb,Y,Y,Tb,Qb,Y,Y];function Z(a){this.wa=a||"Welcome-rdb";this.D={};this.Ha=1;ka=this}Z.prototype.close=function(){};Z.prototype.L=function(a,b){var c=a.ca();c.pa((this.Ha++).toString());this.D[c.u()]=b;var c=yb(new Nb,c),d=c.byteLength,e=new Uint8Array(d+4);(new DataView(e.buffer)).setInt32(0,d,i);e.set(c,4);this.ma(e.buffer)};Z.prototype.run=Z.prototype.L;
function Wb(a,b){(new DataView(b.buffer)).getUint32(0,i)!==b.length-4&&g("message is wrong length");try{var c=new ab;Ub(new Nb,c,new Uint8Array(b.buffer,4));var d=y(c,1),e=a.D[c.u()];switch(d){case 101:g("Broken client");case 103:g("Runtime error");case 102:g("bad query");case 0:delete a.D[c.u()];e&&e();break;case 3:delete a.D[c.u()];if(e){var k=za(c,c.o[3]);k==j||n(k);var f=(k||[]).map(JSON.parse);e(f)}break;case 1:delete a.D[c.u()];if(e){var q=JSON.parse(y(c,3,0));e(q)}break;case 2:g("partial results not yet implemented");
default:g("unknown response status code")}}catch(s){g(s)}};function $(a,b,c){Z.call(this,j);this.v=j;this.wc=0;this.s=j;var d=this;d.s=j;var e;e=a?n(a)?a:[a]:["localhost"];var k=require("net");(function q(){var a=e.shift();if(a){var r;"string"===typeof a?(r=a,a=12346):(r=a.host||"localhost",a=a.port||12346);var v=k.connect(a,r,function(){v.write("35ba61af","hex");v.on("data",ea(d.Pa,d));d.s=v;b&&b(d)});v.on("error",q)}else c&&c()})()}o($,Z);fa("rethinkdb.net.TcpConnection",$);
$.prototype.ma=function(a){this.s||g("Connection not open");for(var b=new Buffer(a.byteLength),c=new Uint8Array(a),d=0;d<a.byteLength;d++)b[d]=c[d];this.s.write(b)};
$.prototype.Pa=function(a){for(var a=new Uint8Array(a),b=0,c=a.byteLength;0<c;){if(this.v===j){var d=(new DataView(a.buffer,b,c)).getUint32(0,i);this.v=new Uint8Array(d+4);this.F=0}var d=this.v.byteLength-this.F,e=c<d?c:d,k=new Uint8Array(a.buffer,b,e);this.v.set(k,this.F);this.F+=e;b+=e;c-=e;d-=e;0>=d&&(d=this.v,this.v=j,this.F=0,Wb(this,d))}};$.prototype.close=function(){this.s||g("Connection not open");this.s.end();this.s=j};$.prototype.close=$.prototype.close;function Xb(a,b,c){Z.call(this,j);this.A="";var d=this,e;e=a?n(a)?a:[a]:["localhost"];(function f(){var a=e.shift();if(a){var s;"string"===typeof a?(s=a,a=13457):(s=a.host||"localhost",a=a.port||13457);var r="http://"+s+":"+a,v=new XMLHttpRequest;v.responseType="arraybuffer";v.open("GET",r+"/open-new-connection",i);v.onreadystatechange=function(){if(v.readyState===4)if(v.status===200){d.A=r;d.Q=(new DataView(v.response)).getInt32(0,i);b&&b(d)}else f()};v.send()}else c&&c()})()}o(Xb,Z);
fa("rethinkdb.net.HttpConnection",Xb);Xb.prototype.ma=function(a){this.A||g("Connection not open");var b=new XMLHttpRequest;b.responseType="arraybuffer";b.open("POST",this.A+"/?conn_id="+this.Q,i);var c=this;b.onreadystatechange=function(){4===b.readyState&&200===b.status&&Wb(c,new Uint8Array(b.response))};b.send(a)};Xb.prototype.close=function(){this.A||g("Connection not open");var a=new XMLHttpRequest;a.open("POST",this.A+"/close-connection?conn_id="+this.Q,i);a.send();this.A=this.Q=j};
Xb.prototype.close=Xb.prototype.close;fa("rethinkdb.net.connect",function(a,b,c){return"undefined"!==typeof require&&require("net")?new $(a,b,c):new Xb(a,b,c)});var ka=j;fa("rethinkdb.net.last_connection",ka);function t(a,b){this.sa=b||j;this.C=a}o(t,O);t.prototype.compile=function(){var a=new D;a.b(13);var b=new Fa,c=new C;c.na(this.sa||ka.wa);w(c,2,this.C);b.n(c);w(a,15,b);return a};function Yb(a,b){this.Z=a;this.Ca=new ia(b)}o(Yb,O);Yb.prototype.compile=function(){var a=this.Z.compile(),b=y(a,15).p(),a=new J;a.n(b);a.w("id");a.N(this.Ca.compile());b=new D;b.b(12);w(b,14,a);return b};t.prototype.get=function(a){return new Yb(this,a)};t.prototype.get=t.prototype.get;
function Zb(a,b){this.Z=a;n(b)||(b=[b]);this.ea=b}o(Zb,ja);Zb.prototype.ca=function(){var a=this.Z.compile(),b=y(a,15).p(),a=new Ta;a.n(b);for(b=0;b<this.ea.length;b++){var c=(new ia(this.ea[b])).compile();ya(a,2,c)}b=new M;b.b(4);w(b,5,a);a=new u;a.b(2);w(a,4,b);return a};t.prototype.Ba=function(a){return new Zb(this,a)};t.prototype.insert=t.prototype.Ba;"undefined"!==typeof exports&&("undefined"!==typeof module&&module.exports?exports=module.exports=aa.rethinkdb:exports.rethinkdb=aa.rethinkdb);
}).call(this);
