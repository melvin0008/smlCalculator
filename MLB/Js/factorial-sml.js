if ((typeof(factorial$0factorial$1)) == "undefined") {factorial$0factorial$1 = {};
};
(function(){basis$0General$1.print$156("<html><head><style >#tf{word-wrap: break-word;}</style></head><body><h1>Factorial</h1>Enter the Number:<input type='text' id='no'><br/>Length: <div id='length'></div><br/>Factorial:<div id='fact'></div></body></html>");
factorial$0factorial$1.get$45 = function(id$48){var v$53 = (function(d,id){return SmlPrims.option(d.getElementById(id));})(js$0Js$1.document$72,id$48);
switch (v$53[0]) { case 0: {return v$53[1];
 break; }default: {throw [basis$0Initial$1.en$Fail$45,"Missing id in document: " + id$48];
} };
};
factorial$0factorial$1.elemC$56;
var v$137 = (function(d,id){return SmlPrims.option(d.getElementById(id));})(js$0Js$1.document$72,"no");
switch (v$137[0]) { case 0: {factorial$0factorial$1.elemC$56 = v$137[1];
 break; }default: {throw [basis$0Initial$1.en$Fail$45,"Missing id in document: no"];
} };
(function(fp,s,v){fp[s] = v;})((function(fp,s){return fp[s];})(factorial$0factorial$1.elemC$56,"style"),"backgroundColor","green");
factorial$0factorial$1.fact$58 = function(n$61){var fix$203 = {};
fix$203.$fac = function(v$65,v$68){var t$204;
var v$189 = [0,[null,false]];
switch (v$189[0]) { case 0: {var v$148 = v$68[1];
var v$149 = v$189[1];
var t$208;
var fix$205 = {};
fix$205.$eq_list = function(v$153,v$154){lab$eq_list: while (true) {if (v$153 == null) {return (v$154 == null)?true:false;
} else {if (v$154 == null) {return false;
} else {var v$155 = v$153;
var v$156 = v$154;
if (v$155[0] == v$156[0]) {var t$206 = v$155[1];
var t$207 = v$156[1];
var v$153 = t$206;
var v$154 = t$207;
continue lab$eq_list;
} else {return false;
};
};
};
};
};
var eq_list$151 = fix$205.$eq_list;
t$208 = (eq_list$151(v$148[0],v$149[0]));
t$204 = (t$208?(v$148[1] == v$149[1]):false);
 break; }default: {t$204 = false;
} };
if (t$204) {return v$65;
} else {return fix$203.$fac(basis$0IntInfRep$1.s$t$1207(v$65,v$68),basis$0IntInfRep$1.s$g$1251(v$68,[0,[[1,null],false]]));
};
};
var fac$62 = fix$203.$fac;
return basis$0IntInf$1.toString$2342(fac$62([0,[[1,null],false]],n$61));
};
factorial$0factorial$1.comp1$80 = function(v$82){var v$161 = (function(d,id){return SmlPrims.option(d.getElementById(id));})(js$0Js$1.document$72,"fact");
switch (v$161[0]) { case 0: {v$161[1];
 break; }default: {throw [basis$0Initial$1.en$Fail$45,"Missing id in document: fact"];
} };
var length$84;
var v$166 = (function(d,id){return SmlPrims.option(d.getElementById(id));})(js$0Js$1.document$72,"length");
switch (v$166[0]) { case 0: {length$84 = v$166[1];
 break; }default: {throw [basis$0Initial$1.en$Fail$45,"Missing id in document: length"];
} };
var n$85 = (function(e){return e.value;})(factorial$0factorial$1.elemC$56);
var j$86 = basis$0General$1.valOf$123(basis$0IntInf$1.fromString$2404(n$85));
var x$87 = factorial$0factorial$1.fact$58(j$86);
var len$88 = basis$0Int32$1.toString$449(x$87.length);
(function(e,s){e.innerHTML = s;})(length$84,len$88);
return false;
};
js$0Js$1.installEventHandler$181(factorial$0factorial$1.elemC$56,5,function(v$202){return factorial$0factorial$1.comp1$80(v$202);
});
return 0;
})();
