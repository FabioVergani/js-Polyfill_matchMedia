'use strict';
(function(x){
 var w=x;
 if(!w.matchMedia){
	(function(x){
	 var w=x, d=w.document, m, i, e;
	 if(!w.styleMedia){
		e=d.createElement(i='style');
		e.type='text/css';
		e.id='matchMediaTest';
		m=d.getElementsByTagName(i);
		i=m.length;
		if(i!==0){
			m[--i].after(e);
		}else{
			m=d.scripts;
			i=m.length;
			if(i!==0){
			 m[--i].after(e);
			}else{
			 i='head';
			 (d[i]||(d[i]=d.getElementsByTagName(i)[0])).appendChild(e);
			};
		};
		w.styleMedia={matchMedium:(e.test=Function('x','var e=this;e.'+(e.styleSheet.cssText?'styleSheet.cssText':'textContent')+'=s="@media\u0020"+x+"{#matchMediaTest{width:1px;}}";return '+(w.getComputedStyle?'getComputedStyle(e,null)':'e.currentStyle')+'.width==="1px";'))};
	 };
	})(w);


	w.matchMedia=function(x){const i=x||'all';return{media:i,matches:styleMedia.matchMedium(i)};};
 };
})(window);
