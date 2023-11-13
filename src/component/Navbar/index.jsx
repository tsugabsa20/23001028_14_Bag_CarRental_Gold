import "./style.css";
import logo from "../../assets/logo.png"
import { Component, useState } from "react";
import { render } from "react-dom";


class Navbar extends Component {
    state = {clicked: false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
    return (
    <div className="container-navbar-bg">
        <div className="container-navbar-head">
            <div className="container-navbar-left">
                <img src={logo} alt="logo"/>
            </div>
            <div className="container-navbar-right">
                <div onClick={this.handleClick} className="menu-icon">
                <i className={this.state.clicked ? "fa fa-times" : "fas fa-bars"}></i>
                </div>
                    <div onClick={this.handleClick} className ={this.state.clicked ?"menu-active":"menu"}>
                    <p>X</p>
                    <h5>BCR</h5>
                    <a href="#">Our Services</a>
                    <a href="#">Why Us</a>
                    <a href="#">Testimonial</a>
                    <a href="#">FAQ</a>
                </div> 
                <div className ="list-menu">
                    <a href="#OurServices">Our Services</a>
                    <a href="#WhyUs">Why Us</a>
                    <a href="#Testimony">Testimonial</a>
                    <a href="#FAQ">FAQ</a>
                </div>
            </div> 
        </div> 
    </div> 
    )
}}
export default Navbar