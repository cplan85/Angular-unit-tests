import { Component, OnInit } from '@angular/core';
import { Contact } from '../interafaces';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {


  contacts: Contact[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  load() {
    this.contacts = [
      {id:1, name: "Luis", phone: 9999999999 }
    ]
  }

  create(contactToCreate: Contact ) {
    this.contacts.push( {id:2, name: contactToCreate.name, phone: contactToCreate.phone })
  }
}
