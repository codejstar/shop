import React from 'react'
import {FormInputLabel, Input, Group } from './form-input.styles.jsx';
const FormInput = ({...otherProps}) => {
    return (
        <Group>
         <Input {...otherProps}/>
        {this.props.label && (
         <FormInputLabel shrink={otherProps.value.length}>{this.props.label}</FormInputLabel>
        )}
         </Group>
    );
}

export default FormInput;