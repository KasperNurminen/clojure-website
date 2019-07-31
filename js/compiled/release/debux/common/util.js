// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('debux.common.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.pprint');
goog.require('clojure.zip');
goog.require('clojure.walk');
goog.require('cljs.analyzer.api');
goog.require('cljs.repl');
goog.require('re_frame.trace');
debux.common.util.sequential_zip = (function debux$common$util$sequential_zip(root){
return clojure.zip.zipper(cljs.core.sequential_QMARK_,cljs.core.identity,(function (x,children){
if(cljs.core.vector_QMARK_(x)){
return cljs.core.vec(children);
} else {
return children;
}
}),root);
});
debux.common.util.right_or_next = (function debux$common$util$right_or_next(loc){
while(true){
var temp__4655__auto__ = clojure.zip.right(loc);
if(cljs.core.truth_(temp__4655__auto__)){
var right = temp__4655__auto__;
return right;
} else {
if(cljs.core.sequential_QMARK_(clojure.zip.node(loc))){
var rightmost = clojure.zip.rightmost(clojure.zip.down(loc));
if(cljs.core.sequential_QMARK_(clojure.zip.node(rightmost))){
var G__21345 = rightmost;
loc = G__21345;
continue;
} else {
return clojure.zip.next(rightmost);
}
} else {
return clojure.zip.next(loc);
}
}
break;
}
});
debux.common.util.auto_gensym_pattern = /(.*)__\d+__auto__/;
debux.common.util.anon_gensym_pattern = /G__\d+/;
debux.common.util.named_gensym_pattern = /(.*?)\d{4,}/;
debux.common.util.anon_param_pattern = /p(\d+)__\d+#/;
debux.common.util.form_tree_seq = (function debux$common$util$form_tree_seq(form){
return cljs.core.tree_seq(cljs.core.sequential_QMARK_,cljs.core.seq,form);
});
/**
 * Reverse gensym'd names to their original source form to make them easier to read.
 */
debux.common.util.with_gensyms_names = (function debux$common$util$with_gensyms_names(form,mapping){
var gen_name = (function (result,name){
if(!(cljs.core.contains_QMARK_(result,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"#"].join('')))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"#"].join('');
} else {
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21347_SHARP_){
return !(cljs.core.contains_QMARK_(result,p1__21347_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21346_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21346_SHARP_),"#"].join('');
}),cljs.core.iterate(cljs.core.inc,(2)))));
}
});
var name_for = ((function (gen_name){
return (function (result,sym_name){
var temp__4655__auto__ = cljs.core.re_matches(debux.common.util.auto_gensym_pattern,sym_name);
if(cljs.core.truth_(temp__4655__auto__)){
var groups = temp__4655__auto__;
return gen_name(result,cljs.core.second(groups));
} else {
if(cljs.core.truth_(cljs.core.re_matches(debux.common.util.anon_gensym_pattern,sym_name))){
return gen_name(result,"gensym");
} else {
var temp__4655__auto____$1 = cljs.core.re_matches(debux.common.util.named_gensym_pattern,sym_name);
if(cljs.core.truth_(temp__4655__auto____$1)){
var groups = temp__4655__auto____$1;
return gen_name(result,cljs.core.second(groups));
} else {
var temp__4655__auto____$2 = cljs.core.re_matches(debux.common.util.anon_param_pattern,sym_name);
if(cljs.core.truth_(temp__4655__auto____$2)){
var groups = temp__4655__auto____$2;
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(groups))].join('');
} else {
return null;
}
}
}
}
});})(gen_name))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (gen_name,name_for){
return (function (result,sym_name){
if(cljs.core.contains_QMARK_(result,sym_name)){
return result;
} else {
var temp__4655__auto__ = name_for(result,sym_name);
if(cljs.core.truth_(temp__4655__auto__)){
var new_name = temp__4655__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,sym_name,new_name);
} else {
return result;
}
}
});})(gen_name,name_for))
,mapping,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (gen_name,name_for){
return (function (p1__21348_SHARP_){
return (((p1__21348_SHARP_ instanceof cljs.core.Symbol)) && ((cljs.core.namespace(p1__21348_SHARP_) == null)));
});})(gen_name,name_for))
,debux.common.util.form_tree_seq(form))));
});
/**
 * Tidy up fully qualified names that have aliases in the existing namespace.
 */
