import React, { Component } from 'react'
import "./contactTable.css"
import UserTableItem from './ContactTableItem'

const TH_NAME = "Name";
const TH_SURNAME = "SurName";
const TH_TEL = "Mobile phone";

export default class ContactTable extends Component {
    
    renderBody () {
        const { contacts } = this.props;

        const rows = contacts.map((contact) => 
            <UserTableItem contact={contact} onDelete={this.props.deleteItem}/>
        );

        return (
            <tbody>
                { rows }
            </tbody>
        );
    }

    renderHeader () {
        return (
            <thead>
                <tr>
                    <th>{ TH_NAME }</th>
                    <th>{ TH_SURNAME }</th>
                    <th>{ TH_TEL }</th>
                    <th></th>
                </tr>
            </thead>
        );
    }

    render() {
        return (
            <table className="user-table">
                { this.renderHeader() }
                { this.renderBody() }
            </table>
        )
    }
}
