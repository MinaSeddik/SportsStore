import {ErrorHandler, Injectable, NgZone} from "@angular/core";
import {MessageService} from "../services/message.service";
import {Message} from "./Message";

@Injectable({
  providedIn: 'root'
})
export class MessageErrorHandler implements ErrorHandler {

  constructor(private messageService: MessageService, private ngZone: NgZone) {
  }

  handleError(error) {
    let msg = error instanceof Error ? error.message : error.toString();
    this.ngZone.run(() => this.messageService
      .reportMessage(new Message(msg, true)), 0);
  }
}