debux.common.util.with_symbols_names = (function debux$common$util$with_symbols_names(form,p__21351,mapping){
var map__21352 = p__21351;
var map__21352__$1 = ((((!((map__21352 == null)))?(((((map__21352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21352):map__21352);
var state = map__21352__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21352__$1,cljs.core.cst$kw$context);
var refers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21352__$1,cljs.core.cst$kw$refers);
var aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21352__$1,cljs.core.cst$kw$aliases);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__21352,map__21352__$1,state,context,refers,aliases){
return (function (result,sym){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("clojure.core",cljs.core.namespace(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym], 0)),cljs.core.name(sym));
} else {
return result;
}
});})(map__21352,map__21352__$1,state,context,refers,aliases))
,mapping,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__21352,map__21352__$1,state,context,refers,aliases){
return (function (p1__21349_SHARP_){
var and__3911__auto__ = (p1__21349_SHARP_ instanceof cljs.core.Symbol);
if(and__3911__auto__){
return cljs.core.namespace(p1__21349_SHARP_);
} else {
return and__3911__auto__;
}
});})(map__21352,map__21352__$1,state,context,refers,aliases))
,debux.common.util.form_tree_seq(form)));
});
/**
 * Takes a macroexpanded form and tidies it up to be more readable by
 *   unmapping gensyms and replacing fully qualified namespaces with aliases
 *   or nothing if the function is referred.
 */
debux.common.util.tidy_macroexpanded_form = (function debux$common$util$tidy_macroexpanded_form(form,state){
var mapping = debux.common.util.with_symbols_names(form,state,debux.common.util.with_gensyms_names(form,cljs.core.PersistentArrayMap.EMPTY));
var loc = debux.common.util.sequential_zip(form);
while(true){
if(cljs.core.truth_(clojure.zip.end_QMARK_(loc))){
return clojure.zip.root(loc);
} else {
if((clojure.zip.node(loc) instanceof cljs.core.Symbol)){
var G__21354 = clojure.zip.next(clojure.zip.edit(loc,((function (loc,mapping){
return (function (sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(mapping,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym], 0)),sym));
});})(loc,mapping))
));
loc = G__21354;
continue;
} else {
var G__21355 = clojure.zip.next(loc);
loc = G__21355;
continue;
}
}
break;
}
});
debux.common.util.send_form_BANG_ = (function debux$common$util$send_form_BANG_(form){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__12207__auto___21356 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form,form], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form,form], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__12207__auto___21356;

return null;
} else {
return null;
}
});
debux.common.util.send_trace_BANG_ = (function debux$common$util$send_trace_BANG_(code_trace){
var code = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tags,cljs.core.cst$kw$code], null),cljs.core.PersistentVector.EMPTY);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__12207__auto___21357 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$code,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(code,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$form,debux.common.util.tidy_macroexpanded_form(cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(code_trace),cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$result,cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(code_trace),cljs.core.cst$kw$indent_DASH_level,cljs.core.cst$kw$indent_DASH_level.cljs$core$IFn$_invoke$arity$1(code_trace)], null))], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$code,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(code,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$form,debux.common.util.tidy_macroexpanded_form(cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(code_trace),cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$result,cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(code_trace),cljs.core.cst$kw$indent_DASH_level,cljs.core.cst$kw$indent_DASH_level.cljs$core$IFn$_invoke$arity$1(code_trace)], null))], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__12207__auto___21357;

return null;
} else {
return null;
}
});
var ret__4533__auto___21359 = /**
 * The internal macro to debug dbg macro.
 * <form any> a form to be evaluated
 */
debux.common.util.d = (function debux$common$util$d(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$return__21358__auto__,null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_println,null,(1),null)),(new cljs.core.List(null,">> dbg_:",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_pr_DASH_str,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"=>\n",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_pr_DASH_str,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$return__21358__auto__,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"<<",null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$return__21358__auto__,null,(1),null))], 0))));
});
debux.common.util.d.cljs$lang$macro = true;

debux.common.util.indent_level_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((1));
debux.common.util.reset_indent_level_BANG_ = (function debux$common$util$reset_indent_level_BANG_(){
return cljs.core.reset_BANG_(debux.common.util.indent_level_STAR_,(1));
});
debux.common.util.print_seq_length_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((100));
debux.common.util.set_print_seq_length_BANG_ = (function debux$common$util$set_print_seq_length_BANG_(num){
return cljs.core.reset_BANG_(debux.common.util.print_seq_length_STAR_,num);
});
var ret__4533__auto___21360 = debux.common.util.read_source = (function debux$common$util$read_source(_AMPERSAND_form,_AMPERSAND_env,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$repl_SLASH_source,null,(1),null)),(new cljs.core.List(null,sym,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_with_DASH_out_DASH_str,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$debux$common$util_SLASH_read_DASH_string,null,(1),null))], 0))));
});
debux.common.util.read_source.cljs$lang$macro = true;

