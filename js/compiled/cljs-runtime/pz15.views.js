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
pz15.views.on_cell_click = (function pz15$views$on_cell_click(n,state){
var nc = pz15.bfs.next_cells(state);
var action = cljs.core.filterv((function (p__13576){
var vec__13577 = p__13576;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13577,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13577,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m,n);
}),nc);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([action], 0));

if(cljs.core.seq(action)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(action,(0)),(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),a)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-up","pz15.events/key-up",-193450930),(1)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),a)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-down","pz15.events/key-down",-1790263068),(1)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((10),a)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-left","pz15.events/key-left",-945053855),(1)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-10),a)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-right","pz15.events/key-right",898237066),(1)], null));
} else {
return null;
}
}
}
}
} else {
return null;
}
});
pz15.views.on_cell_click1 = (function pz15$views$on_cell_click1(n,state){
var nc = pz15.bfs.next_cells(state);
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nc], 0));
});
pz15.views.main_panel = (function pz15$views$main_panel(){
var state = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.subs","state","pz15.subs/state",1442340386)], null));
var elapsed = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.subs","elapsed-seconds","pz15.subs/elapsed-seconds",-1558987716)], null));
var solving = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.subs","solving","pz15.subs/solving",689005368)], null));
var field = state;
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return pz15.views.dispatch_keydown_rules();
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
var show_progress = cljs.core.deref(solving);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-container","div.main-container",1274886367),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title-box","div.title-box",-369465970),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"25px"], null)], null),"15 Puzzle"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game-box","div.game-box",1309208973),(function (){var iter__5523__auto__ = (function pz15$views$main_panel_$_iter__13580(s__13581){
return (new cljs.core.LazySeq(null,(function (){
var s__13581__$1 = s__13581;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13581__$1);
if(temp__5804__auto__){
var s__13581__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13581__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13581__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13583 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13582 = (0);
while(true){
if((i__13582 < size__5522__auto__)){
var l = cljs.core._nth(c__5521__auto__,i__13582);
cljs.core.chunk_append(b__13583,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(function (){var iter__5523__auto__ = ((function (i__13582,l,c__5521__auto__,size__5522__auto__,b__13583,s__13581__$2,temp__5804__auto__,show_progress,field,state,elapsed,solving){
return (function pz15$views$main_panel_$_iter__13580_$_iter__13584(s__13585){
return (new cljs.core.LazySeq(null,((function (i__13582,l,c__5521__auto__,size__5522__auto__,b__13583,s__13581__$2,temp__5804__auto__,show_progress,field,state,elapsed,solving){
return (function (){
var s__13585__$1 = s__13585;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__13585__$1);
if(temp__5804__auto____$1){
var s__13585__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13585__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__13585__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__13587 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__13586 = (0);
while(true){
if((i__13586 < size__5522__auto____$1)){
var vec__13588 = cljs.core._nth(c__5521__auto____$1,i__13586);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13588,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13588,(1),null);
cljs.core.chunk_append(b__13587,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell","div.cell",1471979620),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__13586,i__13582,vec__13588,n,i,c__5521__auto____$1,size__5522__auto____$1,b__13587,s__13585__$2,temp__5804__auto____$1,l,c__5521__auto__,size__5522__auto__,b__13583,s__13581__$2,temp__5804__auto__,show_progress,field,state,elapsed,solving){
return (function (e){
e.preventDefault();

return pz15.views.on_cell_click(n,cljs.core.deref(state));
});})(i__13586,i__13582,vec__13588,n,i,c__5521__auto____$1,size__5522__auto____$1,b__13587,s__13585__$2,temp__5804__auto____$1,l,c__5521__auto__,size__5522__auto__,b__13583,s__13581__$2,temp__5804__auto__,show_progress,field,state,elapsed,solving))
], null),(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),["images/t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/empty.png",new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)));

var G__13604 = (i__13586 + (1));
i__13586 = G__13604;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13587),pz15$views$main_panel_$_iter__13580_$_iter__13584(cljs.core.chunk_rest(s__13585__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13587),null);
}
} else {
var vec__13591 = cljs.core.first(s__13585__$2);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13591,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13591,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell","div.cell",1471979620),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__13582,vec__13591,n,i,s__13585__$2,temp__5804__auto____$1,l,c__5521__auto__,size__5522__auto__,b__13583,s__13581__$2,temp__5804__auto__,show_progress,field,state,elapsed,solving){
return (function (e){
e.preventDefault();

return pz15.views.on_cell_click(n,cljs.core.deref(state));
});})(i__13582,vec__13591,n,i,s__13585__$2,temp__5804__auto____$1,l,c__5521__auto__,size__5522__auto__,b__13583,s__13581__$2,temp__5804__auto__,show_progress,field,state,elapsed,solving))
], null),(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),["images/t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/empty.png",new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)),pz15$views$main_panel_$_iter__13580_$_iter__13584(cljs.core.rest(s__13585__$2)));
}
} else {
return null;
}
break;
}
});})(i__13582,l,c__5521__auto__,size__5522__auto__,b__13583,s__13581__$2,temp__5804__auto__,show_progress,field,state,elapsed,solving))
,null,null));
});})(i__13582,l,c__5521__auto__,size__5522__auto__,b__13583,s__13581__$2,temp__5804__auto__,show_progress,field,state,elapsed,solving))
;
return iter__5523__auto__(l);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)));

