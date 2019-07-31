// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.with_meta(cljs.core.cst$sym$cached,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.spec.gen.alpha/LazyVar");
});

/**
 * Positional factory function for cljs.spec.gen.alpha/LazyVar.
 */
cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined'))){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19283 = arguments.length;
var i__4500__auto___19284 = (0);
while(true){
if((i__4500__auto___19284 < len__4499__auto___19283)){
args__4502__auto__.push((arguments[i__4500__auto___19284]));

var G__19285 = (i__4500__auto___19284 + (1));
i__4500__auto___19284 = G__19285;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq19282){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19282));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined'))){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19287 = arguments.length;
var i__4500__auto___19288 = (0);
while(true){
if((i__4500__auto___19288 < len__4499__auto___19287)){
args__4502__auto__.push((arguments[i__4500__auto___19288]));

var G__19289 = (i__4500__auto___19288 + (1));
i__4500__auto___19288 = G__19289;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq19286){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19286));
});

var g_QMARK__19293 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined'))){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_))," never required"].join('')));
}
}),null));
var g_19294 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__19293){
return (function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined'))){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate))," never required"].join('')));
}
});})(g_QMARK__19293))
,null));
var mkg_19295 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__19293,g_19294){
return (function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined'))){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator))," never required"].join('')));
}
});})(g_QMARK__19293,g_19294))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__19293,g_19294,mkg_19295){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
var fexpr__19290 = cljs.core.deref(g_QMARK__19293);
return (fexpr__19290.cljs$core$IFn$_invoke$arity$1 ? fexpr__19290.cljs$core$IFn$_invoke$arity$1(x) : fexpr__19290.call(null,x));
});})(g_QMARK__19293,g_19294,mkg_19295))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__19293,g_19294,mkg_19295){
return (function cljs$spec$gen$alpha$generator(gfn){
var fexpr__19291 = cljs.core.deref(mkg_19295);
return (fexpr__19291.cljs$core$IFn$_invoke$arity$1 ? fexpr__19291.cljs$core$IFn$_invoke$arity$1(gfn) : fexpr__19291.call(null,gfn));
});})(g_QMARK__19293,g_19294,mkg_19295))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__19293,g_19294,mkg_19295){
return (function cljs$spec$gen$alpha$generate(generator){
var fexpr__19292 = cljs.core.deref(g_19294);
return (fexpr__19292.cljs$core$IFn$_invoke$arity$1 ? fexpr__19292.cljs$core$IFn$_invoke$arity$1(generator) : fexpr__19292.call(null,generator));
});})(g_QMARK__19293,g_19294,mkg_19295))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator((function (rnd,size){
var fexpr__19296 = cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(gfnd));
return (fexpr__19296.cljs$core$IFn$_invoke$arity$2 ? fexpr__19296.cljs$core$IFn$_invoke$arity$2(rnd,size) : fexpr__19296.call(null,rnd,size));
}));
});
var g__19254__auto___19316 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined'))){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__19254__auto___19316){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19317 = arguments.length;
var i__4500__auto___19318 = (0);
while(true){
if((i__4500__auto___19318 < len__4499__auto___19317)){
args__4502__auto__.push((arguments[i__4500__auto___19318]));

var G__19319 = (i__4500__auto___19318 + (1));
i__4500__auto___19318 = G__19319;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19254__auto___19316))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19254__auto___19316){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__19254__auto___19316),args);
});})(g__19254__auto___19316))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__19254__auto___19316){
return (function (seq19297){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19297));
});})(g__19254__auto___19316))
;


var g__19254__auto___19320 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined'))){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__19254__auto___19320){
return (function cljs$spec$gen$alpha$list(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19321 = arguments.length;
var i__4500__auto___19322 = (0);
while(true){
if((i__4500__auto___19322 < len__4499__auto___19321)){
args__4502__auto__.push((arguments[i__4500__auto___19322]));

var G__19323 = (i__4500__auto___19322 + (1));
i__4500__auto___19322 = G__19323;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19254__auto___19320))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19254__auto___19320){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__19254__auto___19320),args);
});})(g__19254__auto___19320))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__19254__auto___19320){
return (function (seq19298){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19298));
});})(g__19254__auto___19320))
;


