"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[62377],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=o.createContext({}),p=function(e){var t=o.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(r.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,u=d["".concat(r,".").concat(h)]||d[h]||m[h]||s;return n?o.createElement(u,i(i({ref:t},c),{},{components:n})):o.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=h;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<s;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},40621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var o=n(7896),a=(n(2784),n(30876));const s={title:"\ud83d\udcd3 1.1.4.6 Bootstrap Basic Elements",id:"1146-bootstrap-basic-elements",slug:"1146-bootstrap-basic-elements",hide_table_of_contents:!0,sidebar_position:44,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-1-introduction-to-programming/blob/main/4d_bootstrap_basic_elements.md"},i=void 0,l={unversionedId:"fidgetech-1-introduction-to-programming/git-html-and-css/1146-bootstrap-basic-elements",id:"fidgetech-1-introduction-to-programming/git-html-and-css/1146-bootstrap-basic-elements",title:"\ud83d\udcd3 1.1.4.6 Bootstrap Basic Elements",description:"In this lesson, we'll learn how to implement several of the most common Bootstrap resources and styles. These resources will make our projects look considerably nicer without much additional work.",source:"@site/docs/fidgetech-1-introduction-to-programming/git-html-and-css/4d-bootstrap-basic-elements.md",sourceDirName:"fidgetech-1-introduction-to-programming/git-html-and-css",slug:"/fidgetech-1-introduction-to-programming/git-html-and-css/1146-bootstrap-basic-elements",permalink:"/fidgetech-1-introduction-to-programming/git-html-and-css/1146-bootstrap-basic-elements",draft:!1,tags:[],version:"current",sidebarPosition:44,frontMatter:{title:"\ud83d\udcd3 1.1.4.6 Bootstrap Basic Elements",id:"1146-bootstrap-basic-elements",slug:"1146-bootstrap-basic-elements",hide_table_of_contents:!0,sidebar_position:44,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-1-introduction-to-programming/blob/main/4d_bootstrap_basic_elements.md"},sidebar:"fidgetech-1-introduction-to-programming",previous:{title:"\ud83d\udcd3 1.1.4.5 Downloading and Installing Bootstrap",permalink:"/fidgetech-1-introduction-to-programming/git-html-and-css/1145-downloading-and-installing-bootstrap"},next:{title:"\u270f\ufe0f 1.1.4.7 Practice: Installing and Implementing Bootstrap",permalink:"/fidgetech-1-introduction-to-programming/git-html-and-css/1147-practice-installing-and-implementing-bootstrap"}},r={},p=[{value:"Project Setup",id:"project-setup",level:2},{value:"Adding Bootstrap",id:"adding-bootstrap",level:2},{value:"Bootstrap Styles",id:"bootstrap-styles",level:2},{value:"Containers",id:"containers",level:3},{value:"Jumbotron",id:"jumbotron",level:3},{value:"Typography",id:"typography",level:3},{value:"Blockquotes",id:"blockquotes",level:4},{value:"Built-in Classes",id:"built-in-classes",level:3},{value:"Cards",id:"cards",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this lesson, we'll learn how to implement several of the most common Bootstrap resources and styles. These resources will make our projects look considerably nicer without much additional work."),(0,a.kt)("h2",{id:"project-setup"},"Project Setup"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We'll create a website to summarize what we've learned so far this in this section \u2014 and we'll add Bootstrap styles along the way."),(0,a.kt)("p",null,"Start by creating a new project directory called ",(0,a.kt)("inlineCode",{parentName:"p"},"section-in-review"),". It will contain an ",(0,a.kt)("inlineCode",{parentName:"p"},".html")," file named ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"css")," directory."),(0,a.kt)("p",null,"Now let's add some starter code to ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html"),":"),(0,a.kt)("div",{class:"filename"},"index.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html lang=\"en-US\">\n<head>\n  <title>My First Section at Epicodus</title>\n</head>\n<body>\n  <h1>My First Section at Epicodus</h1>\n  <p>\n    I've almost finished my first course section at Epicodus. Here are some of the things I've learned so far:\n  </p>\n  <h2>Command Line</h2>\n  <ul>\n    <li>Navigating my documents through the command line.</li>\n    <li>Creating new files and folders through the command line.</li>\n    <li>Moving and deleting files and folders through the command line.</li>\n    <li>Retrieving my current location from the command line.</li>\n  </ul>\n  <h2>Git and GitHub</h2>\n  <ul>\n    <li>Initializing local Git repository, and create remote GitHub repositories.</li>\n    <li>Tracking and committing changes with Git.</li>\n    <li>Pushing a local Git repository to a remote GitHub repository.</li>\n    <li>Branching a project to make multiple copies.</li>\n    <li>Merging multiple Git branches back together.</li>\n    <li>Cloning down a project from GitHub to my local machine.</li>\n    <li>Publishing a website on GitHub pages.</li>\n  </ul>\n  <h2>HTML</h2>\n  <ul>\n    <li>Using HTML tags to create websites.</li>\n    <li>Indenting and organizing HTML correctly.</li>\n    <li>Incorporating block elements.</li>\n    <li>Including inline elements.</li>\n    <li>Using both spans and divs.</li>\n    <li>Adding classes and ID's to style HTML with CSS.</li>\n  </ul>\n  <h2>CSS</h2>\n  <ul>\n    <li>Creating a stylesheet.</li>\n    <li>Using CSS selectors to specify an HTML element.</li>\n    <li>Writing CSS rules to style particular elements in my HTML.</li>\n    <li>Floating elements to create columns, sidebars, and other alignments.</li>\n    <li>Padding, margins, and the box model.</li>\n    <li>How CSS cascades to apply styles.</li>\n  </ul>\n  <h2>Bootstrap</h2>\n  <ul>\n    <li>Downloading and installing Bootstrap.</li>\n    <li>Adding Bootstrap styles to a website.</li>\n    <li>Navigating Bootstrap documentation.</li>\n    <li>Creating websites with Bootstrap.</li>\n  </ul>\n</body>\n</html>\n")),(0,a.kt)("p",null,"Let's take a look at our site:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/Bootstrap+Lessons/example-site-without-bootstrap-updated.png",alt:"example-site-without-bootstrap"})),(0,a.kt)("p",null,"Not very exciting so far. It's time to add Bootstrap!"),(0,a.kt)("h2",{id:"adding-bootstrap"},"Adding Bootstrap"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"As described in the ",(0,a.kt)("a",{parentName:"p",href:"https://old.learnhowtoprogram.com/fidgetech-1-introduction-to-programming/1-1-git-html-and-css/1-1-4-5-downloading-and-installing-bootstrap"},"Bootstrap: Downloading & Installing")," lesson, let's download a copy of Bootstrap and place the ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap.css")," stylesheet into our project's ",(0,a.kt)("inlineCode",{parentName:"p"},"css")," folder."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," We are taking this approach instead of a CDN because it can be useful to take a look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap.css")," file for development purposes. That's also why we aren't using the minified version."),(0,a.kt)("p",null,"Our project directory should be organized like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"section-in-review\n\u251c\u2500\u2500 css\n\u2502\xa0\xa0 \u2514\u2500\u2500 bootstrap.css\n\u2514\u2500\u2500 index.html\n")),(0,a.kt)("p",null,"Then, we'll link this Bootstrap stylesheet in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," tags of our HTML file:"),(0,a.kt)("div",{class:"filename"},"index.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'...\n<head>\n  <title>My First Section at Epicodus</title>\n  <link href="css/bootstrap.css" rel="stylesheet" type="text/css">\n</head>\n...\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(",(0,a.kt)("strong",{parentName:"em"},"Note:")," Remember, when ",(0,a.kt)("inlineCode",{parentName:"em"},"...")," is in a code snippet, this simply means that we've omitted code from the file we're depicting, in order to make it clearer to see where changes have occurred.)")),(0,a.kt)("h2",{id:"bootstrap-styles"},"Bootstrap Styles"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"If we refresh our page, we'll see it already looks different:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/Bootstrap+Lessons/example-site-with-bootstrap-updated.png",alt:"example-site-with-bootstrap"})),(0,a.kt)("p",null,"It looks a little better, but we've hardly scratched the surface of what we can do. Bootstrap provides many styling rules we can apply to our HTML. Let's add one now."),(0,a.kt)("h3",{id:"containers"},"Containers"),(0,a.kt)("p",null,"One of the most commonly-used Bootstrap elements is a ",(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/layout/overview/"},"container"),". Containers wrap our content and add padding that dynamically increases or decreases in size depending on the user's viewport."),(0,a.kt)("p",null,"We can add a container to our HTML like this:"),(0,a.kt)("div",{class:"filename"},"index.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n<head>\n  <title>My First Section at Epicodus</title>\n  <link href="css/bootstrap.css" rel="stylesheet" type="text/css">\n</head>\n<body>\n  <div class="container">\n\n    ...\n\n  </div>\n</body>\n</html>\n')),(0,a.kt)("p",null,"Here we've placed a div directly inside our ",(0,a.kt)("inlineCode",{parentName:"p"},"<body>")," tags with a class of ",(0,a.kt)("inlineCode",{parentName:"p"},"container"),". (Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"...")," is a placeholder for all our body HTML \u2014 don't remove the HTML from your own project.)"),(0,a.kt)("p",null,"If we refresh the page, we'll see that padding has been added around the edges of our content:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/Bootstrap+Lessons/site-with-container-updated.png",alt:"When we add a Bootstrap container, padding is automatically added."})),(0,a.kt)("p",null,"Also, if we resize the width of the browser window, we can see that the amount of padding automatically changes depending on the size of the viewport. When we integrate Bootstrap elements and components into our pages, they're automatically responsive."),(0,a.kt)("p",null,"Bootstrap is essentially a really big CSS stylesheet. Earlier, we learned how to ",(0,a.kt)("a",{parentName:"p",href:"https://old.learnhowtoprogram.com/fidgetech-1-introduction-to-programming/1-1-git-html-and-css/1-1-3-1-styling-with-classes"},"add classes to HTML elements")," to style our pages. Adding Bootstrap's built-in ",(0,a.kt)("inlineCode",{parentName:"p"},"container")," class is very similar. But instead of manually defining CSS rules that style anything with the ",(0,a.kt)("inlineCode",{parentName:"p"},"container")," class in our ",(0,a.kt)("em",{parentName:"p"},"own")," stylesheet, the Bootstrap stylesheet we included in our project ",(0,a.kt)("em",{parentName:"p"},"already has")," CSS rules for the ",(0,a.kt)("inlineCode",{parentName:"p"},"container")," class defined. All we need to do is add this class in order to make use of the CSS in the  ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap.css")," file!"),(0,a.kt)("h3",{id:"jumbotron"},"Jumbotron"),(0,a.kt)("p",null,"Another commonly-used Bootstrap element is something called a ",(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/jumbotron/"},"Jumbotron"),". Jumbotrons are primarily used to add emphasis to content on a page. They'll often be placed at the top of the page to act as a heading."),(0,a.kt)("p",null,"Just like the container, we can add a Jumbotron by including a div with the ",(0,a.kt)("inlineCode",{parentName:"p"},"jumbotron")," class wherever we'd like it to appear. Let's place ours at the top of the page, directly within our container:"),(0,a.kt)("div",{class:"filename"},"index.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'...\n\n  <body>\n    <div class="container">\n      <div class="jumbotron">\n        <h1>My First Section at Epicodus</h1>\n        <p>\n          I\'ve almost finished my first course section at Epicodus. Here are some of the things I\'ve learned so far:\n        </p>\n      </div>\n\n...\n')),(0,a.kt)("p",null,"We can refresh the page and see our new Jumbotron:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/Bootstrap+Lessons/site-with-jumbotron-updated.png",alt:"site-with-jumbotron"})),(0,a.kt)("p",null,"Once again, this element is automatically responsive. Our jumbotron will re-center itself and its text as the width of the viewport changes."),(0,a.kt)("h3",{id:"typography"},"Typography"),(0,a.kt)("h4",{id:"blockquotes"},"Blockquotes"),(0,a.kt)("p",null,"Bootstrap also includes many easy ways to style text. For instance, we can add ",(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.0/content/typography/"},"blockquotes")," to display nicely-formatted quotes on our page."),(0,a.kt)("p",null,"Let's add another section to our site. We'll call it \"Partnering\" and it will contain a quote from one of our partners this section:"),(0,a.kt)("div",{class:"filename"},"index.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'...\n\n      <h2>Bootstrap</h2>\n      <ul>\n        <li>Downloading and installing Bootstrap.</li>\n        <li>Adding Bootstrap styles to a website.</li>\n        <li>Navigating Bootstrap documentation.</li>\n        <li>Creating websites with Bootstrap.</li>\n      </ul>\n      <h2>Partnering</h2>\n      <blockquote class="blockquote">\n        <p>"It\'s been really good working with you!"</p>\n        <footer class="blockquote-footer">My partner the first day</footer>\n      </blockquote>\n    </div>\n  </body>\n</html>\n')),(0,a.kt)("p",null,"To do this, we need to add a ",(0,a.kt)("inlineCode",{parentName:"p"},"blockquote")," with a class of ",(0,a.kt)("inlineCode",{parentName:"p"},'"blockquote"'),". Inside that class, we can specify a ",(0,a.kt)("inlineCode",{parentName:"p"},"footer")," with a class of ",(0,a.kt)("inlineCode",{parentName:"p"},'"blockquote-footer"')," for the attribution of the quote. Check it out:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/Week-1-2020-images/Bootstrap+images/blockquote.png",alt:"A Bootstrap blockquote"})),(0,a.kt)("h3",{id:"built-in-classes"},"Built-in Classes"),(0,a.kt)("p",null,"Another great feature of Bootstrap is the wide variety of built-in classes we can add to almost any element."),(0,a.kt)("p",null,"Let's highlight a few concepts we found enjoyable during this course section in green. We can do this by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"bg-success")," class to various ",(0,a.kt)("inlineCode",{parentName:"p"},"<li>")," tags on our page."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"bg"),' stands for "background", and ',(0,a.kt)("inlineCode",{parentName:"p"},"success")," is a name used throughout Bootstrap to refer to a particular shade of green:"),(0,a.kt)("div",{class:"filename"},"index.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'...\n\n      <h2>Git and GitHub</h2>\n      <ul>\n\n         ...\n\n        <li class="bg-success">Publishing a website on GitHub pages.</li>\n\n         ...\n\n      </ul>\n      <h2>CSS</h2>\n      <ul>\n\n        ...\n\n        <li class="bg-success">How CSS cascades to apply styles.</li>\n      </ul>\n      <h2>Bootstrap</h2>\n      <ul>\n\n        ...\n\n        <li class="bg-success">Creating websites with Bootstrap.</li>\n...\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/Bootstrap+Lessons/bootstrap-bg-success-updated.png",alt:"The bg-success class adds a green background to our list items."})),(0,a.kt)("p",null,"Similarly, we could use the ",(0,a.kt)("inlineCode",{parentName:"p"},"bg-info")," class on our existing blockquote to add some color. Try it out on some of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<li>"),"s in the project."),(0,a.kt)("h3",{id:"cards"},"Cards"),(0,a.kt)("p",null,"Another simple effect that can easily organize a page is a ",(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/card/"},"card"),". It allows us to organize content inside a card. Let's update our HTML and then take a look."),(0,a.kt)("div",{class:"filename"},"index.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'...\n    <div class="card">\n      <div class="card-body">\n        <h2 class="card-title">Command Line</h2>\n        <ul class="card-text">\n          <li>Navigating my documents through the command line.</li>\n          <li>Creating new files and folders through the command line.</li>\n          <li>Moving and deleting files and folders through the command line.</li>\n          <li>Retrieving my current location from the command line.</li>\n        </ul>\n      </div>\n    </div>\n...\n')),(0,a.kt)("p",null,"Our card has a class of ",(0,a.kt)("inlineCode",{parentName:"p"},'"card"')," and then we have various classes inside the card depending on the element: ",(0,a.kt)("inlineCode",{parentName:"p"},'"card-body"')," for the body of the card, ",(0,a.kt)("inlineCode",{parentName:"p"},'"card-title"')," for the title, and ",(0,a.kt)("inlineCode",{parentName:"p"},'"card-text"')," for the text. Here's what it looks like:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/Week-1-2020-images/Bootstrap+images/bootstrap-card.png",alt:"This is an example of a very basic card."})),(0,a.kt)("p",null,"This is a very basic card and we can do a lot more with it \u2014 for instance, there's an option to add images that fit inside the card as well. Just check out the ",(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/card/"},"documentation"),"."),(0,a.kt)("p",null,"Cards are also automatically responsive and will resize automatically as the user's viewport changes in size."),(0,a.kt)("p",null,"While our site still looks relatively plain, we can do a lot more with Bootstrap. With just a few additional HTML tags, we can quickly transform the style and format of our pages. Make sure to check out the ",(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/alerts/"},"components documentation")," to see some of the things we can do with Bootstrap."),(0,a.kt)("p",null,"In the next few lessons, we'll explore additional Bootstrap elements, how to integrate our own CSS stylesheets with Bootstrap styles, and more."),(0,a.kt)("p",null,"As we move forward in the course, take advantage of Bootstrap to make professional, polished pages for all your projects. You aren't expected to be an expert on styling \u2014 but the nice thing about Bootstrap is that you don't have to be."))}m.isMDXComponent=!0}}]);