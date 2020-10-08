import React from 'react'
import FlexContainer from './FlexContainer'
import TextBlock from './TextBlock'
import bg from "./bg1.jpg"
import Figure from './Figures'


const styles = {
    container: {
        height: "100vh",
        maxWidth: "100vw",
        overflow: "hidden",
        backgroundImage: `url(${bg})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
    },
    topDiv: {
        height: "70vh",
        width: "100vw",
    },
    bottomDiv: {
        background: "transparent",
        height: "",
        width: "100vw",
        padding: "20px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",

    },

}
const Index = props => {
    const [location, setLocation] = React.useState(null);

    React.useEffect(() => {
        if (window.navigator.geolocation) {
            setLocation(window.navigator.geolocation.getCurrentPosition(obj => obj.coords, console.log))
        }
    }, [])

    return <div style={styles.container}>
        <div style={styles.topDiv}>
            <FlexContainer>
                <TextBlock data={{ bigText: "7:44", secondBiggText: "AM", smallText: "Friday, January 12, 2020" }} />
                <TextBlock data={{ bigText: "Accra", smallText: "Ghana" }} />
            </FlexContainer>
        </div>
        <div style={styles.bottomDiv}>

            <Figure top={"27C"} bottom={"Temperature"} />
            <Figure top={"50%"} bottom={"Humidity"} />
            <Figure top={"20"} bottom={"Humidity"} />
            <Figure top={"20"} bottom={"Humidity"} />


        </div>
    </div>
}

export default Index;