"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[74690],{30876:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var i=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),u=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return t?i.createElement(m,r(r({ref:n},c),{},{components:t})):i.createElement(m,r({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var u=2;u<o;u++)r[u]=t[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},26454:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var i=t(7896),a=(t(2784),t(30876));const o={title:"\ud83d\udcd3 4.3.1.4 Firebase Authentication",id:"4314-firebase-authentication",slug:"4314-firebase-authentication",hide_table_of_contents:!0,sidebar_position:17,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-4-react/blob/main/1d_firebase_authentication.md"},r=void 0,s={unversionedId:"fidgetech-4-react/react-with-nosql/4314-firebase-authentication",id:"fidgetech-4-react/react-with-nosql/4314-firebase-authentication",title:"\ud83d\udcd3 4.3.1.4 Firebase Authentication",description:"Let's imagine that we want to expand our help queue's functionality for online Epicodus students. We don't want people that aren't students to access the queue - so we'll make the queue accessible only if a user is signed in. Over the next couple of lessons, we'll add this functionality. In this lesson, we'll add Firebase authentication to our Signin component. Then, in the next lesson, we'll add basic authorization so that only signed-in users can add tickets.",source:"@site/docs/fidgetech-4-react/react-with-nosql/1d-firebase-authentication.md",sourceDirName:"fidgetech-4-react/react-with-nosql",slug:"/fidgetech-4-react/react-with-nosql/4314-firebase-authentication",permalink:"/fidgetech-4-react/react-with-nosql/4314-firebase-authentication",draft:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"\ud83d\udcd3 4.3.1.4 Firebase Authentication",id:"4314-firebase-authentication",slug:"4314-firebase-authentication",hide_table_of_contents:!0,sidebar_position:17,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-4-react/blob/main/1d_firebase_authentication.md"},sidebar:"fidgetech-4-react",previous:{title:"\ud83d\udcd3 4.3.1.3 React Router",permalink:"/fidgetech-4-react/react-with-nosql/4313-react-router"},next:{title:"\ud83d\udcd3 4.3.1.5 Firebase Authorization",permalink:"/fidgetech-4-react/react-with-nosql/4315-firebase-authorization"}},l={},u=[{value:"Firebase Authentication",id:"firebase-authentication",level:3},{value:"Signing Up",id:"signing-up",level:3},{value:"Signing In",id:"signing-in",level:3},{value:"Signing Out",id:"signing-out",level:3}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Let's imagine that we want to expand our help queue's functionality for online Epicodus students. We don't want people that aren't students to access the queue - so we'll make the queue accessible only if a user is signed in. Over the next couple of lessons, we'll add this functionality. In this lesson, we'll add Firebase authentication to our ",(0,a.kt)("inlineCode",{parentName:"p"},"Signin")," component. Then, in the next lesson, we'll add basic authorization so that only signed-in users can add tickets."),(0,a.kt)("p",null,"There are many, many ways to add Firebase authentication and authorization - ranging from doing everything from scratch (including creating custom reducers for authentication) to using Firebase libraries to using small open-source projects. In the world of React, the options can be a bit overwhelming."),(0,a.kt)("p",null,"The solution we'll use combines the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Leveraging the functionality of external libraries we're already using (",(0,a.kt)("inlineCode",{parentName:"li"},"react-redux-firebase")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"firebase"),");"),(0,a.kt)("li",{parentName:"ul"},"Using the simplest implementation that the Firebase documentation offers;"),(0,a.kt)("li",{parentName:"ul"},"Avoiding adding additional libraries if they aren't needed (we won't add any).")),(0,a.kt)("h3",{id:"firebase-authentication"},"Firebase Authentication"),(0,a.kt)("p",null,"Regardless of how we choose to incorporate Firebase authentication, we need to activate it in the Firebase console before we start adding it to our application."),(0,a.kt)("p",null,'Navigate to your project in the console, click on "Authentication", and then the "Sign-in method" tab. By default, authentication isn\'t enabled. We\'ll see quite a few different ways Firebase can authenticate users ranging from an email and password to sign in with Google, Facebook or Github.'),(0,a.kt)("p",null,'Click on the first option: "Email/password." Then enable "Allow users to sign up using their email address and password." We won\'t need "Email link" for the time being.'),(0,a.kt)("p",null,"Note that there is a \"Users\" tab at the upper left corner of the screen. If we click on this tab, we'll see there are no users yet. This is a great place to add admins manually for a smaller site so other users can't access that functionality via the browser. We won't add users manually right now but keep this in mind if you just want admins to access the UI of a site."),(0,a.kt)("p",null,"Now we're ready to start coding. We'll need to make some small changes to our entry point file:"),(0,a.kt)("div",{class:"filename"},"src/index.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\nimport 'firebase/auth';\n\n...\n\nconst rrfProps = {\n  ...\n  config: {\n    userProfile: \"users\",\n    useFirestoreForProfile: true,\n    },\n  ...\n}\n\n...\n")),(0,a.kt)("p",null,"First, we need to import ",(0,a.kt)("inlineCode",{parentName:"p"},"'firebase/auth'"),". Then we need to make sure our ",(0,a.kt)("inlineCode",{parentName:"p"},"rrfProps")," includes the ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," key-value pairs listed above. The React Redux Firebase library will allow us to check auth state throughout our application. This is very helpful because otherwise we'd have to do it ourselves using custom reducers."),(0,a.kt)("p",null,"Now it's time to update our ",(0,a.kt)("inlineCode",{parentName:"p"},"Signin")," component. In the interest of keeping things simple, we'll add functionality for signing up, signing in, and signing out on this page."),(0,a.kt)("p",null,"We'll start by importing ",(0,a.kt)("inlineCode",{parentName:"p"},"firebase"),":"),(0,a.kt)("div",{class:"filename"},"src/components/Signin.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'...\nimport firebase from "firebase/app";\n...\n')),(0,a.kt)("p",null,"This will give us access to ",(0,a.kt)("inlineCode",{parentName:"p"},"firebase.auth()")," methods - which means Firebase will take care of the hard work of authentication for us."),(0,a.kt)("h3",{id:"signing-up"},"Signing Up"),(0,a.kt)("p",null,"We'll start with a sign up form:"),(0,a.kt)("div",{class:"filename"},"src/components/Signin.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\n  return (\n    <React.Fragment>\n      <h1>Sign up</h1>\n      <form onSubmit={doSignUp}>\n        <input\n          type='text'\n          name='email'\n          placeholder='email' />\n        <input\n          type='password'\n          name='password'\n          placeholder='Password' />\n        <button type='submit'>Sign up</button>\n      </form>\n    </React.Fragment>\n  )\n...\n")),(0,a.kt)("p",null,"We create a simple form that will trigger a function called ",(0,a.kt)("inlineCode",{parentName:"p"},"doSignUp")," on submission. This will have two fields: ",(0,a.kt)("inlineCode",{parentName:"p"},"email")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"password"),". (A password confirmation field would be nice but we are keeping this simple.) Note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"password")," field has a type of ",(0,a.kt)("inlineCode",{parentName:"p"},"password")," so the characters won't be visible."),(0,a.kt)("p",null,"Now let's write the corresponding function:"),(0,a.kt)("div",{class:"filename"},"src/components/Signin.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'...\nfunction Signin(){\n  function doSignUp(event) {\n    event.preventDefault();\n    const email = event.target.email.value;\n    const password = event.target.password.value;\n    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){\n      console.log("successfully signed up!");\n    }).catch(function(error) {\n      console.log(error.message);\n    });\n  }\n\n  return (\n    ...\n  )\n\n...\n}\n')),(0,a.kt)("p",null,"We start by passing in ",(0,a.kt)("inlineCode",{parentName:"p"},"event")," to our function and then calling ",(0,a.kt)("inlineCode",{parentName:"p"},"event.preventDefault()")," to prevent the default behavior of submitting a form (a page reload). Then we grab the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"email")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"password")," from the form."),(0,a.kt)("p",null,"Next, Firebase comes into play:"),(0,a.kt)("div",{class:"filename"},"src/components/Signin.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){\n  console.log("Successfully signed up!");\n}).catch(function(error) {\n  console.log(error.message);\n});\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"firebase.auth().createUserWithEmailAndPassword()")," method takes two arguments: an email and password. It returns a promise, which means we can attach ",(0,a.kt)("inlineCode",{parentName:"p"},"then")," to it. We could put any code in here - but we'll just add a ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log()")," to make sure we've successfully signed up."),(0,a.kt)("p",null,"We also add a ",(0,a.kt)("inlineCode",{parentName:"p"},"catch()")," block. Firebase returns useful error messages (such as if a password isn't long enough or the user already exists in the database). These messages should be returned to the user, not logged to the console - but we'll leave that to you to add to your own applications."),(0,a.kt)("p",null,'At this point, we can run our application and sign up a new user. Try it out - and check out the "Users" tab of the "Authentication" pane in the Firebase console. You\'ll see that a new user has been added!'),(0,a.kt)("h3",{id:"signing-in"},"Signing In"),(0,a.kt)("p",null,"The process looks very similar for signing in. To keep things simple, we'll place this functionality in the same component we've been using for auth. Here's the form:"),(0,a.kt)("div",{class:"filename"},"src/components/Signin.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"...\n<React.Fragment>\n...\n\n  {/* Signup form lives here */}\n\n  <h1>Sign In</h1>\n  <form onSubmit={doSignIn}>\n    <input\n      type='text'\n      name='signinEmail'\n      placeholder='email' />\n    <input\n      type='password'\n      name='signinPassword'\n      placeholder='Password' />\n    <button type='submit'>Sign in</button>\n  </form>\n</React.Fragment>\n...\n")),(0,a.kt)("p",null,"It's almost exactly the same as our sign in form."),(0,a.kt)("p",null,"Next, the function, which is very similar to the function we just created for signing up:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'...\n\n//doSignUp lives here\n\nfunction doSignIn(event) {\n  event.preventDefault();\n  const email = event.target.signinEmail.value;\n  const password = event.target.signinPassword.value;\n  firebase.auth().signInWithEmailAndPassword(email, password).then(function() {\n    console.log("Successfully signed in!");\n  }).catch(function(error) {\n    console.log(error.message);\n  });\n}\n...\n')),(0,a.kt)("p",null,"The main difference here is that we are using the ",(0,a.kt)("inlineCode",{parentName:"p"},"firebase.auth().signInWithEmailAndPassword()")," method."),(0,a.kt)("h3",{id:"signing-out"},"Signing Out"),(0,a.kt)("p",null,"Signing out doesn't even require a form. We just need a sign-out button in our jsx:"),(0,a.kt)("div",{class:"filename"},"src/components/Signin.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"...\n  <h1>Sign Out</h1>\n  <button onClick={doSignOut}>Sign out</button>\n</React.Fragment>\n...\n")),(0,a.kt)("p",null,"Here's the corresponding function:"),(0,a.kt)("div",{class:"filename"},"src/components/Signin.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'...\nfunction doSignOut() {\n  firebase.auth().signOut().then(function() {\n    console.log("Successfully signed out!");\n  }).catch(function(error) {\n    console.log(error.message);\n  });\n}\n...\n')),(0,a.kt)("p",null,"We use the ",(0,a.kt)("inlineCode",{parentName:"p"},"firebase.auth().signOut()")," method, which also returns a promise."),(0,a.kt)("p",null,"At this point, we can sign up, sign in, and sign out - but none of this is very helpful without authorization. We'll cover that in the next lesson. Fortunately, the React Redux Firebase library makes it simple!"))}d.isMDXComponent=!0}}]);