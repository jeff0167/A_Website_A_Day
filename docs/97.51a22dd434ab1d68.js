"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[97],{97:(y,c,i)=>{i.r(c),i.d(c,{Tab11PageModule:()=>P});var u=i(6895),r=i(433),l=i(2078),b=i(1194),e=i(4650),g=i(9099),d=i(9446),f=i(5197);function T(t,o){if(1&t&&(e.TgZ(0,"ion-list")(1,"h1"),e._uU(2),e.ALo(3,"json"),e.qZA()()),2&t){const n=o.$implicit;e.xp6(2),e.Oqu(e.lcZ(3,1,n))}}function v(t,o){if(1&t&&(e.TgZ(0,"ion-list")(1,"h1"),e._uU(2),e.ALo(3,"json"),e.qZA()()),2&t){const n=o.$implicit;e.xp6(2),e.Oqu(e.lcZ(3,1,n))}}const m=[{path:"",component:(()=>{class t{constructor(n,a,s,h){this.babyService=n,this.firebaseService=a,this.fb=s,this.db=h,this.students={}}generateArray(n){return Object.keys(n).map(a=>({key:a,value:n[a]}))}ngOnInit(){setInterval(function(){},2e3),console.log("Calling init"),this.ref=this.db.database.ref("Students"),this.ref.on("value",a=>{this.students=a.val(),console.log("the value"+JSON.stringify(a.val()))}),this.studentForm=this.fb.group({Address:["",[r.kI.required]],Age:["",[r.kI.required]],Name:["",[r.kI.required]]})}createStudent(){this.CreateRecord()}CreateRecord(){}LiveSubscribeWithoutFirebaseCode(){}vibrate(){}vibratePattern(){navigator.vibrate([300,100,300,100])}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(g.P),e.Y36(d.O),e.Y36(r.qu),e.Y36(f.KQ))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-tab11"]],decls:9,vars:2,consts:[[4,"ngFor","ngForOf"],["color","danger",3,"click"],[3,"click"]],template:function(n,a){1&n&&(e.TgZ(0,"body"),e.YNc(1,T,4,3,"ion-list",0),e.YNc(2,v,4,3,"ion-list",0),e.TgZ(3,"ion-button",1),e.NdJ("click",function(){return a.createStudent()}),e._uU(4,"Make new student"),e.qZA(),e.TgZ(5,"ion-button",2),e.NdJ("click",function(){return a.vibrate()}),e._uU(6,"Vibrate Single"),e.qZA(),e.TgZ(7,"ion-button",2),e.NdJ("click",function(){return a.vibratePattern()}),e._uU(8,"Vibrate Pattern"),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("ngForOf",a.babies),e.xp6(1),e.Q6J("ngForOf",a.students))},dependencies:[u.sg,l.YG,l.q_,u.Ts]}),t})()}];let p=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[b.Bz.forChild(m),b.Bz]}),t})(),P=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,r.u5,l.Pc,p]}),t})()}}]);