// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('cljs_react_material_ui.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
goog.require('sablono.util');
cljs_react_material_ui.core.transform_keys = (function cljs_react_material_ui$core$transform_keys(t,coll){

var transform = (function cljs_react_material_ui$core$transform_keys_$_transform(p__3682){
var vec__3683 = p__3682;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3683,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3683,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(k) : t.call(null,k)),v], null);
});
return clojure.walk.postwalk((function (x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(transform,x));
} else {
return x;
}
}),coll);
});
cljs_react_material_ui.core.props_kebab__GT_camel__GT_js = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.clj__GT_js,sablono.util.camel_case_keys);
cljs_react_material_ui.core.create_mui_cmp = (function cljs_react_material_ui$core$create_mui_cmp(var_args){
var G__3687 = arguments.length;
switch (G__3687) {
case 2:
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2 = (function (react_class,args){
var first_arg = cljs.core.first(args);
var args__$1 = ((((cljs.core.map_QMARK_(first_arg)) || ((first_arg == null))))?args:cljs.core.cons(cljs.core.PersistentArrayMap.EMPTY,args));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,react_class,(function (){var G__3688 = cljs.core.first(args__$1);
return (cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.cljs$core$IFn$_invoke$arity$1 ? cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.cljs$core$IFn$_invoke$arity$1(G__3688) : cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.call(null,G__3688));
})(),cljs.core.rest(args__$1));
});

cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$3 = (function (root_obj,type,args){
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2((root_obj[type]),args);
});

cljs_react_material_ui.core.create_mui_cmp.cljs$lang$maxFixedArity = 3;

cljs_react_material_ui.core.get_mui_theme = (function cljs_react_material_ui$core$get_mui_theme(var_args){
var G__3691 = arguments.length;
switch (G__3691) {
case 0:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1 = (function (raw_theme){
return MaterialUIStyles.getMuiTheme(cljs.core.clj__GT_js(cljs_react_material_ui.core.transform_keys(sablono.util.camel_case,raw_theme)));
});

cljs_react_material_ui.core.get_mui_theme.cljs$lang$maxFixedArity = 1;

cljs_react_material_ui.core.color = (function cljs_react_material_ui$core$color(color_key){
return (MaterialUIStyles["colors"][cljs.core.name(sablono.util.camel_case(color_key))]);
});
cljs_react_material_ui.core.make_selectable = (MaterialUI["makeSelectable"]);
cljs_react_material_ui.core.create_mui_el = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_react_material_ui.core.create_mui_cmp,MaterialUI);
cljs_react_material_ui.core.selectable_list = (function cljs_react_material_ui$core$selectable_list(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3695 = arguments.length;
var i__4500__auto___3696 = (0);
while(true){
if((i__4500__auto___3696 < len__4499__auto___3695)){
args__4502__auto__.push((arguments[i__4500__auto___3696]));

var G__3697 = (i__4500__auto___3696 + (1));
i__4500__auto___3696 = G__3697;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2((function (){var G__3694 = (MaterialUI["List"]);
return (cljs_react_material_ui.core.make_selectable.cljs$core$IFn$_invoke$arity$1 ? cljs_react_material_ui.core.make_selectable.cljs$core$IFn$_invoke$arity$1(G__3694) : cljs_react_material_ui.core.make_selectable.call(null,G__3694));
})(),args);
});

cljs_react_material_ui.core.selectable_list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.selectable_list.cljs$lang$applyTo = (function (seq3693){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3693));
});

cljs_react_material_ui.core.app_bar = (function cljs_react_material_ui$core$app_bar(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3699 = arguments.length;
var i__4500__auto___3700 = (0);
while(true){
if((i__4500__auto___3700 < len__4499__auto___3699)){
args__4502__auto__.push((arguments[i__4500__auto___3700]));

var G__3701 = (i__4500__auto___3700 + (1));
i__4500__auto___3700 = G__3701;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("AppBar",args) : cljs_react_material_ui.core.create_mui_el.call(null,"AppBar",args));
});

cljs_react_material_ui.core.app_bar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.app_bar.cljs$lang$applyTo = (function (seq3698){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3698));
});

cljs_react_material_ui.core.auto_complete = (function cljs_react_material_ui$core$auto_complete(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3703 = arguments.length;
var i__4500__auto___3704 = (0);
while(true){
if((i__4500__auto___3704 < len__4499__auto___3703)){
args__4502__auto__.push((arguments[i__4500__auto___3704]));

var G__3705 = (i__4500__auto___3704 + (1));
i__4500__auto___3704 = G__3705;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("AutoComplete",args) : cljs_react_material_ui.core.create_mui_el.call(null,"AutoComplete",args));
});

cljs_react_material_ui.core.auto_complete.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.auto_complete.cljs$lang$applyTo = (function (seq3702){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3702));
});

cljs_react_material_ui.core.avatar = (function cljs_react_material_ui$core$avatar(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3707 = arguments.length;
var i__4500__auto___3708 = (0);
while(true){
if((i__4500__auto___3708 < len__4499__auto___3707)){
args__4502__auto__.push((arguments[i__4500__auto___3708]));

var G__3709 = (i__4500__auto___3708 + (1));
i__4500__auto___3708 = G__3709;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Avatar",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Avatar",args));
});

cljs_react_material_ui.core.avatar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.avatar.cljs$lang$applyTo = (function (seq3706){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3706));
});

