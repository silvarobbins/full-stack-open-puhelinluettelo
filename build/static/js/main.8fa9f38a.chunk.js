(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(15),a=t.n(c),r=t(6),u=t(3),o=t(2),i=t(0),s=function(e){var n=e.newName,t=e.newNumber,c=e.addPerson,a=e.handleNameChange,r=e.handleNumberChange;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Add a new"}),Object(i.jsxs)("form",{onSubmit:c,children:[Object(i.jsxs)("div",{children:["Name: ",Object(i.jsx)("input",{value:n,onChange:a})]}),"Number: ",Object(i.jsx)("input",{value:t,onChange:r}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})]})},l=function(e){var n=e.filter,t=e.handleFilterChange;return Object(i.jsxs)("div",{children:["Filter shown with: ",Object(i.jsx)("input",{value:n,onChange:t})]})},d=function(e){var n=e.personsToShow,t=e.deletePerson;return n.map((function(e){return Object(i.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t(e.id)},children:[e.name," ",e.number,Object(i.jsx)("button",{type:"submit",children:"delete"})]},e.name)}))},f=t(4),j=t.n(f),b="/api/persons",h={getAll:function(){return j.a.get(b).then((function(e){return e.data}))},create:function(e){return j.a.post(b,e).then((function(e){return e.data}))},del:function(e){return j.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},update:function(e,n){return j.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))}},m=function(e){var n=e.message;return null===n?null:Object(i.jsx)("div",{className:"notification",children:n})},O=function(e){var n=e.message;return null===n?null:Object(i.jsx)("div",{className:"error",children:n})},p=(t(39),function(){var e=Object(o.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],a=Object(o.useState)(""),f=Object(u.a)(a,2),j=f[0],b=f[1],p=Object(o.useState)(""),v=Object(u.a)(p,2),x=v[0],g=v[1],w=Object(o.useState)(""),N=Object(u.a)(w,2),C=N[0],S=N[1],T=Object(o.useState)(null),y=Object(u.a)(T,2),P=y[0],k=y[1],A=Object(o.useState)(null),D=Object(u.a)(A,2),F=D[0],I=D[1];Object(o.useEffect)((function(){h.getAll().then((function(e){c(e)}))}),[]);var E=function(e){var n=t.find((function(n){return n.id===e})),a=Object(r.a)(Object(r.a)({},n),{},{number:x});h.update(e,a).then((function(n){c(t.map((function(t){return t.id!==e?t:n}))),k("Updated ".concat(n.name,"'s phone number")),setTimeout((function(){k(null)}),5e3)})).catch((function(a){I("Information of '".concat(n.name,"' has already been removed from server")),setTimeout((function(){I(null)}),5e3),c(t.filter((function(n){return n.id!==e})))}))},J=""===C?t:t.filter((function(e){return e.name.toLowerCase().includes(C.toLowerCase())}));return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Phonebook"}),Object(i.jsx)(m,{message:P}),Object(i.jsx)(O,{message:F}),Object(i.jsx)(l,{filter:C,handleFilterChange:function(e){S(e.target.value)}}),Object(i.jsx)(s,{newName:j,newNumber:x,addPerson:function(e){if(e.preventDefault(),t.map((function(e){return e.name})).indexOf(j)>=0){window.confirm("".concat(j," is already added to phonebook, replace the old number with a new one?"))&&E(t[t.map((function(e){return e.name})).indexOf(j)].id)}else{var n={name:j,number:x};h.create(n).then((function(e){c(t.concat(e)),k("Added ".concat(e.name)),setTimeout((function(){k(null)}),5e3),b(""),g("")})).catch((function(e){console.log(e.response.data),I("".concat(e.response.data.error)),setTimeout((function(){I(null)}),5e3),console.log(e.response.data)}))}},handleNameChange:function(e){b(e.target.value)},handleNumberChange:function(e){g(e.target.value)}}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)(d,{personsToShow:J,deletePerson:function(e){var n=t[t.findIndex((function(n){return n.id===e}))].name;console.log(n),h.del(e).then((function(a){c(t.filter((function(n){return n.id!==e}))),k("Deleted ".concat(n)),setTimeout((function(){k(null)}),5e3)}))}})]})});a.a.render(Object(i.jsx)(p,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.8fa9f38a.chunk.js.map