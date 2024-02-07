goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22583 = arguments.length;
var i__5770__auto___22584 = (0);
while(true){
if((i__5770__auto___22584 < len__5769__auto___22583)){
args__5775__auto__.push((arguments[i__5770__auto___22584]));

var G__22589 = (i__5770__auto___22584 + (1));
i__5770__auto___22584 = G__22589;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22174){
var G__22175 = cljs.core.first(seq22174);
var seq22174__$1 = cljs.core.next(seq22174);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22175,seq22174__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22181 = cljs.core.seq(sources);
var chunk__22182 = null;
var count__22183 = (0);
var i__22184 = (0);
while(true){
if((i__22184 < count__22183)){
var map__22189 = chunk__22182.cljs$core$IIndexed$_nth$arity$2(null,i__22184);
var map__22189__$1 = cljs.core.__destructure_map(map__22189);
var src = map__22189__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22189__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22189__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22189__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22189__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22190){var e_22590 = e22190;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22590);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22590.message)].join('')));
}

var G__22591 = seq__22181;
var G__22592 = chunk__22182;
var G__22593 = count__22183;
var G__22594 = (i__22184 + (1));
seq__22181 = G__22591;
chunk__22182 = G__22592;
count__22183 = G__22593;
i__22184 = G__22594;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22181);
if(temp__5804__auto__){
var seq__22181__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22181__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22181__$1);
var G__22595 = cljs.core.chunk_rest(seq__22181__$1);
var G__22596 = c__5568__auto__;
var G__22597 = cljs.core.count(c__5568__auto__);
var G__22598 = (0);
seq__22181 = G__22595;
chunk__22182 = G__22596;
count__22183 = G__22597;
i__22184 = G__22598;
continue;
} else {
var map__22193 = cljs.core.first(seq__22181__$1);
var map__22193__$1 = cljs.core.__destructure_map(map__22193);
var src = map__22193__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22193__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22193__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22193__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22193__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22195){var e_22599 = e22195;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22599);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22599.message)].join('')));
}

var G__22600 = cljs.core.next(seq__22181__$1);
var G__22601 = null;
var G__22602 = (0);
var G__22603 = (0);
seq__22181 = G__22600;
chunk__22182 = G__22601;
count__22183 = G__22602;
i__22184 = G__22603;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__22196 = cljs.core.seq(js_requires);
var chunk__22197 = null;
var count__22198 = (0);
var i__22199 = (0);
while(true){
if((i__22199 < count__22198)){
var js_ns = chunk__22197.cljs$core$IIndexed$_nth$arity$2(null,i__22199);
var require_str_22604 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22604);


var G__22605 = seq__22196;
var G__22606 = chunk__22197;
var G__22607 = count__22198;
var G__22608 = (i__22199 + (1));
seq__22196 = G__22605;
chunk__22197 = G__22606;
count__22198 = G__22607;
i__22199 = G__22608;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22196);
if(temp__5804__auto__){
var seq__22196__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22196__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22196__$1);
var G__22609 = cljs.core.chunk_rest(seq__22196__$1);
var G__22610 = c__5568__auto__;
var G__22611 = cljs.core.count(c__5568__auto__);
var G__22612 = (0);
seq__22196 = G__22609;
chunk__22197 = G__22610;
count__22198 = G__22611;
i__22199 = G__22612;
continue;
} else {
var js_ns = cljs.core.first(seq__22196__$1);
var require_str_22613 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22613);