cljs_react_material_ui.core.badge = (function cljs_react_material_ui$core$badge(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3711 = arguments.length;
var i__4500__auto___3712 = (0);
while(true){
if((i__4500__auto___3712 < len__4499__auto___3711)){
args__4502__auto__.push((arguments[i__4500__auto___3712]));

var G__3713 = (i__4500__auto___3712 + (1));
i__4500__auto___3712 = G__3713;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Badge",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Badge",args));
});

cljs_react_material_ui.core.badge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.badge.cljs$lang$applyTo = (function (seq3710){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3710));
});

cljs_react_material_ui.core.bottom_navigation = (function cljs_react_material_ui$core$bottom_navigation(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3715 = arguments.length;
var i__4500__auto___3716 = (0);
while(true){
if((i__4500__auto___3716 < len__4499__auto___3715)){
args__4502__auto__.push((arguments[i__4500__auto___3716]));

var G__3717 = (i__4500__auto___3716 + (1));
i__4500__auto___3716 = G__3717;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("BottomNavigation",args) : cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigation",args));
});

cljs_react_material_ui.core.bottom_navigation.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.bottom_navigation.cljs$lang$applyTo = (function (seq3714){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3714));
});

cljs_react_material_ui.core.bottom_navigation_item = (function cljs_react_material_ui$core$bottom_navigation_item(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3719 = arguments.length;
var i__4500__auto___3720 = (0);
while(true){
if((i__4500__auto___3720 < len__4499__auto___3719)){
args__4502__auto__.push((arguments[i__4500__auto___3720]));

var G__3721 = (i__4500__auto___3720 + (1));
i__4500__auto___3720 = G__3721;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("BottomNavigationItem",args) : cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigationItem",args));
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$applyTo = (function (seq3718){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3718));
});

cljs_react_material_ui.core.card = (function cljs_react_material_ui$core$card(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3723 = arguments.length;
var i__4500__auto___3724 = (0);
while(true){
if((i__4500__auto___3724 < len__4499__auto___3723)){
args__4502__auto__.push((arguments[i__4500__auto___3724]));

var G__3725 = (i__4500__auto___3724 + (1));
i__4500__auto___3724 = G__3725;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Card",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Card",args));
});

cljs_react_material_ui.core.card.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.card.cljs$lang$applyTo = (function (seq3722){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3722));
});

cljs_react_material_ui.core.card_actions = (function cljs_react_material_ui$core$card_actions(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3727 = arguments.length;
var i__4500__auto___3728 = (0);
while(true){
if((i__4500__auto___3728 < len__4499__auto___3727)){
args__4502__auto__.push((arguments[i__4500__auto___3728]));

var G__3729 = (i__4500__auto___3728 + (1));
i__4500__auto___3728 = G__3729;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("CardActions",args) : cljs_react_material_ui.core.create_mui_el.call(null,"CardActions",args));
});

cljs_react_material_ui.core.card_actions.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.card_actions.cljs$lang$applyTo = (function (seq3726){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3726));
});

cljs_react_material_ui.core.card_header = (function cljs_react_material_ui$core$card_header(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3731 = arguments.length;
var i__4500__auto___3732 = (0);
while(true){
if((i__4500__auto___3732 < len__4499__auto___3731)){
args__4502__auto__.push((arguments[i__4500__auto___3732]));

var G__3733 = (i__4500__auto___3732 + (1));
i__4500__auto___3732 = G__3733;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("CardHeader",args) : cljs_react_material_ui.core.create_mui_el.call(null,"CardHeader",args));
});

cljs_react_material_ui.core.card_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.card_header.cljs$lang$applyTo = (function (seq3730){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3730));
});

cljs_react_material_ui.core.card_media = (function cljs_react_material_ui$core$card_media(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3735 = arguments.length;
var i__4500__auto___3736 = (0);
while(true){
if((i__4500__auto___3736 < len__4499__auto___3735)){
args__4502__auto__.push((arguments[i__4500__auto___3736]));

var G__3737 = (i__4500__auto___3736 + (1));
i__4500__auto___3736 = G__3737;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("CardMedia",args) : cljs_react_material_ui.core.create_mui_el.call(null,"CardMedia",args));
});

cljs_react_material_ui.core.card_media.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.card_media.cljs$lang$applyTo = (function (seq3734){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3734));
});

cljs_react_material_ui.core.card_title = (function cljs_react_material_ui$core$card_title(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3739 = arguments.length;
var i__4500__auto___3740 = (0);
while(true){
if((i__4500__auto___3740 < len__4499__auto___3739)){
args__4502__auto__.push((arguments[i__4500__auto___3740]));

var G__3741 = (i__4500__auto___3740 + (1));
i__4500__auto___3740 = G__3741;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("CardTitle",args) : cljs_react_material_ui.core.create_mui_el.call(null,"CardTitle",args));
});

cljs_react_material_ui.core.card_title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.card_title.cljs$lang$applyTo = (function (seq3738){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3738));
});

cljs_react_material_ui.core.card_text = (function cljs_react_material_ui$core$card_text(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3743 = arguments.length;
var i__4500__auto___3744 = (0);
while(true){
if((i__4500__auto___3744 < len__4499__auto___3743)){
args__4502__auto__.push((arguments[i__4500__auto___3744]));

var G__3745 = (i__4500__auto___3744 + (1));
i__4500__auto___3744 = G__3745;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("CardText",args) : cljs_react_material_ui.core.create_mui_el.call(null,"CardText",args));
});

cljs_react_material_ui.core.card_text.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.card_text.cljs$lang$applyTo = (function (seq3742){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3742));
});

