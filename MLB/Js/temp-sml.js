if ((typeof(temp$0temp$1)) == "undefined") {temp$0temp$1 = {};
};
(function(){basis$0General$1.print$156("<html><body><h1>Temperature Conversion</h1><table border='1'><tr><th align='left'>Temperature in Celcius:</th><td><input type='text' id='tC'></td></tr><tr><th align='left'>Temperature in Fahrenheit:</th><td><div id='tF'>?</div></td></tr></table></body></html>");
temp$0temp$1.get$45 = function(id$48){var v$53 = (function(d,id){return SmlPrims.option(d.getElementById(id));})(js$0Js$1.document$72,id$48);
switch (v$53[0]) { case 0: {return v$53[1];
 break; }default: {throw [basis$0Initial$1.en$Fail$45,"Missing id in document: " + id$48];
} };
};
temp$0temp$1.elemC$56;
var v$122 = (function(d,id){return SmlPrims.option(d.getElementById(id));})(js$0Js$1.document$72,"tC");
switch (v$122[0]) { case 0: {temp$0temp$1.elemC$56 = v$122[1];
 break; }default: {throw [basis$0Initial$1.en$Fail$45,"Missing id in document: tC"];
} };
(function(fp,s,v){fp[s] = v;})((function(fp,s){return fp[s];})(temp$0temp$1.elemC$56,"style"),"backgroundColor","green");
temp$0temp$1.fact$58 = function(n$61){var fix$156 = {};
fix$156.$accum = function(v$71,v$72){lab$accum: while (true) {if (v$71 == 0) {return v$72;
} else {var t$157 = SmlPrims.chk_ovf_i32(v$71 - 1);
var t$158 = SmlPrims.chk_ovf_i32(v$72 * v$71);
var v$71 = t$157;
var v$72 = t$158;
continue lab$accum;
};
};
};
var accum$62 = fix$156.$accum;
return accum$62(n$61,1);
};
temp$0temp$1.comp$73 = function(v$75){var v$76 = (function(e){return e.value;})(temp$0temp$1.elemC$56);
var res$77;
var v$82 = basis$0Int32$1.fromString$453(v$76);
switch (v$82[0]) { case 1: {res$77 = "Err";
 break; }default: {var v$83 = v$82[1];
var t$163 = basis$0Int32$1.toString$449;
var t$162;
var fix$159 = {};
fix$159.$accum = function(v$134,v$135){lab$accum: while (true) {if (v$134 == 0) {return v$135;
} else {var t$160 = SmlPrims.chk_ovf_i32(v$134 - 1);
var t$161 = SmlPrims.chk_ovf_i32(v$135 * v$134);
var v$134 = t$160;
var v$135 = t$161;
continue lab$accum;
};
};
};
var accum$132 = fix$159.$accum;
t$162 = (accum$132(v$83,1));
res$77 = (t$163(t$162));
} };
var elemF$84;
var v$137 = (function(d,id){return SmlPrims.option(d.getElementById(id));})(js$0Js$1.document$72,"tF");
switch (v$137[0]) { case 0: {elemF$84 = v$137[1];
 break; }default: {throw [basis$0Initial$1.en$Fail$45,"Missing id in document: tF"];
} };
(function(e,s){e.innerHTML = s;})(elemF$84,res$77);
return false;
};
js$0Js$1.installEventHandler$181(temp$0temp$1.elemC$56,5,function(v$155){return temp$0temp$1.comp$73(v$155);
});
return 0;
})();
