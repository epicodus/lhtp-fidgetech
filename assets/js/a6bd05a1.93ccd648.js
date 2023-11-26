"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[44199],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},26576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7896),i=(n(2784),n(30876));const r={title:"\ud83d\udcd3 4.4.0.7 Building an API Application with React and Redux: Part 2",id:"4407-building-an-api-application-with-react-and-redux-part-2",slug:"4407-building-an-api-application-with-react-and-redux-part-2",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-4-react/blob/main/0g_finishing_up_api_with_redux.md"},o=void 0,l={unversionedId:"fidgetech-4-react/react-with-apis/4407-building-an-api-application-with-react-and-redux-part-2",id:"fidgetech-4-react/react-with-apis/4407-building-an-api-application-with-react-and-redux-part-2",title:"\ud83d\udcd3 4.4.0.7 Building an API Application with React and Redux: Part 2",description:"Now that we've created an asynchronous action to handle our API call, we only have a few things left to do to get our application up and running. Let's take a look at the changes we'll be making to the Headlines component:",source:"@site/docs/fidgetech-4-react/react-with-apis/0g-finishing-up-api-with-redux.md",sourceDirName:"fidgetech-4-react/react-with-apis",slug:"/fidgetech-4-react/react-with-apis/4407-building-an-api-application-with-react-and-redux-part-2",permalink:"/fidgetech-4-react/react-with-apis/4407-building-an-api-application-with-react-and-redux-part-2",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"\ud83d\udcd3 4.4.0.7 Building an API Application with React and Redux: Part 2",id:"4407-building-an-api-application-with-react-and-redux-part-2",slug:"4407-building-an-api-application-with-react-and-redux-part-2",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-4-react/blob/main/0g_finishing_up_api_with_redux.md"},sidebar:"fidgetech-4-react",previous:{title:"\ud83d\udcd3 4.4.0.6 Async Actions with Redux Thunk",permalink:"/fidgetech-4-react/react-with-apis/4406-async-actions-with-redux-thunk"},next:{title:"\ud83d\udcd3 4.4.0.8 Full Stack Development Project",permalink:"/fidgetech-4-react/react-with-apis/4408-full-stack-development-project"}},s={},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Now that we've created an asynchronous action to handle our API call, we only have a few things left to do to get our application up and running. Let's take a look at the changes we'll be making to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Headlines")," component:"),(0,i.kt)("div",{class:"filename"},"src/components/Headlines.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\n// We need to import connect from React Redux.\nimport { connect } from 'react-redux';\n// We also need to import our ApiCall as well.\nimport { makeApiCall } from '../actions/index.js';\n\nclass Headlines extends React.Component {\n  constructor(props) {\n    super(props);\n    // We will remove this.state since we'll be using the Redux store to handle state.\n    // this.state = {\n    //   error: null,\n    //   isLoaded: false,\n    //   headlines: []\n    // };\n  }\n\n  // makeApiCall() has been removed.\n\n  componentDidMount() {\n    // Now we'll use dispatch() to make our API call.\n    const { dispatch } = this.props;\n    dispatch(makeApiCall());\n  }\n\n  render() {\n    // We deconstruct the mapped Redux properties from this.props.\n    const { error, isLoading, headlines } = this.props;\n    if (error) {\n      return <React.Fragment>Error: {error.message}</React.Fragment>;\n    } else if (isLoading) {\n      return <React.Fragment>Loading...</React.Fragment>;\n    } else {\n      return (\n        <React.Fragment>\n          <h1>Headlines</h1>\n          <ul>\n            {headlines.map((headline, index) =>\n              <li key={index}>\n                <h3>{headline.title}</h3>\n                <p>{headline.abstract}</p>\n              </li>\n            )}\n          </ul>\n        </React.Fragment>\n      );\n    }\n  }\n}\n\n// We'll also need to add mapStateToProps() as well.\n\nconst mapStateToProps = state => {\n  return {\n    headlines: state.headlines,\n    isLoading: state.isLoading,\n    error: state.error\n  }\n}\n\nexport default connect(mapStateToProps)(Headlines);\n")),(0,i.kt)("p",null,"Let's quickly go over the changes we've made to ",(0,i.kt)("inlineCode",{parentName:"p"},"Headlines.js"),". This will all be review."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First, we need to import ",(0,i.kt)("inlineCode",{parentName:"li"},"connect")," from React Redux. This will allow us to wrap our component with an HOC that provides Redux functionality such as the ",(0,i.kt)("inlineCode",{parentName:"li"},"dispatch()")," function."),(0,i.kt)("li",{parentName:"ul"},"Next, we need to import ",(0,i.kt)("inlineCode",{parentName:"li"},"makeApiCall()"),", the async action we created in the last lesson."),(0,i.kt)("li",{parentName:"ul"},"We remove ",(0,i.kt)("inlineCode",{parentName:"li"},"this.state")," from the constructor. We're using Redux to fully handle our state now."),(0,i.kt)("li",{parentName:"ul"},"We also remove ",(0,i.kt)("inlineCode",{parentName:"li"},"makeApiCall()"),". That function has been refactored and moved to the file where we store our action creators."),(0,i.kt)("li",{parentName:"ul"},"We still make our API call in ",(0,i.kt)("inlineCode",{parentName:"li"},"componentDidMount()"),". However, now we're using ",(0,i.kt)("inlineCode",{parentName:"li"},"dispatch()")," to trigger it. Note that we aren't dispatching any of our reducer actions in ",(0,i.kt)("inlineCode",{parentName:"li"},"Headlines.js")," - that's all being done in our async action. (There are plenty of use cases where we would dispatch reducer actions still - however, we just don't need to do so here.)"),(0,i.kt)("li",{parentName:"ul"},"In our ",(0,i.kt)("inlineCode",{parentName:"li"},"render()")," method, we deconstruct ",(0,i.kt)("inlineCode",{parentName:"li"},"this.props"),". Our Redux state has been mapped to ",(0,i.kt)("inlineCode",{parentName:"li"},"this.props")," because..."),(0,i.kt)("li",{parentName:"ul"},"We've added ",(0,i.kt)("inlineCode",{parentName:"li"},"mapStateToProps()")," to map ",(0,i.kt)("inlineCode",{parentName:"li"},"isLoading"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"headlines")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"error")," from Redux state."),(0,i.kt)("li",{parentName:"ul"},"Finally, we use ",(0,i.kt)("inlineCode",{parentName:"li"},"connect()")," to wrap our component in an HOC with Redux functionality."),(0,i.kt)("li",{parentName:"ul"},"One more thing to note - we use ",(0,i.kt)("inlineCode",{parentName:"li"},"index")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"map")," to give each headline an id. While this works fine, we recommend using UUID to set up ids instead.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note: you may still have references to isLoaded in your render statement as well as elsewhere in the component, and may need to remove them in favor of ",(0,i.kt)("inlineCode",{parentName:"strong"},"isLoading")," as in the example.")),(0,i.kt)("p",null,"Now we can run our application and everything will be working correctly. If we open the console, we'll see something like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-5-React-2020/middleware-logging.png",alt:"The console shows logged messages from our custom middleware function."})),(0,i.kt)("p",null,"These logged messages are coming from our custom middleware function. As we can see here, the original state is the default state before we make the API call."),(0,i.kt)("p",null,"The current action is ",(0,i.kt)("inlineCode",{parentName:"p"},"GET_HEADLINES_SUCCESS")," - which includes a payload of NYT headlines."),(0,i.kt)("p",null,"Finally, the updated state shows that ",(0,i.kt)("inlineCode",{parentName:"p"},"headlines")," now has all the NYT headlines from our payload."),(0,i.kt)("p",null,"This is what Redux middleware does for us. We can interrupt a reducer action to use middleware before, during or after that reducer action."),(0,i.kt)("p",null,"In fact, let's take a look at the source code for Redux Thunk. You've probably taken a look at the source code for other libraries before. It can often be overwhelming, especially when we're first learning to code. But check out ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-thunk/blob/master/src/index.js"},"redux-thunk/src/index.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function createThunkMiddleware(extraArgument) {\n  return ({ dispatch, getState }) => (next) => (action) => {\n    if (typeof action === 'function') {\n      return action(dispatch, getState, extraArgument);\n    }\n\n    return next(action);\n  };\n}\n\nconst thunk = createThunkMiddleware();\nthunk.withExtraArgument = createThunkMiddleware;\n\nexport default thunk;\n")),(0,i.kt)("p",null,"That's all Redux Thunk really is. It looks pretty similar to our custom middleware function. It uses currying to return a series of functions. And by doing so, we can use code with side effects alongside our reducers, which only allow for pure actions. Each piece of middleware returns an action, dispatches it, and then moves on to the next piece of middleware - or resumes the action - with ",(0,i.kt)("inlineCode",{parentName:"p"},"next()"),"."),(0,i.kt)("p",null,"Our API application is complete. We now have the tools to make API calls with ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch()")," in React applications regardless of whether they are using Redux or React state. We encourage you to build your own API applications using Redux - and also to find other ways of incorporating asynchronous code with React and Redux."),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/react-with-api-and-redux"},(0,i.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  API Project with React and Redux"))))}u.isMDXComponent=!0}}]);