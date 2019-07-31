// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('clojure_cv.views.portfolio');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_react_material_ui.reagent');
goog.require('re_frame.core');
goog.require('accountant.core');
goog.require('reagent.core');
goog.require('clojure_cv.texts');
clojure_cv.views.portfolio.render_buttons = (function clojure_cv$views$portfolio$render_buttons(buttons){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$d_DASH_flex$flex_DASH_wrap$justify_DASH_content_DASH_center,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (button){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$github,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(button)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.flat_button,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$label,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(button),cljs.core.cst$kw$label_DASH_position,"before",cljs.core.cst$kw$target,"_blank",cljs.core.cst$kw$href,cljs.core.cst$kw$href.cljs$core$IFn$_invoke$arity$1(button),cljs.core.cst$kw$icon,reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$height,"32px",cljs.core.cst$kw$width,"32px",cljs.core.cst$kw$src,"https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"], null)], null))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.flat_button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(button),cljs.core.cst$kw$target,"_blank",cljs.core.cst$kw$href,cljs.core.cst$kw$href.cljs$core$IFn$_invoke$arity$1(button)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(button)], null));
}),buttons)], null);
});
clojure_cv.views.portfolio.ilmomasiina = (function clojure_cv$views$portfolio$ilmomasiina(){
var with_let21415 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let21415);
var temp__4661__auto___21419 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__4661__auto___21419 == null)){
} else {
var c__2637__auto___21420 = temp__4661__auto___21419;
if((with_let21415.generation === c__2637__auto___21420.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let21415.generation = c__2637__auto___21420.ratomGeneration;
}


var init21416 = (with_let21415.length === (0));
var _ = ((init21416)?(with_let21415[(0)] = (function (){var G__21417 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_current_DASH_section,"portfolio"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21417) : re_frame.core.dispatch.call(null,G__21417));
})()):(with_let21415[(0)]));
var res__2638__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section_SHARP_ilmomasiina,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,"2rem",cljs.core.cst$kw$margin_DASH_top,"4rem"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"flex"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"50%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(clojure_cv.texts.texts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ilmomasiina,cljs.core.cst$kw$title], null))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(clojure_cv.texts.texts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ilmomasiina,cljs.core.cst$kw$text], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.portfolio.render_buttons,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(clojure_cv.texts.texts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ilmomasiina,cljs.core.cst$kw$buttons], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"50%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$portfolio_DASH_image$detail_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_image,"url(../../assets/ilmomasiina.png)"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.flat_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (init21416,_,with_let21415){
return (function (){
var G__21418 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$navigate_DASH_to_DASH_portfolio], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21418) : re_frame.core.dispatch.call(null,G__21418));
});})(init21416,_,with_let21415))
], null),"Back"], null)], null)], null);

return res__2638__auto__;
});
clojure_cv.views.portfolio.kaspernurminen = (function clojure_cv$views$portfolio$kaspernurminen(){
var with_let21421 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let21421);
var temp__4661__auto___21425 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__4661__auto___21425 == null)){
} else {
var c__2637__auto___21426 = temp__4661__auto___21425;
if((with_let21421.generation === c__2637__auto___21426.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let21421.generation = c__2637__auto___21426.ratomGeneration;
}


var init21422 = (with_let21421.length === (0));
var _ = ((init21422)?(with_let21421[(0)] = (function (){var G__21423 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_current_DASH_section,"portfolio"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21423) : re_frame.core.dispatch.call(null,G__21423));
})()):(with_let21421[(0)]));
var res__2638__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section_SHARP_kaspernurminen,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,"2rem",cljs.core.cst$kw$margin_DASH_top,"4rem"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"flex"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"50%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(clojure_cv.texts.texts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kaspernurminenfi,cljs.core.cst$kw$title], null))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(clojure_cv.texts.texts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kaspernurminenfi,cljs.core.cst$kw$text], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.portfolio.render_buttons,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(clojure_cv.texts.texts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kaspernurminenfi,cljs.core.cst$kw$buttons], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"50%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$portfolio_DASH_image$detail_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_image,"url(../../assets/kaspernurminenfi.png)"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.flat_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (init21422,_,with_let21421){
return (function (){
var G__21424 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$navigate_DASH_to_DASH_portfolio], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21424) : re_frame.core.dispatch.call(null,G__21424));
});})(init21422,_,with_let21421))
], null),"Back"], null)], null)], null);

return res__2638__auto__;
});
clojure_cv.views.portfolio.oloscreen = (function clojure_cv$views$portfolio$oloscreen(){
var with_let21427 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let21427);
var temp__4661__auto___21431 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__4661__auto___21431 == null)){
} else {
var c__2637__auto___21432 = temp__4661__auto___21431;
if((with_let21427.generation === c__2637__auto___21432.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let21427.generation = c__2637__auto___21432.ratomGeneration;
}


var init21428 = (with_let21427.length === (0));
var _ = ((init21428)?(with_let21427[(0)] = (function (){var G__21429 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_current_DASH_section,"portfolio"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21429) : re_frame.core.dispatch.call(null,G__21429));
})()):(with_let21427[(0)]));
var res__2638__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section_SHARP_oloscreen,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,"2rem",cljs.core.cst$kw$margin_DASH_top,"4rem"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"flex"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"50%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(clojure_cv.texts.texts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oloscreen,cljs.core.cst$kw$title], null))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(clojure_cv.texts.texts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oloscreen,cljs.core.cst$kw$text], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.portfolio.render_buttons,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(clojure_cv.texts.texts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oloscreen,cljs.core.cst$kw$buttons], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"50%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$portfolio_DASH_image$detail_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_image,"url(../../assets/oloscreen.png)"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.flat_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (init21428,_,with_let21427){
return (function (){
var G__21430 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$navigate_DASH_to_DASH_portfolio], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21430) : re_frame.core.dispatch.call(null,G__21430));
});})(init21428,_,with_let21427))
], null),"Back"], null)], null)], null);

return res__2638__auto__;
});
