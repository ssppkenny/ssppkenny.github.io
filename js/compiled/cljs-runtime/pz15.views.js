goog.provide('pz15.views');
pz15.views.dispatch_keypress_rules = (function pz15$views$dispatch_keypress_rules(){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","set-keypress-rules","re-pressed.core/set-keypress-rules",1541561860),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-keys","event-keys",-835966631),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-left","pz15.events/key-left",-945053855),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(72)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-right","pz15.events/key-right",898237066),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(76)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-up","pz15.events/key-up",-193450930),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(75)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-down","pz15.events/key-down",-1790263068),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(74)], null)], null)], null)], null),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(27)], null)], null)], null)], null)], null));
});
pz15.views.dispatch_keydown_rules = (function pz15$views$dispatch_keydown_rules(){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","set-keydown-rules","re-pressed.core/set-keydown-rules",1002257871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-keys","event-keys",-835966631),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","shuffle","pz15.events/shuffle",349000693),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(32)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-left","pz15.events/key-left",-945053855),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(72)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(37)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-right","pz15.events/key-right",898237066),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(76)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(39)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-up","pz15.events/key-up",-193450930),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(75)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(38)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","new-solve","pz15.events/new-solve",-1876562329),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(83)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-down","pz15.events/key-down",-1790263068),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(74)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(40)], null)], null)], null)], null),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(27)], null)], null)], null)], null)], null));
});
pz15.views.send_key_event = (function pz15$views$send_key_event(e,solving){
if(cljs.core.not(solving)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(1)], null));
} else {
return null;
}
});
pz15.views.send_shuffle = (function pz15$views$send_shuffle(solving){
if(cljs.core.not(solving)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","shuffle","pz15.events/shuffle",349000693),(1)], null));
} else {
return null;
}
});
pz15.views.main_panel = (function pz15$views$main_panel(){
var state = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.subs","state","pz15.subs/state",1442340386)], null));
var solving = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.subs","solving","pz15.subs/solving",689005368)], null));
var field = state;
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return pz15.views.dispatch_keydown_rules();
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
var show_progress = cljs.core.deref(solving);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-container","div.main-container",1274886367),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title-box","div.title-box",-369465970),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"25px"], null)], null),"15 Puzzle"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game-box","div.game-box",1309208973),(function (){var iter__5523__auto__ = (function pz15$views$main_panel_$_iter__17357(s__17358){
return (new cljs.core.LazySeq(null,(function (){
var s__17358__$1 = s__17358;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17358__$1);
if(temp__5804__auto__){
var s__17358__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17358__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17358__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17360 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17359 = (0);
while(true){
if((i__17359 < size__5522__auto__)){
var l = cljs.core._nth(c__5521__auto__,i__17359);
cljs.core.chunk_append(b__17360,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(function (){var iter__5523__auto__ = ((function (i__17359,l,c__5521__auto__,size__5522__auto__,b__17360,s__17358__$2,temp__5804__auto__,show_progress,field,state,solving){
return (function pz15$views$main_panel_$_iter__17357_$_iter__17361(s__17362){
return (new cljs.core.LazySeq(null,((function (i__17359,l,c__5521__auto__,size__5522__auto__,b__17360,s__17358__$2,temp__5804__auto__,show_progress,field,state,solving){
return (function (){
var s__17362__$1 = s__17362;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__17362__$1);
if(temp__5804__auto____$1){
var s__17362__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17362__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__17362__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__17364 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__17363 = (0);
while(true){
if((i__17363 < size__5522__auto____$1)){
var vec__17365 = cljs.core._nth(c__5521__auto____$1,i__17363);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17365,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17365,(1),null);
cljs.core.chunk_append(b__17364,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell","div.cell",1471979620),(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),["images/t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/empty.png",new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)));

var G__17381 = (i__17363 + (1));
i__17363 = G__17381;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17364),pz15$views$main_panel_$_iter__17357_$_iter__17361(cljs.core.chunk_rest(s__17362__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17364),null);
}
} else {
var vec__17368 = cljs.core.first(s__17362__$2);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17368,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17368,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell","div.cell",1471979620),(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),["images/t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/empty.png",new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)),pz15$views$main_panel_$_iter__17357_$_iter__17361(cljs.core.rest(s__17362__$2)));
}
} else {
return null;
}
break;
}
});})(i__17359,l,c__5521__auto__,size__5522__auto__,b__17360,s__17358__$2,temp__5804__auto__,show_progress,field,state,solving))
,null,null));
});})(i__17359,l,c__5521__auto__,size__5522__auto__,b__17360,s__17358__$2,temp__5804__auto__,show_progress,field,state,solving))
;
return iter__5523__auto__(l);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)));

var G__17382 = (i__17359 + (1));
i__17359 = G__17382;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17360),pz15$views$main_panel_$_iter__17357(cljs.core.chunk_rest(s__17358__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17360),null);
}
} else {
var l = cljs.core.first(s__17358__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(function (){var iter__5523__auto__ = ((function (l,s__17358__$2,temp__5804__auto__,show_progress,field,state,solving){
return (function pz15$views$main_panel_$_iter__17357_$_iter__17371(s__17372){
return (new cljs.core.LazySeq(null,(function (){
var s__17372__$1 = s__17372;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__17372__$1);
if(temp__5804__auto____$1){
var s__17372__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17372__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17372__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17374 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17373 = (0);
while(true){
if((i__17373 < size__5522__auto__)){
var vec__17375 = cljs.core._nth(c__5521__auto__,i__17373);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17375,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17375,(1),null);
cljs.core.chunk_append(b__17374,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell","div.cell",1471979620),(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),["images/t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/empty.png",new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)));

var G__17383 = (i__17373 + (1));
i__17373 = G__17383;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17374),pz15$views$main_panel_$_iter__17357_$_iter__17371(cljs.core.chunk_rest(s__17372__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17374),null);
}
} else {
var vec__17378 = cljs.core.first(s__17372__$2);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17378,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17378,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell","div.cell",1471979620),(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),["images/t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/empty.png",new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)),pz15$views$main_panel_$_iter__17357_$_iter__17371(cljs.core.rest(s__17372__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(l,s__17358__$2,temp__5804__auto__,show_progress,field,state,solving))
;
return iter__5523__auto__(l);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)),pz15$views$main_panel_$_iter__17357(cljs.core.rest(s__17358__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(field)));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null),(cljs.core.truth_(show_progress)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/wait.gif",new cljs.core.Keyword(null,"width","width",-384071477),"30px"], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(field),pz15.bfs.target_state))?"Solved!!!":"")], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/up.jpg",new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

return pz15.views.send_key_event(new cljs.core.Keyword("pz15.events","key-up","pz15.events/key-up",-193450930),cljs.core.deref(solving));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/down.jpg",new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

return pz15.views.send_key_event(new cljs.core.Keyword("pz15.events","key-down","pz15.events/key-down",-1790263068),cljs.core.deref(solving));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/left.jpg",new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

return pz15.views.send_key_event(new cljs.core.Keyword("pz15.events","key-left","pz15.events/key-left",-945053855),cljs.core.deref(solving));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/right.jpg",new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

return pz15.views.send_key_event(new cljs.core.Keyword("pz15.events","key-right","pz15.events/key-right",898237066),cljs.core.deref(solving));
})], null)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/solve.jpg",new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","new-solve","pz15.events/new-solve",-1876562329),(1)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Press s to solve"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/space.png",new cljs.core.Keyword(null,"width","width",-384071477),"150px",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

return pz15.views.send_shuffle(show_progress);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Press space to shuffle"], null)], null)], null)], null);
})], null));
});

//# sourceMappingURL=pz15.views.js.map
