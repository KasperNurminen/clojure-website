// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__12278){
var map__12279 = p__12278;
var map__12279__$1 = ((((!((map__12279 == null)))?(((((map__12279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12279):map__12279);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12279__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12279__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12279__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12279__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__3922__auto__ = child_of;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__12281_12295 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__12282_12296 = null;
var count__12283_12297 = (0);
var i__12284_12298 = (0);
while(true){
if((i__12284_12298 < count__12283_12297)){
var vec__12285_12299 = chunk__12282_12296.cljs$core$IIndexed$_nth$arity$2(null,i__12284_12298);
var k_12300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12285_12299,(0),null);
var cb_12301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12285_12299,(1),null);
try{var G__12289_12302 = cljs.core.deref(re_frame.trace.traces);
(cb_12301.cljs$core$IFn$_invoke$arity$1 ? cb_12301.cljs$core$IFn$_invoke$arity$1(G__12289_12302) : cb_12301.call(null,G__12289_12302));
}catch (e12288){var e_12303 = e12288;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_12300,"while storing",cljs.core.deref(re_frame.trace.traces),e_12303], 0));
}

var G__12304 = seq__12281_12295;
var G__12305 = chunk__12282_12296;
var G__12306 = count__12283_12297;
var G__12307 = (i__12284_12298 + (1));
seq__12281_12295 = G__12304;
chunk__12282_12296 = G__12305;
count__12283_12297 = G__12306;
i__12284_12298 = G__12307;
continue;
} else {
var temp__4657__auto___12308 = cljs.core.seq(seq__12281_12295);
if(temp__4657__auto___12308){
var seq__12281_12309__$1 = temp__4657__auto___12308;
if(cljs.core.chunked_seq_QMARK_(seq__12281_12309__$1)){
var c__4319__auto___12310 = cljs.core.chunk_first(seq__12281_12309__$1);
var G__12311 = cljs.core.chunk_rest(seq__12281_12309__$1);
var G__12312 = c__4319__auto___12310;
var G__12313 = cljs.core.count(c__4319__auto___12310);
var G__12314 = (0);
seq__12281_12295 = G__12311;
chunk__12282_12296 = G__12312;
count__12283_12297 = G__12313;
i__12284_12298 = G__12314;
continue;
} else {
var vec__12290_12315 = cljs.core.first(seq__12281_12309__$1);
var k_12316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12290_12315,(0),null);
var cb_12317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12290_12315,(1),null);
try{var G__12294_12318 = cljs.core.deref(re_frame.trace.traces);
(cb_12317.cljs$core$IFn$_invoke$arity$1 ? cb_12317.cljs$core$IFn$_invoke$arity$1(G__12294_12318) : cb_12317.call(null,G__12294_12318));
}catch (e12293){var e_12319 = e12293;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_12316,"while storing",cljs.core.deref(re_frame.trace.traces),e_12319], 0));
}

var G__12320 = cljs.core.next(seq__12281_12309__$1);
var G__12321 = null;
var G__12322 = (0);
var G__12323 = (0);
seq__12281_12295 = G__12320;
chunk__12282_12296 = G__12321;
count__12283_12297 = G__12322;
i__12284_12298 = G__12323;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (10)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
