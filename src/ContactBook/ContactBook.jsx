import React, { Component } from 'react'
import ContactTable from './ContactTable/ContactTable'
import ContactForm from './ContactForm/ContactForm'
import './contactBook.css';

const MAIN_TITLE = "Contact Book";
const SHOW = "show contact form";
const HIDE = "hide contact form";

export default class ContactBook extends Component {

    state = {
        usersList: [
            { contactId: 1, name: 'Vitalii', surname: 'SuperVegetable', tel: "15151515" },
            { contactId: 2, name: 'Nik', surname: 'Superman', tel: "16151517" },
            { contactId: 3, name: 'Kate', surname: 'Superwomen', tel: "17151519" },
        ],
        toggleVisible: true,
    };

    addNewContact = (newContact) => {
        newContact.contactId = Date.now();
        this.setState({
            usersList: [...this.state.usersList, newContact],
        });
    };

    deleteContact = (contactId) => {
        this.setState({
            usersList: this.state.usersList.filter((item) => item.contactId !== contactId),
        });
    };

    toggleVisibleForm = () => {
        this.setState({
            toggleVisible: !this.state.toggleVisible
        })
    }

    render() {
        return (
            <div className="contact-book">
                <h1>{MAIN_TITLE}</h1>
                <ContactTable contacts={this.state.usersList} deleteItem={this.deleteContact}/>
                <ContactForm toggle={this.state.toggleVisible} addNewContact={this.addNewContact}/>
                <button className="toggle-button" onClick={this.toggleVisibleForm}>{this.state.toggleVisible ? SHOW : HIDE }</button>
            </div>
        )
    }
}
