import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { Firestore, collection, doc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent {
  user = new User();
  loading = false;

  firestore: Firestore = inject(Firestore);

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) { }

  saveUser() {
    console.log('pre-update', this.user);
    this.updateUser(this.user);
    console.log('post-update', this.user);

  }

  async updateUser(user: User) {
    if (user.id) {
      this.loading = true;
      await updateDoc(this.getSingleUserRef(user.id), this.user.toJson()).catch(
        err => console.error(err)
      ).then(() => {
        this.loading = false;
        this.dialogRef.close();
      });
    }
  }

  getSingleUserRef(userId: string) {
    return doc(this.getUsersRef(), userId);
  }

  getUsersRef() {
    return collection(this.firestore, 'users');
  }
}
