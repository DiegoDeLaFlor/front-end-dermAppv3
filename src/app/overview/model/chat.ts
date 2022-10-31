import { Timestamp } from '@angular/fire/firestore';
import {Register} from "./register";


export interface Chat {
  id: string;
  lastMessage?: string;
  lastMessageDate?: Date & Timestamp;
  userIds: string[];
  users: Register[];

  // Not stored, only for display
  chatPic?: string;
  chatName?: string;
}

export interface Message {
  text: string;
  senderId: string;
  sentDate: Date & Timestamp;
}
