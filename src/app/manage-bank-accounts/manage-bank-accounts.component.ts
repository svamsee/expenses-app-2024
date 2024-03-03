import { Component, inject } from '@angular/core';
import {
  DocumentReference,
  Firestore,
  collection,
  collectionData,
  deleteDoc,
  doc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface IBankAccount {
  id?: string;
  name: string;
  branch: string;
}

@Component({
  selector: 'app-manage-bank-accounts',
  templateUrl: './manage-bank-accounts.component.html',
  styleUrl: './manage-bank-accounts.component.scss',
})
export class ManageBankAccountsComponent {
  private firestore: Firestore = inject(Firestore);
  bankAccountsCollection = collection(this.firestore, 'bank-accounts');
  bankAccounts$ = collectionData(this.bankAccountsCollection, { idField: 'id', }) as Observable<IBankAccount[]>;
  async deleteItem(id: string) {
    const docRef: DocumentReference = doc(this.firestore, 'bank-accounts', id);
    await deleteDoc(docRef);
  }
}
