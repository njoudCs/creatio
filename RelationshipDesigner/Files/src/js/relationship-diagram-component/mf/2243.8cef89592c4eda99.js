(self.webpackChunkapp_studio_enterprise_relationship_diagram=self.webpackChunkapp_studio_enterprise_relationship_diagram||[]).push([[2243],{52243:function(u){/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */(function(n,a){u.exports=a(n)})(typeof global<"u"?global:this,function(n){if(n.CSS&&n.CSS.escape)return n.CSS.escape;var a=function(c){if(arguments.length==0)throw new TypeError("`CSS.escape` requires an argument.");for(var r=String(c),s=r.length,i=-1,e,t="",x=r.charCodeAt(0);++i<s;){if(e=r.charCodeAt(i),e==0){t+="\uFFFD";continue}if(e>=1&&e<=31||e==127||i==0&&e>=48&&e<=57||i==1&&e>=48&&e<=57&&x==45){t+="\\"+e.toString(16)+" ";continue}if(i==0&&s==1&&e==45){t+="\\"+r.charAt(i);continue}if(e>=128||e==45||e==95||e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122){t+=r.charAt(i);continue}t+="\\"+r.charAt(i)}return t};return n.CSS||(n.CSS={}),n.CSS.escape=a,a})}}]);