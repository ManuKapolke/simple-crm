import { Component, inject, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { Firestore, collection, collectionData, onSnapshot } from '@angular/fire/firestore';
import { User } from 'src/models/user.class';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @ViewChild(MatTable) userTable!: MatTable<any>;
  displayedColumns: string[] = ['name', 'email', 'city'];

  allUsers: any[] = [];
  unsubUsers: any;

  firestore: Firestore = inject(Firestore);

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.unsubUsers = this.subscribeUsers();
  }

  ngOnDestroy() {
    this.unsubUsers();
  }

  subscribeUsers() {
    return onSnapshot(this.getUsersRef(), users => {
      // users.docChanges().forEach((change) => {
      //   if (change.type === "added") {
      //     console.log("New user: ", change.doc.data());
      //   }
      //   if (change.type === "modified") {
      //     console.log("Modified user: ", change.doc.data());
      //   }
      //   if (change.type === "removed") {
      //     console.log("Removed user: ", change.doc.data());
      //   }
      // });

      this.allUsers = []
      users.forEach(element => {
        this.allUsers.push(element.data());
      });

      this.userTable.renderRows()

      console.log('allUsers', this.allUsers);
    });
  }

  getUsersRef() {
    return collection(this.firestore, 'users');
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