var G__22615 = cljs.core.next(seq__22196__$1);
var G__22616 = null;
var G__22617 = (0);
var G__22618 = (0);
seq__22196 = G__22615;
chunk__22197 = G__22616;
count__22198 = G__22617;
i__22199 = G__22618;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__22201){
var map__22202 = p__22201;
var map__22202__$1 = cljs.core.__destructure_map(map__22202);
var msg = map__22202__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22202__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22202__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22204(s__22205){
return (new cljs.core.LazySeq(null,(function (){
var s__22205__$1 = s__22205;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22205__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__22210 = cljs.core.first(xs__6360__auto__);
var map__22210__$1 = cljs.core.__destructure_map(map__22210);
var src = map__22210__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22210__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22210__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__22205__$1,map__22210,map__22210__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22202,map__22202__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22204_$_iter__22206(s__22207){
return (new cljs.core.LazySeq(null,((function (s__22205__$1,map__22210,map__22210__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22202,map__22202__$1,msg,info,reload_info){
return (function (){
var s__22207__$1 = s__22207;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22207__$1);
if(temp__5804__auto____$1){
var s__22207__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22207__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__22207__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__22209 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__22208 = (0);
while(true){
if((i__22208 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__22208);
cljs.core.chunk_append(b__22209,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__22620 = (i__22208 + (1));
i__22208 = G__22620;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22209),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22204_$_iter__22206(cljs.core.chunk_rest(s__22207__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22209),null);
}
} else {
var warning = cljs.core.first(s__22207__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22204_$_iter__22206(cljs.core.rest(s__22207__$2)));
}
} else {
return null;
}
break;
}
});})(s__22205__$1,map__22210,map__22210__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22202,map__22202__$1,msg,info,reload_info))
,null,null));
});})(s__22205__$1,map__22210,map__22210__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22202,map__22202__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22204(cljs.core.rest(s__22205__$1)));
} else {
var G__22622 = cljs.core.rest(s__22205__$1);
s__22205__$1 = G__22622;
continue;
}
} else {
var G__22623 = cljs.core.rest(s__22205__$1);
s__22205__$1 = G__22623;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__22213_22624 = cljs.core.seq(warnings);
var chunk__22215_22625 = null;
var count__22216_22626 = (0);
var i__22217_22627 = (0);
while(true){
if((i__22217_22627 < count__22216_22626)){
var map__22223_22628 = chunk__22215_22625.cljs$core$IIndexed$_nth$arity$2(null,i__22217_22627);
var map__22223_22629__$1 = cljs.core.__destructure_map(map__22223_22628);
var w_22630 = map__22223_22629__$1;
var msg_22631__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22223_22629__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22223_22629__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22223_22629__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22223_22629__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22634)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22632),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22633),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22631__$1)].join(''));


var G__22635 = seq__22213_22624;
var G__22636 = chunk__22215_22625;
var G__22637 = count__22216_22626;
var G__22638 = (i__22217_22627 + (1));
seq__22213_22624 = G__22635;
chunk__22215_22625 = G__22636;
count__22216_22626 = G__22637;
i__22217_22627 = G__22638;
continue;
} else {
var temp__5804__auto___22639 = cljs.core.seq(seq__22213_22624);
if(temp__5804__auto___22639){
var seq__22213_22640__$1 = temp__5804__auto___22639;
if(cljs.core.chunked_seq_QMARK_(seq__22213_22640__$1)){
var c__5568__auto___22641 = cljs.core.chunk_first(seq__22213_22640__$1);
var G__22642 = cljs.core.chunk_rest(seq__22213_22640__$1);
var G__22643 = c__5568__auto___22641;
var G__22644 = cljs.core.count(c__5568__auto___22641);
var G__22645 = (0);
seq__22213_22624 = G__22642;
chunk__22215_22625 = G__22643;
count__22216_22626 = G__22644;
i__22217_22627 = G__22645;
continue;
} else {
var map__22224_22646 = cljs.core.first(seq__22213_22640__$1);
var map__22224_22647__$1 = cljs.core.__destructure_map(map__22224_22646);
var w_22648 = map__22224_22647__$1;
var msg_22649__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22224_22647__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22224_22647__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22224_22647__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22224_22647__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22652)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22650),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22651),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22649__$1)].join(''));


