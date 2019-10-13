import React from 'react';



export const Input: React.FC<any> = (props: any) => {
    const error =
        <span  className={props.config.valid && !props.config.valid.value? 'invalid' : 'validate'}>
                    {props.config.valid.message}</span>;
    return (
            <div className={props.config.className}>
                <input
                    {...props.config.input}
                    className={props.config.valid && !props.config.valid.value && props.config.touched ? 'invalid' : 'validate'}
                    onChange={props.changed}
                    value={props.config.value}/>
                <label htmlFor={props.config.input.id}>{props.config.inputLabel}</label>
                {error}
            </div>

    );
};


