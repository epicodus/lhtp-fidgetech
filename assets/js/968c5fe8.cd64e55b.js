"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[63816],{30876:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>g});var i=o(2784);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=i.createContext({}),h=function(e){var t=i.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=h(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=h(o),d=n,g=c["".concat(l,".").concat(d)]||c[d]||p[d]||a;return o?i.createElement(g,r(r({ref:t},u),{},{components:o})):i.createElement(g,r({ref:t},u))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,r=new Array(a);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,r[1]=s;for(var h=2;h<a;h++)r[h]=o[h];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}d.displayName="MDXCreateElement"},59202:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>h});var i=o(7896),n=(o(2784),o(30876));const a={title:"\ud83d\udcd3 1.0.0.28 Installing and Using VS Code Live Share",id:"10028-installing-and-using-vs-code-live-share",slug:"10028-installing-and-using-vs-code-live-share",hide_table_of_contents:!0,sidebar_position:6,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-1-introduction-to-programming/blob/main/0c_using_vscode_live_share.md"},r=void 0,s={unversionedId:"fidgetech-1-introduction-to-programming/getting-started-with-working-remotely/10028-installing-and-using-vs-code-live-share",id:"fidgetech-1-introduction-to-programming/getting-started-with-working-remotely/10028-installing-and-using-vs-code-live-share",title:"\ud83d\udcd3 1.0.0.28 Installing and Using VS Code Live Share",description:"For working and collaborating remotely, Epicodus uses Visual Studio Code Live Share, Live Server, and Live Share Audio to share the following:",source:"@site/docs/fidgetech-1-introduction-to-programming/getting-started-with-working-remotely/0c-using-vscode-live-share.md",sourceDirName:"fidgetech-1-introduction-to-programming/getting-started-with-working-remotely",slug:"/fidgetech-1-introduction-to-programming/getting-started-with-working-remotely/10028-installing-and-using-vs-code-live-share",permalink:"/fidgetech-1-introduction-to-programming/getting-started-with-working-remotely/10028-installing-and-using-vs-code-live-share",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"\ud83d\udcd3 1.0.0.28 Installing and Using VS Code Live Share",id:"10028-installing-and-using-vs-code-live-share",slug:"10028-installing-and-using-vs-code-live-share",hide_table_of_contents:!0,sidebar_position:6,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-1-introduction-to-programming/blob/main/0c_using_vscode_live_share.md"},sidebar:"fidgetech-1-introduction-to-programming",previous:{title:"\ud83d\udcd3 1.0.0.27 Direct Messages in Discord",permalink:"/fidgetech-1-introduction-to-programming/getting-started-with-working-remotely/10027-direct-messages-in-discord"},next:{title:"\ud83d\udcd3 1.0.0.29 Troubleshooting Remote Issues",permalink:"/fidgetech-1-introduction-to-programming/getting-started-with-working-remotely/10029-troubleshooting-remote-issues"}},l={},h=[{value:"Live Share, Live Server, and Live Share Audio Instructions",id:"live-share-live-server-and-live-share-audio-instructions",level:2},{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Installation",id:"installation",level:3},{value:"Sharing Code",id:"sharing-code",level:3},{value:"A Few Notes",id:"a-few-notes",level:4},{value:"Sharing the Terminal",id:"sharing-the-terminal",level:3},{value:"Starting a Server",id:"starting-a-server",level:3},{value:"Sharing a Server",id:"sharing-a-server",level:3},{value:"Debugging Live Server",id:"debugging-live-server",level:3},{value:"Sharing Audio",id:"sharing-audio",level:3},{value:"Joining a Live Share Session",id:"joining-a-live-share-session",level:3},{value:"Method #1 \u2014 Joining a Live Share by Following the URL",id:"method-1--joining-a-live-share-by-following-the-url",level:4},{value:"Option to Join Live Share Session in Browser or in VS Code",id:"option-to-join-live-share-session-in-browser-or-in-vs-code",level:4},{value:"Changing Your Live Share Launch Settings",id:"changing-your-live-share-launch-settings",level:4},{value:"Option to Sign into Your GitHub Account",id:"option-to-sign-into-your-github-account",level:4},{value:"Method #2 \u2014 Joining a Live Share Session in VS Code",id:"method-2--joining-a-live-share-session-in-vs-code",level:4}],u={toc:h},c="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"For working and collaborating remotely, Epicodus uses Visual Studio Code Live Share, Live Server, and Live Share Audio to share the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Code"),(0,n.kt)("li",{parentName:"ul"},"The terminal (read-only access strongly recommended)"),(0,n.kt)("li",{parentName:"ul"},"Servers (since we can't share web browsers)"),(0,n.kt)("li",{parentName:"ul"},"Audio (if Discord goes down)")),(0,n.kt)("h2",{id:"live-share-live-server-and-live-share-audio-instructions"},(0,n.kt)("a",{parentName:"h2",href:"#live-share-live-server-and-live-share-audio-instructions"},"Live Share, Live Server, and Live Share Audio Instructions")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://old.learnhowtoprogram.com/fidgetech-1-introduction-to-programming/1-0-getting-started-with-working-remotely/1-0-0-28-installing-and-using-vs-code-live-share#installation"},"Installation")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://old.learnhowtoprogram.com/fidgetech-1-introduction-to-programming/1-0-getting-started-with-working-remotely/1-0-0-28-installing-and-using-vs-code-live-share#sharing-code"},"Sharing Code")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://old.learnhowtoprogram.com/fidgetech-1-introduction-to-programming/1-0-getting-started-with-working-remotely/1-0-0-28-installing-and-using-vs-code-live-share#sharing-the-terminal"},"Sharing the Terminal")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://old.learnhowtoprogram.com/fidgetech-1-introduction-to-programming/1-0-getting-started-with-working-remotely/1-0-0-28-installing-and-using-vs-code-live-share#starting-a-server"},"Starting a Server")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://old.learnhowtoprogram.com/fidgetech-1-introduction-to-programming/1-0-getting-started-with-working-remotely/1-0-0-28-installing-and-using-vs-code-live-share#sharing-a-server"},"Sharing a Server")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://old.learnhowtoprogram.com/fidgetech-1-introduction-to-programming/1-0-getting-started-with-working-remotely/1-0-0-28-installing-and-using-vs-code-live-share#sharing-audio"},"Sharing Audio")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://old.learnhowtoprogram.com/fidgetech-1-introduction-to-programming/1-0-getting-started-with-working-remotely/1-0-0-28-installing-and-using-vs-code-live-share#joining-a-live-share-session"},"Joining a Live Share Session")),(0,n.kt)("h3",{id:"installation"},(0,n.kt)("a",{parentName:"h3",href:"#installation"},"Installation")),(0,n.kt)("p",null,"If you haven't already installed VS Code by following along with the previous lesson, do so now. ",(0,n.kt)("a",{parentName:"p",href:"https://old.learnhowtoprogram.com/introduction-to-programming/getting-started-with-intro-to-programming/text-editor-visual-studio-code"},"Instructions are located here"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," If you are using a Mac, VS Code Live Share will only work on macOS High Sierra 10.13 and above. If you're on a lower version of macOS, please upgrade your computer now. Contact your teacher or advisor if you have any issues."),(0,n.kt)("p",null,"After you install VS Code, click the four squares on the left side of the screen to access the Extensions menu. In the image below, the icon with four squares is the bottom icon."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/live-share-images/image7.png",alt:" Click the 4 squares icon in bottom left of screen."})),(0,n.kt)("p",null,"Search for and install ",(0,n.kt)("strong",{parentName:"p"},"Live Share"),". Next, search for and install the VS Code ",(0,n.kt)("strong",{parentName:"p"},"Live Server extension (by Ritwick Dei)"),". Finally, search for and install the ",(0,n.kt)("strong",{parentName:"p"},"Live Share Audio")," extension. It's helpful to know the process of searching for and installing extensions through VS Code, because you will likely want to extend your code editor's functionality with extensions in the future."),(0,n.kt)("p",null,"Alternatively, you can install and read more about these extensions by visiting their pages on the Visual Studio online marketplace and selecting the option to install:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare"},"Live Share")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"},"Live Server")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-audio"},"Live Share Audio"))),(0,n.kt)("h3",{id:"sharing-code"},(0,n.kt)("a",{parentName:"h3",href:"#sharing-code"},"Sharing Code")),(0,n.kt)("p",null,"We recommend following along with these instructions to the extent that is possible! You'll get more practice in the class. For this practice, you can select an existing folder (pick one that doesn't have too many files in it) or you can create a folder (just make sure that there is at least one file in it). "),(0,n.kt)("p",null,"To share your code, terminal, and browser with another student or teacher, you'll first want to make sure that all the files you want to share are open in VS Code. There are two options to do this:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open your project folder through VS Code. ")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open VS Code"),(0,n.kt)("li",{parentName:"ul"},"Select ",(0,n.kt)("em",{parentName:"li"},"File")," > ",(0,n.kt)("em",{parentName:"li"},"Open Folder...")),(0,n.kt)("li",{parentName:"ul"},"Open whichever folder you want to practice with")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Use the terminal to open up VS Code. We cover how to use the terminal starting in this ",(0,n.kt)("a",{parentName:"li",href:"https://old.learnhowtoprogram.com/fidgetech-1-introduction-to-programming/1-0-getting-started-with-intro-to-programming/1-0-0-17-introduction-to-the-command-line"},"introduction lesson")," and in the two lessons that follow. Using the terminal, we can navigate to the root directory of the project we want to share in the terminal and then type ",(0,n.kt)("inlineCode",{parentName:"li"},"code ."),". This will open all the files in that directory. ",(0,n.kt)("strong",{parentName:"li"},"Take note:")," You must run ",(0,n.kt)("inlineCode",{parentName:"li"},"code .")," in the directory of the project you are working on \u2014 not a directory higher up in the file tree. You will be sharing access (including write access) of all these files with your pair. For instance, if you were to run ",(0,n.kt)("inlineCode",{parentName:"li"},"code .")," in the root directory of your computer, you'd be giving your pair both read and write access to ",(0,n.kt)("em",{parentName:"li"},"every")," file on your computer \u2014 not just the files in your project. This is a security risk \u2014 someone could install malware, damage system files, or access files you don't want to share. While the risk of a fellow Epicodus student doing this is low, there is no good reason to take this risk!")),(0,n.kt)("p",null,"Once you've opened your project in VS Code, you should see the files listed in the left-hand pane. If the file tree isn't showing, click the top left icon that shows two overlapping squares to show the file tree."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/vscode_file_explorer.png",alt:"VS Code file explorer icon"})),(0,n.kt)("p",null,"If only one file is showing, or you're not seeing the expected files, close the VS Code window, make sure you are in the correct directory in the terminal, and type ",(0,n.kt)("inlineCode",{parentName:"p"},"code .")," again."),(0,n.kt)("p",null,"Once you've ensured that the project you want to share is open in VS Code, follow these steps to start your Live Share session: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click the circle with an arrow on the left side of your screen to access Live Share. That is the bottom icon on the left in the image below. (This icon will be added after you've installed Live Share.) The user interface (UI) of programs change often, so if your icon looks slightly different, or doesn't have the same highlight, that is normal.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/live-share-images/start_liveshare_session.png",alt:"Image of tab with circle with arrow on left side and Live Share menu options."})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Make sure the file you're working on is saved. Live Share won't work on new, unsaved files. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Then, start your collaboration session. Since the UI of Live Share changes periodically, you may have one of two options to start your Live Share session: a link that says ",(0,n.kt)("em",{parentName:"p"},"Start collaboration session"),", or a button that says ",(0,n.kt)("em",{parentName:"p"},"Share"),". In the image above, you can see a button that says ",(0,n.kt)("em",{parentName:"p"},"Share"),". If any of the words are cut off in the Live Share pane, use your mouse to widen the left-side pane in VS Code.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'When you start a Live Share session, a link will automatically be copied to your clipboard that you can share with your pair. Anybody with that link can now view and edit code along with you! If you need to get the link again, just click on "Invite participants", which is highlighted in the image below.'))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/live-share-images/image2.png",alt:' Click on the "Invite participants link" on left side of screen.'})),(0,n.kt)("h4",{id:"a-few-notes"},"A Few Notes"),(0,n.kt)("p",null,'If this is your first time starting a Live Share session on your personal computer, you may be prompted to give the program permissions. Select the option that you are comfortable with. You may also be prompted to sign in via your GitHub account, like in the image below. We suggest that you sign in to your Live Share sessions, so that you are listed by your user name and not "anonymous". Typically you will sign in once, and VS Code will save that information for future sessions.'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/live-share-images/sign_in_to_join_liveshare_session.png",alt:"This is a prompt that is asking you to sign into your GitHub account."}),"."),(0,n.kt)("h3",{id:"sharing-the-terminal"},(0,n.kt)("a",{parentName:"h3",href:"#sharing-the-terminal"},"Sharing the Terminal")),(0,n.kt)("p",null,'To share your terminal, click "Share terminal." You will have two options: you can either choose "read" or "read/write." '),(0,n.kt)("p",null,"It's very important to understand the difference between read and write access in the terminal. When someone only has read access, that means they can see what's happening in the terminal but can't actually write terminal commands. When someone has write access, that means they can write terminal commands affecting ",(0,n.kt)("em",{parentName:"p"},"your")," computer -- deleting and creating folders, making commits, etc. If you were to give terminal ",(0,n.kt)("em",{parentName:"p"},"write")," access to someone with malicious intent (or whose computer was infected with a specially-designed virus for exploiting VS Code Live Share), they could take over your computer, destroy files, or install malware. For that reason, you should only give write access to people you trust."),(0,n.kt)("p",null,"We recommend only giving your instructors read access to your terminal just to be on the safe side."),(0,n.kt)("p",null,"Once you've given read (or read/write) access, you'll have a terminal at the bottom of your screen that you and the people you're sharing with can use together."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/live-share-images/image6.png",alt:" Image of the shared terminal."})),(0,n.kt)("p",null,"For the people joining your session, they can go to the bottom left corner of their screen and click on the terminal under Shared Terminals to see and use your terminal."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/live-share-images/image8.png",alt:' You can click on terminal beneath "Shared Terminals." '})),(0,n.kt)("h3",{id:"starting-a-server"},(0,n.kt)("a",{parentName:"h3",href:"#starting-a-server"},"Starting a Server")),(0,n.kt)("p",null,"Technically, you can't actually share your browser, but you can let your VS Code Live Share participants access a server on your computer. If you're in Intermediate JS or beyond, you can skip this section because you're already using web servers. For Intro, you'll need to use the Live Server VS Code extension you downloaded earlier. "),(0,n.kt)("p",null,'To use a server to share a file with other people, click "Go Live" in the bottom right corner of your screen.'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/live-share-images/image1.png",alt:' Click the blue "Go Live" bar at bottom of screen.'})),(0,n.kt)("h3",{id:"sharing-a-server"},(0,n.kt)("a",{parentName:"h3",href:"#sharing-a-server"},"Sharing a Server")),(0,n.kt)("p",null,'Once you have a server running, you can share it with others in VS Code Live Share. In Live Share, in the upper left corner, click "Share server" and type "5500" for the port to share (or whatever port you\'re using).'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/live-share-images/image9.png",alt:" Click share server."})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/live-share-images/image3.png",alt:" Type 5500 for the port to share."})),(0,n.kt)("p",null,'Now, participants can go to the lower left corner of their screen. Under "Shared Servers", click "localhost:5500" to launch the browser and access the server.'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/live-share-images/image5.png",alt:" Now you can click on localhost:5500 on the left side of the screen."})),(0,n.kt)("h3",{id:"debugging-live-server"},(0,n.kt)("a",{parentName:"h3",href:"#debuggin-live-server"},"Debugging Live Server")),(0,n.kt)("p",null,'Occasionally a server will fail to display your page or will display an error message. If this happens, try finding the specific file you want to serve e.g. index.html and right click. Click the first item in the menu, which should read "Open with Live Server".'),(0,n.kt)("h3",{id:"sharing-audio"},(0,n.kt)("a",{parentName:"h3",href:"#sharing-audio"},"Sharing Audio")),(0,n.kt)("p",null,'If Discord goes down, you can switch to using audio through VS Code Live Share. In the upper right corner, under Session Details, under Audio Call, click "Start audio call". When Discord comes back up, switch back to Discord (so that teachers can visit your audio channel).'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/live-share-images/image4.png",alt:'Image shows that you can "Start Audio Call" on left side of screen.'})),(0,n.kt)("h3",{id:"joining-a-live-share-session"},(0,n.kt)("a",{parentName:"h3",href:"#joining-a-live-share-session"},"Joining a Live Share Session")),(0,n.kt)("p",null,"There are a couple of ways to join a Live Share session. We'll start by sharing one method, discussing a few options, and then cover another method. We suggest that you read through this whole section before attempting to join a Live Share session for the first time."),(0,n.kt)("p",null,"You are not required to practice this before the first day of class. However, if you do want to try it out, it is possible to do so on a single computer. What you'll do is start a Live Share session in one VS Code window, and open another VS Code window to join that session. "),(0,n.kt)("h4",{id:"method-1--joining-a-live-share-by-following-the-url"},"Method #1 \u2014 Joining a Live Share by Following the URL"),(0,n.kt)("p",null,"The Live Share URL that your pair shares with you is also a link that you can click to join the session. This is the easiest way to join a Live Share. However, you will have to do some configuration when you are joining a Live Share for the first time."),(0,n.kt)("p",null,"After you work through the configuration options, you will be able to see and work in any file in the project that has been shared with you."),(0,n.kt)("h4",{id:"option-to-join-live-share-session-in-browser-or-in-vs-code"},"Option to Join Live Share Session in Browser or in VS Code"),(0,n.kt)("p",null,"If this is the first time you are joining a Live Share session, you will encounter a dialogue box that will ask you if you want to ",(0,n.kt)("em",{parentName:"p"},"Continue in Web")," or ",(0,n.kt)("em",{parentName:"p"},"Open in Visual Studio Code"),". See the image below as an example of this dialogue box. "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/live-share-images/option_to_use_live_share_in_browser_or_on_computer.png",alt:"Dialogue box asking you to select whether to open links in browser or via the web."})),(0,n.kt)("p",null,"We strongly suggest that you select to open the project in VS Code. Why? The VS Code installed to your computer has access to your computer's terminal, and it also has all of your configurations and extensions enabled. When you use VS Code in the web browser, it will not have these configurations set up, nor will it have access to your computer's terminal. "),(0,n.kt)("p",null,"It's important to know that whatever option you first select (continuing in web or in VS Code), this preference will be saved. You can change this option later via your VS Code settings. Let's look at that next. "),(0,n.kt)("h4",{id:"changing-your-live-share-launch-settings"},"Changing Your Live Share Launch Settings"),(0,n.kt)("p",null,"If you decide you want to use Live Share in the browser, or otherwise, here's how you can access the launch settings for Live Share in VS Code."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open VS Code settings."),(0,n.kt)("li",{parentName:"ol"},"Make sure you are editing ",(0,n.kt)("inlineCode",{parentName:"li"},"user")," settings. This is in contrast to ",(0,n.kt)("inlineCode",{parentName:"li"},"workspace")," settings. User settings are globally applied to all VS Code sessions, whereas workspace settings are only applied to the VS Code window you are currently in."),(0,n.kt)("li",{parentName:"ol"},"Search for ",(0,n.kt)("inlineCode",{parentName:"li"},"Live Share: Launcher Client"),"."),(0,n.kt)("li",{parentName:"ol"},"Set the value for the launcher client to ",(0,n.kt)("inlineCode",{parentName:"li"},"visualStudioCode")," to launch Live Share sessions in your local VS Code. Select ",(0,n.kt)("inlineCode",{parentName:"li"},"web")," to launch Live Share sessions in the browser. Note that ",(0,n.kt)("inlineCode",{parentName:"li"},"visualStudio")," is a separate program that we will not work with in this program.")),(0,n.kt)("h4",{id:"option-to-sign-into-your-github-account"},"Option to Sign into Your GitHub Account"),(0,n.kt)("p",null,"If this is your first time joining a Live Share session, you may be prompted to ",(0,n.kt)("em",{parentName:"p"},"Sign in")," or ",(0,n.kt)("em",{parentName:"p"},"Continue as anonymous"),', like in the image below. When you sign in, you will do so via GitHub. We suggest that you always sign in to your Live Share sessions, so that you are listed by your user name and not "anonymous". Typically you will sign in once, and VS Code will save that information for future sessions.'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/live-share-images/sign_in_to_join_liveshare_session.png",alt:"VS Code Live Share will prompt you to sign into your GitHub account."}),"."),(0,n.kt)("h4",{id:"method-2--joining-a-live-share-session-in-vs-code"},"Method #2 \u2014 Joining a Live Share Session in VS Code"),(0,n.kt)("p",null,"Here's another way to join a Live Share session. Though it's not as convenient as clicking on a link, it's helpful to know another option, and you may find this method preferable! Follow these steps:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open VS Code (if it isn't open already), or open a new VS Code window by selecting ",(0,n.kt)("em",{parentName:"li"},"File")," > ",(0,n.kt)("em",{parentName:"li"},"New Window"),"."),(0,n.kt)("li",{parentName:"ul"},"Open the Live Share pane by clicking the Live Share icon from the navigation bar. "),(0,n.kt)("li",{parentName:"ul"},"Select the option to join a collaboration session: either a button that says ",(0,n.kt)("em",{parentName:"li"},"Join")," or a link that says ",(0,n.kt)("em",{parentName:"li"},"Join collaboration session"),"."),(0,n.kt)("li",{parentName:"ul"},"VS Code will open an input at the top of the screen, as highlighted by the orange box in the image below."),(0,n.kt)("li",{parentName:"ul"},"Enter the URL of the collaboration session (the URL that your pair has shared with you) into the VS Code input and hit enter.")),(0,n.kt)("p",null,"You will now be able to see and work in any file in the project that has been shared with you."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/live-share-images/join_liveshare_session.png",alt:'Enter the collaboration session URL into the input after you click "join" or "join collaboration session"'})))}p.isMDXComponent=!0}}]);