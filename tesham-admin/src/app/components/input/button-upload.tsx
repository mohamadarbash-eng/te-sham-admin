import React from 'react';

const ButtonUpload = (props: any) => {
    let fileAlias: any;
    return (
        <div className={props.config.className}>
            <input {...props.config.button}
                onChange={props.changedFile}
                   ref={fileInput => fileAlias = fileInput}/>
            <button className={"waves-effect waves-light btn"}
                    onClick={() => fileAlias.click()}>
                {props.config.buttonLabel}
            </button>
        </div>
    )
}
export default ButtonUpload;