var G__22653 = cljs.core.next(seq__22213_22640__$1);
var G__22654 = null;
var G__22655 = (0);
var G__22656 = (0);
seq__22213_22624 = G__22653;
chunk__22215_22625 = G__22654;
count__22216_22626 = G__22655;
i__22217_22627 = G__22656;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__22200_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22200_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__22225){
var map__22226 = p__22225;
var map__22226__$1 = cljs.core.__destructure_map(map__22226);
var msg = map__22226__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22226__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22226__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__22227 = cljs.core.seq(updates);
var chunk__22229 = null;
var count__22230 = (0);
var i__22231 = (0);
while(true){
if((i__22231 < count__22230)){
var path = chunk__22229.cljs$core$IIndexed$_nth$arity$2(null,i__22231);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22416_22661 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22420_22662 = null;
var count__22421_22663 = (0);
var i__22422_22664 = (0);
while(true){
if((i__22422_22664 < count__22421_22663)){
var node_22665 = chunk__22420_22662.cljs$core$IIndexed$_nth$arity$2(null,i__22422_22664);
if(cljs.core.not(node_22665.shadow$old)){
var path_match_22666 = shadow.cljs.devtools.client.browser.match_paths(node_22665.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22666)){
var new_link_22667 = (function (){var G__22450 = node_22665.cloneNode(true);
G__22450.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22666),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22450;
})();
(node_22665.shadow$old = true);

(new_link_22667.onload = ((function (seq__22416_22661,chunk__22420_22662,count__22421_22663,i__22422_22664,seq__22227,chunk__22229,count__22230,i__22231,new_link_22667,path_match_22666,node_22665,path,map__22226,map__22226__$1,msg,updates,reload_info){
return (function (e){
var seq__22451_22668 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22453_22669 = null;
var count__22454_22670 = (0);
var i__22455_22671 = (0);
while(true){
if((i__22455_22671 < count__22454_22670)){
var map__22462_22672 = chunk__22453_22669.cljs$core$IIndexed$_nth$arity$2(null,i__22455_22671);
var map__22462_22673__$1 = cljs.core.__destructure_map(map__22462_22672);
var task_22674 = map__22462_22673__$1;
var fn_str_22675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22462_22673__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22462_22673__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22677 = goog.getObjectByName(fn_str_22675,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22676)].join(''));

(fn_obj_22677.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22677.cljs$core$IFn$_invoke$arity$2(path,new_link_22667) : fn_obj_22677.call(null,path,new_link_22667));


var G__22678 = seq__22451_22668;
var G__22679 = chunk__22453_22669;
var G__22680 = count__22454_22670;
var G__22681 = (i__22455_22671 + (1));
seq__22451_22668 = G__22678;
chunk__22453_22669 = G__22679;
count__22454_22670 = G__22680;
i__22455_22671 = G__22681;
continue;
} else {
var temp__5804__auto___22682 = cljs.core.seq(seq__22451_22668);
if(temp__5804__auto___22682){
var seq__22451_22683__$1 = temp__5804__auto___22682;
if(cljs.core.chunked_seq_QMARK_(seq__22451_22683__$1)){
var c__5568__auto___22684 = cljs.core.chunk_first(seq__22451_22683__$1);
var G__22685 = cljs.core.chunk_rest(seq__22451_22683__$1);
var G__22686 = c__5568__auto___22684;
var G__22687 = cljs.core.count(c__5568__auto___22684);
var G__22688 = (0);
seq__22451_22668 = G__22685;
chunk__22453_22669 = G__22686;
count__22454_22670 = G__22687;
i__22455_22671 = G__22688;
continue;
} else {
var map__22463_22689 = cljs.core.first(seq__22451_22683__$1);
var map__22463_22690__$1 = cljs.core.__destructure_map(map__22463_22689);
var task_22691 = map__22463_22690__$1;
var fn_str_22692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22463_22690__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22463_22690__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22694 = goog.getObjectByName(fn_str_22692,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22693)].join(''));

(fn_obj_22694.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22694.cljs$core$IFn$_invoke$arity$2(path,new_link_22667) : fn_obj_22694.call(null,path,new_link_22667));


var G__22696 = cljs.core.next(seq__22451_22683__$1);
var G__22697 = null;
var G__22698 = (0);
var G__22699 = (0);
seq__22451_22668 = G__22696;
chunk__22453_22669 = G__22697;
count__22454_22670 = G__22698;
i__22455_22671 = G__22699;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22665);
});})(seq__22416_22661,chunk__22420_22662,count__22421_22663,i__22422_22664,seq__22227,chunk__22229,count__22230,i__22231,new_link_22667,path_match_22666,node_22665,path,map__22226,map__22226__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22666], 0));

goog.dom.insertSiblingAfter(new_link_22667,node_22665);


var G__22700 = seq__22416_22661;
var G__22701 = chunk__22420_22662;
var G__22702 = count__22421_22663;
var G__22703 = (i__22422_22664 + (1));
seq__22416_22661 = G__22700;
chunk__22420_22662 = G__22701;
count__22421_22663 = G__22702;
i__22422_22664 = G__22703;
continue;
} else {
var G__22704 = seq__22416_22661;
var G__22705 = chunk__22420_22662;
var G__22706 = count__22421_22663;
var G__22707 = (i__22422_22664 + (1));
seq__22416_22661 = G__22704;
chunk__22420_22662 = G__22705;
count__22421_22663 = G__22706;
i__22422_22664 = G__22707;
continue;
}
} else {
var G__22708 = seq__22416_22661;
var G__22709 = chunk__22420_22662;
var G__22710 = count__22421_22663;
var G__22711 = (i__22422_22664 + (1));
seq__22416_22661 = G__22708;
chunk__22420_22662 = G__22709;
count__22421_22663 = G__22710;
i__22422_22664 = G__22711;
continue;
}
} else {
var temp__5804__auto___22712 = cljs.core.seq(seq__22416_22661);
if(temp__5804__auto___22712){
var seq__22416_22713__$1 = temp__5804__auto___22712;
if(cljs.core.chunked_seq_QMARK_(seq__22416_22713__$1)){
var c__5568__auto___22714 = cljs.core.chunk_first(seq__22416_22713__$1);
var G__22715 = cljs.core.chunk_rest(seq__22416_22713__$1);
var G__22716 = c__5568__auto___22714;
var G__22717 = cljs.core.count(c__5568__auto___22714);
var G__22718 = (0);
seq__22416_22661 = G__22715;
chunk__22420_22662 = G__22716;
count__22421_22663 = G__22717;
i__22422_22664 = G__22718;
continue;
} else {
var node_22719 = cljs.core.first(seq__22416_22713__$1);
if(cljs.core.not(node_22719.shadow$old)){
var path_match_22720 = shadow.cljs.devtools.client.browser.match_paths(node_22719.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22720)){
var new_link_22721 = (function (){var G__22465 = node_22719.cloneNode(true);
G__22465.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22720),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22465;
})();
(node_22719.shadow$old = true);

(new_link_22721.onload = ((function (seq__22416_22661,chunk__22420_22662,count__22421_22663,i__22422_22664,seq__22227,chunk__22229,count__22230,i__22231,new_link_22721,path_match_22720,node_22719,seq__22416_22713__$1,temp__5804__auto___22712,path,map__22226,map__22226__$1,msg,updates,reload_info){
return (function (e){
var seq__22468_22722 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22470_22723 = null;
var count__22471_22724 = (0);
var i__22472_22725 = (0);
while(true){
if((i__22472_22725 < count__22471_22724)){
var map__22476_22726 = chunk__22470_22723.cljs$core$IIndexed$_nth$arity$2(null,i__22472_22725);
var map__22476_22727__$1 = cljs.core.__destructure_map(map__22476_22726);
var task_22728 = map__22476_22727__$1;
var fn_str_22729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22476_22727__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22476_22727__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22731 = goog.getObjectByName(fn_str_22729,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22730)].join(''));

(fn_obj_22731.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22731.cljs$core$IFn$_invoke$arity$2(path,new_link_22721) : fn_obj_22731.call(null,path,new_link_22721));


var G__22732 = seq__22468_22722;
var G__22733 = chunk__22470_22723;
var G__22734 = count__22471_22724;
var G__22735 = (i__22472_22725 + (1));
seq__22468_22722 = G__22732;
chunk__22470_22723 = G__22733;
count__22471_22724 = G__22734;
i__22472_22725 = G__22735;
continue;
} else {
var temp__5804__auto___22736__$1 = cljs.core.seq(seq__22468_22722);
if(temp__5804__auto___22736__$1){
var seq__22468_22737__$1 = temp__5804__auto___22736__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22468_22737__$1)){
var c__5568__auto___22738 = cljs.core.chunk_first(seq__22468_22737__$1);
var G__22739 = cljs.core.chunk_rest(seq__22468_22737__$1);
var G__22740 = c__5568__auto___22738;
var G__22741 = cljs.core.count(c__5568__auto___22738);
var G__22742 = (0);
seq__22468_22722 = G__22739;
chunk__22470_22723 = G__22740;
count__22471_22724 = G__22741;
i__22472_22725 = G__22742;
continue;
} else {
var map__22477_22744 = cljs.core.first(seq__22468_22737__$1);
var map__22477_22745__$1 = cljs.core.__destructure_map(map__22477_22744);
var task_22746 = map__22477_22745__$1;
var fn_str_22747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22477_22745__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22477_22745__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22749 = goog.getObjectByName(fn_str_22747,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22748)].join(''));

(fn_obj_22749.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22749.cljs$core$IFn$_invoke$arity$2(path,new_link_22721) : fn_obj_22749.call(null,path,new_link_22721));


var G__22750 = cljs.core.next(seq__22468_22737__$1);
var G__22751 = null;
var G__22752 = (0);
var G__22753 = (0);
seq__22468_22722 = G__22750;
chunk__22470_22723 = G__22751;
count__22471_22724 = G__22752;
i__22472_22725 = G__22753;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22719);
});})(seq__22416_22661,chunk__22420_22662,count__22421_22663,i__22422_22664,seq__22227,chunk__22229,count__22230,i__22231,new_link_22721,path_match_22720,node_22719,seq__22416_22713__$1,temp__5804__auto___22712,path,map__22226,map__22226__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22720], 0));

goog.dom.insertSiblingAfter(new_link_22721,node_22719);


var G__22756 = cljs.core.next(seq__22416_22713__$1);
var G__22757 = null;
var G__22758 = (0);
var G__22759 = (0);
seq__22416_22661 = G__22756;
chunk__22420_22662 = G__22757;
count__22421_22663 = G__22758;
i__22422_22664 = G__22759;
continue;
} else {
var G__22760 = cljs.core.next(seq__22416_22713__$1);
var G__22761 = null;
var G__22762 = (0);
var G__22763 = (0);
seq__22416_22661 = G__22760;
chunk__22420_22662 = G__22761;
count__22421_22663 = G__22762;
i__22422_22664 = G__22763;
continue;
}
} else {
var G__22764 = cljs.core.next(seq__22416_22713__$1);
var G__22765 = null;
var G__22766 = (0);
var G__22767 = (0);
seq__22416_22661 = G__22764;
chunk__22420_22662 = G__22765;
count__22421_22663 = G__22766;
i__22422_22664 = G__22767;
continue;
}
}
} else {
}
}
break;
}


