import React from 'react';

const InputSimples = ({value, label, type, onChange, error}) => (
    <div className="Input-Simples flex vertical">
        {label && (<label>{label}</label>)}
        {error && (<small className="small-danger">{error}</small>)}
        <input 
        type={type} 
        value={value} 
        onChange={onChange}
        className={`${error ? "input-error" : ""}`}/>
        
    </div>
)

export default InputSimples;