cljs_react_material_ui.core.checkbox = (function cljs_react_material_ui$core$checkbox(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3747 = arguments.length;
var i__4500__auto___3748 = (0);
while(true){
if((i__4500__auto___3748 < len__4499__auto___3747)){
args__4502__auto__.push((arguments[i__4500__auto___3748]));

var G__3749 = (i__4500__auto___3748 + (1));
i__4500__auto___3748 = G__3749;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Checkbox",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Checkbox",args));
});

cljs_react_material_ui.core.checkbox.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.checkbox.cljs$lang$applyTo = (function (seq3746){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3746));
});

cljs_react_material_ui.core.chip = (function cljs_react_material_ui$core$chip(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3751 = arguments.length;
var i__4500__auto___3752 = (0);
while(true){
if((i__4500__auto___3752 < len__4499__auto___3751)){
args__4502__auto__.push((arguments[i__4500__auto___3752]));

var G__3753 = (i__4500__auto___3752 + (1));
i__4500__auto___3752 = G__3753;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Chip",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Chip",args));
});

cljs_react_material_ui.core.chip.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.chip.cljs$lang$applyTo = (function (seq3750){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3750));
});

cljs_react_material_ui.core.circular_progress = (function cljs_react_material_ui$core$circular_progress(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3755 = arguments.length;
var i__4500__auto___3756 = (0);
while(true){
if((i__4500__auto___3756 < len__4499__auto___3755)){
args__4502__auto__.push((arguments[i__4500__auto___3756]));

var G__3757 = (i__4500__auto___3756 + (1));
i__4500__auto___3756 = G__3757;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("CircularProgress",args) : cljs_react_material_ui.core.create_mui_el.call(null,"CircularProgress",args));
});

cljs_react_material_ui.core.circular_progress.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.circular_progress.cljs$lang$applyTo = (function (seq3754){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3754));
});

cljs_react_material_ui.core.date_picker = (function cljs_react_material_ui$core$date_picker(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3759 = arguments.length;
var i__4500__auto___3760 = (0);
while(true){
if((i__4500__auto___3760 < len__4499__auto___3759)){
args__4502__auto__.push((arguments[i__4500__auto___3760]));

var G__3761 = (i__4500__auto___3760 + (1));
i__4500__auto___3760 = G__3761;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("DatePicker",args) : cljs_react_material_ui.core.create_mui_el.call(null,"DatePicker",args));
});

cljs_react_material_ui.core.date_picker.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.date_picker.cljs$lang$applyTo = (function (seq3758){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3758));
});

cljs_react_material_ui.core.dialog = (function cljs_react_material_ui$core$dialog(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3763 = arguments.length;
var i__4500__auto___3764 = (0);
while(true){
if((i__4500__auto___3764 < len__4499__auto___3763)){
args__4502__auto__.push((arguments[i__4500__auto___3764]));

var G__3765 = (i__4500__auto___3764 + (1));
i__4500__auto___3764 = G__3765;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Dialog",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Dialog",args));
});

cljs_react_material_ui.core.dialog.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.dialog.cljs$lang$applyTo = (function (seq3762){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3762));
});

cljs_react_material_ui.core.divider = (function cljs_react_material_ui$core$divider(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3767 = arguments.length;
var i__4500__auto___3768 = (0);
while(true){
if((i__4500__auto___3768 < len__4499__auto___3767)){
args__4502__auto__.push((arguments[i__4500__auto___3768]));

var G__3769 = (i__4500__auto___3768 + (1));
i__4500__auto___3768 = G__3769;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Divider",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Divider",args));
});

cljs_react_material_ui.core.divider.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.divider.cljs$lang$applyTo = (function (seq3766){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3766));
});

cljs_react_material_ui.core.drawer = (function cljs_react_material_ui$core$drawer(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3771 = arguments.length;
var i__4500__auto___3772 = (0);
while(true){
if((i__4500__auto___3772 < len__4499__auto___3771)){
args__4502__auto__.push((arguments[i__4500__auto___3772]));

var G__3773 = (i__4500__auto___3772 + (1));
i__4500__auto___3772 = G__3773;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Drawer",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Drawer",args));
});

cljs_react_material_ui.core.drawer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.drawer.cljs$lang$applyTo = (function (seq3770){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3770));
});

cljs_react_material_ui.core.drop_down_menu = (function cljs_react_material_ui$core$drop_down_menu(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3775 = arguments.length;
var i__4500__auto___3776 = (0);
while(true){
if((i__4500__auto___3776 < len__4499__auto___3775)){
args__4502__auto__.push((arguments[i__4500__auto___3776]));

var G__3777 = (i__4500__auto___3776 + (1));
i__4500__auto___3776 = G__3777;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("DropDownMenu",args) : cljs_react_material_ui.core.create_mui_el.call(null,"DropDownMenu",args));
});

cljs_react_material_ui.core.drop_down_menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.drop_down_menu.cljs$lang$applyTo = (function (seq3774){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3774));
});

cljs_react_material_ui.core.flat_button = (function cljs_react_material_ui$core$flat_button(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3779 = arguments.length;
var i__4500__auto___3780 = (0);
while(true){
if((i__4500__auto___3780 < len__4499__auto___3779)){
args__4502__auto__.push((arguments[i__4500__auto___3780]));

var G__3781 = (i__4500__auto___3780 + (1));
i__4500__auto___3780 = G__3781;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("FlatButton",args) : cljs_react_material_ui.core.create_mui_el.call(null,"FlatButton",args));
});

cljs_react_material_ui.core.flat_button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.flat_button.cljs$lang$applyTo = (function (seq3778){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3778));
});

