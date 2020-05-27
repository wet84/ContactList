import React, { Component } from 'react'

const DELETE = "delete";

export default class OnDeleteItem extends Component {
    
    onDeleteClick = (e) => {
        e.stopPropagation();
        this.props.deleteItem(this.props.id);
    };

    render() {
        return (
            <button className="delete-button" onClick={this.onDeleteClick}>{DELETE}</button>  
        )
    }
}
