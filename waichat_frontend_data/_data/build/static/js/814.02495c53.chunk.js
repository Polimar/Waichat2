"use strict";(self.webpackChunkwaichat_frontend=self.webpackChunkwaichat_frontend||[]).push([[814],{814:(e,r,o)=>{o.r(r),o.d(r,{default:()=>P});var a=o(43),s=o(867),i=o(621),n=o(145),l=o(579);const d=s.Ay.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--background-color);
  color: var(--text-color);
`,t=s.Ay.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--primary-color);
  color: white;
`,c=s.Ay.main`
  display: flex;
  flex: 1;
  overflow: hidden;
`,m=s.Ay.aside`
  width: 250px;
  background-color: var(--sidebar-bg);
  padding: 1rem 0;
  overflow-y: auto;
`,u=s.Ay.div`
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: var(--hover-color);
  }
  
  &.active {
    background-color: var(--active-color);
    font-weight: bold;
  }
`,h=s.Ay.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
`,p=s.Ay.h2`
  margin-bottom: 1.5rem;
  color: var(--primary-color);
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.5rem;
`,x=s.Ay.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
  
  th, td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid var(--border-color);
  }
  
  th {
    background-color: var(--table-header-bg);
    font-weight: bold;
  }
  
  tr:hover {
    background-color: var(--hover-color);
  }
`,g=s.Ay.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
  margin-right: 0.5rem;
  
  &.primary {
    background-color: var(--primary-color);
    color: white;
    
    &:hover {
      background-color: var(--primary-dark);
    }
  }
  
  &.secondary {
    background-color: var(--secondary-color);
    color: white;
    
    &:hover {
      background-color: var(--secondary-dark);
    }
  }
  
  &.danger {
    background-color: var(--danger-color);
    color: white;
    
    &:hover {
      background-color: var(--danger-dark);
    }
  }
`,v=s.Ay.form`
  max-width: 600px;
  margin-bottom: 2rem;
`,j=s.Ay.div`
  margin-bottom: 1rem;
`,y=s.Ay.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`,b=s.Ay.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--input-bg);
  color: var(--text-color);
  
  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }
`,w=s.Ay.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--input-bg);
  color: var(--text-color);
  
  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }
`,f=s.Ay.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--input-bg);
  color: var(--text-color);
  min-height: 150px;
  
  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }
`,k=s.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,A=s.Ay.div`
  background-color: var(--background-color);
  padding: 2rem;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
