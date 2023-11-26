"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[97267],{30876:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var i=r(2784);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),s=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),h=n,f=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return r?i.createElement(f,a(a({ref:t},p),{},{components:r})):i.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:n,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6111:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=r(7896),n=(r(2784),r(30876));const o={title:"\ud83d\udcd3 4.3.0.12 Deleting Tickets with Firestore",id:"43012-deleting-tickets-with-firestore",slug:"43012-deleting-tickets-with-firestore",hide_table_of_contents:!0,sidebar_position:12,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-4-react/blob/main/0j_deleting_tickets_with_firestore.md"},a=void 0,l={unversionedId:"fidgetech-4-react/react-with-nosql/43012-deleting-tickets-with-firestore",id:"fidgetech-4-react/react-with-nosql/43012-deleting-tickets-with-firestore",title:"\ud83d\udcd3 4.3.0.12 Deleting Tickets with Firestore",description:"Finally, we need to add delete functionality to our application. At that point, our application will (mostly) be refactored. Our TicketControl component handles delete functionality without passing any props to other components so this will be a quick refactor.",source:"@site/docs/fidgetech-4-react/react-with-nosql/0j-deleting-tickets-with-firestore.md",sourceDirName:"fidgetech-4-react/react-with-nosql",slug:"/fidgetech-4-react/react-with-nosql/43012-deleting-tickets-with-firestore",permalink:"/fidgetech-4-react/react-with-nosql/43012-deleting-tickets-with-firestore",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"\ud83d\udcd3 4.3.0.12 Deleting Tickets with Firestore",id:"43012-deleting-tickets-with-firestore",slug:"43012-deleting-tickets-with-firestore",hide_table_of_contents:!0,sidebar_position:12,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-4-react/blob/main/0j_deleting_tickets_with_firestore.md"},sidebar:"fidgetech-4-react",previous:{title:"\ud83d\udcd3 4.3.0.11 Updating Tickets with Firestore",permalink:"/fidgetech-4-react/react-with-nosql/43011-updating-tickets-with-firestore"},next:{title:"\ud83d\udcd3 4.3.0.13 Structuring Data in Firestore",permalink:"/fidgetech-4-react/react-with-nosql/43013-structuring-data-in-firestore"}},c={},s=[],p={toc:s},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Finally, we need to add delete functionality to our application. At that point, our application will (mostly) be refactored. Our ",(0,n.kt)("inlineCode",{parentName:"p"},"TicketControl")," component handles delete functionality without passing any props to other components so this will be a quick refactor."),(0,n.kt)("p",null,"We are already using ",(0,n.kt)("inlineCode",{parentName:"p"},"withFirestore()")," to wrap our ",(0,n.kt)("inlineCode",{parentName:"p"},"TicketControl")," component and provide Firestore functionality. That means we only need to update one method: ",(0,n.kt)("inlineCode",{parentName:"p"},"handleDeletingTicket()"),". Here's the refactored method:"),(0,n.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"handleDeletingTicket = (id) => {\n  this.props.firestore.delete({collection: 'tickets', doc: id});\n  this.setState({selectedTicket: null});\n}\n")),(0,n.kt)("p",null,"We access Firestore via ",(0,n.kt)("inlineCode",{parentName:"p"},"this.props.firestore"),". Then we call the ",(0,n.kt)("inlineCode",{parentName:"p"},"delete()")," method. Just as we do for finding or updating a specific ticket, we pass in an object with two properties:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A key-value pair with ",(0,n.kt)("inlineCode",{parentName:"li"},"collection")," as the key and the collection the document belongs to as the value."),(0,n.kt)("li",{parentName:"ul"},"A key-value pair with ",(0,n.kt)("inlineCode",{parentName:"li"},"doc")," as the property and the id of the document we want to delete as the value.")),(0,n.kt)("p",null,"That's all we need to do to delete tickets. While we're at it, we can also remove any reference to ",(0,n.kt)("inlineCode",{parentName:"p"},"masterTicketList")," because we are no longer using the Redux store to hold that slice of state."))}u.isMDXComponent=!0}}]);