var G__22768 = seq__22227;
var G__22769 = chunk__22229;
var G__22770 = count__22230;
var G__22771 = (i__22231 + (1));
seq__22227 = G__22768;
chunk__22229 = G__22769;
count__22230 = G__22770;
i__22231 = G__22771;
continue;
} else {
var G__22772 = seq__22227;
var G__22773 = chunk__22229;
var G__22774 = count__22230;
var G__22775 = (i__22231 + (1));
seq__22227 = G__22772;
chunk__22229 = G__22773;
count__22230 = G__22774;
i__22231 = G__22775;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22227);
if(temp__5804__auto__){
var seq__22227__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22227__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22227__$1);
var G__22779 = cljs.core.chunk_rest(seq__22227__$1);
var G__22780 = c__5568__auto__;
var G__22781 = cljs.core.count(c__5568__auto__);
var G__22782 = (0);
seq__22227 = G__22779;
chunk__22229 = G__22780;
count__22230 = G__22781;
i__22231 = G__22782;
continue;
} else {
var path = cljs.core.first(seq__22227__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22478_22783 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22482_22784 = null;
var count__22483_22785 = (0);
var i__22484_22786 = (0);
while(true){
if((i__22484_22786 < count__22483_22785)){
var node_22787 = chunk__22482_22784.cljs$core$IIndexed$_nth$arity$2(null,i__22484_22786);
if(cljs.core.not(node_22787.shadow$old)){
var path_match_22788 = shadow.cljs.devtools.client.browser.match_paths(node_22787.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22788)){
var new_link_22789 = (function (){var G__22519 = node_22787.cloneNode(true);
G__22519.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22788),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22519;
})();
(node_22787.shadow$old = true);

(new_link_22789.onload = ((function (seq__22478_22783,chunk__22482_22784,count__22483_22785,i__22484_22786,seq__22227,chunk__22229,count__22230,i__22231,new_link_22789,path_match_22788,node_22787,path,seq__22227__$1,temp__5804__auto__,map__22226,map__22226__$1,msg,updates,reload_info){
return (function (e){
var seq__22520_22790 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22522_22791 = null;
var count__22523_22792 = (0);
var i__22524_22793 = (0);
while(true){
if((i__22524_22793 < count__22523_22792)){
var map__22528_22794 = chunk__22522_22791.cljs$core$IIndexed$_nth$arity$2(null,i__22524_22793);
var map__22528_22795__$1 = cljs.core.__destructure_map(map__22528_22794);
var task_22796 = map__22528_22795__$1;
var fn_str_22797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22528_22795__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22528_22795__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22799 = goog.getObjectByName(fn_str_22797,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22798)].join(''));

(fn_obj_22799.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22799.cljs$core$IFn$_invoke$arity$2(path,new_link_22789) : fn_obj_22799.call(null,path,new_link_22789));


var G__22800 = seq__22520_22790;
var G__22801 = chunk__22522_22791;
var G__22802 = count__22523_22792;
var G__22803 = (i__22524_22793 + (1));
seq__22520_22790 = G__22800;
chunk__22522_22791 = G__22801;
count__22523_22792 = G__22802;
i__22524_22793 = G__22803;
continue;
} else {
var temp__5804__auto___22804__$1 = cljs.core.seq(seq__22520_22790);
if(temp__5804__auto___22804__$1){
var seq__22520_22805__$1 = temp__5804__auto___22804__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22520_22805__$1)){
var c__5568__auto___22806 = cljs.core.chunk_first(seq__22520_22805__$1);
var G__22807 = cljs.core.chunk_rest(seq__22520_22805__$1);
var G__22808 = c__5568__auto___22806;
var G__22809 = cljs.core.count(c__5568__auto___22806);
var G__22810 = (0);
seq__22520_22790 = G__22807;
chunk__22522_22791 = G__22808;
count__22523_22792 = G__22809;
i__22524_22793 = G__22810;
continue;
} else {
var map__22532_22811 = cljs.core.first(seq__22520_22805__$1);
var map__22532_22812__$1 = cljs.core.__destructure_map(map__22532_22811);
var task_22813 = map__22532_22812__$1;
var fn_str_22814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22532_22812__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22532_22812__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22816 = goog.getObjectByName(fn_str_22814,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22815)].join(''));

(fn_obj_22816.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22816.cljs$core$IFn$_invoke$arity$2(path,new_link_22789) : fn_obj_22816.call(null,path,new_link_22789));


var G__22817 = cljs.core.next(seq__22520_22805__$1);
var G__22818 = null;
var G__22819 = (0);
var G__22820 = (0);
seq__22520_22790 = G__22817;
chunk__22522_22791 = G__22818;
count__22523_22792 = G__22819;
i__22524_22793 = G__22820;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22787);
});})(seq__22478_22783,chunk__22482_22784,count__22483_22785,i__22484_22786,seq__22227,chunk__22229,count__22230,i__22231,new_link_22789,path_match_22788,node_22787,path,seq__22227__$1,temp__5804__auto__,map__22226,map__22226__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22788], 0));

goog.dom.insertSiblingAfter(new_link_22789,node_22787);


var G__22821 = seq__22478_22783;
var G__22822 = chunk__22482_22784;
var G__22823 = count__22483_22785;
var G__22824 = (i__22484_22786 + (1));
seq__22478_22783 = G__22821;
chunk__22482_22784 = G__22822;
count__22483_22785 = G__22823;
i__22484_22786 = G__22824;
continue;
} else {
var G__22825 = seq__22478_22783;
var G__22826 = chunk__22482_22784;
var G__22827 = count__22483_22785;
var G__22828 = (i__22484_22786 + (1));
seq__22478_22783 = G__22825;
chunk__22482_22784 = G__22826;
count__22483_22785 = G__22827;
i__22484_22786 = G__22828;
continue;
}
} else {
var G__22829 = seq__22478_22783;
var G__22830 = chunk__22482_22784;
var G__22831 = count__22483_22785;
var G__22832 = (i__22484_22786 + (1));
seq__22478_22783 = G__22829;
chunk__22482_22784 = G__22830;
count__22483_22785 = G__22831;
i__22484_22786 = G__22832;
continue;
}
} else {
var temp__5804__auto___22833__$1 = cljs.core.seq(seq__22478_22783);
if(temp__5804__auto___22833__$1){
var seq__22478_22834__$1 = temp__5804__auto___22833__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22478_22834__$1)){
var c__5568__auto___22835 = cljs.core.chunk_first(seq__22478_22834__$1);
var G__22836 = cljs.core.chunk_rest(seq__22478_22834__$1);
var G__22837 = c__5568__auto___22835;
var G__22838 = cljs.core.count(c__5568__auto___22835);
var G__22839 = (0);
seq__22478_22783 = G__22836;
chunk__22482_22784 = G__22837;
count__22483_22785 = G__22838;
i__22484_22786 = G__22839;
continue;
} else {
var node_22840 = cljs.core.first(seq__22478_22834__$1);
if(cljs.core.not(node_22840.shadow$old)){
var path_match_22841 = shadow.cljs.devtools.client.browser.match_paths(node_22840.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22841)){
var new_link_22842 = (function (){var G__22535 = node_22840.cloneNode(true);
G__22535.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22841),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22535;
})();
(node_22840.shadow$old = true);

(new_link_22842.onload = ((function (seq__22478_22783,chunk__22482_22784,count__22483_22785,i__22484_22786,seq__22227,chunk__22229,count__22230,i__22231,new_link_22842,path_match_22841,node_22840,seq__22478_22834__$1,temp__5804__auto___22833__$1,path,seq__22227__$1,temp__5804__auto__,map__22226,map__22226__$1,msg,updates,reload_info){
return (function (e){
var seq__22536_22843 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22538_22844 = null;
var count__22539_22845 = (0);
var i__22540_22846 = (0);
while(true){
if((i__22540_22846 < count__22539_22845)){
var map__22546_22847 = chunk__22538_22844.cljs$core$IIndexed$_nth$arity$2(null,i__22540_22846);
var map__22546_22848__$1 = cljs.core.__destructure_map(map__22546_22847);
var task_22849 = map__22546_22848__$1;
var fn_str_22850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22546_22848__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22546_22848__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22852 = goog.getObjectByName(fn_str_22850,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22851)].join(''));

(fn_obj_22852.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22852.cljs$core$IFn$_invoke$arity$2(path,new_link_22842) : fn_obj_22852.call(null,path,new_link_22842));


var G__22853 = seq__22536_22843;
var G__22854 = chunk__22538_22844;
var G__22855 = count__22539_22845;
var G__22856 = (i__22540_22846 + (1));
seq__22536_22843 = G__22853;
chunk__22538_22844 = G__22854;
count__22539_22845 = G__22855;
i__22540_22846 = G__22856;
continue;
} else {
var temp__5804__auto___22857__$2 = cljs.core.seq(seq__22536_22843);
if(temp__5804__auto___22857__$2){
var seq__22536_22858__$1 = temp__5804__auto___22857__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22536_22858__$1)){
var c__5568__auto___22859 = cljs.core.chunk_first(seq__22536_22858__$1);
var G__22860 = cljs.core.chunk_rest(seq__22536_22858__$1);
var G__22861 = c__5568__auto___22859;
var G__22862 = cljs.core.count(c__5568__auto___22859);
var G__22863 = (0);
seq__22536_22843 = G__22860;
chunk__22538_22844 = G__22861;
count__22539_22845 = G__22862;
i__22540_22846 = G__22863;
continue;
} else {
var map__22547_22864 = cljs.core.first(seq__22536_22858__$1);
var map__22547_22865__$1 = cljs.core.__destructure_map(map__22547_22864);
var task_22866 = map__22547_22865__$1;
var fn_str_22867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22547_22865__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22547_22865__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22869 = goog.getObjectByName(fn_str_22867,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22868)].join(''));

(fn_obj_22869.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22869.cljs$core$IFn$_invoke$arity$2(path,new_link_22842) : fn_obj_22869.call(null,path,new_link_22842));


var G__22870 = cljs.core.next(seq__22536_22858__$1);
var G__22871 = null;
var G__22872 = (0);
var G__22873 = (0);
seq__22536_22843 = G__22870;
chunk__22538_22844 = G__22871;
count__22539_22845 = G__22872;
i__22540_22846 = G__22873;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22840);
});})(seq__22478_22783,chunk__22482_22784,count__22483_22785,i__22484_22786,seq__22227,chunk__22229,count__22230,i__22231,new_link_22842,path_match_22841,node_22840,seq__22478_22834__$1,temp__5804__auto___22833__$1,path,seq__22227__$1,temp__5804__auto__,map__22226,map__22226__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22841], 0));

