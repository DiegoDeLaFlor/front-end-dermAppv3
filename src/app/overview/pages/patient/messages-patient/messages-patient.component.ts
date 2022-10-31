import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {ProfilesImgService} from "../../../services/profiles-img.service";
import {combineLatest, map, startWith} from "rxjs";
import {user} from "@angular/fire/auth";
import {Register} from "../../../model/register";
import {ChatsService} from "../../../services/chats.service";

@Component({
  selector: 'app-messages-patient',
  templateUrl: './messages-patient.component.html',
  styleUrls: ['./messages-patient.component.css']
})
export class MessagesPatientComponent implements OnInit {

  user$ = this.usersService.currentUserProfile$;
  users$ = this.usersService.allUsers$;
  searchControl = new FormControl('');

  /*users$ = combineLatest([
    this.usersService.allUsers$, this.user$,
    this.searchControl.valueChanges.pipe(startWith('')),
  ]).pipe(
    map(([users, searchString]) => {
      return users.filter((u) =>
        u.firstname?.toLowerCase().includes(searchString.toLowerCase()) && u.id ! == user?.id
      );
    })
  );
  */

  myChats$ = this.chatsService.myChats$;

  constructor(private usersService: ProfilesImgService, private chatsService: ChatsService ) { }

  ngOnInit(): void {}

  createChat(otherUser: Register){
    this.chatsService.createChat(otherUser).subscribe();
  }
}
