import {Injectable} from '@angular/core';
import {Message} from "../model/Message";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private subject = new Subject<Message>();

  reportMessage(msg: Message) {
    this.subject.next(msg);
  }

  get messages(): Observable<Message> {
    return this.subject;
  }
}
