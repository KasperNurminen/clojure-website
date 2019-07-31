// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__4502__auto__ = [];
var len__4499__auto___18040 = arguments.length;
var i__4500__auto___18041 = (0);
while(true){
if((i__4500__auto___18041 < len__4499__auto___18040)){
args__4502__auto__.push((arguments[i__4500__auto___18041]));

var G__18042 = (i__4500__auto___18041 + (1));
i__4500__auto___18041 = G__18042;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.print.cljs$lang$applyTo = (function (seq18039){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18039));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__4502__auto__ = [];
var len__4499__auto___18044 = arguments.length;
var i__4500__auto___18045 = (0);
while(true){
if((i__4500__auto___18045 < len__4499__auto___18044)){
args__4502__auto__.push((arguments[i__4500__auto___18045]));

var G__18046 = (i__4500__auto___18045 + (1));
i__4500__auto___18045 = G__18046;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.print,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.println.cljs$lang$applyTo = (function (seq18043){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18043));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__18047 = cljs.core._EQ_;
var expr__18048 = c;
if(cljs.core.truth_((function (){var G__18050 = "\b";
var G__18051 = expr__18048;
return (pred__18047.cljs$core$IFn$_invoke$arity$2 ? pred__18047.cljs$core$IFn$_invoke$arity$2(G__18050,G__18051) : pred__18047.call(null,G__18050,G__18051));
})())){
return "\\backspace";
} else {
if(cljs.core.truth_((function (){var G__18052 = "\t";
var G__18053 = expr__18048;
return (pred__18047.cljs$core$IFn$_invoke$arity$2 ? pred__18047.cljs$core$IFn$_invoke$arity$2(G__18052,G__18053) : pred__18047.call(null,G__18052,G__18053));
})())){
return "\\tab";
} else {
if(cljs.core.truth_((function (){var G__18054 = "\n";
var G__18055 = expr__18048;
return (pred__18047.cljs$core$IFn$_invoke$arity$2 ? pred__18047.cljs$core$IFn$_invoke$arity$2(G__18054,G__18055) : pred__18047.call(null,G__18054,G__18055));
})())){
return "\\newline";
} else {
if(cljs.core.truth_((function (){var G__18056 = "\f";
var G__18057 = expr__18048;
return (pred__18047.cljs$core$IFn$_invoke$arity$2 ? pred__18047.cljs$core$IFn$_invoke$arity$2(G__18056,G__18057) : pred__18047.call(null,G__18056,G__18057));
})())){
return "\\formfeed";
} else {
if(cljs.core.truth_((function (){var G__18058 = "\r";
var G__18059 = expr__18048;
return (pred__18047.cljs$core$IFn$_invoke$arity$2 ? pred__18047.cljs$core$IFn$_invoke$arity$2(G__18058,G__18059) : pred__18047.call(null,G__18058,G__18059));
})())){
return "\\return";
} else {
if(cljs.core.truth_((function (){var G__18060 = "\"";
var G__18061 = expr__18048;
return (pred__18047.cljs$core$IFn$_invoke$arity$2 ? pred__18047.cljs$core$IFn$_invoke$arity$2(G__18060,G__18061) : pred__18047.call(null,G__18060,G__18061));
})())){
return "\\\"";
} else {
if(cljs.core.truth_((function (){var G__18062 = "\\";
var G__18063 = expr__18048;
return (pred__18047.cljs$core$IFn$_invoke$arity$2 ? pred__18047.cljs$core$IFn$_invoke$arity$2(G__18062,G__18063) : pred__18047.call(null,G__18062,G__18063));
})())){
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__4502__auto__ = [];
var len__4499__auto___18065 = arguments.length;
var i__4500__auto___18066 = (0);
while(true){
if((i__4500__auto___18066 < len__4499__auto___18065)){
args__4502__auto__.push((arguments[i__4500__auto___18066]));

var G__18067 = (i__4500__auto___18066 + (1));
i__4500__auto___18066 = G__18067;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.pr.cljs$lang$applyTo = (function (seq18064){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18064));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___18069 = arguments.length;
var i__4500__auto___18070 = (0);
while(true){
if((i__4500__auto___18070 < len__4499__auto___18069)){
args__4502__auto__.push((arguments[i__4500__auto___18070]));

var G__18071 = (i__4500__auto___18070 + (1));
i__4500__auto___18070 = G__18071;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pr,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.prn.cljs$lang$applyTo = (function (seq18068){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18068));
});

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return ((typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && (!((parseFloat(n) === parseInt(n,(10))))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if(((typeof c === 'string') && ((c.length === (1))))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first(lis__$1);
var remainder = cljs.core.next(lis__$1);
var vec__18072 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18072,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18072,(1),null);
var G__18075 = new_context;
var G__18076 = remainder;
var G__18077 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__18075;
lis__$1 = G__18076;
acc = G__18077;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__18078 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18078,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18078,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__18081 = new_context;
var G__18082 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__18081;
acc = G__18082;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__18083 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18083,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18083,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18083,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__18086 = new_context;
var G__18087 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__18086;
acc = G__18087;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function cljs$pprint$unzip_map_$_iter__18088(s__18089){
return (new cljs.core.LazySeq(null,(function (){
var s__18089__$1 = s__18089;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18089__$1);
if(temp__4657__auto__){
var s__18089__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18089__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__18089__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__18091 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__18090 = (0);
while(true){
if((i__18090 < size__4291__auto__)){
var vec__18092 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__18090);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18092,(0),null);
var vec__18095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18092,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18095,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18095,(1),null);
cljs.core.chunk_append(b__18091,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__18120 = (i__18090 + (1));
i__18090 = G__18120;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18091),cljs$pprint$unzip_map_$_iter__18088(cljs.core.chunk_rest(s__18089__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18091),null);
}
} else {
var vec__18098 = cljs.core.first(s__18089__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18098,(0),null);
var vec__18101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18098,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18101,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18101,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__18088(cljs.core.rest(s__18089__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function cljs$pprint$unzip_map_$_iter__18104(s__18105){
return (new cljs.core.LazySeq(null,(function (){
var s__18105__$1 = s__18105;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18105__$1);
if(temp__4657__auto__){
var s__18105__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18105__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__18105__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__18107 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__18106 = (0);
while(true){
if((i__18106 < size__4291__auto__)){
var vec__18108 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__18106);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18108,(0),null);
var vec__18111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18108,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18111,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18111,(1),null);
cljs.core.chunk_append(b__18107,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__18121 = (i__18106 + (1));
i__18106 = G__18121;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18107),cljs$pprint$unzip_map_$_iter__18104(cljs.core.chunk_rest(s__18105__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18107),null);
}
} else {
var vec__18114 = cljs.core.first(s__18105__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18114,(0),null);
var vec__18117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18114,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18117,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18117,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__18104(cljs.core.rest(s__18105__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function cljs$pprint$tuple_map_$_iter__18122(s__18123){
return (new cljs.core.LazySeq(null,(function (){
var s__18123__$1 = s__18123;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18123__$1);
if(temp__4657__auto__){
var s__18123__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18123__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__18123__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__18125 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__18124 = (0);
while(true){
if((i__18124 < size__4291__auto__)){
var vec__18126 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__18124);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18126,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18126,(1),null);
cljs.core.chunk_append(b__18125,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__18132 = (i__18124 + (1));
i__18124 = G__18132;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18125),cljs$pprint$tuple_map_$_iter__18122(cljs.core.chunk_rest(s__18123__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18125),null);
}
} else {
var vec__18129 = cljs.core.first(s__18123__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18129,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18129,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__18122(cljs.core.rest(s__18123__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count(s);
if((((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1))),c)))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(n + (1)));
} else {
var G__18133 = (n - (1));
n = G__18133;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count(s);
if((((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0)),c)))){
var n = (0);
while(true){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,len)) || (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c))))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,n);
} else {
var G__18134 = (n + (1));
n = G__18134;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_(val))?cljs.core.set(val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__18136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__18136) : test.call(null,G__18136));
})())))){
return pos;
} else {
var G__18137 = (pos + (1));
pos = G__18137;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if(((!((pp == null))) && (!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null))))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__4211__auto__ = (((pp == null))?null:pp);
var m__4212__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__4212__auto__.call(null,pp));
} else {
var m__4212__auto____$1 = (cljs.pprint._ppflush["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(pp) : m__4212__auto____$1.call(null,pp));
} else {
throw cljs.core.missing_protocol("IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
var G__18138 = cljs.core.deref(cljs.core.deref(this$));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__18138) : sym.call(null,G__18138));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$cur);
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$line);
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$max);
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field(this$,cljs.core.cst$kw$max,new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$base);
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(0));

cljs.pprint.set_field(this$,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$,cljs.core.cst$kw$line) + (1)));
} else {
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$,cljs.core.cst$kw$cur) + (1)));
}

return cljs.core._write(cljs.pprint.get_field(this$,cljs.core.cst$kw$base),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__18141 = arguments.length;
switch (G__18141) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$max,max_columns,cljs.core.cst$kw$cur,(0),cljs.core.cst$kw$line,(0),cljs.core.cst$kw$base,writer], null));
if(typeof cljs.pprint.t_cljs$pprint18142 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint18142 = (function (writer,max_columns,fields,meta18143){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta18143 = meta18143;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint18142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_18144,meta18143__$1){
var self__ = this;
var _18144__$1 = this;
return (new cljs.pprint.t_cljs$pprint18142(self__.writer,self__.max_columns,self__.fields,meta18143__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint18142.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_18144){
var self__ = this;
var _18144__$1 = this;
return self__.meta18143;
});})(fields))
;

cljs.pprint.t_cljs$pprint18142.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint18142.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint18142.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__18145 = cljs.core._EQ_;
var expr__18146 = cljs.core.type(x);
if(cljs.core.truth_((pred__18145.cljs$core$IFn$_invoke$arity$2 ? pred__18145.cljs$core$IFn$_invoke$arity$2(String,expr__18146) : pred__18145.call(null,String,expr__18146)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$cur) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$line) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s,nl,pred__18145,expr__18146,this$__$1,fields){
return (function (p1__18139_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__18139_SHARP_,"\n");
});})(s,nl,pred__18145,expr__18146,this$__$1,fields))
,s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$base),s);
} else {
if(cljs.core.truth_((pred__18145.cljs$core$IFn$_invoke$arity$2 ? pred__18145.cljs$core$IFn$_invoke$arity$2(Number,expr__18146) : pred__18145.call(null,Number,expr__18146)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__18146)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint18142.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta18143], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint18142.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint18142.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint18142";

cljs.pprint.t_cljs$pprint18142.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.pprint/t_cljs$pprint18142");
});})(fields))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint18142.
 */
cljs.pprint.__GT_t_cljs$pprint18142 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint18142(writer__$1,max_columns__$1,fields__$1,meta18143){
return (new cljs.pprint.t_cljs$pprint18142(writer__$1,max_columns__$1,fields__$1,meta18143));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint18142(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k18150,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__18154 = k18150;
var G__18154__$1 = (((G__18154 instanceof cljs.core.Keyword))?G__18154.fqn:null);
switch (G__18154__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18150,else__4175__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer(writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4187__auto__,pr_pair__4189__auto__,"#cljs.pprint.logical-block{",", ","}",opts__4188__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18149){
var self__ = this;
var G__18149__$1 = this;
return (new cljs.core.RecordIter((0),G__18149__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parent,cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__18155 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll(coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
;
return fexpr__18155(this__4168__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18151,other18152){
var self__ = this;
var this18151__$1 = this;
return ((!((other18152 == null))) && ((this18151__$1.constructor === other18152.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18151__$1.parent,other18152.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18151__$1.section,other18152.section)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18151__$1.start_col,other18152.start_col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18151__$1.indent,other18152.indent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18151__$1.done_nl,other18152.done_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18151__$1.intra_block_nl,other18152.intra_block_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18151__$1.prefix,other18152.prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18151__$1.per_line_prefix,other18152.per_line_prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18151__$1.suffix,other18152.suffix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18151__$1.logical_block_callback,other18152.logical_block_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18151__$1.__extmap,other18152.__extmap)));
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$suffix,null,cljs.core.cst$kw$indent,null,cljs.core.cst$kw$parent,null,cljs.core.cst$kw$section,null,cljs.core.cst$kw$done_DASH_nl,null,cljs.core.cst$kw$start_DASH_col,null,cljs.core.cst$kw$prefix,null,cljs.core.cst$kw$per_DASH_line_DASH_prefix,null,cljs.core.cst$kw$logical_DASH_block_DASH_callback,null,cljs.core.cst$kw$intra_DASH_block_DASH_nl,null], null), null),k__4182__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4182__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__18149){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__18156 = cljs.core.keyword_identical_QMARK_;
var expr__18157 = k__4180__auto__;
if(cljs.core.truth_((function (){var G__18159 = cljs.core.cst$kw$parent;
var G__18160 = expr__18157;
return (pred__18156.cljs$core$IFn$_invoke$arity$2 ? pred__18156.cljs$core$IFn$_invoke$arity$2(G__18159,G__18160) : pred__18156.call(null,G__18159,G__18160));
})())){
return (new cljs.pprint.logical_block(G__18149,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18161 = cljs.core.cst$kw$section;
var G__18162 = expr__18157;
return (pred__18156.cljs$core$IFn$_invoke$arity$2 ? pred__18156.cljs$core$IFn$_invoke$arity$2(G__18161,G__18162) : pred__18156.call(null,G__18161,G__18162));
})())){
return (new cljs.pprint.logical_block(self__.parent,G__18149,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18163 = cljs.core.cst$kw$start_DASH_col;
var G__18164 = expr__18157;
return (pred__18156.cljs$core$IFn$_invoke$arity$2 ? pred__18156.cljs$core$IFn$_invoke$arity$2(G__18163,G__18164) : pred__18156.call(null,G__18163,G__18164));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__18149,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18165 = cljs.core.cst$kw$indent;
var G__18166 = expr__18157;
return (pred__18156.cljs$core$IFn$_invoke$arity$2 ? pred__18156.cljs$core$IFn$_invoke$arity$2(G__18165,G__18166) : pred__18156.call(null,G__18165,G__18166));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__18149,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18167 = cljs.core.cst$kw$done_DASH_nl;
var G__18168 = expr__18157;
return (pred__18156.cljs$core$IFn$_invoke$arity$2 ? pred__18156.cljs$core$IFn$_invoke$arity$2(G__18167,G__18168) : pred__18156.call(null,G__18167,G__18168));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__18149,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18169 = cljs.core.cst$kw$intra_DASH_block_DASH_nl;
var G__18170 = expr__18157;
return (pred__18156.cljs$core$IFn$_invoke$arity$2 ? pred__18156.cljs$core$IFn$_invoke$arity$2(G__18169,G__18170) : pred__18156.call(null,G__18169,G__18170));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__18149,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18171 = cljs.core.cst$kw$prefix;
var G__18172 = expr__18157;
return (pred__18156.cljs$core$IFn$_invoke$arity$2 ? pred__18156.cljs$core$IFn$_invoke$arity$2(G__18171,G__18172) : pred__18156.call(null,G__18171,G__18172));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__18149,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18173 = cljs.core.cst$kw$per_DASH_line_DASH_prefix;
var G__18174 = expr__18157;
return (pred__18156.cljs$core$IFn$_invoke$arity$2 ? pred__18156.cljs$core$IFn$_invoke$arity$2(G__18173,G__18174) : pred__18156.call(null,G__18173,G__18174));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__18149,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18175 = cljs.core.cst$kw$suffix;
var G__18176 = expr__18157;
return (pred__18156.cljs$core$IFn$_invoke$arity$2 ? pred__18156.cljs$core$IFn$_invoke$arity$2(G__18175,G__18176) : pred__18156.call(null,G__18175,G__18176));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__18149,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18177 = cljs.core.cst$kw$logical_DASH_block_DASH_callback;
var G__18178 = expr__18157;
return (pred__18156.cljs$core$IFn$_invoke$arity$2 ? pred__18156.cljs$core$IFn$_invoke$arity$2(G__18177,G__18178) : pred__18156.call(null,G__18177,G__18178));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__18149,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4180__auto__,G__18149),null));
}
}
}
}
}
}
}
}
}
}
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$parent,self__.parent,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$section,self__.section,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_col,self__.start_col,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$indent,self__.indent,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$done_DASH_nl,self__.done_nl,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$prefix,self__.prefix,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$suffix,self__.suffix,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback,null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__18149){
var self__ = this;
var this__4171__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__18149,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$parent,cljs.core.cst$sym$section,cljs.core.cst$sym$start_DASH_col,cljs.core.cst$sym$indent,cljs.core.cst$sym$done_DASH_nl,cljs.core.cst$sym$intra_DASH_block_DASH_nl,cljs.core.cst$sym$prefix,cljs.core.cst$sym$per_DASH_line_DASH_prefix,cljs.core.cst$sym$suffix,cljs.core.cst$sym$logical_DASH_block_DASH_callback], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/logical-block",null,(1),null));
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/logical-block");
});

/**
 * Positional factory function for cljs.pprint/logical-block.
 */
cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

/**
 * Factory function for cljs.pprint/logical-block, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__18153){
return (new cljs.pprint.logical_block(cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__18153),cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(G__18153),cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(G__18153),cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(G__18153),cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__18153),cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__18153),cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(G__18153),cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(G__18153),cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(G__18153),cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(G__18153),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18153,cljs.core.cst$kw$parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], 0))),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__18180 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__18180;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq(l);
if(l__$1){
return (cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.last(l__$1)) - cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.first(l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k18182,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__18186 = k18182;
var G__18186__$1 = (((G__18186 instanceof cljs.core.Keyword))?G__18186.fqn:null);
switch (G__18186__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18182,else__4175__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer(writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4187__auto__,pr_pair__4189__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__4188__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18181){
var self__ = this;
var G__18181__$1 = this;
return (new cljs.core.RecordIter((0),G__18181__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__18187 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll(coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
;
return fexpr__18187(this__4168__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18183,other18184){
var self__ = this;
var this18183__$1 = this;
return ((!((other18184 == null))) && ((this18183__$1.constructor === other18184.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18183__$1.type_tag,other18184.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18183__$1.data,other18184.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18183__$1.trailing_white_space,other18184.trailing_white_space)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18183__$1.start_pos,other18184.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18183__$1.end_pos,other18184.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18183__$1.__extmap,other18184.__extmap)));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null,cljs.core.cst$kw$data,null], null), null),k__4182__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4182__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__18181){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__18188 = cljs.core.keyword_identical_QMARK_;
var expr__18189 = k__4180__auto__;
if(cljs.core.truth_((function (){var G__18191 = cljs.core.cst$kw$type_DASH_tag;
var G__18192 = expr__18189;
return (pred__18188.cljs$core$IFn$_invoke$arity$2 ? pred__18188.cljs$core$IFn$_invoke$arity$2(G__18191,G__18192) : pred__18188.call(null,G__18191,G__18192));
})())){
return (new cljs.pprint.buffer_blob(G__18181,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18193 = cljs.core.cst$kw$data;
var G__18194 = expr__18189;
return (pred__18188.cljs$core$IFn$_invoke$arity$2 ? pred__18188.cljs$core$IFn$_invoke$arity$2(G__18193,G__18194) : pred__18188.call(null,G__18193,G__18194));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__18181,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18195 = cljs.core.cst$kw$trailing_DASH_white_DASH_space;
var G__18196 = expr__18189;
return (pred__18188.cljs$core$IFn$_invoke$arity$2 ? pred__18188.cljs$core$IFn$_invoke$arity$2(G__18195,G__18196) : pred__18188.call(null,G__18195,G__18196));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__18181,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18197 = cljs.core.cst$kw$start_DASH_pos;
var G__18198 = expr__18189;
return (pred__18188.cljs$core$IFn$_invoke$arity$2 ? pred__18188.cljs$core$IFn$_invoke$arity$2(G__18197,G__18198) : pred__18188.call(null,G__18197,G__18198));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__18181,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18199 = cljs.core.cst$kw$end_DASH_pos;
var G__18200 = expr__18189;
return (pred__18188.cljs$core$IFn$_invoke$arity$2 ? pred__18188.cljs$core$IFn$_invoke$arity$2(G__18199,G__18200) : pred__18188.call(null,G__18199,G__18200));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__18181,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4180__auto__,G__18181),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$data,self__.data,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__18181){
var self__ = this;
var this__4171__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__18181,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$data,cljs.core.cst$sym$trailing_DASH_white_DASH_space,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/buffer-blob",null,(1),null));
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/buffer-blob");
});

/**
 * Positional factory function for cljs.pprint/buffer-blob.
 */
cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/buffer-blob, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__18185){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__18185),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__18185),cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(G__18185),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__18185),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__18185),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18185,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$buffer_DASH_blob,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__16781__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__16781__auto__),cljs.core.cst$kw$buffer_DASH_blob);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k18203,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__18207 = k18203;
var G__18207__$1 = (((G__18207 instanceof cljs.core.Keyword))?G__18207.fqn:null);
switch (G__18207__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18203,else__4175__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer(writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4187__auto__,pr_pair__4189__auto__,"#cljs.pprint.nl-t{",", ","}",opts__4188__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18202){
var self__ = this;
var G__18202__$1 = this;
return (new cljs.core.RecordIter((0),G__18202__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__18208 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll(coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
;
return fexpr__18208(this__4168__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18204,other18205){
var self__ = this;
var this18204__$1 = this;
return ((!((other18205 == null))) && ((this18204__$1.constructor === other18205.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18204__$1.type_tag,other18205.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18204__$1.type,other18205.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18204__$1.logical_block,other18205.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18204__$1.start_pos,other18205.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18204__$1.end_pos,other18205.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18204__$1.__extmap,other18205.__extmap)));
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$type,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__4182__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4182__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__18202){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__18209 = cljs.core.keyword_identical_QMARK_;
var expr__18210 = k__4180__auto__;
if(cljs.core.truth_((function (){var G__18212 = cljs.core.cst$kw$type_DASH_tag;
var G__18213 = expr__18210;
return (pred__18209.cljs$core$IFn$_invoke$arity$2 ? pred__18209.cljs$core$IFn$_invoke$arity$2(G__18212,G__18213) : pred__18209.call(null,G__18212,G__18213));
})())){
return (new cljs.pprint.nl_t(G__18202,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18214 = cljs.core.cst$kw$type;
var G__18215 = expr__18210;
return (pred__18209.cljs$core$IFn$_invoke$arity$2 ? pred__18209.cljs$core$IFn$_invoke$arity$2(G__18214,G__18215) : pred__18209.call(null,G__18214,G__18215));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,G__18202,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18216 = cljs.core.cst$kw$logical_DASH_block;
var G__18217 = expr__18210;
return (pred__18209.cljs$core$IFn$_invoke$arity$2 ? pred__18209.cljs$core$IFn$_invoke$arity$2(G__18216,G__18217) : pred__18209.call(null,G__18216,G__18217));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__18202,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18218 = cljs.core.cst$kw$start_DASH_pos;
var G__18219 = expr__18210;
return (pred__18209.cljs$core$IFn$_invoke$arity$2 ? pred__18209.cljs$core$IFn$_invoke$arity$2(G__18218,G__18219) : pred__18209.call(null,G__18218,G__18219));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__18202,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18220 = cljs.core.cst$kw$end_DASH_pos;
var G__18221 = expr__18210;
return (pred__18209.cljs$core$IFn$_invoke$arity$2 ? pred__18209.cljs$core$IFn$_invoke$arity$2(G__18220,G__18221) : pred__18209.call(null,G__18220,G__18221));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__18202,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4180__auto__,G__18202),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$type,self__.type,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block,self__.logical_block,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__18202){
var self__ = this;
var this__4171__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__18202,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$type,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/nl-t",null,(1),null));
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/nl-t");
});

/**
 * Positional factory function for cljs.pprint/nl-t.
 */
cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/nl-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__18206){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__18206),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__18206),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__18206),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__18206),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__18206),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18206,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$nl_DASH_t,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__16781__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__16781__auto__),cljs.core.cst$kw$nl_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k18224,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__18228 = k18224;
var G__18228__$1 = (((G__18228 instanceof cljs.core.Keyword))?G__18228.fqn:null);
switch (G__18228__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18224,else__4175__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer(writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4187__auto__,pr_pair__4189__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__4188__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18223){
var self__ = this;
var G__18223__$1 = this;
return (new cljs.core.RecordIter((0),G__18223__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__18229 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll(coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
;
return fexpr__18229(this__4168__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18225,other18226){
var self__ = this;
var this18225__$1 = this;
return ((!((other18226 == null))) && ((this18225__$1.constructor === other18226.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18225__$1.type_tag,other18226.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18225__$1.logical_block,other18226.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18225__$1.start_pos,other18226.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18225__$1.end_pos,other18226.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18225__$1.__extmap,other18226.__extmap)));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__4182__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4182__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__18223){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__18230 = cljs.core.keyword_identical_QMARK_;
var expr__18231 = k__4180__auto__;
if(cljs.core.truth_((function (){var G__18233 = cljs.core.cst$kw$type_DASH_tag;
var G__18234 = expr__18231;
return (pred__18230.cljs$core$IFn$_invoke$arity$2 ? pred__18230.cljs$core$IFn$_invoke$arity$2(G__18233,G__18234) : pred__18230.call(null,G__18233,G__18234));
})())){
return (new cljs.pprint.start_block_t(G__18223,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18235 = cljs.core.cst$kw$logical_DASH_block;
var G__18236 = expr__18231;
return (pred__18230.cljs$core$IFn$_invoke$arity$2 ? pred__18230.cljs$core$IFn$_invoke$arity$2(G__18235,G__18236) : pred__18230.call(null,G__18235,G__18236));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,G__18223,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18237 = cljs.core.cst$kw$start_DASH_pos;
var G__18238 = expr__18231;
return (pred__18230.cljs$core$IFn$_invoke$arity$2 ? pred__18230.cljs$core$IFn$_invoke$arity$2(G__18237,G__18238) : pred__18230.call(null,G__18237,G__18238));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__18223,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18239 = cljs.core.cst$kw$end_DASH_pos;
var G__18240 = expr__18231;
return (pred__18230.cljs$core$IFn$_invoke$arity$2 ? pred__18230.cljs$core$IFn$_invoke$arity$2(G__18239,G__18240) : pred__18230.call(null,G__18239,G__18240));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__18223,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4180__auto__,G__18223),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block,self__.logical_block,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__18223){
var self__ = this;
var this__4171__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__18223,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/start-block-t",null,(1),null));
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/start-block-t");
});

/**
 * Positional factory function for cljs.pprint/start-block-t.
 */
cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/start-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__18227){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__18227),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__18227),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__18227),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__18227),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18227,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$start_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__16781__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__16781__auto__),cljs.core.cst$kw$start_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k18243,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__18247 = k18243;
var G__18247__$1 = (((G__18247 instanceof cljs.core.Keyword))?G__18247.fqn:null);
switch (G__18247__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18243,else__4175__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer(writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4187__auto__,pr_pair__4189__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__4188__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18242){
var self__ = this;
var G__18242__$1 = this;
return (new cljs.core.RecordIter((0),G__18242__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__18248 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll(coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
;
return fexpr__18248(this__4168__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18244,other18245){
var self__ = this;
var this18244__$1 = this;
return ((!((other18245 == null))) && ((this18244__$1.constructor === other18245.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18244__$1.type_tag,other18245.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18244__$1.logical_block,other18245.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18244__$1.start_pos,other18245.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18244__$1.end_pos,other18245.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18244__$1.__extmap,other18245.__extmap)));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__4182__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4182__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__18242){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__18249 = cljs.core.keyword_identical_QMARK_;
var expr__18250 = k__4180__auto__;
if(cljs.core.truth_((function (){var G__18252 = cljs.core.cst$kw$type_DASH_tag;
var G__18253 = expr__18250;
return (pred__18249.cljs$core$IFn$_invoke$arity$2 ? pred__18249.cljs$core$IFn$_invoke$arity$2(G__18252,G__18253) : pred__18249.call(null,G__18252,G__18253));
})())){
return (new cljs.pprint.end_block_t(G__18242,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18254 = cljs.core.cst$kw$logical_DASH_block;
var G__18255 = expr__18250;
return (pred__18249.cljs$core$IFn$_invoke$arity$2 ? pred__18249.cljs$core$IFn$_invoke$arity$2(G__18254,G__18255) : pred__18249.call(null,G__18254,G__18255));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,G__18242,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18256 = cljs.core.cst$kw$start_DASH_pos;
var G__18257 = expr__18250;
return (pred__18249.cljs$core$IFn$_invoke$arity$2 ? pred__18249.cljs$core$IFn$_invoke$arity$2(G__18256,G__18257) : pred__18249.call(null,G__18256,G__18257));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__18242,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18258 = cljs.core.cst$kw$end_DASH_pos;
var G__18259 = expr__18250;
return (pred__18249.cljs$core$IFn$_invoke$arity$2 ? pred__18249.cljs$core$IFn$_invoke$arity$2(G__18258,G__18259) : pred__18249.call(null,G__18258,G__18259));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__18242,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4180__auto__,G__18242),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block,self__.logical_block,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__18242){
var self__ = this;
var this__4171__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__18242,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/end-block-t",null,(1),null));
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/end-block-t");
});

/**
 * Positional factory function for cljs.pprint/end-block-t.
 */
cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/end-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__18246){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__18246),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__18246),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__18246),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__18246),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18246,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$end_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__16781__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__16781__auto__),cljs.core.cst$kw$end_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k18262,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__18266 = k18262;
var G__18266__$1 = (((G__18266 instanceof cljs.core.Keyword))?G__18266.fqn:null);
switch (G__18266__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18262,else__4175__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer(writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4187__auto__,pr_pair__4189__auto__,"#cljs.pprint.indent-t{",", ","}",opts__4188__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18261){
var self__ = this;
var G__18261__$1 = this;
return (new cljs.core.RecordIter((0),G__18261__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__18267 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll(coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
;
return fexpr__18267(this__4168__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18263,other18264){
var self__ = this;
var this18263__$1 = this;
return ((!((other18264 == null))) && ((this18263__$1.constructor === other18264.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18263__$1.type_tag,other18264.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18263__$1.logical_block,other18264.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18263__$1.relative_to,other18264.relative_to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18263__$1.offset,other18264.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18263__$1.start_pos,other18264.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18263__$1.end_pos,other18264.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18263__$1.__extmap,other18264.__extmap)));
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$relative_DASH_to,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__4182__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4182__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__18261){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__18268 = cljs.core.keyword_identical_QMARK_;
var expr__18269 = k__4180__auto__;
if(cljs.core.truth_((function (){var G__18271 = cljs.core.cst$kw$type_DASH_tag;
var G__18272 = expr__18269;
return (pred__18268.cljs$core$IFn$_invoke$arity$2 ? pred__18268.cljs$core$IFn$_invoke$arity$2(G__18271,G__18272) : pred__18268.call(null,G__18271,G__18272));
})())){
return (new cljs.pprint.indent_t(G__18261,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18273 = cljs.core.cst$kw$logical_DASH_block;
var G__18274 = expr__18269;
return (pred__18268.cljs$core$IFn$_invoke$arity$2 ? pred__18268.cljs$core$IFn$_invoke$arity$2(G__18273,G__18274) : pred__18268.call(null,G__18273,G__18274));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,G__18261,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18275 = cljs.core.cst$kw$relative_DASH_to;
var G__18276 = expr__18269;
return (pred__18268.cljs$core$IFn$_invoke$arity$2 ? pred__18268.cljs$core$IFn$_invoke$arity$2(G__18275,G__18276) : pred__18268.call(null,G__18275,G__18276));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__18261,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18277 = cljs.core.cst$kw$offset;
var G__18278 = expr__18269;
return (pred__18268.cljs$core$IFn$_invoke$arity$2 ? pred__18268.cljs$core$IFn$_invoke$arity$2(G__18277,G__18278) : pred__18268.call(null,G__18277,G__18278));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__18261,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18279 = cljs.core.cst$kw$start_DASH_pos;
var G__18280 = expr__18269;
return (pred__18268.cljs$core$IFn$_invoke$arity$2 ? pred__18268.cljs$core$IFn$_invoke$arity$2(G__18279,G__18280) : pred__18268.call(null,G__18279,G__18280));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__18261,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18281 = cljs.core.cst$kw$end_DASH_pos;
var G__18282 = expr__18269;
return (pred__18268.cljs$core$IFn$_invoke$arity$2 ? pred__18268.cljs$core$IFn$_invoke$arity$2(G__18281,G__18282) : pred__18268.call(null,G__18281,G__18282));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__18261,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4180__auto__,G__18261),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block,self__.logical_block,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$relative_DASH_to,self__.relative_to,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$offset,self__.offset,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__18261){
var self__ = this;
var this__4171__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__18261,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$relative_DASH_to,cljs.core.cst$sym$offset,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/indent-t",null,(1),null));
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/indent-t");
});

/**
 * Positional factory function for cljs.pprint/indent-t.
 */
cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/indent-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__18265){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__18265),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__18265),cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(G__18265),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__18265),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__18265),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__18265),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18265,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$indent_DASH_t,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__16781__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__16781__auto__),cljs.core.cst$kw$indent_DASH_t);
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if(typeof cljs.pprint.write_token !== 'undefined'){
} else {
cljs.pprint.write_token = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","write-token"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (p1__18285_SHARP_,p2__18284_SHARP_){
return cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(p2__18284_SHARP_);
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,cljs.core.cst$kw$default,hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$start_DASH_block_DASH_t,(function (this$,token){
var temp__4657__auto___18287 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__4657__auto___18287)){
var cb_18288 = temp__4657__auto___18287;
var G__18286_18289 = cljs.core.cst$kw$start;
(cb_18288.cljs$core$IFn$_invoke$arity$1 ? cb_18288.cljs$core$IFn$_invoke$arity$1(G__18286_18289) : cb_18288.call(null,G__18286_18289));
} else {
}

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
var temp__4657__auto___18290 = cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__4657__auto___18290)){
var prefix_18291 = temp__4657__auto___18290;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix_18291);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$end_DASH_block_DASH_t,(function (this$,token){
var temp__4657__auto___18293 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__4657__auto___18293)){
var cb_18294 = temp__4657__auto___18293;
var G__18292_18295 = cljs.core.cst$kw$end;
(cb_18294.cljs$core$IFn$_invoke$arity$1 ? cb_18294.cljs$core$IFn$_invoke$arity$1(G__18292_18295) : cb_18294.call(null,G__18292_18295));
} else {
}

var temp__4657__auto__ = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__4657__auto__)){
var suffix = temp__4657__auto__;
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
return null;
}
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$indent_DASH_t,(function (this$,token){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__18296 = cljs.core._EQ_;
var expr__18297 = cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((function (){var G__18299 = cljs.core.cst$kw$block;
var G__18300 = expr__18297;
return (pred__18296.cljs$core$IFn$_invoke$arity$2 ? pred__18296.cljs$core$IFn$_invoke$arity$2(G__18299,G__18300) : pred__18296.call(null,G__18299,G__18300));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__18301 = cljs.core.cst$kw$current;
var G__18302 = expr__18297;
return (pred__18296.cljs$core$IFn$_invoke$arity$2 ? pred__18296.cljs$core$IFn$_invoke$arity$2(G__18301,G__18302) : pred__18296.call(null,G__18301,G__18302));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__18297)].join('')));
}
}
})()));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$buffer_DASH_blob,(function (this$,token){
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nl_DASH_t,(function (this$,token){
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$mandatory);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$fill));
if(and__3911__auto__){
return cljs.core.deref(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__3911__auto__;
}
}
})())){
(cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.emit_nl.call(null,this$,token));
} else {
var temp__4655__auto___18303 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__4655__auto___18303)){
var tws_18304 = temp__4655__auto___18303;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_18304);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__18305 = cljs.core.seq(tokens);
var chunk__18306 = null;
var count__18307 = (0);
var i__18308 = (0);
while(true){
if((i__18308 < count__18307)){
var token = chunk__18306.cljs$core$IIndexed$_nth$arity$2(null,i__18308);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__4655__auto___18309 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__4655__auto___18309)){
var tws_18310 = temp__4655__auto___18309;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_18310);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_18311 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__3911__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__3911__auto__)){
return tws_18311;
} else {
return and__3911__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_18311);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}


var G__18312 = seq__18305;
var G__18313 = chunk__18306;
var G__18314 = count__18307;
var G__18315 = (i__18308 + (1));
seq__18305 = G__18312;
chunk__18306 = G__18313;
count__18307 = G__18314;
i__18308 = G__18315;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__18305);
if(temp__4657__auto__){
var seq__18305__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18305__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__18305__$1);
var G__18316 = cljs.core.chunk_rest(seq__18305__$1);
var G__18317 = c__4319__auto__;
var G__18318 = cljs.core.count(c__4319__auto__);
var G__18319 = (0);
seq__18305 = G__18316;
chunk__18306 = G__18317;
count__18307 = G__18318;
i__18308 = G__18319;
continue;
} else {
var token = cljs.core.first(seq__18305__$1);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__4655__auto___18320 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__4655__auto___18320)){
var tws_18321 = temp__4655__auto___18320;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_18321);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_18322 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__3911__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__3911__auto__)){
return tws_18322;
} else {
return and__3911__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_18322);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}


var G__18323 = cljs.core.next(seq__18305__$1);
var G__18324 = null;
var G__18325 = (0);
var G__18326 = (0);
seq__18305 = G__18323;
chunk__18306 = G__18324;
count__18307 = G__18325;
i__18308 = G__18326;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
return (((maxcol == null)) || (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))) + cljs.pprint.buffer_length(tokens)) < maxcol)));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__3922__auto__ = cljs.core.deref(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,section));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = (cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1(this$) : cljs.pprint.get_miser_width.call(null,this$));
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
var and__3911__auto__ = miser_width;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = maxcol;
if(cljs.core.truth_(and__3911__auto____$1)){
var and__3911__auto____$2 = (cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__3911__auto____$2){
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
} else {
return and__3911__auto____$2;
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
});
if(typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined'){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","emit-nl?"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (t,_,___$1,___$2){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,cljs.core.cst$kw$default,hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$linear,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$miser,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fill,(function (newl,this$,section,subsection){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
var or__3922__auto__ = cljs.core.deref(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,subsection));
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}
}
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$mandatory,(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__18327_SHARP_){
return cljs.core.not((function (){var and__3911__auto__ = cljs.pprint.nl_t_QMARK_(p1__18327_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.pprint.ancestor_QMARK_(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__18327_SHARP_),lb);
} else {
return and__3911__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__18328_SHARP_){
var nl_lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__18328_SHARP_);
return cljs.core.not((function (){var and__3911__auto__ = cljs.pprint.nl_t_QMARK_(p1__18328_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
var or__3922__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl_lb,lb);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return cljs.pprint.ancestor_QMARK_(nl_lb,lb);
}
} else {
return and__3911__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__18329 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__18329;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var istr_18330 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count(prefix))," "));
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),istr_18330);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__18331_SHARP_){
return cljs.core.not(cljs.pprint.nl_t_QMARK_(p1__18331_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__18332 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18332,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18332,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__18335 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18335,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18335,(1),null);
var newl = cljs.core.first(b);
var do_nl = (function (){var G__18338 = newl;
var G__18339 = this$;
var G__18340 = section;
var G__18341 = cljs.pprint.get_sub_section(b);
return (cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4 ? cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(G__18338,G__18339,G__18340,G__18341) : cljs.pprint.emit_nl_QMARK_.call(null,G__18338,G__18339,G__18340,G__18341));
})();
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl(this$,newl);

return cljs.core.next(b);
})()
:b);
var long_section = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,result));
var result__$1 = ((long_section)?(function (){var rem2 = (cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2(this$,section) : cljs.pprint.write_token_string.call(null,this$,section));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rem2,section)){
cljs.pprint.write_tokens(this$,section,false);

return remainder;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
while(true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,buffer));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,buffer))){
var new_buffer = cljs.pprint.write_token_string(this$,buffer);
if(!((buffer === new_buffer))){
var G__18342 = new_buffer;
buffer = G__18342;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),token));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))))){
return cljs.pprint.write_line(this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line(this$);

var temp__4655__auto__ = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__4655__auto__)){
var buf = temp__4655__auto__;
cljs.pprint.write_tokens(this$,buf,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__4657__auto__ = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__4657__auto__)){
var tws = temp__4657__auto__;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,"\n",(-1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lines),(1))){
return s;
} else {
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))));
var l = cljs.core.first(lines);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffering,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))){
var oldpos_18347 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_18348 = (oldpos_18347 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_18348);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_18347,newpos_18348));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l);
}

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),"\n");

