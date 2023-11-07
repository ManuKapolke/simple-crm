import { Component, inject } from '@angular/core';
import { Firestore, collection, doc, onSnapshot } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  userId: string = '';
  user: User = new User();

  unsubSingleUser: any;

  firestore: Firestore = inject(Firestore);

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      console.log('Got Id', this.userId);

    });

    this.unsubSingleUser = this.subscribeSingleUser(this.userId);
  }

  ngOnDestroy() {
    this.unsubSingleUser();
  }


  subscribeSingleUser(userId: string) {
    return onSnapshot(this.getSingleUserRef(userId), (docRef: any) => {
      this.user.updateFromJson(docRef.data());
      this.user.updateFromJson({ 'id': userId });
      console.log('Update:', this.user);
    });
  }

  getSingleUserRef(userId: string) {
    return doc(this.getUsersRef(), userId);
  }

  getUsersRef() {
    return collection(this.firestore, 'users');
  }
}
