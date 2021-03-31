(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t,r){},149:function(e,t,r){},150:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(8),c=r.n(s),i=r(31),o=(r(102),r(12)),l=r(16),u=r(184),d=r(45),p=r.n(d);var m={init:function(){},log:function(e){console.error(e)}};p.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<=500||(m.log(e),l.b.error("An unexpected error occurred.")),Promise.reject(e)}));var h={get:p.a.get,post:p.a.post,put:p.a.put,delete:p.a.delete},j=r(85),b="token";function x(e,t){return h.post("http://localhost:8080/api/auth/login",{email:e,password:t})}var f=r(2),v=function(){var e=function(){try{var e=localStorage.getItem(b);return Object(j.a)(e)}catch(t){return null}}();return Object(f.jsxs)("div",{className:"navbar flex",children:[Object(f.jsx)("div",{className:"logo",children:"domain"}),Object(f.jsxs)("div",{className:"btns flex",children:[e&&Object(f.jsxs)(n.a.Fragment,{children:[Object(f.jsx)("div",{style:{margin:"0 5px",fontWeight:"bold"},children:e.name}),Object(f.jsx)(i.b,{to:"/api/auth/logout",className:"remove-underline",children:Object(f.jsx)(u.a,{className:"btn",variant:"outlined",type:"submit",children:"Logout"})})]}),!e&&Object(f.jsxs)(n.a.Fragment,{children:[Object(f.jsx)(i.b,{to:"/api/auth/login",className:"remove-underline",children:Object(f.jsx)(u.a,{className:"btn",variant:"outlined",type:"submit",children:"login"})}),Object(f.jsx)(i.b,{to:"/api/auth/register",className:"remove-underline",children:Object(f.jsx)(u.a,{className:"btn",variant:"outlined",type:"submit",children:"register"})})]})]})]})},O=r(10),g=r.n(O),w=r(18),y=r(15),k=r(20),S=r(21),N=r(23),I=r(22),P=r(49),C=r(90),F=r(92),L=r(182),q=r(183),A=function(e){var t=e.error,r=e.icon,a=Object(F.a)(e,["error","icon"]);return Object(f.jsxs)(L.a,{className:"input-spacing",container:!0,spacing:1,justify:"center",alignItems:t?"center":"flex-end",children:[Object(f.jsx)(L.a,{style:{color:"var(--blue)"},item:!0,children:r}),Object(f.jsx)(L.a,{item:!0,children:t?Object(f.jsx)(q.a,Object(w.a)({error:!0,helperText:t,style:{width:"200px"}},a)):Object(f.jsx)(q.a,Object(w.a)({style:{width:"200px"}},a))})]})},B=r(19),T=r.n(B),D=function(e){Object(N.a)(r,e);var t=Object(I.a)(r);function r(){var e;Object(k.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={data:{},errors:{}},e.validate=function(){var t=T.a.object(e.schema).validate(e.state.data).error;if(!t)return null;var r={};console.log(t);var a,n=Object(C.a)(t.details);try{for(n.s();!(a=n.n()).done;){var s=a.value;r[s.path[0]]=s.message}}catch(c){n.e(c)}finally{n.f()}return r},e.validateProperty=function(t){var r=t.name,a=t.value,n=Object(P.a)({},r,a),s=T.a.object(Object(P.a)({},r,e.schema[r])).validate(n).error;return s?s.details[0].message:null},e.handleSubmit=function(t){t.preventDefault();var r=e.validate();e.setState({errors:r||{}}),r||e.doSubmit()},e.handleChange=function(t){var r=t.currentTarget,a=Object(w.a)({},e.state.errors),n=e.validateProperty(r);n?a[r.name]=n:delete a[r.name];var s=Object(w.a)({},e.state.data);s[r.name]=r.value,e.setState({data:s,errors:a})},e}return Object(S.a)(r,[{key:"renderInput",value:function(e,t,r){for(var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"text",n=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],s=this.state,c=s.data,i=s.errors,o=arguments.length,l=new Array(o>5?o-5:0),u=5;u<o;u++)l[u-5]=arguments[u];return Object(f.jsx)(A,Object(w.a)({value:c[e],onChange:this.handleChange,label:t,name:e,icon:r,type:a,required:n,error:i[e]},l))}},{key:"renderSubmitBtn",value:function(e){return Object(f.jsx)(u.a,{className:"btn",style:{width:"200px"},variant:"outlined",type:"submit",children:e})}}]),r}(a.Component);function E(e){return h.post("http://localhost:8080/api/auth/register",{name:e.name,email:e.email,password:e.password})}var M=r(91),J=r.n(M),Y=r(41),z=r.n(Y),R=r(36),W=r.n(R),_=(r(37),function(e){Object(N.a)(r,e);var t=Object(I.a)(r);function r(){var e;Object(k.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={data:{name:"",email:"",password:""},errors:{}},e.schema={name:T.a.string().min(3).max(250).required(),email:T.a.string().min(3).max(250).required().email({tlds:{allow:!1}}),password:T.a.string().min(3).max(1e3).required()},e.doSubmit=Object(y.a)(g.a.mark((function t(){var r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E(e.state.data);case 3:e.props.history.push("/api/verify/account/resend-email/".concat(e.state.data.email)),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((r=Object(w.a)({},e.state.errors)).email=t.t0.response.data,e.setState({errors:r}));case 9:case"end":return t.stop()}}),t,null,[[0,6]])}))),e}return Object(S.a)(r,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"flex flex-column",children:[Object(f.jsx)("h1",{className:"heading",children:"Register"}),Object(f.jsxs)("form",{onSubmit:this.handleSubmit,className:"form-container flex flex-column",children:[this.renderInput("name","Name",Object(f.jsx)(J.a,{}),"text",!0),this.renderInput("email","Email",Object(f.jsx)(z.a,{}),"email",!0),this.renderInput("password","Password",Object(f.jsx)(W.a,{}),"password",!0),this.renderSubmitBtn("register")]})]})}}]),r}(D)),G=function(){return Object(f.jsx)("h1",{children:"404 Not Found"})},H=function(e){Object(N.a)(r,e);var t=Object(I.a)(r);function r(){var e;Object(k.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={data:{email:"",password:""},errors:{}},e.schema={email:T.a.string().min(3).max(250).required().email({tlds:{allow:!1}}),password:T.a.string().min(3).max(1e3).required()},e.doSubmit=Object(y.a)(g.a.mark((function t(){var r,a,n,s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.state.data,t.next=4,x(r.email,r.password);case 4:if(a=t.sent,"verify_email"!==(n=a.data).message){t.next=8;break}return t.abrupt("return",e.props.history.push("/api/verify/account/resend-email/".concat(n.email)));case 8:localStorage.setItem("token",n),e.props.history.push("/"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((s=Object(w.a)({},e.state.errors)).email=t.t0.response.data,s.password=t.t0.response.data,e.setState({errors:s}));case 15:case"end":return t.stop()}}),t,null,[[0,12]])}))),e}return Object(S.a)(r,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"flex flex-column",children:[Object(f.jsx)("h1",{className:"heading",children:"Login"}),Object(f.jsxs)("form",{onSubmit:this.handleSubmit,className:"form-container flex flex-column",children:[this.renderInput("email","Email",Object(f.jsx)(z.a,{}),"email",!0),this.renderInput("password","Password",Object(f.jsx)(W.a,{}),"password",!0),Object(f.jsx)(i.b,{to:"/api/verify/send-email/password-reset",children:Object(f.jsx)("p",{style:{color:"var(--blue)",fontSize:"15px",margin:"5px 0 5px 120px"},children:"Forgot password?"})}),this.renderSubmitBtn("Login")]})]})}}]),r}(D),K=r(58),Q=r.p+"static/media/checked.08385652.svg",U=r.p+"static/media/warning.f4935ab6.svg",V=function(e){var t=e.email,r=e.resendLink,a=e.errors;return Object(f.jsx)("div",{style:{marginTop:"50px"},className:"flex flex-column",children:Object(f.jsxs)("div",{className:"form-container flex flex-column",style:{width:"400px",height:"300px"},children:[!a&&Object(f.jsxs)(n.a.Fragment,{children:[Object(f.jsx)("img",{alt:"checked",style:{width:"25%",height:"25%"},src:Q}),Object(f.jsx)("h5",{className:"text-center",children:"A link has been sent to your email account"}),Object(f.jsxs)("h6",{className:"text-center",style:{margin:"0"},children:["Please click on the link that has just been sent to your email account : ",t," ."]}),Object(f.jsx)(u.a,{onClick:r,style:{color:"var(--blue)",borderColor:"var(--blue)",width:"200px",margin:"30px 0"},variant:"outlined",children:"resend link"})]}),a&&Object(f.jsxs)(n.a.Fragment,{children:[Object(f.jsx)("img",{alt:"warning",style:{width:"25%",height:"25%"},src:U}),Object(f.jsx)("h5",{className:"text-center",children:"Link expired or invalid link"})]})]})})},X="http://localhost:8080/api";function Z(e){return h.post("http://localhost:8080/api/verify/send-email/account",e)}function $(e,t){return h.get("".concat(X,"/verify/email/").concat(e,"/").concat(t))}function ee(e,t){return h.get("".concat(X,"/verify/email-link/").concat(e,"/").concat(t))}var te=function(e){var t=Object(a.useState)(!1),r=Object(K.a)(t,2),n=r[0],s=r[1],c=e.match.params.email,i={email:c},o=function(){var e=Object(y.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z(i);case 3:t=e.sent,l.b.success(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),e.t0.response&&400===e.t0.response.status&&(s(!0),l.b.error(e.t0.response.data));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)(V,{errors:n,email:c,resendLink:o})},re="http://localhost:8080/api";function ae(e){return h.post("http://localhost:8080/api/verify/send-email/password-reset",e)}function ne(e,t,r){return h.post("".concat(re,"/verify/password-reset/").concat(e,"/").concat(t),r)}var se=function(e){var t=Object(a.useState)(!1),r=Object(K.a)(t,2),n=r[0],s=r[1],c=e.match.params.email,i={email:c},o=function(){var e=Object(y.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae(i);case 3:t=e.sent,l.b.success(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),e.t0.response&&400===e.t0.response.status&&(s(!0),l.b.error(e.t0.response.data));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)(V,{errors:n,email:c,resendLink:o})},ce=function(e){Object(N.a)(r,e);var t=Object(I.a)(r);function r(){var e;Object(k.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={sucess:!1,errors:!1,userId:e.props.match.params.userId,token:e.props.match.params.token},e}return Object(S.a)(r,[{key:"componentDidMount",value:function(){var e=Object(y.a)(g.a.mark((function e(){var t,r,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,r=t.userId,a=t.token,e.prev=1,e.next=4,$(r,a);case 4:this.setState({sucess:!0}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),l.b.error(e.t0.response.data),this.setState({errors:!0});case 11:case"end":return e.stop()}}),e,this,[[1,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.errors,r=e.sucess;return Object(f.jsx)("div",{style:{marginTop:"50px"},className:"flex flex-column",children:Object(f.jsxs)("div",{className:"form-container flex flex-column",style:{width:"400px",height:"300px"},children:[r&&Object(f.jsxs)(n.a.Fragment,{children:[Object(f.jsx)("img",{alt:"checked",style:{width:"25%",height:"25%"},src:Q}),Object(f.jsx)("h2",{className:"text-center",children:"Thank You"}),Object(f.jsx)("h5",{className:"text-center",style:{margin:"0"},children:"You have verified your email."}),Object(f.jsx)(u.a,{onClick:function(){return window.location="/"},style:{color:"var(--blue)",borderColor:"var(--blue)",width:"200px",margin:"30px 0"},variant:"outlined",children:"continue"})]}),t&&Object(f.jsxs)(n.a.Fragment,{children:[Object(f.jsx)("img",{alt:"warning",style:{width:"25%",height:"25%"},src:U}),Object(f.jsx)("h5",{className:"text-center",children:"Link expired or invalid link"})]})]})})}}]),r}(a.Component),ie=function(e){Object(N.a)(r,e);var t=Object(I.a)(r);function r(){var e;Object(k.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={data:{email:""},errors:{}},e.schema={email:T.a.string().min(3).max(250).required().email({tlds:{allow:!1}})},e.doSubmit=Object(y.a)(g.a.mark((function t(){var r,a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.state.data,t.next=4,ae({email:r.email});case 4:e.props.history.push("/api/verify/password-reset/resend-email/".concat(r.email)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((a=Object(w.a)({},e.state.errors)).email=t.t0.response.data,e.setState({errors:a}));case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),e}return Object(S.a)(r,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"flex flex-column",children:[Object(f.jsx)("h1",{className:"heading",children:"forgot password?"}),Object(f.jsxs)("form",{onSubmit:this.handleSubmit,className:"form-container flex flex-column",children:[this.renderInput("email","Email",Object(f.jsx)(z.a,{}),"email",!0),this.renderSubmitBtn("Submit")]})]})}}]),r}(D),oe=function(e){Object(N.a)(r,e);var t=Object(I.a)(r);function r(){var e;Object(k.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={sucess:!1,error:!1,userId:e.props.match.params.userId,token:e.props.match.params.token,data:{password:"",confirmPassword:""},errors:{}},e.schema={password:T.a.string().min(3).max(1e3).required(),confirmPassword:T.a.string().min(3).max(1e3).required()},e.doSubmit=Object(y.a)(g.a.mark((function t(){var r,a,n,s,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.state,a=r.data,n=r.userId,s=r.token,a.password===a.confirmPassword){t.next=7;break}return(c=Object(w.a)({},e.state.errors)).password="password does not match",c.confirmPassword="password does not match",e.setState({errors:c}),t.abrupt("return");case 7:return t.prev=7,t.next=10,ne(n,s,{password:a.password});case 10:window.location="/",t.next=16;break;case 13:t.prev=13,t.t0=t.catch(7),t.t0.response&&400===t.t0.response.status&&(e.setState({error:!0}),l.b.error(t.t0.response.data));case 16:case"end":return t.stop()}}),t,null,[[7,13]])}))),e}return Object(S.a)(r,[{key:"componentDidMount",value:function(){var e=Object(y.a)(g.a.mark((function e(){var t,r,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,r=t.userId,a=t.token,e.prev=1,e.next=4,ee(r,a);case 4:this.setState({sucess:!0}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),l.b.error("Link expired or invalid link"),this.setState({error:!0});case 11:case"end":return e.stop()}}),e,this,[[1,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.sucess,r=e.error;return Object(f.jsxs)("div",{className:"flex flex-column",children:[t&&Object(f.jsxs)(n.a.Fragment,{children:[" ",Object(f.jsx)("h1",{className:"heading",children:"reset password"}),Object(f.jsxs)("form",{onSubmit:this.handleSubmit,className:"form-container flex flex-column",children:[this.renderInput("password","Password",Object(f.jsx)(W.a,{}),"password",!0),this.renderInput("confirmPassword","Confirm password",Object(f.jsx)(W.a,{}),"password",!0),this.renderSubmitBtn("Submit")]})]}),r&&Object(f.jsx)(n.a.Fragment,{children:Object(f.jsxs)("div",{className:"form-container flex flex-column",style:{marginTop:"50px",width:"400px",height:"300px"},children:[Object(f.jsx)("img",{alt:"warning",style:{width:"25%",height:"25%"},src:U}),Object(f.jsx)("h5",{className:"text-center",children:"Link expired or invalid link"})]})})]})}}]),r}(D),le=function(e){Object(N.a)(r,e);var t=Object(I.a)(r);function r(){return Object(k.a)(this,r),t.apply(this,arguments)}return Object(S.a)(r,[{key:"componentDidMount",value:function(){localStorage.removeItem(b),window.location="/"}},{key:"render",value:function(){return null}}]),r}(a.Component),ue=(r(148),r(149),function(){return Object(f.jsxs)(n.a.Fragment,{children:[Object(f.jsx)(l.a,{}),Object(f.jsxs)(o.d,{children:[Object(f.jsx)(o.b,{exact:!0,path:"/",component:v}),Object(f.jsx)(o.b,{exact:!0,path:"/api/auth/register",component:_}),Object(f.jsx)(o.b,{exact:!0,path:"/api/auth/login",component:H}),Object(f.jsx)(o.b,{exact:!0,path:"/api/auth/logout",component:le}),Object(f.jsx)(o.b,{exact:!0,path:"/api/verify/send-email/password-reset",component:ie}),Object(f.jsx)(o.b,{exact:!0,path:"/api/verify/email/:userId/:token",component:ce}),Object(f.jsx)(o.b,{exact:!0,path:"/api/verify/account/resend-email/:email",component:te}),Object(f.jsx)(o.b,{exact:!0,path:"/api/verify/password-reset/resend-email/:email",component:se}),Object(f.jsx)(o.b,{exact:!0,path:"/api/verify/password-reset/:userId/:token",component:oe}),Object(f.jsx)(o.b,{path:"/not-found",component:G}),Object(f.jsx)(o.a,{to:"/not-found"})]})]})});c.a.render(Object(f.jsx)(i.a,{children:Object(f.jsx)(ue,{})}),document.getElementById("root"))},37:function(e,t,r){}},[[150,1,2]]]);
//# sourceMappingURL=main.b78251d8.chunk.js.map