var g__19254__auto___19324 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined'))){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__19254__auto___19324){
return (function cljs$spec$gen$alpha$map(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19325 = arguments.length;
var i__4500__auto___19326 = (0);
while(true){
if((i__4500__auto___19326 < len__4499__auto___19325)){
args__4502__auto__.push((arguments[i__4500__auto___19326]));

var G__19327 = (i__4500__auto___19326 + (1));
i__4500__auto___19326 = G__19327;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19254__auto___19324))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19254__auto___19324){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__19254__auto___19324),args);
});})(g__19254__auto___19324))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__19254__auto___19324){
return (function (seq19299){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19299));
});})(g__19254__auto___19324))
;


var g__19254__auto___19328 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined'))){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__19254__auto___19328){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19329 = arguments.length;
var i__4500__auto___19330 = (0);
while(true){
if((i__4500__auto___19330 < len__4499__auto___19329)){
args__4502__auto__.push((arguments[i__4500__auto___19330]));

var G__19331 = (i__4500__auto___19330 + (1));
i__4500__auto___19330 = G__19331;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19254__auto___19328))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19254__auto___19328){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__19254__auto___19328),args);
});})(g__19254__auto___19328))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__19254__auto___19328){
return (function (seq19300){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19300));
});})(g__19254__auto___19328))
;


var g__19254__auto___19332 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined'))){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__19254__auto___19332){
return (function cljs$spec$gen$alpha$set(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19333 = arguments.length;
var i__4500__auto___19334 = (0);
while(true){
if((i__4500__auto___19334 < len__4499__auto___19333)){
args__4502__auto__.push((arguments[i__4500__auto___19334]));

var G__19335 = (i__4500__auto___19334 + (1));
i__4500__auto___19334 = G__19335;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19254__auto___19332))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19254__auto___19332){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__19254__auto___19332),args);
});})(g__19254__auto___19332))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__19254__auto___19332){
return (function (seq19301){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19301));
});})(g__19254__auto___19332))
;


var g__19254__auto___19336 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined'))){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__19254__auto___19336){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19337 = arguments.length;
var i__4500__auto___19338 = (0);
while(true){
if((i__4500__auto___19338 < len__4499__auto___19337)){
args__4502__auto__.push((arguments[i__4500__auto___19338]));

var G__19339 = (i__4500__auto___19338 + (1));
i__4500__auto___19338 = G__19339;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19254__auto___19336))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19254__auto___19336){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__19254__auto___19336),args);
});})(g__19254__auto___19336))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__19254__auto___19336){
return (function (seq19302){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19302));
});})(g__19254__auto___19336))
;


var g__19254__auto___19340 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined'))){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__19254__auto___19340){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19341 = arguments.length;
var i__4500__auto___19342 = (0);
while(true){
if((i__4500__auto___19342 < len__4499__auto___19341)){
args__4502__auto__.push((arguments[i__4500__auto___19342]));

var G__19343 = (i__4500__auto___19342 + (1));
i__4500__auto___19342 = G__19343;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19254__auto___19340))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19254__auto___19340){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__19254__auto___19340),args);
});})(g__19254__auto___19340))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__19254__auto___19340){
return (function (seq19303){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19303));
});})(g__19254__auto___19340))
;


var g__19254__auto___19344 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined'))){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__19254__auto___19344){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19345 = arguments.length;
var i__4500__auto___19346 = (0);
while(true){
if((i__4500__auto___19346 < len__4499__auto___19345)){
args__4502__auto__.push((arguments[i__4500__auto___19346]));

var G__19347 = (i__4500__auto___19346 + (1));
i__4500__auto___19346 = G__19347;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19254__auto___19344))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19254__auto___19344){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__19254__auto___19344),args);
});})(g__19254__auto___19344))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__19254__auto___19344){
return (function (seq19304){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19304));
});})(g__19254__auto___19344))
;


var g__19254__auto___19348 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined'))){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__19254__auto___19348){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19349 = arguments.length;
var i__4500__auto___19350 = (0);
while(true){
if((i__4500__auto___19350 < len__4499__auto___19349)){
args__4502__auto__.push((arguments[i__4500__auto___19350]));

var G__19351 = (i__4500__auto___19350 + (1));
i__4500__auto___19350 = G__19351;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19254__auto___19348))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19254__auto___19348){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__19254__auto___19348),args);
});})(g__19254__auto___19348))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__19254__auto___19348){
return (function (seq19305){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19305));
});})(g__19254__auto___19348))
;


