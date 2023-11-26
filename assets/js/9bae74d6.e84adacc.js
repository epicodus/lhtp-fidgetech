"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[97541],{30876:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var o=t(2784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),h=i,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return t?o.createElement(f,r(r({ref:n},u),{},{components:t})):o.createElement(f,r({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},61923:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(7896),i=(t(2784),t(30876));const a={title:"\ud83d\udcd3 1.2.2.10 Function Expressions",id:"12210-function-expressions",slug:"12210-function-expressions",hide_table_of_contents:!0,sidebar_position:48,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-1-introduction-to-programming/blob/main/2j_function_expressions.md"},r=void 0,s={unversionedId:"fidgetech-1-introduction-to-programming/javascript-and-web-browsers/12210-function-expressions",id:"fidgetech-1-introduction-to-programming/javascript-and-web-browsers/12210-function-expressions",title:"\ud83d\udcd3 1.2.2.10 Function Expressions",description:"In this lesson, we'll explain another method of defining a function called function expressions. We'll be using function expressions in the next lesson when we learn about event handling with event handler properties.",source:"@site/docs/fidgetech-1-introduction-to-programming/javascript-and-web-browsers/2j-function-expressions.md",sourceDirName:"fidgetech-1-introduction-to-programming/javascript-and-web-browsers",slug:"/fidgetech-1-introduction-to-programming/javascript-and-web-browsers/12210-function-expressions",permalink:"/fidgetech-1-introduction-to-programming/javascript-and-web-browsers/12210-function-expressions",draft:!1,tags:[],version:"current",sidebarPosition:48,frontMatter:{title:"\ud83d\udcd3 1.2.2.10 Function Expressions",id:"12210-function-expressions",slug:"12210-function-expressions",hide_table_of_contents:!0,sidebar_position:48,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-1-introduction-to-programming/blob/main/2j_function_expressions.md"},sidebar:"fidgetech-1-introduction-to-programming",previous:{title:"\u270f\ufe0f 1.2.2.9 Practice: Accessing HTML Element Attributes and Properties in the DOM",permalink:"/fidgetech-1-introduction-to-programming/javascript-and-web-browsers/1229-practice-accessing-html-element-attributes-and-properties-in-the-dom"},next:{title:"\ud83d\udcd3 1.2.2.11 Event Handling with Event Handler Properties",permalink:"/fidgetech-1-introduction-to-programming/javascript-and-web-browsers/12211-event-handling-with-event-handler-properties"}},l={},c=[{value:"Review",id:"review",level:2},{value:"Formatting Code in the DevTools Console",id:"formatting-code-in-the-devtools-console",level:3},{value:"Functions",id:"functions",level:3},{value:"Function Declarations",id:"function-declarations",level:3},{value:"Defining Functions with Function Expressions",id:"defining-functions-with-function-expressions",level:2},{value:"Differences Between Function Declarations and Function Expressions",id:"differences-between-function-declarations-and-function-expressions",level:3},{value:"Which Method of Defining a Function Should I Use?",id:"which-method-of-defining-a-function-should-i-use",level:3},{value:"On MDN",id:"on-mdn",level:2}],u={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this lesson, we'll explain another method of defining a function called ",(0,i.kt)("strong",{parentName:"p"},"function expressions"),". We'll be using function expressions in the next lesson when we learn about event handling with event handler properties."),(0,i.kt)("p",null,"First, let's start with a review."),(0,i.kt)("h2",{id:"review"},"Review"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"formatting-code-in-the-devtools-console"},"Formatting Code in the DevTools Console"),(0,i.kt)("p",null,"It's optional to code along with this lesson. If you want to code along, review how to format code in the DevTools Console:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To create a new line, use ",(0,i.kt)("inlineCode",{parentName:"li"},"shift")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"enter"),"."),(0,i.kt)("li",{parentName:"ul"},"To tab over multiple spaces for indentation, use ",(0,i.kt)("inlineCode",{parentName:"li"},"tab"),". To configure the console to use 2 spaces for indentation with ",(0,i.kt)("inlineCode",{parentName:"li"},"tab"),", in the DevTools window, go to ",(0,i.kt)("em",{parentName:"li"},"Settings")," > ",(0,i.kt)("em",{parentName:"li"},"Preferences")," > scroll to the ",(0,i.kt)("em",{parentName:"li"},"Sources"),' section > set "Default indentation" to 2 spaces.')),(0,i.kt)("h3",{id:"functions"},"Functions"),(0,i.kt)("p",null,"What do we know so far about functions? "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A function is a bundle of code that performs a set of operations."),(0,i.kt)("li",{parentName:"ul"},"Functions allow us to ",(0,i.kt)("em",{parentName:"li"},"do")," things in JavaScript."),(0,i.kt)("li",{parentName:"ul"},"A method is a type of function that belongs to an object, and a function is just a set of operations that isn't necessarily a method."),(0,i.kt)("li",{parentName:"ul"},"There are a few built-in functions in JavaScript, like ",(0,i.kt)("inlineCode",{parentName:"li"},"parseInt()"),", but mostly we will be writing our own custom functions. This is in contrast to methods: we will only be using built-in JavaScript methods until we revisit objects in the ",(0,i.kt)("a",{parentName:"li",href:"https://old.learnhowtoprogram.com/intermediate-javascript/object-oriented-javascript/"},"Object-Oriented JavaScript")," course section.")),(0,i.kt)("h3",{id:"function-declarations"},"Function Declarations"),(0,i.kt)("p",null,"Here's a function called ",(0,i.kt)("inlineCode",{parentName:"p"},"duplicate()")," that we've defined using a function declaration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'function duplicate(phrase) {                     \n  return phrase.concat(" ").concat(phrase);\n}                                             \n')),(0,i.kt)("p",null,"When we write a function like this, it's called a ",(0,i.kt)("strong",{parentName:"p"},"function declaration"),". This means we've defined a function starting with the ",(0,i.kt)("inlineCode",{parentName:"p"},"function")," keyword. Here's the breakdown:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"function")," keyword indicates that we are declaring a function."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"duplicate")," is the name of the function, and we always include parentheses ",(0,i.kt)("inlineCode",{parentName:"li"},"()")," after the function name. The parentheses are to hold optional parameters."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"phrase")," is a parameter: a placeholder for any values that we want to pass into the function when we call it. In this example, the data type of ",(0,i.kt)("inlineCode",{parentName:"li"},"phrase")," should be a string."),(0,i.kt)("li",{parentName:"ul"},"Everything enclosed in the curly brackets ",(0,i.kt)("inlineCode",{parentName:"li"},"{")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"}")," is called the ",(0,i.kt)("strong",{parentName:"li"},"function body"),"; this is where we write out all the code that we want the function to execute when we call it.")),(0,i.kt)("p",null,"When we call this function, we need to pass an argument in. An ",(0,i.kt)("strong",{parentName:"p"},"argument")," is the value that is passed ",(0,i.kt)("em",{parentName:"p"},"into")," a parameter. The function call will look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'> duplicate("echo");\n"echo echo"\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Function declarations")," are also called ",(0,i.kt)("strong",{parentName:"p"},"function statements"),", though that is less common."),(0,i.kt)("h2",{id:"defining-functions-with-function-expressions"},"Defining Functions with Function Expressions"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We can also define a function with a ",(0,i.kt)("strong",{parentName:"p"},"function expression"),". This involves storing a function inside a variable like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// this is a function expression\nconst add = function(number1, number2) {\n  return number1 + number2;\n};\n")),(0,i.kt)("p",null,"This style of declaring a function is also called a ",(0,i.kt)("strong",{parentName:"p"},"function literal"),", though this term is less commonly used. "),(0,i.kt)("p",null,"You might be wondering why we added a semicolon to the end of the function expression. Doesn't the curly brace indicate the end of the function? Yes, it does, but we are treating this similarly to other statements where we assign a value to a variable. For that reason, we are adding a semicolon to the end."),(0,i.kt)("p",null,"We can then call this function by doing the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"> add(3, 5)\n8\n")),(0,i.kt)("p",null,"As we can see, calling the function works in exactly the same way as it does when we write the function as a function declaration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// this is a function declaration\nfunction add(number1, number2) {\n   return number1 + number2;\n}\n")),(0,i.kt)("h3",{id:"differences-between-function-declarations-and-function-expressions"},"Differences Between Function Declarations and Function Expressions"),(0,i.kt)("p",null,"The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions. The example we've seen so far has been an ",(0,i.kt)("strong",{parentName:"p"},"anonymous function expression"),". Even though we're storing the function into a variable ",(0,i.kt)("inlineCode",{parentName:"p"},"add"),", and we can call the function by adding parens at the end of the variable name ",(0,i.kt)("inlineCode",{parentName:"p"},"add()"),", the function expression is still considered anonymous. "),(0,i.kt)("p",null,"To write a ",(0,i.kt)("strong",{parentName:"p"},"named function expression"),", it would look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// this is a **named** function expression\nconst calc = function add(number1, number2) {\n  return number1 + number2;\n};\n")),(0,i.kt)("p",null,"Notice that we've re-written the original ",(0,i.kt)("inlineCode",{parentName:"p"},"add()")," function expression. Now, we've given the name ",(0,i.kt)("inlineCode",{parentName:"p"},"add")," to our function expression (",(0,i.kt)("inlineCode",{parentName:"p"},"function add() {...}"),"), and we're storing it in a variable called ",(0,i.kt)("inlineCode",{parentName:"p"},"calc"),". If we wanted to call this named function expression, we would do so like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"> calc(2,3);\n5\n")),(0,i.kt)("p",null,"The use cases for named function expressions are limited and you likely won't use them in the program. You are welcome to explore more about these use cases by ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function#named_function_expression"},"referencing this section on MDN"),"."),(0,i.kt)("p",null,"Another important difference between these two methods of defining a function have to do with hoisting. JS interpreters (programs that interpret JS code, like Google Chrome's V8 JavaScript engine) perform ",(0,i.kt)("strong",{parentName:"p"},"hoisting"),", which is the process of moving the declaration of functions and variables to the top of their scope, prior to execution of the code. Let's understand this with an example. Copy and paste this code into your DevTools console"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const result = add(3, 5);\nfunction add(number1, number2) {\n   return number1 + number2;\n}\nresult;\n")),(0,i.kt)("p",null,"Take note that we've called the ",(0,i.kt)("inlineCode",{parentName:"p"},"add()")," function before we've declared it, and declared our ",(0,i.kt)("inlineCode",{parentName:"p"},"add()")," function with a function declaration. Will this code execute properly?"),(0,i.kt)("p",null,"When we hit 'enter' the code executes without error and we get ",(0,i.kt)("inlineCode",{parentName:"p"},"8")," as the result. In this case we can call ",(0,i.kt)("inlineCode",{parentName:"p"},"add()")," before it has been defined because of ",(0,i.kt)("strong",{parentName:"p"},"hoisting"),". This only happens with function declarations."),(0,i.kt)("p",null,"Now refresh your page and your DevTools console and copy/paste this code and hit enter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const result = add(3, 5);\nconst add = function(number1, number2) {\n   return number1 + number2;\n}\nresult;\n")),(0,i.kt)("p",null,"And what do we get? An error, specifically this one:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Uncaught ReferenceError: add is not defined\n")),(0,i.kt)("p",null,"The difference with the second code snippet is that we've defined our ",(0,i.kt)("inlineCode",{parentName:"p"},"add()")," function with a function expression, which does not get hoisted. Code gets read from top to bottom, and in this case when we call ",(0,i.kt)("inlineCode",{parentName:"p"},"add(3,5)"),", our browser's JS interpreter can't find this function because it hasn't been hoisted and literally doesn't exist yet."),(0,i.kt)("h3",{id:"which-method-of-defining-a-function-should-i-use"},"Which Method of Defining a Function Should I Use?"),(0,i.kt)("p",null,"Generally speaking you should stick to using function declarations because that code gets hoisted. However, you'll see a lot of examples online that use function expressions, so it's very important for you to be able to recognize and use them. "),(0,i.kt)("p",null,"In this course section, we'll learn how to use function expressions in the context of event handling. We'll get started on this in the next lesson!"),(0,i.kt)("p",null,"Later on, we'll also learn how to use function declarations in event handling. When we get there, we'll cover the differences between the two and when we would choose to use one over the other. "),(0,i.kt)("h2",{id:"on-mdn"},"On MDN"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"There are more ways to define a function than just function declarations and function expressions. If you want to learn more, check out MDN's reference page on functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("span",{class:"glyphicon glyphicon-link"})," ",(0,i.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions"},"Functions"))," ")),(0,i.kt)("p",null,"There's quite a lot on that reference page, including more information and examples about function declarations and expressions. If you find the additional information on MDN confusing or overwhelming, that's entirely normal when you are first starting out. ",(0,i.kt)("strong",{parentName:"p"},"Take note that everything that you'll need to be successful in terms of writing functions can be found in this section's content,")," so there's no immediate need to reference MDN."))}p.isMDXComponent=!0}}]);