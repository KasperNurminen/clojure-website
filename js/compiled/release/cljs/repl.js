// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__21179){
var map__21180 = p__21179;
var map__21180__$1 = ((((!((map__21180 == null)))?(((((map__21180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21180):map__21180);
var m = map__21180__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21180__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21180__$1,cljs.core.cst$kw$name);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m))){
var seq__21182_21204 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__21183_21205 = null;
var count__21184_21206 = (0);
var i__21185_21207 = (0);
while(true){
if((i__21185_21207 < count__21184_21206)){
var f_21208 = chunk__21183_21205.cljs$core$IIndexed$_nth$arity$2(null,i__21185_21207);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21208], 0));


var G__21209 = seq__21182_21204;
var G__21210 = chunk__21183_21205;
var G__21211 = count__21184_21206;
var G__21212 = (i__21185_21207 + (1));
seq__21182_21204 = G__21209;
chunk__21183_21205 = G__21210;
count__21184_21206 = G__21211;
i__21185_21207 = G__21212;
continue;
} else {
var temp__4657__auto___21213 = cljs.core.seq(seq__21182_21204);
if(temp__4657__auto___21213){
var seq__21182_21214__$1 = temp__4657__auto___21213;
if(cljs.core.chunked_seq_QMARK_(seq__21182_21214__$1)){
var c__4319__auto___21215 = cljs.core.chunk_first(seq__21182_21214__$1);
var G__21216 = cljs.core.chunk_rest(seq__21182_21214__$1);
var G__21217 = c__4319__auto___21215;
var G__21218 = cljs.core.count(c__4319__auto___21215);
var G__21219 = (0);
seq__21182_21204 = G__21216;
chunk__21183_21205 = G__21217;
count__21184_21206 = G__21218;
i__21185_21207 = G__21219;
continue;
} else {
var f_21220 = cljs.core.first(seq__21182_21214__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21220], 0));


var G__21221 = cljs.core.next(seq__21182_21214__$1);
var G__21222 = null;
var G__21223 = (0);
var G__21224 = (0);
seq__21182_21204 = G__21221;
chunk__21183_21205 = G__21222;
count__21184_21206 = G__21223;
i__21185_21207 = G__21224;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21225 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_21225], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_21225)))?cljs.core.second(arglists_21225):arglists_21225)], 0));
}
} else {
}
}

if(cljs.core.truth_(cljs.core.cst$kw$special_DASH_form.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,cljs.core.cst$kw$url)){
if(cljs.core.truth_(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
var seq__21186_21226 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__21187_21227 = null;
var count__21188_21228 = (0);
var i__21189_21229 = (0);
while(true){
if((i__21189_21229 < count__21188_21228)){
var vec__21190_21230 = chunk__21187_21227.cljs$core$IIndexed$_nth$arity$2(null,i__21189_21229);
var name_21231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21190_21230,(0),null);
var map__21193_21232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21190_21230,(1),null);
var map__21193_21233__$1 = ((((!((map__21193_21232 == null)))?(((((map__21193_21232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21193_21232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21193_21232):map__21193_21232);
var doc_21234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21193_21233__$1,cljs.core.cst$kw$doc);
var arglists_21235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21193_21233__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21231], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21235], 0));

if(cljs.core.truth_(doc_21234)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21234], 0));
} else {
}


var G__21236 = seq__21186_21226;
var G__21237 = chunk__21187_21227;
var G__21238 = count__21188_21228;
var G__21239 = (i__21189_21229 + (1));
seq__21186_21226 = G__21236;
chunk__21187_21227 = G__21237;
count__21188_21228 = G__21238;
i__21189_21229 = G__21239;
continue;
} else {
var temp__4657__auto___21240 = cljs.core.seq(seq__21186_21226);
if(temp__4657__auto___21240){
var seq__21186_21241__$1 = temp__4657__auto___21240;
if(cljs.core.chunked_seq_QMARK_(seq__21186_21241__$1)){
var c__4319__auto___21242 = cljs.core.chunk_first(seq__21186_21241__$1);
var G__21243 = cljs.core.chunk_rest(seq__21186_21241__$1);
var G__21244 = c__4319__auto___21242;
var G__21245 = cljs.core.count(c__4319__auto___21242);
var G__21246 = (0);
seq__21186_21226 = G__21243;
chunk__21187_21227 = G__21244;
count__21188_21228 = G__21245;
i__21189_21229 = G__21246;
continue;
} else {
var vec__21195_21247 = cljs.core.first(seq__21186_21241__$1);
var name_21248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21195_21247,(0),null);
var map__21198_21249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21195_21247,(1),null);
var map__21198_21250__$1 = ((((!((map__21198_21249 == null)))?(((((map__21198_21249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21198_21249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21198_21249):map__21198_21249);
var doc_21251 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21198_21250__$1,cljs.core.cst$kw$doc);
var arglists_21252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21198_21250__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21248], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21252], 0));

if(cljs.core.truth_(doc_21251)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21251], 0));
} else {
}


var G__21253 = cljs.core.next(seq__21186_21241__$1);
var G__21254 = null;
var G__21255 = (0);
var G__21256 = (0);
seq__21186_21226 = G__21253;
chunk__21187_21227 = G__21254;
count__21188_21228 = G__21255;
i__21189_21229 = G__21256;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__21200 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__21201 = null;
var count__21202 = (0);
var i__21203 = (0);
while(true){
if((i__21203 < count__21202)){
var role = chunk__21201.cljs$core$IIndexed$_nth$arity$2(null,i__21203);
var temp__4657__auto___21257__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___21257__$1)){
var spec_21258 = temp__4657__auto___21257__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_21258)], 0));
} else {
}


var G__21259 = seq__21200;
var G__21260 = chunk__21201;
var G__21261 = count__21202;
var G__21262 = (i__21203 + (1));
seq__21200 = G__21259;
chunk__21201 = G__21260;
count__21202 = G__21261;
i__21203 = G__21262;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq(seq__21200);
if(temp__4657__auto____$1){
var seq__21200__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__21200__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__21200__$1);
var G__21263 = cljs.core.chunk_rest(seq__21200__$1);
var G__21264 = c__4319__auto__;
var G__21265 = cljs.core.count(c__4319__auto__);
var G__21266 = (0);
seq__21200 = G__21263;
chunk__21201 = G__21264;
count__21202 = G__21265;
i__21203 = G__21266;
continue;
} else {
var role = cljs.core.first(seq__21200__$1);
var temp__4657__auto___21267__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___21267__$2)){
var spec_21268 = temp__4657__auto___21267__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_21268)], 0));
} else {
}


var G__21269 = cljs.core.next(seq__21200__$1);
var G__21270 = null;
var G__21271 = (0);
var G__21272 = (0);
seq__21200 = G__21269;
chunk__21201 = G__21270;
count__21202 = G__21271;
i__21203 = G__21272;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