var seq__18343_18349 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__18344_18350 = null;
var count__18345_18351 = (0);
var i__18346_18352 = (0);
while(true){
if((i__18346_18352 < count__18345_18351)){
var l_18353__$1 = chunk__18344_18350.cljs$core$IIndexed$_nth$arity$2(null,i__18346_18352);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_18353__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}


var G__18354 = seq__18343_18349;
var G__18355 = chunk__18344_18350;
var G__18356 = count__18345_18351;
var G__18357 = (i__18346_18352 + (1));
seq__18343_18349 = G__18354;
chunk__18344_18350 = G__18355;
count__18345_18351 = G__18356;
i__18346_18352 = G__18357;
continue;
} else {
var temp__4657__auto___18358 = cljs.core.seq(seq__18343_18349);
if(temp__4657__auto___18358){
var seq__18343_18359__$1 = temp__4657__auto___18358;
if(cljs.core.chunked_seq_QMARK_(seq__18343_18359__$1)){
var c__4319__auto___18360 = cljs.core.chunk_first(seq__18343_18359__$1);
var G__18361 = cljs.core.chunk_rest(seq__18343_18359__$1);
var G__18362 = c__4319__auto___18360;
var G__18363 = cljs.core.count(c__4319__auto___18360);
var G__18364 = (0);
seq__18343_18349 = G__18361;
chunk__18344_18350 = G__18362;
count__18345_18351 = G__18363;
i__18346_18352 = G__18364;
continue;
} else {
var l_18365__$1 = cljs.core.first(seq__18343_18359__$1);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_18365__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}


var G__18366 = cljs.core.next(seq__18343_18359__$1);
var G__18367 = null;
var G__18368 = (0);
var G__18369 = (0);
seq__18343_18349 = G__18366;
chunk__18344_18350 = G__18367;
count__18345_18351 = G__18368;
i__18346_18352 = G__18369;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffering,cljs.core.cst$kw$writing);

return cljs.core.last(lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),c);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
return cljs.pprint.write_initial_lines(this$,"\n");
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(cljs.core.char$(c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$miser_DASH_width,cljs.core.cst$kw$buffer_DASH_block,cljs.core.cst$kw$pretty_DASH_writer,cljs.core.cst$kw$sections,cljs.core.cst$kw$mode,cljs.core.cst$kw$pos,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$base,cljs.core.cst$kw$buffer_DASH_level,cljs.core.cst$kw$buffer],[lb,miser_width,lb,true,null,cljs.core.cst$kw$writing,(0),null,cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if(typeof cljs.pprint.t_cljs$pprint18370 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint18370 = (function (writer,max_columns,miser_width,lb,fields,meta18371){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta18371 = meta18371;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint18370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_18372,meta18371__$1){
var self__ = this;
var _18372__$1 = this;
return (new cljs.pprint.t_cljs$pprint18370(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta18371__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint18370.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_18372){
var self__ = this;
var _18372__$1 = this;
return self__.meta18371;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint18370.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint18370.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__18373 = cljs.core._EQ_;
var expr__18374 = cljs.core.type(x);
if(cljs.core.truth_((pred__18373.cljs$core$IFn$_invoke$arity$2 ? pred__18373.cljs$core$IFn$_invoke$arity$2(String,expr__18374) : pred__18373.call(null,String,expr__18374)))){
var s0 = cljs.pprint.write_initial_lines(this$__$1,x);
var s = clojure.string.replace_first(s0,/\s+$/,"");
var white_space = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s0,cljs.core.count(s));
var mode = cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),s);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,white_space);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
var newpos = (oldpos + cljs.core.count(s0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$__$1,cljs.pprint.make_buffer_blob(s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_((pred__18373.cljs$core$IFn$_invoke$arity$2 ? pred__18373.cljs$core$IFn$_invoke$arity$2(Number,expr__18374) : pred__18373.call(null,Number,expr__18374)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__18374)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint18370.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.cljs$pprint$IPrettyFlush$_ppflush$arity$1(null);

return cljs.core._flush(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint18370.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint18370.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),cljs.core.cst$kw$buffering)){
cljs.pprint.write_tokens(this$__$1,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space(this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint18370.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$miser_DASH_width,cljs.core.cst$sym$lb,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta18371], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint18370.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint18370.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint18370";

cljs.pprint.t_cljs$pprint18370.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.pprint/t_cljs$pprint18370");
});})(lb,fields))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint18370.
 */
cljs.pprint.__GT_t_cljs$pprint18370 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint18370(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta18371){
return (new cljs.pprint.t_cljs$pprint18370(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta18371));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint18370(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

var temp__4657__auto___18377 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__4657__auto___18377)){
var cb_18378 = temp__4657__auto___18377;
var G__18376_18379 = cljs.core.cst$kw$start;
(cb_18378.cljs$core$IFn$_invoke$arity$1 ? cb_18378.cljs$core$IFn$_invoke$arity$1(G__18376_18379) : cb_18378.call(null,G__18376_18379));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count(prefix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_start_block_t(lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var suffix = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

if(cljs.core.truth_(suffix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
}

var temp__4657__auto___18381 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__4657__auto___18381)){
var cb_18382 = temp__4657__auto___18381;
var G__18380_18383 = cljs.core.cst$kw$end;
(cb_18382.cljs$core$IFn$_invoke$arity$1 ? cb_18382.cljs$core$IFn$_invoke$arity$1(G__18380_18383) : cb_18382.call(null,G__18380_18383));
} else {
}
} else {
var oldpos_18384 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_18385 = (oldpos_18384 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_18385);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_18384,newpos_18385));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$buffering);

var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_nl_t(type,cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__18386 = cljs.core._EQ_;
var expr__18387 = relative_to;
if(cljs.core.truth_((function (){var G__18389 = cljs.core.cst$kw$block;
var G__18390 = expr__18387;
return (pred__18386.cljs$core$IFn$_invoke$arity$2 ? pred__18386.cljs$core$IFn$_invoke$arity$2(G__18389,G__18390) : pred__18386.call(null,G__18389,G__18390));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__18391 = cljs.core.cst$kw$current;
var G__18392 = expr__18387;
return (pred__18386.cljs$core$IFn$_invoke$arity$2 ? pred__18386.cljs$core$IFn$_invoke$arity$2(G__18391,G__18392) : pred__18386.call(null,G__18391,G__18392));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__18387)].join('')));
}
}
})()));
} else {
var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_indent_t(lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if(typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined'){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__18393_SHARP_){
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__18393_SHARP_));
if(cljs.core.truth_(temp__4657__auto__)){
var v = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__18393_SHARP_)], null);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0)));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__3911__auto__ = ((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x));
if(and__3911__auto__){
return cljs.core.cst$kw$pretty_DASH_writer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(x)));
} else {
return and__3911__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer(base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__3911__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__3911__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})();
if(!(cljs.pprint._STAR_print_pretty_STAR_)){
(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

(cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object));
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__4502__auto__ = [];
var len__4499__auto___18412 = arguments.length;
var i__4500__auto___18413 = (0);
while(true){
if((i__4500__auto___18413 < len__4499__auto___18412)){
args__4502__auto__.push((arguments[i__4500__auto___18413]));

var G__18414 = (i__4500__auto___18413 + (1));
i__4500__auto___18413 = G__18414;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stream,true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kw_args)], 0));
var _STAR_print_base_STAR_18398 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_18399 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_18400 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_18401 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_18402 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_18403 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_18404 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_18405 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_18406 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_18407 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_18408 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_18409 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
cljs.pprint._STAR_print_base_STAR_ = cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);

cljs.pprint._STAR_print_circle_STAR_ = cljs.core.cst$kw$circle.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);

cljs.core._STAR_print_length_STAR_ = cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);

cljs.core._STAR_print_level_STAR_ = cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);

cljs.pprint._STAR_print_lines_STAR_ = cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);

cljs.pprint._STAR_print_miser_width_STAR_ = cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.core.cst$kw$dispatch.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);

cljs.pprint._STAR_print_pretty_STAR_ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);

cljs.pprint._STAR_print_radix_STAR_ = cljs.core.cst$kw$radix.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);

cljs.core._STAR_print_readably_STAR_ = cljs.core.cst$kw$readably.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);

cljs.pprint._STAR_print_right_margin_STAR_ = cljs.core.cst$kw$right_DASH_margin.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = cljs.core.cst$kw$suppress_DASH_namespaces.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_(options,cljs.core.cst$kw$stream))?cljs.core.cst$kw$stream.cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = ((((optval === true) || ((optval == null))))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.pprint._STAR_print_pretty_STAR_){
var base_writer__16764__auto___18415 = base_writer;
var new_writer__16765__auto___18416 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__16764__auto___18415));
var _STAR_out_STAR_18410_18417 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__16765__auto___18416)?cljs.pprint.make_pretty_writer(base_writer__16764__auto___18415,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__16764__auto___18415);

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_18410_18417;
}} else {
var _STAR_out_STAR_18411_18418 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = base_writer;

try{(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_18411_18418;
}}

if(optval === true){
cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
}

if((optval == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_18409;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_18408;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_18407;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_18406;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_18405;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_18404;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_18403;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_18402;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_18401;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_18400;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_18399;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_18398;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.pprint.write.cljs$lang$applyTo = (function (seq18396){
var G__18397 = cljs.core.first(seq18396);
var seq18396__$1 = cljs.core.next(seq18396);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18397,seq18396__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__18420 = arguments.length;
switch (G__18420) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_18421 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_18421;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__16764__auto__ = writer;
var new_writer__16765__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__16764__auto__));
var _STAR_out_STAR_18422 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__16765__auto__)?cljs.pprint.make_pretty_writer(base_writer__16764__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__16764__auto__);

try{var _STAR_print_pretty_STAR_18423_18425 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out(object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_18423_18425;
}
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_)))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_18422;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not((choices.cljs$core$IFn$_invoke$arity$1 ? choices.cljs$core$IFn$_invoke$arity$1(arg) : choices.call(null,arg)))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__3911__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__3911__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__3911__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mandatory,null,cljs.core.cst$kw$miser,null,cljs.core.cst$kw$fill,null,cljs.core.cst$kw$linear,null], null), null));

return cljs.pprint.nl(cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg(relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$block,null,cljs.core.cst$kw$current,null], null), null));

return cljs.pprint.indent(cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$section,null,cljs.core.cst$kw$line,null,cljs.core.cst$kw$line_DASH_relative,null,cljs.core.cst$kw$section_DASH_relative,null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__4502__auto__ = [];
var len__4499__auto___18429 = arguments.length;
var i__4500__auto___18430 = (0);
while(true){
if((i__4500__auto___18430 < len__4499__auto___18429)){
args__4502__auto__.push((arguments[i__4500__auto___18430]));

var G__18431 = (i__4500__auto___18430 + (1));
i__4500__auto___18430 = G__18431;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(format_in) : cljs.pprint.compile_format.call(null,format_in)):format_in);
var navigator = (cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1(args) : cljs.pprint.init_navigator.call(null,args));
return (cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3(writer,compiled_format,navigator) : cljs.pprint.execute_format.call(null,writer,compiled_format,navigator));
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq18426){
var G__18427 = cljs.core.first(seq18426);
var seq18426__$1 = cljs.core.next(seq18426);
var G__18428 = cljs.core.first(seq18426__$1);
var seq18426__$2 = cljs.core.next(seq18426__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18427,G__18428,seq18426__$2);
});

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(offset," "))),"^",cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k18433,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__18437 = k18433;
var G__18437__$1 = (((G__18437 instanceof cljs.core.Keyword))?G__18437.fqn:null);
switch (G__18437__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18433,else__4175__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer(writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4187__auto__,pr_pair__4189__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__4188__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18432){
var self__ = this;
var G__18432__$1 = this;
return (new cljs.core.RecordIter((0),G__18432__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$seq,cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__18438 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll(coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
;
return fexpr__18438(this__4168__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18434,other18435){
var self__ = this;
var this18434__$1 = this;
return ((!((other18435 == null))) && ((this18434__$1.constructor === other18435.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18434__$1.seq,other18435.seq)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18434__$1.rest,other18435.rest)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18434__$1.pos,other18435.pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18434__$1.__extmap,other18435.__extmap)));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pos,null,cljs.core.cst$kw$seq,null,cljs.core.cst$kw$rest,null], null), null),k__4182__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4182__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__18432){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__18439 = cljs.core.keyword_identical_QMARK_;
var expr__18440 = k__4180__auto__;
if(cljs.core.truth_((function (){var G__18442 = cljs.core.cst$kw$seq;
var G__18443 = expr__18440;
return (pred__18439.cljs$core$IFn$_invoke$arity$2 ? pred__18439.cljs$core$IFn$_invoke$arity$2(G__18442,G__18443) : pred__18439.call(null,G__18442,G__18443));
})())){
return (new cljs.pprint.arg_navigator(G__18432,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18444 = cljs.core.cst$kw$rest;
var G__18445 = expr__18440;
return (pred__18439.cljs$core$IFn$_invoke$arity$2 ? pred__18439.cljs$core$IFn$_invoke$arity$2(G__18444,G__18445) : pred__18439.call(null,G__18444,G__18445));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,G__18432,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18446 = cljs.core.cst$kw$pos;
var G__18447 = expr__18440;
return (pred__18439.cljs$core$IFn$_invoke$arity$2 ? pred__18439.cljs$core$IFn$_invoke$arity$2(G__18446,G__18447) : pred__18439.call(null,G__18446,G__18447));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__18432,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4180__auto__,G__18432),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$seq,self__.seq,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$rest,self__.rest,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$pos,self__.pos,null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__18432){
var self__ = this;
var this__4171__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__18432,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$seq,cljs.core.cst$sym$rest,cljs.core.cst$sym$pos], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/arg-navigator",null,(1),null));
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/arg-navigator");
});

/**
 * Positional factory function for cljs.pprint/arg-navigator.
 */
cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/arg-navigator, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__18436){
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(G__18436),cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(G__18436),cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(G__18436),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18436,cljs.core.cst$kw$seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], 0))),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq(s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__18449 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18449,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18449,(1),null);
var compiled_format = ((typeof raw_format === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(raw_format) : cljs.pprint.compile_format.call(null,raw_format)):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator))){
var G__18452 = navigator;
var G__18453 = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__18452,G__18453) : cljs.pprint.relative_reposition.call(null,G__18452,G__18453));
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition(navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k18455,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__18459 = k18455;
var G__18459__$1 = (((G__18459 instanceof cljs.core.Keyword))?G__18459.fqn:null);
switch (G__18459__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18455,else__4175__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer(writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4187__auto__,pr_pair__4189__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__4188__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18454){
var self__ = this;
var G__18454__$1 = this;
return (new cljs.core.RecordIter((0),G__18454__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$func,cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__18460 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll(coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
;
return fexpr__18460(this__4168__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18456,other18457){
var self__ = this;
var this18456__$1 = this;
return ((!((other18457 == null))) && ((this18456__$1.constructor === other18457.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18456__$1.func,other18457.func)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18456__$1.def,other18457.def)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18456__$1.params,other18457.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18456__$1.offset,other18457.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18456__$1.__extmap,other18457.__extmap)));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$func,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$def,null], null), null),k__4182__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4182__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__18454){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__18461 = cljs.core.keyword_identical_QMARK_;
var expr__18462 = k__4180__auto__;
if(cljs.core.truth_((function (){var G__18464 = cljs.core.cst$kw$func;
var G__18465 = expr__18462;
return (pred__18461.cljs$core$IFn$_invoke$arity$2 ? pred__18461.cljs$core$IFn$_invoke$arity$2(G__18464,G__18465) : pred__18461.call(null,G__18464,G__18465));
})())){
return (new cljs.pprint.compiled_directive(G__18454,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18466 = cljs.core.cst$kw$def;
var G__18467 = expr__18462;
return (pred__18461.cljs$core$IFn$_invoke$arity$2 ? pred__18461.cljs$core$IFn$_invoke$arity$2(G__18466,G__18467) : pred__18461.call(null,G__18466,G__18467));
})())){
return (new cljs.pprint.compiled_directive(self__.func,G__18454,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18468 = cljs.core.cst$kw$params;
var G__18469 = expr__18462;
return (pred__18461.cljs$core$IFn$_invoke$arity$2 ? pred__18461.cljs$core$IFn$_invoke$arity$2(G__18468,G__18469) : pred__18461.call(null,G__18468,G__18469));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__18454,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18470 = cljs.core.cst$kw$offset;
var G__18471 = expr__18462;
return (pred__18461.cljs$core$IFn$_invoke$arity$2 ? pred__18461.cljs$core$IFn$_invoke$arity$2(G__18470,G__18471) : pred__18461.call(null,G__18470,G__18471));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__18454,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4180__auto__,G__18454),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$func,self__.func,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$def,self__.def,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$params,self__.params,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$offset,self__.offset,null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__18454){
var self__ = this;
var this__4171__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__18454,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$func,cljs.core.cst$sym$def,cljs.core.cst$sym$params,cljs.core.cst$sym$offset], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/compiled-directive",null,(1),null));
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/compiled-directive");
});

/**
 * Positional factory function for cljs.pprint/compiled-directive.
 */
cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

