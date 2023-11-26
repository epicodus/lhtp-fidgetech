"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[72932],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>w});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,w=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return n?r.createElement(w,o(o({ref:t},d),{},{components:n})):r.createElement(w,o({ref:t},d))}));function w(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8556:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const i={title:"\ud83d\udcd3 4.2.0.6 Writing Our Third Redux Test",id:"4206-writing-our-third-redux-test",slug:"4206-writing-our-third-redux-test",hide_table_of_contents:!0,sidebar_position:6,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-4-react/blob/main/0f_writing_our_third_redux_test.md"},o=void 0,s={unversionedId:"fidgetech-4-react/react-with-redux/4206-writing-our-third-redux-test",id:"fidgetech-4-react/react-with-redux/4206-writing-our-third-redux-test",title:"\ud83d\udcd3 4.2.0.6 Writing Our Third Redux Test",description:"In the last lesson, we added a reducer action called ADD_TICKET. Our reducer can now take the current state of our ticket list and return the ticket list's new state with a new ticket added to the list. It does this without making alterations to the current state or storing that data anywhere.",source:"@site/docs/fidgetech-4-react/react-with-redux/0f-writing-our-third-redux-test.md",sourceDirName:"fidgetech-4-react/react-with-redux",slug:"/fidgetech-4-react/react-with-redux/4206-writing-our-third-redux-test",permalink:"/fidgetech-4-react/react-with-redux/4206-writing-our-third-redux-test",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"\ud83d\udcd3 4.2.0.6 Writing Our Third Redux Test",id:"4206-writing-our-third-redux-test",slug:"4206-writing-our-third-redux-test",hide_table_of_contents:!0,sidebar_position:6,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-4-react/blob/main/0f_writing_our_third_redux_test.md"},sidebar:"fidgetech-4-react",previous:{title:"\ud83d\udcd3 4.2.0.5 Writing Our Second Redux Test",permalink:"/fidgetech-4-react/react-with-redux/4205-writing-our-second-redux-test"},next:{title:"\ud83d\udcd3 4.2.0.7 Anatomy of a Reducer",permalink:"/fidgetech-4-react/react-with-redux/4207-anatomy-of-a-reducer"}},l={},c=[{value:"Writing a Test for Deleting a Ticket",id:"writing-a-test-for-deleting-a-ticket",level:3}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the last lesson, we added a reducer action called ",(0,a.kt)("inlineCode",{parentName:"p"},"ADD_TICKET"),". Our reducer can now take the current state of our ticket list and return the ticket list's new state with a new ticket added to the list. It does this without making alterations to the current state or storing that data anywhere."),(0,a.kt)("p",null,"In this lesson, we will add an action called ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE_TICKET"),". We will start by writing a test, making sure it fails, and then getting it to pass by adding new code to our reducer."),(0,a.kt)("p",null,"We will not need to reinvent the wheel to add delete functionality to our reducer. We'll still be using vanilla JavaScript - and we won't be applying any fancy new concepts. The goal of this lesson is both to reinforce and demystify what reducers are and how they work. It's also helpful to continue getting back into the swing of testing with Jest."),(0,a.kt)("h3",{id:"writing-a-test-for-deleting-a-ticket"},"Writing a Test for Deleting a Ticket"),(0,a.kt)("p",null,"Our new test will need some additional sample data. We'll start by creating a sample ",(0,a.kt)("inlineCode",{parentName:"p"},"currentState")," that already includes two tickets. Our test will determine whether or not the ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE_TICKET")," action in our reducer successfully returns a new state with the correct ticket removed."),(0,a.kt)("p",null,"Here's our new test. Note that we've omitted the code that's not directly relevant to our new test - but don't actually remove that code from your own tests!"),(0,a.kt)("div",{class:"filename"},"__tests__/reducers/ticket-list-reducer.test.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\nimport ticketListReducer from '../../reducers/ticket-list-reducer';\n\ndescribe('ticketListReducer', () => {\n\n  const currentState = {\n    1: {\n      names: 'Ryan & Aimen',\n      location: '4b',\n      issue: 'Redux action is not working correctly.',\n      id: 1 \n    },\n    2: {\n      names: 'Jasmine and Justine',\n      location: '2a',\n      issue: 'Reducer has side effects.',\n      id: 2 \n    }\n  }\n\n  // Don't remove other test ticket data - it's been removed for clarity here.\n\n  // Previously written tests go here\n\n  test('Should successfully delete a ticket', () => {\n    action = {\n      type: 'DELETE_TICKET',\n      id: 1\n    };\n    expect(ticketListReducer(currentState, action)).toEqual({\n      2: {\n        names: 'Jasmine and Justine',\n        location: '2a',\n        issue: 'Reducer has side effects.',\n        id: 2 \n      }\n    });\n  });\n\n});\n")),(0,a.kt)("p",null,"We've added a new constant that represents a ",(0,a.kt)("inlineCode",{parentName:"p"},"currentState")," that already holds two tickets."),(0,a.kt)("p",null,"Our test has an ",(0,a.kt)("inlineCode",{parentName:"p"},"action")," with a ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE_TICKET")," and an ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),". That's all the information we need for deleting a ticket."),(0,a.kt)("p",null,"Once our reducer successfully completes the ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE_TICKET")," action, we'd expect our reducer to take the ",(0,a.kt)("inlineCode",{parentName:"p"},"currentState")," (which holds two tickets) and return an object that only has one ticket with an ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,a.kt)("p",null,"If we run the test, it will fail as expected. Now let's implement the code. We can't use ",(0,a.kt)("inlineCode",{parentName:"p"},"filter()")," as we did in the last course section. That's because in the React Fundamentals section we stored all our ticket data in an array (and we can ",(0,a.kt)("inlineCode",{parentName:"p"},"filter()")," arrays) while now all of our ticket data is being stored in an object ",(0,a.kt)("inlineCode",{parentName:"p"},"{}")," - and JavaScript doesn't provide native support for filtering this kind of object."),(0,a.kt)("p",null,"You may wonder why we are storing objects within objects in this way now - instead of continuing to use an array. Either will work fine for our use case. However, an object full of key-value pairs is much more similar to a database than an array. That's because both a database and an object have unique keys (as opposed to an array's index, which can change as values are added and removed)."),(0,a.kt)("p",null,"Here's the code:"),(0,a.kt)("div",{class:"filename"},"src/reducers/ticket-list-reducer.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default (state = {}, action) => {\n  const { names, location, issue, id } = action;\n  switch (action.type) {\n  case 'ADD_TICKET':\n    return Object.assign({}, state, {\n      [id]: {\n        names: names,\n        location: location,\n        issue: issue,\n        id: id\n      }\n    });\n  case 'DELETE_TICKET':\n    let newState = { ...state };\n    delete newState[id];\n    return newState;\n  default:\n    return state;\n  }\n};\n")),(0,a.kt)("p",null,"Here's the new code: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  case 'DELETE_TICKET':\n    let newState = { ...state };\n    delete newState[id];\n    return newState;\n")),(0,a.kt)("p",null,"We start by making a copy of the state - then we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"delete"),' function to remove the key-value pair that corresponds to the action. We aren\'t being fully "pure" here - ',(0,a.kt)("inlineCode",{parentName:"p"},"delete")," directly alters the object it's called on. However, at the very least, we are making a copy of the original object and altering that one instead of altering the original itself."),(0,a.kt)("p",null,"Why not do this in a purer way? Well, JavaScript doesn't offer an approach that's both native and functional. There are functional JavaScript libraries that will handle this - for example, ",(0,a.kt)("a",{parentName:"p",href:"https://underscorejs.org/#omit"},"the Underscore's ",(0,a.kt)("inlineCode",{parentName:"a"},".omit()")," function does the trick")," - but we will keep things simple here."),(0,a.kt)("p",null,"Finally, we return our ",(0,a.kt)("inlineCode",{parentName:"p"},"newState"),"."),(0,a.kt)("p",null,"If we run our tests, they should all pass:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"}," PASS  src/__tests__/reducers/ticket-list-reducer.test.js\n  ticketListReducer\n    \u2713 Should return default state if no action type is recognized (6ms)\n    \u2713 Should successfully add new ticket data to mainTicketList (7ms)\n    \u2713 Should successfully delete a ticket (8ms)\n\nTest Suites: 1 passed, 1 total\nTests:       3 passed, 3 total\nSnapshots:   0 total\nTime:        0.603s\nRan all test suites related to changed files.\n")),(0,a.kt)("p",null,"We've successfully created a reducer that will take actions to add, update, and delete tickets - all the CRUD functionality we will need for our help queue's ticket list. Once again, note that all reducers must be pure functions and we aren't actually adding, updating or removing tickets from anywhere yet. The Redux store will take care of that."),(0,a.kt)("p",null,"In the next lesson, we will review what we've learned about reducers. After that, we'll be ready to move on to exploring Redux further."))}p.isMDXComponent=!0}}]);