var g__19254__auto___19352 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined'))){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__19254__auto___19352){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19353 = arguments.length;
var i__4500__auto___19354 = (0);
while(true){
if((i__4500__auto___19354 < len__4499__auto___19353)){
args__4502__auto__.push((arguments[i__4500__auto___19354]));

var G__19355 = (i__4500__auto___19354 + (1));
i__4500__auto___19354 = G__19355;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19254__auto___19352))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19254__auto___19352){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__19254__auto___19352),args);
});})(g__19254__auto___19352))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__19254__auto___19352){
return (function (seq19306){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19306));
});})(g__19254__auto___19352))
;


var g__19254__auto___19356 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined'))){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__19254__auto___19356){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19357 = arguments.length;
var i__4500__auto___19358 = (0);
while(true){
if((i__4500__auto___19358 < len__4499__auto___19357)){
args__4502__auto__.push((arguments[i__4500__auto___19358]));

var G__19359 = (i__4500__auto___19358 + (1));
i__4500__auto___19358 = G__19359;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19254__auto___19356))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19254__auto___19356){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__19254__auto___19356),args);
});})(g__19254__auto___19356))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__19254__auto___19356){
return (function (seq19307){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19307));
});})(g__19254__auto___19356))
;


var g__19254__auto___19360 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined'))){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__19254__auto___19360){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19361 = arguments.length;
var i__4500__auto___19362 = (0);
while(true){
if((i__4500__auto___19362 < len__4499__auto___19361)){
args__4502__auto__.push((arguments[i__4500__auto___19362]));

var G__19363 = (i__4500__auto___19362 + (1));
i__4500__auto___19362 = G__19363;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19254__auto___19360))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19254__auto___19360){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__19254__auto___19360),args);
});})(g__19254__auto___19360))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__19254__auto___19360){
return (function (seq19308){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19308));
});})(g__19254__auto___19360))
;


var g__19254__auto___19364 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined'))){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__19254__auto___19364){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19365 = arguments.length;
var i__4500__auto___19366 = (0);
while(true){
if((i__4500__auto___19366 < len__4499__auto___19365)){
args__4502__auto__.push((arguments[i__4500__auto___19366]));

var G__19367 = (i__4500__auto___19366 + (1));
i__4500__auto___19366 = G__19367;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19254__auto___19364))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19254__auto___19364){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__19254__auto___19364),args);
});})(g__19254__auto___19364))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__19254__auto___19364){
return (function (seq19309){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19309));
});})(g__19254__auto___19364))
;


var g__19254__auto___19368 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined'))){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__19254__auto___19368){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19369 = arguments.length;
var i__4500__auto___19370 = (0);
while(true){
if((i__4500__auto___19370 < len__4499__auto___19369)){
args__4502__auto__.push((arguments[i__4500__auto___19370]));

var G__19371 = (i__4500__auto___19370 + (1));
i__4500__auto___19370 = G__19371;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19254__auto___19368))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19254__auto___19368){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__19254__auto___19368),args);
});})(g__19254__auto___19368))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__19254__auto___19368){
return (function (seq19310){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19310));
});})(g__19254__auto___19368))
;


var g__19254__auto___19372 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined'))){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__19254__auto___19372){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19373 = arguments.length;
var i__4500__auto___19374 = (0);
while(true){
if((i__4500__auto___19374 < len__4499__auto___19373)){
args__4502__auto__.push((arguments[i__4500__auto___19374]));

var G__19375 = (i__4500__auto___19374 + (1));
i__4500__auto___19374 = G__19375;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19254__auto___19372))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19254__auto___19372){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__19254__auto___19372),args);
});})(g__19254__auto___19372))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__19254__auto___19372){
return (function (seq19311){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19311));
});})(g__19254__auto___19372))
;


var g__19254__auto___19376 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined'))){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__19254__auto___19376){
return (function cljs$spec$gen$alpha$return(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19377 = arguments.length;
var i__4500__auto___19378 = (0);
while(true){
if((i__4500__auto___19378 < len__4499__auto___19377)){
args__4502__auto__.push((arguments[i__4500__auto___19378]));

var G__19379 = (i__4500__auto___19378 + (1));
i__4500__auto___19378 = G__19379;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19254__auto___19376))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19254__auto___19376){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__19254__auto___19376),args);
});})(g__19254__auto___19376))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__19254__auto___19376){
return (function (seq19312){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19312));
});})(g__19254__auto___19376))
;


