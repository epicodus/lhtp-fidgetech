"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[61958],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),h=p(n),d=o,u=h["".concat(s,".").concat(d)]||h[d]||m[d]||i;return n?a.createElement(u,l(l({ref:t},c),{},{components:n})):a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[h]="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(7896),o=(n(2784),n(30876));const i={title:"\ud83d\udcd3 1.2.2.7 Accessing HTML Element Attributes and Properties in the DOM",id:"1227-accessing-html-element-attributes-and-properties-in-the-dom",slug:"1227-accessing-html-element-attributes-and-properties-in-the-dom",hide_table_of_contents:!0,sidebar_position:45,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-1-introduction-to-programming/blob/main/2g_accessing_DOM_element_attributes_and_properties.md"},l=void 0,r={unversionedId:"fidgetech-1-introduction-to-programming/javascript-and-web-browsers/1227-accessing-html-element-attributes-and-properties-in-the-dom",id:"fidgetech-1-introduction-to-programming/javascript-and-web-browsers/1227-accessing-html-element-attributes-and-properties-in-the-dom",title:"\ud83d\udcd3 1.2.2.7 Accessing HTML Element Attributes and Properties in the DOM",description:"In this lesson, we're going to learn how to access and change the attributes of HTML elements in the DOM. We'll work with specific examples for the id, class and style attributes, but all of the examples we cover can be applied to any attribute. We'll also learn about the innerText property of DOM elements, which allows us to change the text of an element, like a ` paragraph element, and the read-only tagName` property that tells us the tag name of the HTML element we have accessed.",source:"@site/docs/fidgetech-1-introduction-to-programming/javascript-and-web-browsers/2g-accessing-DOM-element-attributes-and-properties.md",sourceDirName:"fidgetech-1-introduction-to-programming/javascript-and-web-browsers",slug:"/fidgetech-1-introduction-to-programming/javascript-and-web-browsers/1227-accessing-html-element-attributes-and-properties-in-the-dom",permalink:"/fidgetech-1-introduction-to-programming/javascript-and-web-browsers/1227-accessing-html-element-attributes-and-properties-in-the-dom",draft:!1,tags:[],version:"current",sidebarPosition:45,frontMatter:{title:"\ud83d\udcd3 1.2.2.7 Accessing HTML Element Attributes and Properties in the DOM",id:"1227-accessing-html-element-attributes-and-properties-in-the-dom",slug:"1227-accessing-html-element-attributes-and-properties-in-the-dom",hide_table_of_contents:!0,sidebar_position:45,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-1-introduction-to-programming/blob/main/2g_accessing_DOM_element_attributes_and_properties.md"},sidebar:"fidgetech-1-introduction-to-programming",previous:{title:"\ud83d\udcd3 1.2.2.6 JavaScript's Global Object",permalink:"/fidgetech-1-introduction-to-programming/javascript-and-web-browsers/1226-javascript's-global-object"},next:{title:"\ud83d\udcd3 1.2.2.8 Understanding Web APIs: Interfaces (Object Types) and Inheritance",permalink:"/fidgetech-1-introduction-to-programming/javascript-and-web-browsers/1228-understanding-web-apis-interfaces-object-types-and-inheritance"}},s={},p=[{value:"Accessing DOM Element Attributes",id:"accessing-dom-element-attributes",level:2},{value:"Language Choices",id:"language-choices",level:3},{value:"Accessing DOM Element Properties to Change <code>id</code> and <code>class</code> Attributes",id:"accessing-dom-element-properties-to-change-id-and-class-attributes",level:3},{value:"Accessing and Setting Inline Styles with DOM Element <code>style</code> Property",id:"accessing-and-setting-inline-styles-with-dom-element-style-property",level:3},{value:"<code>innerText</code> Property and Read-Only <code>tagName</code> Property",id:"innertext-property-and-read-only-tagname-property",level:3},{value:"innerText",id:"innertext",level:4},{value:"tagName",id:"tagname",level:4},{value:"Chaining Methods and Properties Accessors",id:"chaining-methods-and-properties-accessors",level:3},{value:"Accessing DOM Element Attributes with Property Methods",id:"accessing-dom-element-attributes-with-property-methods",level:3},{value:"Summary",id:"summary",level:2}],c={toc:p},h="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this lesson, we're going to learn how to access and change the attributes of HTML elements in the DOM. We'll work with specific examples for the ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"class")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"style")," attributes, but all of the examples we cover can be applied to any attribute. We'll also learn about the ",(0,o.kt)("inlineCode",{parentName:"p"},"innerText")," property of DOM elements, which allows us to change the text of an element, like a ",(0,o.kt)("inlineCode",{parentName:"p"},"<p>")," paragraph element, and the read-only ",(0,o.kt)("inlineCode",{parentName:"p"},"tagName")," property that tells us the tag name of the HTML element we have accessed. "),(0,o.kt)("p",null,"Also, ",(0,o.kt)("strong",{parentName:"p"},"this is the first lesson that we'll start to follow the new convention of omitting ",(0,o.kt)("inlineCode",{parentName:"strong"},"window")," when we access ",(0,o.kt)("inlineCode",{parentName:"strong"},"window")," properties.")," For example, instead of this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> let h1 = window.document.querySelector("h1");\n')),(0,o.kt)("p",null,"We'll code like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> let h1 = document.querySelector("h1");\n')),(0,o.kt)("p",null,"For this lesson's examples, we'll continue to work with the Cookie Recipe HTML, which we've pasted below. The code snippets are meant to be used in the DevTools console, and you can just read through this lesson or practice in the console while you read. Note that there will be an upcoming practice lesson to put all of these new tools to use."),(0,o.kt)("div",{class:"filename"},"cookie-recipe.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <title> Best Chocolate Chip Cookies </title>\n  </head>\n  <body>\n    <h1 id="specialHeader">Best Chocolate Chip Cookies</h1>\n    <img src="https://static01.nyt.com/images/2022/02/12/dining/JT-Chocolate-Chip-Cookies/JT-Chocolate-Chip-Cookies-articleLarge.jpg" alt="An image of a cookie"/>\n\n    <p>This recipe is from my dad and they are a favorite among friends and family. The secret ingredient is the coconut! <em>Be warned</em>, these will fly off of the plate!</p>\n    \n    <h2 class="h2styles">Ingredients</h2>\n    <ul class="ul-style">\n      <li>Butter</li>\n      <li>White sugar</li>\n      <li>Brown sugar</li>\n      <li>Eggs</li>\n      <li>Vanilla</li>\n      <li>Flour</li>\n      <li>Baking soda</li>\n      <li>Salt</li>\n      <li>Chocolate chips</li>\n      <li>Oatmeal</li>\n      <li>Coconut</li>\n    </ul>\n\n    <h2 class="h2styles">Directions</h2>\n    <ol class="ol-style">\n      <li>Preheat the oven to 325.</li>\n      <li>Beat the butter, sugar, eggs and vanilla together until creamy.</li>\n      <li>Mix together the flour, baking soda and salt in a separate bowl.</li>\n      <li>Add flour mixture to butter mixture slowly.</li>\n      <li>Stir in chocolate chips, oatmeal and coconut.</li>\n      <li>Bake for <strong>10 minutes</strong> or until golden brown.</li>\n    </ol>\n\n    <p><a href="http://allrecipes.com">Click here</a> to check out my other great recipes.</p>\n  </body>\n</html>\n')),(0,o.kt)("h2",{id:"accessing-dom-element-attributes"},"Accessing DOM Element Attributes"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Once we've accessed an element with ",(0,o.kt)("inlineCode",{parentName:"p"},"document.querySelector()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"document.getElementById()"),", what exactly are we working with? I mean, what data type are we working with? Let's find out:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> let h1 = document.querySelector("h1");\n> h1;\n<h1 id="specialHeader">Best Chocolate Chip Cookies</h1>\n> typeof h1;\nobject\n')),(0,o.kt)("p",null,"We're working with an object! In fact, every element we access in the DOM will be an object. Like all objects, the DOM element objects are a collection of properties. This means if we want to access the ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),' attribute of our H1 element, or even the text "Best Chocolate Chip Cookies", we need to access the right property or use the right method for the DOM element to get the data we\'re interested in.'),(0,o.kt)("h3",{id:"language-choices"},"Language Choices"),(0,o.kt)("p",null,"Before we dive into accessing DOM element properties, we should pause to review the terminology we'll be using in this lesson so that there's less confusion. "),(0,o.kt)("p",null,"First, we should remind ourselves that the HTML elements we write in VS Code are just that \u2014 HTML. This is in contrast to the DOM elements in the browser, which are all objects that happen to represent HTML elements within the DOM. The Document Object Model (DOM) is the interactive representation of our HTML document that we can use JavaScript to access and modify. As the name suggests, it's an object model of our HTML, meaning that the DOM is a series of nested objects that are arranged in a hierarchy. So, when we reference \"",(0,o.kt)("strong",{parentName:"p"},"HTML element"),'", we\'re referring to an element in our HTML (generally speaking or specifically in our source code). When we reference "',(0,o.kt)("strong",{parentName:"p"},"DOM element"),'" or "',(0,o.kt)("strong",{parentName:"p"},"HTML DOM element"),"\", we're referring to an object in the DOM that represents an HTML element."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/DOM_versus_HTML.jpg",alt:'This image shows the Cookie Recipe document displayed in the browser and in VS COde, side by side. The Cookie Recipe document in the browser is labeled "DOM", and the Cookie Recipe in VS Code is labeled "HTML".'})),(0,o.kt)("h3",{id:"accessing-dom-element-properties-to-change-id-and-class-attributes"},"Accessing DOM Element Properties to Change ",(0,o.kt)("inlineCode",{parentName:"h3"},"id")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"class")," Attributes"),(0,o.kt)("p",null,"Let's use our Cookie Recipe's H1 element for our first example. The first step is to get that DOM element. In the following code snippet we've used the ",(0,o.kt)("inlineCode",{parentName:"p"},"document.querySelector()")," method to get the H1 element and save it to a variable called ",(0,o.kt)("inlineCode",{parentName:"p"},"h1"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> let h1 = document.querySelector("h1");\n> h1;\n<h1 id="specialHeader">Best Chocolate Chip Cookies</h1>\n')),(0,o.kt)("p",null,"Every HTML DOM element has properties that let us access its attributes. Here's how we access the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," attribute:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> h1.id;\n"specialHeader"\n')),(0,o.kt)("p",null,"As we can see the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," attribute of the H1 DOM element can be accessed by a property itself called ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),". Remember that all of the DOM elements that are returned from calling ",(0,o.kt)("inlineCode",{parentName:"p"},"document.querySelector()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"document.getElementById()")," are objects, and like all objects, they are a collection of properties."),(0,o.kt)("p",null,"If we want to access the ",(0,o.kt)("inlineCode",{parentName:"p"},"class")," attribute of our H1 element, we'll need to access the ",(0,o.kt)("inlineCode",{parentName:"p"},"className")," property of the DOM element. Check it out:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> h1.className;\n""\n')),(0,o.kt)("p",null,"You may have noticed that we don't actually have a ",(0,o.kt)("inlineCode",{parentName:"p"},"class")," attribute on our H1 element in our Cookie Recipe. Because of this, when we access it, we get an empty string returned. "),(0,o.kt)("p",null,"We can create a ",(0,o.kt)("inlineCode",{parentName:"p"},"class")," attribute for our DOM element, and set a value by using the assignment operator ",(0,o.kt)("inlineCode",{parentName:"p"},"="),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> h1.className = "cookies";\n"cookies"\n> h1;\n<h1 id="specialHeader" class="cookies">Best Chocolate Chip Cookies</h1>\n')),(0,o.kt)("p",null,"As we can see, when we access our ",(0,o.kt)("inlineCode",{parentName:"p"},"h1")," variable to see the value of our H1 DOM element, we now have a ",(0,o.kt)("inlineCode",{parentName:"p"},"class"),' attribute with a value of "cookies". Pretty cool!'),(0,o.kt)("p",null,"Before we move on, ",(0,o.kt)("strong",{parentName:"p"},"it's important to note that any changes that we make to the DOM elements do not correspond to permanent changes in our HTML source code. Only the DOM gets updated.")," Remember, the DOM is the interactive representation of our HTML document (source code) displayed in our webpages."),(0,o.kt)("p",null,"If we wanted to remove the class, we can do this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> h1.className = "";\n""\n> h1;\n<h1 id="specialHeader" class>Best Chocolate Chip Cookies</h1>\n')),(0,o.kt)("p",null,"As we can see here, setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"className")," property of our DOM element to an empty string removes the value from our ",(0,o.kt)("inlineCode",{parentName:"p"},"class")," attribute, but it doesn't remove the attribute itself. Later in this lesson, we'll learn how to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Element.removeAttribute()")," method to completely remove the attribute."),(0,o.kt)("p",null,"Everything that we learned about so far with accessing and setting the value of attributes can be applied to any DOM element, like paragraphs, unordered lists, or images. This means that every DOM element has properties that represent its attributes. In other words, every attribute that can be applied to an element in our HTML source code is represented by a property on the corresponding DOM element. Let's look at one more example, this time of an HTML image element. This HTML element is from our Cookie Recipe:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<img src="https://static01.nyt.com/images/2022/02/12/dining/JT-Chocolate-Chip-Cookies/JT-Chocolate-Chip-Cookies-articleLarge.jpg" alt="An image of a cookie"/>\n')),(0,o.kt)("p",null,"And it corresponds to this DOM element object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> let img = document.querySelector("img");\n> img;\n<img src="https://static01.nyt.com/images/2022/02/12/dining/JT-Chocolate-Chip-Cookies/JT-Chocolate-Chip-Cookies-articleLarge.jpg" alt="An image of a cookie">\n')),(0,o.kt)("p",null,"With these properties, representing the HTML element's attributes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> img.src;\n"https://static01.nyt.com/images/2022/02/12/dining/JT-Chocolate-Chip-Cookies/JT-Chocolate-Chip-Cookies-articleLarge.jpg"\n> img.alt;\n"An image of a cookie"\n')),(0,o.kt)("h3",{id:"accessing-and-setting-inline-styles-with-dom-element-style-property"},"Accessing and Setting Inline Styles with DOM Element ",(0,o.kt)("inlineCode",{parentName:"h3"},"style")," Property"),(0,o.kt)("p",null,"Let's now explore adjusting the ",(0,o.kt)("inlineCode",{parentName:"p"},"style")," attribute on our HTML elements. We'll do this by accessing the DOM element ",(0,o.kt)("inlineCode",{parentName:"p"},"style")," property. Keep in mind that the ",(0,o.kt)("inlineCode",{parentName:"p"},"style")," attribute is only for inline styles, and does not access or update any CSS file. We'll continue to use our H1 element in these examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> let h1 = document.querySelector("h1");\n> h1;\n<h1 id="specialHeader">Best Chocolate Chip Cookies</h1>\n')),(0,o.kt)("p",null,"Just like with the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"className")," properties, we can access inline styles like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> h1.style;\nCSSStyleDeclaration\xa0{accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '',\xa0\u2026}\n")),(0,o.kt)("p",null,"When we access ",(0,o.kt)("inlineCode",{parentName:"p"},"h1.style"),", we get a really big object called ",(0,o.kt)("inlineCode",{parentName:"p"},"CSSStyleDeclaration")," returned to us. Unlike the DOM element ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"className")," properties that have a string as their value, the ",(0,o.kt)("inlineCode",{parentName:"p"},"style")," property of a DOM element has an object as its value, the ",(0,o.kt)("inlineCode",{parentName:"p"},"CSSStyleDeclaration")," object."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"CSSStyleDeclaration")," object is actually a part of the CSSOM \u2014 ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model"},"the CSS Object Model"),". The CSSOM is a bit beyond the scope of this lesson and this section's material, so we won't be spending too much time on it. However, a short introduction to the CSSOM is helpful context: just like our HTML is turned into the DOM, our CSS is also turned into an object model by our browsers, and this allows developers to write code to manipulate CSS. We'll learn about the CSSOM in a later course section, so it's not important understand this information now. We just need to understand how to set inline styles, so let's continue!"),(0,o.kt)("p",null,"You can expand the ",(0,o.kt)("inlineCode",{parentName:"p"},"CSSStyleDeclaration")," object in the console by clicking the triangle icon to the left of the object's name. This object shows all of the different styles that we can add inline to our DOM element. "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/CSSstyledeclaration-obj-in-dom-element-attributes.png",alt:"This image shows the `h1.style` property (with a value of a `CSSStyleDeclaration` object) expanded in the DevTools console."})),(0,o.kt)("p",null,"This is a big object with lots of unfamiliar properties. However, there's one I'm certain that you'll recognize: ",(0,o.kt)("inlineCode",{parentName:"p"},"backgroundColor"),". See if you can find that property in the image above or in your DevTools console. We can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"backgroundColor")," property to set the background color of a DOM element. Let's do that now:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> h1.style.backgroundColor = "hotpink";\n"hotpink"\n')),(0,o.kt)("p",null,"In this example, we've accessed the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"h1")," representing our HTML DOM element, then we've accessed the DOM element's ",(0,o.kt)("inlineCode",{parentName:"p"},"style")," property (which itself is an object), and then we've accessed the ",(0,o.kt)("inlineCode",{parentName:"p"},"style")," object's ",(0,o.kt)("inlineCode",{parentName:"p"},"backgroundColor")," property to assign it a value of ",(0,o.kt)("inlineCode",{parentName:"p"},'"hotpink"'),". And what do we see in the browser? We've changed the background color of our H1 element to hot pink. Neat!"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/h1-hot-pink-dom-style-attribute.png",alt:"This image shows the H1 element of our cookie recipe in the DOM with a background color of hot pink."})),(0,o.kt)("p",null,"With the code ",(0,o.kt)("inlineCode",{parentName:"p"},'h1.style.backgroundColor = "hotpink";'),", we've set the inline style for the CSS background color. If we did this in our CSS stylesheet ",(0,o.kt)("inlineCode",{parentName:"p"},"styles.css")," instead, the code would look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* styles.css */\n\nh1 {\n  background-color: hotpink;\n}\n")),(0,o.kt)("p",null,"Notice that the ",(0,o.kt)("inlineCode",{parentName:"p"},"background-color")," CSS property is hyphenated in our CSS stylesheet, but in the DOM element's ",(0,o.kt)("inlineCode",{parentName:"p"},"style")," object that same property is not hyphenated, but instead follows lower camelCase naming: ",(0,o.kt)("inlineCode",{parentName:"p"},"backgroundColor"),".  Also, notice how the values of every ",(0,o.kt)("inlineCode",{parentName:"p"},"style")," object property are set to strings when we're setting inline styles for a DOM element. Let's look at a few more examples. Let's change the text color and size of our H1 element:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> h1.style.color = "olive";\n"olive"\n> h1.style.fontSize = "72px";\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/h1-dom-style-color-and-fontsize.png",alt:'This image shows the H1 element of our cookie recipe in the DOM with a background color of hot pink, a text color of "olive", and a font size of 72px.'})),(0,o.kt)("p",null,"When we view the H1 element, we'll see that all of the inline styles we've added are listed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"style")," attribute of the DOM element:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> h1;\n<h1 id="specialHeader" style="background-color: hotpink; color: olive; font-size: 72px;">Best Chocolate Chip Cookies</h1>\n')),(0,o.kt)("p",null,"To remove an inline style, we have two options: setting the CSS property to ",(0,o.kt)("inlineCode",{parentName:"p"},'""')," or to ",(0,o.kt)("inlineCode",{parentName:"p"},"null")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> h1.style.color = "";\n> h1.style.fontSize = null;\n> h1;\n<h1 id="specialHeader" style="background-color: hotpink;">Best Chocolate Chip Cookies</h1>\n')),(0,o.kt)("p",null,"Before we move on, it's important to reiterate that we can't access any styles for any DOM element listed in an external CSS stylesheet (like ",(0,o.kt)("inlineCode",{parentName:"p"},"styles.css"),") through the DOM element ",(0,o.kt)("inlineCode",{parentName:"p"},"style")," property. Instead we can only access CSS properties that are listed as inline styles either in your HTML source code or ones that you set via the DOM."),(0,o.kt)("h3",{id:"innertext-property-and-read-only-tagname-property"},(0,o.kt)("inlineCode",{parentName:"h3"},"innerText")," Property and Read-Only ",(0,o.kt)("inlineCode",{parentName:"h3"},"tagName")," Property"),(0,o.kt)("p",null,"Next, let's look at two more properties that belong to (most) DOM elements: ",(0,o.kt)("inlineCode",{parentName:"p"},"innerText")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tagName"),". Can you guess what information we can get from these properties? We'll continue to use the H1 element for the next examples."),(0,o.kt)("h4",{id:"innertext"},"innerText"),(0,o.kt)("p",null,"Check out the following example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> let h1 = document.querySelector("h1");\n> h1.innerText;\n"Best Chocolate Chip Cookies"\n> h1.innerText = "The Very Best Chocolate Chip Cookies";\n> h1;\n<h1 id="specialHeader">The Very Best Chocolate Chip Cookies</h1>\n')),(0,o.kt)("p",null,"As we can see in the code snippet above, with the ",(0,o.kt)("inlineCode",{parentName:"p"},"innerText")," property we can retrieve and set the value of an HTML DOM element's text. "),(0,o.kt)("h4",{id:"tagname"},"tagName"),(0,o.kt)("p",null,"Check out the following example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> let h1 = document.querySelector("h1");\n> h1.tagName;\n"H1"\n> let body = document.querySelector("body");\n> body.tagName;\n"BODY"\n> let ul = document.querySelector("ul");\n> ul.tagName;\n"UL"\n> let firstLi = document.querySelector("ul>li");\n> firstLi.tagName.toLowerCase();\n"li"\n')),(0,o.kt)("p",null,"As we can see in the code snippet above, the ",(0,o.kt)("inlineCode",{parentName:"p"},"tagName")," property of a DOM element returns the name of the HTML element, in all caps. The very last line of code ",(0,o.kt)("inlineCode",{parentName:"p"},"firstLi.tagName.toLowerCase();")," reminds us that we can call JavaScript methods on DOM elements. Any JavaScript method for a data type (like strings) can be applied to the DOM element property of the same data type (like ",(0,o.kt)("inlineCode",{parentName:"p"},"tagName"),", whose value is a string).  "),(0,o.kt)("p",null,"Take note that ",(0,o.kt)("inlineCode",{parentName:"p"},"tagName")," is a read-only property, which means we can't use the assignment operator ",(0,o.kt)("inlineCode",{parentName:"p"},"=")," to give the ",(0,o.kt)("inlineCode",{parentName:"p"},"tagName")," property a new value."),(0,o.kt)("h3",{id:"chaining-methods-and-properties-accessors"},"Chaining Methods and Properties Accessors"),(0,o.kt)("p",null,"Let's look at a more complex example of chaining methods and property accessors. By the way, a ",(0,o.kt)("strong",{parentName:"p"},"property accessor")," is just a way to access an object property, and the one we know about is called ",(0,o.kt)("strong",{parentName:"p"},"dot notation"),". Let's look again at the final example in the last code snippet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> let firstLi = document.querySelector("ul>li");\n> firstLi.tagName.toLowerCase();\n"li"\n')),(0,o.kt)("p",null,"If our goal is to get the lower cased tag name, but not the list item DOM element object, we can rewrite the above code on one line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> let firstLiTagName = document.querySelector("ul>li").tagName.toLowerCase();\n> firstLiTagName;\n"li"\n')),(0,o.kt)("p",null,"Code gets executed from the left to the right, which means for this line of code ",(0,o.kt)("inlineCode",{parentName:"p"},'let firstLiTagName = document.querySelector("ul>li").tagName.toLowerCase();'),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First, I am creating a new variable called ",(0,o.kt)("inlineCode",{parentName:"li"},"firstLiTagName")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"let"),"."),(0,o.kt)("li",{parentName:"ul"},"Then, I am assigning the variable a value."),(0,o.kt)("li",{parentName:"ul"},"For the value, I am:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Accessing the ",(0,o.kt)("inlineCode",{parentName:"li"},"document")," object."),(0,o.kt)("li",{parentName:"ul"},"Calling a ",(0,o.kt)("inlineCode",{parentName:"li"},"document")," method to access an element in the DOM."),(0,o.kt)("li",{parentName:"ul"},"Accessing the ",(0,o.kt)("inlineCode",{parentName:"li"},"tagName")," property on the HTML Element that's returned from the ",(0,o.kt)("inlineCode",{parentName:"li"},'document.querySelector("ul>li")')," call."),(0,o.kt)("li",{parentName:"ul"},"And finally calling the ",(0,o.kt)("inlineCode",{parentName:"li"},"String.prototype.toLowerCase()")," method on the value of the ",(0,o.kt)("inlineCode",{parentName:"li"},"tagName")," property, which I know is a string.")))),(0,o.kt)("p",null,"You don't have to write code in one line like in the above example. Do whatever you are comfortable with, and whatever is easiest for you to understand. Using one line of code does not always make your code easier to read and understand! "),(0,o.kt)("h3",{id:"accessing-dom-element-attributes-with-property-methods"},"Accessing DOM Element Attributes with Property Methods"),(0,o.kt)("p",null,"So far, we've used dot notation to access DOM element properties to get and set our DOM element attributes. However, we can also use methods to get the value of, set the value of, check the existence of, and remove attributes: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Element.getAttribute()")," \u2014 gets the value of an attribute of a DOM element by the name of the attribute."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Element.setAttribute()")," \u2014 sets the value of an attribute on a DOM element by the name of the attribute and the specified new value."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Element.hasAttribute()")," \u2014 returns a boolean based on whether or not a DOM element has an attribute by the name specified."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Element.removeAttribute()")," \u2014 removes an attribute from a DOM element by the name of the attribute.")),(0,o.kt)("p",null,"Take note that ",(0,o.kt)("inlineCode",{parentName:"p"},"Element")," is the name of the object that the above methods belong to. We'll learn more about the ",(0,o.kt)("inlineCode",{parentName:"p"},"Element")," object in the next lesson. For now know that ",(0,o.kt)("inlineCode",{parentName:"p"},"Element")," represents the HTML DOM element that we happen to be working with, like our H1 element from the Cookie Recipe that we've been using as an example. "),(0,o.kt)("p",null,"Let's check out some examples using our H1 element now:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> let h1 = document.querySelector("h1");\n> h1;\n<h1 id="specialHeader">Best Chocolate Chip Cookies</h1>\n> h1.getAttribute("id");\n"specialHeader"\n> h1.setAttribute("class", "coolStyles");\n> h1;\n<h1 id="specialHeader" class="coolStyles">Best Chocolate Chip Cookies</h1>\n> h1.hasAttribute("id");\ntrue\n> h1.hasAttribute("style");\nfalse\n> h1.removeAttribute("class");\n> h1;\n<h1 id="specialHeader">Best Chocolate Chip Cookies</h1>\n')),(0,o.kt)("p",null,"Since we are familiar with calling methods, these examples should be easy to understand. There's a couple things to point out:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Notice that all of the arguments that we pass into these methods are strings. "),(0,o.kt)("li",{parentName:"ul"},"Notice that the ",(0,o.kt)("inlineCode",{parentName:"li"},"setAttribute()")," method takes two arguments, one for the attribute name, and the other for the value we want to assign to that attribute."),(0,o.kt)("li",{parentName:"ul"},"Also notice that when we want to target the ",(0,o.kt)("inlineCode",{parentName:"li"},"class")," attribute with these methods, we use the spelling ",(0,o.kt)("inlineCode",{parentName:"li"},"class")," and not ",(0,o.kt)("inlineCode",{parentName:"li"},"className"),". In fact, ",(0,o.kt)("inlineCode",{parentName:"li"},"className")," is the spelling used only for the HTML DOM element property representing the ",(0,o.kt)("inlineCode",{parentName:"li"},"class")," attribute. ")),(0,o.kt)("p",null,"In an upcoming lesson, we'll put what we've learned into practice! "),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In this lesson we learned how to access HTML DOM elements to get and set the values of their attributes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the DOM, the HTML elements from our source code are transformed into HTML DOM element objects. Like all objects, an HTML DOM element is a collection of properties. These properties represent things like:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The HTML tag name."),(0,o.kt)("li",{parentName:"ul"},"The inner text of an element, if there is any. For example, a heading element will have inner text, but an image element won't."),(0,o.kt)("li",{parentName:"ul"},"Any attributes associated with the HTML element, including inline styles with the ",(0,o.kt)("inlineCode",{parentName:"li"},"style")," attribute."))),(0,o.kt)("li",{parentName:"ul"},"We can access the attributes of a DOM element by accessing a property or by calling a method on it.")))}m.isMDXComponent=!0}}]);