cljs_react_material_ui.core.floating_action_button = (function cljs_react_material_ui$core$floating_action_button(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3783 = arguments.length;
var i__4500__auto___3784 = (0);
while(true){
if((i__4500__auto___3784 < len__4499__auto___3783)){
args__4502__auto__.push((arguments[i__4500__auto___3784]));

var G__3785 = (i__4500__auto___3784 + (1));
i__4500__auto___3784 = G__3785;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("FloatingActionButton",args) : cljs_react_material_ui.core.create_mui_el.call(null,"FloatingActionButton",args));
});

cljs_react_material_ui.core.floating_action_button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.floating_action_button.cljs$lang$applyTo = (function (seq3782){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3782));
});

cljs_react_material_ui.core.font_icon = (function cljs_react_material_ui$core$font_icon(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3787 = arguments.length;
var i__4500__auto___3788 = (0);
while(true){
if((i__4500__auto___3788 < len__4499__auto___3787)){
args__4502__auto__.push((arguments[i__4500__auto___3788]));

var G__3789 = (i__4500__auto___3788 + (1));
i__4500__auto___3788 = G__3789;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("FontIcon",args) : cljs_react_material_ui.core.create_mui_el.call(null,"FontIcon",args));
});

cljs_react_material_ui.core.font_icon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.font_icon.cljs$lang$applyTo = (function (seq3786){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3786));
});

cljs_react_material_ui.core.grid_list = (function cljs_react_material_ui$core$grid_list(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3791 = arguments.length;
var i__4500__auto___3792 = (0);
while(true){
if((i__4500__auto___3792 < len__4499__auto___3791)){
args__4502__auto__.push((arguments[i__4500__auto___3792]));

var G__3793 = (i__4500__auto___3792 + (1));
i__4500__auto___3792 = G__3793;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("GridList",args) : cljs_react_material_ui.core.create_mui_el.call(null,"GridList",args));
});

cljs_react_material_ui.core.grid_list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.grid_list.cljs$lang$applyTo = (function (seq3790){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3790));
});

cljs_react_material_ui.core.grid_tile = (function cljs_react_material_ui$core$grid_tile(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3795 = arguments.length;
var i__4500__auto___3796 = (0);
while(true){
if((i__4500__auto___3796 < len__4499__auto___3795)){
args__4502__auto__.push((arguments[i__4500__auto___3796]));

var G__3797 = (i__4500__auto___3796 + (1));
i__4500__auto___3796 = G__3797;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("GridTile",args) : cljs_react_material_ui.core.create_mui_el.call(null,"GridTile",args));
});

cljs_react_material_ui.core.grid_tile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.grid_tile.cljs$lang$applyTo = (function (seq3794){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3794));
});

cljs_react_material_ui.core.icon_button = (function cljs_react_material_ui$core$icon_button(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3799 = arguments.length;
var i__4500__auto___3800 = (0);
while(true){
if((i__4500__auto___3800 < len__4499__auto___3799)){
args__4502__auto__.push((arguments[i__4500__auto___3800]));

var G__3801 = (i__4500__auto___3800 + (1));
i__4500__auto___3800 = G__3801;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("IconButton",args) : cljs_react_material_ui.core.create_mui_el.call(null,"IconButton",args));
});

cljs_react_material_ui.core.icon_button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.icon_button.cljs$lang$applyTo = (function (seq3798){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3798));
});

cljs_react_material_ui.core.icon_menu = (function cljs_react_material_ui$core$icon_menu(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3803 = arguments.length;
var i__4500__auto___3804 = (0);
while(true){
if((i__4500__auto___3804 < len__4499__auto___3803)){
args__4502__auto__.push((arguments[i__4500__auto___3804]));

var G__3805 = (i__4500__auto___3804 + (1));
i__4500__auto___3804 = G__3805;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("IconMenu",args) : cljs_react_material_ui.core.create_mui_el.call(null,"IconMenu",args));
});

cljs_react_material_ui.core.icon_menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.icon_menu.cljs$lang$applyTo = (function (seq3802){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3802));
});

cljs_react_material_ui.core.linear_progress = (function cljs_react_material_ui$core$linear_progress(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3807 = arguments.length;
var i__4500__auto___3808 = (0);
while(true){
if((i__4500__auto___3808 < len__4499__auto___3807)){
args__4502__auto__.push((arguments[i__4500__auto___3808]));

var G__3809 = (i__4500__auto___3808 + (1));
i__4500__auto___3808 = G__3809;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("LinearProgress",args) : cljs_react_material_ui.core.create_mui_el.call(null,"LinearProgress",args));
});

cljs_react_material_ui.core.linear_progress.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.linear_progress.cljs$lang$applyTo = (function (seq3806){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3806));
});

cljs_react_material_ui.core.list = (function cljs_react_material_ui$core$list(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3811 = arguments.length;
var i__4500__auto___3812 = (0);
while(true){
if((i__4500__auto___3812 < len__4499__auto___3811)){
args__4502__auto__.push((arguments[i__4500__auto___3812]));

var G__3813 = (i__4500__auto___3812 + (1));
i__4500__auto___3812 = G__3813;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("List",args) : cljs_react_material_ui.core.create_mui_el.call(null,"List",args));
});

cljs_react_material_ui.core.list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.list.cljs$lang$applyTo = (function (seq3810){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3810));
});

