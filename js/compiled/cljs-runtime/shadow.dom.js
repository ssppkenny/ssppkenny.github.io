goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_20899 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_20899(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_20900 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_20900(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__19671 = coll;
var G__19672 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__19671,G__19672) : shadow.dom.lazy_native_coll_seq.call(null,G__19671,G__19672));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__19702 = arguments.length;
switch (G__19702) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__19719 = arguments.length;
switch (G__19719) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__19728 = arguments.length;
switch (G__19728) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__19736 = arguments.length;
switch (G__19736) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__19764 = arguments.length;
switch (G__19764) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__19779 = arguments.length;
switch (G__19779) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e19790){if((e19790 instanceof Object)){
var e = e19790;
return console.log("didnt support attachEvent",el,e);
} else {
throw e19790;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__19797 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__19798 = null;
var count__19799 = (0);
var i__19800 = (0);
while(true){
if((i__19800 < count__19799)){
var el = chunk__19798.cljs$core$IIndexed$_nth$arity$2(null,i__19800);
var handler_20918__$1 = ((function (seq__19797,chunk__19798,count__19799,i__19800,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__19797,chunk__19798,count__19799,i__19800,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20918__$1);


var G__20919 = seq__19797;
var G__20920 = chunk__19798;
var G__20921 = count__19799;
var G__20922 = (i__19800 + (1));
seq__19797 = G__20919;
chunk__19798 = G__20920;
count__19799 = G__20921;
i__19800 = G__20922;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19797);
if(temp__5804__auto__){
var seq__19797__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19797__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19797__$1);
var G__20923 = cljs.core.chunk_rest(seq__19797__$1);
var G__20924 = c__5568__auto__;
var G__20925 = cljs.core.count(c__5568__auto__);
var G__20926 = (0);
seq__19797 = G__20923;
chunk__19798 = G__20924;
count__19799 = G__20925;
i__19800 = G__20926;
continue;
} else {
var el = cljs.core.first(seq__19797__$1);
var handler_20927__$1 = ((function (seq__19797,chunk__19798,count__19799,i__19800,el,seq__19797__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__19797,chunk__19798,count__19799,i__19800,el,seq__19797__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20927__$1);


var G__20928 = cljs.core.next(seq__19797__$1);
var G__20929 = null;
var G__20930 = (0);
var G__20931 = (0);
seq__19797 = G__20928;
chunk__19798 = G__20929;
count__19799 = G__20930;
i__19800 = G__20931;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__19822 = arguments.length;
switch (G__19822) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__19833 = cljs.core.seq(events);
var chunk__19834 = null;
var count__19835 = (0);
var i__19836 = (0);
while(true){
if((i__19836 < count__19835)){
var vec__19853 = chunk__19834.cljs$core$IIndexed$_nth$arity$2(null,i__19836);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19853,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19853,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20937 = seq__19833;
var G__20938 = chunk__19834;
var G__20939 = count__19835;
var G__20940 = (i__19836 + (1));
seq__19833 = G__20937;
chunk__19834 = G__20938;
count__19835 = G__20939;
i__19836 = G__20940;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19833);
if(temp__5804__auto__){
var seq__19833__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19833__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19833__$1);
var G__20941 = cljs.core.chunk_rest(seq__19833__$1);
var G__20942 = c__5568__auto__;
var G__20943 = cljs.core.count(c__5568__auto__);
var G__20944 = (0);
seq__19833 = G__20941;
chunk__19834 = G__20942;
count__19835 = G__20943;
i__19836 = G__20944;
continue;
} else {
var vec__19860 = cljs.core.first(seq__19833__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19860,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19860,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20945 = cljs.core.next(seq__19833__$1);
var G__20946 = null;
var G__20947 = (0);
var G__20948 = (0);
seq__19833 = G__20945;
chunk__19834 = G__20946;
count__19835 = G__20947;
i__19836 = G__20948;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__19868 = cljs.core.seq(styles);
var chunk__19869 = null;
var count__19870 = (0);
var i__19871 = (0);
while(true){
if((i__19871 < count__19870)){
var vec__19887 = chunk__19869.cljs$core$IIndexed$_nth$arity$2(null,i__19871);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19887,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19887,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__20953 = seq__19868;
var G__20954 = chunk__19869;
var G__20955 = count__19870;
var G__20956 = (i__19871 + (1));
seq__19868 = G__20953;
chunk__19869 = G__20954;
count__19870 = G__20955;
i__19871 = G__20956;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19868);
if(temp__5804__auto__){
var seq__19868__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19868__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19868__$1);
var G__20959 = cljs.core.chunk_rest(seq__19868__$1);
var G__20960 = c__5568__auto__;
var G__20961 = cljs.core.count(c__5568__auto__);
var G__20962 = (0);
seq__19868 = G__20959;
chunk__19869 = G__20960;
count__19870 = G__20961;
i__19871 = G__20962;
continue;
} else {
var vec__19895 = cljs.core.first(seq__19868__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19895,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19895,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__20963 = cljs.core.next(seq__19868__$1);
var G__20964 = null;
var G__20965 = (0);
var G__20966 = (0);
seq__19868 = G__20963;
chunk__19869 = G__20964;
count__19870 = G__20965;
i__19871 = G__20966;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__19901_20968 = key;
var G__19901_20969__$1 = (((G__19901_20968 instanceof cljs.core.Keyword))?G__19901_20968.fqn:null);
switch (G__19901_20969__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_20972 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_20972,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_20972,"aria-");
}
})())){
el.setAttribute(ks_20972,value);
} else {
(el[ks_20972] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__19936){
var map__19937 = p__19936;
var map__19937__$1 = cljs.core.__destructure_map(map__19937);
var props = map__19937__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19937__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__19939 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19939,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19939,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19939,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__19943 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__19943,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__19943;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__19945 = arguments.length;
switch (G__19945) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__19953){
var vec__19955 = p__19953;
var seq__19956 = cljs.core.seq(vec__19955);
var first__19957 = cljs.core.first(seq__19956);
var seq__19956__$1 = cljs.core.next(seq__19956);
var nn = first__19957;
var first__19957__$1 = cljs.core.first(seq__19956__$1);
var seq__19956__$2 = cljs.core.next(seq__19956__$1);
var np = first__19957__$1;
var nc = seq__19956__$2;
var node = vec__19955;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19961 = nn;
var G__19962 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__19961,G__19962) : create_fn.call(null,G__19961,G__19962));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19964 = nn;
var G__19965 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__19964,G__19965) : create_fn.call(null,G__19964,G__19965));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__19968 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19968,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19968,(1),null);
var seq__19972_21001 = cljs.core.seq(node_children);
var chunk__19973_21002 = null;
var count__19974_21003 = (0);
var i__19975_21004 = (0);
while(true){
if((i__19975_21004 < count__19974_21003)){
var child_struct_21005 = chunk__19973_21002.cljs$core$IIndexed$_nth$arity$2(null,i__19975_21004);
var children_21006 = shadow.dom.dom_node(child_struct_21005);
if(cljs.core.seq_QMARK_(children_21006)){
var seq__20045_21007 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21006));
var chunk__20047_21008 = null;
var count__20048_21009 = (0);
var i__20049_21010 = (0);
while(true){
if((i__20049_21010 < count__20048_21009)){
var child_21014 = chunk__20047_21008.cljs$core$IIndexed$_nth$arity$2(null,i__20049_21010);
if(cljs.core.truth_(child_21014)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21014);


var G__21015 = seq__20045_21007;
var G__21016 = chunk__20047_21008;
var G__21017 = count__20048_21009;
var G__21018 = (i__20049_21010 + (1));
seq__20045_21007 = G__21015;
chunk__20047_21008 = G__21016;
count__20048_21009 = G__21017;
i__20049_21010 = G__21018;
continue;
} else {
var G__21019 = seq__20045_21007;
var G__21020 = chunk__20047_21008;
var G__21021 = count__20048_21009;
var G__21022 = (i__20049_21010 + (1));
seq__20045_21007 = G__21019;
chunk__20047_21008 = G__21020;
count__20048_21009 = G__21021;
i__20049_21010 = G__21022;
continue;
}
} else {
var temp__5804__auto___21023 = cljs.core.seq(seq__20045_21007);
if(temp__5804__auto___21023){
var seq__20045_21024__$1 = temp__5804__auto___21023;
if(cljs.core.chunked_seq_QMARK_(seq__20045_21024__$1)){
var c__5568__auto___21025 = cljs.core.chunk_first(seq__20045_21024__$1);
var G__21026 = cljs.core.chunk_rest(seq__20045_21024__$1);
var G__21027 = c__5568__auto___21025;
var G__21028 = cljs.core.count(c__5568__auto___21025);
var G__21029 = (0);
seq__20045_21007 = G__21026;
chunk__20047_21008 = G__21027;
count__20048_21009 = G__21028;
i__20049_21010 = G__21029;
continue;
} else {
var child_21033 = cljs.core.first(seq__20045_21024__$1);
if(cljs.core.truth_(child_21033)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21033);


var G__21034 = cljs.core.next(seq__20045_21024__$1);
var G__21035 = null;
var G__21036 = (0);
var G__21037 = (0);
seq__20045_21007 = G__21034;
chunk__20047_21008 = G__21035;
count__20048_21009 = G__21036;
i__20049_21010 = G__21037;
continue;
} else {
var G__21038 = cljs.core.next(seq__20045_21024__$1);
var G__21039 = null;
var G__21040 = (0);
var G__21041 = (0);
seq__20045_21007 = G__21038;
chunk__20047_21008 = G__21039;
count__20048_21009 = G__21040;
i__20049_21010 = G__21041;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21006);
}


var G__21042 = seq__19972_21001;
var G__21043 = chunk__19973_21002;
var G__21044 = count__19974_21003;
var G__21045 = (i__19975_21004 + (1));
seq__19972_21001 = G__21042;
chunk__19973_21002 = G__21043;
count__19974_21003 = G__21044;
i__19975_21004 = G__21045;
continue;
} else {
var temp__5804__auto___21046 = cljs.core.seq(seq__19972_21001);
if(temp__5804__auto___21046){
var seq__19972_21047__$1 = temp__5804__auto___21046;
if(cljs.core.chunked_seq_QMARK_(seq__19972_21047__$1)){
var c__5568__auto___21048 = cljs.core.chunk_first(seq__19972_21047__$1);
var G__21049 = cljs.core.chunk_rest(seq__19972_21047__$1);
var G__21050 = c__5568__auto___21048;
var G__21051 = cljs.core.count(c__5568__auto___21048);
var G__21052 = (0);
seq__19972_21001 = G__21049;
chunk__19973_21002 = G__21050;
count__19974_21003 = G__21051;
i__19975_21004 = G__21052;
continue;
} else {
var child_struct_21053 = cljs.core.first(seq__19972_21047__$1);
var children_21054 = shadow.dom.dom_node(child_struct_21053);
if(cljs.core.seq_QMARK_(children_21054)){
var seq__20060_21055 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21054));
var chunk__20062_21059 = null;
var count__20063_21060 = (0);
var i__20064_21061 = (0);
while(true){
if((i__20064_21061 < count__20063_21060)){
var child_21062 = chunk__20062_21059.cljs$core$IIndexed$_nth$arity$2(null,i__20064_21061);
if(cljs.core.truth_(child_21062)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21062);


var G__21063 = seq__20060_21055;
var G__21064 = chunk__20062_21059;
var G__21065 = count__20063_21060;
var G__21066 = (i__20064_21061 + (1));
seq__20060_21055 = G__21063;
chunk__20062_21059 = G__21064;
count__20063_21060 = G__21065;
i__20064_21061 = G__21066;
continue;
} else {
var G__21067 = seq__20060_21055;
var G__21068 = chunk__20062_21059;
var G__21069 = count__20063_21060;
var G__21070 = (i__20064_21061 + (1));
seq__20060_21055 = G__21067;
chunk__20062_21059 = G__21068;
count__20063_21060 = G__21069;
i__20064_21061 = G__21070;
continue;
}
} else {
var temp__5804__auto___21071__$1 = cljs.core.seq(seq__20060_21055);
if(temp__5804__auto___21071__$1){
var seq__20060_21072__$1 = temp__5804__auto___21071__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20060_21072__$1)){
var c__5568__auto___21073 = cljs.core.chunk_first(seq__20060_21072__$1);
var G__21074 = cljs.core.chunk_rest(seq__20060_21072__$1);
var G__21075 = c__5568__auto___21073;
var G__21076 = cljs.core.count(c__5568__auto___21073);
var G__21077 = (0);
seq__20060_21055 = G__21074;
chunk__20062_21059 = G__21075;
count__20063_21060 = G__21076;
i__20064_21061 = G__21077;
continue;
} else {
var child_21078 = cljs.core.first(seq__20060_21072__$1);
if(cljs.core.truth_(child_21078)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21078);


var G__21079 = cljs.core.next(seq__20060_21072__$1);
var G__21080 = null;
var G__21081 = (0);
var G__21082 = (0);
seq__20060_21055 = G__21079;
chunk__20062_21059 = G__21080;
count__20063_21060 = G__21081;
i__20064_21061 = G__21082;
continue;
} else {
var G__21083 = cljs.core.next(seq__20060_21072__$1);
var G__21084 = null;
var G__21085 = (0);
var G__21086 = (0);
seq__20060_21055 = G__21083;
chunk__20062_21059 = G__21084;
count__20063_21060 = G__21085;
i__20064_21061 = G__21086;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21054);
}


var G__21087 = cljs.core.next(seq__19972_21047__$1);
var G__21088 = null;
var G__21089 = (0);
var G__21090 = (0);
seq__19972_21001 = G__21087;
chunk__19973_21002 = G__21088;
count__19974_21003 = G__21089;
i__19975_21004 = G__21090;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__20082 = cljs.core.seq(node);
var chunk__20083 = null;
var count__20084 = (0);
var i__20085 = (0);
while(true){
if((i__20085 < count__20084)){
var n = chunk__20083.cljs$core$IIndexed$_nth$arity$2(null,i__20085);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21096 = seq__20082;
var G__21097 = chunk__20083;
var G__21098 = count__20084;
var G__21099 = (i__20085 + (1));
seq__20082 = G__21096;
chunk__20083 = G__21097;
count__20084 = G__21098;
i__20085 = G__21099;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20082);
if(temp__5804__auto__){
var seq__20082__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20082__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20082__$1);
var G__21102 = cljs.core.chunk_rest(seq__20082__$1);
var G__21103 = c__5568__auto__;
var G__21104 = cljs.core.count(c__5568__auto__);
var G__21105 = (0);
seq__20082 = G__21102;
chunk__20083 = G__21103;
count__20084 = G__21104;
i__20085 = G__21105;
continue;
} else {
var n = cljs.core.first(seq__20082__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21106 = cljs.core.next(seq__20082__$1);
var G__21107 = null;
var G__21108 = (0);
var G__21109 = (0);
seq__20082 = G__21106;
chunk__20083 = G__21107;
count__20084 = G__21108;
i__20085 = G__21109;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__20106 = arguments.length;
switch (G__20106) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__20115 = arguments.length;
switch (G__20115) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__20125 = arguments.length;
switch (G__20125) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21132 = arguments.length;
var i__5770__auto___21133 = (0);
while(true){
if((i__5770__auto___21133 < len__5769__auto___21132)){
args__5775__auto__.push((arguments[i__5770__auto___21133]));

var G__21134 = (i__5770__auto___21133 + (1));
i__5770__auto___21133 = G__21134;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__20136_21139 = cljs.core.seq(nodes);
var chunk__20137_21140 = null;
var count__20138_21141 = (0);
var i__20139_21142 = (0);
while(true){
if((i__20139_21142 < count__20138_21141)){
var node_21143 = chunk__20137_21140.cljs$core$IIndexed$_nth$arity$2(null,i__20139_21142);
fragment.appendChild(shadow.dom._to_dom(node_21143));


var G__21144 = seq__20136_21139;
var G__21145 = chunk__20137_21140;
var G__21146 = count__20138_21141;
var G__21147 = (i__20139_21142 + (1));
seq__20136_21139 = G__21144;
chunk__20137_21140 = G__21145;
count__20138_21141 = G__21146;
i__20139_21142 = G__21147;
continue;
} else {
var temp__5804__auto___21148 = cljs.core.seq(seq__20136_21139);
if(temp__5804__auto___21148){
var seq__20136_21149__$1 = temp__5804__auto___21148;
if(cljs.core.chunked_seq_QMARK_(seq__20136_21149__$1)){
var c__5568__auto___21150 = cljs.core.chunk_first(seq__20136_21149__$1);
var G__21151 = cljs.core.chunk_rest(seq__20136_21149__$1);
var G__21152 = c__5568__auto___21150;
var G__21153 = cljs.core.count(c__5568__auto___21150);
var G__21154 = (0);
seq__20136_21139 = G__21151;
chunk__20137_21140 = G__21152;
count__20138_21141 = G__21153;
i__20139_21142 = G__21154;
continue;
} else {
var node_21155 = cljs.core.first(seq__20136_21149__$1);
fragment.appendChild(shadow.dom._to_dom(node_21155));


var G__21156 = cljs.core.next(seq__20136_21149__$1);
var G__21157 = null;
var G__21158 = (0);
var G__21159 = (0);
seq__20136_21139 = G__21156;
chunk__20137_21140 = G__21157;
count__20138_21141 = G__21158;
i__20139_21142 = G__21159;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq20129){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20129));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__20157_21160 = cljs.core.seq(scripts);
var chunk__20159_21161 = null;
var count__20160_21162 = (0);
var i__20161_21163 = (0);
while(true){
if((i__20161_21163 < count__20160_21162)){
var vec__20173_21164 = chunk__20159_21161.cljs$core$IIndexed$_nth$arity$2(null,i__20161_21163);
var script_tag_21165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20173_21164,(0),null);
var script_body_21166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20173_21164,(1),null);
eval(script_body_21166);


var G__21168 = seq__20157_21160;
var G__21169 = chunk__20159_21161;
var G__21170 = count__20160_21162;
var G__21171 = (i__20161_21163 + (1));
seq__20157_21160 = G__21168;
chunk__20159_21161 = G__21169;
count__20160_21162 = G__21170;
i__20161_21163 = G__21171;
continue;
} else {
var temp__5804__auto___21172 = cljs.core.seq(seq__20157_21160);
if(temp__5804__auto___21172){
var seq__20157_21173__$1 = temp__5804__auto___21172;
if(cljs.core.chunked_seq_QMARK_(seq__20157_21173__$1)){
var c__5568__auto___21174 = cljs.core.chunk_first(seq__20157_21173__$1);
var G__21175 = cljs.core.chunk_rest(seq__20157_21173__$1);
var G__21176 = c__5568__auto___21174;
var G__21177 = cljs.core.count(c__5568__auto___21174);
var G__21178 = (0);
seq__20157_21160 = G__21175;
chunk__20159_21161 = G__21176;
count__20160_21162 = G__21177;
i__20161_21163 = G__21178;
continue;
} else {
var vec__20177_21179 = cljs.core.first(seq__20157_21173__$1);
var script_tag_21180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20177_21179,(0),null);
var script_body_21181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20177_21179,(1),null);
eval(script_body_21181);


var G__21182 = cljs.core.next(seq__20157_21173__$1);
var G__21183 = null;
var G__21184 = (0);
var G__21185 = (0);
seq__20157_21160 = G__21182;
chunk__20159_21161 = G__21183;
count__20160_21162 = G__21184;
i__20161_21163 = G__21185;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__20186){
var vec__20191 = p__20186;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20191,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20191,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__20214 = arguments.length;
switch (G__20214) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__20235 = cljs.core.seq(style_keys);
var chunk__20236 = null;
var count__20237 = (0);
var i__20238 = (0);
while(true){
if((i__20238 < count__20237)){
var it = chunk__20236.cljs$core$IIndexed$_nth$arity$2(null,i__20238);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21190 = seq__20235;
var G__21191 = chunk__20236;
var G__21192 = count__20237;
var G__21193 = (i__20238 + (1));
seq__20235 = G__21190;
chunk__20236 = G__21191;
count__20237 = G__21192;
i__20238 = G__21193;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20235);
if(temp__5804__auto__){
var seq__20235__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20235__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20235__$1);
var G__21195 = cljs.core.chunk_rest(seq__20235__$1);
var G__21196 = c__5568__auto__;
var G__21197 = cljs.core.count(c__5568__auto__);
var G__21198 = (0);
seq__20235 = G__21195;
chunk__20236 = G__21196;
count__20237 = G__21197;
i__20238 = G__21198;
continue;
} else {
var it = cljs.core.first(seq__20235__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21199 = cljs.core.next(seq__20235__$1);
var G__21200 = null;
var G__21201 = (0);
var G__21202 = (0);
seq__20235 = G__21199;
chunk__20236 = G__21200;
count__20237 = G__21201;
i__20238 = G__21202;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20249,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20261 = k20249;
var G__20261__$1 = (((G__20261 instanceof cljs.core.Keyword))?G__20261.fqn:null);
switch (G__20261__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20249,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20269){
var vec__20270 = p__20269;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20270,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20270,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20248){
var self__ = this;
var G__20248__$1 = this;
return (new cljs.core.RecordIter((0),G__20248__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20250,other20251){
var self__ = this;
var this20250__$1 = this;
return (((!((other20251 == null)))) && ((((this20250__$1.constructor === other20251.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20250__$1.x,other20251.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20250__$1.y,other20251.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20250__$1.__extmap,other20251.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20249){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20306 = k20249;
var G__20306__$1 = (((G__20306 instanceof cljs.core.Keyword))?G__20306.fqn:null);
switch (G__20306__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20249);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20248){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20310 = cljs.core.keyword_identical_QMARK_;
var expr__20311 = k__5352__auto__;
if(cljs.core.truth_((pred__20310.cljs$core$IFn$_invoke$arity$2 ? pred__20310.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__20311) : pred__20310.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__20311)))){
return (new shadow.dom.Coordinate(G__20248,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20310.cljs$core$IFn$_invoke$arity$2 ? pred__20310.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__20311) : pred__20310.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__20311)))){
return (new shadow.dom.Coordinate(self__.x,G__20248,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20248),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20248){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__20248,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__20254){
var extmap__5385__auto__ = (function (){var G__20360 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20254,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__20254)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20360);
} else {
return G__20360;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__20254),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__20254),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20398,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20438 = k20398;
var G__20438__$1 = (((G__20438 instanceof cljs.core.Keyword))?G__20438.fqn:null);
switch (G__20438__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20398,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20439){
var vec__20440 = p__20439;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20440,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20440,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20397){
var self__ = this;
var G__20397__$1 = this;
return (new cljs.core.RecordIter((0),G__20397__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20399,other20400){
var self__ = this;
var this20399__$1 = this;
return (((!((other20400 == null)))) && ((((this20399__$1.constructor === other20400.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20399__$1.w,other20400.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20399__$1.h,other20400.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20399__$1.__extmap,other20400.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20398){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20487 = k20398;
var G__20487__$1 = (((G__20487 instanceof cljs.core.Keyword))?G__20487.fqn:null);
switch (G__20487__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20398);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20397){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20489 = cljs.core.keyword_identical_QMARK_;
var expr__20490 = k__5352__auto__;
if(cljs.core.truth_((pred__20489.cljs$core$IFn$_invoke$arity$2 ? pred__20489.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__20490) : pred__20489.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__20490)))){
return (new shadow.dom.Size(G__20397,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20489.cljs$core$IFn$_invoke$arity$2 ? pred__20489.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__20490) : pred__20489.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__20490)))){
return (new shadow.dom.Size(self__.w,G__20397,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20397),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20397){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__20397,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__20416){
var extmap__5385__auto__ = (function (){var G__20554 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20416,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__20416)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20554);
} else {
return G__20554;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__20416),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__20416),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__21210 = (i + (1));
var G__21211 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__21210;
ret = G__21211;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20611){
var vec__20612 = p__20611;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20612,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20612,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__20624 = arguments.length;
switch (G__20624) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__21213 = ps;
var G__21214 = (i + (1));
el__$1 = G__21213;
i = G__21214;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__20727 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20727,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20727,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20727,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__20734_21215 = cljs.core.seq(props);
var chunk__20735_21216 = null;
var count__20736_21217 = (0);
var i__20737_21218 = (0);
while(true){
if((i__20737_21218 < count__20736_21217)){
var vec__20752_21219 = chunk__20735_21216.cljs$core$IIndexed$_nth$arity$2(null,i__20737_21218);
var k_21220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20752_21219,(0),null);
var v_21221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20752_21219,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_21220);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21220),v_21221);


var G__21222 = seq__20734_21215;
var G__21223 = chunk__20735_21216;
var G__21224 = count__20736_21217;
var G__21225 = (i__20737_21218 + (1));
seq__20734_21215 = G__21222;
chunk__20735_21216 = G__21223;
count__20736_21217 = G__21224;
i__20737_21218 = G__21225;
continue;
} else {
var temp__5804__auto___21226 = cljs.core.seq(seq__20734_21215);
if(temp__5804__auto___21226){
var seq__20734_21227__$1 = temp__5804__auto___21226;
if(cljs.core.chunked_seq_QMARK_(seq__20734_21227__$1)){
var c__5568__auto___21228 = cljs.core.chunk_first(seq__20734_21227__$1);
var G__21229 = cljs.core.chunk_rest(seq__20734_21227__$1);
var G__21230 = c__5568__auto___21228;
var G__21231 = cljs.core.count(c__5568__auto___21228);
var G__21232 = (0);
seq__20734_21215 = G__21229;
chunk__20735_21216 = G__21230;
count__20736_21217 = G__21231;
i__20737_21218 = G__21232;
continue;
} else {
var vec__20759_21233 = cljs.core.first(seq__20734_21227__$1);
var k_21234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20759_21233,(0),null);
var v_21235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20759_21233,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_21234);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21234),v_21235);


var G__21236 = cljs.core.next(seq__20734_21227__$1);
var G__21237 = null;
var G__21238 = (0);
var G__21239 = (0);
seq__20734_21215 = G__21236;
chunk__20735_21216 = G__21237;
count__20736_21217 = G__21238;
i__20737_21218 = G__21239;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__20769 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20769,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20769,(1),null);
var seq__20772_21240 = cljs.core.seq(node_children);
var chunk__20774_21241 = null;
var count__20775_21242 = (0);
var i__20776_21243 = (0);
while(true){
if((i__20776_21243 < count__20775_21242)){
var child_struct_21244 = chunk__20774_21241.cljs$core$IIndexed$_nth$arity$2(null,i__20776_21243);
if((!((child_struct_21244 == null)))){
if(typeof child_struct_21244 === 'string'){
var text_21245 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21245),child_struct_21244].join(''));
} else {
var children_21246 = shadow.dom.svg_node(child_struct_21244);
if(cljs.core.seq_QMARK_(children_21246)){
var seq__20803_21247 = cljs.core.seq(children_21246);
var chunk__20805_21248 = null;
var count__20806_21249 = (0);
var i__20807_21250 = (0);
while(true){
if((i__20807_21250 < count__20806_21249)){
var child_21251 = chunk__20805_21248.cljs$core$IIndexed$_nth$arity$2(null,i__20807_21250);
if(cljs.core.truth_(child_21251)){
node.appendChild(child_21251);


var G__21252 = seq__20803_21247;
var G__21253 = chunk__20805_21248;
var G__21254 = count__20806_21249;
var G__21255 = (i__20807_21250 + (1));
seq__20803_21247 = G__21252;
chunk__20805_21248 = G__21253;
count__20806_21249 = G__21254;
i__20807_21250 = G__21255;
continue;
} else {
var G__21256 = seq__20803_21247;
var G__21257 = chunk__20805_21248;
var G__21258 = count__20806_21249;
var G__21259 = (i__20807_21250 + (1));
seq__20803_21247 = G__21256;
chunk__20805_21248 = G__21257;
count__20806_21249 = G__21258;
i__20807_21250 = G__21259;
continue;
}
} else {
var temp__5804__auto___21260 = cljs.core.seq(seq__20803_21247);
if(temp__5804__auto___21260){
var seq__20803_21261__$1 = temp__5804__auto___21260;
if(cljs.core.chunked_seq_QMARK_(seq__20803_21261__$1)){
var c__5568__auto___21262 = cljs.core.chunk_first(seq__20803_21261__$1);
var G__21263 = cljs.core.chunk_rest(seq__20803_21261__$1);
var G__21264 = c__5568__auto___21262;
var G__21265 = cljs.core.count(c__5568__auto___21262);
var G__21266 = (0);
seq__20803_21247 = G__21263;
chunk__20805_21248 = G__21264;
count__20806_21249 = G__21265;
i__20807_21250 = G__21266;
continue;
} else {
var child_21267 = cljs.core.first(seq__20803_21261__$1);
if(cljs.core.truth_(child_21267)){
node.appendChild(child_21267);


var G__21268 = cljs.core.next(seq__20803_21261__$1);
var G__21269 = null;
var G__21270 = (0);
var G__21271 = (0);
seq__20803_21247 = G__21268;
chunk__20805_21248 = G__21269;
count__20806_21249 = G__21270;
i__20807_21250 = G__21271;
continue;
} else {
var G__21272 = cljs.core.next(seq__20803_21261__$1);
var G__21273 = null;
var G__21274 = (0);
var G__21275 = (0);
seq__20803_21247 = G__21272;
chunk__20805_21248 = G__21273;
count__20806_21249 = G__21274;
i__20807_21250 = G__21275;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21246);
}
}


var G__21276 = seq__20772_21240;
var G__21277 = chunk__20774_21241;
var G__21278 = count__20775_21242;
var G__21279 = (i__20776_21243 + (1));
seq__20772_21240 = G__21276;
chunk__20774_21241 = G__21277;
count__20775_21242 = G__21278;
i__20776_21243 = G__21279;
continue;
} else {
var G__21280 = seq__20772_21240;
var G__21281 = chunk__20774_21241;
var G__21282 = count__20775_21242;
var G__21283 = (i__20776_21243 + (1));
seq__20772_21240 = G__21280;
chunk__20774_21241 = G__21281;
count__20775_21242 = G__21282;
i__20776_21243 = G__21283;
continue;
}
} else {
var temp__5804__auto___21284 = cljs.core.seq(seq__20772_21240);
if(temp__5804__auto___21284){
var seq__20772_21285__$1 = temp__5804__auto___21284;
if(cljs.core.chunked_seq_QMARK_(seq__20772_21285__$1)){
var c__5568__auto___21286 = cljs.core.chunk_first(seq__20772_21285__$1);
var G__21287 = cljs.core.chunk_rest(seq__20772_21285__$1);
var G__21288 = c__5568__auto___21286;
var G__21289 = cljs.core.count(c__5568__auto___21286);
var G__21290 = (0);
seq__20772_21240 = G__21287;
chunk__20774_21241 = G__21288;
count__20775_21242 = G__21289;
i__20776_21243 = G__21290;
continue;
} else {
var child_struct_21291 = cljs.core.first(seq__20772_21285__$1);
if((!((child_struct_21291 == null)))){
if(typeof child_struct_21291 === 'string'){
var text_21292 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21292),child_struct_21291].join(''));
} else {
var children_21293 = shadow.dom.svg_node(child_struct_21291);
if(cljs.core.seq_QMARK_(children_21293)){
var seq__20823_21295 = cljs.core.seq(children_21293);
var chunk__20825_21296 = null;
var count__20826_21297 = (0);
var i__20827_21298 = (0);
while(true){
if((i__20827_21298 < count__20826_21297)){
var child_21299 = chunk__20825_21296.cljs$core$IIndexed$_nth$arity$2(null,i__20827_21298);
if(cljs.core.truth_(child_21299)){
node.appendChild(child_21299);


var G__21300 = seq__20823_21295;
var G__21301 = chunk__20825_21296;
var G__21302 = count__20826_21297;
var G__21303 = (i__20827_21298 + (1));
seq__20823_21295 = G__21300;
chunk__20825_21296 = G__21301;
count__20826_21297 = G__21302;
i__20827_21298 = G__21303;
continue;
} else {
var G__21304 = seq__20823_21295;
var G__21305 = chunk__20825_21296;
var G__21306 = count__20826_21297;
var G__21307 = (i__20827_21298 + (1));
seq__20823_21295 = G__21304;
chunk__20825_21296 = G__21305;
count__20826_21297 = G__21306;
i__20827_21298 = G__21307;
continue;
}
} else {
var temp__5804__auto___21308__$1 = cljs.core.seq(seq__20823_21295);
if(temp__5804__auto___21308__$1){
var seq__20823_21309__$1 = temp__5804__auto___21308__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20823_21309__$1)){
var c__5568__auto___21310 = cljs.core.chunk_first(seq__20823_21309__$1);
var G__21311 = cljs.core.chunk_rest(seq__20823_21309__$1);
var G__21312 = c__5568__auto___21310;
var G__21313 = cljs.core.count(c__5568__auto___21310);
var G__21314 = (0);
seq__20823_21295 = G__21311;
chunk__20825_21296 = G__21312;
count__20826_21297 = G__21313;
i__20827_21298 = G__21314;
continue;
} else {
var child_21315 = cljs.core.first(seq__20823_21309__$1);
if(cljs.core.truth_(child_21315)){
node.appendChild(child_21315);


var G__21316 = cljs.core.next(seq__20823_21309__$1);
var G__21317 = null;
var G__21318 = (0);
var G__21319 = (0);
seq__20823_21295 = G__21316;
chunk__20825_21296 = G__21317;
count__20826_21297 = G__21318;
i__20827_21298 = G__21319;
continue;
} else {
var G__21320 = cljs.core.next(seq__20823_21309__$1);
var G__21321 = null;
var G__21322 = (0);
var G__21323 = (0);
seq__20823_21295 = G__21320;
chunk__20825_21296 = G__21321;
count__20826_21297 = G__21322;
i__20827_21298 = G__21323;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21293);
}
}


var G__21324 = cljs.core.next(seq__20772_21285__$1);
var G__21325 = null;
var G__21326 = (0);
var G__21327 = (0);
seq__20772_21240 = G__21324;
chunk__20774_21241 = G__21325;
count__20775_21242 = G__21326;
i__20776_21243 = G__21327;
continue;
} else {
var G__21328 = cljs.core.next(seq__20772_21285__$1);
var G__21329 = null;
var G__21330 = (0);
var G__21331 = (0);
seq__20772_21240 = G__21328;
chunk__20774_21241 = G__21329;
count__20775_21242 = G__21330;
i__20776_21243 = G__21331;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21332 = arguments.length;
var i__5770__auto___21333 = (0);
while(true){
if((i__5770__auto___21333 < len__5769__auto___21332)){
args__5775__auto__.push((arguments[i__5770__auto___21333]));

var G__21334 = (i__5770__auto___21333 + (1));
i__5770__auto___21333 = G__21334;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq20847){
var G__20848 = cljs.core.first(seq20847);
var seq20847__$1 = cljs.core.next(seq20847);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20848,seq20847__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__20855 = arguments.length;
switch (G__20855) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__17266__auto___21336 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17267__auto__ = (function (){var switch__17099__auto__ = (function (state_20874){
var state_val_20875 = (state_20874[(1)]);
if((state_val_20875 === (1))){
var state_20874__$1 = state_20874;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20874__$1,(2),once_or_cleanup);
} else {
if((state_val_20875 === (2))){
var inst_20871 = (state_20874[(2)]);
var inst_20872 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_20874__$1 = (function (){var statearr_20878 = state_20874;
(statearr_20878[(7)] = inst_20871);

return statearr_20878;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20874__$1,inst_20872);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__17100__auto__ = null;
var shadow$dom$state_machine__17100__auto____0 = (function (){
var statearr_20881 = [null,null,null,null,null,null,null,null];
(statearr_20881[(0)] = shadow$dom$state_machine__17100__auto__);

(statearr_20881[(1)] = (1));

return statearr_20881;
});
var shadow$dom$state_machine__17100__auto____1 = (function (state_20874){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_20874);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e20884){var ex__17103__auto__ = e20884;
var statearr_20885_21337 = state_20874;
(statearr_20885_21337[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_20874[(4)]))){
var statearr_20886_21338 = state_20874;
(statearr_20886_21338[(1)] = cljs.core.first((state_20874[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21339 = state_20874;
state_20874 = G__21339;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
shadow$dom$state_machine__17100__auto__ = function(state_20874){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__17100__auto____0.call(this);
case 1:
return shadow$dom$state_machine__17100__auto____1.call(this,state_20874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__17100__auto____0;
shadow$dom$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__17100__auto____1;
return shadow$dom$state_machine__17100__auto__;
})()
})();
var state__17268__auto__ = (function (){var statearr_20887 = f__17267__auto__();
(statearr_20887[(6)] = c__17266__auto___21336);

return statearr_20887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17268__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