var G__13605 = (i__13582 + (1));
i__13582 = G__13605;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13583),pz15$views$main_panel_$_iter__13580(cljs.core.chunk_rest(s__13581__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13583),null);
}
} else {
var l = cljs.core.first(s__13581__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(function (){var iter__5523__auto__ = ((function (l,s__13581__$2,temp__5804__auto__,show_progress,field,state,elapsed,solving){
return (function pz15$views$main_panel_$_iter__13580_$_iter__13594(s__13595){
return (new cljs.core.LazySeq(null,(function (){
var s__13595__$1 = s__13595;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__13595__$1);
if(temp__5804__auto____$1){
var s__13595__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13595__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13595__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13597 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13596 = (0);
while(true){
if((i__13596 < size__5522__auto__)){
var vec__13598 = cljs.core._nth(c__5521__auto__,i__13596);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13598,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13598,(1),null);
cljs.core.chunk_append(b__13597,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell","div.cell",1471979620),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__13596,vec__13598,n,i,c__5521__auto__,size__5522__auto__,b__13597,s__13595__$2,temp__5804__auto____$1,l,s__13581__$2,temp__5804__auto__,show_progress,field,state,elapsed,solving){
return (function (e){
e.preventDefault();

return pz15.views.on_cell_click(n,cljs.core.deref(state));
});})(i__13596,vec__13598,n,i,c__5521__auto__,size__5522__auto__,b__13597,s__13595__$2,temp__5804__auto____$1,l,s__13581__$2,temp__5804__auto__,show_progress,field,state,elapsed,solving))
], null),(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),["images/t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/empty.png",new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)));

var G__13606 = (i__13596 + (1));
i__13596 = G__13606;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13597),pz15$views$main_panel_$_iter__13580_$_iter__13594(cljs.core.chunk_rest(s__13595__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13597),null);
}
} else {
var vec__13601 = cljs.core.first(s__13595__$2);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13601,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13601,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell","div.cell",1471979620),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__13601,n,i,s__13595__$2,temp__5804__auto____$1,l,s__13581__$2,temp__5804__auto__,show_progress,field,state,elapsed,solving){
return (function (e){
e.preventDefault();

return pz15.views.on_cell_click(n,cljs.core.deref(state));
});})(vec__13601,n,i,s__13595__$2,temp__5804__auto____$1,l,s__13581__$2,temp__5804__auto__,show_progress,field,state,elapsed,solving))
], null),(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),["images/t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/empty.png",new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)),pz15$views$main_panel_$_iter__13580_$_iter__13594(cljs.core.rest(s__13595__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(l,s__13581__$2,temp__5804__auto__,show_progress,field,state,elapsed,solving))
;
return iter__5523__auto__(l);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)),pz15$views$main_panel_$_iter__13580(cljs.core.rest(s__13581__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(field)));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null),(cljs.core.truth_(show_progress)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/wait.gif",new cljs.core.Keyword(null,"width","width",-384071477),"30px"], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(field),pz15.bfs.target_state))?"Solved!!!":"")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(((cljs.core.deref(elapsed) > (0)))?["Solution duration = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(elapsed))," s"].join(''):"")], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/solve.jpg",new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","new-solve","pz15.events/new-solve",-1876562329),(1)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Press s to solve"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/space.png",new cljs.core.Keyword(null,"width","width",-384071477),"150px",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

return pz15.views.send_shuffle(show_progress);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Press space to shuffle"], null)], null)], null)], null);
})], null));
});

//# sourceMappingURL=pz15.views.js.map
