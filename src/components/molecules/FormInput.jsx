import React from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import "./FormInput.css";

function FormInput(props) {
    return (
        <div id="Form_Input">
            <Label text={props.label} />
            <Input
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                name={props.name}
            />
        </div>
    );
}

export default FormInput;