`,C=s.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
  h3 {
    margin: 0;
  }
`,N=s.Ay.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-color);
`,P=()=>{const[e,r]=(0,a.useState)("users"),[o,s]=(0,a.useState)([]),[P,S]=(0,a.useState)([]),[R,M]=(0,a.useState)([]),[E,G]=(0,a.useState)([]),[F,U]=(0,a.useState)({isOpen:!1,type:null,data:null}),[I,$]=(0,a.useState)({cert:"",key:""}),[q,O]=(0,a.useState)({}),[D,z]=(0,a.useState)(!1);(0,a.useEffect)((()=>{L()}),[e]);const L=async()=>{z(!0);try{switch(e){case"users":const e=await i.A.get("/admin/users");s(e.data);break;case"models":const r=await i.A.get("/admin/ollama/models");S(r.data);break;case"prompts":const o=await i.A.get("/admin/ollama/prompts");M(o.data);break;case"groups":const a=await i.A.get("/admin/groups");G(a.data);break;case"ssl":const n=await i.A.get("/admin/ssl");$(n.data)}}catch(a){var r,o;n.oR.error(`Errore nel caricamento dei dati: ${(null===(r=a.response)||void 0===r||null===(o=r.data)||void 0===o?void 0:o.message)||a.message}`)}finally{z(!1)}},T=e=>{const{name:r,value:o}=e.target;O({...q,[r]:o})},B=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;O(r||{username:"",email:"",password:"",fullName:"",role:"user"}),U({isOpen:!0,type:e,data:r})},_=async e=>{e.preventDefault(),z(!0);try{"addUser"===F.type?(await i.A.post("/admin/users",q),n.oR.success("Utente creato con successo")):"editUser"===F.type?(await i.A.put(`/admin/users/${F.data.id}`,q),n.oR.success("Utente aggiornato con successo")):"changePassword"===F.type&&(await i.A.put(`/admin/users/${F.data.id}/password`,{password:q.newPassword}),n.oR.success("Password aggiornata con successo")),U({isOpen:!1,type:null,data:null}),L()}catch(a){var r,o;n.oR.error(`Errore: ${(null===(r=a.response)||void 0===r||null===(o=r.data)||void 0===o?void 0:o.message)||a.message}`)}finally{z(!1)}},K=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;O(r||{name:"",url:""}),U({isOpen:!0,type:e,data:r})},V=async e=>{e.preventDefault(),z(!0);try{"addModel"===F.type?(await i.A.post("/admin/ollama/models",q),n.oR.success("Modello aggiunto con successo")):"editModel"===F.type&&(await i.A.put(`/admin/ollama/models/${F.data.id}`,q),n.oR.success("Modello aggiornato con successo")),U({isOpen:!1,type:null,data:null}),L()}catch(a){var r,o;n.oR.error(`Errore: ${(null===(r=a.response)||void 0===r||null===(o=r.data)||void 0===o?void 0:o.message)||a.message}`)}finally{z(!1)}},Y=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;O(r||{name:"",content:"",modelId:P.length>0?P[0].id:""}),U({isOpen:!0,type:e,data:r})},H=async e=>{e.preventDefault(),z(!0);try{"addPrompt"===F.type?(await i.A.post("/admin/ollama/prompts",q),n.oR.success("Prompt aggiunto con successo")):"editPrompt"===F.type&&(await i.A.put(`/admin/ollama/prompts/${F.data.id}`,q),n.oR.success("Prompt aggiornato con successo")),U({isOpen:!1,type:null,data:null}),L()}catch(a){var r,o;n.oR.error(`Errore: ${(null===(r=a.response)||void 0===r||null===(o=r.data)||void 0===o?void 0:o.message)||a.message}`)}finally{z(!1)}},J=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;O(r||{name:"",userIds:[]}),U({isOpen:!0,type:e,data:r})},Q=async e=>{e.preventDefault(),z(!0);try{"addGroup"===F.type?(await i.A.post("/admin/groups",q),n.oR.success("Gruppo creato con successo")):"editGroup"===F.type&&(await i.A.put(`/admin/groups/${F.data.id}`,q),n.oR.success("Gruppo aggiornato con successo")),U({isOpen:!1,type:null,data:null}),L()}catch(a){var r,o;n.oR.error(`Errore: ${(null===(r=a.response)||void 0===r||null===(o=r.data)||void 0===o?void 0:o.message)||a.message}`)}finally{z(!1)}},W=async e=>{e.preventDefault(),z(!0);try{await i.A.post("/admin/ssl",I),n.oR.success("Certificato SSL aggiornato con successo")}catch(a){var r,o;n.oR.error(`Errore: ${(null===(r=a.response)||void 0===r||null===(o=r.data)||void 0===o?void 0:o.message)||a.message}`)}finally{z(!1)}},X=e=>{const{name:r,value:o}=e.target;$({...I,[r]:o})},Z=e=>{const r=e.target.options,o=[];for(let a=0;a<r.length;a++)r[a].selected&&o.push(r[a].value);O({...q,userIds:o})};return(0,l.jsxs)(d,{children:[(0,l.jsx)(t,{children:(0,l.jsx)("h1",{children:"Pannello di Amministrazione"})}),(0,l.jsxs)(c,{children:[(0,l.jsxs)(m,{children:[(0,l.jsx)(u,{className:"users"===e?"active":"",onClick:()=>r("users"),children:"Gestione Utenti"}),(0,l.jsx)(u,{className:"models"===e?"active":"",onClick:()=>r("models"),children:"Modelli Ollama"}),(0,l.jsx)(u,{className:"prompts"===e?"active":"",onClick:()=>r("prompts"),children:"Prompt Ollama"}),(0,l.jsx)(u,{className:"groups"===e?"active":"",onClick:()=>r("groups"),children:"Chat di Gruppo"}),(0,l.jsx)(u,{className:"ssl"===e?"active":"",onClick:()=>r("ssl"),children:"Certificato SSL"})]}),(0,l.jsxs)(h,{children:["users"===e&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p,{children:"Gestione Utenti"}),(0,l.jsx)(g,{className:"primary",onClick:()=>B("addUser"),children:"Aggiungi Utente"}),(0,l.jsxs)(x,{children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"ID"}),(0,l.jsx)("th",{children:"Username"}),(0,l.jsx)("th",{children:"Email"}),(0,l.jsx)("th",{children:"Nome Completo"}),(0,l.jsx)("th",{children:"Ruolo"}),(0,l.jsx)("th",{children:"Azioni"})]})}),(0,l.jsx)("tbody",{children:o.map((e=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:e.id}),(0,l.jsx)("td",{children:e.username}),(0,l.jsx)("td",{children:e.email}),(0,l.jsx)("td",{children:e.fullName}),(0,l.jsx)("td",{children:e.role}),(0,l.jsxs)("td",{children:[(0,l.jsx)(g,{className:"secondary",onClick:()=>B("editUser",e),children:"Modifica"}),(0,l.jsx)(g,{className:"secondary",onClick:()=>B("changePassword",e),children:"Cambia Password"}),(0,l.jsx)(g,{className:"danger",onClick:()=>(async e=>{if(window.confirm("Sei sicuro di voler eliminare questo utente?")){z(!0);try{await i.A.delete(`/admin/users/${e}`),n.oR.success("Utente eliminato con successo"),L()}catch(a){var r,o;n.oR.error(`Errore: ${(null===(r=a.response)||void 0===r||null===(o=r.data)||void 0===o?void 0:o.message)||a.message}`)}finally{z(!1)}}})(e.id),children:"Elimina"})]})]},e.id)))})]})]}),"models"===e&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p,{children:"Gestione Modelli Ollama"}),(0,l.jsx)(g,{className:"primary",onClick:()=>K("addModel"),children:"Aggiungi Modello"}),(0,l.jsxs)(x,{children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"ID"}),(0,l.jsx)("th",{children:"Nome"}),(0,l.jsx)("th",{children:"URL"}),(0,l.jsx)("th",{children:"Azioni"})]})}),(0,l.jsx)("tbody",{children:P.map((e=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:e.id}),(0,l.jsx)("td",{children:e.name}),(0,l.jsx)("td",{children:e.url}),(0,l.jsxs)("td",{children:[(0,l.jsx)(g,{className:"secondary",onClick:()=>K("editModel",e),children:"Modifica"}),(0,l.jsx)(g,{className:"danger",onClick:()=>(async e=>{if(window.confirm("Sei sicuro di voler eliminare questo modello?")){z(!0);try{await i.A.delete(`/admin/ollama/models/${e}`),n.oR.success("Modello eliminato con successo"),L()}catch(a){var r,o;n.oR.error(`Errore: ${(null===(r=a.response)||void 0===r||null===(o=r.data)||void 0===o?void 0:o.message)||a.message}`)}finally{z(!1)}}})(e.id),children:"Elimina"})]})]},e.id)))})]})]}),"prompts"===e&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p,{children:"Gestione Prompt Ollama"}),(0,l.jsx)(g,{className:"primary",onClick:()=>Y("addPrompt"),children:"Aggiungi Prompt"}),(0,l.jsxs)(x,{children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"ID"}),(0,l.jsx)("th",{children:"Nome"}),(0,l.jsx)("th",{children:"Modello"}),(0,l.jsx)("th",{children:"Azioni"})]})}),(0,l.jsx)("tbody",{children:R.map((e=>{var r;return(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:e.id}),(0,l.jsx)("td",{children:e.name}),(0,l.jsx)("td",{children:(null===(r=P.find((r=>r.id===e.modelId)))||void 0===r?void 0:r.name)||"N/A"}),(0,l.jsxs)("td",{children:[(0,l.jsx)(g,{className:"secondary",onClick:()=>Y("editPrompt",e),children:"Modifica"}),(0,l.jsx)(g,{className:"danger",onClick:()=>(async e=>{if(window.confirm("Sei sicuro di voler eliminare questo prompt?")){z(!0);try{await i.A.delete(`/admin/ollama/prompts/${e}`),n.oR.success("Prompt eliminato con successo"),L()}catch(a){var r,o;n.oR.error(`Errore: ${(null===(r=a.response)||void 0===r||null===(o=r.data)||void 0===o?void 0:o.message)||a.message}`)}finally{z(!1)}}})(e.id),children:"Elimina"})]})]},e.id)}))})]})]}),"groups"===e&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p,{children:"Gestione Chat di Gruppo"}),(0,l.jsx)(g,{className:"primary",onClick:()=>J("addGroup"),children:"Crea Gruppo"}),(0,l.jsxs)(x,{children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"ID"}),(0,l.jsx)("th",{children:"Nome"}),(0,l.jsx)("th",{children:"Partecipanti"}),(0,l.jsx)("th",{children:"Azioni"})]})}),(0,l.jsx)("tbody",{children:E.map((e=>{var r;return(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:e.id}),(0,l.jsx)("td",{children:e.name}),(0,l.jsxs)("td",{children:[(null===(r=e.users)||void 0===r?void 0:r.length)||0," utenti"]}),(0,l.jsxs)("td",{children:[(0,l.jsx)(g,{className:"secondary",onClick:()=>J("editGroup",e),children:"Modifica"}),(0,l.jsx)(g,{className:"danger",onClick:()=>(async e=>{if(window.confirm("Sei sicuro di voler eliminare questo gruppo?")){z(!0);try{await i.A.delete(`/admin/groups/${e}`),n.oR.success("Gruppo eliminato con successo"),L()}catch(a){var r,o;n.oR.error(`Errore: ${(null===(r=a.response)||void 0===r||null===(o=r.data)||void 0===o?void 0:o.message)||a.message}`)}finally{z(!1)}}})(e.id),children:"Elimina"})]})]},e.id)}))})]})]}),"ssl"===e&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p,{children:"Gestione Certificato SSL"}),(0,l.jsxs)(v,{onSubmit:W,children:[(0,l.jsxs)(j,{children:[(0,l.jsx)(y,{htmlFor:"cert",children:"Certificato (PEM)"}),(0,l.jsx)(f,{id:"cert",name:"cert",value:I.cert,onChange:X,placeholder:"-----BEGIN CERTIFICATE-----",required:!0})]}),(0,l.jsxs)(j,{children:[(0,l.jsx)(y,{htmlFor:"key",children:"Chiave Privata (PEM)"}),(0,l.jsx)(f,{id:"key",name:"key",value:I.key,onChange:X,placeholder:"-----BEGIN PRIVATE KEY-----",required:!0})]}),(0,l.jsx)(g,{className:"primary",type:"submit",disabled:D,children:D?"Aggiornamento...":"Aggiorna Certificato"})]})]})]})]}),F.isOpen&&(0,l.jsx)(k,{children:(()=>{var e,r,a,s;return(0,l.jsxs)(A,{children:[(0,l.jsxs)(C,{children:[(0,l.jsx)("h3",{children:{addUser:"Aggiungi Nuovo Utente",editUser:"Modifica Utente",changePassword:"Cambia Password",addModel:"Aggiungi Nuovo Modello",editModel:"Modifica Modello",addPrompt:"Aggiungi Nuovo Prompt",editPrompt:"Modifica Prompt",addGroup:"Crea Nuovo Gruppo",editGroup:"Modifica Gruppo"}[F.type]}),(0,l.jsx)(N,{onClick:()=>U({isOpen:!1,type:null,data:null}),children:"\xd7"})]}),(null===(e=F.type)||void 0===e?void 0:e.includes("User"))&&(0,l.jsxs)(v,{onSubmit:_,children:[(0,l.jsxs)(j,{children:[(0,l.jsx)(y,{htmlFor:"username",children:"Username"}),(0,l.jsx)(b,{id:"username",name:"username",value:q.username||"",onChange:T,required:!0,disabled:"changePassword"===F.type})]}),"changePassword"!==F.type&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(j,{children:[(0,l.jsx)(y,{htmlFor:"email",children:"Email"}),(0,l.jsx)(b,{id:"email",name:"email",type:"email",value:q.email||"",onChange:T,required:!0})]}),(0,l.jsxs)(j,{children:[(0,l.jsx)(y,{htmlFor:"fullName",children:"Nome Completo"}),(0,l.jsx)(b,{id:"fullName",name:"fullName",value:q.fullName||"",onChange:T})]}),(0,l.jsxs)(j,{children:[(0,l.jsx)(y,{htmlFor:"role",children:"Ruolo"}),(0,l.jsxs)(w,{id:"role",name:"role",value:q.role||"user",onChange:T,required:!0,children:[(0,l.jsx)("option",{value:"user",children:"Utente"}),(0,l.jsx)("option",{value:"admin",children:"Amministratore"})]})]})]}),"changePassword"===F.type?(0,l.jsxs)(j,{children:[(0,l.jsx)(y,{htmlFor:"newPassword",children:"Nuova Password"}),(0,l.jsx)(b,{id:"newPassword",name:"newPassword",type:"password",value:q.newPassword||"",onChange:T,required:!0})]}):(0,l.jsxs)(j,{children:[(0,l.jsx)(y,{htmlFor:"password",children:"Password"}),(0,l.jsx)(b,{id:"password",name:"password",type:"password",value:q.password||"",onChange:T,required:"addUser"===F.type,placeholder:"editUser"===F.type?"Lascia vuoto per non modificare":""})]}),(0,l.jsx)(g,{className:"primary",type:"submit",disabled:D,children:D?"Salvataggio...":"Salva"})]}),(null===(r=F.type)||void 0===r?void 0:r.includes("Model"))&&(0,l.jsxs)(v,{onSubmit:V,children:[(0,l.jsxs)(j,{children:[(0,l.jsx)(y,{htmlFor:"name",children:"Nome Modello"}),(0,l.jsx)(b,{id:"name",name:"name",value:q.name||"",onChange:T,required:!0})]}),(0,l.jsxs)(j,{children:[(0,l.jsx)(y,{htmlFor:"url",children:"URL"}),(0,l.jsx)(b,{id:"url",name:"url",value:q.url||"",onChange:T,required:!0})]}),(0,l.jsx)(g,{className:"primary",type:"submit",disabled:D,children:D?"Salvataggio...":"Salva"})]}),(null===(a=F.type)||void 0===a?void 0:a.includes("Prompt"))&&(0,l.jsxs)(v,{onSubmit:H,children:[(0,l.jsxs)(j,{children:[(0,l.jsx)(y,{htmlFor:"name",children:"Nome Prompt"}),(0,l.jsx)(b,{id:"name",name:"name",value:q.name||"",onChange:T,required:!0})]}),(0,l.jsxs)(j,{children:[(0,l.jsx)(y,{htmlFor:"modelId",children:"Modello"}),(0,l.jsxs)(w,{id:"modelId",name:"modelId",value:q.modelId||"",onChange:T,required:!0,children:[(0,l.jsx)("option",{value:"",children:"Seleziona un modello"}),P.map((e=>(0,l.jsx)("option",{value:e.id,children:e.name},e.id)))]})]}),(0,l.jsxs)(j,{children:[(0,l.jsx)(y,{htmlFor:"content",children:"Contenuto del Prompt"}),(0,l.jsx)(f,{id:"content",name:"content",value:q.content||"",onChange:T,required:!0})]}),(0,l.jsx)(g,{className:"primary",type:"submit",disabled:D,children:D?"Salvataggio...":"Salva"})]}),(null===(s=F.type)||void 0===s?void 0:s.includes("Group"))&&(0,l.jsxs)(v,{onSubmit:Q,children:[(0,l.jsxs)(j,{children:[(0,l.jsx)(y,{htmlFor:"name",children:"Nome Gruppo"}),(0,l.jsx)(b,{id:"name",name:"name",value:q.name||"",onChange:T,required:!0})]}),(0,l.jsxs)(j,{children:[(0,l.jsx)(y,{htmlFor:"userIds",children:"Partecipanti"}),(0,l.jsx)(w,{id:"userIds",name:"userIds",multiple:!0,value:q.userIds||[],onChange:Z,required:!0,style:{height:"200px"},children:o.map((e=>(0,l.jsxs)("option",{value:e.id,children:[e.username," (",e.fullName||e.email,")"]},e.id)))})]}),(0,l.jsx)(g,{className:"primary",type:"submit",disabled:D,children:D?"Salvataggio...":"Salva"})]})]})})()})]})}}}]);
//# sourceMappingURL=814.02495c53.chunk.js.map