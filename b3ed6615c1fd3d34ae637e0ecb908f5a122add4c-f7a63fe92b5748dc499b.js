"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[776],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,o=new RegExp("^"+s.source),i=new RegExp(s.source+r.source,"gu"),l=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,n,r)=>{let s=!1,o=!1,i=!1;for(let l=0;l<e.length;l++){const c=e[l];s&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),s=!1,i=o,o=!0,l++):o&&i&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),i=o,o=!1,s=!0):(s=n(c)===c&&r(c)!==c,i=o,o=r(c)===c&&n(c)!==c)}return e})(e,s,c)),e=e.replace(o,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,s):s(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,l.lastIndex=0,e.replace(i,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return p},M:function(){return N},P:function(){return w},S:function(){return D},_:function(){return i},a:function(){return o},b:function(){return d},g:function(){return m},h:function(){return l}});var n=a(7294),r=(a(3204),a(5697)),s=a.n(r);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t.indexOf(a=s[n])>=0||(r[a]=e[a]);return r}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,a,n,r){return void 0===r&&(r={}),o({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:o({},r,{opacity:t?1:0})})}function m(e,t,a,n,r,s,i,l){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),l&&(c.objectPosition=l);const d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],h=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=i(e,u);return n.createElement(n.Fragment,null,n.createElement(h,o({},a)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:r,alt:s="",shouldLoad:l}=e,c=i(e,g);return n.createElement("img",o({},c,{decoding:"async",loading:r,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:s}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,s=i(e,f);const l=s.sizes||(null==t?void 0:t.sizes),c=n.createElement(y,o({},s,t,{sizes:l,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return n.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:l})})),c):c};var E;y.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},b.displayName="Picture",b.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const v=["fallback"],w=function(e){let{fallback:t}=e,a=i(e,v);return t?n.createElement(b,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",o({},a))};w.displayName="Placeholder",w.propTypes={fallback:r.string,sources:null==(E=b.propTypes)?void 0:E.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const N=function(e){return n.createElement(n.Fragment,null,n.createElement(b,o({},e)),n.createElement("noscript",null,n.createElement(b,o({},e,{shouldLoad:!0}))))};N.displayName="MainImage",N.propTypes=b.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],T=["style","className"],x=e=>e.replace(/\n/g,""),C=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),o=3;o<n;o++)r[o-3]=arguments[o];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},L={image:s().object.isRequired,alt:C},I=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],P=new Set;let _,j;const R=function(e){let{as:t="div",image:r,style:s,backgroundColor:d,className:m,class:u,onStartLoad:h,onLoad:p,onError:g}=e,f=i(e,I);const{width:y,height:b,layout:E}=r,v=c(y,b,E),{style:w,className:N}=v,k=i(v,S),T=(0,n.useRef)(),x=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);u&&(m=u);const C=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(E,y,b);return(0,n.useEffect)((()=>{_||(_=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return j=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=T.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==h||h({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==h||h({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void P.add(x);if(j&&P.has(x))return;let t,n;return _.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;T.current&&(T.current.innerHTML=a(o({isLoading:!0,isLoaded:P.has(x),image:r},f)),P.has(x)||(t=requestAnimationFrame((()=>{T.current&&(n=i(T.current,x,P,s,h,p,g))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{P.has(x)&&j&&(T.current.innerHTML=j(o({isLoading:P.has(x),isLoaded:P.has(x),image:r},f)),null==h||h({wasCached:!0}),null==p||p({wasCached:!0}))}),[r]),(0,n.createElement)(t,o({},k,{style:o({},w,s,{backgroundColor:d}),className:N+(m?" "+m:""),ref:T,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},A=(0,n.memo)((function(e){return e.image?(0,n.createElement)(R,e):null}));A.propTypes=L,A.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function M(e){return function(t){let{src:a,__imageData:r,__error:s}=t,l=i(t,O);return s&&console.warn(s),r?n.createElement(e,o({image:r},l)):(console.warn("Image not loaded",a),null)}}const z=M((function(e){let{as:t="div",className:a,class:r,style:s,image:l,loading:u="lazy",imgClassName:h,imgStyle:g,backgroundColor:f,objectFit:y,objectPosition:b}=e,E=i(e,k);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),g=o({objectFit:y,objectPosition:b,backgroundColor:f},g);const{width:v,height:C,layout:L,images:I,placeholder:S,backgroundColor:P}=l,_=c(v,C,L),{style:j,className:R}=_,A=i(_,T),O={fallback:void 0,sources:[]};return I.fallback&&(O.fallback=o({},I.fallback,{srcSet:I.fallback.srcSet?x(I.fallback.srcSet):void 0})),I.sources&&(O.sources=I.sources.map((e=>o({},e,{srcSet:x(e.srcSet)})))),n.createElement(t,o({},A,{style:o({},j,s,{backgroundColor:f}),className:R+(a?" "+a:"")}),n.createElement(p,{layout:L,width:v,height:C},n.createElement(w,o({},m(S,!1,L,v,C,P,y,b))),n.createElement(N,o({"data-gatsby-image-ssr":"",className:h},E,d("eager"===u,!1,O,u,g)))))})),q=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},U=new Set(["fixed","fullWidth","constrained"]),W={src:s().string.isRequired,alt:C,width:q,height:q,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!U.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};z.displayName="StaticImage",z.propTypes=W;const D=M(A);D.displayName="StaticImage",D.propTypes=W},7410:function(e,t,a){a(7294)},8906:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=(a(1883),a(943));a(7410);var s=e=>{let{id:t,title:a,children:s}=e;return n.createElement("div",{className:"layout-module--base_layout--dda7d"},n.createElement(r.Z,{id:t,title:a,className:"layout-module--nav_layout--f1461"}),n.createElement("main",{className:"layout-module--content_layout--48e49"},s))}},943:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),r=a(1883),s="nav-module--description--a8218",o="nav-module--medium--a97b2",i="nav-module--work_item--73229",l="nav-module--year--a26f4";var c=e=>{let{id:t,title:a}=e;const{0:c,1:d}=(0,n.useState)(!1);return(0,n.useEffect)((()=>{"home"!==t&&(document.getElementById(t).classList.add("nav-module--show--076a4"),document.getElementById(a).classList.add("nav-module--select_title--51489"))}),[]),n.createElement("div",{className:"nav-module--nav--bfb75"},n.createElement("div",{className:"nav-module--bio--26208"},n.createElement("p",null,"Hey! I'm ",n.createElement(r.rU,{to:"/"},"Maggie"),".",n.createElement("br",null),"I'm a creative technologist and artist who enjoys thinking about how digital technologies can become carriers of poetics, through interaction, generative design, metaphors, and performance.",n.createElement("br",null),n.createElement("br",null),"Currently, I'm using frameworks of speculative design and design fiction to think more expansively about the technologies around us. Inspired by the ethos of science fiction, I'm working on making narratives of future worlds as devices that can allow us to reflect on the technological and social tools that we use today.",n.createElement("a",{onClick:()=>{d(!c)},className:"nav-module--bio_trigger--b1ef0"},"[...]")),n.createElement("div",{className:c?"nav-module--show_extra_bio--8c449":i},n.createElement("p",{className:s},"I am studying sculpture with a concentration in ",n.createElement("a",{href:"https://ctc.risd.edu/",target:"blank"},"Computation, Technology, and Culture (CTC) ")," at the Rhode Island School of Design (and graduating this June). Inspired by the notion of a website being",n.createElement("a",{href:"https://thecreativeindependent.com/essays/laurel- schwulst-my-website-is-a-shifting-house-next-to-a-river-of- knowledge-what-could-yours-be/",target:"blank"},' "a shifting house next to a river of knowledge"'),", I see my own website as evolving snapshots of my growing practice, as some projects speak more directly to my current inqueries while others sediment on this interface.",n.createElement("br",null),n.createElement("br",null),n.createElement("a",{href:"https://www.are.na/maggie-chang",target:"_blank"},"are.na"),n.createElement("br",null),n.createElement("a",{href:"https://drive.google.com/file/d/1M5K4nKgV3gAWz4uXD_dcQkEs1ZeIRIU7/view?usp=sharing",target:"_blank"},"resume")," (a lil update is needed)",n.createElement("br",null),"maggiechangjx@gmail.com"))),n.createElement("div",{id:"home",className:i},n.createElement("p",{className:s},"I'm a creative technologist, artist, and designer interested in exploring systems of interaction and generation, metaphors, myth-making, worlding, etc...")),n.createElement("ul",{className:"nav-module--works_list--60b27"},n.createElement("li",null,n.createElement("div",{id:"desirePathsT"},"  ",n.createElement(r.rU,{to:"/desire-paths/"},"Desire Paths of Language")),n.createElement("div",{id:"desirePaths",className:i},n.createElement("a",{href:"https://maggiechangjx.github.io/language-desire-path/",target:"blank",className:o},"Website"),n.createElement("p",{className:l},"2023"),n.createElement("p",{className:s},"This is an online environment where people can make sentences and poems together. In the writing mode, one can write a whole or partial sentence by clicking and stringing the exisiting words on the website. The written phrases are stored on the column on the left. In the editing mode, one can edit the existing phrases by adding two additional words to the end of the phrase. The added words will then appear as new word options on the website. Every once in a while, some existing words will disappear as options. All the existing words and written phrases are collectively stored on the backend, allowing the environment to continuously propagate."))),n.createElement("li",null,n.createElement("div",{id:"localhostT"},n.createElement(r.rU,{to:"/localhost/"},"localhost:8000")),n.createElement("div",{id:"localhost",className:i},n.createElement("p",{className:o},"Website hosted by a Raspberry Pi in my room, attached with sensors"),n.createElement("p",{className:l},"2022"),n.createElement("p",{className:s},"localhost:8000 is a website hosted on a local Raspberry Pi and attached to environmental sensors that detects the temperature, brightness, and loudness around the server. The website's digital environment and accessible content flickers to the changes in the physical enviroment around its server. ",n.createElement("br",null),n.createElement("br",null),"(The Raspberry Pi host and I are currently travelling in the AFK world. The website will be back on once we find some settlement!)"))),n.createElement("li",null,n.createElement("div",{id:"cyberfemT"},n.createElement(r.rU,{to:"/cyberfeminism-index/"},"Cyberfeminism Index Panel")),n.createElement("div",{id:"cyberfem",className:i},n.createElement("p",{className:o},"Performative reading and panel talk"),n.createElement("p",{className:l},"2022"),n.createElement("p",{className:s},"Together with my friends ",n.createElement("a",{href:"https://jon-chen.com/",target:"blank"},"Jon Chen"),"and ",n.createElement("a",{href:"https://vincentli.space/",target:"blank"},"Vincent Li"),", we hosted a panel conversation with designer, researcher, and educator",n.createElement("a",{href:"https://mindyseu.com/",target:"blank"}," Mindy Seu"),", in dialog with journalist, producer, and editor",n.createElement("a",{href:"https://marisamazriakatz.com/",target:"blank"}," Marisa Mazria Katz")," and designer ",n.createElement("a",{href:"https://libbymarrs.net/",target:"blank"},"Libby Marrs"),". ",n.createElement("br",null),n.createElement("br",null),"As a part of the ",n.createElement("a",{href:"https://tour.cyberfeminismindex.com/",target:"blank"},"Cyberfeminism Index Book Tour"),", Mindy gave a performative reading of the Cyberfeminism Index, and was later joined by the panelists in a conversation around the dynamics within holding cross-disciplinary practices as creatives.",n.createElement("br",null),n.createElement("br",null),"An edited transcript of the panel will soon be shared!"))),n.createElement("li",null,n.createElement("div",{id:"birthPixelsT"},n.createElement(r.rU,{to:"/birth-pixels/"},"Birth by Pixels")),n.createElement("div",{id:"birthPixels",className:i},n.createElement("p",{className:o},"Video"),n.createElement("p",{className:l},"2020"),n.createElement("p",{className:s},"A story of a creature that is born inside the screen and their attempt at navigating the world around them.",n.createElement("br",null),n.createElement("br",null),'This video contains a sample of "A Little Noise in the System" by Pauline Oliveros courtesy of Table of the Elements, and "Suiren" by Pauline Oliveros, Stuart Dempster & Panaiotis courtesy of The Orchard Music on behalf of New Albion Records. Environmental images are sourced from Google Earth.'))),n.createElement("li",null,n.createElement("div",{id:"variationsT"},n.createElement(r.rU,{to:"/variations/"},"Variations for One: Re")),n.createElement("div",{id:"variations",className:i},n.createElement("p",{className:o},"Experimental sound and video"),n.createElement("p",{className:l},"2020"),n.createElement("p",{className:s},"Right channel: Laptop, voice, mirror, Zoom video conference app, Pure Data sound programming with Teensyduino,",n.createElement("br",null),n.createElement("br",null),"Left channel: iPad, bluetooth speaker, Zoom H2n recorder, mirror, Zoom video conference app",n.createElement("br",null),n.createElement("br",null),"This video is a translation of two dictionary definitions of “re”--indicating a repetitive action when used as a prefix, and the second note of a sol-fa musical scale when used as a noun. The video on the right is recorded on a laptop connected to a Zoom video conference. In the video, I play and modulate voice recordings of the two definitions of “re” on a programmed component. Through the component, the voiced definitions are sent to the Zoom conference on the laptop, and broadcasted through the bluetooth speaker shown in the video on the left. The sounds and reverb are then picked up by the iPad, which is connected to the same Zoom conference as the laptop that was used to record the video on the right. By being in the same Zoom conference, the bluetooth speaker, laptop, and iPad forms a continuous feedback loop, where the definitions of “re” are continuously echoed and modified through the process of travelling between these devices."))),n.createElement("li",null,n.createElement("div",{id:"exModT"},n.createElement(r.rU,{to:"/extensions-modulations/"},"Through extensions and modulations I hear my body")),n.createElement("div",{id:"exMod",className:i},n.createElement("p",{className:o},"Experimental sound performance and video"),n.createElement("p",{className:l},"2020"),n.createElement("p",{className:s},"Pure Data sound programming with Teensyduino"))),n.createElement("li",null,n.createElement("div",{id:"projectedT"},n.createElement(r.rU,{to:"/projected/"},"Projected Land, Projected Being")),n.createElement("div",{id:"projected",className:i},n.createElement("p",{className:o},"Performance with video projection, music, and steel"),n.createElement("p",{className:l},"2019"),n.createElement("p",{className:s},"To the pace of music, the performer carries the steel sculpture structure as she attempts to travel through an ever-shifting landmass projected on and beyond her body. Throughout her journey, she treats the steel structure as a tunnel, playground, chair, and eventually a shelter.",n.createElement("br",null),n.createElement("br",null),"The projection also creates a doppleganger--the performer's and steel structure's shadows. The performer continuously gazes at her shadow as she traverses the virtual land, and gradually abandons her physical attachment to her structure in service of her shadow."))),n.createElement("li",null,n.createElement("div",{id:"performanceT"},n.createElement(r.rU,{to:"/performance/"},"Performance")),n.createElement("div",{id:"performance",className:i},n.createElement("p",{className:o},"Sculpture and video performance"),n.createElement("p",{className:l},"2019"),n.createElement("p",{className:s},"Performance | pər-'fȯr-mən(t)s",n.createElement("br",null),": an act of presenting a play, concert, or other form of entertainment",n.createElement("br",null),": the action or process of performing a task or function",n.createElement("br",null),"Oxford Languages",n.createElement("br",null)))),n.createElement("li",null,n.createElement("div",{id:"pearT"},n.createElement(r.rU,{to:"/pear/"},"Counting seconds by the peeling of a pear")),n.createElement("div",{id:"pear",className:i},n.createElement("p",{className:o},"Video essay"),n.createElement("p",{className:l},"2020"),n.createElement("p",{className:s},"This video essay questions the conventional method of recording time and the relationship between time and labour through the consumption of a pear."))),n.createElement("li",null,n.createElement("div",{id:"bookDesigns",className:i},n.createElement("p",{className:o},"Book and magazine design"),n.createElement("p",{className:l},"2018"),n.createElement("p",{className:s},"A handbook that provides a small origin story and instructions for Mahjong, a four-player tile-based game that originated from China."))),n.createElement("li",null,n.createElement("div",{id:"posterDesigns",className:i},n.createElement("p",{className:o},"Website"),n.createElement("p",{className:l},"2019"),n.createElement("p",{className:s})))))}},4812:function(e,t,a){a.d(t,{G5:function(){return i},gG:function(){return r},h:function(){return n},w5:function(){return s},xi:function(){return o}});var n="images-module--cyberfem_poster--f7a91",r="images-module--h_img--39099",s="images-module--performance_v_img--8f552",o="images-module--performance_v_img_org--c5193",i="images-module--v_img--6a60d"}}]);
//# sourceMappingURL=b3ed6615c1fd3d34ae637e0ecb908f5a122add4c-f7a63fe92b5748dc499b.js.map