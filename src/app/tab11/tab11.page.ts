import { Component, OnInit } from '@angular/core';
import { BabyAPIService } from '../services/baby-api.service';
import { BabyData } from '../interfaces/BabyData';
import { FirebaseService } from '../services/firebase.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AngularFireDatabase } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

interface StudentData {
  Name: string;
  Age: number;
  Address: string;
}

@Component({
  selector: 'app-tab11',
  templateUrl: './tab11.page.html',
  styleUrls: ['./tab11.page.scss'],
})
export class Tab11Page implements OnInit {

  students = [];
  studentData: StudentData;
  studentForm: FormGroup | undefined;

  public babies: any;

  constructor(public babyService: BabyAPIService, private firebaseService: FirebaseService, public fb: FormBuilder, private db: AngularFireDatabase) {
    this.studentData = {} as StudentData;
  }

  generateArray(obj: any){ // can't seem to make it use type people, and because of it a lot of errors are thrown
    return Object.keys(obj).map((key)=>{ return {key:key, value:obj[key]}});
}


  ngOnInit(){ 
   // this.babyService.getPeople().then(people => this.babies = people); 
   //this.LiveSubscribeWithoutFirebaseCode();
  //  this.babyService.getPeopleLive().subscribe((data) =>{
  //   alert(data);
  //  })

  // no this is wrong it completely misses the point of the whole live database, why can't you update the value yourself?
    // but hey, the hack works...
  var theRunner = setInterval( function(){ }, 2000); 

  // const ref = this.db.database.ref("Students");
  //   ref.on('value', (snapshot) => {
  //     this.students = snapshot.val();
  //     console.log("the value" + JSON.stringify(snapshot.val()));
  //   });

    console.log("Calling init");

 const ref = this.db.database.ref("Students");
    ref.on('value', (snapshot) => {
      this.students = snapshot.val();
      console.log("the value" + JSON.stringify(snapshot.val()));
    });

  this.studentForm = this.fb.group({
    Name: ['', [Validators.required]],
    Age: ['', [Validators.required]],
    Address: ['', [Validators.required]]
  })


  // this.firebaseService.read_students().subscribe((data) =>{
  //   this.studentList = data;
  // });
   
  //  this.firebaseService.read_students().subscribe(data => {
  //   this.students = data.map(e => {
  //     return {
  //      // id: e.payload.doc.id,
  //       //isEdit: false,
  //       Name: e.payload.doc.data()['Name'],
  //       Age: e.payload.doc.data()['Age'],
  //       Address: e.payload.doc.data()['Address'],
  //     };
  //   })
  //   console.log(this.students);

  // });
}

// CreateRecord() {
//   console.log(this.studentForm.value);
//   this.firebaseService.create_student(this.studentForm.value).then(resp => {
//     this.studentForm.reset();
//   })
//     .catch(error => {
//       console.log(error);
//     });
// }

// RemoveRecord(rowID) {
//   this.firebaseService.delete_student(rowID);
// }

// EditRecord(record) {
//   record.isEdit = true;
//   record.EditName = record.Name;
//   record.EditAge = record.Age;
//   record.EditAddress = record.Address;
// }

// UpdateRecord(recordRow) {
//   let record = {};
//   record['Name'] = recordRow.EditName;
//   record['Age'] = recordRow.EditAge;
//   record['Address'] = recordRow.EditAddress;
//   this.firebaseService.update_student(recordRow.id, record);
//   recordRow.isEdit = false;
// }
  

  LiveSubscribeWithoutFirebaseCode(){
  //  this.babyService.getPeopleLive().then(data => this.babies = data);  
   // alert(this.babies);
   // alert(JSON.stringify(this.babies));
  }


  vibrate(){ 

    //this.LiveSubscribeWithoutFirebaseCode();
    // https://jeff0167.github.io/JavaScript-with-vue/  website example
    // https://www.npmjs.com/package/angular-vibrator  angular vibrator?

   // navigator.vibrate(100); // literally that easy

  }
  
  vibratePattern(){ 
    navigator.vibrate([300,100,300,100]); 
  }

  

}