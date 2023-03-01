import React from "react"

const Helmet = (props) => {

    document.title = 'Employee app -' + props.title
    return (<dev className="w-100">{props.children}</dev>)
}

export default Helmet;