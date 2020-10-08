import React from 'react'

const styles = {
    top: {
        fontSize: "50px",
        fontWeight: "200",
    },
    bottom: {
        fontSize: "14px",
        fontWeight: "300",
        letterSpacing: "4px"
    }
}


const Figure = props => {

    return <div style={styles.container}>
        <div style={styles.top}>
            {props.top}
        </div>
        <div style={styles.bottom}>
            {props.bottom}
        </div>
    </div>
}



export default Figure;