var g__19254__auto___19380 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined'))){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__19254__auto___19380){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19381 = arguments.length;
var i__4500__auto___19382 = (0);
while(true){
if((i__4500__auto___19382 < len__4499__auto___19381)){
args__4502__auto__.push((arguments[i__4500__auto___19382]));

var G__19383 = (i__4500__auto___19382 + (1));
i__4500__auto___19382 = G__19383;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19254__auto___19380))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19254__auto___19380){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__19254__auto___19380),args);
});})(g__19254__auto___19380))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__19254__auto___19380){
return (function (seq19313){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19313));
});})(g__19254__auto___19380))
;


var g__19254__auto___19384 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined'))){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__19254__auto___19384){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19385 = arguments.length;
var i__4500__auto___19386 = (0);
while(true){
if((i__4500__auto___19386 < len__4499__auto___19385)){
args__4502__auto__.push((arguments[i__4500__auto___19386]));

var G__19387 = (i__4500__auto___19386 + (1));
i__4500__auto___19386 = G__19387;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19254__auto___19384))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19254__auto___19384){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__19254__auto___19384),args);
});})(g__19254__auto___19384))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__19254__auto___19384){
return (function (seq19314){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19314));
});})(g__19254__auto___19384))
;


var g__19254__auto___19388 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined'))){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__19254__auto___19388){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19389 = arguments.length;
var i__4500__auto___19390 = (0);
while(true){
if((i__4500__auto___19390 < len__4499__auto___19389)){
args__4502__auto__.push((arguments[i__4500__auto___19390]));

var G__19391 = (i__4500__auto___19390 + (1));
i__4500__auto___19390 = G__19391;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19254__auto___19388))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19254__auto___19388){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__19254__auto___19388),args);
});})(g__19254__auto___19388))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__19254__auto___19388){
return (function (seq19315){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19315));
});})(g__19254__auto___19388))
;

var g__19267__auto___19413 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined'))){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__19267__auto___19413){
return (function cljs$spec$gen$alpha$any(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19414 = arguments.length;
var i__4500__auto___19415 = (0);
while(true){
if((i__4500__auto___19415 < len__4499__auto___19414)){
args__4502__auto__.push((arguments[i__4500__auto___19415]));

var G__19416 = (i__4500__auto___19415 + (1));
i__4500__auto___19415 = G__19416;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19267__auto___19413))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19267__auto___19413){
return (function (args){
return cljs.core.deref(g__19267__auto___19413);
});})(g__19267__auto___19413))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__19267__auto___19413){
return (function (seq19392){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19392));
});})(g__19267__auto___19413))
;


var g__19267__auto___19417 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined'))){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__19267__auto___19417){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19418 = arguments.length;
var i__4500__auto___19419 = (0);
while(true){
if((i__4500__auto___19419 < len__4499__auto___19418)){
args__4502__auto__.push((arguments[i__4500__auto___19419]));

var G__19420 = (i__4500__auto___19419 + (1));
i__4500__auto___19419 = G__19420;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19267__auto___19417))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19267__auto___19417){
return (function (args){
return cljs.core.deref(g__19267__auto___19417);
});})(g__19267__auto___19417))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__19267__auto___19417){
return (function (seq19393){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19393));
});})(g__19267__auto___19417))
;


var g__19267__auto___19421 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined'))){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__19267__auto___19421){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19422 = arguments.length;
var i__4500__auto___19423 = (0);
while(true){
if((i__4500__auto___19423 < len__4499__auto___19422)){
args__4502__auto__.push((arguments[i__4500__auto___19423]));

var G__19424 = (i__4500__auto___19423 + (1));
i__4500__auto___19423 = G__19424;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19267__auto___19421))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19267__auto___19421){
return (function (args){
return cljs.core.deref(g__19267__auto___19421);
});})(g__19267__auto___19421))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__19267__auto___19421){
return (function (seq19394){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19394));
});})(g__19267__auto___19421))
;