debux.common.util.cljs_env_QMARK_ = (function debux$common$util$cljs_env_QMARK_(env){
return cljs.core.boolean$(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env));
});
debux.common.util.lazy_seq_QMARK_ = (function debux$common$util$lazy_seq_QMARK_(coll){
return (coll instanceof clojure.lang.IPending);
});
/**
 * Transsub-forms a vector into an array-map with key/value pairs.
 *   (def a 10)
 *   (def b 20)
 *   (vec-map [a b :c [30 40]])
 *   => {:a 10 :b 20 ::c :c :[30 40] [30 40]}
 */
debux.common.util.vec__GT_map = (function debux$common$util$vec__GT_map(v){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (elm){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(elm)].join('')),null,(1),null)),(new cljs.core.List(null,elm,null,(1),null))))));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
});
debux.common.util.replace__AMPERSAND_ = (function debux$common$util$replace__AMPERSAND_(v){
return clojure.walk.postwalk_replace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$_AMPERSAND_)], null),v);
});
debux.common.util.take_n_if_seq = (function debux$common$util$take_n_if_seq(n,result){
if(cljs.core.seq_QMARK_(result)){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__3922__auto__ = n;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.deref(debux.common.util.print_seq_length_STAR_);
}
})(),result);
} else {
return result;
}
});
debux.common.util.truncate = (function debux$common$util$truncate(s){
if((cljs.core.count(s) > (70))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s.substring((0),(70)))," ..."].join('');
} else {
return s;
}
});
debux.common.util.make_bars_ = (function debux$common$util$make_bars_(times){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(times,"|"));
});
debux.common.util.make_bars = cljs.core.memoize(debux.common.util.make_bars_);
debux.common.util.prepend_bars = (function debux$common$util$prepend_bars(line,indent_level){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((debux.common.util.make_bars.cljs$core$IFn$_invoke$arity$1 ? debux.common.util.make_bars.cljs$core$IFn$_invoke$arity$1(indent_level) : debux.common.util.make_bars.call(null,indent_level)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join('');
});
debux.common.util.print_form_with_indent = (function debux$common$util$print_form_with_indent(form,indent_level){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([debux.common.util.prepend_bars(form,indent_level)], 0));

return cljs.core.flush();
});
debux.common.util.form_header = (function debux$common$util$form_header(var_args){
var args__4502__auto__ = [];
var len__4499__auto___21367 = arguments.length;
var i__4500__auto___21368 = (0);
while(true){
if((i__4500__auto___21368 < len__4499__auto___21367)){
args__4502__auto__.push((arguments[i__4500__auto___21368]));

var G__21369 = (i__4500__auto___21368 + (1));
i__4500__auto___21368 = G__21369;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return debux.common.util.form_header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

debux.common.util.form_header.cljs$core$IFn$_invoke$arity$variadic = (function (form,p__21363){
var vec__21364 = p__21363;
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21364,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(debux.common.util.truncate(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = msg;
if(cljs.core.truth_(and__3911__auto__)){
return ["   <",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),">"].join('');
} else {
return and__3911__auto__;
}
})())," =>"].join('');
});

debux.common.util.form_header.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
debux.common.util.form_header.cljs$lang$applyTo = (function (seq21361){
var G__21362 = cljs.core.first(seq21361);
var seq21361__$1 = cljs.core.next(seq21361);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21362,seq21361__$1);
});

debux.common.util.prepend_blanks = (function debux$common$util$prepend_blanks(lines){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__21370_SHARP_){
return ["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21370_SHARP_)].join('');
}),lines);
});
debux.common.util.pprint_result_with_indent = (function debux$common$util$pprint_result_with_indent(result,indent_level){
var res = result;
var result__$1 = (function (){var sb__4430__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_21372_21374 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_21373_21375 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_21372_21374,_STAR_print_fn_STAR_21373_21375,sb__4430__auto__,res){
return (function (x__4431__auto__){
return sb__4430__auto__.append(x__4431__auto__);
});})(_STAR_print_newline_STAR_21372_21374,_STAR_print_fn_STAR_21373_21375,sb__4430__auto__,res))
;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(res);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_21373_21375;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_21372_21374;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4430__auto__)].join('');
})();
var pprint = clojure.string.trim(result__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (res,result__$1,pprint){
return (function (p1__21371_SHARP_){
return debux.common.util.prepend_bars(p1__21371_SHARP_,indent_level);
});})(res,result__$1,pprint))
,debux.common.util.prepend_blanks(clojure.string.split.cljs$core$IFn$_invoke$arity$2(pprint,/\n/))))], 0));

