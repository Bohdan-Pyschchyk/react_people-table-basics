(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{13:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(8),a=c.n(s),n=c(5),j=c(0),r=(c(13),c(2)),l=c(4),b=c(1),i=function(e){var t=e.person;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.name}),Object(b.jsx)("td",{children:t.sex}),Object(b.jsx)("td",{children:t.born}),Object(b.jsx)("td",{children:t.died}),Object(b.jsx)("td",{children:t.fatherName}),Object(b.jsx)("td",{children:t.motherName})]},t.name)},h=function(){var e=Object(j.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(j.useEffect)((function(){fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{className:"nav__text",children:"People Page"}),Object(b.jsxs)("table",{className:"table people-table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{className:"table is-hoverable",children:"Name"}),Object(b.jsx)("th",{className:"table is-hoverable",children:"Sex"}),Object(b.jsx)("th",{className:"table is-hoverable",children:"Born"}),Object(b.jsx)("th",{className:"table is-hoverable",children:"Died"}),Object(b.jsx)("th",{className:"table is-hoverable",children:"Father"}),Object(b.jsx)("th",{className:"table is-hoverable",children:"Mother"})]})}),Object(b.jsx)("tbody",{children:c.map((function(e){return Object(b.jsx)(i,{person:e})}))})]})]})},o=(c(15),function(e){return e.isActive?{backgroundColor:"#ccc"}:{}}),d=function(){return Object(b.jsxs)("nav",{className:"nav",children:[Object(b.jsx)(n.b,{to:"/",style:o,className:"nav__page",children:"Home"}),Object(b.jsx)(n.b,{to:"people",style:o,className:"nav__page",children:"People"})]})},x=function(){return Object(b.jsx)("p",{className:"nav__text",children:"Home page"})},O=function(){return Object(b.jsx)("p",{className:"nav__text",children:"Not Found Page"})},p=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(d,{}),Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{path:"/",element:Object(b.jsx)(x,{})}),Object(b.jsx)(r.a,{path:"/people",element:Object(b.jsx)(h,{})}),Object(b.jsx)(r.a,{path:"*",element:Object(b.jsx)(O,{})})]})]})};a.a.render(Object(b.jsx)(n.a,{children:Object(b.jsx)(p,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a5588972.chunk.js.map