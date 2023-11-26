"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[25483],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,u=d["".concat(s,".").concat(m)]||d[m]||h[m]||r;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7896),i=(n(2784),n(30876));const r={title:"\ud83d\udcd3 4.4.0.2 Making an API Call with fetch()",id:"4402-making-an-api-call-with-fetch",slug:"4402-making-an-api-call-with-fetch",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-4-react/blob/main/0b_making_an_api_call_with_fetch.md"},o=void 0,l={unversionedId:"fidgetech-4-react/react-with-apis/4402-making-an-api-call-with-fetch",id:"fidgetech-4-react/react-with-apis/4402-making-an-api-call-with-fetch",title:"\ud83d\udcd3 4.4.0.2 Making an API Call with fetch()",description:"In this lesson, we'll build a small application that will use fetch() to make an API call to the New York Times. This example is very similar to the one that the React documentation provides, but with a few modifications to follow best practices.",source:"@site/docs/fidgetech-4-react/react-with-apis/0b-making-an-api-call-with-fetch.md",sourceDirName:"fidgetech-4-react/react-with-apis",slug:"/fidgetech-4-react/react-with-apis/4402-making-an-api-call-with-fetch",permalink:"/fidgetech-4-react/react-with-apis/4402-making-an-api-call-with-fetch",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\ud83d\udcd3 4.4.0.2 Making an API Call with fetch()",id:"4402-making-an-api-call-with-fetch",slug:"4402-making-an-api-call-with-fetch",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-4-react/blob/main/0b_making_an_api_call_with_fetch.md"},sidebar:"fidgetech-4-react",previous:{title:"\ud83d\udcd3 4.4.0.1 APIs and Further Exploration Objectives",permalink:"/fidgetech-4-react/react-with-apis/4401-apis-and-further-exploration-objectives"},next:{title:"\ud83d\udcd3 4.4.0.3 Introduction to Redux Middleware",permalink:"/fidgetech-4-react/react-with-apis/4403-introduction-to-redux-middleware"}},s={},p=[],c={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this lesson, we'll build a small application that will use ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch()")," to make an API call to the New York Times. This example is very similar to the one that the ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/faq-ajax.html"},"React documentation")," provides, but with a few modifications to follow best practices."),(0,i.kt)("p",null,"We've spent the last three course sections building out our help queue so it's been a while since we've built a fresh application. Run the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npx create-react-app react-with-api\n")),(0,i.kt)("p",null,"Then make sure you're using the pinned version of ",(0,i.kt)("inlineCode",{parentName:"p"},"react-scripts")," (unless you feel like working with the latest version and are prepared to handle any versioning issues that come up). ",(0,i.kt)("inlineCode",{parentName:"p"},"cd")," into the project and run the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install --save-exact react-scripts@3.2.0\n")),(0,i.kt)("p",null,"You may already have a New York Times API key from a previous Epicodus project in this ",(0,i.kt)("a",{parentName:"p",href:"https://old.learnhowtoprogram.com/fidgetech-3-c-and-net/3-5-authentication-with-identity/3-5-2-1-api-calls-with-restsharp"},"lesson"),". If you don't, go to ",(0,i.kt)("a",{parentName:"p",href:"https://developer.nytimes.com/get-started"},"Get Started")," at the NYT's Developer site. Their documentation is excellent. You'll want to acquire an API key for their \"Top Stories API.\""),(0,i.kt)("p",null,"Next, let's add ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," file. Once you've made a commit, go ahead and create a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file in the root directory of the project."),(0,i.kt)("p",null,"Finally, add the following to the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file. Don't forget that all environmental variables need to have ",(0,i.kt)("inlineCode",{parentName:"p"},"REACT_APP")," as a prefix or they won't work."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'REACT_APP_API_KEY="Your NYT Top Stories API key goes here"\n')),(0,i.kt)("p",null,"Our application will have two components: ",(0,i.kt)("inlineCode",{parentName:"p"},"App.js")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Headlines.js"),". (We could do this all in ",(0,i.kt)("inlineCode",{parentName:"p"},"App.js")," but we will be building out our application further in the next lesson.)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note: You will need to create a components folder and make sure your import statements correctly reflect this before proceeding. (App.js, index.js and others may be affected)")),(0,i.kt)("p",null,"Here's the code in ",(0,i.kt)("inlineCode",{parentName:"p"},"App.js"),":"),(0,i.kt)("div",{class:"filename"},"src/components/App.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport '../App.css';\nimport Headlines from './Headlines';\n\nfunction App() {\n  return (\n    <React.Fragment>\n      < Headlines />\n    </React.Fragment>\n  );\n}\n\nexport default App;\n")),(0,i.kt)("p",null,"It's just a container for a ",(0,i.kt)("inlineCode",{parentName:"p"},"Headlines")," component that we haven't created yet. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Headlines")," component will have the bulk of our code. Because we will be using state, it will be a class component. Let's start by adding some local state:"),(0,i.kt)("div",{class:"filename"},"src/components/Headlines.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\n\nclass Headlines extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      error: null,\n      isLoaded: false,\n      headlines: []\n    };\n  }\n  \n  render() {\n    ...\n  }\n}\n\nexport default Headlines;\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"this.state")," has three properties: ",(0,i.kt)("inlineCode",{parentName:"p"},"error"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"isLoaded"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"headlines"),". "),(0,i.kt)("p",null,"The initial state of the ",(0,i.kt)("inlineCode",{parentName:"p"},"error")," property is ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),". If the API call has an error, this property will be changed."),(0,i.kt)("p",null,"The initial state of ",(0,i.kt)("inlineCode",{parentName:"p"},"isLoaded")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". Our component will mount before we make an API call. We'll put the code for the API call in the ",(0,i.kt)("inlineCode",{parentName:"p"},"componentDidMount")," lifecycle method so it runs as soon as our component is mounted. Once the call is complete, ",(0,i.kt)("inlineCode",{parentName:"p"},"isLoaded")," will be switched to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("p",null,"Finally, ",(0,i.kt)("inlineCode",{parentName:"p"},"headlines")," is an empty array. It will contain the NYT headlines in JSON format. Once the API call is made, we will update ",(0,i.kt)("inlineCode",{parentName:"p"},"headlines")," to hold this information."),(0,i.kt)("p",null,"Next, let's write a method that will make an API call and update our state:"),(0,i.kt)("div",{class:"filename"},"src/components/Headlines.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n\n    makeApiCall = () => {\n      fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)\n        .then(response => response.json())\n        .then((jsonifiedResponse) => {\n          this.setState({\n            isLoaded: true,\n            headlines: jsonifiedResponse.results\n          });\n        })\n        .catch((error) => {\n          this.setState({\n            isLoaded: true,\n            error\n          });\n        });\n    }\n\n...\n")),(0,i.kt)("p",null,"We use the built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch()")," method (JavaScript, not React) to make our API call. The URL for the API call is in backticks so that we can use a template string for our API key, which is stored in an environmental variable."),(0,i.kt)("p",null,"Once the API call is complete, the response will be converted to JSON. Then, once it's been converted, we'll have our results. If all went well, we call ",(0,i.kt)("inlineCode",{parentName:"p"},"this.setState()")," and set ",(0,i.kt)("inlineCode",{parentName:"p"},"isLoaded")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". Because the headlines are stored in a property of the response called ",(0,i.kt)("inlineCode",{parentName:"p"},"results"),", we update the ",(0,i.kt)("inlineCode",{parentName:"p"},"headlines")," state to be ",(0,i.kt)("inlineCode",{parentName:"p"},"jsonifiedResponse.results"),"."),(0,i.kt)("p",null,"Otherwise, we set ",(0,i.kt)("inlineCode",{parentName:"p"},"isLoaded")," to true and set the ",(0,i.kt)("inlineCode",{parentName:"p"},"error")," property to the error that the API call returns."),(0,i.kt)("p",null,"As noted in the ",(0,i.kt)("a",{parentName:"p",href:"https://old.learnhowtoprogram.com/fidgetech-2-intermediate-javascript/2-3-asynchrony-and-apis/2-3-2-2-fetch-api"},"Intermediate JavaScript lesson on ",(0,i.kt)("inlineCode",{parentName:"a"},"fetch()")),", a catch block with ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch()")," will only catch internal server errors - not issues like a 404 error code. You should add functionality to handle various codes in your own ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch()")," calls."),(0,i.kt)("p",null,"Next, we need to determine where this method should be called. As we already stated, we want it to be called as soon as the component mounts:"),(0,i.kt)("div",{class:"filename"},"src/components/Headlines.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\ncomponentDidMount() {\n  this.makeApiCall()\n}\n...\n")),(0,i.kt)("p",null,"Of course, there is a downside to this - the potential to hit API limits very quickly. Any time the component is reloaded, another call will be made. If you're using this approach to make calls to an API that has strict limits, we recommend being careful about having a local server running while you're working - because every time you make a change to your code, it'll trigger a component reload and another API call."),(0,i.kt)("p",null,"Finally, we need to add some conditionals to our ",(0,i.kt)("inlineCode",{parentName:"p"},"render()")," method. These will determine which of the following our users will see:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'A "Loading..." message'),(0,i.kt)("li",{parentName:"ul"},"The daily headlines"),(0,i.kt)("li",{parentName:"ul"},"An error")),(0,i.kt)("p",null,"Here's the ",(0,i.kt)("inlineCode",{parentName:"p"},"render()")," method:"),(0,i.kt)("div",{class:"filename"},"src/components/Headlines.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n\nrender() {\n  const { error, isLoaded, headlines } = this.state;\n  if (error) {\n    return <React.Fragment>Error: {error.message}</React.Fragment>;\n  } else if (!isLoaded) {\n    return <React.Fragment>Loading...</React.Fragment>;\n  } else {\n    return (\n      <React.Fragment>\n        <h1>Headlines</h1>\n        <ul>\n          {headlines.map((headline, index) =>\n            <li key={index}>\n              <h3>{headline.title}</h3>\n              <p>{headline.abstract}</p>\n            </li>\n          )}\n        </ul>\n      </React.Fragment>\n    );\n  }\n}\n\n...\n")),(0,i.kt)("p",null,"We start by deconstructing ",(0,i.kt)("inlineCode",{parentName:"p"},"this.state")," to extract each of its properties. (This is much cleaner than needing to write ",(0,i.kt)("inlineCode",{parentName:"p"},"this.state.headlines")," and so on.)"),(0,i.kt)("p",null,"If there's an error, we'll return an error message. As long as error's default state of ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," isn't changed, this conditional won't be triggered."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"isLoaded"),' is false, we\'ll render a "Loading..." message.'),(0,i.kt)("p",null,"Otherwise, we'll return the headlines. Note that we are using the ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," as a key just as we did in the React Fundamentals course section. In a more complex application, there could be valid reasons to give the headlines their own IDs, but in this particular use case, we just want to make it easier for React to complete the reconciliation process as needed."),(0,i.kt)("p",null,"Each headline has a ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"abstract")," property which we display on the page."),(0,i.kt)("p",null,"We can do a simple implementation of an API call in this manner if we only want our data in one component - or perhaps a handful of components that are using shared state. However, if we want this data to be shared with many parts of our application, we might want to use Redux instead. To do so, we need to combine it with middleware. Over the next several lessons, we'll learn about using middleware and then use Redux to store state from our API call."))}h.isMDXComponent=!0}}]);