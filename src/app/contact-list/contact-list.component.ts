import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: {}[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  load() {
    this.contacts = [
      {id:1, name: "Luis", phone: 9999999999 }
    ]
  }
}
