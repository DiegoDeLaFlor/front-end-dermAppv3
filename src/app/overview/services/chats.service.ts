import { Injectable } from '@angular/core';
import {addDoc, collection, collectionData, Firestore, query, where} from "@angular/fire/firestore";
import {Register} from "../model/register";
import {concatMap, map, Observable, take} from "rxjs";
import {ProfilesImgService} from "./profiles-img.service";
import {Chat} from "../model/chat";


@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor(private firestore: Firestore, private profilesImgService: ProfilesImgService) { }

  createChat(otherUser: Register): Observable<string>{
    const ref = collection(this.firestore, 'chats');
    return this.profilesImgService.currentUserProfile$.pipe(
      take(1),
      concatMap(user=> addDoc(ref,{
        userIds: [user?.id,otherUser?.id],
        users:[
          {
            firstName: user?.firstname ?? '',
            urlImage: otherUser?.urlImage ?? ''
          },
        ]
      })),
      map(ref => ref.id)
    )
  }

  get myChats$(): Observable<Chat[]>{
    const ref= collection(this.firestore, 'chats');
    return this.profilesImgService.currentUserProfile$.pipe(
      concatMap((user) =>{
        const myQuery = query(ref, where('userIds', 'array-contains', user?.id))
        return collectionData(myQuery, {idField: 'id'}).pipe(
          map((chats: any) => this.addChatNameAndPic(user?.id ?? '', chats as Chat[]))
        )
      })
    )
  }

  addChatNameAndPic(currentUserId: string, chats: Chat[]): Chat[]{
    chats.forEach((chat: Chat) => {
      const otherUserIndex =
        chat.userIds.indexOf(currentUserId ?? '') === 0 ? 1 : 0;
      const { firstname, urlImage } = chat.users[otherUserIndex];
      chat.chatName = firstname;
      chat.chatPic = urlImage;
    });

    return chats;
  }
}
