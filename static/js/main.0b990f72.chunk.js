(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{13:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a=c(8),s=c.n(a),n=c(5),l=c(4),j=c(0),r=(c(13),c(1)),b=c(2),h=function(e){var t=e.people;return Object(b.jsxs)("table",{className:"table people-table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{className:"table is-hoverable",children:"Name"}),Object(b.jsx)("th",{className:"table is-hoverable",children:"Sex"}),Object(b.jsx)("th",{className:"table is-hoverable",children:"Born"}),Object(b.jsx)("th",{className:"table is-hoverable",children:"Died"}),Object(b.jsx)("th",{className:"table is-hoverable",children:"Father"}),Object(b.jsx)("th",{className:"table is-hoverable",children:"Mother"})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.sex}),Object(b.jsx)("td",{children:e.born}),Object(b.jsx)("td",{children:e.died}),Object(b.jsx)("td",{children:e.fatherName}),Object(b.jsx)("td",{children:e.motherName})]},e.name)}))})]})},i=(c(15),function(){var e=Object(j.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],s=function(e){return e.isActive?{backgroundColor:"#ccc"}:{}};return Object(j.useEffect)((function(){fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("nav",{className:"nav",children:[Object(b.jsx)(n.b,{to:"/",style:s,className:"nav__page",children:"Home"}),Object(b.jsx)(n.b,{to:"people",style:s,className:"nav__page",children:"People"})]}),Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{path:"/",element:Object(b.jsx)("p",{className:"nav__text",children:"Home page"})}),Object(b.jsx)(r.a,{path:"/people",element:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{className:"nav__text",children:"People Page"}),Object(b.jsx)(h,{people:c})]})}),Object(b.jsx)(r.a,{path:"*",element:Object(b.jsx)("p",{className:"nav__text",children:"Not Found Page"})})]})]})});s.a.render(Object(b.jsx)(n.a,{children:Object(b.jsx)(i,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0b990f72.chunk.js.map