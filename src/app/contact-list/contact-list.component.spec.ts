import { Contact } from './../interafaces';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContactListComponent } from './contact-list.component';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

 

  beforeEach(waitForAsync(() => {
     TestBed.configureTestingModule({
      declarations: [ContactListComponent]
    }).compileComponents()
  }))

  beforeEach( () => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the component should be initialized', () => {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(ContactListComponent);
    expect(component.contacts.length).toBe(0);
  });

  it('the load method should initialize the attribute of contacts', () => {
   
    //BEFORE CALLING LOAD CONTACT LENGTH SHOULD BE 0
    expect(component.contacts.length).toBe(0);
    component.load();
    //CALL THE LOAD FUNCTION, THEN CHECK TO SEE THAT LENGTH IS 1
    expect(component.contacts.length).toBe(1);
  });

  it('the Create method should add a contact to contacts', () => {
   
    //BEFORE CALLING LOAD CONTACT LENGTH SHOULD BE 0
    expect(component.contacts.length).toBe(0);
    const contact: Contact = {name: "Jose", phone: 999999, };
    component.create(contact);
    //CALL THE LOAD FUNCTION, THEN CHECK TO SEE THAT LENGTH IS 1
    expect(component.contacts.length).toBe(1);
  });

});
