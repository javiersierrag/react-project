import "./Form.css";
import React, { useState } from "react";
import { setMobile } from "react-phone-number-input";
import { setMessage } from "react-phone-number-input";
import {mobile} from "react-phone-number-input";
import {message} from "react-phone-number-input";

const Form = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, age, email);
    };
    
    return (
        <form>
            <div>
            <h3>Enjoyed the friendly service!</h3>
            </div>
            <div>
            <label>Your name</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            </div>
            <div>
            <label>Your email address</label>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div>
            <label>Mobile number</label>
            <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
            />
            </div>
            <div>
            <label>How can we help you?</label>
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            </div>
            <button onClick={handleSubmit}>SEND MESSAGE</button>
        </form>
    );
    }

export default Form;