cljs_react_material_ui.core.list_item = (function cljs_react_material_ui$core$list_item(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3815 = arguments.length;
var i__4500__auto___3816 = (0);
while(true){
if((i__4500__auto___3816 < len__4499__auto___3815)){
args__4502__auto__.push((arguments[i__4500__auto___3816]));

var G__3817 = (i__4500__auto___3816 + (1));
i__4500__auto___3816 = G__3817;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("ListItem",args) : cljs_react_material_ui.core.create_mui_el.call(null,"ListItem",args));
});

cljs_react_material_ui.core.list_item.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.list_item.cljs$lang$applyTo = (function (seq3814){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3814));
});

cljs_react_material_ui.core.menu = (function cljs_react_material_ui$core$menu(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3819 = arguments.length;
var i__4500__auto___3820 = (0);
while(true){
if((i__4500__auto___3820 < len__4499__auto___3819)){
args__4502__auto__.push((arguments[i__4500__auto___3820]));

var G__3821 = (i__4500__auto___3820 + (1));
i__4500__auto___3820 = G__3821;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Menu",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Menu",args));
});

cljs_react_material_ui.core.menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.menu.cljs$lang$applyTo = (function (seq3818){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3818));
});

cljs_react_material_ui.core.menu_item = (function cljs_react_material_ui$core$menu_item(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3823 = arguments.length;
var i__4500__auto___3824 = (0);
while(true){
if((i__4500__auto___3824 < len__4499__auto___3823)){
args__4502__auto__.push((arguments[i__4500__auto___3824]));

var G__3825 = (i__4500__auto___3824 + (1));
i__4500__auto___3824 = G__3825;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("MenuItem",args) : cljs_react_material_ui.core.create_mui_el.call(null,"MenuItem",args));
});

cljs_react_material_ui.core.menu_item.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.menu_item.cljs$lang$applyTo = (function (seq3822){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3822));
});

cljs_react_material_ui.core.mui_theme_provider = (function cljs_react_material_ui$core$mui_theme_provider(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3827 = arguments.length;
var i__4500__auto___3828 = (0);
while(true){
if((i__4500__auto___3828 < len__4499__auto___3827)){
args__4502__auto__.push((arguments[i__4500__auto___3828]));

var G__3829 = (i__4500__auto___3828 + (1));
i__4500__auto___3828 = G__3829;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("MuiThemeProvider",args) : cljs_react_material_ui.core.create_mui_el.call(null,"MuiThemeProvider",args));
});

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.mui_theme_provider.cljs$lang$applyTo = (function (seq3826){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3826));
});

cljs_react_material_ui.core.paper = (function cljs_react_material_ui$core$paper(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3831 = arguments.length;
var i__4500__auto___3832 = (0);
while(true){
if((i__4500__auto___3832 < len__4499__auto___3831)){
args__4502__auto__.push((arguments[i__4500__auto___3832]));

var G__3833 = (i__4500__auto___3832 + (1));
i__4500__auto___3832 = G__3833;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Paper",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Paper",args));
});

cljs_react_material_ui.core.paper.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.paper.cljs$lang$applyTo = (function (seq3830){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3830));
});

cljs_react_material_ui.core.popover = (function cljs_react_material_ui$core$popover(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3835 = arguments.length;
var i__4500__auto___3836 = (0);
while(true){
if((i__4500__auto___3836 < len__4499__auto___3835)){
args__4502__auto__.push((arguments[i__4500__auto___3836]));

var G__3837 = (i__4500__auto___3836 + (1));
i__4500__auto___3836 = G__3837;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Popover",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Popover",args));
});

cljs_react_material_ui.core.popover.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.popover.cljs$lang$applyTo = (function (seq3834){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3834));
});

cljs_react_material_ui.core.radio_button = (function cljs_react_material_ui$core$radio_button(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3839 = arguments.length;
var i__4500__auto___3840 = (0);
while(true){
if((i__4500__auto___3840 < len__4499__auto___3839)){
args__4502__auto__.push((arguments[i__4500__auto___3840]));

var G__3841 = (i__4500__auto___3840 + (1));
i__4500__auto___3840 = G__3841;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("RadioButton",args) : cljs_react_material_ui.core.create_mui_el.call(null,"RadioButton",args));
});

cljs_react_material_ui.core.radio_button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.radio_button.cljs$lang$applyTo = (function (seq3838){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3838));
});

cljs_react_material_ui.core.radio_button_group = (function cljs_react_material_ui$core$radio_button_group(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3843 = arguments.length;
var i__4500__auto___3844 = (0);
while(true){
if((i__4500__auto___3844 < len__4499__auto___3843)){
args__4502__auto__.push((arguments[i__4500__auto___3844]));

var G__3845 = (i__4500__auto___3844 + (1));
i__4500__auto___3844 = G__3845;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("RadioButtonGroup",args) : cljs_react_material_ui.core.create_mui_el.call(null,"RadioButtonGroup",args));
});

cljs_react_material_ui.core.radio_button_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.radio_button_group.cljs$lang$applyTo = (function (seq3842){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3842));
});

cljs_react_material_ui.core.raised_button = (function cljs_react_material_ui$core$raised_button(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3847 = arguments.length;
var i__4500__auto___3848 = (0);
while(true){
if((i__4500__auto___3848 < len__4499__auto___3847)){
args__4502__auto__.push((arguments[i__4500__auto___3848]));

var G__3849 = (i__4500__auto___3848 + (1));
i__4500__auto___3848 = G__3849;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("RaisedButton",args) : cljs_react_material_ui.core.create_mui_el.call(null,"RaisedButton",args));
});

cljs_react_material_ui.core.raised_button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.raised_button.cljs$lang$applyTo = (function (seq3846){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3846));
});