/**
 * Factory function for cljs.pprint/compiled-directive, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__18458){
return (new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(G__18458),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(G__18458),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__18458),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__18458),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18458,cljs.core.cst$kw$func,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], 0))),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__18473,navigator){
var vec__18474 = p__18473;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18474,(0),null);
var vec__18477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18474,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18477,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18477,(1),null);
var vec__18480 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$parameter_DASH_from_DASH_args))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$remaining_DASH_arg_DASH_count))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18480,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18480,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__18483 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18483,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18483,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_(n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__3922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,n) : cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n)))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__18486 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18486,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18486,(1),null);
var base_output = (function (){var or__3922__auto__ = cljs.pprint.format_simple_number(arg);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (print_func.cljs$core$IFn$_invoke$arity$1 ? print_func.cljs$core$IFn$_invoke$arity$1(arg) : print_func.call(null,arg));
}
})();
var base_width = base_output.length;
var min_width = (base_width + cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot(((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params)) + (1)) * cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((width - base_width),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join('')], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join('')], 0));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_(x)){
return true;
} else {
if(cljs.pprint.float_QMARK_(x)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__18489_SHARP_){
if((p1__18489_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__18489_SHARP_,base),cljs.core.quot(p1__18489_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (xlated_val){
return (function (p1__18490_SHARP_){
if((p1__18490_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__18490_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__18490_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders(base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str(base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(unit,x))),cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(unit,x))], null);
}),cljs.core.reverse(lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__18492 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18492,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18492,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_(arg))){
var neg_18495 = (arg < (0));
var pos_arg_18496 = ((neg_18495)?(- arg):arg);
var raw_str_18497 = cljs.pprint.opt_base_str(base,pos_arg_18496);
var group_str_18498 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (neg_18495,pos_arg_18496,raw_str_18497,vec__18492,arg,arg_navigator__$1){
return (function (p1__18491_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__18491_SHARP_);
});})(neg_18495,pos_arg_18496,raw_str_18497,vec__18492,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_(cljs.core.cst$kw$commainterval.cljs$core$IFn$_invoke$arity$1(params),raw_str_18497));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),cljs.core.cst$kw$commachar.cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_18497);
var signed_str_18499 = ((neg_18495)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_18498)].join(''):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_18498)].join(''):group_str_18498
));
var padded_str_18500 = (((signed_str_18499.length < cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - signed_str_18499.length),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_18499)].join(''):signed_str_18499);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([padded_str_18500], 0));
} else {
cljs.pprint.format_ascii(cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$colinc,(1),cljs.core.cst$kw$minpad,(0),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((hundreds > (0))) && ((tens > (0)))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count(parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first(parts);
var remainder = cljs.core.next(parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",acc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((!(cljs.core.empty_QMARK_(this$))) && (!(cljs.core.empty_QMARK_(acc)))))?", ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((!(cljs.core.empty_QMARK_(this$))) && (((pos + offset) > (0)))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__18501 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__18502 = (pos - (1));
var G__18503 = cljs.core.first(remainder);
var G__18504 = cljs.core.next(remainder);
acc = G__18501;
pos = G__18502;
this$ = G__18503;
remainder = G__18504;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__18505 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18505,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18505,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zero"], 0));
} else {
var abs_arg_18508 = (((arg < (0)))?(- arg):arg);
var parts_18509 = cljs.pprint.remainders((1000),abs_arg_18508);
if((cljs.core.count(parts_18509) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_18510 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_18509);
var full_str_18511 = cljs.pprint.add_english_scales(parts_strs_18510,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_str_18511)].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((hundreds > (0))) && ((tens > (0)))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
if((((ten_digit > (0))) && (!((unit_digit > (0)))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__18512 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18512,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18512,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zeroth"], 0));
} else {
var abs_arg_18515 = (((arg < (0)))?(- arg):arg);
var parts_18516 = cljs.pprint.remainders((1000),abs_arg_18515);
if((cljs.core.count(parts_18516) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_18517 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_18516));
var head_str_18518 = cljs.pprint.add_english_scales(parts_strs_18517,(1));
var tail_str_18519 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_18516));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((!(cljs.core.empty_QMARK_(head_str_18518))) && (!(cljs.core.empty_QMARK_(tail_str_18519)))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_18518),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail_str_18519)].join(''):((!(cljs.core.empty_QMARK_(head_str_18518)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_18518),"th"].join(''):tail_str_18519
)))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));

var low_two_digits_18520 = cljs.core.rem(arg,(100));
var not_teens_18521 = ((((11) < low_two_digits_18520)) || (((19) > low_two_digits_18520)));
var low_digit_18522 = cljs.core.rem(low_two_digits_18520,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((low_digit_18522 === (1))) && (not_teens_18521)))?"st":(((((low_digit_18522 === (2))) && (not_teens_18521)))?"nd":(((((low_digit_18522 === (3))) && (not_teens_18521)))?"rd":"th"
)))], 0));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__18523 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18523,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18523,(1),null);
if(((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000))))){
var digits_18526 = cljs.pprint.remainders((10),arg);
var acc_18527 = cljs.core.PersistentVector.EMPTY;
var pos_18528 = (cljs.core.count(digits_18526) - (1));
var digits_18529__$1 = digits_18526;
while(true){
if(cljs.core.empty_QMARK_(digits_18529__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_18527)], 0));
} else {
var digit_18530 = cljs.core.first(digits_18529__$1);
var G__18531 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_18530))?acc_18527:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_18527,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_18528),(digit_18530 - (1)))));
var G__18532 = (pos_18528 - (1));
var G__18533 = cljs.core.next(digits_18529__$1);
acc_18527 = G__18531;
pos_18528 = G__18532;
digits_18529__$1 = G__18533;
continue;
}
break;
}
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__18534 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18534,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18534,(1),null);
var as_int = cljs.pprint.char_code(c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Meta-"], 0));
} else {
}

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((base_char + (64))))].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_char,(127)))?"Control-?":cljs.core.char$(base_char)
)))], 0));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__18537 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18537,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18537,(1),null);
var pred__18540_18547 = cljs.core._EQ_;
var expr__18541_18548 = cljs.core.cst$kw$char_DASH_format.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((function (){var G__18543 = "o";
var G__18544 = expr__18541_18548;
return (pred__18540_18547.cljs$core$IFn$_invoke$arity$2 ? pred__18540_18547.cljs$core$IFn$_invoke$arity$2(G__18543,G__18544) : pred__18540_18547.call(null,G__18543,G__18544));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3, '0o",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((function (){var G__18545 = "u";
var G__18546 = expr__18541_18548;
return (pred__18540_18547.cljs$core$IFn$_invoke$arity$2 ? pred__18540_18547.cljs$core$IFn$_invoke$arity$2(G__18545,G__18546) : pred__18540_18547.call(null,G__18545,G__18546));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4, '0x",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__18540_18547.cljs$core$IFn$_invoke$arity$2 ? pred__18540_18547.cljs$core$IFn$_invoke$arity$2(null,expr__18541_18548) : pred__18540_18547.call(null,null,expr__18541_18548)))){
cljs.pprint.print_char(c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__18541_18548)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__18549 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18549,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18549,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([char$], 0));

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first(context);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,token)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,token)));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second(cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__18552 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18552,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18552,(1),null);
var vec__18555 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18555,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18555,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case([cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count(s) - (1)))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),dotloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(dotloc + (1))))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))].join('')], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),exploc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),exploc))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__18558 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18558,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18558,(1),null);
var m1 = cljs.pprint.rtrim(m,"0");
var m2 = cljs.pprint.ltrim(m1,"0");
var delta = (cljs.core.count(m1) - cljs.core.count(m2));
var e__$1 = (((((cljs.core.count(e) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),"+"))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(e,(1)):e);
if(cljs.core.empty_QMARK_(m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count(s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"1",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("9",s.charAt(i))){
var G__18561 = (i - (1));
i = G__18561;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.char$((cljs.pprint.char_code(s.charAt(i)) + (1))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__3922__auto__ = d;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count(m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__4006__auto__ = (2);
var y__4007__auto__ = w;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__4006__auto__ = (e + (1));
var y__4007__auto__ = (w__$1 - (1));
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})():(w__$1 + e)
));
var vec__18562 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18562,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18562,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18562,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18562,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m1,round_pos__$1);
var result = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m1,(0),round_pos__$1);
if((cljs.pprint.char_code(round_char) >= cljs.pprint.char_code("5"))){
var round_up_result = cljs.pprint.inc_s(result);
var expanded = (cljs.core.count(round_up_result) > cljs.core.count(result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(round_up_result,(0),(cljs.core.count(round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__18565 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18565,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18565,(1),null);
var len = cljs.core.count(m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),loc)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal(cljs.pprint.expand_fixed(m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),k)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var vec__18568 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18568,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18568,(1),null);
var vec__18571 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18571,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18571,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__18574 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18574,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18574,(1),null);
var scaled_exp = (exp + cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__3922__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = ((cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp)));
var vec__18577 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18577,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18577,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18577,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__3911__auto__ = w;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = d;
if(cljs.core.truth_(and__3911__auto____$1)){
return (((d >= (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((1)),".")) && ((cljs.core.count(fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0))))));
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_18580 = cljs.core.count(fixed_repr__$1);
var signed_len_18581 = (cljs.core.truth_(add_sign)?(len_18580 + (1)):len_18580);
var prepend_zero_18582__$1 = ((prepend_zero) && (!((signed_len_18581 >= w))));
var append_zero_18583__$1 = ((append_zero) && (!((signed_len_18581 >= w))));
var full_len_18584 = ((((prepend_zero_18582__$1) || (append_zero_18583__$1)))?(signed_len_18581 + (1)):signed_len_18581);
if(cljs.core.truth_((function (){var and__3911__auto__ = (full_len_18584 > w);
if(and__3911__auto__){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__3911__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_18584),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_18582__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_18583__$1)?"0":null))].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero)?"0":null))].join('')], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__18585 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18585,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18585,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__18591_18601 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__18592_18602 = G__18591_18601;
var mantissa_18603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18592_18602,(0),null);
var exp_18604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18592_18602,(1),null);
var G__18591_18605__$1 = G__18591_18601;
while(true){
var vec__18595_18606 = G__18591_18605__$1;
var mantissa_18607__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18595_18606,(0),null);
var exp_18608__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18595_18606,(1),null);
var w_18609 = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d_18610 = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e_18611 = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var k_18612 = cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params);
var expchar_18613 = (function (){var or__3922__auto__ = cljs.core.cst$kw$exponentchar.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "E";
}
})();
var add_sign_18614 = (function (){var or__3922__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_18615 = (k_18612 <= (0));
var scaled_exp_18616 = (exp_18608__$1 - (k_18612 - (1)));
var scaled_exp_str_18617 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_18616))].join('');
var scaled_exp_str_18618__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_18613),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((scaled_exp_18616 < (0)))?"-":"+")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_18611)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_18611 - cljs.core.count(scaled_exp_str_18617)),"0")):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_18617)].join('');
var exp_width_18619 = cljs.core.count(scaled_exp_str_18618__$1);
var base_mantissa_width_18620 = cljs.core.count(mantissa_18607__$1);
var scaled_mantissa_18621 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_18612),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_18607__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_18610)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_18610 - (base_mantissa_width_18620 - (1))) - (((k_18612 < (0)))?(- k_18612):(0))),"0")):null))].join('');
var w_mantissa_18622 = (cljs.core.truth_(w_18609)?(w_18609 - exp_width_18619):null);
var vec__18598_18623 = cljs.pprint.round_str(scaled_mantissa_18621,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_18612,(0)))?(d_18610 - (1)):(((k_18612 > (0)))?d_18610:(((k_18612 < (0)))?(d_18610 - (1)):null))),(cljs.core.truth_(w_mantissa_18622)?(w_mantissa_18622 - (cljs.core.truth_(add_sign_18614)?(1):(0))):null));
var rounded_mantissa_18624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18598_18623,(0),null);
var __18625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18598_18623,(1),null);
var incr_exp_18626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18598_18623,(2),null);
var full_mantissa_18627 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_18624,k_18612);
var append_zero_18628 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_18612,cljs.core.count(rounded_mantissa_18624))) && ((d_18610 == null)));
if(cljs.core.not(incr_exp_18626)){
if(cljs.core.truth_(w_18609)){
var len_18629 = (cljs.core.count(full_mantissa_18627) + exp_width_18619);
var signed_len_18630 = (cljs.core.truth_(add_sign_18614)?(len_18629 + (1)):len_18629);
var prepend_zero_18631__$1 = ((prepend_zero_18615) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_18630,w_18609))));
var full_len_18632 = ((prepend_zero_18631__$1)?(signed_len_18630 + (1)):signed_len_18630);
var append_zero_18633__$1 = ((append_zero_18628) && ((full_len_18632 < w_18609)));
if(cljs.core.truth_((function (){var and__3911__auto__ = (function (){var or__3922__auto__ = (full_len_18632 > w_18609);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = e_18611;
if(cljs.core.truth_(and__3911__auto__)){
return ((exp_width_18619 - (2)) > e_18611);
} else {
return and__3911__auto__;
}
}
})();
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__3911__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_18609,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_18609 - full_len_18632) - ((append_zero_18633__$1)?(1):(0))),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_18614)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_18631__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_18627),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_18633__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_18618__$1)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_18614)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_18615)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_18627),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_18628)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_18618__$1)].join('')], 0));
}
} else {
var G__18634 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_18624,(exp_18608__$1 + (1))], null);
G__18591_18605__$1 = G__18634;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__18635 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18635,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18635,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__18638 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18638,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18638,(1),null);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__4006__auto__ = cljs.core.count(mantissa);
var y__4007__auto__ = (function (){var x__4009__auto__ = n;
var y__4010__auto__ = (7);
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})());
var dd = (d__$1 - n);
if(((((0) <= dd)) && ((dd <= d__$1)))){
var navigator__$1 = cljs.pprint.fixed_float(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$w,ww,cljs.core.cst$kw$d,dd,cljs.core.cst$kw$k,(0),cljs.core.cst$kw$overflowchar,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ee," "))], 0));

return navigator__$1;
} else {
return cljs.pprint.exponential_float(params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__18641 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18641,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18641,(1),null);
var vec__18644 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18644,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18644,(1),null);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__3922__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (arg < (0));
}
})();
var vec__18647 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18647,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18647,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18647,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - fixed_repr.indexOf(".")),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr)].join('');
var full_len = (cljs.core.count(full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__3911__auto__)){
return add_sign;
} else {
return and__3911__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params));
if(and__3911__auto__){
return add_sign;
} else {
return and__3911__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_repr)].join('')], 0));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(params);
var vec__18650 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18650,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18650,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses)))))?cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__18653 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18653,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18653,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__18656 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18656,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18656,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first(clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,arg_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__18659 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18659,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18659,(1),null);
var vec__18662 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18662,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18662,(1),null);
var args = cljs.pprint.init_navigator(arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1))))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__3922__auto__ = ((cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(args__$1))) && (((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = max_count;
if(cljs.core.truth_(and__3911__auto__)){
return (count >= max_count);
} else {
return and__3911__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,args__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__18665 = (count + (1));
var G__18666 = iter_result;
var G__18667 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__18665;
args__$1 = G__18666;
last_pos = G__18667;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__18668 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18668,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18668,(1),null);
var vec__18671 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18671,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18671,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__3922__auto__ = ((cljs.core.empty_QMARK_(arg_list__$1)) && (((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = max_count;
if(cljs.core.truth_(and__3911__auto__)){
return (count >= max_count);
} else {
return and__3911__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(cljs.core.first(arg_list__$1)),cljs.pprint.init_navigator(cljs.core.next(arg_list__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__18674 = (count + (1));
var G__18675 = cljs.core.next(arg_list__$1);
count = G__18674;
arg_list__$1 = G__18675;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__18676 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18676,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18676,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1))))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__3922__auto__ = ((cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = max_count;
if(cljs.core.truth_(and__3911__auto__)){
return (count >= max_count);
} else {
return and__3911__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return cljs.core.second(iter_result);
} else {
var G__18679 = (count + (1));
var G__18680 = iter_result;
var G__18681 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__18679;
navigator__$2 = G__18680;
last_pos = G__18681;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__18682 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18682,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18682,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__3922__auto__ = ((cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = max_count;
if(cljs.core.truth_(and__3911__auto__)){
return (count >= max_count);
} else {
return and__3911__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__18685 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18685,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18685,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__18688 = (count + (1));
var G__18689 = navigator__$3;
count = G__18688;
navigator__$2 = G__18689;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))){
return (cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.format_logical_block.call(null,params,navigator,offsets));
} else {
return (cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.justify_clauses.call(null,params,navigator,offsets));
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_(clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first(clauses__$1);
var vec__18690 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_18693 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_18693;
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18690,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18690,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__18694 = cljs.core.next(clauses__$1);
var G__18695 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__18696 = iter_result;
clauses__$1 = G__18694;
acc = G__18695;
navigator__$1 = G__18696;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__18697 = (function (){var temp__4657__auto__ = cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__4657__auto__)){
var else$ = temp__4657__auto__;
return cljs.pprint.render_clauses(else$,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__18700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18697,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18700,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18697,(1),null);
var navigator__$1 = (function (){var or__3922__auto__ = new_navigator;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return navigator;
}
})();
var vec__18703 = (function (){var temp__4657__auto__ = cljs.core.cst$kw$else_DASH_params.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__4657__auto__)){
var p = temp__4657__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18703,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18703,(1),null);
var navigator__$2 = (function (){var or__3922__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__3922__auto__ = cljs.core.first(cljs.core.cst$kw$min_DASH_remaining.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__3922__auto__ = cljs.core.first(cljs.core.cst$kw$max_DASH_columns.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.pprint.get_max_column(cljs.core._STAR_out_STAR_);
}
})();
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var vec__18706 = cljs.pprint.render_clauses(clauses,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18706,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18706,(1),null);
var slots = (function (){var x__4006__auto__ = (1);
var y__4007__auto__ = (((cljs.core.count(strs) - (1)) + (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
var chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,strs));
var mincol = cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params);
var minpad = cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params);
var colinc = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot(((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__4006__auto__ = minpad;
var y__4007__auto__ = cljs.core.quot(total_pad,slots);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pad,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__3911__auto__ = eol_str;
if(cljs.core.truth_(and__3911__auto__)){
return (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__3911__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eol_str], 0));
} else {
}

var slots_18709__$1 = slots;
var extra_pad_18710__$1 = extra_pad;
var strs_18711__$1 = strs;
var pad_only_18712 = (function (){var or__3922__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_18711__$1),(1))) && (cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))));
}
})();
while(true){
if(cljs.core.seq(strs_18711__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(pad_only_18712))?cljs.core.first(strs_18711__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__3922__auto__ = pad_only_18712;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = cljs.core.next(strs_18711__$1);
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_18710__$1 > (0)))?cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__18713 = (slots_18709__$1 - (1));
var G__18714 = (extra_pad_18710__$1 - (1));
var G__18715 = (cljs.core.truth_(pad_only_18712)?strs_18711__$1:cljs.core.next(strs_18711__$1));
var G__18716 = false;
slots_18709__$1 = G__18713;
extra_pad_18710__$1 = G__18714;
strs_18711__$1 = G__18715;
pad_only_18712 = G__18716;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint18717 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint18717 = (function (writer,meta18718){
this.writer = writer;
this.meta18718 = meta18718;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint18717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18719,meta18718__$1){
var self__ = this;
var _18719__$1 = this;
return (new cljs.pprint.t_cljs$pprint18717(self__.writer,meta18718__$1));
});

cljs.pprint.t_cljs$pprint18717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18719){
var self__ = this;
var _18719__$1 = this;
return self__.meta18718;
});

cljs.pprint.t_cljs$pprint18717.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint18717.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__18720 = cljs.core._EQ_;
var expr__18721 = cljs.core.type(x);
if(cljs.core.truth_((pred__18720.cljs$core$IFn$_invoke$arity$2 ? pred__18720.cljs$core$IFn$_invoke$arity$2(String,expr__18721) : pred__18720.call(null,String,expr__18721)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__18720.cljs$core$IFn$_invoke$arity$2 ? pred__18720.cljs$core$IFn$_invoke$arity$2(Number,expr__18721) : pred__18720.call(null,Number,expr__18721)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__18721)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint18717.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta18718], null);
});

cljs.pprint.t_cljs$pprint18717.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint18717.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint18717";

cljs.pprint.t_cljs$pprint18717.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.pprint/t_cljs$pprint18717");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint18717.
 */
cljs.pprint.__GT_t_cljs$pprint18717 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint18717(writer__$1,meta18718){
return (new cljs.pprint.t_cljs$pprint18717(writer__$1,meta18718));
});

}

return (new cljs.pprint.t_cljs$pprint18717(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint18723 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint18723 = (function (writer,meta18724){
this.writer = writer;
this.meta18724 = meta18724;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint18723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18725,meta18724__$1){
var self__ = this;
var _18725__$1 = this;
return (new cljs.pprint.t_cljs$pprint18723(self__.writer,meta18724__$1));
});

cljs.pprint.t_cljs$pprint18723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18725){
var self__ = this;
var _18725__$1 = this;
return self__.meta18724;
});

cljs.pprint.t_cljs$pprint18723.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint18723.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__18726 = cljs.core._EQ_;
var expr__18727 = cljs.core.type(x);
if(cljs.core.truth_((pred__18726.cljs$core$IFn$_invoke$arity$2 ? pred__18726.cljs$core$IFn$_invoke$arity$2(String,expr__18727) : pred__18726.call(null,String,expr__18727)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__18726.cljs$core$IFn$_invoke$arity$2 ? pred__18726.cljs$core$IFn$_invoke$arity$2(Number,expr__18727) : pred__18726.call(null,Number,expr__18727)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__18727)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint18723.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta18724], null);
});

cljs.pprint.t_cljs$pprint18723.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint18723.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint18723";

cljs.pprint.t_cljs$pprint18723.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.pprint/t_cljs$pprint18723");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint18723.
 */
cljs.pprint.__GT_t_cljs$pprint18723 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint18723(writer__$1,meta18724){
return (new cljs.pprint.t_cljs$pprint18723(writer__$1,meta18724));
});

}

return (new cljs.pprint.t_cljs$pprint18723(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first(s);
var s__$1 = (cljs.core.truth_((function (){var and__3911__auto__ = first_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = f;
if(cljs.core.truth_(and__3911__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join(''):s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(cljs.pprint.consume(((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_(s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__3911__auto__ = m;
if(cljs.core.truth_(and__3911__auto__)){
return (m.index + (1));
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$2,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$2,offset)))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.pprint.t_cljs$pprint18729 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint18729 = (function (writer,last_was_whitespace_QMARK_,meta18730){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta18730 = meta18730;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint18729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_18731,meta18730__$1){
var self__ = this;
var _18731__$1 = this;
return (new cljs.pprint.t_cljs$pprint18729(self__.writer,self__.last_was_whitespace_QMARK_,meta18730__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint18729.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_18731){
var self__ = this;
var _18731__$1 = this;
return self__.meta18730;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint18729.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint18729.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__18732 = cljs.core._EQ_;
var expr__18733 = cljs.core.type(x);
if(cljs.core.truth_((pred__18732.cljs$core$IFn$_invoke$arity$2 ? pred__18732.cljs$core$IFn$_invoke$arity$2(String,expr__18733) : pred__18732.call(null,String,expr__18733)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),cljs.core.deref(self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,(function (){var G__18735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
return goog.string.isEmptyOrWhitespace(G__18735);
})());
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__18732.cljs$core$IFn$_invoke$arity$2 ? pred__18732.cljs$core$IFn$_invoke$arity$2(Number,expr__18733) : pred__18732.call(null,Number,expr__18733)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_(cljs.core.deref(self__.last_was_whitespace_QMARK_))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__18733)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint18729.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$last_DASH_was_DASH_whitespace_QMARK_,cljs.core.cst$sym$meta18730], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint18729.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint18729.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint18729";

cljs.pprint.t_cljs$pprint18729.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.pprint/t_cljs$pprint18729");
});})(last_was_whitespace_QMARK_))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint18729.
 */
cljs.pprint.__GT_t_cljs$pprint18729 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint18729(writer__$1,last_was_whitespace_QMARK___$1,meta18730){
return (new cljs.pprint.t_cljs$pprint18729(writer__$1,last_was_whitespace_QMARK___$1,meta18730));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint18729(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if(typeof cljs.pprint.t_cljs$pprint18736 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint18736 = (function (writer,capped,meta18737){
this.writer = writer;
this.capped = capped;
this.meta18737 = meta18737;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint18736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_18738,meta18737__$1){
var self__ = this;
var _18738__$1 = this;
return (new cljs.pprint.t_cljs$pprint18736(self__.writer,self__.capped,meta18737__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint18736.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_18738){
var self__ = this;
var _18738__$1 = this;
return self__.meta18737;
});})(capped))
;

cljs.pprint.t_cljs$pprint18736.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint18736.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__18739 = cljs.core._EQ_;
var expr__18740 = cljs.core.type(x);
if(cljs.core.truth_((pred__18739.cljs$core$IFn$_invoke$arity$2 ? pred__18739.cljs$core$IFn$_invoke$arity$2(String,expr__18740) : pred__18739.call(null,String,expr__18740)))){
var s = clojure.string.lower_case(x);
if(cljs.core.not(cljs.core.deref(self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__3911__auto__ = m;
if(cljs.core.truth_(and__3911__auto__)){
return m.index;
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write(self__.writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,offset))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(offset + (1)))))].join(''));

return cljs.core.reset_BANG_(self__.capped,true);
} else {
return cljs.core._write(self__.writer,s);
}
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
}
} else {
if(cljs.core.truth_((pred__18739.cljs$core$IFn$_invoke$arity$2 ? pred__18739.cljs$core$IFn$_invoke$arity$2(Number,expr__18740) : pred__18739.call(null,Number,expr__18740)))){
var c = cljs.core.char$(x);
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not(cljs.core.deref(self__.capped));
if(and__3911__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__3911__auto__;
}
})())){
cljs.core.reset_BANG_(self__.capped,true);

return cljs.core._write(self__.writer,clojure.string.upper_case(c));
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__18740)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint18736.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$capped,cljs.core.cst$sym$meta18737], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint18736.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint18736.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint18736";

cljs.pprint.t_cljs$pprint18736.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.pprint/t_cljs$pprint18736");
});})(capped))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint18736.
 */
