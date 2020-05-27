import React, { Component } from 'react'
import OnDeleteItem from './OnDeleteItem';

export default class UserTableItem extends Component {

    renderBody () {
        const { contacts, onDelete } = this.props;

        const rows = contacts.map((contact) => 
            <tr key={contact.contactId}>
                <td>{ contact.name }</td>
                <td>{ contact.surname }</td>
                <td>{ contact.tel }</td>
                <td>
                    <OnDeleteItem deleteItem={onDelete} id={contact.contactId}/>
                </td>
            </tr>
        );

        return (
            <tbody>
                { rows }
            </tbody>
        );
    }
    
    render() {
        return this.renderBody();
    }
}