var g__19267__auto___19425 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined'))){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__19267__auto___19425){
return (function cljs$spec$gen$alpha$char(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19426 = arguments.length;
var i__4500__auto___19427 = (0);
while(true){
if((i__4500__auto___19427 < len__4499__auto___19426)){
args__4502__auto__.push((arguments[i__4500__auto___19427]));

var G__19428 = (i__4500__auto___19427 + (1));
i__4500__auto___19427 = G__19428;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19267__auto___19425))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19267__auto___19425){
return (function (args){
return cljs.core.deref(g__19267__auto___19425);
});})(g__19267__auto___19425))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__19267__auto___19425){
return (function (seq19395){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19395));
});})(g__19267__auto___19425))
;


var g__19267__auto___19429 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined'))){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__19267__auto___19429){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19430 = arguments.length;
var i__4500__auto___19431 = (0);
while(true){
if((i__4500__auto___19431 < len__4499__auto___19430)){
args__4502__auto__.push((arguments[i__4500__auto___19431]));

var G__19432 = (i__4500__auto___19431 + (1));
i__4500__auto___19431 = G__19432;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19267__auto___19429))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19267__auto___19429){
return (function (args){
return cljs.core.deref(g__19267__auto___19429);
});})(g__19267__auto___19429))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__19267__auto___19429){
return (function (seq19396){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19396));
});})(g__19267__auto___19429))
;


var g__19267__auto___19433 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined'))){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__19267__auto___19433){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19434 = arguments.length;
var i__4500__auto___19435 = (0);
while(true){
if((i__4500__auto___19435 < len__4499__auto___19434)){
args__4502__auto__.push((arguments[i__4500__auto___19435]));

var G__19436 = (i__4500__auto___19435 + (1));
i__4500__auto___19435 = G__19436;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19267__auto___19433))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19267__auto___19433){
return (function (args){
return cljs.core.deref(g__19267__auto___19433);
});})(g__19267__auto___19433))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__19267__auto___19433){
return (function (seq19397){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19397));
});})(g__19267__auto___19433))
;


var g__19267__auto___19437 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined'))){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__19267__auto___19437){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19438 = arguments.length;
var i__4500__auto___19439 = (0);
while(true){
if((i__4500__auto___19439 < len__4499__auto___19438)){
args__4502__auto__.push((arguments[i__4500__auto___19439]));

var G__19440 = (i__4500__auto___19439 + (1));
i__4500__auto___19439 = G__19440;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19267__auto___19437))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19267__auto___19437){
return (function (args){
return cljs.core.deref(g__19267__auto___19437);
});})(g__19267__auto___19437))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__19267__auto___19437){
return (function (seq19398){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19398));
});})(g__19267__auto___19437))
;


var g__19267__auto___19441 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined'))){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__19267__auto___19441){
return (function cljs$spec$gen$alpha$double(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19442 = arguments.length;
var i__4500__auto___19443 = (0);
while(true){
if((i__4500__auto___19443 < len__4499__auto___19442)){
args__4502__auto__.push((arguments[i__4500__auto___19443]));

var G__19444 = (i__4500__auto___19443 + (1));
i__4500__auto___19443 = G__19444;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19267__auto___19441))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19267__auto___19441){
return (function (args){
return cljs.core.deref(g__19267__auto___19441);
});})(g__19267__auto___19441))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__19267__auto___19441){
return (function (seq19399){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19399));
});})(g__19267__auto___19441))
;


var g__19267__auto___19445 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined'))){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__19267__auto___19445){
return (function cljs$spec$gen$alpha$int(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19446 = arguments.length;
var i__4500__auto___19447 = (0);
while(true){
if((i__4500__auto___19447 < len__4499__auto___19446)){
args__4502__auto__.push((arguments[i__4500__auto___19447]));

var G__19448 = (i__4500__auto___19447 + (1));
i__4500__auto___19447 = G__19448;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19267__auto___19445))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19267__auto___19445){
return (function (args){
return cljs.core.deref(g__19267__auto___19445);
});})(g__19267__auto___19445))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__19267__auto___19445){
return (function (seq19400){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19400));
});})(g__19267__auto___19445))
;


var g__19267__auto___19449 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined'))){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__19267__auto___19449){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19450 = arguments.length;
var i__4500__auto___19451 = (0);
while(true){
if((i__4500__auto___19451 < len__4499__auto___19450)){
args__4502__auto__.push((arguments[i__4500__auto___19451]));

var G__19452 = (i__4500__auto___19451 + (1));
i__4500__auto___19451 = G__19452;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19267__auto___19449))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19267__auto___19449){
return (function (args){
return cljs.core.deref(g__19267__auto___19449);
});})(g__19267__auto___19449))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__19267__auto___19449){
return (function (seq19401){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19401));
});})(g__19267__auto___19449))
;