cljs.pprint.__GT_t_cljs$pprint18736 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint18736(writer__$1,capped__$1,meta18737){
return (new cljs.pprint.t_cljs$pprint18736(writer__$1,capped__$1,meta18737));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint18736(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_18742 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer.call(null,cljs.core._STAR_out_STAR_));

try{return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_18742;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_(writer))){
return writer;
} else {
return cljs.pprint.pretty_writer(writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if(((!((cljs.core._STAR_out_STAR_ == null)))?(((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$))))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))))))){
return cljs.pprint.prn();
} else {
return null;
}
} else {
return cljs.pprint.prn();
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_18744 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_18745 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var current_18746 = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))));
var space_count_18747 = (((current_18746 < colnum_18744))?(colnum_18744 - current_18746):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_18745,(0)))?(0):(colinc_18745 - cljs.core.rem((current_18746 - colnum_18744),colinc_18745))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_18747," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_18748 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_18749 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var start_col_18750 = (colrel_18748 + cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))));
var offset_18751 = (((colinc_18749 > (0)))?cljs.core.rem(start_col_18750,colinc_18749):(0));
var space_count_18752 = (colrel_18748 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_18751))?(0):(colinc_18749 - offset_18751)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_18752," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__18753 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18753,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18753,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18756_18758 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18757_18759 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18757_18759;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18756_18758;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$current:cljs.core.cst$kw$block);
cljs.pprint.pprint_indent(relative_to,cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$mandatory:cljs.core.cst$kw$fill):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$miser:cljs.core.cst$kw$linear));
cljs.pprint.pprint_newline(kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"A",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__18760_SHARP_,p2__18761_SHARP_,p3__18762_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__18760_SHARP_,p2__18761_SHARP_,p3__18762_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"S",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__18763_SHARP_,p2__18764_SHARP_,p3__18765_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__18763_SHARP_,p2__18764_SHARP_,p3__18765_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"D",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__18766_SHARP_,p2__18767_SHARP_,p3__18768_SHARP_){
return cljs.pprint.format_integer((10),p1__18766_SHARP_,p2__18767_SHARP_,p3__18768_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"B",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__18769_SHARP_,p2__18770_SHARP_,p3__18771_SHARP_){
return cljs.pprint.format_integer((2),p1__18769_SHARP_,p2__18770_SHARP_,p3__18771_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"O",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__18772_SHARP_,p2__18773_SHARP_,p3__18774_SHARP_){
return cljs.pprint.format_integer((8),p1__18772_SHARP_,p2__18773_SHARP_,p3__18774_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"X",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__18775_SHARP_,p2__18776_SHARP_,p3__18777_SHARP_){
return cljs.pprint.format_integer((16),p1__18775_SHARP_,p2__18776_SHARP_,p3__18777_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"R",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.first(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__18778_SHARP_,p2__18779_SHARP_,p3__18780_SHARP_){
return cljs.pprint.format_integer(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(p1__18778_SHARP_),p1__18778_SHARP_,p2__18779_SHARP_,p3__18780_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__3911__auto__;
}
})())){
return (function (p1__18781_SHARP_,p2__18782_SHARP_,p3__18783_SHARP_){
return cljs.pprint.format_old_roman(p1__18781_SHARP_,p2__18782_SHARP_,p3__18783_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__18784_SHARP_,p2__18785_SHARP_,p3__18786_SHARP_){
return cljs.pprint.format_new_roman(p1__18784_SHARP_,p2__18785_SHARP_,p3__18786_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__18787_SHARP_,p2__18788_SHARP_,p3__18789_SHARP_){
return cljs.pprint.format_ordinal_english(p1__18787_SHARP_,p2__18788_SHARP_,p3__18789_SHARP_);
});
} else {
return (function (p1__18790_SHARP_,p2__18791_SHARP_,p3__18792_SHARP_){
return cljs.pprint.format_cardinal_english(p1__18790_SHARP_,p2__18791_SHARP_,p3__18792_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"P",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__18802 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18802,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18802,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,(1)))?cljs.core.first(strs):cljs.core.second(strs))], 0));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"C",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$char_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"F",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"E",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"G",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"$",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"%",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__4376__auto___18820 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_18821 = (0);
while(true){
if((i_18821 < n__4376__auto___18820)){
cljs.pprint.prn();

var G__18822 = (i_18821 + (1));
i_18821 = G__18822;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"&",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_18823 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_18823 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__4376__auto___18824 = (cnt_18823 - (1));
var i_18825 = (0);
while(true){
if((i_18825 < n__4376__auto___18824)){
cljs.pprint.prn();

var G__18826 = (i_18825 + (1));
i_18825 = G__18826;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"|",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__4376__auto___18827 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_18828 = (0);
while(true){
if((i_18828 < n__4376__auto___18827)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\f"], 0));

var G__18829 = (i_18828 + (1));
i_18828 = G__18829;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"~",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"~"))], 0));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"\n",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn();
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"T",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$colnum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__18793_SHARP_,p2__18794_SHARP_,p3__18795_SHARP_){
return cljs.pprint.relative_tabulation(p1__18793_SHARP_,p2__18794_SHARP_,p3__18795_SHARP_);
});
} else {
return (function (p1__18796_SHARP_,p2__18797_SHARP_,p3__18798_SHARP_){
return cljs.pprint.absolute_tabulation(p1__18796_SHARP_,p2__18797_SHARP_,p3__18798_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"*",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition(navigator,n);
} else {
return cljs.pprint.relative_reposition(navigator,(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"?",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__18805 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18805,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18805,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__18808 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18808,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18808,(1),null);
var vec__18811 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18811,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18811,(1),null);
var sub_navigator = cljs.pprint.init_navigator(subargs);
cljs.pprint.execute_sub_format(subformat,sub_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"(",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,")",cljs.core.cst$kw$allows_DASH_separator,null,cljs.core.cst$kw$else,null], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__3911__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__18799_SHARP_,p2__18800_SHARP_,p3__18801_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__18799_SHARP_,p2__18800_SHARP_,p3__18801_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,")",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"[",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$selector,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,"]",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$last], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,";",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$min_DASH_remaining,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$max_DASH_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$separator,true], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"]",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"{",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$max_DASH_iterations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$right,"}",cljs.core.cst$kw$allows_DASH_separator,false], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__3911__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"}",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"<",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,">",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$first], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,">",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"^",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(3),[cljs.core.cst$kw$arg1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.cst$kw$colon_DASH_up_DASH_arrow:cljs.core.cst$kw$up_DASH_arrow);
if(cljs.core.truth_((function (){var and__3911__auto__ = arg1;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = arg2;
if(cljs.core.truth_(and__3911__auto____$1)){
return arg3;
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
if((((arg1 <= arg2)) && ((arg2 <= arg3)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = arg1;
if(cljs.core.truth_(and__3911__auto__)){
return arg2;
} else {
return and__3911__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"W",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,null,cljs.core.cst$kw$length,null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pretty,true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__18814 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18814,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18814,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__18817 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18817,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18817,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out(arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"_",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"I",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remaining_DASH_arg_DASH_count,null,cljs.core.cst$kw$parameter_DASH_from_DASH_args,null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__18830){
var vec__18831 = p__18830;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18831,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18831,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18831,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first(param);
var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remainder,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error("Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume(cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__18834){
var vec__18835 = p__18834;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18835,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18835,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?cljs.core.cst$kw$parameter_DASH_from_DASH_args:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?cljs.core.cst$kw$remaining_DASH_arg_DASH_count:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",cljs.core.cst$kw$colon,"@",cljs.core.cst$kw$at], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__18838){
var vec__18839 = p__18838;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18839,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18839,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18839,(2),null);
if(cljs.core.empty_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.flag_defs,cljs.core.first(s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_(flags,flag)){
return cljs.pprint.format_error(["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__3911__auto__){
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__3911__auto__;
}
})())){
cljs.pprint.format_error(["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__3911__auto__){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__3911__auto__;
}
})())){
cljs.pprint.format_error(["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not(cljs.core.cst$kw$both.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__3911__auto__){
var and__3911__auto____$1 = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__3911__auto____$1)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
return cljs.pprint.format_error(["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__4009__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__4010__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags(def,flags);

if((cljs.core.count(params) > cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def),cljs.core.count(params),cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def))], 0)),cljs.core.second(cljs.core.first(params)));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__18842_SHARP_,p2__18843_SHARP_){
var val = cljs.core.first(p1__18842_SHARP_);
if(!((((val == null)) || (cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__18843_SHARP_)),cljs.core.type(val)))))){
return cljs.pprint.format_error(["Parameter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(p2__18843_SHARP_)))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(val))].join(''),cljs.core.second(p1__18842_SHARP_));
} else {
return null;
}
}),params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__4292__auto__ = (function cljs$pprint$map_params_$_iter__18847(s__18848){
return (new cljs.core.LazySeq(null,(function (){
var s__18848__$1 = s__18848;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18848__$1);
if(temp__4657__auto__){
var s__18848__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18848__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__18848__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__18850 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__18849 = (0);
while(true){
if((i__18849 < size__4291__auto__)){
var vec__18851 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__18849);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18851,(0),null);
var vec__18854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18851,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18854,(0),null);
cljs.core.chunk_append(b__18850,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__18863 = (i__18849 + (1));
i__18849 = G__18863;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18850),cljs$pprint$map_params_$_iter__18847(cljs.core.chunk_rest(s__18848__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18850),null);
}
} else {
var vec__18857 = cljs.core.first(s__18848__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18857,(0),null);
var vec__18860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18857,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18860,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__18847(cljs.core.rest(s__18848__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__18844_SHARP_,p2__18845_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__18844_SHARP_,p2__18845_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18846_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__18846_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__18864 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18864,(0),null);
var vec__18867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18864,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18867,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18867,(1),null);
var vec__18870 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18870,(0),null);
var vec__18873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18870,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18873,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18873,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18873,(2),null);
var directive = cljs.core.first(rest__$1);
var def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.directive_table,clojure.string.upper_case(directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params(def,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not(directive)){
cljs.pprint.format_error("Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not(def)){
cljs.pprint.format_error(["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive((function (){var fexpr__18876 = cljs.core.cst$kw$generator_DASH_fn.cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__18876.cljs$core$IFn$_invoke$arity$2 ? fexpr__18876.cljs$core$IFn$_invoke$arity$2(params,offset__$2) : fexpr__18876.call(null,params,offset__$2));
})(),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count(remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__3911__auto__ = cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__3911__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__18877 = (function (){var G__18880 = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
var G__18881 = cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$);
var G__18882 = remainder;
return (cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3(G__18880,G__18881,G__18882) : cljs.pprint.collect_clauses.call(null,G__18880,G__18881,G__18882));
})();
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18877,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18877,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map(subex,cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$))], 0)),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume((function (remainder__$1){
if(cljs.core.empty_QMARK_(remainder__$1)){
return cljs.pprint.format_error("No closing bracket found.",offset);
} else {
var this$ = cljs.core.first(remainder__$1);
var remainder__$2 = cljs.core.next(remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket(this$))){
return cljs.pprint.process_bracket(this$,remainder__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket_info),cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_bracket,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$else,null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$separator,null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second(cljs.pprint.consume((function (p__18883){
var vec__18884 = p__18883;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18884,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18884,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18884,(2),null);
var vec__18887 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18887,(0),null);
var vec__18890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18887,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18890,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18890,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18890,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18890,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$right_DASH_bracket)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?cljs.core.cst$kw$else:cljs.core.cst$kw$clauses),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$right_DASH_params,right_params])], 0)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$else)){
if(cljs.core.truth_(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error("Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(clause_map))))){
return cljs.pprint.format_error("The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$else,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$else_DASH_params,else_params], null)], 0)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$separator)){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error("A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$allows_DASH_separator.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first(cljs.pprint.consume((function (remainder){
var this$ = cljs.core.first(remainder);
var remainder__$1 = cljs.core.next(remainder);
var bracket = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket(this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR_18893 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume(((function (_STAR_format_str_STAR_18893){
return (function (p__18894){
var vec__18895 = p__18894;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18895,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18895,(1),null);
if(cljs.core.empty_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR_18893))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_18893;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_(format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1))));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
}
}
})())){
return true;
} else {
var G__18898 = cljs.core.next(format__$1);
format__$1 = G__18898;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__18900 = arguments.length;
switch (G__18900) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = ((((cljs.core.not(stream)) || (stream === true)))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = (cljs.core.truth_((function (){var and__3911__auto__ = cljs.pprint.needs_pretty(format);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not(cljs.pprint.pretty_writer_QMARK_(real_stream));
} else {
return and__3911__auto__;
}
})())?cljs.pprint.get_pretty_writer(real_stream):real_stream);
var _STAR_out_STAR_18901 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = wrapped_stream;

try{try{cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(format,args);
}finally {if(!((real_stream === wrapped_stream))){
cljs.core._flush(wrapped_stream);
} else {
}
}
if(cljs.core.not(stream)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
if(stream === true){
return cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_18901;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__18902 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18902,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18902,(1),null);
var vec__18905 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18905,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18905,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;

cljs.pprint.cached_compile = cljs.core.memoize(cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method(multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$quote,"'",cljs.core.cst$sym$var,"#'",cljs.core.cst$sym$clojure$core_SLASH_deref,"@",cljs.core.cst$sym$clojure$core_SLASH_unquote,"~",cljs.core.cst$sym$cljs$core_SLASH_deref,"@",cljs.core.cst$sym$cljs$core_SLASH_unquote,"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = (function (){var G__18909 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__18909) : cljs.pprint.reader_macros.call(null,G__18909));
})();
if(cljs.core.truth_((function (){var and__3911__auto__ = macro_char;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(alis));
} else {
return and__3911__auto__;
}
})())){
cljs.core._write(cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out(cljs.core.second(alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18910_18913 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18911_18914 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count18912_18915 = (0);
var alis_18916__$1 = cljs.core.seq(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count18912_18915 < cljs.core._STAR_print_length_STAR_)))){
if(alis_18916__$1){
cljs.pprint.write_out(cljs.core.first(alis_18916__$1));

if(cljs.core.next(alis_18916__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__18917 = (length_count18912_18915 + (1));
var G__18918 = cljs.core.next(alis_18916__$1);
length_count18912_18915 = G__18917;
alis_18916__$1 = G__18918;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18911_18914;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18910_18913;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
return cljs.pprint.pprint_simple_list(alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18919_18922 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18920_18923 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count18921_18924 = (0);
var aseq_18925 = cljs.core.seq(avec);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count18921_18924 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_18925){
cljs.pprint.write_out(cljs.core.first(aseq_18925));

if(cljs.core.next(aseq_18925)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__18926 = (length_count18921_18924 + (1));
var G__18927 = cljs.core.next(aseq_18925);
length_count18921_18924 = G__18926;
aseq_18925 = G__18927;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18920_18923;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18919_18922;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__16825__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__16826__auto__ = ((typeof format_in__16825__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16825__auto__) : cljs.pprint.cached_compile.call(null,format_in__16825__auto__)):format_in__16825__auto__);
return ((function (format_in__16825__auto__,cf__16826__auto__){
return (function() { 
var G__18928__delegate = function (args__16827__auto__){
var navigator__16828__auto__ = cljs.pprint.init_navigator(args__16827__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16826__auto__,navigator__16828__auto__);
};
var G__18928 = function (var_args){
var args__16827__auto__ = null;
if (arguments.length > 0) {
var G__18929__i = 0, G__18929__a = new Array(arguments.length -  0);
while (G__18929__i < G__18929__a.length) {G__18929__a[G__18929__i] = arguments[G__18929__i + 0]; ++G__18929__i;}
  args__16827__auto__ = new cljs.core.IndexedSeq(G__18929__a,0,null);
} 
return G__18928__delegate.call(this,args__16827__auto__);};
G__18928.cljs$lang$maxFixedArity = 0;
G__18928.cljs$lang$applyTo = (function (arglist__18930){
var args__16827__auto__ = cljs.core.seq(arglist__18930);
return G__18928__delegate(args__16827__auto__);
});
G__18928.cljs$core$IFn$_invoke$arity$variadic = G__18928__delegate;
return G__18928;
})()
;
;})(format_in__16825__auto__,cf__16826__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__18931 = ((!(cljs.core.record_QMARK_(amap)))?(function (){var fexpr__18934 = new cljs.core.Var(function(){return cljs.core.lift_ns;},cljs.core.cst$sym$cljs$core_SLASH_lift_DASH_ns,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$lift_DASH_ns,"cljs/core.cljs",15,1,10104,10104,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)]));
return (fexpr__18934.cljs$core$IFn$_invoke$arity$1 ? fexpr__18934.cljs$core$IFn$_invoke$arity$1(amap) : fexpr__18934.call(null,amap));
})():null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18931,(0),null);
var lift_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18931,(1),null);
var amap__$1 = (function (){var or__3922__auto__ = lift_map;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18935_18940 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18936_18941 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count18937_18942 = (0);
var aseq_18943 = cljs.core.seq(amap__$1);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count18937_18942 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_18943){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18938_18944 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18939_18945 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_18943));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_18943)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18939_18945;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18938_18944;
}}


if(cljs.core.next(aseq_18943)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__18946 = (length_count18937_18942 + (1));
var G__18947 = cljs.core.next(aseq_18943);
length_count18937_18942 = G__18946;
aseq_18943 = G__18947;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18936_18941;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18935_18940;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__16825__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__16826__auto__ = ((typeof format_in__16825__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16825__auto__) : cljs.pprint.cached_compile.call(null,format_in__16825__auto__)):format_in__16825__auto__);
return ((function (format_in__16825__auto__,cf__16826__auto__){
return (function() { 
var G__18948__delegate = function (args__16827__auto__){
var navigator__16828__auto__ = cljs.pprint.init_navigator(args__16827__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16826__auto__,navigator__16828__auto__);
};
var G__18948 = function (var_args){
var args__16827__auto__ = null;
if (arguments.length > 0) {
var G__18949__i = 0, G__18949__a = new Array(arguments.length -  0);
while (G__18949__i < G__18949__a.length) {G__18949__a[G__18949__i] = arguments[G__18949__i + 0]; ++G__18949__i;}
  args__16827__auto__ = new cljs.core.IndexedSeq(G__18949__a,0,null);
} 
return G__18948__delegate.call(this,args__16827__auto__);};
G__18948.cljs$lang$maxFixedArity = 0;
G__18948.cljs$lang$applyTo = (function (arglist__18950){
var args__16827__auto__ = cljs.core.seq(arglist__18950);
return G__18948__delegate(args__16827__auto__);
});
G__18948.cljs$core$IFn$_invoke$arity$variadic = G__18948__delegate;
return G__18948;
})()
;
;})(format_in__16825__auto__,cf__16826__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__3922__auto__ = (function (){var temp__4657__auto__ = cljs.core.re_find(/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__4657__auto__)){
var match = temp__4657__auto__;
return (cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1(match) : cljs.pprint.type_map.call(null,match));
} else {
return null;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type(cljs.core.type(o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18951_18955 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18952_18956 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(- (cljs.core.count(prefix) - (2))));

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint.write_out((((function (){var and__3911__auto__ = ((!((o == null)))?(((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$))))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o));
if(and__3911__auto__){
return !(cljs.core._realized_QMARK_(o));
} else {
return and__3911__auto__;
}
})())?cljs.core.cst$kw$not_DASH_delivered:cljs.core.deref(o)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18952_18956;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18951_18955;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__16825__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__16826__auto__ = ((typeof format_in__16825__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16825__auto__) : cljs.pprint.cached_compile.call(null,format_in__16825__auto__)):format_in__16825__auto__);
return ((function (format_in__16825__auto__,cf__16826__auto__){
return (function() { 
var G__18957__delegate = function (args__16827__auto__){
var navigator__16828__auto__ = cljs.pprint.init_navigator(args__16827__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16826__auto__,navigator__16828__auto__);
};
var G__18957 = function (var_args){
var args__16827__auto__ = null;
if (arguments.length > 0) {
var G__18958__i = 0, G__18958__a = new Array(arguments.length -  0);
while (G__18958__i < G__18958__a.length) {G__18958__a[G__18958__i] = arguments[G__18958__i + 0]; ++G__18958__i;}
  args__16827__auto__ = new cljs.core.IndexedSeq(G__18958__a,0,null);
} 
return G__18957__delegate.call(this,args__16827__auto__);};
G__18957.cljs$lang$maxFixedArity = 0;
G__18957.cljs$lang$applyTo = (function (arglist__18959){
var args__16827__auto__ = cljs.core.seq(arglist__18959);
return G__18957__delegate(args__16827__auto__);
});
G__18957.cljs$core$IFn$_invoke$arity$variadic = G__18957__delegate;
return G__18957;
})()
;
;})(format_in__16825__auto__,cf__16826__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return cljs.core.cst$kw$queue;
} else {
if(((!((obj == null)))?(((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$))))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj))){
return cljs.core.cst$kw$deref;
} else {
if((obj instanceof cljs.core.Symbol)){
return cljs.core.cst$kw$symbol;
} else {
if(cljs.core.seq_QMARK_(obj)){
return cljs.core.cst$kw$list;
} else {
if(cljs.core.map_QMARK_(obj)){
return cljs.core.cst$kw$map;
} else {
if(cljs.core.vector_QMARK_(obj)){
return cljs.core.cst$kw$vector;
} else {
if(cljs.core.set_QMARK_(obj)){
return cljs.core.cst$kw$set;
} else {
if((obj == null)){
return null;
} else {
return cljs.core.cst$kw$default;

}
}
}
}
}
}
}
}
});
if(typeof cljs.pprint.simple_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_list);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)));
}));
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_(form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_(reference)){
var vec__18961 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18961,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18961,(1),null);
var vec__18964 = reference;
var seq__18965 = cljs.core.seq(vec__18964);
var first__18966 = cljs.core.first(seq__18965);
var seq__18965__$1 = cljs.core.next(seq__18965);
var keyw = first__18966;
var args = seq__18965__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18967_18983 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18968_18984 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

var fexpr__18969_18985 = (function (){var format_in__16825__auto__ = "~w~:i";
var cf__16826__auto__ = ((typeof format_in__16825__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16825__auto__) : cljs.pprint.cached_compile.call(null,format_in__16825__auto__)):format_in__16825__auto__);
return ((function (format_in__16825__auto__,cf__16826__auto__,_STAR_current_level_STAR_18967_18983,_STAR_current_length_STAR_18968_18984,vec__18961,start,end,vec__18964,seq__18965,first__18966,seq__18965__$1,keyw,args){
return (function() { 
var G__18986__delegate = function (args__16827__auto__){
var navigator__16828__auto__ = cljs.pprint.init_navigator(args__16827__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16826__auto__,navigator__16828__auto__);
};
var G__18986 = function (var_args){
var args__16827__auto__ = null;
if (arguments.length > 0) {
var G__18987__i = 0, G__18987__a = new Array(arguments.length -  0);
while (G__18987__i < G__18987__a.length) {G__18987__a[G__18987__i] = arguments[G__18987__i + 0]; ++G__18987__i;}
  args__16827__auto__ = new cljs.core.IndexedSeq(G__18987__a,0,null);
} 
return G__18986__delegate.call(this,args__16827__auto__);};
G__18986.cljs$lang$maxFixedArity = 0;
G__18986.cljs$lang$applyTo = (function (arglist__18988){
var args__16827__auto__ = cljs.core.seq(arglist__18988);
return G__18986__delegate(args__16827__auto__);
});
G__18986.cljs$core$IFn$_invoke$arity$variadic = G__18986__delegate;
return G__18986;
})()
;
;})(format_in__16825__auto__,cf__16826__auto__,_STAR_current_level_STAR_18967_18983,_STAR_current_length_STAR_18968_18984,vec__18961,start,end,vec__18964,seq__18965,first__18966,seq__18965__$1,keyw,args))
})();
(fexpr__18969_18985.cljs$core$IFn$_invoke$arity$1 ? fexpr__18969_18985.cljs$core$IFn$_invoke$arity$1(keyw) : fexpr__18969_18985.call(null,keyw));

var args_18989__$1 = args;
while(true){
if(cljs.core.seq(args_18989__$1)){
var fexpr__18970_18990 = (function (){var format_in__16825__auto__ = " ";
var cf__16826__auto__ = ((typeof format_in__16825__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16825__auto__) : cljs.pprint.cached_compile.call(null,format_in__16825__auto__)):format_in__16825__auto__);
return ((function (args_18989__$1,format_in__16825__auto__,cf__16826__auto__,_STAR_current_level_STAR_18967_18983,_STAR_current_length_STAR_18968_18984,vec__18961,start,end,vec__18964,seq__18965,first__18966,seq__18965__$1,keyw,args){
return (function() { 
var G__18991__delegate = function (args__16827__auto__){
var navigator__16828__auto__ = cljs.pprint.init_navigator(args__16827__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16826__auto__,navigator__16828__auto__);
};
var G__18991 = function (var_args){
var args__16827__auto__ = null;
if (arguments.length > 0) {
var G__18992__i = 0, G__18992__a = new Array(arguments.length -  0);
while (G__18992__i < G__18992__a.length) {G__18992__a[G__18992__i] = arguments[G__18992__i + 0]; ++G__18992__i;}
  args__16827__auto__ = new cljs.core.IndexedSeq(G__18992__a,0,null);
} 
return G__18991__delegate.call(this,args__16827__auto__);};
G__18991.cljs$lang$maxFixedArity = 0;
G__18991.cljs$lang$applyTo = (function (arglist__18993){
var args__16827__auto__ = cljs.core.seq(arglist__18993);
return G__18991__delegate(args__16827__auto__);
});
G__18991.cljs$core$IFn$_invoke$arity$variadic = G__18991__delegate;
return G__18991;
})()
;
;})(args_18989__$1,format_in__16825__auto__,cf__16826__auto__,_STAR_current_level_STAR_18967_18983,_STAR_current_length_STAR_18968_18984,vec__18961,start,end,vec__18964,seq__18965,first__18966,seq__18965__$1,keyw,args))
})();
(fexpr__18970_18990.cljs$core$IFn$_invoke$arity$0 ? fexpr__18970_18990.cljs$core$IFn$_invoke$arity$0() : fexpr__18970_18990.call(null));

var arg_18994 = cljs.core.first(args_18989__$1);
if(cljs.core.sequential_QMARK_(arg_18994)){
var vec__18971_18995 = cljs.pprint.brackets(arg_18994);
var start_18996__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18971_18995,(0),null);
var end_18997__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18971_18995,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18974_18998 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18975_18999 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_18996__$1,null,end_18997__$1);

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_18994),(3))) && ((cljs.core.second(arg_18994) instanceof cljs.core.Keyword)))){
var vec__18976_19000 = arg_18994;
var ns_19001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18976_19000,(0),null);
var kw_19002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18976_19000,(1),null);
var lis_19003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18976_19000,(2),null);
var fexpr__18979_19004 = (function (){var format_in__16825__auto__ = "~w ~w ";
var cf__16826__auto__ = ((typeof format_in__16825__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16825__auto__) : cljs.pprint.cached_compile.call(null,format_in__16825__auto__)):format_in__16825__auto__);
return ((function (args_18989__$1,format_in__16825__auto__,cf__16826__auto__,vec__18976_19000,ns_19001,kw_19002,lis_19003,_STAR_current_level_STAR_18974_18998,_STAR_current_length_STAR_18975_18999,vec__18971_18995,start_18996__$1,end_18997__$1,arg_18994,_STAR_current_level_STAR_18967_18983,_STAR_current_length_STAR_18968_18984,vec__18961,start,end,vec__18964,seq__18965,first__18966,seq__18965__$1,keyw,args){
return (function() { 
var G__19005__delegate = function (args__16827__auto__){
var navigator__16828__auto__ = cljs.pprint.init_navigator(args__16827__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16826__auto__,navigator__16828__auto__);
};
var G__19005 = function (var_args){
var args__16827__auto__ = null;
if (arguments.length > 0) {
var G__19006__i = 0, G__19006__a = new Array(arguments.length -  0);
while (G__19006__i < G__19006__a.length) {G__19006__a[G__19006__i] = arguments[G__19006__i + 0]; ++G__19006__i;}
  args__16827__auto__ = new cljs.core.IndexedSeq(G__19006__a,0,null);
} 
return G__19005__delegate.call(this,args__16827__auto__);};
G__19005.cljs$lang$maxFixedArity = 0;
G__19005.cljs$lang$applyTo = (function (arglist__19007){
var args__16827__auto__ = cljs.core.seq(arglist__19007);
return G__19005__delegate(args__16827__auto__);
});
G__19005.cljs$core$IFn$_invoke$arity$variadic = G__19005__delegate;
return G__19005;
})()
;
;})(args_18989__$1,format_in__16825__auto__,cf__16826__auto__,vec__18976_19000,ns_19001,kw_19002,lis_19003,_STAR_current_level_STAR_18974_18998,_STAR_current_length_STAR_18975_18999,vec__18971_18995,start_18996__$1,end_18997__$1,arg_18994,_STAR_current_level_STAR_18967_18983,_STAR_current_length_STAR_18968_18984,vec__18961,start,end,vec__18964,seq__18965,first__18966,seq__18965__$1,keyw,args))
})();
(fexpr__18979_19004.cljs$core$IFn$_invoke$arity$2 ? fexpr__18979_19004.cljs$core$IFn$_invoke$arity$2(ns_19001,kw_19002) : fexpr__18979_19004.call(null,ns_19001,kw_19002));

