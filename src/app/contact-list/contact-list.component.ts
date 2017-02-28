import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact: Object = {};
  name: string;
  email: string;
  phoneNumber: string;
  image: string;

  constructor() {}

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(){
    this.contacts.push(this.newContact);
    console.log("Add contact has been called");
  }
}
