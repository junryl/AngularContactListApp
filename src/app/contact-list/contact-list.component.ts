import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service'

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [ContactService]
})
export class ContactListComponent implements OnInit {

  contactList:Array<object> = [];

  displayedColumns: string[] = ['firstName', 'lastName','company', 'email', 'phone', 'address'];

  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
    this.contactList = this.contactService.GetContactList().slice();
    console.log('contactList',this.contactList);
  }

}
