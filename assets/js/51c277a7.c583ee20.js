"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[93623],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,m=p["".concat(s,".").concat(u)]||p[u]||h[u]||l;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,r[1]=o;for(var c=2;c<l;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=n(7896),a=(n(2784),n(30876));const l={title:"\ud83d\udcd3 3.0.0.24 Class Methods",id:"30024-class-methods",slug:"30024-class-methods",hide_table_of_contents:!0,sidebar_position:6,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-3-c-and-net/blob/main/0f_methods.md"},r=void 0,o={unversionedId:"fidgetech-3-c-and-net/lessons-19-31-basic-console-apps/30024-class-methods",id:"fidgetech-3-c-and-net/lessons-19-31-basic-console-apps/30024-class-methods",title:"\ud83d\udcd3 3.0.0.24 Class Methods",description:"In this lesson, we'll add a method that determines what type of triangle we have: isosceles, equilateral, scalene, or not a triangle. The logic in this method will be an exact copy from the Shape Tracker logic we created in JavaScript, only it will be written in C# with C# indentation and spacing. If you want to check out the JS before proceeding, visit this link here.",source:"@site/docs/fidgetech-3-c-and-net/lessons-19-31-basic-console-apps/0f-methods.md",sourceDirName:"fidgetech-3-c-and-net/lessons-19-31-basic-console-apps",slug:"/fidgetech-3-c-and-net/lessons-19-31-basic-console-apps/30024-class-methods",permalink:"/fidgetech-3-c-and-net/lessons-19-31-basic-console-apps/30024-class-methods",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"\ud83d\udcd3 3.0.0.24 Class Methods",id:"30024-class-methods",slug:"30024-class-methods",hide_table_of_contents:!0,sidebar_position:6,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-3-c-and-net/blob/main/0f_methods.md"},sidebar:"fidgetech-3-c-and-net",previous:{title:"\ud83d\udcd3 3.0.0.23 Class Fields and Constructors",permalink:"/fidgetech-3-c-and-net/lessons-19-31-basic-console-apps/30023-class-fields-and-constructors"},next:{title:"\ud83d\udcd3 3.0.0.25 Access Modifiers, Best Practices with Fields, and Getter and Setter Methods",permalink:"/fidgetech-3-c-and-net/lessons-19-31-basic-console-apps/30025-access-modifiers-best-practices-with-fields-and-getter-and-setter-methods"}},s={},c=[{value:"Class Methods",id:"class-methods",level:2},{value:"Calling a Class Method",id:"calling-a-class-method",level:2},{value:"Updating <code>CheckType()</code> Logic",id:"updating-checktype-logic",level:2},{value:"Repository Reference",id:"repository-reference",level:3}],d={toc:c},p="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this lesson, we'll add a method that determines what type of triangle we have: isosceles, equilateral, scalene, or not a triangle. The logic in this method will be an exact copy from the Shape Tracker logic we created in JavaScript, only it will be written in C# with C# indentation and spacing. If you want to check out the JS before proceeding, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/epicodus-lessons/section-5-shape-tracker/blob/3_multiple_business_logic_files/src/js/triangle.js"},"visit this link here"),"."),(0,a.kt)("h2",{id:"class-methods"},"Class Methods"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Any C# class method needs a name and a return type. Parameters and access level modifiers are optional. (We'll learn about access level modifiers in the next lesson.)"),(0,a.kt)("p",null,"Let's add a first draft of a new ",(0,a.kt)("inlineCode",{parentName:"p"},"CheckType")," method to ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle.cs")," now:"),(0,a.kt)("div",{class:"filename"},"Models/Triangle.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace ShapeTracker.Models \n{\n  public class Triangle \n  {\n    public int Side1;\n    public int Side2;\n    public int Side3;\n\n    public Triangle(int length1, int length2, int length3) \n    {\n      Side1 = length1;\n      Side2 = length2;\n      Side3 = length3;\n    }\n\n    public string CheckType() \n    {\n      return "I can\'t answer that yet";\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Here are the parts to our method:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"public")," is the access level modifier which determines where in the application our method can be accessed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string")," is the return type of our method. Specifying the type of the return value is a requirement of C# as a strictly-typed language. If there is no return value for a method we list ",(0,a.kt)("inlineCode",{parentName:"li"},"void"),', which means "nothing".'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CheckType")," is the name of our method. Methods are always named in Pascal case. "),(0,a.kt)("li",{parentName:"ul"},"Any parameters go between the parens ",(0,a.kt)("inlineCode",{parentName:"li"},"()")," following the method name."),(0,a.kt)("li",{parentName:"ul"},"Between the two curly braces ",(0,a.kt)("inlineCode",{parentName:"li"},"{ }")," is the body of our method \u2014 any code that we want the method to run.  ")),(0,a.kt)("h2",{id:"calling-a-class-method"},"Calling a Class Method"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Let's see how we can call the ",(0,a.kt)("inlineCode",{parentName:"p"},"CheckType()")," method. Here's how we'll update our UI logic in ",(0,a.kt)("inlineCode",{parentName:"p"},"Program.cs"),":"),(0,a.kt)("div",{class:"filename"},"Program.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing ShapeTracker.Models;\n\nnamespace ShapeTracker\n{\n  class Program\n  {\n    static void Main()\n    {\n      Triangle testTriangle = new Triangle(3,4,5);\n      Console.WriteLine($"Side one of the triangle: {testTriangle.Side1}");\n      Console.WriteLine($"Side two of the triangle: {testTriangle.Side2}");\n      Console.WriteLine($"Side three of the triangle: {testTriangle.Side3}");\n      Console.WriteLine("Want to know what type of triangle you have?");\n      Console.WriteLine("Calculating...");\n      Console.WriteLine($"Your triangle is: {testTriangle.CheckType()}.");\n    }\n  }\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"CheckType()")," method is an ",(0,a.kt)("strong",{parentName:"p"},"instance method")," so we need to call it on an instance of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle")," class, which is exactly what the variable ",(0,a.kt)("inlineCode",{parentName:"p"},"testTriangle")," is. "),(0,a.kt)("p",null,"If we run our code, we'll see new terminal output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Side one of the triangle: 3\nSide two of the triangle: 4\nSide three of the triangle: 5\nWant to know what type of triangle you have?\nCalculating...\nYour triangle is: I can't answer that yet.\n")),(0,a.kt)("h2",{id:"updating-checktype-logic"},"Updating ",(0,a.kt)("inlineCode",{parentName:"h2"},"CheckType()")," Logic"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Now, let's update the logic within ",(0,a.kt)("inlineCode",{parentName:"p"},"CheckType()")," to actually return the different values: isosceles, scalene, equilateral, or not a triangle."),(0,a.kt)("div",{class:"filename"},"Models/Triangle.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace ShapeTracker.Models \n{\n  public class Triangle \n  {\n    public int Side1;\n    public int Side2;\n    public int Side3;\n\n    public Triangle(int length1, int length2, int length3) \n    {\n      Side1 = length1;\n      Side2 = length2;\n      Side3 = length3;\n    }\n\n    public string CheckType() \n    {\n      if ((Side1 > (Side2 + Side3)) || (Side2 > (Side1 + Side3)) || (Side3 > (Side1 + Side2)))\n      {\n        return "not a triangle";\n      } \n      else if ((Side1 != Side2) && ((Side1 != Side3)) && ((Side2 != Side3))) \n      {\n        return "scalene triangle";\n      }  \n      else if ((Side1 == Side2) && (Side1 == Side3)) \n      {\n        return "equilateral triangle";\n      } \n      else \n      {\n        return "isosceles triangle";\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Again, the triangle-calculating logic is the same as in our JavaScript Shape Tracker, so we won't go over it in detail now. The main difference in the logic is the indentation with each curly bracket and ",(0,a.kt)("inlineCode",{parentName:"p"},"if"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"else if"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"else")," statement on new lines."),(0,a.kt)("p",null,"It's time to test out our console app. Try inputting different values to the constructor to test out all of the possible results from the ",(0,a.kt)("inlineCode",{parentName:"p"},"CheckType()")," method."),(0,a.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,a.kt)("p",null,"Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/prework-shape-tracker-csharp-net6/tree/2_basic_triangle_class"},(0,a.kt)("i",{class:"glyphicon glyphicon-folder-open"})," Example GitHub Repo for Shape Tracker: ",(0,a.kt)("inlineCode",{parentName:"a"},"2_basic_triangle_class")))))}h.isMDXComponent=!0}}]);