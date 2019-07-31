// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('clojure_cv.views.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_react_material_ui.core');
goog.require('cljs_react_material_ui.reagent');
goog.require('clojure_cv.views.sections');
goog.require('accountant.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('cljs_react_material_ui.icons');
clojure_cv.views.core.menu_button = (function clojure_cv$views$core$menu_button(label,id){
var current_section = (function (){var G__4582 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_section], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__4582) : re_frame.core.subscribe.call(null,G__4582));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.flat_button,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.deref(current_section)))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$primary,true], null):null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_click,((function (current_section){
return (function (){
window.setTimeout(((function (current_section){
return (function (){
var G__4583 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_current_DASH_section,id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__4583) : re_frame.core.dispatch.call(null,G__4583));
});})(current_section))
,(600));

var G__4584 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroll_DASH_into_DASH_view,id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__4584) : re_frame.core.dispatch.call(null,G__4584));
});})(current_section))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"left"], null),cljs.core.cst$kw$label,label], null)], 0))], null);
});
clojure_cv.views.core.menu_icons = (function clojure_cv$views$core$menu_icons(menu_open){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mr_DASH_2$menu_DASH_icons,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class_DASH_name,(cljs.core.truth_(menu_open)?"menu-icons-expanded":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.core.menu_button,"Basic Information","main"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.core.menu_button,"Skills","skills"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.core.menu_button,"Job Experience","job-experience"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.core.menu_button,"Education","education"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.core.menu_button,"Portfolio","portfolio"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.core.menu_button,"Contact me","contact"], null)], null);
});
clojure_cv.views.core.header = (function clojure_cv$views$core$header(){
var menu_open = (function (){var G__4585 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$menu_DASH_open], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__4585) : re_frame.core.subscribe.call(null,G__4585));
})();
var scroll_is_at_beginning = (function (){var G__4586 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroll_DASH_is_DASH_at_DASH_beginning], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__4586) : re_frame.core.subscribe.call(null,G__4586));
})();
var current_section = (function (){var G__4587 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_section], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__4587) : re_frame.core.subscribe.call(null,G__4587));
})();
var header_class_names = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.deref(menu_open))?"header header-expanded":"header")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__3911__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("main",cljs.core.deref(current_section));
if(and__3911__auto__){
return cljs.core.deref(scroll_is_at_beginning);
} else {
return and__3911__auto__;
}
})())?" black":null))].join('');
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.paper,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class_DASH_name,header_class_names], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$ml_DASH_2,"CV - Kasper Nurminen"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.core.menu_icons,cljs.core.deref(menu_open)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.icon_button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class_DASH_name,"menu-select",cljs.core.cst$kw$on_DASH_click,((function (menu_open,scroll_is_at_beginning,current_section,header_class_names){
return (function (){
var G__4588 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$toggle_DASH_menu], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__4588) : re_frame.core.dispatch.call(null,G__4588));
});})(menu_open,scroll_is_at_beginning,current_section,header_class_names))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.icons.navigation_menu], null)], null)], null);
});
clojure_cv.views.core.on_scroll = (function clojure_cv$views$core$on_scroll(sections){
var scroll_y = window.scrollY;
var prev_section = (function (){var G__4590 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_section], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__4590) : re_frame.core.subscribe.call(null,G__4590));
})();
var inner_height = window.innerHeight;
var current_section = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (scroll_y,prev_section,inner_height){
return (function (p1__4589_SHARP_){
return ((0) < ((p1__4589_SHARP_.offsetTop - scroll_y) - (- (inner_height / (2)))));
});})(scroll_y,prev_section,inner_height))
,sections)).id;
var G__4591_4593 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroll_DASH_is_DASH_at_DASH_beginning,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),scroll_y)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__4591_4593) : re_frame.core.dispatch.call(null,G__4591_4593));

if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(prev_section),current_section))){
var G__4592 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_current_DASH_section,current_section], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__4592) : re_frame.core.dispatch.call(null,G__4592));
} else {
return null;
}
});
clojure_cv.views.core.on_resize = (function clojure_cv$views$core$on_resize(){
var menu_open = (function (){var G__4594 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$menu_DASH_open], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__4594) : re_frame.core.subscribe.call(null,G__4594));
})();
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.deref(menu_open);
if(cljs.core.truth_(and__3911__auto__)){
return ((1080) < window.innerWidth);
} else {
return and__3911__auto__;
}
})())){
var G__4595 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$toggle_DASH_menu], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__4595) : re_frame.core.dispatch.call(null,G__4595));
} else {
return null;
}
});
clojure_cv.views.core.main_page = (function clojure_cv$views$core$main_page(){
var menu_open = (function (){var G__4596 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$menu_DASH_open], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__4596) : re_frame.core.subscribe.call(null,G__4596));
})();
var current_section = (function (){var G__4597 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_section], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__4597) : re_frame.core.subscribe.call(null,G__4597));
})();
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (menu_open,current_section){
return (function (){
if(cljs.core.truth_(cljs.core.deref(menu_open))){
var G__4598 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$toggle_DASH_menu], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__4598) : re_frame.core.dispatch.call(null,G__4598));
} else {
return null;
}
});})(menu_open,current_section))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$main_DASH_image,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$main_DASH_title,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text_DASH_align,"center",cljs.core.cst$kw$margin,(0)], null)], null),"Kasper Nurminen"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text_DASH_align,"center",cljs.core.cst$kw$padding_DASH_top,(0)], null)], null),"Software Developer"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.floating_action_button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mini,true,cljs.core.cst$kw$on_DASH_click,((function (menu_open,current_section){
return (function (){
var G__4599 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroll_DASH_into_DASH_view,"main"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__4599) : re_frame.core.dispatch.call(null,G__4599));
});})(menu_open,current_section))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.icons.hardware_keyboard_arrow_down], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_test,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$height,"100px",cljs.core.cst$kw$width,"120vw",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$bottom,"-200px",cljs.core.cst$kw$transform,"rotate(-2deg)"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.sections.about], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.sections.skills], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.sections.job_experience], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.sections.education], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.sections.portfolio], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.sections.contact], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.sections.copyright], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.floating_action_button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (menu_open,current_section){
return (function (){
var G__4600 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroll_DASH_into_DASH_view,"main"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__4600) : re_frame.core.dispatch.call(null,G__4600));
});})(menu_open,current_section))
,cljs.core.cst$kw$class_DASH_name,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(current_section),"main"))?"hidden top-button":"top-button")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.icons.hardware_keyboard_arrow_up,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"52px"], null)], null)], null)], null)], null);
});
clojure_cv.views.core.main_panel = (function clojure_cv$views$core$main_panel(page){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (){
var sections = document.getElementsByTagName("section");
window.addEventListener("resize",clojure_cv.views.core.on_resize);

return document.addEventListener("scroll",((function (sections){
return (function (){
return clojure_cv.views.core.on_scroll(Array.from(sections));
});})(sections))
);
}),cljs.core.cst$kw$component_DASH_will_DASH_unmount,(function (){
document.removeEventListener("scroll",clojure_cv.views.core.on_scroll);

return window.removeEventListener("resize",clojure_cv.views.core.on_resize);
}),cljs.core.cst$kw$reagent_DASH_render,(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.mui_theme_provider,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mui_DASH_theme,cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$palette,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$primary_DASH_1_DASH_color,"#4199ee",cljs.core.cst$kw$font_DASH_family,"'Lato', sans-serif"], null),cljs.core.cst$kw$icon_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"red"], null),cljs.core.cst$kw$h2,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_weight,"300"], null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.core.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null)], null)], null);
})], null));
});
