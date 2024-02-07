goog.provide('re_pressed.impl');
re_pressed.impl.ns_root = "re-pressed.core/";
re_pressed.impl.max_record = (25);
re_pressed.impl.modifier_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(91),null,(17),null,(16),null,(18),null], null), null);
re_pressed.impl.__GT_ns_keyword = (function re_pressed$impl$__GT_ns_keyword(event_type){
return (function() {
var re_pressed$impl$__GT_ns_keyword_$_ns_keyword = null;
var re_pressed$impl$__GT_ns_keyword_$_ns_keyword__0 = (function (){
return re_pressed$impl$__GT_ns_keyword_$_ns_keyword.cljs$core$IFn$_invoke$arity$1(null);
});
var re_pressed$impl$__GT_ns_keyword_$_ns_keyword__1 = (function (suffix){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([re_pressed.impl.ns_root,cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_type),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));
});
re_pressed$impl$__GT_ns_keyword_$_ns_keyword = function(suffix){
switch(arguments.length){
case 0:
return re_pressed$impl$__GT_ns_keyword_$_ns_keyword__0.call(this);
case 1:
return re_pressed$impl$__GT_ns_keyword_$_ns_keyword__1.call(this,suffix);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_pressed$impl$__GT_ns_keyword_$_ns_keyword.cljs$core$IFn$_invoke$arity$0 = re_pressed$impl$__GT_ns_keyword_$_ns_keyword__0;
re_pressed$impl$__GT_ns_keyword_$_ns_keyword.cljs$core$IFn$_invoke$arity$1 = re_pressed$impl$__GT_ns_keyword_$_ns_keyword__1;
return re_pressed$impl$__GT_ns_keyword_$_ns_keyword;
})()
});
re_pressed.impl.is_key_QMARK_ = (function re_pressed$impl$is_key_QMARK_(recent_key,key_map){
return cljs.core.every_QMARK_((function (p__12400){
var vec__12401 = p__12400;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12401,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12401,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(recent_key,k),v);
}),key_map);
});
re_pressed.impl.register_subs = (function re_pressed$impl$register_subs(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(ns_keyword("-keys"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword(),new cljs.core.Keyword(null,"keys","keys",1068423698)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(ns_keyword("-event-keys"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword(),new cljs.core.Keyword(null,"event-keys","event-keys",-835966631)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(ns_keyword("-clear-keys"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword(),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(ns_keyword("-always-listen-keys"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword(),new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050)], null));
})], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",event_type)){
return re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(ns_keyword("-prevent-default-keys"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword(),new cljs.core.Keyword(null,"prevent-default-keys","prevent-default-keys",1744205310)], null));
})], 0));
} else {
return null;
}
});
re_pressed.impl.add_key = (function re_pressed$impl$add_key(current_key_maps,new_key_map){
var keys = (cljs.core.truth_(new_key_map)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__5045__auto__ = current_key_maps;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new_key_map):current_key_maps);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take_last(re_pressed.impl.max_record,keys));
});
re_pressed.impl.__GT_set_key_BANG_ = (function re_pressed$impl$__GT_set_key_BANG_(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
return (function re_pressed$impl$__GT_set_key_BANG__$_set_key_BANG_(p__12404,p__12405){
var map__12406 = p__12404;
var map__12406__$1 = cljs.core.__destructure_map(map__12406);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12406__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12407 = p__12405;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12407,(0),null);
var key_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12407,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword(),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),re_pressed.impl.add_key,key_map)], null);
});
});
re_pressed.impl.__GT_clear_keys_BANG_ = (function re_pressed$impl$__GT_clear_keys_BANG_(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
return (function re_pressed$impl$__GT_clear_keys_BANG__$_clear_keys_BANG_(p__12410,p__12411){
var map__12412 = p__12410;
var map__12412__$1 = cljs.core.__destructure_map(map__12412);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12412__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12413 = p__12411;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12413,(0),null);
var key_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12413,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword(),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),cljs.core.PersistentVector.EMPTY)], null);
});
});
re_pressed.impl.prevent_default_keys_BANG_ = (function re_pressed$impl$prevent_default_keys_BANG_(_,p__12416){
var vec__12417 = p__12416;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12417,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12417,(1),null);
var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([re_pressed.impl.ns_root,"prevent-default"].join(''));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,e]);
});
re_pressed.impl.register_events = (function re_pressed$impl$register_events(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(ns_keyword("-set-key"),re_pressed.impl.__GT_set_key_BANG_(event_type));

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(ns_keyword("-clear-keys"),re_pressed.impl.__GT_clear_keys_BANG_(event_type));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",event_type)){
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(ns_keyword("-prevent-default-keys"),re_pressed.impl.prevent_default_keys_BANG_);
} else {
return null;
}
});
re_pressed.impl.register_effects = (function re_pressed$impl$register_effects(event_type){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",event_type)){
return re_frame.core.reg_fx(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([re_pressed.impl.ns_root,"prevent-default"].join('')),(function (e){
return e.preventDefault();
}));
} else {
return null;
}
});
re_frame.core.reg_fx(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([re_pressed.impl.ns_root,"keyboard-event"].join('')),(function (p__12420){
var map__12421 = p__12420;
var map__12421__$1 = cljs.core.__destructure_map(map__12421);
var keyboard_event_args = map__12421__$1;
var event_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12421__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
re_pressed.impl.register_subs(event_type);

re_pressed.impl.register_events(event_type);

re_pressed.impl.register_effects(event_type);

return goog.events.listen(document,event_type,(function (e){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([re_pressed.impl.ns_root,"handle-keyboard-event"].join('')),keyboard_event_args,e], null));
}));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([re_pressed.impl.ns_root,"handle-keyboard-event"].join('')),(function (p__12427,p__12428){
var map__12429 = p__12427;
var map__12429__$1 = cljs.core.__destructure_map(map__12429);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12429__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12430 = p__12428;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12430,(0),null);
var map__12433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12430,(1),null);
var map__12433__$1 = cljs.core.__destructure_map(map__12433);
var map__12434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12433__$1,new cljs.core.Keyword(null,"arguments","arguments",-1182834456));
var map__12434__$1 = cljs.core.__destructure_map(map__12434);
var clear_on_success_event_match = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12434__$1,new cljs.core.Keyword(null,"clear-on-success-event-match","clear-on-success-event-match",769810234));
var event_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12433__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12430,(2),null);
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
var e_key = e.keyCode;
var modifier_key_QMARK_ = (re_pressed.impl.modifier_keys.cljs$core$IFn$_invoke$arity$1 ? re_pressed.impl.modifier_keys.cljs$core$IFn$_invoke$arity$1(e_key) : re_pressed.impl.modifier_keys.call(null,e_key));
var tag_name = e.target.tagName;
var entering_input_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["SELECT",null,"INPUT",null,"TEXTAREA",null], null), null),tag_name);
var hit_key = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"altKey","altKey",-670253656),e.altKey,new cljs.core.Keyword(null,"ctrlKey","ctrlKey",430760908),e.ctrlKey,new cljs.core.Keyword(null,"metaKey","metaKey",1006742180),e.metaKey,new cljs.core.Keyword(null,"shiftKey","shiftKey",1716666823),e.shiftKey,new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),e.keyCode], null);
var map__12435 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,ns_keyword());
var map__12435__$1 = cljs.core.__destructure_map(map__12435);
var recent_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12435__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var always_listen_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12435__$1,new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050));
var prevent_default_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12435__$1,new cljs.core.Keyword(null,"prevent-default-keys","prevent-default-keys",1744205310));
var clear_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12435__$1,new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539));
var event_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12435__$1,new cljs.core.Keyword(null,"event-keys","event-keys",-835966631));
var always_listen_QMARK_ = cljs.core.some((function (p1__12422_SHARP_){
return re_pressed.impl.is_key_QMARK_(hit_key,p1__12422_SHARP_);
}),always_listen_keys);
if(cljs.core.truth_((function (){var or__5045__auto__ = ((cljs.core.not(modifier_key_QMARK_)) && ((!(entering_input_QMARK_))));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return always_listen_QMARK_;
}
})())){
var recent_keys__$1 = re_pressed.impl.add_key(recent_keys,hit_key);
var recent_key = cljs.core.last(recent_keys__$1);
var is_key_sequence_QMARK_ = (function (key_maps){
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p1__12423_SHARP_,p2__12424_SHARP_){
return re_pressed.impl.is_key_QMARK_(p1__12423_SHARP_,p2__12424_SHARP_);
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse(recent_keys__$1),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(re_pressed.impl.max_record,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.reverse(key_maps)));
});
var check_events = cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function re_pressed$impl$iter__12439(s__12440){
return (new cljs.core.LazySeq(null,(function (){
var s__12440__$1 = s__12440;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12440__$1);
if(temp__5804__auto__){
var s__12440__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12440__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12440__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12442 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12441 = (0);
while(true){
if((i__12441 < size__5522__auto__)){
var vec__12443 = cljs.core._nth(c__5521__auto__,i__12441);
var seq__12444 = cljs.core.seq(vec__12443);
var first__12445 = cljs.core.first(seq__12444);
var seq__12444__$1 = cljs.core.next(seq__12444);
var trigger_event = first__12445;
var ks = seq__12444__$1;
cljs.core.chunk_append(b__12442,(function (){var triggered_QMARK_ = cljs.core.some(is_key_sequence_QMARK_,ks);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[trigger_event,triggered_QMARK_],null));
})());

var G__12477 = (i__12441 + (1));
i__12441 = G__12477;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12442),re_pressed$impl$iter__12439(cljs.core.chunk_rest(s__12440__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12442),null);
}
} else {
var vec__12446 = cljs.core.first(s__12440__$2);
var seq__12447 = cljs.core.seq(vec__12446);
var first__12448 = cljs.core.first(seq__12447);
var seq__12447__$1 = cljs.core.next(seq__12447);
var trigger_event = first__12448;
var ks = seq__12447__$1;
return cljs.core.cons((function (){var triggered_QMARK_ = cljs.core.some(is_key_sequence_QMARK_,ks);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[trigger_event,triggered_QMARK_],null));
})(),re_pressed$impl$iter__12439(cljs.core.rest(s__12440__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(event_keys);
})());
var vec__12436 = (function (){var G__12449 = check_events;
var G__12449__$1 = (((G__12449 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12425_SHARP_){
return cljs.core.second(p1__12425_SHARP_) === true;
}),G__12449));
if((G__12449__$1 == null)){
return null;
} else {
return cljs.core.first(G__12449__$1);
}
})();
var triggered_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12436,(0),null);
var event_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12436,(1),null);
var clear_QMARK_ = cljs.core.some(is_key_sequence_QMARK_,clear_keys);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword(),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),(cljs.core.truth_((function (){var or__5045__auto__ = clear_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = event_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return clear_on_success_event_match;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.PersistentVector.EMPTY:recent_keys__$1)),new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (){var G__12450 = cljs.core.PersistentVector.EMPTY;
var G__12450__$1 = (cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",event_type);
if(and__5043__auto__){
return cljs.core.some((function (p1__12426_SHARP_){
return re_pressed.impl.is_key_QMARK_(recent_key,p1__12426_SHARP_);
}),prevent_default_keys);
} else {
return and__5043__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__12450,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword("-prevent-default-keys"),e], null)], null)):G__12450);
if(cljs.core.truth_(event_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__12450__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(triggered_event,e,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([recent_keys__$1], 0))], null));
} else {
return G__12450__$1;
}
})()], null);
} else {
return null;
}
}));

//# sourceMappingURL=re_pressed.impl.js.map
