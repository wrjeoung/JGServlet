(function(b,c){if(c==undefined||c==null){console.error("can't not initialize JGService, JQuery not found");return;}if(JGDataset==undefined||JGDataset==null){console.error("can't not initialize JGService, JGDataset not found");return;}var a=(function(){});a.prototype.formToJSON=(function(f){var g={};var h=f.serializeArray();c.each(h,function(){if(g[this.name]){if(!g[this.name].push){g[this.name]=[g[this.name]];}g[this.name].push(this.value||"");}else{g[this.name]=this.value||"";}});return g;});a.prototype.JSONToForm=(function(k,f){var j=c(document.createElement("form"));k=Object.NVL(k,{});if(!Object.isNull(f)){if(!Object.isNull(f.enctype)){j.attr("enctype",f.enctype);}if(!Object.isNull(f.method)){j.attr("method",f.method);}else{j.method="post";}if(!Object.isNull(f.action)){j.attr("action",f.action);}}for(var h in k){if(k.hasOwnProperty(h)){var g=c(document.createElement("input"));g.attr("type","hidden");g.attr("name",h);g.attr("value",k[h]);j.append(g);}}return j;});a.prototype.countProperties=(function(h){var f=0;for(var g in h){if(h.hasOwnProperty(g)){++f;}}return f;});a._mobileCheckMetaData={android:function(){return navigator.userAgent.match(/Android/i);},blackberry:function(){return navigator.userAgent.match(/BlackBerry/i);},ios:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i);},opera:function(){return navigator.userAgent.match(/Opera Mini/i);},windows:function(){return navigator.userAgent.match(/IEMobile/i);},any:function(){return(a._mobileCheckMetaData.android()||a._mobileCheckMetaData.blackberry()||a._mobileCheckMetaData.ios()||a._mobileCheckMetaData.opera()||a._mobileCheckMetaData.windows());}};a.prototype.checkMobile=(function(f){f=Object.NVL(f,"any").toLowerCase();var g=a._mobileCheckMetaData[f];if(!Object.isNull(g)){return g();}else{return undefined;}});a.prototype.hasClicked=(function(g,f){var h=c(g);return(h.is(f.target)||h.has(f.target).length>0);});var e=(function(){});e.prototype._requestURLs={};e.prototype.putRequestURL=(function(f,g){e.prototype._requestURLs[f]=g;});e.prototype.requestURL=(function(h,g){var f=e.prototype._requestURLs[h];if(!Object.isNull(g)){f+=(f.indexOf("?")<0?"?":"&")+c.param(g);}return f;});e.prototype.ajax=(function(f,g){g=c.extend(c.extend({},g),{type:"POST",url:this.requestURL(f)});c.ajax(g);});e.prototype.submitForm=(function(f){document.body.appendChild(f);f.submit();document.body.removeChild(f);});e.prototype.postToURL=(function(h,j,g){var f=a.JSONToForm(j,g);f.method="POST";f.action=h;this.submitForm(f);});e.prototype.postToService=(function(g,h,f){this.postToURL(this.requestURL(g),h,f);});e.prototype.forwardURL=(function(f){b.location.href=f;});e.prototype.forwardService=(function(f,g){this.forwardURL(this.requestURL(f,g));});e.prototype.getFile=(function(f,g){g=c.extend({multiple:false,accept:"*/*"},g);c("input[type='file'][jgmodule-common-file-input]").remove();fileInput_=c("<input type='file' jgmodule-common-file-input style='display:none;'/>");c(document.body).append(fileInput_);fileInput_.attr("multiple",g.multiple);fileInput_.attr("accept",g.accept);fileInput_.change(function(){f(this);});fileInput_.click();});e.prototype.sendMultipart=(function(h,g,l,k){l=c.extend({async:false},l);g=c.extend({},g);var j=new FormData();j.append("path",l.path);for(var h in g){j.append(h,g[h]);}if(Object.isNull(k)){var f=this;this.getFile(function(m){f.sendMultipart(h,g,l,m);},l);return;}else{c.each(c(k).get(0).files,function(n,m){j.append("file-"+n,m);});}this.ajax(h,{data:j,processData:false,contentType:false,async:l.async,success:function(m){if(m.result==0){if(!Object.isNull(l.success)){l.success(m.message);}}else{if(!Object.isNull(l.fail)){l.fail(m.result,m.message);}}},error:function(n,o,m){if(!Object.isNull(l.error)){l.error(reponse_,o,m);}}});});var d=(function(){});d.prototype.getCookieVal=(function(f){var g=document.cookie.indexOf(";",f);if(g==-1){g=document.cookie.length;}return unescape(document.cookie.substring(f,g));});d.prototype.getCookie=(function(j){var g=j+"=";var f=g.length;var l=document.cookie.length;var k=0;while(k<l){var h=k+f;if(document.cookie.substring(k,h)==g){return getCookieVal(h);}k=document.cookie.indexOf(" ",k)+1;if(i==0){break;}}return null;});d.prototype.putCookie=(function(j,g){var f=arguments.length;var h=(2<f)?arguments[2]:null;var k=(3<f)?arguments[3]:null;var m=(4<f)?arguments[4]:null;var l=(5<f)?arguments[5]:false;document.cookie=j+"="+escape(g)+((h==null)?"":("; expires="+h.toGMTString()))+((k==null)?"":("; path="+k))+((m==null)?"":("; domain="+m))+((l==true)?"; secure":"");});e.prototype.makeServiceKey=(function(f,h,g){return c.extend({srvMap:f,srvID:h},g);});e.prototype.cookie=new d();b.JGUtils=new a();b.JGModule=new e();})(window,$);