if(cljs.core.sequential_QMARK_(lis_19003)){
var fexpr__18980_19008 = (function (){var format_in__16825__auto__ = ((cljs.core.vector_QMARK_(lis_19003))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__16826__auto__ = ((typeof format_in__16825__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16825__auto__) : cljs.pprint.cached_compile.call(null,format_in__16825__auto__)):format_in__16825__auto__);
return ((function (args_18989__$1,format_in__16825__auto__,cf__16826__auto__,vec__18976_19000,ns_19001,kw_19002,lis_19003,_STAR_current_level_STAR_18974_18998,_STAR_current_length_STAR_18975_18999,vec__18971_18995,start_18996__$1,end_18997__$1,arg_18994,_STAR_current_level_STAR_18967_18983,_STAR_current_length_STAR_18968_18984,vec__18961,start,end,vec__18964,seq__18965,first__18966,seq__18965__$1,keyw,args){
return (function() { 
var G__19009__delegate = function (args__16827__auto__){
var navigator__16828__auto__ = cljs.pprint.init_navigator(args__16827__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16826__auto__,navigator__16828__auto__);
};
var G__19009 = function (var_args){
var args__16827__auto__ = null;
if (arguments.length > 0) {
var G__19010__i = 0, G__19010__a = new Array(arguments.length -  0);
while (G__19010__i < G__19010__a.length) {G__19010__a[G__19010__i] = arguments[G__19010__i + 0]; ++G__19010__i;}
  args__16827__auto__ = new cljs.core.IndexedSeq(G__19010__a,0,null);
} 
return G__19009__delegate.call(this,args__16827__auto__);};
G__19009.cljs$lang$maxFixedArity = 0;
G__19009.cljs$lang$applyTo = (function (arglist__19011){
var args__16827__auto__ = cljs.core.seq(arglist__19011);
return G__19009__delegate(args__16827__auto__);
});
G__19009.cljs$core$IFn$_invoke$arity$variadic = G__19009__delegate;
return G__19009;
})()
;
;})(args_18989__$1,format_in__16825__auto__,cf__16826__auto__,vec__18976_19000,ns_19001,kw_19002,lis_19003,_STAR_current_level_STAR_18974_18998,_STAR_current_length_STAR_18975_18999,vec__18971_18995,start_18996__$1,end_18997__$1,arg_18994,_STAR_current_level_STAR_18967_18983,_STAR_current_length_STAR_18968_18984,vec__18961,start,end,vec__18964,seq__18965,first__18966,seq__18965__$1,keyw,args))
})();
(fexpr__18980_19008.cljs$core$IFn$_invoke$arity$1 ? fexpr__18980_19008.cljs$core$IFn$_invoke$arity$1(lis_19003) : fexpr__18980_19008.call(null,lis_19003));
} else {
cljs.pprint.write_out(lis_19003);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__16825__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__16826__auto__ = ((typeof format_in__16825__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16825__auto__) : cljs.pprint.cached_compile.call(null,format_in__16825__auto__)):format_in__16825__auto__);
return ((function (args_18989__$1,format_in__16825__auto__,cf__16826__auto__,_STAR_current_level_STAR_18974_18998,_STAR_current_length_STAR_18975_18999,vec__18971_18995,start_18996__$1,end_18997__$1,arg_18994,_STAR_current_level_STAR_18967_18983,_STAR_current_length_STAR_18968_18984,vec__18961,start,end,vec__18964,seq__18965,first__18966,seq__18965__$1,keyw,args){
return (function() { 
var G__19012__delegate = function (args__16827__auto__){
var navigator__16828__auto__ = cljs.pprint.init_navigator(args__16827__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16826__auto__,navigator__16828__auto__);
};
var G__19012 = function (var_args){
var args__16827__auto__ = null;
if (arguments.length > 0) {
var G__19013__i = 0, G__19013__a = new Array(arguments.length -  0);
while (G__19013__i < G__19013__a.length) {G__19013__a[G__19013__i] = arguments[G__19013__i + 0]; ++G__19013__i;}
  args__16827__auto__ = new cljs.core.IndexedSeq(G__19013__a,0,null);
} 
return G__19012__delegate.call(this,args__16827__auto__);};
G__19012.cljs$lang$maxFixedArity = 0;
G__19012.cljs$lang$applyTo = (function (arglist__19014){
var args__16827__auto__ = cljs.core.seq(arglist__19014);
return G__19012__delegate(args__16827__auto__);
});
G__19012.cljs$core$IFn$_invoke$arity$variadic = G__19012__delegate;
return G__19012;
})()
;
;})(args_18989__$1,format_in__16825__auto__,cf__16826__auto__,_STAR_current_level_STAR_18974_18998,_STAR_current_length_STAR_18975_18999,vec__18971_18995,start_18996__$1,end_18997__$1,arg_18994,_STAR_current_level_STAR_18967_18983,_STAR_current_length_STAR_18968_18984,vec__18961,start,end,vec__18964,seq__18965,first__18966,seq__18965__$1,keyw,args))
})(),arg_18994);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18975_18999;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18974_18998;
}}


if(cljs.core.next(args_18989__$1)){
var fexpr__18981_19015 = (function (){var format_in__16825__auto__ = "~_";
var cf__16826__auto__ = ((typeof format_in__16825__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16825__auto__) : cljs.pprint.cached_compile.call(null,format_in__16825__auto__)):format_in__16825__auto__);
return ((function (args_18989__$1,format_in__16825__auto__,cf__16826__auto__,vec__18971_18995,start_18996__$1,end_18997__$1,arg_18994,_STAR_current_level_STAR_18967_18983,_STAR_current_length_STAR_18968_18984,vec__18961,start,end,vec__18964,seq__18965,first__18966,seq__18965__$1,keyw,args){
return (function() { 
var G__19016__delegate = function (args__16827__auto__){
var navigator__16828__auto__ = cljs.pprint.init_navigator(args__16827__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16826__auto__,navigator__16828__auto__);
};
var G__19016 = function (var_args){
var args__16827__auto__ = null;
if (arguments.length > 0) {
var G__19017__i = 0, G__19017__a = new Array(arguments.length -  0);
while (G__19017__i < G__19017__a.length) {G__19017__a[G__19017__i] = arguments[G__19017__i + 0]; ++G__19017__i;}
  args__16827__auto__ = new cljs.core.IndexedSeq(G__19017__a,0,null);
} 
return G__19016__delegate.call(this,args__16827__auto__);};
G__19016.cljs$lang$maxFixedArity = 0;
G__19016.cljs$lang$applyTo = (function (arglist__19018){
var args__16827__auto__ = cljs.core.seq(arglist__19018);
return G__19016__delegate(args__16827__auto__);
});
G__19016.cljs$core$IFn$_invoke$arity$variadic = G__19016__delegate;
return G__19016;
})()
;
;})(args_18989__$1,format_in__16825__auto__,cf__16826__auto__,vec__18971_18995,start_18996__$1,end_18997__$1,arg_18994,_STAR_current_level_STAR_18967_18983,_STAR_current_length_STAR_18968_18984,vec__18961,start,end,vec__18964,seq__18965,first__18966,seq__18965__$1,keyw,args))
})();
(fexpr__18981_19015.cljs$core$IFn$_invoke$arity$0 ? fexpr__18981_19015.cljs$core$IFn$_invoke$arity$0() : fexpr__18981_19015.call(null));
} else {
}
} else {
cljs.pprint.write_out(arg_18994);

if(cljs.core.next(args_18989__$1)){
var fexpr__18982_19019 = (function (){var format_in__16825__auto__ = "~:_";
var cf__16826__auto__ = ((typeof format_in__16825__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16825__auto__) : cljs.pprint.cached_compile.call(null,format_in__16825__auto__)):format_in__16825__auto__);
return ((function (args_18989__$1,format_in__16825__auto__,cf__16826__auto__,arg_18994,_STAR_current_level_STAR_18967_18983,_STAR_current_length_STAR_18968_18984,vec__18961,start,end,vec__18964,seq__18965,first__18966,seq__18965__$1,keyw,args){
return (function() { 
var G__19020__delegate = function (args__16827__auto__){
var navigator__16828__auto__ = cljs.pprint.init_navigator(args__16827__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16826__auto__,navigator__16828__auto__);
};
var G__19020 = function (var_args){
var args__16827__auto__ = null;
if (arguments.length > 0) {
var G__19021__i = 0, G__19021__a = new Array(arguments.length -  0);
while (G__19021__i < G__19021__a.length) {G__19021__a[G__19021__i] = arguments[G__19021__i + 0]; ++G__19021__i;}
  args__16827__auto__ = new cljs.core.IndexedSeq(G__19021__a,0,null);
} 
return G__19020__delegate.call(this,args__16827__auto__);};
G__19020.cljs$lang$maxFixedArity = 0;
G__19020.cljs$lang$applyTo = (function (arglist__19022){
var args__16827__auto__ = cljs.core.seq(arglist__19022);
return G__19020__delegate(args__16827__auto__);
});
G__19020.cljs$core$IFn$_invoke$arity$variadic = G__19020__delegate;
return G__19020;
})()
;
;})(args_18989__$1,format_in__16825__auto__,cf__16826__auto__,arg_18994,_STAR_current_level_STAR_18967_18983,_STAR_current_length_STAR_18968_18984,vec__18961,start,end,vec__18964,seq__18965,first__18966,seq__18965__$1,keyw,args))
})();
(fexpr__18982_19019.cljs$core$IFn$_invoke$arity$0 ? fexpr__18982_19019.cljs$core$IFn$_invoke$arity$0() : fexpr__18982_19019.call(null));
} else {
}
}

var G__19023 = cljs.core.next(args_18989__$1);
args_18989__$1 = G__19023;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18968_18984;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18967_18983;
}}