goog.dom.insertSiblingAfter(new_link_22842,node_22840);


var G__22874 = cljs.core.next(seq__22478_22834__$1);
var G__22875 = null;
var G__22876 = (0);
var G__22877 = (0);
seq__22478_22783 = G__22874;
chunk__22482_22784 = G__22875;
count__22483_22785 = G__22876;
i__22484_22786 = G__22877;
continue;
} else {
var G__22878 = cljs.core.next(seq__22478_22834__$1);
var G__22879 = null;
var G__22880 = (0);
var G__22881 = (0);
seq__22478_22783 = G__22878;
chunk__22482_22784 = G__22879;
count__22483_22785 = G__22880;
i__22484_22786 = G__22881;
continue;
}
} else {
var G__22882 = cljs.core.next(seq__22478_22834__$1);
var G__22883 = null;
var G__22884 = (0);
var G__22885 = (0);
seq__22478_22783 = G__22882;
chunk__22482_22784 = G__22883;
count__22483_22785 = G__22884;
i__22484_22786 = G__22885;
continue;
}
}
} else {
}
}
break;
}


var G__22886 = cljs.core.next(seq__22227__$1);
var G__22887 = null;
var G__22888 = (0);
var G__22889 = (0);
seq__22227 = G__22886;
chunk__22229 = G__22887;
count__22230 = G__22888;
i__22231 = G__22889;
continue;
} else {
var G__22890 = cljs.core.next(seq__22227__$1);
var G__22891 = null;
var G__22892 = (0);
var G__22893 = (0);
seq__22227 = G__22890;
chunk__22229 = G__22891;
count__22230 = G__22892;
i__22231 = G__22893;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__22552){
var map__22555 = p__22552;
var map__22555__$1 = cljs.core.__destructure_map(map__22555);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22555__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__22559,done,error){
var map__22560 = p__22559;
var map__22560__$1 = cljs.core.__destructure_map(map__22560);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22560__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__22563,done,error){
var map__22564 = p__22563;
var map__22564__$1 = cljs.core.__destructure_map(map__22564);
var msg = map__22564__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22564__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22564__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22564__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__22565){
var map__22566 = p__22565;
var map__22566__$1 = cljs.core.__destructure_map(map__22566);
var src = map__22566__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22566__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__22567 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__22567) : done.call(null,G__22567));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__22568){
var map__22569 = p__22568;
var map__22569__$1 = cljs.core.__destructure_map(map__22569);
var msg__$1 = map__22569__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22569__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e22570){var ex = e22570;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__22571){
var map__22572 = p__22571;
var map__22572__$1 = cljs.core.__destructure_map(map__22572);
var env = map__22572__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22572__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__22573){
var map__22574 = p__22573;
var map__22574__$1 = cljs.core.__destructure_map(map__22574);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22574__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22574__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__22575){
var map__22576 = p__22575;
var map__22576__$1 = cljs.core.__destructure_map(map__22576);
var svc = map__22576__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22576__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
