"use strict";(self.webpackChunkechelon=self.webpackChunkechelon||[]).push([[446],{8446:(ve,A,m)=>{m.r(A),m.d(A,{OccupationPlanModule:()=>fe});var y=m(6460),O=m(4706),f=m(9808),c=m(776),p=m(3075),Z=m(2601),w=m(5173),e=m(5e3);let q=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[f.ez,c.T2N,c.zyh,c.KdK,O.vP,p.u5,p.UX,c.OA,c.kmq,c.nKr,c.IIj,c.oGl,Z.r,w.i,c.COg]]}),r})();var P=m(655),v=m(4987),D=m(4362);function S(r,t){if(1&r){const n=e.EpF();e.TgZ(0,"nb-option",34),e.NdJ("selectionChange",function(o){e.CHM(n);const a=e.oxw().index,l=e.oxw(2).$implicit;return e.oxw(2).onSelectedWorkstationChange(o,a,l,"occupation")}),e._uU(1),e.qZA()}if(2&r){const n=t.$implicit;e.Q6J("id",null==n||null==n.value?null:n.value.reference)("value",""===(null==n?null:n.reference)||null==n?null:n.reference),e.xp6(1),e.hij("",null==n?null:n.name," ")}}function W(r,t){1&r&&(e.TgZ(0,"span",35),e._uU(1," This field is required "),e.qZA())}function N(r,t){1&r&&(e.TgZ(0,"span",35),e._uU(1," This field is required "),e.qZA())}function J(r,t){1&r&&(e.TgZ(0,"span",35),e._uU(1," This field is required "),e.qZA())}function M(r,t){1&r&&(e.TgZ(0,"span",35),e._uU(1," This field is required "),e.qZA())}function U(r,t){if(1&r){const n=e.EpF();e.TgZ(0,"tr",1)(1,"td")(2,"nb-select",20),e.YNc(3,S,2,3,"nb-option",21),e.qZA(),e.YNc(4,W,2,0,"span",22),e.qZA(),e.TgZ(5,"td")(6,"span",23),e._uU(7),e.qZA()(),e.TgZ(8,"td"),e._UZ(9,"input",24),e.YNc(10,N,2,0,"span",22),e.qZA(),e.TgZ(11,"td"),e._UZ(12,"input",25),e.TgZ(13,"nb-timepicker",26,27),e.NdJ("onSelectTime",function(o){const l=e.CHM(n).$implicit;return e.oxw(4).selectTime(o,l,"startTime")}),e.qZA(),e.YNc(15,J,2,0,"span",22),e.qZA(),e.TgZ(16,"td"),e._UZ(17,"input",28),e.TgZ(18,"nb-timepicker",26,29),e.NdJ("onSelectTime",function(o){const l=e.CHM(n).$implicit;return e.oxw(4).selectTime(o,l,"endTime")}),e.qZA(),e.YNc(20,M,2,0,"span",22),e.qZA(),e.TgZ(21,"td")(22,"nb-select",30)(23,"nb-option",31),e._uU(24,"Morning"),e.qZA(),e.TgZ(25,"nb-option",32),e._uU(26,"Evening"),e.qZA()()(),e.TgZ(27,"td")(28,"div",33)(29,"i",10),e.NdJ("click",function(){e.CHM(n);const o=e.oxw(2).$implicit;return e.oxw(2).onAddOccupation(o)}),e.qZA(),e.TgZ(30,"i",11),e.NdJ("click",function(){const a=e.CHM(n).index,l=e.oxw(2).$implicit;return e.oxw(2).onRemoveOccupation(l,a)}),e.qZA()()()()}if(2&r){const n=t.$implicit,i=e.MAs(14),o=e.MAs(19),a=e.oxw(2).$implicit,l=e.oxw(2);let u,s,d,_;e.Q6J("formGroup",l.castToFormGroup(n)),e.xp6(2),e.Q6J("appEditable",!(null!=n&&null!=n.value&&n.value.reference)),e.xp6(1),e.Q6J("ngForOf",l.getWorkstationsList(a)),e.xp6(1),e.Q6J("ngIf",(null==(u=n.get("reference"))?null:u.touched)&&(null==(u=n.get("reference"))?null:u.getError("required"))),e.xp6(3),e.hij(" ",n.value.activity.displayValue,""),e.xp6(3),e.Q6J("ngIf",(null==(s=n.get("occupation"))?null:s.touched)&&(null==(s=n.get("occupation"))?null:s.getError("required"))),e.xp6(2),e.Q6J("nbTimepicker",i),e.xp6(1),e.Q6J("step",15),e.xp6(2),e.Q6J("ngIf",(null==(d=n.get("startTime"))?null:d.touched)&&(null==(d=n.get("startTime"))?null:d.getError("required"))),e.xp6(2),e.Q6J("nbTimepicker",o),e.xp6(1),e.Q6J("step",15),e.xp6(2),e.Q6J("ngIf",(null==(_=n.get("endTime"))?null:_.touched)&&(null==(_=n.get("endTime"))?null:_.getError("required")))}}function I(r,t){if(1&r&&(e.ynx(0),e.YNc(1,U,31,12,"tr",19),e.BQk()),2&r){const n=e.oxw().$implicit,i=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",i.getArrayFromGroup(n,"occupation").controls)}}function E(r,t){if(1&r){const n=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"div",33)(3,"i",10),e.NdJ("click",function(){e.CHM(n);const o=e.oxw().$implicit;return e.oxw(2).onAddOccupation(o)}),e.qZA()()()()}}function Q(r,t){if(1&r){const n=e.EpF();e.TgZ(0,"nb-option",34),e.NdJ("selectionChange",function(o){e.CHM(n);const a=e.oxw().index,l=e.oxw(2).$implicit;return e.oxw(2).onSelectedWorkstationChange(o,a,l,"ratio")}),e._uU(1),e.qZA()}if(2&r){const n=t.$implicit;e.Q6J("id",null==n||null==n.value?null:n.value.reference)("value",""===(null==n?null:n.reference)||null==n?null:n.reference),e.xp6(1),e.hij("",null==n?null:n.name," ")}}function G(r,t){1&r&&(e.TgZ(0,"span",35),e._uU(1," This field is required "),e.qZA())}function R(r,t){1&r&&(e.TgZ(0,"span",35),e._uU(1," This field is required "),e.qZA())}function V(r,t){1&r&&(e.TgZ(0,"span",35),e._uU(1," This field is required "),e.qZA())}function Y(r,t){1&r&&(e.TgZ(0,"span",35),e._uU(1," This field is required "),e.qZA())}function $(r,t){if(1&r){const n=e.EpF();e.TgZ(0,"tr",1)(1,"td")(2,"nb-select",36),e.YNc(3,Q,2,3,"nb-option",21),e.qZA(),e.YNc(4,G,2,0,"span",22),e.qZA(),e.TgZ(5,"td")(6,"span",23),e._uU(7),e.qZA()(),e.TgZ(8,"td"),e._UZ(9,"input",37),e.YNc(10,R,2,0,"span",22),e.qZA(),e.TgZ(11,"td"),e._UZ(12,"input",25),e.TgZ(13,"nb-timepicker",26,27),e.NdJ("onSelectTime",function(o){const l=e.CHM(n).$implicit;return e.oxw(4).selectTime(o,l,"startTime")}),e.qZA(),e.YNc(15,V,2,0,"span",22),e.qZA(),e.TgZ(16,"td"),e._UZ(17,"input",28),e.TgZ(18,"nb-timepicker",26,29),e.NdJ("onSelectTime",function(o){const l=e.CHM(n).$implicit;return e.oxw(4).selectTime(o,l,"endTime")}),e.qZA(),e.YNc(20,Y,2,0,"span",22),e.qZA(),e.TgZ(21,"td")(22,"div",33)(23,"i",10),e.NdJ("click",function(){e.CHM(n);const o=e.oxw(2).$implicit;return e.oxw(2).onAddRatio(o)}),e.qZA(),e.TgZ(24,"i",11),e.NdJ("click",function(){const a=e.CHM(n).index,l=e.oxw(2).$implicit;return e.oxw(2).onRemoveRatio(l,a)}),e.qZA()()()()}if(2&r){const n=t.$implicit,i=e.MAs(14),o=e.MAs(19),a=e.oxw(2).$implicit,l=e.oxw(2);let u,s,d,_;e.Q6J("formGroup",l.castToFormGroup(n)),e.xp6(2),e.Q6J("appEditable",!(null!=n&&null!=n.value&&n.value.name)),e.xp6(1),e.Q6J("ngForOf",l.getWorkstationsList(a)),e.xp6(1),e.Q6J("ngIf",(null==(u=n.get("reference"))?null:u.touched)&&(null==(u=n.get("reference"))?null:u.getError("required"))),e.xp6(3),e.hij(" ",n.value.activity.displayValue,""),e.xp6(3),e.Q6J("ngIf",(null==(s=n.get("ratio"))?null:s.touched)&&(null==(s=n.get("ratio"))?null:s.getError("required"))),e.xp6(2),e.Q6J("nbTimepicker",i),e.xp6(1),e.Q6J("step",15),e.xp6(2),e.Q6J("ngIf",(null==(d=n.get("startTime"))?null:d.touched)&&(null==(d=n.get("startTime"))?null:d.getError("required"))),e.xp6(2),e.Q6J("nbTimepicker",o),e.xp6(1),e.Q6J("step",15),e.xp6(2),e.Q6J("ngIf",(null==(_=n.get("endTime"))?null:_.touched)&&(null==(_=n.get("endTime"))?null:_.getError("required")))}}function j(r,t){if(1&r&&(e.ynx(0),e.YNc(1,$,25,12,"tr",19),e.BQk()),2&r){const n=e.oxw().$implicit,i=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",i.getArrayFromGroup(n,"ratio").controls)}}function H(r,t){if(1&r){const n=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"div",33)(3,"i",10),e.NdJ("click",function(){e.CHM(n);const o=e.oxw().$implicit;return e.oxw(2).onAddRatio(o)}),e.qZA()()()()}}function B(r,t){if(1&r){const n=e.EpF();e.TgZ(0,"nb-accordion-item",4)(1,"nb-accordion-item-header")(2,"div",5)(3,"div",6)(4,"div")(5,"span",7),e._uU(6,"Workcenter"),e.qZA(),e.TgZ(7,"span",8),e._uU(8),e.qZA()()()()(),e.TgZ(9,"nb-accordion-item-body")(10,"div",9)(11,"i",10),e.NdJ("click",function(){return e.CHM(n),e.oxw(2).onOpenWorkcenterAddDialog("add","")}),e.qZA(),e.TgZ(12,"i",11),e.NdJ("click",function(){const a=e.CHM(n).$implicit;return e.oxw(2).onOpenWorkcenterAddDialog("remove",a.value.uuid)}),e.qZA()(),e.TgZ(13,"div",12)(14,"table",13)(15,"thead")(16,"tr")(17,"th",14),e._uU(18,"Workstation"),e.qZA(),e.TgZ(19,"th"),e._uU(20,"Activity"),e.qZA(),e.TgZ(21,"th"),e._uU(22,"Occupation"),e.qZA(),e.TgZ(23,"th"),e._uU(24,"Start"),e.qZA(),e.TgZ(25,"th"),e._uU(26,"End"),e.qZA(),e.TgZ(27,"th"),e._uU(28,"Shift"),e.qZA(),e.TgZ(29,"th"),e._UZ(30,"br"),e.qZA()()(),e.TgZ(31,"tbody"),e.YNc(32,I,2,1,"ng-container",15),e.YNc(33,E,4,0,"ng-template",null,16,e.W1O),e.qZA()(),e.TgZ(35,"table",17)(36,"thead")(37,"tr")(38,"th"),e._uU(39,"Workstation"),e.qZA(),e.TgZ(40,"th"),e._uU(41,"Activity"),e.qZA(),e.TgZ(42,"th"),e._uU(43,"Ratio"),e.qZA(),e.TgZ(44,"th"),e._uU(45,"Start"),e.qZA(),e.TgZ(46,"th"),e._uU(47,"End"),e.qZA(),e.TgZ(48,"th"),e._UZ(49,"br"),e.qZA()()(),e.TgZ(50,"tbody"),e.YNc(51,j,2,1,"ng-container",15),e.YNc(52,H,4,0,"ng-template",null,18,e.W1O),e.qZA()()()()()}if(2&r){const n=t.$implicit,i=e.MAs(34),o=e.MAs(53),a=e.oxw(2);e.Q6J("formGroup",a.castToFormGroup(n)),e.xp6(8),e.Oqu(n.value.name),e.xp6(24),e.Q6J("ngIf",a.getArrayFromGroup(n,"occupation").controls.length>0)("ngIfElse",i),e.xp6(19),e.Q6J("ngIf",a.getArrayFromGroup(n,"ratio").controls.length>0)("ngIfElse",o)}}function z(r,t){if(1&r&&(e.ynx(0,1),e.TgZ(1,"nb-accordion",2),e.YNc(2,B,54,6,"nb-accordion-item",3),e.qZA(),e.BQk()),2&r){const n=e.oxw();e.Q6J("formGroup",n.form),e.xp6(2),e.Q6J("ngForOf",n.workcentersControl.controls)}}let T=class{constructor(t,n){this.fb=t,this.cdr=n,this.editable=!0,this.workcentersFilter=[],this.workstationsFilter=[],this._workcenters=[],this.searchText="",this.openWorkcenterAddDialog=new e.vpe,this.formValuesChange=new e.vpe,this.isFormValid=new e.vpe}set workcenters(t){!(null==t?void 0:t.length)||t===this._workcenters||(this._workcenters=t,this.createworkCentersForm(),this.watchFormChanges())}get workcenters(){return this._workcenters}ngOnChanges(t){var n,i,o,a;this.workcentersFilter=null===(i=null===(n=null==t?void 0:t.selectedFilters)||void 0===n?void 0:n.currentValue)||void 0===i?void 0:i.workcenters,this.workstationsFilter=null===(a=null===(o=null==t?void 0:t.selectedFilters)||void 0===o?void 0:o.currentValue)||void 0===a?void 0:a.workstations}watchFormChanges(){this.form.valueChanges.pipe((0,v.t)(this)).subscribe(t=>{this.formValuesChange.emit(t),this.isFormValid.emit(this.form.valid)})}onOpenWorkcenterAddDialog(t,n){this.openWorkcenterAddDialog.emit({action:t,uuid:n})}onSelectedWorkstationChange(t,n,i,o){var a;if(!i.value)return;const l=null===(a=null==i?void 0:i.value)||void 0===a?void 0:a.uuid,s=[...this.workcenters.find(_=>_.uuid===l).workstations],d=s.find(_=>_.reference===t.value);s[n]=d,i.patchValue({[o]:s})}get workcentersControl(){var t;return null===(t=this.form)||void 0===t?void 0:t.get("workcentersPlan")}addWorkcenter(){this.workcentersControl.push(this.createWorkCenterGroup())}removeWorkcenter(t){this.workcentersControl.removeAt(t)}getWorkstations(t){return this.workcentersControl.at(t).get("workstations")}addWorkstation(t){this.getWorkstations(t).push(this.createOccupationGroup())}removeWorkstation(t){this.getWorkstations(t).removeAt(t)}onAddOccupation(t){this.getArrayFromGroup(t,"occupation").push(this.createOccupationGroup())}onAddRatio(t){this.getArrayFromGroup(t,"ratio").push(this.createRatioGroup())}onRemoveOccupation(t,n){this.getArrayFromGroup(t,"occupation").removeAt(n)}onRemoveRatio(t,n){this.getArrayFromGroup(t,"ratio").removeAt(n)}getWorkstationsList(t){var n;const i=null===(n=null==t?void 0:t.value)||void 0===n?void 0:n.uuid;return this.workcenters.find(a=>a.uuid===i).workstations}checkIfHasWorkstations(t){var n;return(null===(n=this.workcenters.find(t.value.uuid).workstations)||void 0===n?void 0:n.length)>0}getFilteredArrayGroup(t,n,i){return this.getArrayFromGroup(t,n).controls.filter(l=>""!==l.value.name).filter((l,u,s)=>s.findIndex(d=>d.value.reference===l.value.reference)===u)}createworkCentersForm(){this.form=this.fb.group({workcentersPlan:this.fb.array([...this.workcenters].map(t=>{var n,i;return this.createWorkCenterGroup(null!==(n=t.name)&&void 0!==n?n:t.displayValue,null!==(i=t.uuid)&&void 0!==i?i:t.reference,t.workstations,t.occupation,t.ratio)}))})}createWorkCenterGroup(t="",n="",i=[],o,a){return this.fb.group(o&&a?{name:t,occupation:this.fb.array(o.map(l=>this.createOccupationGroup(l))),ratio:this.fb.array(a.map(l=>this.createRatioGroup(l))),uuid:n,reference:n}:{name:t,occupation:this.fb.array(i.map(l=>this.createOccupationGroup(l))),ratio:this.fb.array(i.map(l=>this.createRatioGroup(l))),uuid:n,reference:n})}createOccupationGroup(t){var n,i,o,a,l,u,s,d,_,h,g;return this.fb.group({name:[null!==(n=null==t?void 0:t.name)&&void 0!==n?n:"",p.kI.required],activity:null!==(o=null===(i=null==t?void 0:t.activity)||void 0===i?void 0:i.displayValue)&&void 0!==o?o:"",occupation:[null!==(a=null==t?void 0:t.occupation)&&void 0!==a?a:"",p.kI.required],startTime:[null!==(l=this.transformDate(null==t?void 0:t.startTime))&&void 0!==l?l:this.transformDate("0600"),p.kI.required],endTime:[null!==(u=this.transformDate(null==t?void 0:t.endTime))&&void 0!==u?u:this.transformDate("1400"),p.kI.required],reference:[null!==(s=null==t?void 0:t.reference)&&void 0!==s?s:"",p.kI.required],displayValue:null!==(d=null==t?void 0:t.displayValue)&&void 0!==d?d:"",uuid:null!==(_=null==t?void 0:t.uuid)&&void 0!==_?_:"",code:null!==(h=null==t?void 0:t.code)&&void 0!==h?h:"",occupationRef:null!==(g=null==t?void 0:t.occupationRef)&&void 0!==g?g:""})}createRatioGroup(t){var n,i,o,a,l,u,s,d,_,h,g,C;return this.fb.group({name:[null!==(n=null==t?void 0:t.name)&&void 0!==n?n:"",p.kI.required],activity:null!==(o=null===(i=null==t?void 0:t.activity)||void 0===i?void 0:i.displayValue)&&void 0!==o?o:"",ratio:[null!==(a=null==t?void 0:t.ratio)&&void 0!==a?a:"",p.kI.required],unitOfRatio:null!==(l=null==t?void 0:t.unitOfRatio)&&void 0!==l?l:"none",startTime:[null!==(u=this.transformDate(null==t?void 0:t.startTime))&&void 0!==u?u:this.transformDate("0600"),p.kI.required],endTime:[null!==(s=this.transformDate(null==t?void 0:t.endTime))&&void 0!==s?s:this.transformDate("1400"),p.kI.required],reference:[null!==(d=null==t?void 0:t.reference)&&void 0!==d?d:"",p.kI.required],displayValue:null!==(_=null==t?void 0:t.displayValue)&&void 0!==_?_:"",uuid:null!==(h=null==t?void 0:t.uuid)&&void 0!==h?h:"",code:null!==(g=null==t?void 0:t.code)&&void 0!==g?g:"",ratioRef:null!==(C=null==t?void 0:t.ratioRef)&&void 0!==C?C:""})}transformDate(t){if(!t||(null==t?void 0:t.toString().length)>4)return null;let n=t.toString();3===n.length&&(n=`0${n}`),2===n.length&&(n=`00${n}`);const i=`${n.substring(0,2)}:${n.substring(2,n.length)}`,o=new Date(`2011-04-20 ${i}`);return"Invalid Date"!==new Date(o).toString()?o:""}castToFormGroup(t){return t}castToFormArray(t){return t}getArrayFromGroup(t,n,i){return t.get(n)}selectTime(t,n,i){!(null==t?void 0:t.time)||(n.patchValue({[i]:null==t?void 0:t.time}),this.timepickers.toArray().forEach(o=>o.hide()))}};function L(r,t){if(1&r&&(e.TgZ(0,"nb-option",16),e._uU(1),e.qZA()),2&r){const n=t.$implicit;e.s9C("value",n.uuid),e.xp6(1),e.Oqu(n.name)}}function X(r,t){if(1&r){const n=e.EpF();e.TgZ(0,"div",10)(1,"div",11)(2,"label",12),e._uU(3,"Workcenter"),e.qZA()(),e.TgZ(4,"div",13)(5,"nb-select",14),e.NdJ("selectedChange",function(o){return e.CHM(n),e.oxw(2).onSelectWorkcenter(o)}),e.YNc(6,L,2,2,"nb-option",15),e.qZA()()()}if(2&r){const n=e.oxw(2);e.xp6(6),e.Q6J("ngForOf",n.workcenters)}}function K(r,t){1&r&&(e.TgZ(0,"div",10)(1,"div",7)(2,"p"),e._uU(3,"You have added all workcenters to the plan already."),e.qZA()()())}function ee(r,t){if(1&r&&(e.TgZ(0,"div",6)(1,"div",7),e.YNc(2,X,7,1,"div",8),e.YNc(3,K,4,0,"ng-template",null,9,e.W1O),e.qZA()()),2&r){const n=e.MAs(4),i=e.oxw();e.xp6(2),e.Q6J("ngIf",i.workcenters.length>0)("ngIfElse",n)}}function te(r,t){1&r&&(e.TgZ(0,"div",6)(1,"div",7)(2,"p"),e._uU(3,"Are you sure you want to remove this workcenter?"),e.qZA()()())}function ne(r,t){if(1&r){const n=e.EpF();e.TgZ(0,"button",17),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return"add"===o.action?o.onSave():o.onRemove()}),e._uU(1),e.qZA()}if(2&r){const n=e.oxw();e.xp6(1),e.hij(" ","add"===n.action?"Save":"Confirm"," ")}}T.\u0275fac=function(t){return new(t||T)(e.Y36(p.qu),e.Y36(e.sBO))},T.\u0275cmp=e.Xpm({type:T,selectors:[["app-plan-table"]],viewQuery:function(t,n){if(1&t&&e.Gf(c.etF,5),2&t){let i;e.iGM(i=e.CRH())&&(n.timepickers=i)}},inputs:{workcenters:"workcenters",selectedFilters:"selectedFilters",searchText:"searchText"},outputs:{openWorkcenterAddDialog:"openWorkcenterAddDialog",formValuesChange:"formValuesChange",isFormValid:"isFormValid"},features:[e.TTD],decls:1,vars:1,consts:[[3,"formGroup",4,"ngIf"],[3,"formGroup"],["multi","","formArrayName","workcentersPlan"],["expanded","true",3,"formGroup",4,"ngFor","ngForOf"],["expanded","true",3,"formGroup"],[1,"accordion-header"],[1,"d-flex","justify-content-between"],[1,"accordion-title"],[1,"accordion-subtitle"],[1,"buttons-wrapper","workcenter-buttons","mb-3"],[1,"iconEcheclon","icon-add","cursor-pointer","mr-2",3,"click"],[1,"iconEcheclon","icon-cross","cursor-pointer","mr-1",3,"click"],[1,"tables-wrapper"],["formArrayName","occupation"],[1,"workstation-col"],[4,"ngIf","ngIfElse"],["addButton",""],["formArrayName","ratio"],["addRatioButton",""],[3,"formGroup",4,"ngFor","ngForOf"],["status","primary","placeholder","Name","formControlName","reference","fullWidth","",1,"workstation-select",3,"appEditable"],[3,"id","value","selectionChange",4,"ngFor","ngForOf"],["class","text-danger",4,"ngIf"],[1,"activity-wrapper"],["nbInput","","type","number","fullWidth","","status","primary","placeholder","occupation","formControlName","occupation"],["nbInput","","status","primary","primary","","formControlName","startTime",1,"time-input",3,"nbTimepicker"],["singleColumn","","format","h:mm:ss a",3,"step","onSelectTime"],["timeFrom",""],["nbInput","","status","primary","primary","","formControlName","endTime",1,"time-input",3,"nbTimepicker"],["timeTo",""],["status","primary","placeholder","Time",1,"select","shift-select"],["value","morning"],["value","evening"],[1,"buttons-wrapper"],[3,"id","value","selectionChange"],[1,"text-danger"],["status","primary","placeholder","Name","formControlName","reference",1,"workstation-select",3,"appEditable"],["type","number","nbInput","","fullWidth","","status","primary","placeholder","Ratio","formControlName","ratio"]],template:function(t,n){1&t&&e.YNc(0,z,3,2,"ng-container",0),2&t&&e.Q6J("ngIf",n.form)},directives:[f.O5,p.JL,p.sg,c.qCO,p.CE,f.sg,c.SaG,c.YZd,c.AvE,c.rs,p.JJ,p.u,D.m,c.q51,c.h8i,p.wV,p.Fj,c.etF,c.emG],styles:[".workcenter-buttons[_ngcontent-%COMP%]{position:absolute;right:12px;top:0}.time-input[_ngcontent-%COMP%]{width:80px}.workstation-col[_ngcontent-%COMP%]{min-width:250px}"]}),T=(0,P.gn)([(0,v.c)()],T);let oe=(()=>{class r{constructor(n){this.dialog=n,this.newWorkcenterUuid="",this.workcenters=[],this.action="",this.workcenterToRemoveUuid="",this.addWorkcenter=new e.vpe,this.removeWorkcenter=new e.vpe}onCloseDialog(){this.dialog.close()}onSelectWorkcenter(n){this.newWorkcenterUuid=n}onSave(){this.addWorkcenter.emit(this.newWorkcenterUuid)}onRemove(){this.removeWorkcenter.emit(!0)}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(c.X4l))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-plan-add-workcenter-dialog"]],outputs:{addWorkcenter:"addWorkcenter",removeWorkcenter:"removeWorkcenter"},decls:14,vars:6,consts:[["icon","close",1,"close-dialog",3,"click"],["class","row mb-1",4,"ngIf","ngIfElse"],["confirmText",""],[1,"buttons","d-flex","justify-content-center","mt-5"],["nbButton","","outline","","size","medium","type","button",1,"mr-3",3,"click"],["nbButton","","status","primary","size","medium",3,"click",4,"ngIf"],[1,"row","mb-1"],[1,"col-12"],["class","row",4,"ngIf","ngIfElse"],["noWorkcentersInfo",""],[1,"row"],[1,"col-sm-3","d-flex","align-items-center"],["for","workcenter"],[1,"col-sm-9"],["fullWidth","","status","primary","placeholder","Select workcenter...",1,"select",3,"selectedChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["nbButton","","status","primary","size","medium",3,"click"]],template:function(n,i){if(1&n&&(e.TgZ(0,"nb-card")(1,"nb-card-header")(2,"h2"),e._uU(3),e.ALo(4,"titlecase"),e.qZA(),e.TgZ(5,"nb-icon",0),e.NdJ("click",function(){return i.onCloseDialog()}),e.qZA()(),e.TgZ(6,"nb-card-body"),e.YNc(7,ee,5,2,"div",1),e.YNc(8,te,4,0,"ng-template",null,2,e.W1O),e.TgZ(10,"div",3)(11,"button",4),e.NdJ("click",function(){return i.onCloseDialog()}),e._uU(12,"Cancel"),e.qZA(),e.YNc(13,ne,2,1,"button",5),e.qZA()()()),2&n){const o=e.MAs(9);e.xp6(3),e.hij("",e.lcZ(4,4,i.action)," workcenter"),e.xp6(4),e.Q6J("ngIf","add"===i.action)("ngIfElse",o),e.xp6(6),e.Q6J("ngIf",0!==i.workcenters.length||"remove"===i.action)}},directives:[c.Asz,c.ndF,c.fMN,c.yKW,f.O5,c.rs,f.sg,c.q51,c.DPz],pipes:[f.rS],styles:["nb-card[_ngcontent-%COMP%]{min-width:500px}"]}),r})(),ie=(()=>{class r{constructor(n){this.dialog=n,this.name="",this.setScheduleName=new e.vpe}onCloseDialog(){this.dialog.close()}onSave(){this.setScheduleName.emit(this.name)}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(c.X4l))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-plan-save-dialog"]],outputs:{setScheduleName:"setScheduleName"},decls:17,vars:1,consts:[["icon","close",1,"close-dialog",3,"click"],[1,"row","mb-1"],[1,"col-sm-3","d-flex","align-items-center"],["for","name"],[1,"col-sm-9"],["nbInput","","status","primary","fullWidth","","id","name","placeholder","Enter name",3,"ngModel","ngModelChange"],[1,"buttons","d-flex","justify-content-center","mt-5"],["nbButton","","outline","","size","medium","type","button",1,"mr-3",3,"click"],["nbButton","","status","primary","size","medium",3,"click"]],template:function(n,i){1&n&&(e.TgZ(0,"nb-card")(1,"nb-card-header")(2,"h2"),e._uU(3,"Save schedule"),e.qZA(),e.TgZ(4,"nb-icon",0),e.NdJ("click",function(){return i.onCloseDialog()}),e.qZA()(),e.TgZ(5,"nb-card-body")(6,"div",1)(7,"div",2)(8,"label",3),e._uU(9,"Name"),e.qZA()(),e.TgZ(10,"div",4)(11,"input",5),e.NdJ("ngModelChange",function(a){return i.name=a}),e.qZA()()(),e.TgZ(12,"div",6)(13,"button",7),e.NdJ("click",function(){return i.onCloseDialog()}),e._uU(14,"Cancel"),e.qZA(),e.TgZ(15,"button",8),e.NdJ("click",function(){return i.onSave()}),e._uU(16,"Save"),e.qZA()()()()),2&n&&(e.xp6(11),e.Q6J("ngModel",i.name))},directives:[c.Asz,c.ndF,c.fMN,c.yKW,c.h8i,p.Fj,p.JJ,p.On,c.DPz],styles:["nb-card[_ngcontent-%COMP%]{min-width:500px}"]}),r})();var F=m(567),k=m(1969),re=m(890),x=m(2268);function ae(r,t){if(1&r&&(e.TgZ(0,"nb-option",10),e._uU(1),e.qZA()),2&r){const n=t.$implicit;e.Q6J("value",n.name),e.xp6(1),e.Oqu(n.name)}}function le(r,t){if(1&r&&(e.TgZ(0,"nb-option",10),e._uU(1),e.qZA()),2&r){const n=t.$implicit;e.Q6J("value",n.name),e.xp6(1),e.Oqu(n.name)}}let ce=(()=>{class r{constructor(){this.selectedWorkcenters=[],this.selectedFilters={},this.workcenters=[],this.workstations=[],this.selectFilters=new e.vpe,this.allOptionValue="#all"}onSelectFilterChange(n,i,o,a,l){this.selectedFilters[a]=n,this.selectFilters.emit(this.selectedFilters)}getAllFiltersNames(n){return n.map(i=>i.name)}onSelectAll(n,i,o,a,l){i.options.forEach(u=>n?u.select():u.deselect())}updateAllOptionState(n){const i=n.options.toArray().filter(a=>a.value!==this.allOptionValue).every(a=>a.selected),o=n.options.find(a=>a.value===this.allOptionValue);i?null==o||o.select():null==o||o.deselect()}}return r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-plan-filters"]],inputs:{workcenters:"workcenters",workstations:"workstations"},outputs:{selectFilters:"selectFilters"},decls:15,vars:2,consts:[[1,"filters"],[1,"filter"],["status","control","placeholder","Time",1,"select"],["value","morning"],["value","evening"],["multiple","","status","control","placeholder","Workcenter",1,"select",3,"selectedChange"],["workcenterSelect",""],["class","checkbox-container",3,"value",4,"ngFor","ngForOf"],["multiple","","status","control","placeholder","Workstation",1,"select",3,"selectedChange"],["workstationSelect",""],[1,"checkbox-container",3,"value"]],template:function(n,i){if(1&n){const o=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"nb-select",2)(3,"nb-option",3),e._uU(4,"Morning"),e.qZA(),e.TgZ(5,"nb-option",4),e._uU(6,"Evening"),e.qZA()()(),e.TgZ(7,"div",1)(8,"nb-select",5,6),e.NdJ("selectedChange",function(l){e.CHM(o);const u=e.MAs(9);return i.onSelectFilterChange(l,u,i.workcenters,"workcenters",!1)}),e.YNc(10,ae,2,2,"nb-option",7),e.qZA()(),e.TgZ(11,"div",1)(12,"nb-select",8,9),e.NdJ("selectedChange",function(l){e.CHM(o);const u=e.MAs(13);return i.onSelectFilterChange(l,u,i.workstations,"workstations",!1)}),e.YNc(14,le,2,2,"nb-option",7),e.qZA()()()}2&n&&(e.xp6(10),e.Q6J("ngForOf",i.workcenters),e.xp6(4),e.Q6J("ngForOf",i.workstations))},directives:[c.rs,c.q51,f.sg],styles:[""]}),r})(),se=(()=>{class r{constructor(){this.changeSearchText=new e.vpe}onChangeSearchText(n){this.changeSearchText.emit(n.target.value)}}return r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-search-input"]],outputs:{changeSearchText:"changeSearchText"},decls:3,vars:0,consts:[[1,"search-input-wrapper"],["status","primary","fullWidth","","nbInput","","placeholder","Search by: Workstation, Activity, Ratio",3,"input"],["icon","search",1,"search-input-icon"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"input",1),e.NdJ("input",function(a){return i.onChangeSearchText(a)}),e.qZA(),e._UZ(2,"nb-icon",2),e.qZA())},directives:[c.h8i,c.fMN],styles:[".search-input-wrapper[_ngcontent-%COMP%]{position:relative}.search-input-wrapper[_ngcontent-%COMP%]   .search-input-icon[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);right:15px}"]}),r})();function ue(r,t){if(1&r){const n=e.EpF();e.TgZ(0,"app-plan-table",18),e.NdJ("openWorkcenterAddDialog",function(o){return e.CHM(n),e.oxw().onOpenWorkcenterAddDialog(o)})("formValuesChange",function(o){return e.CHM(n),e.oxw().onFormChanges(o)})("isFormValid",function(o){return e.CHM(n),e.oxw().setIsFormValid(o)}),e.qZA()}if(2&r){const n=e.oxw();e.Q6J("workcenters",n.filteredData)("searchText",n.searchText)("selectedFilters",n.selectedFilters)}}let b=class{constructor(t,n,i,o,a,l,u){var s,d,_,h;this.workCenterApi=t,this.workStationApi=n,this.activityApi=i,this.siteOccupationApi=o,this.dialogService=a,this.cdr=l,this.router=u,this.editable=!1,this.searchText="",this.workcentersPlans=[],this.dataTree=[],this.plan=[],this.planName="",this.workcentersToAdd=[],this.filteredData=[],this.isFormValid=!1,this.planDate="",this.planOption="",this.isTemplate=!0;const g=null===(h=null===(_=null===(d=null===(s=this.router)||void 0===s?void 0:s.getCurrentNavigation())||void 0===d?void 0:d.extras)||void 0===_?void 0:_.state)||void 0===h?void 0:h.planOption;this.planOption=g||"manual"}ngOnInit(){"manual"===this.planOption?this.fetchManualData():this.fetchPlanData()}pad(t){return t<10?"0"+t:t}fetchPlanData(){(0,F.D)(this.workCenterApi.dataWorkCenterListGet(void 0,void 0,void 0,"500"),this.workStationApi.dataWorkstationListGet(void 0,void 0,void 0,"500"),this.activityApi.dataActivityListGet(void 0,void 0,void 0,"500"),this.siteOccupationApi.dataSiteOccupationSiteOccupationPlanReferenceGet(this.planOption)).pipe((0,v.t)(this)).subscribe({next:([t,n,i,o])=>{var a,l,u;this.workCenters=t,this.workStations=n,this.activities=i,this.editedPlanData=o.content,this.planName=null===(a=o.content)||void 0===a?void 0:a.planName,this.workcentersPlans=null!==(u=null===(l=o.content)||void 0===l?void 0:l.workCenterPlans)&&void 0!==u?u:[],this.buildEditedPlanDataTree()}})}fetchManualData(){(0,F.D)(this.workCenterApi.dataWorkCenterListGet(void 0,void 0,void 0,"500"),this.workStationApi.dataWorkstationListGet(void 0,void 0,void 0,"500"),this.activityApi.dataActivityListGet(void 0,void 0,void 0,"500")).pipe((0,v.t)(this)).subscribe({next:([t,n,i])=>{this.workCenters=t,this.workStations=n,this.activities=i,this.buildDataTree()}})}setIsFormValid(t){this.isFormValid=t}onFormChanges(t){this.plan=t.workcentersPlan}onChangeDate(t){const n=this.formatDate(t);this.planOption=n,this.isTemplate=!1,this.fetchPlanData()}buildEditedPlanDataTree(){this.dataTree=[...this.workcentersPlans].map(t=>{var n,i,o;let a="";t.name=t.displayValue,null===(n=t.occupation)||void 0===n||n.forEach((s,d)=>{a||(a=s.workcenterUuid);const _=s.workstationUuid;s.occupationRef=s.reference,s.reference=_;const h=this.workStations.items.find(g=>g.uuid===_);t.occupation[d]=Object.assign(Object.assign({},t.occupation[d]),h)}),null===(i=t.ratio)||void 0===i||i.forEach((s,d)=>{a||(a=s.workcenterUuid);const _=s.workstationUuid;s.ratioRef=s.reference,s.name=s.displayValue,s.reference=_;const h=this.workStations.items.find(g=>g.uuid===_);t.ratio[d]=Object.assign(Object.assign({},t.ratio[d]),h)});const l=a;t.uuid=l;const u=this.workCenters.items.find(s=>s.uuid===l);return t.workstations=null==u?void 0:u.workstations,null===(o=t.workstations)||void 0===o||o.forEach((s,d)=>{const _=s.reference;s.name=s.displayValue;const h=this.workStations.items.find(g=>g.uuid===_);t.workstations[d]=Object.assign(Object.assign({},t.workstations[d]),h)}),t}),this.filteredData=[...this.dataTree],this.cdr.markForCheck()}buildDataTree(){this.dataTree=this.workCenters.items.map(t=>{var n;return null===(n=t.workstations)||void 0===n||n.forEach((i,o)=>{const a=i.reference,l=this.workStations.items.find(u=>u.uuid===a);t.workstations[o]=Object.assign(Object.assign({},t.workstations[o]),l)}),t}),this.filteredData=[...this.dataTree],console.log(this.filteredData),this.cdr.markForCheck()}selectFiltersHandler(t){if(this.selectedFilters=t,!this.selectedFilters)return;const{workcenters:n,workstations:i}=this.selectedFilters;let o=[...this.dataTree];return(null==n?void 0:n.length)&&(o=o.filter(a=>n.includes(a.name))),(null==i?void 0:i.length)&&(o=o.map(a=>Object.assign(Object.assign({},a),{workstations:a.workstations.filter(l=>i.includes(l.name)),occupation:a.workstations.filter(l=>i.includes(l.name)),ratio:a.workstations.filter(l=>i.includes(l.name))})).filter(a=>a.workstations.length)),this.filteredData=o,o}searchTextHandler(t,n){var i,o,a,l;this.searchText=t.toLowerCase();let u=(null===(o=null===(i=this.selectedFilters)||void 0===i?void 0:i.workcenters)||void 0===o?void 0:o.length)||(null===(l=null===(a=this.selectedFilters)||void 0===a?void 0:a.workstations)||void 0===l?void 0:l.length)?this.selectFiltersHandler(this.selectedFilters):[...this.dataTree];(null==t?void 0:t.length)&&(u=u.map(s=>Object.assign(Object.assign({},s),{workstations:s.workstations.filter(d=>{var _,h,g,C;return(null===(_=d.name.toLowerCase())||void 0===_?void 0:_.includes(t.toLowerCase()))||(null===(h=d.ratio)||void 0===h?void 0:h.includes(t))||(null===(C=null===(g=d.activity)||void 0===g?void 0:g.displayValue.toLowerCase())||void 0===C?void 0:C.includes(t.toLowerCase()))})})).filter(s=>s.workstations.length)),this.filteredData=u}onOpenSaveScheduleDialog(){const t=this.dialogService.open(ie);t.componentRef.instance.setScheduleName.pipe((0,v.t)(this)).subscribe(n=>{t.close(),n&&(this.planName=n,this.isTemplate=!0,this.savePlan(!0))})}formatPlanData(t){return t.map(i=>(i.occupation.forEach(o=>{o.startTime=this.formatTime(o.startTime),o.endTime=this.formatTime(o.endTime),o.workstationUuid=o.uuid,o.reference=o.occupationRef}),i.ratio.forEach(o=>{o.startTime=this.formatTime(o.startTime),o.endTime=this.formatTime(o.endTime),o.workstationUuid=o.uuid,o.reference=o.ratioRef}),i))}formatTime(t){const n=new Date(t);return n?`${`0${n.getHours()}`.slice(-2)}${`0${n.getMinutes()}`.slice(-2)}`:""}formatDate(t){return`${t.getFullYear()}${this.pad(t.getMonth()+1)}${this.pad(t.getDate())}`}savePlan(t){const n=this.planDate?this.formatDate(this.planDate):null;!t&&n&&(this.isTemplate=!1);const i={planReference:this.isTemplate?this.planName:null!=n?n:this.planName,planName:this.planName,isTemplate:this.isTemplate,workCenterPlans:this.formatPlanData([...this.plan])};this.siteOccupationApi.dataSiteOccupationSavePlanPost(i).pipe((0,v.t)(this)).subscribe({next:o=>{console.log(o)}})}onOpenWorkcenterAddDialog(t){const n=this.dialogService.open(oe);n.componentRef.instance.workcenters=this.workcentersToAdd,n.componentRef.instance.action=t.action,n.componentRef.instance.addWorkcenter.pipe((0,v.t)(this)).subscribe(i=>{if(n.close(),i){const o=this.workCenters.items.find(l=>l.uuid===i),a=[...this.dataTree,o];this.dataTree=a,this.filteredData=this.dataTree,this.cdr.markForCheck()}}),n.componentRef.instance.removeWorkcenter.pipe((0,v.t)(this)).subscribe(i=>{if(n.close(),"remove"===(null==t?void 0:t.action)&&(null==t?void 0:t.uuid)){const o=this.workCenters.items.find(l=>l.uuid===(null==t?void 0:t.uuid));this.workcentersToAdd=[...this.workcentersToAdd,o];const a=this.dataTree.filter(l=>l.uuid!==(null==t?void 0:t.uuid));this.dataTree=a,this.filteredData=this.dataTree,this.cdr.markForCheck()}})}};b.\u0275fac=function(t){return new(t||b)(e.Y36(k.Uv),e.Y36(k.F),e.Y36(k.B0),e.Y36(re.j),e.Y36(c.Gln),e.Y36(e.sBO),e.Y36(x.F0))},b.\u0275cmp=e.Xpm({type:b,selectors:[["app-plan-create"]],decls:22,vars:7,consts:[[1,"plan-header","mt-3"],[1,"row","mb-3"],[1,"col-12","col-sm-12","col-md-7"],[1,"mt-0"],[1,""],[1,"date-wrapper","mb-1"],["nbInput","","status","control","placeholder","Date",3,"nbDatepicker","ngModel","ngModelChange"],["format","yyyy/MM/dd",3,"dateChange"],["date",""],[3,"workcenters","workstations","selectFilters"],[1,"col-12","col-sm-12","col-md-5","d-flex","flex-column","justify-content-between"],[3,"changeSearchText"],[1,"buttons","mt-3","d-flex","justify-content-end"],["nbButton","","status","primary","size","medium",1,"icon-button",3,"disabled","click"],["icon","check_circle"],[1,"icon-button-text"],["nbButton","","status","primary","size","medium",1,"ml-1",3,"disabled","click"],[3,"workcenters","searchText","selectedFilters","openWorkcenterAddDialog","formValuesChange","isFormValid",4,"ngIf"],[3,"workcenters","searchText","selectedFilters","openWorkcenterAddDialog","formValuesChange","isFormValid"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),e._uU(4,"Plan"),e.qZA(),e.TgZ(5,"div",4)(6,"div",5)(7,"input",6),e.NdJ("ngModelChange",function(o){return n.planDate=o}),e.qZA(),e.TgZ(8,"nb-datepicker",7,8),e.NdJ("dateChange",function(o){return n.onChangeDate(o)}),e.qZA()(),e.TgZ(10,"div")(11,"app-plan-filters",9),e.NdJ("selectFilters",function(o){return n.selectFiltersHandler(o)}),e.qZA()()()(),e.TgZ(12,"div",10)(13,"app-search-input",11),e.NdJ("changeSearchText",function(o){return n.searchTextHandler(o)}),e.qZA(),e.TgZ(14,"div",12)(15,"button",13),e.NdJ("click",function(){return n.savePlan(!1)}),e._UZ(16,"nb-icon",14),e.TgZ(17,"span",15),e._uU(18," Save all"),e.qZA()(),e.TgZ(19,"button",16),e.NdJ("click",function(){return n.onOpenSaveScheduleDialog()}),e._uU(20," Save shedule "),e.qZA()()()(),e.YNc(21,ue,1,3,"app-plan-table",17),e.qZA()),2&t){const i=e.MAs(9);e.xp6(7),e.Q6J("nbDatepicker",i)("ngModel",n.planDate),e.xp6(4),e.Q6J("workcenters",null==n.workCenters?null:n.workCenters.items)("workstations",null==n.workStations?null:n.workStations.items),e.xp6(4),e.Q6J("disabled",!n.isFormValid),e.xp6(4),e.Q6J("disabled",!n.isFormValid),e.xp6(2),e.Q6J("ngIf",n.dataTree)}},directives:[c.h8i,c.$kf,p.Fj,p.JJ,p.On,c.B4C,ce,se,c.DPz,c.fMN,f.O5,T],styles:[""]}),b=(0,P.gn)([(0,v.c)()],b);var de=m(5);const _e=[{path:"",component:(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["ng-component"]],decls:2,vars:1,consts:[[1,"plan-list-wrapper"],[3,"containerText"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0),e._UZ(1,"app-set-up-screen-csv-or-manual",1),e.qZA()),2&n&&(e.xp6(1),e.Q6J("containerText","Start setting up the plan"))},directives:[de._],styles:[".nb-spinner-container[_ngcontent-%COMP%]{min-height:300px}"]}),r})()},{path:"manual",component:b}];let pe=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[x.Bz.forChild(_e)],x.Bz]}),r})();var me=m(8242),he=m(1428),ge=m(6197);let fe=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[f.ez,pe,q,c.T2N,c.zyh,c.KdK,c.uuI,c.oGl,c.OA,c.kmq,c.nKr,c.IIj,Z.r,w.i,y.n,p.UX,me.i,he.k,p.u5,c.COg,ge.$]]}),r})()}}]);