cljs_react_material_ui.core.refresh_indicator = (function cljs_react_material_ui$core$refresh_indicator(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3851 = arguments.length;
var i__4500__auto___3852 = (0);
while(true){
if((i__4500__auto___3852 < len__4499__auto___3851)){
args__4502__auto__.push((arguments[i__4500__auto___3852]));

var G__3853 = (i__4500__auto___3852 + (1));
i__4500__auto___3852 = G__3853;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("RefreshIndicator",args) : cljs_react_material_ui.core.create_mui_el.call(null,"RefreshIndicator",args));
});

cljs_react_material_ui.core.refresh_indicator.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.refresh_indicator.cljs$lang$applyTo = (function (seq3850){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3850));
});

cljs_react_material_ui.core.select_field = (function cljs_react_material_ui$core$select_field(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3855 = arguments.length;
var i__4500__auto___3856 = (0);
while(true){
if((i__4500__auto___3856 < len__4499__auto___3855)){
args__4502__auto__.push((arguments[i__4500__auto___3856]));

var G__3857 = (i__4500__auto___3856 + (1));
i__4500__auto___3856 = G__3857;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("SelectField",args) : cljs_react_material_ui.core.create_mui_el.call(null,"SelectField",args));
});

cljs_react_material_ui.core.select_field.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.select_field.cljs$lang$applyTo = (function (seq3854){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3854));
});

cljs_react_material_ui.core.slider = (function cljs_react_material_ui$core$slider(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3859 = arguments.length;
var i__4500__auto___3860 = (0);
while(true){
if((i__4500__auto___3860 < len__4499__auto___3859)){
args__4502__auto__.push((arguments[i__4500__auto___3860]));

var G__3861 = (i__4500__auto___3860 + (1));
i__4500__auto___3860 = G__3861;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Slider",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Slider",args));
});

cljs_react_material_ui.core.slider.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.slider.cljs$lang$applyTo = (function (seq3858){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3858));
});

cljs_react_material_ui.core.subheader = (function cljs_react_material_ui$core$subheader(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3863 = arguments.length;
var i__4500__auto___3864 = (0);
while(true){
if((i__4500__auto___3864 < len__4499__auto___3863)){
args__4502__auto__.push((arguments[i__4500__auto___3864]));

var G__3865 = (i__4500__auto___3864 + (1));
i__4500__auto___3864 = G__3865;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Subheader",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Subheader",args));
});

cljs_react_material_ui.core.subheader.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.subheader.cljs$lang$applyTo = (function (seq3862){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3862));
});

cljs_react_material_ui.core.svg_icon = (function cljs_react_material_ui$core$svg_icon(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3867 = arguments.length;
var i__4500__auto___3868 = (0);
while(true){
if((i__4500__auto___3868 < len__4499__auto___3867)){
args__4502__auto__.push((arguments[i__4500__auto___3868]));

var G__3869 = (i__4500__auto___3868 + (1));
i__4500__auto___3868 = G__3869;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("SvgIcon",args) : cljs_react_material_ui.core.create_mui_el.call(null,"SvgIcon",args));
});

cljs_react_material_ui.core.svg_icon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.svg_icon.cljs$lang$applyTo = (function (seq3866){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3866));
});

cljs_react_material_ui.core.step = (function cljs_react_material_ui$core$step(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3871 = arguments.length;
var i__4500__auto___3872 = (0);
while(true){
if((i__4500__auto___3872 < len__4499__auto___3871)){
args__4502__auto__.push((arguments[i__4500__auto___3872]));

var G__3873 = (i__4500__auto___3872 + (1));
i__4500__auto___3872 = G__3873;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Step",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Step",args));
});

cljs_react_material_ui.core.step.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.step.cljs$lang$applyTo = (function (seq3870){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3870));
});

cljs_react_material_ui.core.step_button = (function cljs_react_material_ui$core$step_button(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3875 = arguments.length;
var i__4500__auto___3876 = (0);
while(true){
if((i__4500__auto___3876 < len__4499__auto___3875)){
args__4502__auto__.push((arguments[i__4500__auto___3876]));

var G__3877 = (i__4500__auto___3876 + (1));
i__4500__auto___3876 = G__3877;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("StepButton",args) : cljs_react_material_ui.core.create_mui_el.call(null,"StepButton",args));
});

cljs_react_material_ui.core.step_button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.step_button.cljs$lang$applyTo = (function (seq3874){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3874));
});

cljs_react_material_ui.core.step_content = (function cljs_react_material_ui$core$step_content(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3879 = arguments.length;
var i__4500__auto___3880 = (0);
while(true){
if((i__4500__auto___3880 < len__4499__auto___3879)){
args__4502__auto__.push((arguments[i__4500__auto___3880]));

var G__3881 = (i__4500__auto___3880 + (1));
i__4500__auto___3880 = G__3881;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("StepContent",args) : cljs_react_material_ui.core.create_mui_el.call(null,"StepContent",args));
});

cljs_react_material_ui.core.step_content.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.step_content.cljs$lang$applyTo = (function (seq3878){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3878));
});

cljs_react_material_ui.core.step_label = (function cljs_react_material_ui$core$step_label(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3883 = arguments.length;
var i__4500__auto___3884 = (0);
while(true){
if((i__4500__auto___3884 < len__4499__auto___3883)){
args__4502__auto__.push((arguments[i__4500__auto___3884]));

var G__3885 = (i__4500__auto___3884 + (1));
i__4500__auto___3884 = G__3885;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("StepLabel",args) : cljs_react_material_ui.core.create_mui_el.call(null,"StepLabel",args));
});

cljs_react_material_ui.core.step_label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.step_label.cljs$lang$applyTo = (function (seq3882){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3882));
});

