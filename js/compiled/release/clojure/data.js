// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__12848){
var vec__12849 = p__12848;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12849,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12849,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__12852 = (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(va,vb) : clojure.data.diff.call(null,va,vb));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12852,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12852,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12852,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__12856 = arguments.length;
switch (G__12856) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4006__auto__ = cljs.core.count(a);
var y__4007__auto__ = cljs.core.count(b);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if(((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4211__auto__ = (((x == null))?null:x);
var m__4212__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4212__auto__.call(null,x));
} else {
var m__4212__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4212__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if(((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4212__auto__.call(null,a,b));
} else {
var m__4212__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4212__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__12858_12882 = clojure.data.equality_partition;
var G__12859_12883 = "null";
var G__12860_12884 = ((function (G__12858_12882,G__12859_12883){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__12858_12882,G__12859_12883))
;
goog.object.set(G__12858_12882,G__12859_12883,G__12860_12884);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__12861_12885 = clojure.data.equality_partition;
var G__12862_12886 = "string";
var G__12863_12887 = ((function (G__12861_12885,G__12862_12886){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__12861_12885,G__12862_12886))
;
goog.object.set(G__12861_12885,G__12862_12886,G__12863_12887);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__12864_12888 = clojure.data.equality_partition;
var G__12865_12889 = "number";
var G__12866_12890 = ((function (G__12864_12888,G__12865_12889){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__12864_12888,G__12865_12889))
;
goog.object.set(G__12864_12888,G__12865_12889,G__12866_12890);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__12867_12891 = clojure.data.equality_partition;
var G__12868_12892 = "array";
var G__12869_12893 = ((function (G__12867_12891,G__12868_12892){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__12867_12891,G__12868_12892))
;
goog.object.set(G__12867_12891,G__12868_12892,G__12869_12893);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__12870_12894 = clojure.data.equality_partition;
var G__12871_12895 = "function";
var G__12872_12896 = ((function (G__12870_12894,G__12871_12895){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__12870_12894,G__12871_12895))
;
goog.object.set(G__12870_12894,G__12871_12895,G__12872_12896);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__12873_12897 = clojure.data.equality_partition;
var G__12874_12898 = "boolean";
var G__12875_12899 = ((function (G__12873_12897,G__12874_12898){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__12873_12897,G__12874_12898))
;
goog.object.set(G__12873_12897,G__12874_12898,G__12875_12899);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__12876_12900 = clojure.data.equality_partition;
var G__12877_12901 = "_";
var G__12878_12902 = ((function (G__12876_12900,G__12877_12901){
return (function (x){
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__12876_12900,G__12877_12901))
;
goog.object.set(G__12876_12900,G__12877_12901,G__12878_12902);
goog.object.set(clojure.data.Diff,"null",true);

var G__12903_12927 = clojure.data.diff_similar;
var G__12904_12928 = "null";
var G__12905_12929 = ((function (G__12903_12927,G__12904_12928){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12903_12927,G__12904_12928))
;
goog.object.set(G__12903_12927,G__12904_12928,G__12905_12929);

goog.object.set(clojure.data.Diff,"string",true);

var G__12906_12930 = clojure.data.diff_similar;
var G__12907_12931 = "string";
var G__12908_12932 = ((function (G__12906_12930,G__12907_12931){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12906_12930,G__12907_12931))
;
goog.object.set(G__12906_12930,G__12907_12931,G__12908_12932);

goog.object.set(clojure.data.Diff,"number",true);

var G__12909_12933 = clojure.data.diff_similar;
var G__12910_12934 = "number";
var G__12911_12935 = ((function (G__12909_12933,G__12910_12934){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12909_12933,G__12910_12934))
;
goog.object.set(G__12909_12933,G__12910_12934,G__12911_12935);

goog.object.set(clojure.data.Diff,"array",true);

var G__12912_12936 = clojure.data.diff_similar;
var G__12913_12937 = "array";
var G__12914_12938 = ((function (G__12912_12936,G__12913_12937){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__12912_12936,G__12913_12937))
;
goog.object.set(G__12912_12936,G__12913_12937,G__12914_12938);

goog.object.set(clojure.data.Diff,"function",true);

var G__12915_12939 = clojure.data.diff_similar;
var G__12916_12940 = "function";
var G__12917_12941 = ((function (G__12915_12939,G__12916_12940){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12915_12939,G__12916_12940))
;
goog.object.set(G__12915_12939,G__12916_12940,G__12917_12941);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__12918_12942 = clojure.data.diff_similar;
var G__12919_12943 = "boolean";
var G__12920_12944 = ((function (G__12918_12942,G__12919_12943){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12918_12942,G__12919_12943))
;
goog.object.set(G__12918_12942,G__12919_12943,G__12920_12944);

goog.object.set(clojure.data.Diff,"_",true);

var G__12921_12945 = clojure.data.diff_similar;
var G__12922_12946 = "_";
var G__12923_12947 = ((function (G__12921_12945,G__12922_12946){
return (function (a,b){
var fexpr__12925 = (function (){var G__12926 = clojure.data.equality_partition(a);
var G__12926__$1 = (((G__12926 instanceof cljs.core.Keyword))?G__12926.fqn:null);
switch (G__12926__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12926__$1)].join('')));

}
})();
return (fexpr__12925.cljs$core$IFn$_invoke$arity$2 ? fexpr__12925.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__12925.call(null,a,b));
});})(G__12921_12945,G__12922_12946))
;
goog.object.set(G__12921_12945,G__12922_12946,G__12923_12947);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
