import React from "react";
function HeaderItem(props){
    return(
        <a className="header-item" href={props.href}>{props.title}</a>
    );
}
export default HeaderItem;