return cljs.core.flush();
});
debux.common.util.insert_blank_line = (function debux$common$util$insert_blank_line(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" "], 0));

return cljs.core.flush();
});
debux.common.util.parse_opts = (function debux$common$util$parse_opts(opts){
var opts__$1 = opts;
var acc = cljs.core.PersistentArrayMap.EMPTY;
while(true){
var f = cljs.core.first(opts__$1);
var s = cljs.core.second(opts__$1);
if(cljs.core.empty_QMARK_(opts__$1)){
return acc;
} else {
if(typeof f === 'number'){
var G__21378 = cljs.core.next(opts__$1);
var G__21379 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.cst$kw$n,f);
opts__$1 = G__21378;
acc = G__21379;
continue;
} else {
if(typeof f === 'string'){
var G__21380 = cljs.core.next(opts__$1);
var G__21381 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.cst$kw$msg,f);
opts__$1 = G__21380;
acc = G__21381;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,cljs.core.cst$kw$if)){
var G__21382 = cljs.core.nnext(opts__$1);
var G__21383 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.cst$kw$condition,s);
opts__$1 = G__21382;
acc = G__21383;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,cljs.core.cst$kw$js)){
var G__21384 = cljs.core.next(opts__$1);
var G__21385 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.cst$kw$js,true);
opts__$1 = G__21384;
acc = G__21385;
continue;
} else {
if(cljs.core.truth_((function (){var fexpr__21376 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$o,null,cljs.core.cst$kw$once,null], null), null);
return (fexpr__21376.cljs$core$IFn$_invoke$arity$1 ? fexpr__21376.cljs$core$IFn$_invoke$arity$1(f) : fexpr__21376.call(null,f));
})())){
var G__21386 = cljs.core.next(opts__$1);
var G__21387 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.cst$kw$once,true);
opts__$1 = G__21386;
acc = G__21387;
continue;
} else {
if(cljs.core.truth_((function (){var fexpr__21377 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$s,null,cljs.core.cst$kw$style,null], null), null);
return (fexpr__21377.cljs$core$IFn$_invoke$arity$1 ? fexpr__21377.cljs$core$IFn$_invoke$arity$1(f) : fexpr__21377.call(null,f));
})())){
var G__21388 = cljs.core.nnext(opts__$1);
var G__21389 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.cst$kw$style,s);
opts__$1 = G__21388;
acc = G__21389;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,cljs.core.cst$kw$clog)){
var G__21390 = cljs.core.next(opts__$1);
var G__21391 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.cst$kw$clog,true);
opts__$1 = G__21390;
acc = G__21391;
continue;
} else {
return null;
}
}
}
}
}
}
}
}
break;
}
});
debux.common.util.quote_val = (function debux$common$util$quote_val(p__21392){
var vec__21393 = p__21392;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21393,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21393,(1),null);
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,v,null,(1),null))))),null,(1),null))))));
});
debux.common.util.quote_vals = (function debux$common$util$quote_vals(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(debux.common.util.quote_val,m));
});
debux.common.util.include_recur_QMARK_ = (function debux$common$util$include_recur_QMARK_(form){
var G__21398 = cljs.core.cst$sym$recur;
var fexpr__21397 = (function (){var fexpr__21399 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.flatten);
return (fexpr__21399.cljs$core$IFn$_invoke$arity$1 ? fexpr__21399.cljs$core$IFn$_invoke$arity$1(form) : fexpr__21399.call(null,form));
})();
return (fexpr__21397.cljs$core$IFn$_invoke$arity$1 ? fexpr__21397.cljs$core$IFn$_invoke$arity$1(G__21398) : fexpr__21397.call(null,G__21398));
});
debux.common.util.o_skip_QMARK_ = (function debux$common$util$o_skip_QMARK_(sym){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$debux$common$macro_DASH_specs_SLASH_o_DASH_skip,sym);
});
debux.common.util.spy_first = (function debux$common$util$spy_first(result,quoted_form,indent){
if(cljs.core.integer_QMARK_(indent)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["indent was not correctly replaced for form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([quoted_form], 0))),"\nThis is a bug, please report it to https://github.com/Day8/re-frame-debux"].join('')),"\n","(integer? indent)"].join('')));
}

debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$form,(function (){var G__21401 = quoted_form;
var G__21402 = cljs.core.cst$sym$dummy;
return (debux.common.util.remove_d.cljs$core$IFn$_invoke$arity$2 ? debux.common.util.remove_d.cljs$core$IFn$_invoke$arity$2(G__21401,G__21402) : debux.common.util.remove_d.call(null,G__21401,G__21402));
})(),cljs.core.cst$kw$result,result,cljs.core.cst$kw$indent_DASH_level,indent], null));

