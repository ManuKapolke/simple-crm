import { Component, inject } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  user = new User();
  birthDate!: Date;
  loading = false;

  firestore: Firestore = inject(Firestore);

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) { }

  saveUser() {
    this.user.birthDate = this.birthDate?.getTime();
    // console.log('Current user is', this.user);

    this.addUser(this.user);
  }

  async addUser(newUser: User) {
    this.loading = true;
    await addDoc(this.getUsersRef(), newUser.toJson()).catch(
      err => console.error(err)
    ).then((result: any) => {
      // console.log('Adding user finished', result);
      this.loading = false;
      this.dialogRef.close();
    });
  }

  getUsersRef() {
    return collection(this.firestore, 'users');
  }
}
