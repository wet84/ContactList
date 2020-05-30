import React, { Component } from 'react';
import './contactForm.css';

const TITLE_FORM = "Fill in all the fields on the form";

export default class ContactForm extends Component {
    
    state = {
        name:'',
        surname:'',
        tel:'',
        validName: false,
        validSurName: false,
        validTel: false,
        formButtonState: false,
        isNumber: false,
    };

    validateInputName(value){
        //any validating
        return value.length > 0;
    };

    validateInputSurName(value){
         //any validating
        return value.length > 0;
    };

    validateInputTel(value){
         //any validating
        return value.length > 0;
    };

    handleInputName = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const validName = this.validateInputName(value)

        this.setState({
            [name]: value,
            validName: validName,
        });
    };

    handleInputSurName = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const validSurName = this.validateInputSurName(value)

        this.setState({
            [name]: value,
            validSurName: validSurName,
        });
    };

    handleInputTel = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const validTel = this.validateInputTel(value)

        this.setState({
            [name]: value,
            validTel: validTel,
        });
    };

    onFormSubmit = (e) => {
        const {name, surname, tel} = this.state
        e.preventDefault();
        
        this.props.addNewContact({
            name: name,
            surname: surname,
            tel: tel,
        });

        this.setState({
            name:'',
            surname:'',
            tel:'',
            validName: false,
            validSurName: false,
            validTel: false,
        });

        e.target.reset();
    };

    render() {
        const { toggle } = this.props;
        const { validName, validSurName, validTel } = this.state;

        return (
            <div className={toggle ? "hide-form" : "show-form"}>
                <div className="user-form-wrapper">
                    <h2>{TITLE_FORM}</h2>
                    <form className="user-form" onSubmit={this.onFormSubmit}>
                        <input
                            type="text"
                            name="name"
                            autoComplete="off"
                            placeholder="Your name"
                            onChange={this.handleInputName}
                            className={this.state.validName ? '' : 'error'}
                        />
                        <input
                            type="text"
                            name="surname"
                            autoComplete="off"
                            placeholder="Your surname"
                            onChange={this.handleInputSurName}
                            className={this.state.validSurName ? '' : 'error'}
                        />
                        <input
                            type="tel"
                            name="tel"
                            autoComplete="off"
                            placeholder="Your telephone number"
                            onChange={this.handleInputTel}
                            className={this.state.validTel ? '' : 'error'}
                        />
                        <input type="submit" value="Add contact" className={( validName & validSurName & validTel) ? '' : 'disable-button'}/>
                    </form>
                </div>
            </div>
        );
    }
}
