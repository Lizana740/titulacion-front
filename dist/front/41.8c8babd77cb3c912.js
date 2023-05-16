"use strict";(self.webpackChunkdicrea=self.webpackChunkdicrea||[]).push([[41],{1041:($,_,l)=>{l.r(_),l.d(_,{UsuarioModule:()=>P});var m=l(6895),C=l(5782),p=l(3060),o=l(4006),T=l(5226),d=l.n(T),e=l(4650),g=l(9413),q=l(3435);let f=(()=>{class r{constructor(t){this.genericServices=t,this.url="/rol/"}getRoles(){return this.genericServices.getGeneric(this.url,"lista")}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(q.M))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var h=l(3238),c=l(9549),v=l(4385),Z=l(4144);function A(r,a){if(1&r&&(e.TgZ(0,"mat-option",18),e._uU(1),e.qZA()),2&r){const t=a.$implicit;e.Q6J("value",t.id_rol),e.xp6(1),e.Oqu(t.valor)}}let U=(()=>{class r{constructor(t,i,n,s){this.usuarioServices=t,this._formBuilder=i,this.rolService=n,this.router=s,this.toppings=new o.NI}ngOnInit(){this.formulario=this._formBuilder.group({nombre:["",o.kI.required],apellido_paterno:["",o.kI.required],apellido_materno:["",o.kI.required],rut:["",o.kI.required],correo:["",o.kI.required],roles:["",o.kI.required]}),this.getRoles()}getRoles(){this.rolService.getRoles().subscribe(t=>{this.roles=t.data})}add(){this.usuarioServices.addUsuario(this.formulario.value).subscribe(t=>{this.router.navigate(["app/usuario/listar"]),d().fire({icon:"success",title:"Usuario agregado con \xe9xito!!",showConfirmButton:!1,timer:1500})})}cancelar(){this.router.navigate(["app/usuario/listar"])}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(g.J),e.Y36(o.qu),e.Y36(f),e.Y36(p.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-agregar"]],decls:58,vars:3,consts:[[1,"m-3","mt-3"],[1,"card"],[1,"mb-4",3,"formGroup","ngSubmit"],[1,"row"],[1,"col"],["appearance","outline",2,"width","100%"],["matInput","","placeholder","Nombre","formControlName","nombre","required",""],["matInput","","placeholder","Apellido","formControlName","apellido_paterno","required",""],["matInput","","placeholder","Apellido","formControlName","apellido_materno","required",""],["matInput","","placeholder","Rut","formControlName","rut","required",""],["matInput","","placeholder","Correo","formControlName","correo","required",""],[1,"col-md-4"],["placeholder","Roles","formControlName","roles","multiple","",3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],[1,"col-1"],["type","submit",1,"btn","btn-success"],[1,"col-2"],[1,"btn","btn-danger",3,"click"],[3,"value"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"form",2),e.NdJ("ngSubmit",function(){return i.add()}),e._UZ(3,"br"),e.TgZ(4,"div",0)(5,"div",3)(6,"h3")(7,"b"),e._uU(8," Nombre"),e.qZA()(),e.TgZ(9,"div",4)(10,"div",4)(11,"mat-form-field",5)(12,"mat-label"),e._uU(13,"Ingrese nombre"),e.qZA(),e._UZ(14,"input",6),e.qZA()()(),e.TgZ(15,"div",4)(16,"div",4)(17,"mat-form-field",5)(18,"mat-label"),e._uU(19,"Ingrese apellido paterno"),e.qZA(),e._UZ(20,"input",7),e.qZA()()(),e.TgZ(21,"div",4)(22,"div",4)(23,"mat-form-field",5)(24,"mat-label"),e._uU(25,"Ingrese apellido materno"),e.qZA(),e._UZ(26,"input",8),e.qZA()()()(),e.TgZ(27,"div",3)(28,"div",4)(29,"h3"),e._uU(30,"Rut"),e.qZA(),e.TgZ(31,"div",4)(32,"mat-form-field",5)(33,"mat-label"),e._uU(34,"Ingrese su rut"),e.qZA(),e._UZ(35,"input",9),e.qZA()()(),e.TgZ(36,"div",4)(37,"h3"),e._uU(38,"Correo"),e.qZA(),e.TgZ(39,"div",4)(40,"mat-form-field",5)(41,"mat-label"),e._uU(42,"Ingrese correo"),e.qZA(),e._UZ(43,"input",10),e.qZA()()()(),e.TgZ(44,"div",3)(45,"h3"),e._uU(46,"Selecione los roles"),e.qZA(),e.TgZ(47,"div",11)(48,"mat-form-field",5)(49,"mat-select",12),e.NdJ("valueChange",function(s){return i.selectRoles=s}),e.YNc(50,A,2,2,"mat-option",13),e.qZA()()()(),e.TgZ(51,"div",3)(52,"div",14)(53,"button",15),e._uU(54,"Guardar"),e.qZA()(),e.TgZ(55,"div",16)(56,"button",17),e.NdJ("click",function(){return i.cancelar()}),e._uU(57,"Cancelar"),e.qZA()()()()()()()),2&t&&(e.xp6(2),e.Q6J("formGroup",i.formulario),e.xp6(47),e.Q6J("value",i.selectRoles),e.xp6(1),e.Q6J("ngForOf",i.roles))},dependencies:[m.sg,h.ey,c.KE,c.hX,v.gD,Z.Nt,o._Y,o.Fj,o.JJ,o.JL,o.Q7,o.sg,o.u]}),r})();var I=l(3608),N=l(805),b=l(47),x=l(2210),J=l(1740);function F(r,a){if(1&r){const t=e.EpF();e.TgZ(0,"div",8)(1,"div",9)(2,"div",10)(3,"span",11),e._UZ(4,"i",12)(5,"input",13),e.qZA()()(),e.TgZ(6,"div",14)(7,"div",10)(8,"button",15),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.agregar())}),e._UZ(9,"i",16),e._uU(10," Agregar"),e.qZA()()()()}}function R(r,a){if(1&r&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&r){const t=a.$implicit;e.Tol("customer-badge status-"+t.value),e.xp6(1),e.Oqu(t.label)}}function S(r,a){if(1&r){const t=e.EpF();e.TgZ(0,"p-dropdown",23),e.NdJ("onChange",function(n){const u=e.CHM(t).filterCallback;return e.KtG(u(n.value))}),e.YNc(1,R,2,3,"ng-template",24),e.qZA()}if(2&r){const t=a.$implicit,i=e.oxw(2);e.Q6J("ngModel",t)("options",i.statuses)("showClear",!0)}}function y(r,a){1&r&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Nombre"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"Rut"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Correo"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Rol"),e.qZA(),e.TgZ(9,"th",17),e._uU(10,"Acciones"),e.qZA()(),e.TgZ(11,"tr")(12,"th"),e._UZ(13,"p-columnFilter",18),e.qZA(),e.TgZ(14,"th"),e._UZ(15,"p-columnFilter",19),e.qZA(),e.TgZ(16,"th"),e._UZ(17,"p-columnFilter",20),e.qZA(),e.TgZ(18,"th")(19,"p-columnFilter",21),e.YNc(20,S,2,3,"ng-template",22),e.qZA()(),e._UZ(21,"th"),e.qZA()),2&r&&(e.xp6(19),e.Q6J("showMenu",!1))}function Y(r,a){if(1&r&&(e.TgZ(0,"li")(1,"span",27),e._uU(2),e.qZA()()),2&r){const t=a.$implicit;e.xp6(2),e.Oqu(t.valor)}}function w(r,a){if(1&r){const t=e.EpF();e.TgZ(0,"tr")(1,"td",25),e._uU(2),e.qZA(),e.TgZ(3,"td",26)(4,"span",27),e._uU(5),e.qZA()(),e.TgZ(6,"td",26)(7,"span",27),e._uU(8),e.qZA()(),e.TgZ(9,"td",26)(10,"ul"),e.YNc(11,Y,3,1,"li",28),e.qZA()(),e.TgZ(12,"td")(13,"div",8)(14,"div",9)(15,"button",29),e.NdJ("click",function(){const s=e.CHM(t).$implicit,u=e.oxw();return e.KtG(u.editar(s.rut))}),e._UZ(16,"i",30),e.qZA()(),e.TgZ(17,"div",9)(18,"button",31),e.NdJ("click",function(){const s=e.CHM(t).$implicit,u=e.oxw();return e.KtG(u.delete(s.rut))}),e._UZ(19,"i",32),e.qZA()()()()()}if(2&r){const t=a.$implicit;e.xp6(2),e.lnq(" ",t.nombre," ",t.apellido_paterno," ",t.apellido_materno," "),e.xp6(3),e.Oqu(t.rut),e.xp6(3),e.Oqu(t.correo),e.xp6(3),e.Q6J("ngForOf",t.roles)}}function L(r,a){1&r&&(e.TgZ(0,"tr")(1,"td",33),e._uU(2,"No existen usuarios registrados."),e.qZA()())}const M=function(){return{"min-height":"5rem"}},k=function(){return[5,10,25]},E=function(){return["nombre","rut","correo","status"]};function B(r,a){if(1&r&&(e.TgZ(0,"mat-option",18),e._uU(1),e.qZA()),2&r){const t=a.$implicit;e.Q6J("value",t.id_rol),e.xp6(1),e.Oqu(t.valor)}}const Q=[{path:"listar",data:{breadcrumb:{label:"Lista"}},component:(()=>{class r{constructor(t,i,n,s){this.usuarioServices=t,this._formBuilder=i,this.rolService=n,this.router=s,this.entity=[],this.display=!1,this.edit=!1,this.representatives=[],this.statuses=[],this.usuarios=[],this.loading=!0,this.activityValues=[0,100]}ngOnInit(){this.statuses=[{label:"Administrador",value:"unqualified"},{label:"Mantenedor",value:"qualified"},{label:"Planta",value:"new"}],this.getUsuarios(),this.loading=!1}delete(t){d().fire({title:"\xbfEstas seguro de eliminar?",text:"Los cambios seran permanentes",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"Cancelar",confirmButtonText:"Si, eliminar"}).then(i=>{i.isConfirmed&&this.usuarioServices.deleteUsuario(t).subscribe(n=>{this.getUsuarios(),this.loading=!1})})}getUsuarios(){this.usuarioServices.getUsuarios().subscribe(t=>{this.usuarios=t.data})}agregar(){this.router.navigate(["app/usuario/agregar"])}editar(t){this.router.navigate(["app/usuario/editar/"+t])}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(g.J),e.Y36(o.qu),e.Y36(f),e.Y36(p.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-listar"]],decls:8,vars:12,consts:[[1,"m-3","mt-3"],[1,"card"],["dataKey","id","scrollHeight","25%","currentPageReportTemplate","P\xe1gina {first} de {last} de {totalRecords} registros",3,"value","tableStyle","scrollable","rows","showCurrentPageReport","rowsPerPageOptions","loading","paginator","globalFilterFields"],["dt2",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[1,"row"],[1,"col"],[1,"flex"],[1,"p-input-icon-left","ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Buscar"],["ALIGN","right",1,"col","text"],["pTooltip","Nuevo Usuario","tooltipPosition","top",1,"btn","btn-success","ml-auto",3,"click"],[1,"pi","pi-user-plus"],[2,"width","6rem"],["type","text","field","nombre"],["type","text","field","rut"],["type","text","field","correo"],["field","status","matchMode","equals",3,"showMenu"],["pTemplate","filter"],["placeholder","Rol",3,"ngModel","options","showClear","onChange"],["pTemplate","item"],[2,"width","25%"],[2,"width","20%"],[1,"image-text"],[4,"ngFor","ngForOf"],["pTooltip","Editar","tooltipPosition","top",1,"btn","btn-primary","bt",3,"click"],[1,"pi","pi-pencil"],["pTooltip","Eliminar","tooltipPosition","top",1,"btn","btn-danger","bt",3,"click"],[1,"pi","pi-trash"],["colspan","5"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"p-table",2,3),e.YNc(4,F,11,0,"ng-template",4),e.YNc(5,y,22,1,"ng-template",5),e.YNc(6,w,20,6,"ng-template",6),e.YNc(7,L,3,0,"ng-template",7),e.qZA()()()),2&t&&(e.xp6(2),e.Q6J("value",i.usuarios)("tableStyle",e.DdM(9,M))("scrollable",!0)("rows",5)("showCurrentPageReport",!0)("rowsPerPageOptions",e.DdM(10,k))("loading",i.loading)("paginator",!0)("globalFilterFields",e.DdM(11,E)))},dependencies:[m.sg,I.u,N.jx,b.iA,b.xl,x.Lt,J.o,o.JJ,o.On]}),r})()},{path:"agregar",component:U,data:{breadcrumb:{label:"Crear usuario"}}},{path:"editar/:rut",component:(()=>{class r{constructor(t,i,n,s,u){this.activatedRoute=t,this.router=i,this.usuarioServices=n,this._formBuilder=s,this.rolService=u,this.toppings=new o.NI,this.formulario=this._formBuilder.group({nombre:["",o.kI.required],apellido_paterno:["",o.kI.required],apellido_materno:["",o.kI.required],rut:["",o.kI.required],correo:["",o.kI.required],roles:["",o.kI.required]})}ngOnInit(){this.activatedRoute.paramMap.subscribe(t=>{this.rut=t.get("rut"),this.usuarioServices.getUsuario(this.rut).subscribe(i=>{let n=i.data;this.formulario=this._formBuilder.group({nombre:[n.nombre,o.kI.required],apellido_paterno:[n.apellido_paterno,o.kI.required],apellido_materno:[n.apellido_materno,o.kI.required],rut:[n.rut,o.kI.required],correo:[n.correo,o.kI.required],roles:["",o.kI.required]})})}),this.getRoles()}getRoles(){this.rolService.getRoles().subscribe(t=>{this.roles=t.data})}cancelar(){this.router.navigate(["app/usuario/listar"])}add(){let t=parseInt(localStorage.getItem("id_rol"));this.usuarioServices.updateUsuario(t,this.formulario.value).subscribe(i=>{this.router.navigate(["app/usuario/listar"]),d().fire({icon:"success",title:"Los datos del usuarios se actualizaron!!",showConfirmButton:!1,timer:1500})},i=>{d().fire({icon:"error",title:"Oops...",text:"No se ha podido actualizar los datos del usuario!"})})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(p.gz),e.Y36(p.F0),e.Y36(g.J),e.Y36(o.qu),e.Y36(f))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-editar"]],decls:58,vars:3,consts:[[1,"m-3","mt-3"],[1,"card"],[1,"mb-4",3,"formGroup","ngSubmit"],[1,"row"],[1,"col"],["appearance","outline",2,"width","100%"],["matInput","","placeholder","Nombre","formControlName","nombre","required",""],["matInput","","placeholder","Apellido","formControlName","apellido_paterno","required",""],["matInput","","placeholder","Apellido","formControlName","apellido_materno","required",""],["matInput","","placeholder","Rut","formControlName","rut","required",""],["matInput","","placeholder","Correo","formControlName","correo","required",""],[1,"col-md-4"],["placeholder","Roles","formControlName","roles","multiple","",3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],[1,"col-1"],["type","submit",1,"btn","btn-success"],[1,"col-2"],[1,"btn","btn-danger",3,"click"],[3,"value"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"form",2),e.NdJ("ngSubmit",function(){return i.add()}),e._UZ(3,"br"),e.TgZ(4,"div",0)(5,"div",3)(6,"h3")(7,"b"),e._uU(8," Nombre"),e.qZA()(),e.TgZ(9,"div",4)(10,"div",4)(11,"mat-form-field",5)(12,"mat-label"),e._uU(13,"Ingrese nombre"),e.qZA(),e._UZ(14,"input",6),e.qZA()()(),e.TgZ(15,"div",4)(16,"div",4)(17,"mat-form-field",5)(18,"mat-label"),e._uU(19,"Ingrese apellido paterno"),e.qZA(),e._UZ(20,"input",7),e.qZA()()(),e.TgZ(21,"div",4)(22,"div",4)(23,"mat-form-field",5)(24,"mat-label"),e._uU(25,"Ingrese apellido materno"),e.qZA(),e._UZ(26,"input",8),e.qZA()()()(),e.TgZ(27,"div",3)(28,"div",4)(29,"h3"),e._uU(30,"Rut"),e.qZA(),e.TgZ(31,"div",4)(32,"mat-form-field",5)(33,"mat-label"),e._uU(34,"Ingrese su rut"),e.qZA(),e._UZ(35,"input",9),e.qZA()()(),e.TgZ(36,"div",4)(37,"h3"),e._uU(38,"Correo"),e.qZA(),e.TgZ(39,"div",4)(40,"mat-form-field",5)(41,"mat-label"),e._uU(42,"Ingrese correo"),e.qZA(),e._UZ(43,"input",10),e.qZA()()()(),e.TgZ(44,"div",3)(45,"h3"),e._uU(46,"Selecione los roles"),e.qZA(),e.TgZ(47,"div",11)(48,"mat-form-field",5)(49,"mat-select",12),e.NdJ("valueChange",function(s){return i.selectRoles=s}),e.YNc(50,B,2,2,"mat-option",13),e.qZA()()()(),e.TgZ(51,"div",3)(52,"div",14)(53,"button",15),e._uU(54,"Guardar"),e.qZA()(),e.TgZ(55,"div",16)(56,"button",17),e.NdJ("click",function(){return i.cancelar()}),e._uU(57,"Cancelar"),e.qZA()()()()()()()),2&t&&(e.xp6(2),e.Q6J("formGroup",i.formulario),e.xp6(47),e.Q6J("value",i.selectRoles),e.xp6(1),e.Q6J("ngForOf",i.roles))},dependencies:[m.sg,h.ey,c.KE,c.hX,v.gD,Z.Nt,o._Y,o.Fj,o.JJ,o.JL,o.Q7,o.sg,o.u]}),r})(),data:{breadcrumb:{label:"Editar usuario"}}}];let G=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[p.Bz.forChild(Q),p.Bz]}),r})(),P=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[m.ez,G,C.m]}),r})()}}]);