cljs_react_material_ui.core.stepper = (function cljs_react_material_ui$core$stepper(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3887 = arguments.length;
var i__4500__auto___3888 = (0);
while(true){
if((i__4500__auto___3888 < len__4499__auto___3887)){
args__4502__auto__.push((arguments[i__4500__auto___3888]));

var G__3889 = (i__4500__auto___3888 + (1));
i__4500__auto___3888 = G__3889;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Stepper",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Stepper",args));
});

cljs_react_material_ui.core.stepper.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.stepper.cljs$lang$applyTo = (function (seq3886){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3886));
});

cljs_react_material_ui.core.snackbar = (function cljs_react_material_ui$core$snackbar(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3891 = arguments.length;
var i__4500__auto___3892 = (0);
while(true){
if((i__4500__auto___3892 < len__4499__auto___3891)){
args__4502__auto__.push((arguments[i__4500__auto___3892]));

var G__3893 = (i__4500__auto___3892 + (1));
i__4500__auto___3892 = G__3893;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Snackbar",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Snackbar",args));
});

cljs_react_material_ui.core.snackbar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.snackbar.cljs$lang$applyTo = (function (seq3890){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3890));
});

cljs_react_material_ui.core.tabs = (function cljs_react_material_ui$core$tabs(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3895 = arguments.length;
var i__4500__auto___3896 = (0);
while(true){
if((i__4500__auto___3896 < len__4499__auto___3895)){
args__4502__auto__.push((arguments[i__4500__auto___3896]));

var G__3897 = (i__4500__auto___3896 + (1));
i__4500__auto___3896 = G__3897;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Tabs",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Tabs",args));
});

cljs_react_material_ui.core.tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.tabs.cljs$lang$applyTo = (function (seq3894){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3894));
});

cljs_react_material_ui.core.tab = (function cljs_react_material_ui$core$tab(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3899 = arguments.length;
var i__4500__auto___3900 = (0);
while(true){
if((i__4500__auto___3900 < len__4499__auto___3899)){
args__4502__auto__.push((arguments[i__4500__auto___3900]));

var G__3901 = (i__4500__auto___3900 + (1));
i__4500__auto___3900 = G__3901;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Tab",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Tab",args));
});

cljs_react_material_ui.core.tab.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.tab.cljs$lang$applyTo = (function (seq3898){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3898));
});

cljs_react_material_ui.core.table = (function cljs_react_material_ui$core$table(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3903 = arguments.length;
var i__4500__auto___3904 = (0);
while(true){
if((i__4500__auto___3904 < len__4499__auto___3903)){
args__4502__auto__.push((arguments[i__4500__auto___3904]));

var G__3905 = (i__4500__auto___3904 + (1));
i__4500__auto___3904 = G__3905;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Table",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Table",args));
});

cljs_react_material_ui.core.table.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table.cljs$lang$applyTo = (function (seq3902){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3902));
});

cljs_react_material_ui.core.table_body = (function cljs_react_material_ui$core$table_body(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3907 = arguments.length;
var i__4500__auto___3908 = (0);
while(true){
if((i__4500__auto___3908 < len__4499__auto___3907)){
args__4502__auto__.push((arguments[i__4500__auto___3908]));

var G__3909 = (i__4500__auto___3908 + (1));
i__4500__auto___3908 = G__3909;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TableBody",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TableBody",args));
});

cljs_react_material_ui.core.table_body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_body.cljs$lang$applyTo = (function (seq3906){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3906));
});

cljs_react_material_ui.core.table_footer = (function cljs_react_material_ui$core$table_footer(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3911 = arguments.length;
var i__4500__auto___3912 = (0);
while(true){
if((i__4500__auto___3912 < len__4499__auto___3911)){
args__4502__auto__.push((arguments[i__4500__auto___3912]));

var G__3913 = (i__4500__auto___3912 + (1));
i__4500__auto___3912 = G__3913;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TableFooter",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TableFooter",args));
});

cljs_react_material_ui.core.table_footer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_footer.cljs$lang$applyTo = (function (seq3910){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3910));
});

cljs_react_material_ui.core.table_header = (function cljs_react_material_ui$core$table_header(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3915 = arguments.length;
var i__4500__auto___3916 = (0);
while(true){
if((i__4500__auto___3916 < len__4499__auto___3915)){
args__4502__auto__.push((arguments[i__4500__auto___3916]));

var G__3917 = (i__4500__auto___3916 + (1));
i__4500__auto___3916 = G__3917;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TableHeader",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TableHeader",args));
});

cljs_react_material_ui.core.table_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_header.cljs$lang$applyTo = (function (seq3914){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3914));
});

cljs_react_material_ui.core.table_header_column = (function cljs_react_material_ui$core$table_header_column(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3919 = arguments.length;
var i__4500__auto___3920 = (0);
while(true){
if((i__4500__auto___3920 < len__4499__auto___3919)){
args__4502__auto__.push((arguments[i__4500__auto___3920]));

var G__3921 = (i__4500__auto___3920 + (1));
i__4500__auto___3920 = G__3921;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TableHeaderColumn",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TableHeaderColumn",args));
});

cljs_react_material_ui.core.table_header_column.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_header_column.cljs$lang$applyTo = (function (seq3918){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3918));
});

