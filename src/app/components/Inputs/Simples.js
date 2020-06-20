import React from 'react';

const InputSimples = ({value, label, type, onChange}) => (
    <div className="Input-Simples">
        <label>{label}</label>
        <input type={type} value={value} onChange={onChange}/>
    </div>
)

export default InputSimples;