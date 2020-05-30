import React, { Component } from 'react'
import OnDeleteItem from './OnDeleteItem';

export default class ContactTableItem extends Component {
    
    render() {
        const { contact, onDelete } = this.props;
        
        return (
            <tr key={contact.contactId}>
                <td>{ contact.name }</td>
                <td>{ contact.surname }</td>
                <td>{ contact.tel }</td>
                <td>
                    <OnDeleteItem deleteItem={onDelete} id={contact.contactId}/>
                </td>
            </tr>
        )
    }
}
