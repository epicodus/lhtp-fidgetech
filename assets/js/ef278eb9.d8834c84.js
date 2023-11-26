"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[49829],{30876:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>g});var n=o(2784);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(o),m=r,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return o?n.createElement(g,a(a({ref:t},u),{},{components:o})):n.createElement(g,a({ref:t},u))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},36686:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=o(7896),r=(o(2784),o(30876));const i={title:"\ud83d\udcd3 2.2.0.16 Improving Development with Source Maps for Debugging",id:"22016-improving-development-with-source-maps-for-debugging",slug:"22016-improving-development-with-source-maps-for-debugging",hide_table_of_contents:!0,sidebar_position:16,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-2-intermediate-javascript/blob/main/0p_source_maps_for_debugging.md"},a=void 0,s={unversionedId:"fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript/22016-improving-development-with-source-maps-for-debugging",id:"fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript/22016-improving-development-with-source-maps-for-debugging",title:"\ud83d\udcd3 2.2.0.16 Improving Development with Source Maps for Debugging",description:"How else can we improve our development experience? We can ensure that we are using source maps for debugging bundled code.",source:"@site/docs/fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript/0p-source-maps-for-debugging.md",sourceDirName:"fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript",slug:"/fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript/22016-improving-development-with-source-maps-for-debugging",permalink:"/fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript/22016-improving-development-with-source-maps-for-debugging",draft:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"\ud83d\udcd3 2.2.0.16 Improving Development with Source Maps for Debugging",id:"22016-improving-development-with-source-maps-for-debugging",slug:"22016-improving-development-with-source-maps-for-debugging",hide_table_of_contents:!0,sidebar_position:16,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-2-intermediate-javascript/blob/main/0p_source_maps_for_debugging.md"},sidebar:"fidgetech-2-intermediate-javascript",previous:{title:"\ud83d\udcd3 2.2.0.15 Improving Development by Automating Clean Up Tasks",permalink:"/fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript/22015-improving-development-by-automating-clean-up-tasks"},next:{title:"\ud83d\udcd3 2.2.0.17 Improving Development with a Live Development Server",permalink:"/fidgetech-2-intermediate-javascript/test-driven-development-and-environments-with-javascript/22017-improving-development-with-a-live-development-server"}},l={},p=[{value:"Using DevTools Source Maps",id:"using-devtools-source-maps",level:2},{value:"If DevTools Source Mapping Works, Why Use webpack Source Maps?",id:"if-devtools-source-mapping-works-why-use-webpack-source-maps",level:3},{value:"Using Built-In webpack Configuration Options for Source Maps",id:"using-built-in-webpack-configuration-options-for-source-maps",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"How else can we improve our development experience? We can ensure that we are using source maps for debugging bundled code."),(0,r.kt)("p",null,"When we bundle our code and open it in the browser, any errors will refer to the bundle, not to our original source code. Since the bundle is minimized and very difficult to read, that makes it difficult to actually understand the errors. With source maps, we can trace the error back to our code, making it easier to debug. "),(0,r.kt)("p",null,"Specifically, a ",(0,r.kt)("strong",{parentName:"p"},"source map")," connects code that's been compiled, minified, and bundled to the original source code. This allows us to get descriptive error messages. For example, without source maps, our error messages will point to our ",(0,r.kt)("inlineCode",{parentName:"p"},"bundle.js"),", just like in the following image. "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/TDD-2020/error-pointing-to-webpack-bundle.png",alt:"This image shows an error that points to the bundle.js instead of a specific line in a specific file."})),(0,r.kt)("p",null,"To cause the error, we introduced a typo into one of the ",(0,r.kt)("inlineCode",{parentName:"p"},"parseInt()")," functions,  calling it ",(0,r.kt)("inlineCode",{parentName:"p"},"parsInt()")," instead. In our small Shape Tracker application, it won't be too big of a deal to locate the source of that issue based off of the message ",(0,r.kt)("inlineCode",{parentName:"p"},"ReferenceError: parsInt is not defined"),". However, in a much bigger application, it could be a nightmare! "),(0,r.kt)("p",null,"Other than unhelpful error messages, another big issue of debugging bundled code without a source map is that we can't add breakpoints to easily debug our code. "),(0,r.kt)("p",null,"In the end, you should always use a source map when you are developing and debugging a bundled code base. For our code, we'll use the source mapping provided by our DevTools and webpack:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We'll use DevTools source mapping in order to use breakpoints and ",(0,r.kt)("inlineCode",{parentName:"li"},"debugger;")," statements. "),(0,r.kt)("li",{parentName:"ul"},"We'll use webpack source mapping in order to access optional configurations for source maps.")),(0,r.kt)("p",null,"By the end of this lesson, you'll have configured webpack to use source maps!"),(0,r.kt)("h2",{id:"using-devtools-source-maps"},"Using DevTools Source Maps"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The DevTools of all modern browsers offer built-in source maps. These source maps enable DevTools functionality like debugging with breakpoints and ",(0,r.kt)("inlineCode",{parentName:"p"},"debugger;")," in the Sources tab. You can configure whether these are turned on or off, but the default configuration is on. As it should be! "),(0,r.kt)("p",null,"As long as we haven't specifically turned off source mapping (either in the browser or in our ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),"), our DevTools will automatically generate a source map connecting the code in the bundle to our original source code. This means that we'll get descriptive error messages that point us to the exact line in our source code that's causing the error. And, we'll also be able to open the Sources panel in our DevTools, find a ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack")," directory with the source code inside, and set breakpoints in our source code. The image below demonstrates this. "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/TDD-2020/devtools-sourcemaps.png",alt:"This image shows the DevTools generated source maps for Shape Tracker's source code in the `src` folder."})),(0,r.kt)("h3",{id:"if-devtools-source-mapping-works-why-use-webpack-source-maps"},"If DevTools Source Mapping Works, Why Use webpack Source Maps?"),(0,r.kt)("p",null,"The source mapping that DevTools provides should work in all of the cases that we'll need \u2014 to debug our business and user interface logic! "),(0,r.kt)("p",null,"However, the DevTools source mapping won't always be able to generate source maps for our entire bundle without fail or further configuration. That's why it's good to also rely on the source mapping that webpack provides. "),(0,r.kt)("p",null,"An example of where DevTools fails is with external style libraries (Bootstrap) when we bundle our code in production mode. And in this situation, we don't get a breaking error, but a warning. This case is highly specific and it's extremely likely that you won't run into this issue. Furthermore, we'll never be debugging Bootstrap directly. "),(0,r.kt)("p",null,"Another reason to use webpack to configure source maps is to shape how they get generated, which includes the ability to not generate source maps or hide them. We won't be doing either of these in this course, but in short, we do need to learn the basic configurations for source mapping via webpack. "),(0,r.kt)("h2",{id:"using-built-in-webpack-configuration-options-for-source-maps"},"Using Built-In webpack Configuration Options for Source Maps"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Setting up source maps for webpack is very straightforward. In the ",(0,r.kt)("inlineCode",{parentName:"p"},"module.exports")," object, we'll add a new configuration option that's built-in to webpack. Go ahead and add this to your Shape Tracker project now."),(0,r.kt)("div",{class:"filename"},"webpack.config.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"...\n\nmodule.exports = {\n  entry: './src/index.js',\n  output: {\n    filename: 'bundle.js',\n    path: path.resolve(__dirname, 'dist')\n  },\n  devtool: 'eval-source-map',  // new line\n\n  ...\n\n};\n")),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"devtool: 'eval-source-map'"),", we've enabled webpack to generate source maps. Enabling this option will make our website load slower since there's more for our webpage to upload and process. This means we would not want to include this option when we create a build of our website for production."),(0,r.kt)("p",null,"Now if we rebuild our our bundle and HTML with ",(0,r.kt)("inlineCode",{parentName:"p"},"$ npm run build")," our project will have access to two sets of source maps. We can use both source maps to explore our code in DevTools, but we'll still only be able to set breakpoints in the source maps generated by our DevTools."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/TDD-2020/sourcemaps-devtools-and-webpack.png",alt:"This image shows two sets of source maps in the DevTools _Sources_ tab: one from DevTools and the other from webpack."})),(0,r.kt)("p",null,"As noted previously, there are other configuration options for the ",(0,r.kt)("inlineCode",{parentName:"p"},"devtool")," option in our ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),". The webpack docs list all of the available options, including how fast or slow they are, whether it's recommended for production, and other details about if and how the source code is changed. It's optional to review these options now, but if you are curious, visit the docs here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://webpack.js.org/configuration/devtool/"},"Devtool"))),(0,r.kt)("p",null,"In the next lesson, we'll add another great tool for development: a server to live reload a project created with webpack."))}d.isMDXComponent=!0}}]);