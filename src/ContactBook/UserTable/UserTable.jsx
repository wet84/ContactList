import React, { Component } from 'react'
import "./userTable.css"
import UserTableItem from './UserTableItem'

const TH_NAME = "Name";
const TH_SURNAME = "SurName";
const TH_TEL = "Mobile phone";

export default class UserTable extends Component {
    
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
                <UserTableItem contacts={this.props.contacts} onDelete={this.props.deleteItem}/>
            </table>
        )
    }
}
