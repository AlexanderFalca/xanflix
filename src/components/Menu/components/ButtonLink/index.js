import React from 'react';

function ButtonLink(props){
    // props => { className: "Any path", href: "/"}
    return(
        <a  href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}
export default ButtonLink;