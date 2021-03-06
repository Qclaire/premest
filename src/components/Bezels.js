import React from 'react'
import bg from "./bg1.jpg"





const styles = {

    innerLayer: {
        border: "solid black 4px",
        borderRadius: "10px",
        minHeight: "50vh",
        maxHeight: "100%",
        height: "98.2%"
    },
    middleLayer: {
        boxShadow: "2px 2px 030px -15px lightgrey",
        border: "solid darkgrey 15px",
        borderRadius: "25px",
        maxWidth: "900px",
        backgroundSize: "100% 100%",
        backgroundImage: `url(${bg})`,
        height: "80vh",
        maxHeight: "550px",
        width: "70%",
        margin: "auto",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
}

const Bezels = props => {

    return <div style={styles.middleLayer}>
        <div style={styles.innerLayer}>
            {props.children}
        </div>
    </div>
}


export default Bezels;