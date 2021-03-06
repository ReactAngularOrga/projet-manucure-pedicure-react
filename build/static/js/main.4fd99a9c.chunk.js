(this["webpackJsonpmon-projet-react"]=this["webpackJsonpmon-projet-react"]||[]).push([[0],{19:function(e,t,c){},29:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),r=c.n(n),i=c(21),a=c.n(i),o=(c(29),c(14)),j=c(6),l=c(9),d=c(11),h=c(10),b=(c(19),c(8));var m=function(){return Object(s.jsx)(r.a.Fragment,{children:Object(s.jsxs)("div",{className:"toolbar",role:"banner",children:[Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-md-2",children:Object(s.jsx)(b.b,{to:"/",activeClassName:"App-link",style:{color:"white"},children:Object(s.jsx)("strong",{children:"Accueil"})})}),Object(s.jsx)("div",{className:"col-md-2",children:Object(s.jsx)(b.b,{to:"/reservation",activeClassName:"App-link",style:{color:"white"},children:Object(s.jsx)("strong",{children:"Reservation"})})}),Object(s.jsx)("div",{className:"col-md-2",children:Object(s.jsx)(b.b,{to:"/reservations",activeClassName:"App-link",style:{color:"white"},children:Object(s.jsx)("strong",{children:"Liste des r\xe9servations"})})}),Object(s.jsx)("div",{className:"col-md-2",children:Object(s.jsx)(b.b,{to:"/",activeClassName:"App-link",style:{color:"white"},children:Object(s.jsx)("strong",{children:"S'inscrire"})})}),Object(s.jsx)("div",{className:"col-md-2",children:Object(s.jsx)(b.b,{to:"/",activeClassName:"App-link",style:{color:"white"},children:Object(s.jsx)("strong",{children:"Liste des inscriptions"})})}),Object(s.jsx)("div",{className:"col-md-2",children:Object(s.jsx)(b.b,{to:"/",activeClassName:"App-link",style:{color:"white"},children:Object(s.jsx)("strong",{children:"Pr\xe9stations"})})})]})}),Object(s.jsx)("div",{className:"spacer"})]})})},u=c(2),O=c(23),x=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"fetching",children:Object(s.jsx)(O.a,{className:"spinner"})})}}]),c}(n.Component),v=function e(t,c,s,n,r,i,a){Object(j.a)(this,e),this.nom=void 0,this.prenom=void 0,this.email=void 0,this.categorie=void 0,this.date=void 0,this.heureRdv=void 0,this.id=void 0,this.nom=t,this.prenom=c,this.email=s,this.date=r,this.categorie=n,this.heureRdv=i,this.id=a},p=function e(){Object(j.a)(this,e)};p.getReservations=function(){return fetch("http://localhost:3001/reservations").then((function(e){return e.ok?e.json():Promise.reject(e.status)}))};var f=p,g=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(e){var s;Object(j.a)(this,c),(s=t.call(this,e)).getReservations=function(){s.props.onFetching(!0),f.getReservations().then((function(e){setTimeout((function(){s.props.onFetching(!1),s.setState((function(t,c){return{reservations:e}}))}),500)}),(function(e){return s.setState((function(t,c){return{error:e}}))}))},s.componentDidMount=function(){s.getReservations()};var n=new v("","","","","","");return s.state={reservations:[n],error:""},s}return Object(l.a)(c,[{key:"render",value:function(){return Object(s.jsx)(r.a.Fragment,{children:Object(s.jsx)("div",{className:"row",children:this.state.reservations.map((function(e){return Object(s.jsx)("div",{className:"col-4-md",children:Object(s.jsx)("div",{className:"card",style:{height:"382px",width:"260px"},children:Object(s.jsxs)("div",{className:"list-group list-group-flush ",children:[Object(s.jsx)("a",{href:"/",children:Object(s.jsx)("i",{className:"fa fa-times-circle","aria-hidden":"true"})}),Object(s.jsxs)("div",{className:"list-group-item",children:[Object(s.jsx)("strong",{children:"Nom  :"})," ",e.nom]}),Object(s.jsxs)("div",{className:"list-group-item",children:[Object(s.jsx)("strong",{children:"Prenom :"})," ",e.prenom]}),Object(s.jsxs)("div",{className:"list-group-item",children:[Object(s.jsx)("strong",{children:"Email :"})," ",e.email]}),Object(s.jsxs)("div",{className:"list-group-item",children:[Object(s.jsx)("strong",{children:"Categorie :"})," ",e.categorie]}),Object(s.jsxs)("div",{className:"list-group-item",children:[Object(s.jsx)("strong",{children:"Date :"})," ",e.date]}),Object(s.jsxs)("div",{className:"list-group-item",children:[Object(s.jsx)("strong",{children:"Heure :"})," ",e.heureRdv]})]})})},e.id)}))})})}}]),c}(n.Component),N=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(e){var s;Object(j.a)(this,c),(s=t.call(this,e)).addReservation=function(){},s.componentDidMount=function(){};var n=new v("","","","","","");return s.state={reservation:n,error:""},s}return Object(l.a)(c,[{key:"render",value:function(){return Object(s.jsx)(r.a.Fragment,{children:Object(s.jsxs)("div",{className:"container text-center",children:[Object(s.jsx)("h2",{children:"R\xe9servation"}),Object(s.jsx)("hr",{}),Object(s.jsx)("div",{className:"row justify-content-md-center",children:Object(s.jsxs)("form",{method:"post",onSubmit:this.addReservation,children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Nom : "}),Object(s.jsx)("input",{type:"text",pattern:"^([a-zA-Z]*)$",className:"form-control"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Pr\xe9nom : "}),Object(s.jsx)("input",{type:"text",pattern:"^([a-zA-Z]*)$",className:"form-control"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"email : "}),Object(s.jsx)("input",{type:"text",className:"form-control",pattern:"^.*@.*\\.[a-zA-Z]+$"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Cat\xe9gorie : "}),Object(s.jsxs)("select",{className:"form-control",children:[Object(s.jsx)("option",{children:"Manucure"}),Object(s.jsx)("option",{children:"P\xe9dicure"})]})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Date du rendez vous : "}),Object(s.jsx)("input",{type:"date",className:"form-control"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"heure du rendez vous : "}),Object(s.jsx)("input",{type:"time",className:"form-control"})]}),Object(s.jsx)("div",{className:"form-check",children:Object(s.jsx)("button",{type:"submit",className:"btn btn-primary mt-2",children:"Envoyer"})})]})})]})})}}]),c}(n.Component),y=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(e){var s;return Object(j.a)(this,c),(s=t.call(this,e)).showfetching=function(e){s.setState((function(t,c){return{fetching:e}}))},s.state={fetching:!1},s}return Object(l.a)(c,[{key:"render",value:function(){var e=this;return Object(s.jsxs)(r.a.Fragment,{children:[this.state.fetching?Object(s.jsx)(x,{}):null,Object(s.jsx)(m,{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)(u.c,{children:[Object(s.jsx)(u.a,{exact:!0,path:"/reservations",render:function(t){return Object(s.jsx)(g,Object(o.a)(Object(o.a)({},t),{},{onFetching:e.showfetching}))}}),Object(s.jsx)(u.a,{exact:!0,path:"/reservation",render:function(t){return Object(s.jsx)(N,Object(o.a)(Object(o.a)({},t),{},{onFetching:e.showfetching}))}})]})})]})}},{key:"componentDidMount",value:function(){}}]),c}(n.Component),w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),r(e),i(e)}))};c(35);a.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(b.a,{children:Object(s.jsx)(y,{})})}),document.getElementById("root")),w()}},[[36,1,2]]]);
//# sourceMappingURL=main.4fd99a9c.chunk.js.map