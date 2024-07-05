import {Component} from '@angular/core';
import {Message} from "../../model/Message";
import {MessageService} from "../../services/message.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-my-message',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './my-message.component.html',
  styleUrl: './my-message.component.css'
})
export class MyMessageComponent {

  lastMessage: Message;

  constructor(messageService: MessageService) {
    messageService.messages.subscribe(m => this.lastMessage = m);
  }
}
