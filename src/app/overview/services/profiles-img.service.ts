import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FilesUsers} from "../model/files-users";
import {BaseService} from "../../shared/services/base.service";
import {from, Observable, of, switchMap} from "rxjs";
import {collection, collectionData, Firestore, doc, docData, setDoc, updateDoc, query} from "@angular/fire/firestore";
import {AutheticationService} from "./authetication.service";
import {Register} from "../model/register";

@Injectable({
  providedIn: 'root'
})
export class ProfilesImgService extends BaseService<FilesUsers>{

  get currentUserProfile$(): Observable<Register | null> {
    return this.authServices.currentUser$.pipe(
      switchMap((user) => {
        if (!user?.uid) {
          return of(null);
        }

        const ref = doc(this.firestore, 'users', user?.uid);
        return docData(ref) as Observable<Register>;
      })
    );
  }
  get allUsers$(): Observable<Register[]>{
    const ref = collection(this.firestore,'users');
    const queryAll = query(ref);
    return collectionData(queryAll) as Observable<Register[]>
  }
  constructor(http:HttpClient,
              private firestore: Firestore,
              private authServices: AutheticationService) {
    super(http);
    this.basePath = 'http://localhost:3000/api/v1/filesusers';
  }
}
