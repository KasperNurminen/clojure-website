// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_12626 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__12627 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__12628 = null;
var count__12629 = (0);
var i__12630 = (0);
while(true){
if((i__12630 < count__12629)){
var vec__12631 = chunk__12628.cljs$core$IIndexed$_nth$arity$2(null,i__12630);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12631,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12631,(1),null);
var temp__4655__auto___12647 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___12647)){
var effect_fn_12648 = temp__4655__auto___12647;
(effect_fn_12648.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12648.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12648.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12649 = seq__12627;
var G__12650 = chunk__12628;
var G__12651 = count__12629;
var G__12652 = (i__12630 + (1));
seq__12627 = G__12649;
chunk__12628 = G__12650;
count__12629 = G__12651;
i__12630 = G__12652;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__12627);
if(temp__4657__auto__){
var seq__12627__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12627__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__12627__$1);
var G__12653 = cljs.core.chunk_rest(seq__12627__$1);
var G__12654 = c__4319__auto__;
var G__12655 = cljs.core.count(c__4319__auto__);
var G__12656 = (0);
seq__12627 = G__12653;
chunk__12628 = G__12654;
count__12629 = G__12655;
i__12630 = G__12656;
continue;
} else {
var vec__12634 = cljs.core.first(seq__12627__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12634,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12634,(1),null);
var temp__4655__auto___12657 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___12657)){
var effect_fn_12658 = temp__4655__auto___12657;
(effect_fn_12658.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12658.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12658.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12659 = cljs.core.next(seq__12627__$1);
var G__12660 = null;
var G__12661 = (0);
var G__12662 = (0);
seq__12627 = G__12659;
chunk__12628 = G__12660;
count__12629 = G__12661;
i__12630 = G__12662;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12205__auto___12663 = re_frame.interop.now();
var duration__12206__auto___12664 = (end__12205__auto___12663 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__12206__auto___12664,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12205__auto___12663);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_12626;
}} else {
var seq__12637 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__12638 = null;
var count__12639 = (0);
var i__12640 = (0);
while(true){
if((i__12640 < count__12639)){
var vec__12641 = chunk__12638.cljs$core$IIndexed$_nth$arity$2(null,i__12640);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12641,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12641,(1),null);
var temp__4655__auto___12665 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___12665)){
var effect_fn_12666 = temp__4655__auto___12665;
(effect_fn_12666.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12666.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12666.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12667 = seq__12637;
var G__12668 = chunk__12638;
var G__12669 = count__12639;
var G__12670 = (i__12640 + (1));
seq__12637 = G__12667;
chunk__12638 = G__12668;
count__12639 = G__12669;
i__12640 = G__12670;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__12637);
if(temp__4657__auto__){
var seq__12637__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12637__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__12637__$1);
var G__12671 = cljs.core.chunk_rest(seq__12637__$1);
var G__12672 = c__4319__auto__;
var G__12673 = cljs.core.count(c__4319__auto__);
var G__12674 = (0);
seq__12637 = G__12671;
chunk__12638 = G__12672;
count__12639 = G__12673;
i__12640 = G__12674;
continue;
} else {
var vec__12644 = cljs.core.first(seq__12637__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12644,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12644,(1),null);
var temp__4655__auto___12675 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___12675)){
var effect_fn_12676 = temp__4655__auto___12675;
(effect_fn_12676.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12676.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12676.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12677 = cljs.core.next(seq__12637__$1);
var G__12678 = null;
var G__12679 = (0);
var G__12680 = (0);
seq__12637 = G__12677;
chunk__12638 = G__12678;
count__12639 = G__12679;
i__12640 = G__12680;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__12681 = cljs.core.seq(value);
var chunk__12682 = null;
var count__12683 = (0);
var i__12684 = (0);
while(true){
if((i__12684 < count__12683)){
var map__12685 = chunk__12682.cljs$core$IIndexed$_nth$arity$2(null,i__12684);
var map__12685__$1 = ((((!((map__12685 == null)))?(((((map__12685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12685):map__12685);
var effect = map__12685__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12685__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12685__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__12681,chunk__12682,count__12683,i__12684,map__12685,map__12685__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__12681,chunk__12682,count__12683,i__12684,map__12685,map__12685__$1,effect,ms,dispatch))
,ms);
}


var G__12689 = seq__12681;
var G__12690 = chunk__12682;
var G__12691 = count__12683;
var G__12692 = (i__12684 + (1));
seq__12681 = G__12689;
chunk__12682 = G__12690;
count__12683 = G__12691;
i__12684 = G__12692;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__12681);
if(temp__4657__auto__){
var seq__12681__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12681__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__12681__$1);
var G__12693 = cljs.core.chunk_rest(seq__12681__$1);
var G__12694 = c__4319__auto__;
var G__12695 = cljs.core.count(c__4319__auto__);
var G__12696 = (0);
seq__12681 = G__12693;
chunk__12682 = G__12694;
count__12683 = G__12695;
i__12684 = G__12696;
continue;
} else {
var map__12687 = cljs.core.first(seq__12681__$1);
var map__12687__$1 = ((((!((map__12687 == null)))?(((((map__12687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12687):map__12687);
var effect = map__12687__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12687__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12687__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__12681,chunk__12682,count__12683,i__12684,map__12687,map__12687__$1,effect,ms,dispatch,seq__12681__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__12681,chunk__12682,count__12683,i__12684,map__12687,map__12687__$1,effect,ms,dispatch,seq__12681__$1,temp__4657__auto__))
,ms);
}


var G__12697 = cljs.core.next(seq__12681__$1);
var G__12698 = null;
var G__12699 = (0);
var G__12700 = (0);
seq__12681 = G__12697;
chunk__12682 = G__12698;
count__12683 = G__12699;
i__12684 = G__12700;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if(!(cljs.core.sequential_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__12701 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__12702 = null;
var count__12703 = (0);
var i__12704 = (0);
while(true){
if((i__12704 < count__12703)){
var event = chunk__12702.cljs$core$IIndexed$_nth$arity$2(null,i__12704);
re_frame.router.dispatch(event);


var G__12705 = seq__12701;
var G__12706 = chunk__12702;
var G__12707 = count__12703;
var G__12708 = (i__12704 + (1));
seq__12701 = G__12705;
chunk__12702 = G__12706;
count__12703 = G__12707;
i__12704 = G__12708;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__12701);
if(temp__4657__auto__){
var seq__12701__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12701__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__12701__$1);
var G__12709 = cljs.core.chunk_rest(seq__12701__$1);
var G__12710 = c__4319__auto__;
var G__12711 = cljs.core.count(c__4319__auto__);
var G__12712 = (0);
seq__12701 = G__12709;
chunk__12702 = G__12710;
count__12703 = G__12711;
i__12704 = G__12712;
continue;
} else {
var event = cljs.core.first(seq__12701__$1);
re_frame.router.dispatch(event);


var G__12713 = cljs.core.next(seq__12701__$1);
var G__12714 = null;
var G__12715 = (0);
var G__12716 = (0);
seq__12701 = G__12713;
chunk__12702 = G__12714;
count__12703 = G__12715;
i__12704 = G__12716;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__12717 = cljs.core.seq(value);
var chunk__12718 = null;
var count__12719 = (0);
var i__12720 = (0);
while(true){
if((i__12720 < count__12719)){
var event = chunk__12718.cljs$core$IIndexed$_nth$arity$2(null,i__12720);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__12721 = seq__12717;
var G__12722 = chunk__12718;
var G__12723 = count__12719;
var G__12724 = (i__12720 + (1));
seq__12717 = G__12721;
chunk__12718 = G__12722;
count__12719 = G__12723;
i__12720 = G__12724;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__12717);
if(temp__4657__auto__){
var seq__12717__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12717__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__12717__$1);
var G__12725 = cljs.core.chunk_rest(seq__12717__$1);
var G__12726 = c__4319__auto__;
var G__12727 = cljs.core.count(c__4319__auto__);
var G__12728 = (0);
seq__12717 = G__12725;
chunk__12718 = G__12726;
count__12719 = G__12727;
i__12720 = G__12728;
continue;
} else {
var event = cljs.core.first(seq__12717__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__12729 = cljs.core.next(seq__12717__$1);
var G__12730 = null;
var G__12731 = (0);
var G__12732 = (0);
seq__12717 = G__12729;
chunk__12718 = G__12730;
count__12719 = G__12731;
i__12720 = G__12732;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if(!((cljs.core.deref(re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
