"use strict";(self.webpackChunkechelon=self.webpackChunkechelon||[]).push([[801],{7801:(Te,k,m)=>{m.r(k),m.d(k,{OccupationTodayModule:()=>fe});var O=m(6460),q=m(4706),f=m(9808),d=m(9697),p=m(3075),A=m(2601),Z=m(5173),e=m(5e3);let W=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[f.ez,d.T2N,d.zyh,d.KdK,q.vP,p.u5,p.UX,d.OA,d.kmq,d.nKr,d.IIj,d.oGl,A.r,Z.i,d.COg]]}),r})();var F=m(655),T=m(4987),N=m(1042),J=m(333),I=m(4362);function M(r,t){if(1&r&&(e.TgZ(0,"nb-option",29),e._uU(1),e.qZA()),2&r){const n=t.$implicit;e.Q6J("id",null==n||null==n.value?null:n.value.reference)("value",""===(null==n?null:n.reference)||null==n?null:n.reference),e.xp6(1),e.hij("",null==n?null:n.name," ")}}function U(r,t){1&r&&(e.TgZ(0,"span",30),e._uU(1," This field is required "),e.qZA())}function H(r,t){1&r&&(e.TgZ(0,"span",30),e._uU(1," This field is required "),e.qZA())}function D(r,t){1&r&&(e.TgZ(0,"span",30),e._uU(1," This field is required "),e.qZA())}function E(r,t){1&r&&(e.TgZ(0,"span",30),e._uU(1," This field is required "),e.qZA())}function G(r,t){if(1&r){const n=e.EpF();e.TgZ(0,"tr",1)(1,"td")(2,"nb-select",19),e.NdJ("selectedChange",function(o){const l=e.CHM(n).$implicit,s=e.oxw(2).$implicit;return e.oxw(2).onSelectedWorkstationChange(o,s,l)}),e.YNc(3,M,2,3,"nb-option",20),e.qZA(),e.YNc(4,U,2,0,"span",21),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td")(8,"input",22),e.NdJ("blur",function(){const c=e.CHM(n).$implicit,l=e.oxw(2).$implicit;return e.oxw(2).checkIfFilled(c,l)}),e.qZA(),e.YNc(9,H,2,0,"span",21),e.qZA(),e.TgZ(10,"td")(11,"input",23),e.NdJ("blur",function(){const c=e.CHM(n).$implicit,l=e.oxw(2).$implicit;return e.oxw(2).checkIfFilled(c,l)}),e.qZA(),e.TgZ(12,"nb-timepicker",24,25),e.NdJ("onSelectTime",function(o){const l=e.CHM(n).$implicit;return e.oxw(4).selectTime(o,l,"startTime")}),e.qZA(),e.YNc(14,D,2,0,"span",21),e.qZA(),e.TgZ(15,"td")(16,"input",26),e.NdJ("blur",function(){const c=e.CHM(n).$implicit,l=e.oxw(2).$implicit;return e.oxw(2).checkIfFilled(c,l)}),e.qZA(),e.TgZ(17,"nb-timepicker",24,27),e.NdJ("onSelectTime",function(o){const l=e.CHM(n).$implicit;return e.oxw(4).selectTime(o,l,"endTime")}),e.qZA(),e.YNc(19,E,2,0,"span",21),e.qZA(),e.TgZ(20,"td")(21,"div",28)(22,"nb-icon",10),e.NdJ("click",function(){e.CHM(n);const o=e.oxw(2).$implicit;return e.oxw(2).onAddOccupation(o)}),e.qZA(),e.TgZ(23,"nb-icon",11),e.NdJ("click",function(){const c=e.CHM(n).index,l=e.oxw(2).$implicit;return e.oxw(2).onRemoveOccupation(l,c)}),e.qZA()()()()}if(2&r){const n=t.$implicit,i=e.MAs(13),o=e.MAs(18),c=e.oxw(2).$implicit,l=e.oxw(2);let s,a,u,_,g;e.Q6J("formGroup",l.castToFormGroup(n)),e.xp6(2),e.Q6J("appEditable",!(null!=n&&null!=n.value&&n.value.name)),e.xp6(1),e.Q6J("ngForOf",l.getWorkstationsList(c)),e.xp6(1),e.Q6J("ngIf",(null==(s=n.get("reference"))?null:s.touched)&&(null==(s=n.get("reference"))?null:s.getError("required"))),e.xp6(2),e.Oqu(null==(a=n.get("activity"))?null:a.value),e.xp6(3),e.Q6J("ngIf",(null==(u=n.get("occupation"))?null:u.touched)&&(null==(u=n.get("occupation"))?null:u.getError("required"))),e.xp6(2),e.Q6J("nbTimepicker",i),e.xp6(1),e.Q6J("step",15),e.xp6(2),e.Q6J("ngIf",(null==(_=n.get("startTime"))?null:_.touched)&&(null==(_=n.get("startTime"))?null:_.getError("required"))),e.xp6(2),e.Q6J("nbTimepicker",o),e.xp6(1),e.Q6J("step",15),e.xp6(2),e.Q6J("ngIf",(null==(g=n.get("endTime"))?null:g.touched)&&(null==(g=n.get("endTime"))?null:g.getError("required")))}}function Q(r,t){if(1&r&&(e.ynx(0),e.YNc(1,G,24,12,"tr",18),e.BQk()),2&r){const n=e.oxw().$implicit,i=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",i.getArrayFromGroup(n,"occupation").controls)}}function S(r,t){if(1&r){const n=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"div",28)(3,"nb-icon",10),e.NdJ("click",function(){e.CHM(n);const o=e.oxw().$implicit;return e.oxw(2).onAddOccupation(o)}),e.qZA()()()()}}function $(r,t){if(1&r&&(e.TgZ(0,"nb-option",29),e._uU(1),e.qZA()),2&r){const n=t.$implicit;e.Q6J("id",null==n||null==n.value?null:n.value.reference)("value",""===(null==n?null:n.reference)||null==n?null:n.reference),e.xp6(1),e.hij("",null==n?null:n.name," ")}}function R(r,t){1&r&&(e.TgZ(0,"span",30),e._uU(1," This field is required "),e.qZA())}function V(r,t){1&r&&(e.TgZ(0,"span",30),e._uU(1," This field is required "),e.qZA())}function Y(r,t){1&r&&(e.TgZ(0,"span",30),e._uU(1," This field is required "),e.qZA())}function P(r,t){1&r&&(e.TgZ(0,"span",30),e._uU(1," This field is required "),e.qZA())}function j(r,t){if(1&r){const n=e.EpF();e.TgZ(0,"tr",1)(1,"td")(2,"nb-select",19),e.NdJ("selectedChange",function(o){const l=e.CHM(n).$implicit,s=e.oxw(2).$implicit;return e.oxw(2).onSelectedWorkstationChange(o,s,l)}),e.YNc(3,$,2,3,"nb-option",20),e.qZA(),e.YNc(4,R,2,0,"span",21),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._UZ(8,"input",31),e.YNc(9,V,2,0,"span",21),e.qZA(),e.TgZ(10,"td"),e._UZ(11,"input",32),e.TgZ(12,"nb-timepicker",24,25),e.NdJ("onSelectTime",function(o){const l=e.CHM(n).$implicit;return e.oxw(4).selectTime(o,l,"startTime")}),e.qZA(),e.YNc(14,Y,2,0,"span",21),e.qZA(),e.TgZ(15,"td"),e._UZ(16,"input",33),e.TgZ(17,"nb-timepicker",24,27),e.NdJ("onSelectTime",function(o){const l=e.CHM(n).$implicit;return e.oxw(4).selectTime(o,l,"endTime")}),e.qZA(),e.YNc(19,P,2,0,"span",21),e.qZA(),e.TgZ(20,"td")(21,"div",28)(22,"nb-icon",10),e.NdJ("click",function(){e.CHM(n);const o=e.oxw(2).$implicit;return e.oxw(2).onAddRatio(o)}),e.qZA(),e.TgZ(23,"nb-icon",11),e.NdJ("click",function(){const c=e.CHM(n).index,l=e.oxw(2).$implicit;return e.oxw(2).onRemoveRatio(l,c)}),e.qZA()()()()}if(2&r){const n=t.$implicit,i=e.MAs(13),o=e.MAs(18),c=e.oxw(2).$implicit,l=e.oxw(2);let s,a,u,_,g;e.Q6J("formGroup",l.castToFormGroup(n)),e.xp6(2),e.Q6J("appEditable",!(null!=n&&null!=n.value&&n.value.name)),e.xp6(1),e.Q6J("ngForOf",l.getWorkstationsList(c)),e.xp6(1),e.Q6J("ngIf",(null==(s=n.get("reference"))?null:s.touched)&&(null==(s=n.get("reference"))?null:s.getError("required"))),e.xp6(2),e.Oqu(null==(a=n.get("activity"))?null:a.value),e.xp6(3),e.Q6J("ngIf",(null==(u=n.get("ratio"))?null:u.touched)&&(null==(u=n.get("ratio"))?null:u.getError("required"))),e.xp6(2),e.Q6J("nbTimepicker",i),e.xp6(1),e.Q6J("step",15),e.xp6(2),e.Q6J("ngIf",(null==(_=n.get("startTime"))?null:_.touched)&&(null==(_=n.get("startTime"))?null:_.getError("required"))),e.xp6(2),e.Q6J("nbTimepicker",o),e.xp6(1),e.Q6J("step",15),e.xp6(2),e.Q6J("ngIf",(null==(g=n.get("endTime"))?null:g.touched)&&(null==(g=n.get("endTime"))?null:g.getError("required")))}}function B(r,t){if(1&r&&(e.ynx(0),e.YNc(1,j,24,12,"tr",18),e.BQk()),2&r){const n=e.oxw().$implicit,i=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",i.getArrayFromGroup(n,"ratio").controls)}}function z(r,t){if(1&r){const n=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"div",28)(3,"nb-icon",10),e.NdJ("click",function(){e.CHM(n);const o=e.oxw().$implicit;return e.oxw(2).onAddOccupation(o)}),e.qZA()()()()}}function L(r,t){if(1&r){const n=e.EpF();e.TgZ(0,"nb-accordion-item",4)(1,"nb-accordion-item-header")(2,"div",5)(3,"div",6)(4,"div")(5,"span",7),e._uU(6,"Workcenter"),e.qZA(),e.TgZ(7,"span",8),e._uU(8),e.qZA()()()()(),e.TgZ(9,"nb-accordion-item-body")(10,"div",9)(11,"nb-icon",10),e.NdJ("click",function(){return e.CHM(n),e.oxw(2).onOpenWorkcenterAddDialog("add","")}),e.qZA(),e.TgZ(12,"nb-icon",11),e.NdJ("click",function(){const c=e.CHM(n).$implicit;return e.oxw(2).onOpenWorkcenterAddDialog("remove",c.value.uuid)}),e.qZA()(),e.TgZ(13,"div",12)(14,"table",13)(15,"thead")(16,"tr")(17,"th"),e._uU(18,"Workstation"),e.qZA(),e.TgZ(19,"th"),e._uU(20,"Activity"),e.qZA(),e.TgZ(21,"th"),e._uU(22,"Occupation"),e.qZA(),e.TgZ(23,"th"),e._uU(24,"Start"),e.qZA(),e.TgZ(25,"th"),e._uU(26,"End"),e.qZA(),e.TgZ(27,"th"),e._UZ(28,"br"),e.qZA()()(),e.TgZ(29,"tbody"),e.YNc(30,Q,2,1,"ng-container",14),e.YNc(31,S,4,0,"ng-template",null,15,e.W1O),e.qZA()(),e.TgZ(33,"table",16)(34,"thead")(35,"tr")(36,"th"),e._uU(37,"Workstation"),e.qZA(),e.TgZ(38,"th"),e._uU(39,"Activity"),e.qZA(),e.TgZ(40,"th"),e._uU(41,"Ratio"),e.qZA(),e.TgZ(42,"th"),e._uU(43,"Start"),e.qZA(),e.TgZ(44,"th"),e._uU(45,"End"),e.qZA(),e.TgZ(46,"th"),e._UZ(47,"br"),e.qZA()()(),e.TgZ(48,"tbody"),e.YNc(49,B,2,1,"ng-container",14),e.YNc(50,z,4,0,"ng-template",null,17,e.W1O),e.qZA()()()()()}if(2&r){const n=t.$implicit,i=e.MAs(32),o=e.MAs(51),c=e.oxw(2);e.Q6J("formGroup",c.castToFormGroup(n)),e.xp6(8),e.Oqu(n.value.name),e.xp6(22),e.Q6J("ngIf",c.getArrayFromGroup(n,"occupation").controls.length>0)("ngIfElse",i),e.xp6(19),e.Q6J("ngIf",c.getArrayFromGroup(n,"ratio").controls.length>0)("ngIfElse",o)}}function K(r,t){if(1&r&&(e.ynx(0,1),e.TgZ(1,"nb-accordion",2),e.YNc(2,L,52,6,"nb-accordion-item",3),e.qZA(),e.BQk()),2&r){const n=e.oxw();e.Q6J("formGroup",n.form),e.xp6(2),e.Q6J("ngForOf",n.workcentersControl.controls)}}let h=class{constructor(t,n,i,o){this.fb=t,this.cdr=n,this.occupationApi=i,this.toastrService=o,this.editable=!0,this.workcentersFilter=[],this.workstationsFilter=[],this._workcenters=[],this.searchText="",this.openWorkcenterAddDialog=new e.vpe,this.formValuesChange=new e.vpe,this.isFormValid=new e.vpe}set workcenters(t){!(null==t?void 0:t.length)||t===this._workcenters||(this._workcenters=t,this.createworkCentersForm(),this.watchFormChanges())}get workcenters(){return this._workcenters}ngOnChanges(t){var n,i,o,c;this.workcentersFilter=null===(i=null===(n=null==t?void 0:t.selectedFilters)||void 0===n?void 0:n.currentValue)||void 0===i?void 0:i.workcenters,this.workstationsFilter=null===(c=null===(o=null==t?void 0:t.selectedFilters)||void 0===o?void 0:o.currentValue)||void 0===c?void 0:c.workstations}watchFormChanges(){this.form.valueChanges.pipe((0,T.t)(this)).subscribe(t=>{this.formValuesChange.emit(t),this.isFormValid.emit(this.form.valid)})}onOpenWorkcenterAddDialog(t,n){this.openWorkcenterAddDialog.emit({action:t,uuid:n})}onSelectedWorkstationChange(t,n,i){var o,c,l;const s=null===(o=null==n?void 0:n.value)||void 0===o?void 0:o.uuid,u=null===(l=(null===(c=this.workcenters.find(_=>_.uuid===s))||void 0===c?void 0:c.workstations).find(_=>_.uuid===t))||void 0===l?void 0:l.activity.displayValue;i.get("activity").setValue(u)}get workcentersControl(){var t;return null===(t=this.form)||void 0===t?void 0:t.get("workcentersPlan")}addWorkcenter(){this.workcentersControl.push(this.createWorkCenterGroup())}removeWorkcenter(t){this.workcentersControl.removeAt(t)}getWorkstations(t){return this.workcentersControl.at(t).get("workstations")}addWorkstation(t){this.getWorkstations(t).push(this.createOccupationGroup())}removeWorkstation(t){this.getWorkstations(t).removeAt(t)}onAddOccupation(t){this.getArrayFromGroup(t,"occupation").push(this.createOccupationGroup())}onAddRatio(t){this.getArrayFromGroup(t,"ratio").push(this.createRatioGroup())}onRemoveOccupation(t,n){this.getArrayFromGroup(t,"occupation").removeAt(n)}onRemoveRatio(t,n){this.getArrayFromGroup(t,"ratio").removeAt(n)}checkIfFilled(t,n){const i=t.get("endTime"),o=t.get("startTime"),c=t.get("occupation");setTimeout(()=>{var l,s,a,u;if(i.value&&o.value&&c.value){const _={workCenter:{reference:n.value.uuid,displayValue:n.value.name},workStation:{reference:t.value.uuid,displayValue:t.value.name,code:t.value.code},occupation:c.value,startTime:null!==(s=Number(`${null===(l=o.value)||void 0===l?void 0:l.getHours()}${(o.value.getMinutes()<10?"0":"")+o.value.getMinutes()}`))&&void 0!==s?s:0,endTime:null!==(u=Number(`${null===(a=i.value)||void 0===a?void 0:a.getHours()}${(i.value.getMinutes()<10?"0":"")+i.value.getMinutes()}`))&&void 0!==u?u:0};this.occupationApi.dataOccupationUpdateUuidPut((0,N.Z)(),_).subscribe(g=>{this.toastrService.success("success","Saved successfully")},g=>{this.toastrService.danger("danger","Something went wrong")})}},1e3)}getWorkstationsList(t){var n;const i=null===(n=null==t?void 0:t.value)||void 0===n?void 0:n.uuid;return this.workcenters.find(c=>c.uuid===i).workstations}checkIfHasWorkstations(t){var n;return(null===(n=this.workcenters.find(t.value.uuid).workstations)||void 0===n?void 0:n.length)>0}getFilteredArrayGroup(t,n,i){return this.getArrayFromGroup(t,n).controls.filter(l=>""!==l.value.name).filter((l,s,a)=>a.findIndex(u=>u.value.reference===l.value.reference)===s)}createworkCentersForm(){this.form=this.fb.group({workcentersPlan:this.fb.array([...this.workcenters].map(t=>{var n,i;return this.createWorkCenterGroup(null!==(n=t.name)&&void 0!==n?n:t.displayValue,null!==(i=t.uuid)&&void 0!==i?i:t.reference,t.workstations,t.occupation,t.ratio)}))})}createWorkCenterGroup(t="",n="",i=[],o,c){return this.fb.group(o&&c?{name:t,occupation:this.fb.array(o.map(l=>this.createOccupationGroup(l))),ratio:this.fb.array(c.map(l=>this.createRatioGroup(l))),uuid:n,reference:n}:{name:t,occupation:this.fb.array(i.map(l=>this.createOccupationGroup(l))),ratio:this.fb.array(i.map(l=>this.createRatioGroup(l))),uuid:n,reference:n})}createOccupationGroup(t){var n,i,o,c,l,s,a,u;return this.fb.group({name:[null!==(n=null==t?void 0:t.name)&&void 0!==n?n:"",p.kI.required],activity:null!==(o=null===(i=null==t?void 0:t.activity)||void 0===i?void 0:i.displayValue)&&void 0!==o?o:"",occupation:[null!==(c=null==t?void 0:t.occupation)&&void 0!==c?c:"",p.kI.required],startTime:["",p.kI.required],endTime:["",p.kI.required],reference:[null!==(l=null==t?void 0:t.reference)&&void 0!==l?l:"",p.kI.required],displayValue:null!==(s=null==t?void 0:t.displayValue)&&void 0!==s?s:"",uuid:null!==(a=null==t?void 0:t.uuid)&&void 0!==a?a:"",code:null!==(u=null==t?void 0:t.code)&&void 0!==u?u:""})}createRatioGroup(t){var n,i,o,c,l,s,a,u,_;return this.fb.group({name:[null!==(n=null==t?void 0:t.name)&&void 0!==n?n:"",p.kI.required],activity:null!==(o=null===(i=null==t?void 0:t.activity)||void 0===i?void 0:i.displayValue)&&void 0!==o?o:"",ratio:[null!==(c=null==t?void 0:t.ratio)&&void 0!==c?c:"",p.kI.required],unitOfRatio:null!==(l=null==t?void 0:t.unitOfRatio)&&void 0!==l?l:"none",startTime:["",p.kI.required],endTime:["",p.kI.required],reference:[null!==(s=null==t?void 0:t.reference)&&void 0!==s?s:"",p.kI.required],displayValue:null!==(a=null==t?void 0:t.displayValue)&&void 0!==a?a:"",uuid:null!==(u=null==t?void 0:t.uuid)&&void 0!==u?u:"",code:null!==(_=null==t?void 0:t.code)&&void 0!==_?_:""})}transformDate(t){if(!t)return null;let n=t.toString();3===n.length&&(n="0"+n),2===n.length&&(n="00"+n);const i=n.substring(0,2)+":"+n.substring(2,n.length),o=new Date("2011-04-20 "+i);return"Invalid Date"!==new Date(o).toString()?o:""}castToFormGroup(t){return t}castToFormArray(t){return t}getArrayFromGroup(t,n,i){return t.get(n)}selectTime(t,n,i){!(null==t?void 0:t.time)||(n.patchValue({key:null==t?void 0:t.time}),this.timepickers.toArray().forEach(o=>o.hide()))}};h.\u0275fac=function(t){return new(t||h)(e.Y36(p.qu),e.Y36(e.sBO),e.Y36(J.Pb),e.Y36(d.quB))},h.\u0275cmp=e.Xpm({type:h,selectors:[["app-today-table"]],viewQuery:function(t,n){if(1&t&&e.Gf(d.etF,5),2&t){let i;e.iGM(i=e.CRH())&&(n.timepickers=i)}},inputs:{workcenters:"workcenters",selectedFilters:"selectedFilters",searchText:"searchText"},outputs:{openWorkcenterAddDialog:"openWorkcenterAddDialog",formValuesChange:"formValuesChange",isFormValid:"isFormValid"},features:[e.TTD],decls:1,vars:1,consts:[[3,"formGroup",4,"ngIf"],[3,"formGroup"],["multi","","formArrayName","workcentersPlan"],["expanded","true",3,"formGroup",4,"ngFor","ngForOf"],["expanded","true",3,"formGroup"],[1,"accordion-header"],[1,"d-flex","justify-content-between"],[1,"accordion-title"],[1,"accordion-subtitle"],[1,"buttons-wrapper","workcenter-buttons","mb-3"],["type","button","icon","add_circle",1,"mr-1",3,"click"],["type","button","icon","cancel",1,"mr-1",3,"click"],[1,"tables-wrapper"],["formArrayName","occupation"],[4,"ngIf","ngIfElse"],["addButton",""],["formArrayName","ratio"],["addRatioButton",""],[3,"formGroup",4,"ngFor","ngForOf"],["status","primary","placeholder","Name","formControlName","reference",1,"select",3,"appEditable","selectedChange"],[3,"id","value",4,"ngFor","ngForOf"],["class","text-danger",4,"ngIf"],["nbInput","","type","number","fullWidth","","status","primary","placeholder","occupation","formControlName","occupation",3,"blur"],["nbInput","","status","primary","primary","","fullWidth","","formControlName","startTime",3,"nbTimepicker","blur"],["singleColumn","","format","h:mm:ss a",3,"step","onSelectTime"],["timeFrom",""],["nbInput","","status","primary","primary","","fullWidth","","formControlName","endTime",3,"nbTimepicker","blur"],["timeTo",""],[1,"buttons-wrapper"],[3,"id","value"],[1,"text-danger"],["type","number","nbInput","","fullWidth","","status","primary","placeholder","Ratio","formControlName","ratio"],["nbInput","","status","primary","primary","","fullWidth","","formControlName","startTime",3,"nbTimepicker"],["nbInput","","status","primary","primary","","fullWidth","","formControlName","endTime",3,"nbTimepicker"]],template:function(t,n){1&t&&e.YNc(0,K,3,2,"ng-container",0),2&t&&e.Q6J("ngIf",n.form)},directives:[f.O5,p.JL,p.sg,d.qCO,p.CE,f.sg,d.SaG,d.YZd,d.AvE,d.fMN,d.rs,p.JJ,p.u,I.m,d.q51,d.h8i,p.wV,p.Fj,d.etF,d.emG],styles:[".workcenter-buttons[_ngcontent-%COMP%]{position:absolute;right:0;top:0}"]}),h=(0,F.gn)([(0,T.c)()],h);var w=m(6798),X=m(567);function ee(r,t){if(1&r&&(e.TgZ(0,"nb-option",16),e._uU(1),e.qZA()),2&r){const n=t.$implicit;e.s9C("value",n.uuid),e.xp6(1),e.Oqu(n.name)}}function te(r,t){if(1&r){const n=e.EpF();e.TgZ(0,"div",10)(1,"div",11)(2,"label",12),e._uU(3,"Workcenter"),e.qZA()(),e.TgZ(4,"div",13)(5,"nb-select",14),e.NdJ("selectedChange",function(o){return e.CHM(n),e.oxw(2).onSelectWorkcenter(o)}),e.YNc(6,ee,2,2,"nb-option",15),e.qZA()()()}if(2&r){const n=e.oxw(2);e.xp6(6),e.Q6J("ngForOf",n.workcenters)}}function ne(r,t){1&r&&(e.TgZ(0,"div",10)(1,"div",7)(2,"p"),e._uU(3,"You have added all workcenters to the plan already."),e.qZA()()())}function oe(r,t){if(1&r&&(e.TgZ(0,"div",6)(1,"div",7),e.YNc(2,te,7,1,"div",8),e.YNc(3,ne,4,0,"ng-template",null,9,e.W1O),e.qZA()()),2&r){const n=e.MAs(4),i=e.oxw();e.xp6(2),e.Q6J("ngIf",i.workcenters.length>0)("ngIfElse",n)}}function ie(r,t){1&r&&(e.TgZ(0,"div",6)(1,"div",7)(2,"p"),e._uU(3,"Are you sure you want to remove this workcenter?"),e.qZA()()())}function re(r,t){if(1&r){const n=e.EpF();e.TgZ(0,"button",17),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return"add"===o.action?o.onSave():o.onRemove()}),e._uU(1),e.qZA()}if(2&r){const n=e.oxw();e.xp6(1),e.hij(" ","add"===n.action?"Save":"Confirm"," ")}}let ce=(()=>{class r{constructor(n){this.dialog=n,this.newWorkcenterUuid="",this.workcenters=[],this.action="",this.workcenterToRemoveUuid="",this.addWorkcenter=new e.vpe,this.removeWorkcenter=new e.vpe}onCloseDialog(){this.dialog.close()}onSelectWorkcenter(n){this.newWorkcenterUuid=n}onSave(){this.addWorkcenter.emit(this.newWorkcenterUuid)}onRemove(){this.removeWorkcenter.emit(!0)}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(d.X4l))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-today-add-workcenter-dialog"]],outputs:{addWorkcenter:"addWorkcenter",removeWorkcenter:"removeWorkcenter"},decls:14,vars:6,consts:[["icon","close",1,"close-dialog",3,"click"],["class","row mb-1",4,"ngIf","ngIfElse"],["confirmText",""],[1,"buttons","d-flex","justify-content-center","mt-5"],["nbButton","","outline","","size","medium","type","button",1,"mr-3",3,"click"],["nbButton","","status","primary","size","medium",3,"click",4,"ngIf"],[1,"row","mb-1"],[1,"col-12"],["class","row",4,"ngIf","ngIfElse"],["noWorkcentersInfo",""],[1,"row"],[1,"col-sm-3","d-flex","align-items-center"],["for","workcenter"],[1,"col-sm-9"],["fullWidth","","status","primary","placeholder","Select workcenter...",1,"select",3,"selectedChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["nbButton","","status","primary","size","medium",3,"click"]],template:function(n,i){if(1&n&&(e.TgZ(0,"nb-card")(1,"nb-card-header")(2,"h2"),e._uU(3),e.ALo(4,"titlecase"),e.qZA(),e.TgZ(5,"nb-icon",0),e.NdJ("click",function(){return i.onCloseDialog()}),e.qZA()(),e.TgZ(6,"nb-card-body"),e.YNc(7,oe,5,2,"div",1),e.YNc(8,ie,4,0,"ng-template",null,2,e.W1O),e.TgZ(10,"div",3)(11,"button",4),e.NdJ("click",function(){return i.onCloseDialog()}),e._uU(12,"Cancel"),e.qZA(),e.YNc(13,re,2,1,"button",5),e.qZA()()()),2&n){const o=e.MAs(9);e.xp6(3),e.hij("",e.lcZ(4,4,i.action)," workcenter"),e.xp6(4),e.Q6J("ngIf","add"===i.action)("ngIfElse",o),e.xp6(6),e.Q6J("ngIf",0!==i.workcenters.length||"remove"===i.action)}},directives:[d.Asz,d.ndF,d.fMN,d.yKW,f.O5,d.rs,f.sg,d.q51,d.DPz],pipes:[f.rS],styles:["nb-card[_ngcontent-%COMP%]{min-width:500px}"]}),r})();var x=m(1969),le=m(890);const ae=function(r){return{active:r}};function se(r,t){if(1&r){const n=e.EpF();e.TgZ(0,"div",6),e.NdJ("click",function(){const c=e.CHM(n).$implicit;return e.oxw().onChooseHour(c)}),e._uU(1),e.qZA()}if(2&r){const n=t.$implicit,i=e.oxw();e.Q6J("ngClass",e.VKq(2,ae,i.choosenHours.includes(n))),e.xp6(1),e.hij(" ",n," ")}}let de=(()=>{class r{constructor(){this.choosenHours=[],this.hours=["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],this.selectFilters=new e.vpe,this.selectAll=!1}onChooseHour(n){if(this.choosenHours.includes(n)){const c=this.hours.findIndex(a=>a===n),l=c<this.choosenHours.length/2,s=c>this.choosenHours.length/2;this.hours.forEach((a,u)=>{(l&&u<c||s&&u>c)&&(this.choosenHours=this.choosenHours.filter(_=>_!==a))})}else{const c=[...this.choosenHours];if(this.choosenHours.length>0){const l=this.hours.findIndex(a=>a===this.choosenHours[0]),s=this.hours.findIndex(a=>a===n);this.hours.forEach((a,u)=>{(u>=l&&u<=s||u<=l&&u>=s)&&(c.includes(a)||c.push(a))})}else c.push(n);this.choosenHours=c}const i=this.choosenHours.sort()[0],o=this.choosenHours.sort()[this.choosenHours.length-1];this.selectFilters.emit([i,o])}ngOnChanges(n){var i;if(null===(i=n.selectAll)||void 0===i?void 0:i.firstChange)return;this.choosenHours=this.hours;const o=this.hours.sort()[0],c=this.hours.sort()[this.choosenHours.length-1];this.selectFilters.emit([o,c])}moveList(n){const i=document.querySelector(".single-item").offsetWidth,o=document.querySelector(".list-inner-container");o.scroll({top:0,left:"left"===n?o.scrollLeft-i+20:o.scrollLeft+i+20,behavior:"smooth"})}}return r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-today-filters"]],inputs:{selectAll:"selectAll"},outputs:{selectFilters:"selectFilters"},features:[e.TTD],decls:7,vars:1,consts:[[1,"w-100","d-flex"],[1,"pagination-button","btn",3,"click"],[1,"iconEcheclon","icon-arrow","icon-arrow-left","w-100"],[1,"list-inner-container"],["class","single-item",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"iconEcheclon","icon-arrow","icon-arrow-right","w-100"],[1,"single-item",3,"ngClass","click"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return i.moveList("left")}),e._UZ(2,"i",2),e.qZA(),e.TgZ(3,"div",3),e.YNc(4,se,2,4,"div",4),e.qZA(),e.TgZ(5,"button",1),e.NdJ("click",function(){return i.moveList("right")}),e._UZ(6,"i",5),e.qZA()()),2&n&&(e.xp6(4),e.Q6J("ngForOf",i.hours))},directives:[f.sg,f.mk],styles:[".list-inner-container[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;overflow-x:scroll;-ms-overflow-style:none;scrollbar-width:none}.list-inner-container[_ngcontent-%COMP%]   .single-item[_ngcontent-%COMP%]{padding:10px 15px;display:flex;justify-content:center;align-items:center;cursor:pointer;font-size:16px}.list-inner-container[_ngcontent-%COMP%]   .single-item.active[_ngcontent-%COMP%]{background-color:#1c2431}.list-inner-container[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.pagination-button[_ngcontent-%COMP%]   .icon-arrow[_ngcontent-%COMP%]{font-size:15px}"],changeDetection:0}),r})();function ue(r,t){if(1&r){const n=e.EpF();e.TgZ(0,"app-today-table",12),e.NdJ("openWorkcenterAddDialog",function(o){return e.CHM(n),e.oxw().onOpenWorkcenterAddDialog(o)})("formValuesChange",function(o){return e.CHM(n),e.oxw().onFormChanges(o)})("isFormValid",function(o){return e.CHM(n),e.oxw().setIsFormValid(o)}),e.qZA()}if(2&r){const n=e.oxw();e.Q6J("workcenters",n.filteredData)("searchText",n.searchText)("selectedFilters",n.selectedFilters)}}let v=class{constructor(t,n,i,o,c,l){this.workCenterApi=t,this.workStationApi=n,this.activityApi=i,this.siteOccupationApi=o,this.dialogService=c,this.cdr=l,this.editable=!1,this.searchText="",this.workcentersPlans=[],this.dataTree=[],this.plan=[],this.planName="",this.workcentersToAdd=[],this.filteredData=[],this.isFormValid=!1,this.planReference="",this.allHoursSelected=!1}ngOnInit(){this.fetchPlanData()}fetchPlanData(){(0,X.D)(this.workCenterApi.dataWorkCenterListGet(),this.workStationApi.dataWorkstationListGet(),this.activityApi.dataActivityListGet(),this.siteOccupationApi.dataSiteOccupationCurrentSiteOccupationGet()).pipe((0,T.t)(this)).subscribe({next:([t,n,i,o])=>{var c,l,s,a;this.workCenters=t,this.workStations=n,this.activities=i,this.editedPlanData=o.content,this.planName=null===(c=o.content)||void 0===c?void 0:c.planName,this.planReference=null===(l=o.content)||void 0===l?void 0:l.planReference,this.workcentersPlans=null!==(a=null===(s=o.content)||void 0===s?void 0:s.workCenterPlans)&&void 0!==a?a:[],this.buildDataTree()}})}setIsFormValid(t){this.isFormValid=t}onFormChanges(t){this.plan=t.workcentersPlan}pad(t){return t<10?"0"+t:t}selectFiltersHandler(t){let n=[...this.dataTree];n=n.map(i=>Object.assign(Object.assign({},i),{occupation:i.occupation.filter(o=>this.formatToFourDigit(o.startTime)>=t[0]),ratio:i.ratio.filter(o=>this.formatToFourDigit(o.startTime)>=t[0])})),this.filteredData=[...n],this.cdr.markForCheck()}setAllHoursSelected(){this.allHoursSelected=!this.allHoursSelected}buildDataTree(){this.dataTree=[...this.workcentersPlans].map(t=>{var n,i,o;let c="";t.name=t.displayValue,null===(n=t.occupation)||void 0===n||n.forEach((a,u)=>{var _,g;c||(c=a.workcenterUuid);const b=a.workstationUuid;a.occupationRef=a.reference,a.reference=b,a.startTime=null!==(_=a.startTime)&&void 0!==_?_:"0600",a.endTime=null!==(g=a.endTime)&&void 0!==g?g:"1400";const y=this.workStations.items.find(C=>C.uuid===b);t.occupation[u]=Object.assign(Object.assign({},t.occupation[u]),y)}),null===(i=t.ratio)||void 0===i||i.forEach((a,u)=>{var _,g;c||(c=a.workcenterUuid);const b=a.workstationUuid;a.ratioRef=a.reference,a.name=a.displayValue,a.reference=b,a.startTime=null!==(_=a.startTime)&&void 0!==_?_:"0600",a.endTime=null!==(g=a.endTime)&&void 0!==g?g:"1400";const y=this.workStations.items.find(C=>C.uuid===b);t.ratio[u]=Object.assign(Object.assign({},t.ratio[u]),y)});const l=c;t.uuid=l;const s=this.workCenters.items.find(a=>a.uuid===l);return t.workstations=null==s?void 0:s.workstations,null===(o=t.workstations)||void 0===o||o.forEach((a,u)=>{const _=a.reference;a.name=a.displayValue;const g=this.workStations.items.find(b=>b.uuid===_);t.workstations[u]=Object.assign(Object.assign({},t.workstations[u]),g)}),t}),this.filteredData=[...this.dataTree],this.cdr.markForCheck()}formatPlanData(t){return t.map(i=>(i.occupation.forEach(o=>{o.startTime=this.formatTime(o.startTime),o.endTime=this.formatTime(o.endTime),o.workstationUuid=o.uuid}),i.ratio.forEach(o=>{o.startTime=this.formatTime(o.startTime),o.endTime=this.formatTime(o.endTime),o.workstationUuid=o.uuid}),i))}formatTime(t){const n=new Date(t);return n?`${`0${n.getHours()}`.slice(-2)}${`0${n.getMinutes()}`.slice(-2)}`:""}formatDate(t){return`${t.getFullYear()}${this.pad(t.getMonth()+1)}${this.pad(t.getDate())}`}formatToFourDigit(t){return t&&(3===t.toString().length?`0${t}`:2===t.toString().length?`00${t}`:t)}savePlan(){const t={planReference:this.planReference,planName:this.planName,isTemplate:!1,workCenterPlans:this.formatPlanData([...this.plan])};this.siteOccupationApi.dataSiteOccupationSavePlanPost(t).pipe((0,T.t)(this)).subscribe({next:n=>{console.log(n)}})}onOpenWorkcenterAddDialog(t){const n=this.dialogService.open(ce);n.componentRef.instance.workcenters=this.workcentersToAdd,n.componentRef.instance.action=t.action,n.componentRef.instance.addWorkcenter.pipe((0,T.t)(this)).subscribe(i=>{if(n.close(),i){const o=this.workCenters.items.find(l=>l.uuid===i),c=[...this.dataTree,o];this.dataTree=c,this.filteredData=this.dataTree,this.cdr.markForCheck()}}),n.componentRef.instance.removeWorkcenter.pipe((0,T.t)(this)).subscribe(i=>{if(n.close(),"remove"===(null==t?void 0:t.action)&&(null==t?void 0:t.uuid)){const o=this.workCenters.items.find(l=>l.uuid===(null==t?void 0:t.uuid));this.workcentersToAdd=[...this.workcentersToAdd,o];const c=this.dataTree.filter(l=>l.uuid!==(null==t?void 0:t.uuid));this.dataTree=c,this.filteredData=this.dataTree,this.cdr.markForCheck()}})}};v.\u0275fac=function(t){return new(t||v)(e.Y36(x.Uv),e.Y36(x.F),e.Y36(x.B0),e.Y36(le.j),e.Y36(d.Gln),e.Y36(e.sBO))},v.\u0275cmp=e.Xpm({type:v,selectors:[["app-today-edit"]],decls:15,vars:3,consts:[[1,"plan-header","mt-3"],[1,"row","mb-3"],[1,"col-12","col-sm-12","col-md-7"],[1,"mt-0"],[1,"col-12","col-sm-12","col-md-5","d-flex","flex-column","justify-content-between"],[1,"buttons","mt-3","d-flex","justify-content-end"],["nbButton","","status","primary","size","medium",1,"icon-button",3,"disabled","click"],["icon","check_circle"],[1,"icon-button-text"],["nbButton","","status","primary","size","medium",1,"ml-1",3,"click"],[1,"w-100",3,"selectAll","selectFilters"],[3,"workcenters","searchText","selectedFilters","openWorkcenterAddDialog","formValuesChange","isFormValid",4,"ngIf"],[3,"workcenters","searchText","selectedFilters","openWorkcenterAddDialog","formValuesChange","isFormValid"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),e._uU(4,"Today"),e.qZA()(),e.TgZ(5,"div",4)(6,"div",5)(7,"button",6),e.NdJ("click",function(){return n.savePlan()}),e._UZ(8,"nb-icon",7),e.TgZ(9,"span",8),e._uU(10,"Save all"),e.qZA()(),e.TgZ(11,"button",9),e.NdJ("click",function(){return n.setAllHoursSelected()}),e._uU(12,"Show All"),e.qZA()()(),e.TgZ(13,"app-today-filters",10),e.NdJ("selectFilters",function(o){return n.selectFiltersHandler(o)}),e.qZA()(),e.YNc(14,ue,1,3,"app-today-table",11),e.qZA()),2&t&&(e.xp6(7),e.Q6J("disabled",!n.isFormValid),e.xp6(6),e.Q6J("selectAll",n.allHoursSelected),e.xp6(1),e.Q6J("ngIf",n.dataTree))},directives:[d.DPz,d.fMN,de,f.O5,h],styles:[""]}),v=(0,F.gn)([(0,T.c)()],v);const _e=[{path:"",component:v}];let pe=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[w.Bz.forChild(_e)],w.Bz]}),r})();var me=m(8242),ge=m(1428);let fe=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[f.ez,pe,W,d.T2N,d.zyh,d.KdK,d.uuI,d.oGl,d.OA,d.kmq,d.nKr,d.IIj,A.r,Z.i,O.n,p.UX,me.i,ge.k,p.u5,d.COg]]}),r})()}}]);