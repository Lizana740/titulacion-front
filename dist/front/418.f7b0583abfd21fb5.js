(self.webpackChunkdicrea=self.webpackChunkdicrea||[]).push([[418],{6418:(x,A,r)=>{"use strict";r.r(A),r.d(A,{ReporteModule:()=>j});var b=r(6895),h=r(3060),l=r(4006),m=r(4327),Z=r(5226),f=r.n(Z),e=r(4650),E=r(529);let g=(()=>{class o{constructor(t){this.http=t,this.url="/reporte/"}downloadPDF(t){return this.http.post("http://ec2-44-212-72-194.compute-1.amazonaws.com:3000/api/reporte/general/pdf/",t,{responseType:"blob"})}dowloadExcel(t){return this.http.post("http://ec2-44-212-72-194.compute-1.amazonaws.com:3000/api/reporte/estacion/excel/",t,{responseType:"blob"})}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(E.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var n=r(8856),i=r(3238),d=r(3608),a=r(805),s=r(47),w=r(9549),R=r(4385),T=r(4144),C=r(1493);function y(o,c){1&o&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Tipo de reporte"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"Formato"),e.qZA()())}function v(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td")(4,"div",9)(5,"div",10)(6,"button",18),e.NdJ("click",function(){const U=e.CHM(t).$implicit,L=e.oxw();return e.KtG(L.add(U.id))}),e._UZ(7,"i"),e._uU(8),e.qZA()()()()()}if(2&o){const t=c.$implicit;e.xp6(2),e.Oqu(t.label),e.xp6(4),e.Tol("btn btn-"+t.style),e.xp6(1),e.Tol(t.icon),e.xp6(1),e.hij(" ",t.buttonlabel," ")}}function _(o,c){if(1&o&&(e.TgZ(0,"mat-option",3),e._uU(1),e.qZA()),2&o){const t=c.$implicit;e.Q6J("value",t.id_estacion),e.xp6(1),e.hij(" ",t.nombre," ")}}function F(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"button",19),e.NdJ("click",function(){e.CHM(t);const u=e.oxw();return e.KtG(u.display=!u.display)}),e._UZ(1,"i",20),e._uU(2," Cancelar"),e.qZA(),e.TgZ(3,"button",21),e.NdJ("click",function(){e.CHM(t);const u=e.oxw();return e.KtG(u.generar())}),e._UZ(4,"i",22),e._uU(5," Descargar"),e.qZA()}}const M=function(){return{width:"60vw",height:"27vw"}},S=[{path:"lista",component:(()=>{class o{constructor(t,p,u){this.reporteServices=t,this._formBuilder=p,this.estacionServices=u,this.display=!1,this.doc=[{id:0,label:"Reporte General de Mediciones",icon:"pi pi-file-pdf",buttonlabel:"PDF",style:"danger "},{id:1,label:"Reporte de mediciones",icon:"pi pi-file-excel",buttonlabel:"Excel",style:"success "}],this.vaciar()}ngOnInit(){this.getEstaciones()}getEstaciones(){this.estacionServices.getEstacion().subscribe(t=>{this.estaciones=t.data})}vaciar(){this.formulario=this._formBuilder.group({inicio:["",l.kI.required],termino:["",l.kI.required],id_estacion:["",l.kI.required]})}add(t){this.tipo=t,this.display=!0}generar(){switch(this.tipo){case 0:console.log(7),this.reporteServices.downloadPDF(this.formulario.value).subscribe(t=>{var u=new Blob([t],{type:"application/pdf"});(0,m.saveAs)(u,"REPORTE"+(new Date).toString().substring(0,10)+".pdf"),this.display=!1,this.vaciar(),f().fire({icon:"success",title:"Reporte generado con \xe9xito!!",showConfirmButton:!1,timer:1500})},t=>{throw Error(t)});break;case 1:this.reporteServices.dowloadExcel(this.formulario.value).subscribe(t=>{var u=new Blob([t],{type:"application/pdf"});(0,m.saveAs)(u,"REPORTE"+(new Date).toString().substring(0,10)+".xlsx"),this.display=!1,this.vaciar(),f().fire({icon:"success",title:"Documento generado con \xe9xito!!",showConfirmButton:!1,timer:1500})})}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(g),e.Y36(l.qu),e.Y36(n.E))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-vista"]],decls:40,vars:8,consts:[[1,"m-3","mt-3"],[1,"card"],[1,"card-header",2,"color","grey"],[3,"value"],["pTemplate","header"],["pTemplate","body"],["header","Ingrese rango de fechas",1,"m-3","mt-3",3,"visible","modal","visibleChange"],[1,"mb-4",3,"formGroup"],[1,"container"],[1,"row"],[1,"col"],[1,"col-sm-6"],["appearance","outline"],["formControlName","id_estacion"],[3,"value",4,"ngFor","ngForOf"],["matInput","","type","date","placeholder","Inicio","formControlName","inicio","required",""],["matInput","","type","date","placeholder","Termino","formControlName","termino","required",""],["pTemplate","footer"],["pTooltip","Generar","tooltipPosition","top",3,"click"],[1,"btn","btn-danger",3,"click"],[1,"pi","pi-times"],[1,"btn","btn-primary",3,"click"],[1,"pi","pi-download"]],template:function(t,p){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),e._uU(4," Documentos"),e.qZA()(),e.TgZ(5,"p-table",3),e.YNc(6,y,5,0,"ng-template",4),e.YNc(7,v,9,6,"ng-template",5),e.qZA()()(),e.TgZ(8,"p-dialog",6),e.NdJ("visibleChange",function(U){return p.display=U}),e.TgZ(9,"form",7),e._UZ(10,"br"),e.TgZ(11,"div",8)(12,"div",9)(13,"div",10)(14,"h2"),e._uU(15,"Estaci\xf3n"),e.qZA(),e.TgZ(16,"div",11)(17,"mat-form-field",12)(18,"mat-label"),e._uU(19,"Seleciones una estaci\xf3n"),e.qZA(),e.TgZ(20,"mat-select",13),e.YNc(21,_,2,2,"mat-option",14),e.qZA()()()(),e.TgZ(22,"div",10)(23,"h2"),e._uU(24,"Inicio"),e.qZA(),e.TgZ(25,"div",11)(26,"mat-form-field",12)(27,"mat-label"),e._uU(28,"Ingrese la fecha de inicio"),e.qZA(),e._UZ(29,"input",15),e.qZA()()(),e.TgZ(30,"div",10)(31,"div",9)(32,"h2"),e._uU(33,"Termino"),e.qZA(),e.TgZ(34,"div",11)(35,"mat-form-field",12)(36,"mat-label"),e._uU(37,"Ingrese la fecha de termino"),e.qZA(),e._UZ(38,"input",16),e.qZA()()()()()()(),e.YNc(39,F,6,0,"ng-template",17),e.qZA()),2&t&&(e.xp6(5),e.Q6J("value",p.doc),e.xp6(3),e.Akn(e.DdM(7,M)),e.Q6J("visible",p.display)("modal",!0),e.xp6(1),e.Q6J("formGroup",p.formulario),e.xp6(12),e.Q6J("ngForOf",p.estaciones))},dependencies:[b.sg,i.ey,d.u,a.jx,s.iA,w.KE,w.hX,R.gD,T.Nt,C.V,l._Y,l.Fj,l.JJ,l.JL,l.Q7,l.sg,l.u]}),o})(),data:{breadcrumb:{label:"Lista de Reportes"}}}];let B=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[h.Bz.forChild(S),h.Bz]}),o})();var D=r(5782);let j=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[b.ez,D.m,B]}),o})()},4327:function(x,A){var h;void 0!==(h=function(){"use strict";function m(n,i,d){var a=new XMLHttpRequest;a.open("GET",n),a.responseType="blob",a.onload=function(){g(a.response,i,d)},a.onerror=function(){console.error("could not download file")},a.send()}function Z(n){var i=new XMLHttpRequest;i.open("HEAD",n,!1);try{i.send()}catch{}return 200<=i.status&&299>=i.status}function f(n){try{n.dispatchEvent(new MouseEvent("click"))}catch{var i=document.createEvent("MouseEvents");i.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),n.dispatchEvent(i)}}var e="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,E=e.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=e.saveAs||("object"!=typeof window||window!==e?function(){}:"download"in HTMLAnchorElement.prototype&&!E?function(n,i,d){var a=e.URL||e.webkitURL,s=document.createElement("a");s.download=i=i||n.name||"download",s.rel="noopener","string"==typeof n?(s.href=n,s.origin===location.origin?f(s):Z(s.href)?m(n,i,d):f(s,s.target="_blank")):(s.href=a.createObjectURL(n),setTimeout(function(){a.revokeObjectURL(s.href)},4e4),setTimeout(function(){f(s)},0))}:"msSaveOrOpenBlob"in navigator?function(n,i,d){if(i=i||n.name||"download","string"!=typeof n)navigator.msSaveOrOpenBlob(function l(n,i){return typeof i>"u"?i={autoBom:!1}:"object"!=typeof i&&(console.warn("Deprecated: Expected third argument to be a object"),i={autoBom:!i}),i.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(n.type)?new Blob(["\ufeff",n],{type:n.type}):n}(n,d),i);else if(Z(n))m(n,i,d);else{var a=document.createElement("a");a.href=n,a.target="_blank",setTimeout(function(){f(a)})}}:function(n,i,d,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof n)return m(n,i,d);var s="application/octet-stream"===n.type,w=/constructor/i.test(e.HTMLElement)||e.safari,R=/CriOS\/[\d]+/.test(navigator.userAgent);if((R||s&&w||E)&&typeof FileReader<"u"){var T=new FileReader;T.onloadend=function(){var v=T.result;v=R?v:v.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=v:location=v,a=null},T.readAsDataURL(n)}else{var C=e.URL||e.webkitURL,y=C.createObjectURL(n);a?a.location=y:location.href=y,a=null,setTimeout(function(){C.revokeObjectURL(y)},4e4)}});e.saveAs=g.saveAs=g,x.exports=g}.apply(A,[]))&&(x.exports=h)}}]);