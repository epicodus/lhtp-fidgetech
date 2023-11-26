"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[54776],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(7896),i=(n(2784),n(30876));const r={title:"\ud83d\udcd3 4.3.1.5 Firebase Authorization",id:"4315-firebase-authorization",slug:"4315-firebase-authorization",hide_table_of_contents:!0,sidebar_position:18,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-4-react/blob/main/1e_firebase_authorization.md"},o=void 0,s={unversionedId:"fidgetech-4-react/react-with-nosql/4315-firebase-authorization",id:"fidgetech-4-react/react-with-nosql/4315-firebase-authorization",title:"\ud83d\udcd3 4.3.1.5 Firebase Authorization",description:"In the last lesson, we added Firebase authentication to our Signin component. However, at this point, it really doesn't make a difference because our application doesn't care whether a user is signed in or not. In this lesson, we'll do some basic authorization to lock down the queue if a user isn't signed in yet.",source:"@site/docs/fidgetech-4-react/react-with-nosql/1e-firebase-authorization.md",sourceDirName:"fidgetech-4-react/react-with-nosql",slug:"/fidgetech-4-react/react-with-nosql/4315-firebase-authorization",permalink:"/fidgetech-4-react/react-with-nosql/4315-firebase-authorization",draft:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"\ud83d\udcd3 4.3.1.5 Firebase Authorization",id:"4315-firebase-authorization",slug:"4315-firebase-authorization",hide_table_of_contents:!0,sidebar_position:18,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-4-react/blob/main/1e_firebase_authorization.md"},sidebar:"fidgetech-4-react",previous:{title:"\ud83d\udcd3 4.3.1.4 Firebase Authentication",permalink:"/fidgetech-4-react/react-with-nosql/4314-firebase-authentication"},next:{title:"\ud83d\udcd3 4.3.2.1 Hosting with Firebase",permalink:"/fidgetech-4-react/react-with-nosql/4321-hosting-with-firebase"}},l={},u=[{value:"Adding Basic Authorization to Help Queue",id:"adding-basic-authorization-to-help-queue",level:3}],c={toc:u},p="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the last lesson, we added Firebase authentication to our ",(0,i.kt)("inlineCode",{parentName:"p"},"Signin")," component. However, at this point, it really doesn't make a difference because our application doesn't care whether a user is signed in or not. In this lesson, we'll do some basic authorization to lock down the queue if a user isn't signed in yet."),(0,i.kt)("p",null,"In order to do this, we'll make some changes to ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketControl.js"),"."),(0,i.kt)("h3",{id:"adding-basic-authorization-to-help-queue"},"Adding Basic Authorization to Help Queue"),(0,i.kt)("p",null,"We'll start by importing ",(0,i.kt)("inlineCode",{parentName:"p"},"isLoaded")," from React Redux Firebase. We're already importing ",(0,i.kt)("inlineCode",{parentName:"p"},"withFirestore")," from this library so we'll just add it to the list of imports."),(0,i.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { withFirestore, isLoaded } from 'react-redux-firebase';\n")),(0,i.kt)("p",null,"Next, we'll add a few conditionals to ",(0,i.kt)("inlineCode",{parentName:"p"},"render()"),":"),(0,i.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"render(){\n  const auth = this.props.firebase.auth();\n  if (!isLoaded(auth)) {\n    return (\n      <React.Fragment>\n        <h1>Loading...</h1>\n      </React.Fragment>\n    )\n  }\n  if ((isLoaded(auth)) && (auth.currentUser == null)) {\n    return (\n      <React.Fragment>\n        <h1>You must be signed in to access the queue.</h1>\n      </React.Fragment>\n    )\n  } \n  if ((isLoaded(auth)) && (auth.currentUser != null)) {\n    // All of the code previously in our render() method should go in this conditional.\n  }\n}\n")),(0,i.kt)("p",null,"Let's look at the first new line of code in the snippet above:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const auth = this.props.firebase.auth();\n")),(0,i.kt)("p",null,"Remember how the ",(0,i.kt)("inlineCode",{parentName:"p"},"withFirestore()")," HOC provides access to ",(0,i.kt)("inlineCode",{parentName:"p"},"this.props.firestore"),"? Well, fortunately for us, it also provides access to ",(0,i.kt)("inlineCode",{parentName:"p"},"this.props.firebase"),". Even though we are using Firestore for our database, authentication itself is provided by Firebase. We can call the ",(0,i.kt)("inlineCode",{parentName:"p"},"auth()")," method to determine the authentication status of our client."),(0,i.kt)("p",null,"Next, we check if ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," has properly been loaded:"),(0,i.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  if (!isLoaded(auth)) {\n    return (\n      <React.Fragment>\n        <h1>Loading...</h1>\n      </React.Fragment>\n    )\n  }\n")),(0,i.kt)("p",null,"This is why we imported the ",(0,i.kt)("inlineCode",{parentName:"p"},"isLoaded()")," method from React Redux Firebase. It will check to see if the auth state has been loaded or not. If it hasn't, our help queue will render ",(0,i.kt)("inlineCode",{parentName:"p"},"Loading..."),"."),(0,i.kt)("p",null,"Next, we'll check to see if the ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," state is loaded and whether ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," has a ",(0,i.kt)("inlineCode",{parentName:"p"},"currentUser")," property that is ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),":"),(0,i.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  if ((isLoaded(auth)) && (auth.currentUser == null)) {\n    return (\n      <React.Fragment>\n        <h1>You must be signed in to access the queue.</h1>\n      </React.Fragment>\n    )\n  }\n")),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"auth.currentUser")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),", we know that the client isn't signed in. We'll return a message that says a user must be signed in to access the queue."),(0,i.kt)("p",null,"Our final conditional tests the following:"),(0,i.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  if ((isLoaded(auth)) && (auth.currentUser != null)) {\n    // All of the code previously in our render() method should go in this conditional.\n  }\n")),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," is loaded and the current user isn't ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),", we know our client is logged in. There are a number of other useful properties on ",(0,i.kt)("inlineCode",{parentName:"p"},"currentUser"),", including ",(0,i.kt)("inlineCode",{parentName:"p"},"email"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"displayName")," and so on. Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"email")," property will have a value (because users must sign up with an email and password) but ",(0,i.kt)("inlineCode",{parentName:"p"},"displayName")," will not. If you use sign in with Google as an option, though, ",(0,i.kt)("inlineCode",{parentName:"p"},"displayName")," will have a value. This can be helpful if you want to show a user's name or email in the navbar."),(0,i.kt)("p",null,"Note: Make sure you route with the buttons we put in the navbar. If you refresh the page or type the URL in manually, the authentication state will not persist in our application. Adding this persistence involves additional legwork which we won't be covering here."),(0,i.kt)("p",null,"In this lesson, we've demonstrated how we can use authorization to determine what a component should render."),(0,i.kt)("p",null,"However, we've barely scratched the surface of what we can do with authentication and authorization. We recommend checking out the Firebase ",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/auth"},"documentation for authentication")," for more information on different ways a user can be authenticated."),(0,i.kt)("p",null,"Note that Firebase recommends using a library called ",(0,i.kt)("inlineCode",{parentName:"p"},"firebase-ui")," - you may want to explore this further on your own."),(0,i.kt)("p",null,"Firebase also provides a drop-in auth solution for React called ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/firebase/firebaseui-web-react"},(0,i.kt)("inlineCode",{parentName:"a"},"firebase-web-react")),"."),(0,i.kt)("p",null,"We recommend the libraries above if you want to explore authentication with Firebase and React further. There are also some smaller open-source libraries - while these work, they won't have the same level of support that Firebase-backed libraries have so we won't include them here."),(0,i.kt)("p",null,"You may also find that you want to protect routes in your application. React Router provides this functionality. Check out React Router's ",(0,i.kt)("a",{parentName:"p",href:"https://reacttraining.com/react-router/web/example/auth-workflow"},"Redirects (Auth) documentation")," for more information."),(0,i.kt)("p",null,"Finally, you may also want to look at the ",(0,i.kt)("a",{parentName:"p",href:"http://react-redux-firebase.com/docs/recipes/auth.html"},"React Redux Firebase authentication recipes")," as well. They provide some common use cases for using authorization with React Redux Firebase including creating protected routes, waiting for authorization to load, and combining React Redux Firebase with ",(0,i.kt)("inlineCode",{parentName:"p"},"firebase-ui"),"."),(0,i.kt)("p",null,"The use case we provided in this lesson is simple - and larger applications will likely need more robust authentication and authorization."))}h.isMDXComponent=!0}}]);