return null;
} else {
return cljs.pprint.write_out(reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next(alis)){
var vec__19024 = alis;
var seq__19025 = cljs.core.seq(vec__19024);
var first__19026 = cljs.core.first(seq__19025);
var seq__19025__$1 = cljs.core.next(seq__19025);
var ns_sym = first__19026;
var first__19026__$1 = cljs.core.first(seq__19025__$1);
var seq__19025__$2 = cljs.core.next(seq__19025__$1);
var ns_name = first__19026__$1;
var stuff = seq__19025__$2;
var vec__19027 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19027,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19027,(1),null);
var vec__19030 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19030,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19030,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_19033_19040 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_19034_19041 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__19035_19042 = (function (){var format_in__16825__auto__ = "~w ~1I~@_~w";
var cf__16826__auto__ = ((typeof format_in__16825__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16825__auto__) : cljs.pprint.cached_compile.call(null,format_in__16825__auto__)):format_in__16825__auto__);
return ((function (format_in__16825__auto__,cf__16826__auto__,_STAR_current_level_STAR_19033_19040,_STAR_current_length_STAR_19034_19041,vec__19024,seq__19025,first__19026,seq__19025__$1,ns_sym,first__19026__$1,seq__19025__$2,ns_name,stuff,vec__19027,doc_str,stuff__$1,vec__19030,attr_map,references){
return (function() { 
var G__19043__delegate = function (args__16827__auto__){
var navigator__16828__auto__ = cljs.pprint.init_navigator(args__16827__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16826__auto__,navigator__16828__auto__);
};
var G__19043 = function (var_args){
var args__16827__auto__ = null;
if (arguments.length > 0) {
var G__19044__i = 0, G__19044__a = new Array(arguments.length -  0);
while (G__19044__i < G__19044__a.length) {G__19044__a[G__19044__i] = arguments[G__19044__i + 0]; ++G__19044__i;}
  args__16827__auto__ = new cljs.core.IndexedSeq(G__19044__a,0,null);
} 
return G__19043__delegate.call(this,args__16827__auto__);};
G__19043.cljs$lang$maxFixedArity = 0;
G__19043.cljs$lang$applyTo = (function (arglist__19045){
var args__16827__auto__ = cljs.core.seq(arglist__19045);
return G__19043__delegate(args__16827__auto__);
});
G__19043.cljs$core$IFn$_invoke$arity$variadic = G__19043__delegate;
return G__19043;
})()
;
;})(format_in__16825__auto__,cf__16826__auto__,_STAR_current_level_STAR_19033_19040,_STAR_current_length_STAR_19034_19041,vec__19024,seq__19025,first__19026,seq__19025__$1,ns_sym,first__19026__$1,seq__19025__$2,ns_name,stuff,vec__19027,doc_str,stuff__$1,vec__19030,attr_map,references))
})();
(fexpr__19035_19042.cljs$core$IFn$_invoke$arity$2 ? fexpr__19035_19042.cljs$core$IFn$_invoke$arity$2(ns_sym,ns_name) : fexpr__19035_19042.call(null,ns_sym,ns_name));

if(cljs.core.truth_((function (){var or__3922__auto__ = doc_str;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = attr_map;
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return cljs.core.seq(references);
}
}
})())){
var fexpr__19036_19046 = (function (){var format_in__16825__auto__ = "~@:_";
var cf__16826__auto__ = ((typeof format_in__16825__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16825__auto__) : cljs.pprint.cached_compile.call(null,format_in__16825__auto__)):format_in__16825__auto__);
return ((function (format_in__16825__auto__,cf__16826__auto__,_STAR_current_level_STAR_19033_19040,_STAR_current_length_STAR_19034_19041,vec__19024,seq__19025,first__19026,seq__19025__$1,ns_sym,first__19026__$1,seq__19025__$2,ns_name,stuff,vec__19027,doc_str,stuff__$1,vec__19030,attr_map,references){
return (function() { 
var G__19047__delegate = function (args__16827__auto__){
var navigator__16828__auto__ = cljs.pprint.init_navigator(args__16827__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16826__auto__,navigator__16828__auto__);
};
var G__19047 = function (var_args){
var args__16827__auto__ = null;
if (arguments.length > 0) {
var G__19048__i = 0, G__19048__a = new Array(arguments.length -  0);
while (G__19048__i < G__19048__a.length) {G__19048__a[G__19048__i] = arguments[G__19048__i + 0]; ++G__19048__i;}
  args__16827__auto__ = new cljs.core.IndexedSeq(G__19048__a,0,null);
} 
return G__19047__delegate.call(this,args__16827__auto__);};
G__19047.cljs$lang$maxFixedArity = 0;
G__19047.cljs$lang$applyTo = (function (arglist__19049){
var args__16827__auto__ = cljs.core.seq(arglist__19049);
return G__19047__delegate(args__16827__auto__);
});
G__19047.cljs$core$IFn$_invoke$arity$variadic = G__19047__delegate;
return G__19047;
})()
;
;})(format_in__16825__auto__,cf__16826__auto__,_STAR_current_level_STAR_19033_19040,_STAR_current_length_STAR_19034_19041,vec__19024,seq__19025,first__19026,seq__19025__$1,ns_sym,first__19026__$1,seq__19025__$2,ns_name,stuff,vec__19027,doc_str,stuff__$1,vec__19030,attr_map,references))
})();
(fexpr__19036_19046.cljs$core$IFn$_invoke$arity$0 ? fexpr__19036_19046.cljs$core$IFn$_invoke$arity$0() : fexpr__19036_19046.call(null));
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\"~a\"~:[~;~:@_~]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([doc_str,(function (){var or__3922__auto__ = attr_map;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.seq(references);
}
})()], 0));
} else {
}

if(cljs.core.truth_(attr_map)){
var G__19038_19050 = attr_map;
var G__19039_19051 = cljs.core.seq(references);
var fexpr__19037_19052 = (function (){var format_in__16825__auto__ = "~w~:[~;~:@_~]";
var cf__16826__auto__ = ((typeof format_in__16825__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16825__auto__) : cljs.pprint.cached_compile.call(null,format_in__16825__auto__)):format_in__16825__auto__);
return ((function (format_in__16825__auto__,cf__16826__auto__,G__19038_19050,G__19039_19051,_STAR_current_level_STAR_19033_19040,_STAR_current_length_STAR_19034_19041,vec__19024,seq__19025,first__19026,seq__19025__$1,ns_sym,first__19026__$1,seq__19025__$2,ns_name,stuff,vec__19027,doc_str,stuff__$1,vec__19030,attr_map,references){
return (function() { 
var G__19053__delegate = function (args__16827__auto__){
var navigator__16828__auto__ = cljs.pprint.init_navigator(args__16827__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16826__auto__,navigator__16828__auto__);
};
var G__19053 = function (var_args){
var args__16827__auto__ = null;
if (arguments.length > 0) {
var G__19054__i = 0, G__19054__a = new Array(arguments.length -  0);
while (G__19054__i < G__19054__a.length) {G__19054__a[G__19054__i] = arguments[G__19054__i + 0]; ++G__19054__i;}
  args__16827__auto__ = new cljs.core.IndexedSeq(G__19054__a,0,null);
} 
return G__19053__delegate.call(this,args__16827__auto__);};
G__19053.cljs$lang$maxFixedArity = 0;
G__19053.cljs$lang$applyTo = (function (arglist__19055){
var args__16827__auto__ = cljs.core.seq(arglist__19055);
return G__19053__delegate(args__16827__auto__);
});
G__19053.cljs$core$IFn$_invoke$arity$variadic = G__19053__delegate;
return G__19053;
})()
;
;})(format_in__16825__auto__,cf__16826__auto__,G__19038_19050,G__19039_19051,_STAR_current_level_STAR_19033_19040,_STAR_current_length_STAR_19034_19041,vec__19024,seq__19025,first__19026,seq__19025__$1,ns_sym,first__19026__$1,seq__19025__$2,ns_name,stuff,vec__19027,doc_str,stuff__$1,vec__19030,attr_map,references))
})();
(fexpr__19037_19052.cljs$core$IFn$_invoke$arity$2 ? fexpr__19037_19052.cljs$core$IFn$_invoke$arity$2(G__19038_19050,G__19039_19051) : fexpr__19037_19052.call(null,G__19038_19050,G__19039_19051));
} else {
}

var references_19056__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_19056__$1));

var temp__4657__auto___19057 = cljs.core.next(references_19056__$1);
if(temp__4657__auto___19057){
var references_19058__$2 = temp__4657__auto___19057;
cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__19059 = references_19058__$2;
references_19056__$1 = G__19059;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_19034_19041;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_19033_19040;
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__16825__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__16826__auto__ = ((typeof format_in__16825__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16825__auto__) : cljs.pprint.cached_compile.call(null,format_in__16825__auto__)):format_in__16825__auto__);
return ((function (format_in__16825__auto__,cf__16826__auto__){
return (function() { 
var G__19060__delegate = function (args__16827__auto__){
var navigator__16828__auto__ = cljs.pprint.init_navigator(args__16827__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16826__auto__,navigator__16828__auto__);
};
var G__19060 = function (var_args){
var args__16827__auto__ = null;
if (arguments.length > 0) {
var G__19061__i = 0, G__19061__a = new Array(arguments.length -  0);
while (G__19061__i < G__19061__a.length) {G__19061__a[G__19061__i] = arguments[G__19061__i + 0]; ++G__19061__i;}
  args__16827__auto__ = new cljs.core.IndexedSeq(G__19061__a,0,null);
} 
return G__19060__delegate.call(this,args__16827__auto__);};
G__19060.cljs$lang$maxFixedArity = 0;
G__19060.cljs$lang$applyTo = (function (arglist__19062){
var args__16827__auto__ = cljs.core.seq(arglist__19062);
return G__19060__delegate(args__16827__auto__);
});
G__19060.cljs$core$IFn$_invoke$arity$variadic = G__19060__delegate;
return G__19060;
})()
;
;})(format_in__16825__auto__,cf__16826__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
var fexpr__19063_19066 = (function (){var format_in__16825__auto__ = " ~_";
var cf__16826__auto__ = ((typeof format_in__16825__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16825__auto__) : cljs.pprint.cached_compile.call(null,format_in__16825__auto__)):format_in__16825__auto__);
return ((function (format_in__16825__auto__,cf__16826__auto__){
return (function() { 
var G__19067__delegate = function (args__16827__auto__){
var navigator__16828__auto__ = cljs.pprint.init_navigator(args__16827__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16826__auto__,navigator__16828__auto__);
};
var G__19067 = function (var_args){
var args__16827__auto__ = null;
if (arguments.length > 0) {
var G__19068__i = 0, G__19068__a = new Array(arguments.length -  0);
while (G__19068__i < G__19068__a.length) {G__19068__a[G__19068__i] = arguments[G__19068__i + 0]; ++G__19068__i;}
  args__16827__auto__ = new cljs.core.IndexedSeq(G__19068__a,0,null);
} 
return G__19067__delegate.call(this,args__16827__auto__);};
G__19067.cljs$lang$maxFixedArity = 0;
G__19067.cljs$lang$applyTo = (function (arglist__19069){
var args__16827__auto__ = cljs.core.seq(arglist__19069);
return G__19067__delegate(args__16827__auto__);
});
G__19067.cljs$core$IFn$_invoke$arity$variadic = G__19067__delegate;
return G__19067;
})()
;
;})(format_in__16825__auto__,cf__16826__auto__))
})();
(fexpr__19063_19066.cljs$core$IFn$_invoke$arity$0 ? fexpr__19063_19066.cljs$core$IFn$_invoke$arity$0() : fexpr__19063_19066.call(null));
} else {
var fexpr__19064_19070 = (function (){var format_in__16825__auto__ = " ~@_";
var cf__16826__auto__ = ((typeof format_in__16825__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16825__auto__) : cljs.pprint.cached_compile.call(null,format_in__16825__auto__)):format_in__16825__auto__);
return ((function (format_in__16825__auto__,cf__16826__auto__){
return (function() { 
var G__19071__delegate = function (args__16827__auto__){
var navigator__16828__auto__ = cljs.pprint.init_navigator(args__16827__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16826__auto__,navigator__16828__auto__);
};
var G__19071 = function (var_args){
var args__16827__auto__ = null;
if (arguments.length > 0) {
var G__19072__i = 0, G__19072__a = new Array(arguments.length -  0);
while (G__19072__i < G__19072__a.length) {G__19072__a[G__19072__i] = arguments[G__19072__i + 0]; ++G__19072__i;}
  args__16827__auto__ = new cljs.core.IndexedSeq(G__19072__a,0,null);
} 
return G__19071__delegate.call(this,args__16827__auto__);};
G__19071.cljs$lang$maxFixedArity = 0;
G__19071.cljs$lang$applyTo = (function (arglist__19073){
var args__16827__auto__ = cljs.core.seq(arglist__19073);
return G__19071__delegate(args__16827__auto__);
});
G__19071.cljs$core$IFn$_invoke$arity$variadic = G__19071__delegate;
return G__19071;
})()
;
;})(format_in__16825__auto__,cf__16826__auto__))
})();
(fexpr__19064_19070.cljs$core$IFn$_invoke$arity$0 ? fexpr__19064_19070.cljs$core$IFn$_invoke$arity$0() : fexpr__19064_19070.call(null));
}

var fexpr__19065 = (function (){var format_in__16825__auto__ = "~{~w~^ ~_~}";
var cf__16826__auto__ = ((typeof format_in__16825__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16825__auto__) : cljs.pprint.cached_compile.call(null,format_in__16825__auto__)):format_in__16825__auto__);
return ((function (format_in__16825__auto__,cf__16826__auto__){
return (function() { 
var G__19074__delegate = function (args__16827__auto__){
var navigator__16828__auto__ = cljs.pprint.init_navigator(args__16827__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16826__auto__,navigator__16828__auto__);
};
var G__19074 = function (var_args){
var args__16827__auto__ = null;
if (arguments.length > 0) {
var G__19075__i = 0, G__19075__a = new Array(arguments.length -  0);
while (G__19075__i < G__19075__a.length) {G__19075__a[G__19075__i] = arguments[G__19075__i + 0]; ++G__19075__i;}
  args__16827__auto__ = new cljs.core.IndexedSeq(G__19075__a,0,null);
} 
return G__19074__delegate.call(this,args__16827__auto__);};
G__19074.cljs$lang$maxFixedArity = 0;
G__19074.cljs$lang$applyTo = (function (arglist__19076){
var args__16827__auto__ = cljs.core.seq(arglist__19076);
return G__19074__delegate(args__16827__auto__);
});
G__19074.cljs$core$IFn$_invoke$arity$variadic = G__19074__delegate;
return G__19074;
})()
;
;})(format_in__16825__auto__,cf__16826__auto__))
})();
return (fexpr__19065.cljs$core$IFn$_invoke$arity$1 ? fexpr__19065.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__19065.call(null,alis));
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
var fexpr__19077 = (function (){var format_in__16825__auto__ = " ~_~{~w~^ ~_~}";
var cf__16826__auto__ = ((typeof format_in__16825__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16825__auto__) : cljs.pprint.cached_compile.call(null,format_in__16825__auto__)):format_in__16825__auto__);
return ((function (format_in__16825__auto__,cf__16826__auto__){
return (function() { 
var G__19078__delegate = function (args__16827__auto__){
var navigator__16828__auto__ = cljs.pprint.init_navigator(args__16827__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16826__auto__,navigator__16828__auto__);
};
var G__19078 = function (var_args){
var args__16827__auto__ = null;
if (arguments.length > 0) {
var G__19079__i = 0, G__19079__a = new Array(arguments.length -  0);
while (G__19079__i < G__19079__a.length) {G__19079__a[G__19079__i] = arguments[G__19079__i + 0]; ++G__19079__i;}
  args__16827__auto__ = new cljs.core.IndexedSeq(G__19079__a,0,null);
} 
return G__19078__delegate.call(this,args__16827__auto__);};
G__19078.cljs$lang$maxFixedArity = 0;
G__19078.cljs$lang$applyTo = (function (arglist__19080){
var args__16827__auto__ = cljs.core.seq(arglist__19080);
return G__19078__delegate(args__16827__auto__);
});
G__19078.cljs$core$IFn$_invoke$arity$variadic = G__19078__delegate;
return G__19078;
})()
;
;})(format_in__16825__auto__,cf__16826__auto__))
})();
return (fexpr__19077.cljs$core$IFn$_invoke$arity$1 ? fexpr__19077.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__19077.call(null,alis));
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__19081 = alis;
var seq__19082 = cljs.core.seq(vec__19081);
var first__19083 = cljs.core.first(seq__19082);
var seq__19082__$1 = cljs.core.next(seq__19082);
var defn_sym = first__19083;
var first__19083__$1 = cljs.core.first(seq__19082__$1);
var seq__19082__$2 = cljs.core.next(seq__19082__$1);
var defn_name = first__19083__$1;
var stuff = seq__19082__$2;
var vec__19084 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19084,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19084,(1),null);
var vec__19087 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19087,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19087,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_19090_19095 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_19091_19096 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__19092_19097 = (function (){var format_in__16825__auto__ = "~w ~1I~@_~w";
var cf__16826__auto__ = ((typeof format_in__16825__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16825__auto__) : cljs.pprint.cached_compile.call(null,format_in__16825__auto__)):format_in__16825__auto__);
return ((function (format_in__16825__auto__,cf__16826__auto__,_STAR_current_level_STAR_19090_19095,_STAR_current_length_STAR_19091_19096,vec__19081,seq__19082,first__19083,seq__19082__$1,defn_sym,first__19083__$1,seq__19082__$2,defn_name,stuff,vec__19084,doc_str,stuff__$1,vec__19087,attr_map,stuff__$2){
return (function() { 
var G__19098__delegate = function (args__16827__auto__){
var navigator__16828__auto__ = cljs.pprint.init_navigator(args__16827__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16826__auto__,navigator__16828__auto__);
};
var G__19098 = function (var_args){
var args__16827__auto__ = null;
if (arguments.length > 0) {
var G__19099__i = 0, G__19099__a = new Array(arguments.length -  0);
while (G__19099__i < G__19099__a.length) {G__19099__a[G__19099__i] = arguments[G__19099__i + 0]; ++G__19099__i;}
  args__16827__auto__ = new cljs.core.IndexedSeq(G__19099__a,0,null);
} 
return G__19098__delegate.call(this,args__16827__auto__);};
G__19098.cljs$lang$maxFixedArity = 0;
G__19098.cljs$lang$applyTo = (function (arglist__19100){
var args__16827__auto__ = cljs.core.seq(arglist__19100);
return G__19098__delegate(args__16827__auto__);
});
G__19098.cljs$core$IFn$_invoke$arity$variadic = G__19098__delegate;
return G__19098;
})()
;
;})(format_in__16825__auto__,cf__16826__auto__,_STAR_current_level_STAR_19090_19095,_STAR_current_length_STAR_19091_19096,vec__19081,seq__19082,first__19083,seq__19082__$1,defn_sym,first__19083__$1,seq__19082__$2,defn_name,stuff,vec__19084,doc_str,stuff__$1,vec__19087,attr_map,stuff__$2))
})();
(fexpr__19092_19097.cljs$core$IFn$_invoke$arity$2 ? fexpr__19092_19097.cljs$core$IFn$_invoke$arity$2(defn_sym,defn_name) : fexpr__19092_19097.call(null,defn_sym,defn_name));

if(cljs.core.truth_(doc_str)){
var fexpr__19093_19101 = (function (){var format_in__16825__auto__ = " ~_~w";
var cf__16826__auto__ = ((typeof format_in__16825__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16825__auto__) : cljs.pprint.cached_compile.call(null,format_in__16825__auto__)):format_in__16825__auto__);
return ((function (format_in__16825__auto__,cf__16826__auto__,_STAR_current_level_STAR_19090_19095,_STAR_current_length_STAR_19091_19096,vec__19081,seq__19082,first__19083,seq__19082__$1,defn_sym,first__19083__$1,seq__19082__$2,defn_name,stuff,vec__19084,doc_str,stuff__$1,vec__19087,attr_map,stuff__$2){
return (function() { 
var G__19102__delegate = function (args__16827__auto__){
var navigator__16828__auto__ = cljs.pprint.init_navigator(args__16827__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16826__auto__,navigator__16828__auto__);
};
var G__19102 = function (var_args){
var args__16827__auto__ = null;
if (arguments.length > 0) {
var G__19103__i = 0, G__19103__a = new Array(arguments.length -  0);
while (G__19103__i < G__19103__a.length) {G__19103__a[G__19103__i] = arguments[G__19103__i + 0]; ++G__19103__i;}
  args__16827__auto__ = new cljs.core.IndexedSeq(G__19103__a,0,null);
} 
return G__19102__delegate.call(this,args__16827__auto__);};
G__19102.cljs$lang$maxFixedArity = 0;
G__19102.cljs$lang$applyTo = (function (arglist__19104){
var args__16827__auto__ = cljs.core.seq(arglist__19104);
return G__19102__delegate(args__16827__auto__);
});
G__19102.cljs$core$IFn$_invoke$arity$variadic = G__19102__delegate;
return G__19102;
})()
;
;})(format_in__16825__auto__,cf__16826__auto__,_STAR_current_level_STAR_19090_19095,_STAR_current_length_STAR_19091_19096,vec__19081,seq__19082,first__19083,seq__19082__$1,defn_sym,first__19083__$1,seq__19082__$2,defn_name,stuff,vec__19084,doc_str,stuff__$1,vec__19087,attr_map,stuff__$2))
})();
(fexpr__19093_19101.cljs$core$IFn$_invoke$arity$1 ? fexpr__19093_19101.cljs$core$IFn$_invoke$arity$1(doc_str) : fexpr__19093_19101.call(null,doc_str));
} else {
}