var g__19267__auto___19453 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined'))){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__19267__auto___19453){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19454 = arguments.length;
var i__4500__auto___19455 = (0);
while(true){
if((i__4500__auto___19455 < len__4499__auto___19454)){
args__4502__auto__.push((arguments[i__4500__auto___19455]));

var G__19456 = (i__4500__auto___19455 + (1));
i__4500__auto___19455 = G__19456;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19267__auto___19453))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19267__auto___19453){
return (function (args){
return cljs.core.deref(g__19267__auto___19453);
});})(g__19267__auto___19453))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__19267__auto___19453){
return (function (seq19402){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19402));
});})(g__19267__auto___19453))
;


var g__19267__auto___19457 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined'))){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__19267__auto___19457){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19458 = arguments.length;
var i__4500__auto___19459 = (0);
while(true){
if((i__4500__auto___19459 < len__4499__auto___19458)){
args__4502__auto__.push((arguments[i__4500__auto___19459]));

var G__19460 = (i__4500__auto___19459 + (1));
i__4500__auto___19459 = G__19460;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19267__auto___19457))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19267__auto___19457){
return (function (args){
return cljs.core.deref(g__19267__auto___19457);
});})(g__19267__auto___19457))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__19267__auto___19457){
return (function (seq19403){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19403));
});})(g__19267__auto___19457))
;


var g__19267__auto___19461 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined'))){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__19267__auto___19461){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19462 = arguments.length;
var i__4500__auto___19463 = (0);
while(true){
if((i__4500__auto___19463 < len__4499__auto___19462)){
args__4502__auto__.push((arguments[i__4500__auto___19463]));

var G__19464 = (i__4500__auto___19463 + (1));
i__4500__auto___19463 = G__19464;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19267__auto___19461))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19267__auto___19461){
return (function (args){
return cljs.core.deref(g__19267__auto___19461);
});})(g__19267__auto___19461))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__19267__auto___19461){
return (function (seq19404){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19404));
});})(g__19267__auto___19461))
;


var g__19267__auto___19465 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined'))){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__19267__auto___19465){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19466 = arguments.length;
var i__4500__auto___19467 = (0);
while(true){
if((i__4500__auto___19467 < len__4499__auto___19466)){
args__4502__auto__.push((arguments[i__4500__auto___19467]));

var G__19468 = (i__4500__auto___19467 + (1));
i__4500__auto___19467 = G__19468;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19267__auto___19465))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19267__auto___19465){
return (function (args){
return cljs.core.deref(g__19267__auto___19465);
});})(g__19267__auto___19465))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__19267__auto___19465){
return (function (seq19405){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19405));
});})(g__19267__auto___19465))
;


var g__19267__auto___19469 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined'))){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__19267__auto___19469){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19470 = arguments.length;
var i__4500__auto___19471 = (0);
while(true){
if((i__4500__auto___19471 < len__4499__auto___19470)){
args__4502__auto__.push((arguments[i__4500__auto___19471]));

var G__19472 = (i__4500__auto___19471 + (1));
i__4500__auto___19471 = G__19472;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19267__auto___19469))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19267__auto___19469){
return (function (args){
return cljs.core.deref(g__19267__auto___19469);
});})(g__19267__auto___19469))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__19267__auto___19469){
return (function (seq19406){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19406));
});})(g__19267__auto___19469))
;


var g__19267__auto___19473 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined'))){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__19267__auto___19473){
return (function cljs$spec$gen$alpha$string(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19474 = arguments.length;
var i__4500__auto___19475 = (0);
while(true){
if((i__4500__auto___19475 < len__4499__auto___19474)){
args__4502__auto__.push((arguments[i__4500__auto___19475]));

var G__19476 = (i__4500__auto___19475 + (1));
i__4500__auto___19475 = G__19476;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19267__auto___19473))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19267__auto___19473){
return (function (args){
return cljs.core.deref(g__19267__auto___19473);
});})(g__19267__auto___19473))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__19267__auto___19473){
return (function (seq19407){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19407));
});})(g__19267__auto___19473))
;


