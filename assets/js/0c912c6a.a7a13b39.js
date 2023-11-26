"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[22458],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=i,h=p["".concat(d,".").concat(u)]||p[u]||m[u]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7896),i=(n(2784),n(30876));const o={title:"\ud83d\udcd3 3.3.0.14 Finding Objects in the Database",id:"33014-finding-objects-in-the-database",slug:"33014-finding-objects-in-the-database",hide_table_of_contents:!0,sidebar_position:14,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-3-c-and-net/blob/main/0n_finding_objects_in_the_database.md"},r=void 0,s={unversionedId:"fidgetech-3-c-and-net/database-basics/33014-finding-objects-in-the-database",id:"fidgetech-3-c-and-net/database-basics/33014-finding-objects-in-the-database",title:"\ud83d\udcd3 3.3.0.14 Finding Objects in the Database",description:"Now that we can successfully save Items to the database, we're ready to update our Find() method to so that we can retrieve specific Items by their ID.",source:"@site/docs/fidgetech-3-c-and-net/database-basics/0n-finding-objects-in-the-database.md",sourceDirName:"fidgetech-3-c-and-net/database-basics",slug:"/fidgetech-3-c-and-net/database-basics/33014-finding-objects-in-the-database",permalink:"/fidgetech-3-c-and-net/database-basics/33014-finding-objects-in-the-database",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"\ud83d\udcd3 3.3.0.14 Finding Objects in the Database",id:"33014-finding-objects-in-the-database",slug:"33014-finding-objects-in-the-database",hide_table_of_contents:!0,sidebar_position:14,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/fidgetech-3-c-and-net/blob/main/0n_finding_objects_in_the_database.md"},sidebar:"fidgetech-3-c-and-net",previous:{title:"\ud83d\udcd3 3.3.0.13 Saving Objects in the Database",permalink:"/fidgetech-3-c-and-net/database-basics/33013-saving-objects-in-the-database"},next:{title:"\ud83d\udcd3 3.3.0.15 More SQL Queries",permalink:"/fidgetech-3-c-and-net/database-basics/33015-more-sql-queries"}},d={},l=[{value:"Writing a Test for <code>Find()</code>",id:"writing-a-test-for-find",level:2},{value:"Writing a <code>Find()</code> Method",id:"writing-a-find-method",level:2},{value:"Repository Reference",id:"repository-reference",level:3}],c={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Now that we can successfully save ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"s to the database, we're ready to update our ",(0,i.kt)("inlineCode",{parentName:"p"},"Find()")," method to so that we can retrieve specific ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"s by their ID."),(0,i.kt)("h2",{id:"writing-a-test-for-find"},"Writing a Test for ",(0,i.kt)("inlineCode",{parentName:"h2"},"Find()")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Our current ",(0,i.kt)("inlineCode",{parentName:"p"},"Find()")," method just returns a placeholder item so we won't have compiler errors. We also have a commented-out test for our ",(0,i.kt)("inlineCode",{parentName:"p"},"Find()")," method as well. We only have to make a few small changes to our test to get it working again. Specifically, our test needs to ",(0,i.kt)("inlineCode",{parentName:"p"},"Save()")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"s now. Here's our updated test:"),(0,i.kt)("div",{class:"filename"},"ToDoList.Tests/ModelTests/ItemTests.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'    [TestMethod]\n    public void Find_ReturnsCorrectItemFromDatabase_Item()\n    {\n      //Arrange\n      Item newItem = new Item("Mow the lawn");\n      newItem.Save();\n      Item newItem2 = new Item("Wash dishes");\n      newItem2.Save();\n\n      //Act\n      Item foundItem = Item.Find(newItem.Id);\n      //Assert\n      Assert.AreEqual(newItem, foundItem);\n    }\n')),(0,i.kt)("p",null,"We simply ",(0,i.kt)("inlineCode",{parentName:"p"},"Save()")," two items and then ",(0,i.kt)("inlineCode",{parentName:"p"},"Find()")," one of them by its ",(0,i.kt)("inlineCode",{parentName:"p"},"Id"),". The test will fail because our ",(0,i.kt)("inlineCode",{parentName:"p"},"Find()")," method currently returns a placeholder item."),(0,i.kt)("h2",{id:"writing-a-find-method"},"Writing a ",(0,i.kt)("inlineCode",{parentName:"h2"},"Find()")," Method"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Let's add code to ",(0,i.kt)("inlineCode",{parentName:"p"},"Find()")," to make this test pass. Just as we've done with our ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAll()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Save()")," methods, we'll start with the whole method. We've added comments to the method to emphasize that its parts are very similar to the database-backed methods we've created already."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'public static Item Find(int id)\n{\n  // We open a connection.\n  MySqlConnection conn = new MySqlConnection(DBConfiguration.ConnectionString);\n  conn.Open();\n\n  // We create MySqlCommand object and add a query to its CommandText property. \n  // We always need to do this to make a SQL query.\n  MySqlCommand cmd = conn.CreateCommand() as MySqlCommand;\n  cmd.CommandText = "SELECT * FROM items WHERE id = @ThisId;";\n\n  // We have to use parameter placeholders @ThisId and a `MySqlParameter` object to \n  // prevent SQL injection attacks. \n  // This is only necessary when we are passing parameters into a query. \n  // We also did this with our Save() method.\n  MySqlParameter param = new MySqlParameter();\n  param.ParameterName = "@ThisId";\n  param.Value = id;\n  cmd.Parameters.Add(param);\n\n  // We use the ExecuteReader() method because our query will be returning results and \n  // we need this method to read these results. \n  // This is in contrast to the ExecuteNonQuery() method, which \n  // we use for SQL commands that don\'t return results like our Save() method.\n  MySqlDataReader rdr = cmd.ExecuteReader() as MySqlDataReader;\n  int itemId = 0;\n  string itemDescription = "";\n  while (rdr.Read())\n  {\n    itemId = rdr.GetInt32(0);\n    itemDescription = rdr.GetString(1);\n  }\n  Item foundItem = new Item(itemDescription, itemId);\n\n  // We close the connection.\n  conn.Close();\n  if (conn != null)\n  {\n    conn.Dispose();\n  }\n  return foundItem;\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Our method takes a parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," of type ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),". This is the ID of the record we want to retrieve from the database. Note that it's a static method called on the class itself.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We open a connection and create a ",(0,i.kt)("inlineCode",{parentName:"p"},"MySqlCommand")," object. We've covered this with our other database methods.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We set the ",(0,i.kt)("inlineCode",{parentName:"p"},"commandText")," equal to the query ",(0,i.kt)("inlineCode",{parentName:"p"},'"SELECT * FROM items WHERE id = @ThisId;"'),". Just as we did with our ",(0,i.kt)("inlineCode",{parentName:"p"},"Save()")," method, we use a parameter placeholder ",(0,i.kt)("inlineCode",{parentName:"p"},"@ThisId"),". Then we instantiate a new ",(0,i.kt)("inlineCode",{parentName:"p"},"MySqlParameter")," object, assign ",(0,i.kt)("inlineCode",{parentName:"p"},"@ThisId")," as it's ",(0,i.kt)("inlineCode",{parentName:"p"},"ParameterName")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," as it's ",(0,i.kt)("inlineCode",{parentName:"p"},"Value"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Note that we do the following: ",(0,i.kt)("inlineCode",{parentName:"p"},'int itemId = 0; string itemDescription = "";')))),(0,i.kt)("p",null,"This is because our ",(0,i.kt)("inlineCode",{parentName:"p"},"Find()")," method may not return a result. For instance, if we were to try ",(0,i.kt)("inlineCode",{parentName:"p"},"Item.find(23453)"),", our application would break if we didn't include the above default values."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We convert the found record into a C# object and then close the connection.")),(0,i.kt)("p",null,"We've gone through this method fairly quickly because most of its parts are already familiar from our ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAll()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Save()")," methods."),(0,i.kt)("p",null,"At this point we can uncomment all of our ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," tests and they should pass, and our application will now work again in the browser. We can now have all the code we need for the CR part of CRUD functionality. We can create new ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"s, view a list of ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"s, or use our ",(0,i.kt)("inlineCode",{parentName:"p"},"Find()")," method to help us view a single ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"'s detail. "),(0,i.kt)("p",null,"We'll save update and delete functionality for working with Entity Framework Core, but you are welcome to explore and try adding this functionality into your own applications before then."),(0,i.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,i.kt)("p",null,"Follow the link below to view the completed To Do List project that uses MySqlConnector and custom database methods to communicate with a MySQL database."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-3-to-do-list-with-mysqlconnector-csharp-net6"},(0,i.kt)("i",{class:"glyphicon glyphicon-folder-open"})," Example GitHub Repo for To Do List with MySqlConnector"))))}m.isMDXComponent=!0}}]);