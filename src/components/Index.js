import React from 'react'
import Bezels from './Bezels'
import bg1 from "./bg.jpg"
import Home from './Home'
import SignIn from './SignIn'


const styles = {
    outerLayer: {
        background: "transparent",
        height: "100vh",
        overflow: "hidden",
        backgroundImage: `url(${bg1})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        alignItems: "center",
        alignContent: "center",
        position: "relative",
        width: "100vw",
    },
    innerLayer: {
        border: "solid black 4px",
        borderRadius: "10px",
        minHeight: "50vh",
    },
    middleLayer: {
        boxShadow: "2px 2px 030px -15px lightgrey",
        border: "solid #000 15px",
        borderRadius: "25px",
        maxWidth: "700px",
        width: "70%",
        margin: "auto",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
}



const Index = props => {

    React.useEffect(() => {

    }, [])

    return <>
        <Bezels>
            <Home />
        </Bezels>
    </>
}

export default Index;