var g__19267__auto___19477 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined'))){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__19267__auto___19477){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19478 = arguments.length;
var i__4500__auto___19479 = (0);
while(true){
if((i__4500__auto___19479 < len__4499__auto___19478)){
args__4502__auto__.push((arguments[i__4500__auto___19479]));

var G__19480 = (i__4500__auto___19479 + (1));
i__4500__auto___19479 = G__19480;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19267__auto___19477))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19267__auto___19477){
return (function (args){
return cljs.core.deref(g__19267__auto___19477);
});})(g__19267__auto___19477))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__19267__auto___19477){
return (function (seq19408){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19408));
});})(g__19267__auto___19477))
;


var g__19267__auto___19481 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined'))){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__19267__auto___19481){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19482 = arguments.length;
var i__4500__auto___19483 = (0);
while(true){
if((i__4500__auto___19483 < len__4499__auto___19482)){
args__4502__auto__.push((arguments[i__4500__auto___19483]));

var G__19484 = (i__4500__auto___19483 + (1));
i__4500__auto___19483 = G__19484;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19267__auto___19481))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19267__auto___19481){
return (function (args){
return cljs.core.deref(g__19267__auto___19481);
});})(g__19267__auto___19481))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__19267__auto___19481){
return (function (seq19409){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19409));
});})(g__19267__auto___19481))
;


var g__19267__auto___19485 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined'))){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__19267__auto___19485){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19486 = arguments.length;
var i__4500__auto___19487 = (0);
while(true){
if((i__4500__auto___19487 < len__4499__auto___19486)){
args__4502__auto__.push((arguments[i__4500__auto___19487]));

var G__19488 = (i__4500__auto___19487 + (1));
i__4500__auto___19487 = G__19488;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19267__auto___19485))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19267__auto___19485){
return (function (args){
return cljs.core.deref(g__19267__auto___19485);
});})(g__19267__auto___19485))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__19267__auto___19485){
return (function (seq19410){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19410));
});})(g__19267__auto___19485))
;


var g__19267__auto___19489 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined'))){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__19267__auto___19489){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19490 = arguments.length;
var i__4500__auto___19491 = (0);
while(true){
if((i__4500__auto___19491 < len__4499__auto___19490)){
args__4502__auto__.push((arguments[i__4500__auto___19491]));

var G__19492 = (i__4500__auto___19491 + (1));
i__4500__auto___19491 = G__19492;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19267__auto___19489))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19267__auto___19489){
return (function (args){
return cljs.core.deref(g__19267__auto___19489);
});})(g__19267__auto___19489))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__19267__auto___19489){
return (function (seq19411){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19411));
});})(g__19267__auto___19489))
;


var g__19267__auto___19493 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined'))){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__19267__auto___19493){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19494 = arguments.length;
var i__4500__auto___19495 = (0);
while(true){
if((i__4500__auto___19495 < len__4499__auto___19494)){
args__4502__auto__.push((arguments[i__4500__auto___19495]));

var G__19496 = (i__4500__auto___19495 + (1));
i__4500__auto___19495 = G__19496;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19267__auto___19493))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19267__auto___19493){
return (function (args){
return cljs.core.deref(g__19267__auto___19493);
});})(g__19267__auto___19493))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__19267__auto___19493){
return (function (seq19412){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19412));
});})(g__19267__auto___19493))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19499 = arguments.length;
var i__4500__auto___19500 = (0);
while(true){
if((i__4500__auto___19500 < len__4499__auto___19499)){
args__4502__auto__.push((arguments[i__4500__auto___19500]));

var G__19501 = (i__4500__auto___19500 + (1));
i__4500__auto___19500 = G__19501;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__19497_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__19497_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,gens)], 0));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq19498){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19498));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace(ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns()], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.any_printable()], null)], 0)),cljs.spec.gen.alpha.boolean$(),cljs.spec.gen.alpha.char$(),cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (simple){
return (function (p1__19502_SHARP_){
return (new Date(p1__19502_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer()], 0)),cljs.spec.gen.alpha.symbol(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)], 0)),cljs.spec.gen.alpha.string_alphanumeric(),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0)),cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max,(-1)], null)], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0))], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(0)], null)], 0)),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(1)], null)], 0)),cljs.spec.gen.alpha.uuid(),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.symbol()], null)], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.double$()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns()], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.string_alphanumeric()], null)], 0)),cljs.spec.gen.alpha.symbol_ns(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_(pred)){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pred], 0));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.gen_builtins),pred);
}
});