return result;
});
debux.common.util.spy_last = (function debux$common$util$spy_last(quoted_form,indent,result){
if(cljs.core.integer_QMARK_(indent)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["indent was not correctly replaced for form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([quoted_form], 0))),"\nThis is a bug, please report it to https://github.com/Day8/re-frame-debux"].join('')),"\n","(integer? indent)"].join('')));
}

debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$form,(function (){var G__21403 = quoted_form;
var G__21404 = cljs.core.cst$sym$dummy;
return (debux.common.util.remove_d.cljs$core$IFn$_invoke$arity$2 ? debux.common.util.remove_d.cljs$core$IFn$_invoke$arity$2(G__21403,G__21404) : debux.common.util.remove_d.call(null,G__21403,G__21404));
})(),cljs.core.cst$kw$result,result,cljs.core.cst$kw$indent_DASH_level,indent], null));

return result;
});
debux.common.util.spy_comp = (function debux$common$util$spy_comp(quoted_form,indent,form){
return (function() { 
var G__21407__delegate = function (arg){
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(form,arg);
if(cljs.core.integer_QMARK_(indent)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["indent was not correctly replaced for form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([quoted_form], 0))),"\nThis is a bug, please report it to https://github.com/Day8/re-frame-debux"].join('')),"\n","(integer? indent)"].join('')));
}

debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$form,(function (){var G__21405 = quoted_form;
var G__21406 = cljs.core.cst$sym$dummy;
return (debux.common.util.remove_d.cljs$core$IFn$_invoke$arity$2 ? debux.common.util.remove_d.cljs$core$IFn$_invoke$arity$2(G__21405,G__21406) : debux.common.util.remove_d.call(null,G__21405,G__21406));
})(),cljs.core.cst$kw$result,result,cljs.core.cst$kw$indent_DASH_level,indent], null));

return result;
};
var G__21407 = function (var_args){
var arg = null;
if (arguments.length > 0) {
var G__21408__i = 0, G__21408__a = new Array(arguments.length -  0);
while (G__21408__i < G__21408__a.length) {G__21408__a[G__21408__i] = arguments[G__21408__i + 0]; ++G__21408__i;}
  arg = new cljs.core.IndexedSeq(G__21408__a,0,null);
} 
return G__21407__delegate.call(this,arg);};
G__21407.cljs$lang$maxFixedArity = 0;
G__21407.cljs$lang$applyTo = (function (arglist__21409){
var arg = cljs.core.seq(arglist__21409);
return G__21407__delegate(arg);
});
G__21407.cljs$core$IFn$_invoke$arity$variadic = G__21407__delegate;
return G__21407;
})()
;
});
debux.common.util.debux_skip_symbol_QMARK_ = (function debux$common$util$debux_skip_symbol_QMARK_(sym){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$sym$debux$common$macro_DASH_specs_SLASH_o_DASH_skip,null,cljs.core.cst$sym$debux$common$macro_DASH_specs_SLASH_skip,null,cljs.core.cst$sym$debux$common$macro_DASH_specs_SLASH_skip_DASH_outer,null], null), null),sym);
});
debux.common.util.spy_first_QMARK_ = (function debux$common$util$spy_first_QMARK_(sym){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$debux$common$util_SLASH_spy_DASH_first,sym);
});
debux.common.util.third = (function debux$common$util$third(coll){
return cljs.core.first(cljs.core.next(cljs.core.next(coll)));
});
debux.common.util.remove_d = (function debux$common$util$remove_d(form,d_sym){
var loc = debux.common.util.sequential_zip(form);
while(true){
var node = clojure.zip.node(loc);
if(cljs.core.truth_(clojure.zip.end_QMARK_(loc))){
return clojure.zip.root(loc);
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.seq_QMARK_(node);
if(and__3911__auto__){
var or__3922__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d_sym,cljs.core.first(node));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = debux.common.util.debux_skip_symbol_QMARK_(cljs.core.first(node));
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return debux.common.util.spy_first_QMARK_(cljs.core.first(node));
}
}
} else {
return and__3911__auto__;
}
})())){
var G__21410 = clojure.zip.replace(loc,debux.common.util.third(node));
loc = G__21410;
continue;
} else {
if(((cljs.core.seq_QMARK_(node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$debux$common$util_SLASH_spy_DASH_last,cljs.core.first(node))))){
var G__21411 = clojure.zip.replace(loc,cljs.core.last(node));
loc = G__21411;
continue;
} else {
var G__21412 = clojure.zip.next(loc);
loc = G__21412;
continue;

}
}
}
break;
}
});