if(cljs.core.truth_(attr_map)){
var fexpr__19094_19105 = (function (){var format_in__16825__auto__ = " ~_~w";
var cf__16826__auto__ = ((typeof format_in__16825__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16825__auto__) : cljs.pprint.cached_compile.call(null,format_in__16825__auto__)):format_in__16825__auto__);
return ((function (format_in__16825__auto__,cf__16826__auto__,_STAR_current_level_STAR_19090_19095,_STAR_current_length_STAR_19091_19096,vec__19081,seq__19082,first__19083,seq__19082__$1,defn_sym,first__19083__$1,seq__19082__$2,defn_name,stuff,vec__19084,doc_str,stuff__$1,vec__19087,attr_map,stuff__$2){
return (function() { 
var G__19106__delegate = function (args__16827__auto__){
var navigator__16828__auto__ = cljs.pprint.init_navigator(args__16827__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16826__auto__,navigator__16828__auto__);
};
var G__19106 = function (var_args){
var args__16827__auto__ = null;
if (arguments.length > 0) {
var G__19107__i = 0, G__19107__a = new Array(arguments.length -  0);
while (G__19107__i < G__19107__a.length) {G__19107__a[G__19107__i] = arguments[G__19107__i + 0]; ++G__19107__i;}
  args__16827__auto__ = new cljs.core.IndexedSeq(G__19107__a,0,null);
} 
return G__19106__delegate.call(this,args__16827__auto__);};
G__19106.cljs$lang$maxFixedArity = 0;
G__19106.cljs$lang$applyTo = (function (arglist__19108){
var args__16827__auto__ = cljs.core.seq(arglist__19108);
return G__19106__delegate(args__16827__auto__);
});
G__19106.cljs$core$IFn$_invoke$arity$variadic = G__19106__delegate;
return G__19106;
})()
;
;})(format_in__16825__auto__,cf__16826__auto__,_STAR_current_level_STAR_19090_19095,_STAR_current_length_STAR_19091_19096,vec__19081,seq__19082,first__19083,seq__19082__$1,defn_sym,first__19083__$1,seq__19082__$2,defn_name,stuff,vec__19084,doc_str,stuff__$1,vec__19087,attr_map,stuff__$2))
})();
(fexpr__19094_19105.cljs$core$IFn$_invoke$arity$1 ? fexpr__19094_19105.cljs$core$IFn$_invoke$arity$1(attr_map) : fexpr__19094_19105.call(null,attr_map));
} else {
}

if(cljs.core.vector_QMARK_(cljs.core.first(stuff__$2))){
cljs.pprint.single_defn(stuff__$2,(function (){var or__3922__auto__ = doc_str;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn(stuff__$2,(function (){var or__3922__auto__ = doc_str;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_19091_19096;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_19090_19095;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_19109_19114 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_19110_19115 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count19111_19116 = (0);
var binding_19117 = binding_vec;
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count19111_19116 < cljs.core._STAR_print_length_STAR_)))){
if(cljs.core.seq(binding_19117)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_19112_19118 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_19113_19119 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_19117));

if(cljs.core.next(binding_19117)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(binding_19117));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_19113_19119;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_19112_19118;
}}


if(cljs.core.next(cljs.core.rest(binding_19117))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__19120 = (length_count19111_19116 + (1));
var G__19121 = cljs.core.next(cljs.core.rest(binding_19117));
length_count19111_19116 = G__19120;
binding_19117 = G__19121;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_19110_19115;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_19109_19114;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_19122_19127 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_19123_19128 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if(((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis))))){
var fexpr__19124_19129 = (function (){var format_in__16825__auto__ = "~w ~1I~@_";
var cf__16826__auto__ = ((typeof format_in__16825__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16825__auto__) : cljs.pprint.cached_compile.call(null,format_in__16825__auto__)):format_in__16825__auto__);
return ((function (format_in__16825__auto__,cf__16826__auto__,_STAR_current_level_STAR_19122_19127,_STAR_current_length_STAR_19123_19128,base_sym){
return (function() { 
var G__19130__delegate = function (args__16827__auto__){
var navigator__16828__auto__ = cljs.pprint.init_navigator(args__16827__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16826__auto__,navigator__16828__auto__);
};
var G__19130 = function (var_args){
var args__16827__auto__ = null;
if (arguments.length > 0) {
var G__19131__i = 0, G__19131__a = new Array(arguments.length -  0);
while (G__19131__i < G__19131__a.length) {G__19131__a[G__19131__i] = arguments[G__19131__i + 0]; ++G__19131__i;}
  args__16827__auto__ = new cljs.core.IndexedSeq(G__19131__a,0,null);
} 
return G__19130__delegate.call(this,args__16827__auto__);};
G__19130.cljs$lang$maxFixedArity = 0;
G__19130.cljs$lang$applyTo = (function (arglist__19132){
var args__16827__auto__ = cljs.core.seq(arglist__19132);
return G__19130__delegate(args__16827__auto__);
});
G__19130.cljs$core$IFn$_invoke$arity$variadic = G__19130__delegate;
return G__19130;
})()
;
;})(format_in__16825__auto__,cf__16826__auto__,_STAR_current_level_STAR_19122_19127,_STAR_current_length_STAR_19123_19128,base_sym))
})();
(fexpr__19124_19129.cljs$core$IFn$_invoke$arity$1 ? fexpr__19124_19129.cljs$core$IFn$_invoke$arity$1(base_sym) : fexpr__19124_19129.call(null,base_sym));

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

var G__19126_19133 = cljs.core.next(cljs.core.rest(alis));
var fexpr__19125_19134 = (function (){var format_in__16825__auto__ = " ~_~{~w~^ ~_~}";
var cf__16826__auto__ = ((typeof format_in__16825__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16825__auto__) : cljs.pprint.cached_compile.call(null,format_in__16825__auto__)):format_in__16825__auto__);
return ((function (format_in__16825__auto__,cf__16826__auto__,G__19126_19133,_STAR_current_level_STAR_19122_19127,_STAR_current_length_STAR_19123_19128,base_sym){
return (function() { 
var G__19135__delegate = function (args__16827__auto__){
var navigator__16828__auto__ = cljs.pprint.init_navigator(args__16827__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16826__auto__,navigator__16828__auto__);
};
var G__19135 = function (var_args){
var args__16827__auto__ = null;
if (arguments.length > 0) {
var G__19136__i = 0, G__19136__a = new Array(arguments.length -  0);
while (G__19136__i < G__19136__a.length) {G__19136__a[G__19136__i] = arguments[G__19136__i + 0]; ++G__19136__i;}
  args__16827__auto__ = new cljs.core.IndexedSeq(G__19136__a,0,null);
} 
return G__19135__delegate.call(this,args__16827__auto__);};
G__19135.cljs$lang$maxFixedArity = 0;
G__19135.cljs$lang$applyTo = (function (arglist__19137){
var args__16827__auto__ = cljs.core.seq(arglist__19137);
return G__19135__delegate(args__16827__auto__);
});
G__19135.cljs$core$IFn$_invoke$arity$variadic = G__19135__delegate;
return G__19135;
})()
;
;})(format_in__16825__auto__,cf__16826__auto__,G__19126_19133,_STAR_current_level_STAR_19122_19127,_STAR_current_length_STAR_19123_19128,base_sym))
})();
(fexpr__19125_19134.cljs$core$IFn$_invoke$arity$1 ? fexpr__19125_19134.cljs$core$IFn$_invoke$arity$1(G__19126_19133) : fexpr__19125_19134.call(null,G__19126_19133));
} else {
(cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_19123_19128;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_19122_19127;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__16825__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__16826__auto__ = ((typeof format_in__16825__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16825__auto__) : cljs.pprint.cached_compile.call(null,format_in__16825__auto__)):format_in__16825__auto__);
return ((function (format_in__16825__auto__,cf__16826__auto__){
return (function() { 
var G__19138__delegate = function (args__16827__auto__){
var navigator__16828__auto__ = cljs.pprint.init_navigator(args__16827__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16826__auto__,navigator__16828__auto__);
};
var G__19138 = function (var_args){
var args__16827__auto__ = null;
if (arguments.length > 0) {
var G__19139__i = 0, G__19139__a = new Array(arguments.length -  0);
while (G__19139__i < G__19139__a.length) {G__19139__a[G__19139__i] = arguments[G__19139__i + 0]; ++G__19139__i;}
  args__16827__auto__ = new cljs.core.IndexedSeq(G__19139__a,0,null);
} 
return G__19138__delegate.call(this,args__16827__auto__);};
G__19138.cljs$lang$maxFixedArity = 0;
G__19138.cljs$lang$applyTo = (function (arglist__19140){
var args__16827__auto__ = cljs.core.seq(arglist__19140);
return G__19138__delegate(args__16827__auto__);
});
G__19138.cljs$core$IFn$_invoke$arity$variadic = G__19138__delegate;
return G__19138;
})()
;
;})(format_in__16825__auto__,cf__16826__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_19141_19146 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_19142_19147 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var length_count19143_19148 = (0);
var alis_19149__$1 = cljs.core.next(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count19143_19148 < cljs.core._STAR_print_length_STAR_)))){
if(alis_19149__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_19144_19150 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_19145_19151 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_19149__$1));

if(cljs.core.next(alis_19149__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_19149__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_19145_19151;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_19144_19150;
}}


if(cljs.core.next(cljs.core.rest(alis_19149__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__19152 = (length_count19143_19148 + (1));
var G__19153 = cljs.core.next(cljs.core.rest(alis_19149__$1));
length_count19143_19148 = G__19152;
alis_19149__$1 = G__19153;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_19142_19147;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_19141_19146;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_19154_19159 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_19155_19160 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__16825__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__16826__auto__ = ((typeof format_in__16825__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16825__auto__) : cljs.pprint.cached_compile.call(null,format_in__16825__auto__)):format_in__16825__auto__);
return ((function (format_in__16825__auto__,cf__16826__auto__,_STAR_current_level_STAR_19154_19159,_STAR_current_length_STAR_19155_19160){
return (function() { 
var G__19161__delegate = function (args__16827__auto__){
var navigator__16828__auto__ = cljs.pprint.init_navigator(args__16827__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16826__auto__,navigator__16828__auto__);
};
var G__19161 = function (var_args){
var args__16827__auto__ = null;
if (arguments.length > 0) {
var G__19162__i = 0, G__19162__a = new Array(arguments.length -  0);
while (G__19162__i < G__19162__a.length) {G__19162__a[G__19162__i] = arguments[G__19162__i + 0]; ++G__19162__i;}
  args__16827__auto__ = new cljs.core.IndexedSeq(G__19162__a,0,null);
} 
return G__19161__delegate.call(this,args__16827__auto__);};
G__19161.cljs$lang$maxFixedArity = 0;
G__19161.cljs$lang$applyTo = (function (arglist__19163){
var args__16827__auto__ = cljs.core.seq(arglist__19163);
return G__19161__delegate(args__16827__auto__);
});
G__19161.cljs$core$IFn$_invoke$arity$variadic = G__19161__delegate;
return G__19161;
})()
;
;})(format_in__16825__auto__,cf__16826__auto__,_STAR_current_level_STAR_19154_19159,_STAR_current_length_STAR_19155_19160))
})(),alis);

var length_count19156_19164 = (0);
var alis_19165__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count19156_19164 < cljs.core._STAR_print_length_STAR_)))){
if(alis_19165__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_19157_19166 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_19158_19167 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_19165__$1));

if(cljs.core.next(alis_19165__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_19165__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_19158_19167;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_19157_19166;
}}


if(cljs.core.next(cljs.core.rest(alis_19165__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__19168 = (length_count19156_19164 + (1));
var G__19169 = cljs.core.next(cljs.core.rest(alis_19165__$1));
length_count19156_19164 = G__19168;
alis_19165__$1 = G__19169;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_19155_19160;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_19154_19159;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second(alis);
var nlis = cljs.core.first(cljs.core.rest(cljs.core.rest(alis)));
if(cljs.core.vector_QMARK_(args)){
var _STAR_symbol_map_STAR_19172 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),"%"]):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (_STAR_symbol_map_STAR_19172,args,nlis){
return (function (p1__19170_SHARP_,p2__19171_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__19170_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__19171_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_19172,args,nlis))
,args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));

try{var fexpr__19173 = (function (){var format_in__16825__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__16826__auto__ = ((typeof format_in__16825__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16825__auto__) : cljs.pprint.cached_compile.call(null,format_in__16825__auto__)):format_in__16825__auto__);
return ((function (format_in__16825__auto__,cf__16826__auto__,_STAR_symbol_map_STAR_19172,args,nlis){
return (function() { 
var G__19174__delegate = function (args__16827__auto__){
var navigator__16828__auto__ = cljs.pprint.init_navigator(args__16827__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16826__auto__,navigator__16828__auto__);
};
var G__19174 = function (var_args){
var args__16827__auto__ = null;
if (arguments.length > 0) {
var G__19175__i = 0, G__19175__a = new Array(arguments.length -  0);
while (G__19175__i < G__19175__a.length) {G__19175__a[G__19175__i] = arguments[G__19175__i + 0]; ++G__19175__i;}
  args__16827__auto__ = new cljs.core.IndexedSeq(G__19175__a,0,null);
} 
return G__19174__delegate.call(this,args__16827__auto__);};
G__19174.cljs$lang$maxFixedArity = 0;
G__19174.cljs$lang$applyTo = (function (arglist__19176){
var args__16827__auto__ = cljs.core.seq(arglist__19176);
return G__19174__delegate(args__16827__auto__);
});
G__19174.cljs$core$IFn$_invoke$arity$variadic = G__19174__delegate;
return G__19174;
})()
;
;})(format_in__16825__auto__,cf__16826__auto__,_STAR_symbol_map_STAR_19172,args,nlis))
})();
return (fexpr__19173.cljs$core$IFn$_invoke$arity$1 ? fexpr__19173.cljs$core$IFn$_invoke$arity$1(nlis) : fexpr__19173.call(null,nlis));
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_19172;
}} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_19177_19180 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_19178_19181 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

var length_count19179_19182 = (0);
var alis_19183__$1 = cljs.core.seq(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count19179_19182 < cljs.core._STAR_print_length_STAR_)))){
if(alis_19183__$1){
cljs.pprint.write_out(cljs.core.first(alis_19183__$1));

if(cljs.core.next(alis_19183__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__19184 = (length_count19179_19182 + (1));
var G__19185 = cljs.core.next(alis_19183__$1);
length_count19179_19182 = G__19184;
alis_19183__$1 = G__19185;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_19178_19181;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_19177_19180;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4292__auto__ = (function cljs$pprint$two_forms_$_iter__19186(s__19187){
return (new cljs.core.LazySeq(null,(function (){
var s__19187__$1 = s__19187;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19187__$1);
if(temp__4657__auto__){
var s__19187__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19187__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__19187__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__19189 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__19188 = (0);
while(true){
if((i__19188 < size__4291__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__19188);
cljs.core.chunk_append(b__19189,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__19190 = (i__19188 + (1));
i__19188 = G__19190;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19189),cljs$pprint$two_forms_$_iter__19186(cljs.core.chunk_rest(s__19187__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19189),null);
}
} else {
var x = cljs.core.first(s__19187__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__19186(cljs.core.rest(s__19187__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(amap);
})()], 0)));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (core){
return (function (p1__19191_SHARP_){
var vec__19192 = p1__19191_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19192,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19192,(1),null);
if(cljs.core.not((function (){var or__3922__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__19191_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$_DOT_,cljs.core.cst$sym$fn_STAR_,cljs.core.cst$sym$when_DASH_first,cljs.core.cst$sym$if,cljs.core.cst$sym$condp,cljs.core.cst$sym$$$,cljs.core.cst$sym$defmacro,cljs.core.cst$sym$defn,cljs.core.cst$sym$loop,cljs.core.cst$sym$struct,cljs.core.cst$sym$doseq,cljs.core.cst$sym$if_DASH_not,cljs.core.cst$sym$when_DASH_not,cljs.core.cst$sym$def,cljs.core.cst$sym$when,cljs.core.cst$sym$with_DASH_open,cljs.core.cst$sym$with_DASH_local_DASH_vars,cljs.core.cst$sym$defonce,cljs.core.cst$sym$when_DASH_let,cljs.core.cst$sym$ns,cljs.core.cst$sym$dotimes,cljs.core.cst$sym$cond,cljs.core.cst$sym$let,cljs.core.cst$sym$fn,cljs.core.cst$sym$defn_DASH_,cljs.core.cst$sym$locking,cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$if_DASH_let,cljs.core.cst$sym$binding,cljs.core.cst$sym$struct_DASH_map],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__4655__auto__ = (function (){var G__19195 = cljs.core.first(alis);
return (cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1(G__19195) : cljs.pprint._STAR_code_table_STAR_.call(null,G__19195));
})();
if(cljs.core.truth_(temp__4655__auto__)){
var special_form = temp__4655__auto__;
return (special_form.cljs$core$IFn$_invoke$arity$1 ? special_form.cljs$core$IFn$_invoke$arity$1(alis) : special_form.call(null,alis));
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__4655__auto__ = (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_symbol_map_STAR_) : sym.call(null,cljs.pprint._STAR_symbol_map_STAR_));
if(cljs.core.truth_(temp__4655__auto__)){
var arg_num = temp__4655__auto__;
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_num], 0));
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sym)], 0));
} else {
return (cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(sym) : cljs.pprint.pr.call(null,sym));
}
}
});
if(typeof cljs.pprint.code_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_code_list);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$symbol,cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$queue,cljs.pprint.pprint_pqueue);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$deref,cljs.pprint.pprint_ideref);
cljs.pprint.use_method(cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__4006__auto__ = (0);
var y__4007__auto__ = (width - cljs.core.count(s));
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__19200 = arguments.length;
switch (G__19200) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
var _STAR_print_newline_STAR_19201 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_19201){
return (function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_19201){
return (function (p1__19196_SHARP_){
return cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__19196_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_19201))
,rows));
});})(_STAR_print_newline_STAR_19201))
,ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (widths,_STAR_print_newline_STAR_19201){
return (function (p1__19197_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__19197_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_19201))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_19201){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__4292__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_19201){
return (function cljs$pprint$iter__19202(s__19203){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_19201){
return (function (){
var s__19203__$1 = s__19203;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19203__$1);
if(temp__4657__auto__){
var s__19203__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19203__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__19203__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__19205 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__19204 = (0);
while(true){
if((i__19204 < size__4291__auto__)){
var vec__19206 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__19204);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19206,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19206,(1),null);
cljs.core.chunk_append(b__19205,cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')));

var G__19217 = (i__19204 + (1));
i__19204 = G__19217;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19205),cljs$pprint$iter__19202(cljs.core.chunk_rest(s__19203__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19205),null);
}
} else {
var vec__19209 = cljs.core.first(s__19203__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19209,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19209,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')),cljs$pprint$iter__19202(cljs.core.rest(s__19203__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_19201))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_19201))
;
return iter__4292__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__4292__auto__,widths,spacers,_STAR_print_newline_STAR_19201){
return (function (p1__19198_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__19198_SHARP_);
});})(iter__4292__auto__,widths,spacers,_STAR_print_newline_STAR_19201))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_19201))
;
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__19212 = cljs.core.seq(rows);
var chunk__19213 = null;
var count__19214 = (0);
var i__19215 = (0);
while(true){
if((i__19215 < count__19214)){
var row = chunk__19213.cljs$core$IIndexed$_nth$arity$2(null,i__19215);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));


var G__19218 = seq__19212;
var G__19219 = chunk__19213;
var G__19220 = count__19214;
var G__19221 = (i__19215 + (1));
seq__19212 = G__19218;
chunk__19213 = G__19219;
count__19214 = G__19220;
i__19215 = G__19221;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__19212);
if(temp__4657__auto__){
var seq__19212__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19212__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__19212__$1);
var G__19222 = cljs.core.chunk_rest(seq__19212__$1);
var G__19223 = c__4319__auto__;
var G__19224 = cljs.core.count(c__4319__auto__);
var G__19225 = (0);
seq__19212 = G__19222;
chunk__19213 = G__19223;
count__19214 = G__19224;
i__19215 = G__19225;
continue;
} else {
var row = cljs.core.first(seq__19212__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));


var G__19226 = cljs.core.next(seq__19212__$1);
var G__19227 = null;
var G__19228 = (0);
var G__19229 = (0);
seq__19212 = G__19226;
chunk__19213 = G__19227;
count__19214 = G__19228;
i__19215 = G__19229;
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
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_19201;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;

