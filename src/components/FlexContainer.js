import React from 'react'


const styles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "transparent",
}

const FlexContainer = props => {

    return <div style={styles}>
        {props.children}
    </div>
}


export default FlexContainer;