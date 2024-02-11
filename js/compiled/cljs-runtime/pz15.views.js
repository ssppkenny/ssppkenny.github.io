goog.provide('pz15.views');
pz15.views.dispatch_keypress_rules = (function pz15$views$dispatch_keypress_rules(){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","set-keypress-rules","re-pressed.core/set-keypress-rules",1541561860),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-keys","event-keys",-835966631),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-left","pz15.events/key-left",-945053855),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(72)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-right","pz15.events/key-right",898237066),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(76)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-up","pz15.events/key-up",-193450930),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(75)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-down","pz15.events/key-down",-1790263068),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(74)], null)], null)], null)], null),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(27)], null)], null)], null)], null)], null));
});
pz15.views.dispatch_keydown_rules = (function pz15$views$dispatch_keydown_rules(){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","set-keydown-rules","re-pressed.core/set-keydown-rules",1002257871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-keys","event-keys",-835966631),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","shuffle","pz15.events/shuffle",349000693),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(32)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-left","pz15.events/key-left",-945053855),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(72)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(37)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-right","pz15.events/key-right",898237066),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(76)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(39)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-up","pz15.events/key-up",-193450930),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(75)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(38)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","new-solve","pz15.events/new-solve",-1876562329),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(83)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.events","key-down","pz15.events/key-down",-1790263068),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(74)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(40)], null)], null)], null)], null),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(27)], null)], null)], null)], null)], null));
});
pz15.views.main_panel = (function pz15$views$main_panel(){
var state = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.subs","state","pz15.subs/state",1442340386)], null));
var need_to_solve = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.subs","need-to-solve","pz15.subs/need-to-solve",370358918)], null));
var solving = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pz15.subs","solving","pz15.subs/solving",689005368)], null));
var field = state;
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return pz15.views.dispatch_keydown_rules();
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
var show_progress = cljs.core.deref(solving);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"43%",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"25px"], null)], null),"15 Puzzle"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"40%",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"5%",new cljs.core.Keyword(null,"border-style","border-style",-485574304),"solid",new cljs.core.Keyword(null,"width","width",-384071477),"fit-content"], null)], null),(function (){var iter__5523__auto__ = (function pz15$views$main_panel_$_iter__17902(s__17903){
return (new cljs.core.LazySeq(null,(function (){
var s__17903__$1 = s__17903;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17903__$1);
if(temp__5804__auto__){
var s__17903__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17903__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17903__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17905 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17904 = (0);
while(true){
if((i__17904 < size__5522__auto__)){
var l = cljs.core._nth(c__5521__auto__,i__17904);
cljs.core.chunk_append(b__17905,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"50px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),(function (){var iter__5523__auto__ = ((function (i__17904,l,c__5521__auto__,size__5522__auto__,b__17905,s__17903__$2,temp__5804__auto__,show_progress,field,state,need_to_solve,solving){
return (function pz15$views$main_panel_$_iter__17902_$_iter__17906(s__17907){
return (new cljs.core.LazySeq(null,((function (i__17904,l,c__5521__auto__,size__5522__auto__,b__17905,s__17903__$2,temp__5804__auto__,show_progress,field,state,need_to_solve,solving){
return (function (){
var s__17907__$1 = s__17907;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__17907__$1);
if(temp__5804__auto____$1){
var s__17907__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17907__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__17907__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__17909 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__17908 = (0);
while(true){
if((i__17908 < size__5522__auto____$1)){
var vec__17910 = cljs.core._nth(c__5521__auto____$1,i__17908);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17910,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17910,(1),null);
cljs.core.chunk_append(b__17909,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"border-style","border-style",-485574304),"none",new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"1px",new cljs.core.Keyword(null,"color","color",1011675173),"black",new cljs.core.Keyword(null,"margin","margin",-995903681),"0px"], null)], null),(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),["images/t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)));

var G__17926 = (i__17908 + (1));
i__17908 = G__17926;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17909),pz15$views$main_panel_$_iter__17902_$_iter__17906(cljs.core.chunk_rest(s__17907__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17909),null);
}
} else {
var vec__17913 = cljs.core.first(s__17907__$2);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17913,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17913,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"border-style","border-style",-485574304),"none",new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"1px",new cljs.core.Keyword(null,"color","color",1011675173),"black",new cljs.core.Keyword(null,"margin","margin",-995903681),"0px"], null)], null),(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),["images/t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)),pz15$views$main_panel_$_iter__17902_$_iter__17906(cljs.core.rest(s__17907__$2)));
}
} else {
return null;
}
break;
}
});})(i__17904,l,c__5521__auto__,size__5522__auto__,b__17905,s__17903__$2,temp__5804__auto__,show_progress,field,state,need_to_solve,solving))
,null,null));
});})(i__17904,l,c__5521__auto__,size__5522__auto__,b__17905,s__17903__$2,temp__5804__auto__,show_progress,field,state,need_to_solve,solving))
;
return iter__5523__auto__(l);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)));

var G__17927 = (i__17904 + (1));
i__17904 = G__17927;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17905),pz15$views$main_panel_$_iter__17902(cljs.core.chunk_rest(s__17903__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17905),null);
}
} else {
var l = cljs.core.first(s__17903__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"50px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),(function (){var iter__5523__auto__ = ((function (l,s__17903__$2,temp__5804__auto__,show_progress,field,state,need_to_solve,solving){
return (function pz15$views$main_panel_$_iter__17902_$_iter__17916(s__17917){
return (new cljs.core.LazySeq(null,(function (){
var s__17917__$1 = s__17917;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__17917__$1);
if(temp__5804__auto____$1){
var s__17917__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17917__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17917__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17919 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17918 = (0);
while(true){
if((i__17918 < size__5522__auto__)){
var vec__17920 = cljs.core._nth(c__5521__auto__,i__17918);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17920,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17920,(1),null);
cljs.core.chunk_append(b__17919,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"border-style","border-style",-485574304),"none",new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"1px",new cljs.core.Keyword(null,"color","color",1011675173),"black",new cljs.core.Keyword(null,"margin","margin",-995903681),"0px"], null)], null),(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),["images/t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)));

var G__17928 = (i__17918 + (1));
i__17918 = G__17928;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17919),pz15$views$main_panel_$_iter__17902_$_iter__17916(cljs.core.chunk_rest(s__17917__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17919),null);
}
} else {
var vec__17923 = cljs.core.first(s__17917__$2);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17923,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17923,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"border-style","border-style",-485574304),"none",new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"1px",new cljs.core.Keyword(null,"color","color",1011675173),"black",new cljs.core.Keyword(null,"margin","margin",-995903681),"0px"], null)], null),(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),["images/t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)),pz15$views$main_panel_$_iter__17902_$_iter__17916(cljs.core.rest(s__17917__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(l,s__17903__$2,temp__5804__auto__,show_progress,field,state,need_to_solve,solving))
;
return iter__5523__auto__(l);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)),pz15$views$main_panel_$_iter__17902(cljs.core.rest(s__17903__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(field)));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"45%"], null)], null),(cljs.core.truth_(show_progress)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/wait.gif",new cljs.core.Keyword(null,"width","width",-384071477),"30px"], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"1%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"44%",new cljs.core.Keyword(null,"color","color",1011675173),"green"], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(field),pz15.bfs.target_state))?"Solved!!!":"")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"42%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/arrows.png",new cljs.core.Keyword(null,"width","width",-384071477),"150px"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"42%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Press s to solve"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Press space to shuffle"], null)], null)], null);
})], null));
});

//# sourceMappingURL=pz15.views.js.map
