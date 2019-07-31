// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('clojure_cv.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('clojure_cv.db');
goog.require('accountant.core');
goog.require('day8.re_frame.tracing');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$clojure_DASH_cv$events_SLASH_initialize_DASH_db,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.cst$sym$db_SLASH_default_DASH_db);

var opts__23276__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__23277__auto__ = clojure_cv.db.default_db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__23277__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db_SLASH_default_DASH_db,cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__23277__auto__;
}catch (e23441){var e = e23441;
throw e;
}}):(function (_,___$1){
return clojure_cv.db.default_db;
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$modal,(function (db,p__23442){
var vec__23443 = p__23442;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23443,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23443,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$modal_DASH_open,val);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_current_DASH_section,(function (db,p__23446){
var vec__23447 = p__23446;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23447,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23447,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_section,val);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$scroll_DASH_is_DASH_at_DASH_beginning,(function (db,p__23450){
var vec__23451 = p__23450;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23451,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23451,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$scroll_DASH_is_DASH_at_DASH_beginning,val);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$toggle_DASH_menu,(function (db,_){
var menu_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$menu_DASH_open);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$menu_DASH_open,cljs.core.not(menu_state));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$scroll_DASH_into_DASH_view,(function (_,p__23454){
var vec__23455 = p__23454;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23455,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23455,(1),null);
var instant_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23455,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scroll_DASH_into_DASH_view,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,instant_QMARK_], null)], null);
}));
var G__23458_23460 = cljs.core.cst$kw$navigate_DASH_to_DASH_home;
var G__23459_23461 = ((function (G__23458_23460){
return (function (){
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/");
});})(G__23458_23460))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__23458_23460,G__23459_23461) : re_frame.core.reg_fx.call(null,G__23458_23460,G__23459_23461));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$navigate_DASH_to_DASH_portfolio,(function (_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$navigate_DASH_to_DASH_home,null,cljs.core.cst$kw$dispatch_DASH_later,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroll_DASH_into_DASH_view,"portfolio",true], null),cljs.core.cst$kw$ms,(150)], null)], null)], null);
}));
var G__23462_23468 = cljs.core.cst$kw$scroll_DASH_into_DASH_view;
var G__23463_23469 = ((function (G__23462_23468){
return (function (p__23464){
var vec__23465 = p__23464;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23465,(0),null);
var instant_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23465,(1),null);
return document.querySelector(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')).scrollIntoView(cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.not(instant_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$behavior,"smooth"], null):null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$block,"start"], null)], 0))));
});})(G__23462_23468))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__23462_23468,G__23463_23469) : re_frame.core.reg_fx.call(null,G__23462_23468,G__23463_23469));
var G__23471_23473 = cljs.core.cst$kw$modal_DASH_open;
var G__23472_23474 = ((function (G__23471_23473){
return (function (p1__23470_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__23470_SHARP_,cljs.core.cst$kw$modal_DASH_open);
});})(G__23471_23473))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23471_23473,G__23472_23474) : re_frame.core.reg_sub.call(null,G__23471_23473,G__23472_23474));
var G__23476_23478 = cljs.core.cst$kw$current_DASH_section;
var G__23477_23479 = ((function (G__23476_23478){
return (function (p1__23475_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__23475_SHARP_,cljs.core.cst$kw$current_DASH_section);
});})(G__23476_23478))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23476_23478,G__23477_23479) : re_frame.core.reg_sub.call(null,G__23476_23478,G__23477_23479));
var G__23481_23483 = cljs.core.cst$kw$menu_DASH_open;
var G__23482_23484 = ((function (G__23481_23483){
return (function (p1__23480_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__23480_SHARP_,cljs.core.cst$kw$menu_DASH_open);
});})(G__23481_23483))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23481_23483,G__23482_23484) : re_frame.core.reg_sub.call(null,G__23481_23483,G__23482_23484));
var G__23486_23488 = cljs.core.cst$kw$scroll_DASH_is_DASH_at_DASH_beginning;
var G__23487_23489 = ((function (G__23486_23488){
return (function (p1__23485_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__23485_SHARP_,cljs.core.cst$kw$scroll_DASH_is_DASH_at_DASH_beginning);
});})(G__23486_23488))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23486_23488,G__23487_23489) : re_frame.core.reg_sub.call(null,G__23486_23488,G__23487_23489));
var G__23490_23492 = cljs.core.cst$kw$current_DASH_year;
var G__23491_23493 = ((function (G__23490_23492){
return (function (){
return (new Date()).getFullYear();
});})(G__23490_23492))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23490_23492,G__23491_23493) : re_frame.core.reg_sub.call(null,G__23490_23492,G__23491_23493));