cljs_react_material_ui.core.table_row = (function cljs_react_material_ui$core$table_row(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3923 = arguments.length;
var i__4500__auto___3924 = (0);
while(true){
if((i__4500__auto___3924 < len__4499__auto___3923)){
args__4502__auto__.push((arguments[i__4500__auto___3924]));

var G__3925 = (i__4500__auto___3924 + (1));
i__4500__auto___3924 = G__3925;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TableRow",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TableRow",args));
});

cljs_react_material_ui.core.table_row.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_row.cljs$lang$applyTo = (function (seq3922){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3922));
});

cljs_react_material_ui.core.table_row_column = (function cljs_react_material_ui$core$table_row_column(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3927 = arguments.length;
var i__4500__auto___3928 = (0);
while(true){
if((i__4500__auto___3928 < len__4499__auto___3927)){
args__4502__auto__.push((arguments[i__4500__auto___3928]));

var G__3929 = (i__4500__auto___3928 + (1));
i__4500__auto___3928 = G__3929;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TableRowColumn",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TableRowColumn",args));
});

cljs_react_material_ui.core.table_row_column.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_row_column.cljs$lang$applyTo = (function (seq3926){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3926));
});

cljs_react_material_ui.core.text_field = (function cljs_react_material_ui$core$text_field(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3931 = arguments.length;
var i__4500__auto___3932 = (0);
while(true){
if((i__4500__auto___3932 < len__4499__auto___3931)){
args__4502__auto__.push((arguments[i__4500__auto___3932]));

var G__3933 = (i__4500__auto___3932 + (1));
i__4500__auto___3932 = G__3933;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TextField",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TextField",args));
});

cljs_react_material_ui.core.text_field.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.text_field.cljs$lang$applyTo = (function (seq3930){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3930));
});

cljs_react_material_ui.core.time_picker = (function cljs_react_material_ui$core$time_picker(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3935 = arguments.length;
var i__4500__auto___3936 = (0);
while(true){
if((i__4500__auto___3936 < len__4499__auto___3935)){
args__4502__auto__.push((arguments[i__4500__auto___3936]));

var G__3937 = (i__4500__auto___3936 + (1));
i__4500__auto___3936 = G__3937;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TimePicker",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TimePicker",args));
});

cljs_react_material_ui.core.time_picker.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.time_picker.cljs$lang$applyTo = (function (seq3934){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3934));
});

cljs_react_material_ui.core.toggle = (function cljs_react_material_ui$core$toggle(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3939 = arguments.length;
var i__4500__auto___3940 = (0);
while(true){
if((i__4500__auto___3940 < len__4499__auto___3939)){
args__4502__auto__.push((arguments[i__4500__auto___3940]));

var G__3941 = (i__4500__auto___3940 + (1));
i__4500__auto___3940 = G__3941;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Toggle",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Toggle",args));
});

cljs_react_material_ui.core.toggle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.toggle.cljs$lang$applyTo = (function (seq3938){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3938));
});

cljs_react_material_ui.core.toolbar = (function cljs_react_material_ui$core$toolbar(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3943 = arguments.length;
var i__4500__auto___3944 = (0);
while(true){
if((i__4500__auto___3944 < len__4499__auto___3943)){
args__4502__auto__.push((arguments[i__4500__auto___3944]));

var G__3945 = (i__4500__auto___3944 + (1));
i__4500__auto___3944 = G__3945;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Toolbar",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Toolbar",args));
});

cljs_react_material_ui.core.toolbar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.toolbar.cljs$lang$applyTo = (function (seq3942){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3942));
});

cljs_react_material_ui.core.toolbar_group = (function cljs_react_material_ui$core$toolbar_group(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3947 = arguments.length;
var i__4500__auto___3948 = (0);
while(true){
if((i__4500__auto___3948 < len__4499__auto___3947)){
args__4502__auto__.push((arguments[i__4500__auto___3948]));

var G__3949 = (i__4500__auto___3948 + (1));
i__4500__auto___3948 = G__3949;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("ToolbarGroup",args) : cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarGroup",args));
});

cljs_react_material_ui.core.toolbar_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.toolbar_group.cljs$lang$applyTo = (function (seq3946){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3946));
});

cljs_react_material_ui.core.toolbar_separator = (function cljs_react_material_ui$core$toolbar_separator(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3951 = arguments.length;
var i__4500__auto___3952 = (0);
while(true){
if((i__4500__auto___3952 < len__4499__auto___3951)){
args__4502__auto__.push((arguments[i__4500__auto___3952]));

var G__3953 = (i__4500__auto___3952 + (1));
i__4500__auto___3952 = G__3953;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("ToolbarSeparator",args) : cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarSeparator",args));
});

cljs_react_material_ui.core.toolbar_separator.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.toolbar_separator.cljs$lang$applyTo = (function (seq3950){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3950));
});

cljs_react_material_ui.core.toolbar_title = (function cljs_react_material_ui$core$toolbar_title(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3955 = arguments.length;
var i__4500__auto___3956 = (0);
while(true){
if((i__4500__auto___3956 < len__4499__auto___3955)){
args__4502__auto__.push((arguments[i__4500__auto___3956]));

var G__3957 = (i__4500__auto___3956 + (1));
i__4500__auto___3956 = G__3957;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("ToolbarTitle",args) : cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarTitle",args));
});

cljs_react_material_ui.core.toolbar_title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.toolbar_title.cljs$lang$applyTo = (function (seq3954){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3954));
});

