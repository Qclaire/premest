import React from 'react'
import Figure from './Figures'
import FlexContainer from './FlexContainer'
import TextBlock from './TextBlock'
import bg from "./bg1.jpg"

const styles = {

    container: {
        background: "transparent",
        backgroundSize: "100% 100%",
        backgroundImage: `url(${bg})`,
        height: "100.5%",
        position: "relative",
        margin: "auto",
        borderRadius: "10px"
    },
    topDiv: {

    },
    bottomDiv: {
        background: "transparent",
        display: "flex",
        padding: "20px",
        justifyContent: "space-evenly",
        alignItems: "center",
        position: "absolute",
        width: "100%",
        bottom: "40px",
    },
    btn: {
        borderRadius: "100px",
        background: "rgba(0,0,0, 0.5)",
        width: "40px",
        height: "40px",
        margin: "5px auto",
        position: "absolute",
        bottom: "-05%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    },
    search: {
        margin: "auto auto",
        position: "absolute",
        bottom: "20%",
        right: "35%",
        width: "30%",
        height: "20%"
    },
    input: {
        width: "100%",
    },
    label: {
        display: "block",
        margin: "5px",
    },
    button: {
        background: "",
        margin: "5px"
    },
    form: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    },
    logout: {
        position: "absolute",
        bottom: "3%",
        right: "3%"
    }

}

const Home = props => {
    const [location, setLocation] = React.useState(null)

    React.useEffect(() => {
        fetch("http://example.com/movies.json").then(resp => console.log(resp))
    }, [])



    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const date = new Date();
    const hr = date.getHours();
    const time = `${hr > 12 ? hr - 12 : hr < 10 ? `0${hr}` : hr}:${date.getMinutes()}`;
    const d = `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;




    return <div style={styles.container}>
        <div style={styles.topDiv}>
            <FlexContainer>
                <TextBlock data={{ bigText: time, secondBiggText: `${hr > 11 ? "PM" : "AM"}`, smallText: d }} />
                <TextBlock data={{ bigText: "Accra", smallText: "Ghana" }} />
            </FlexContainer>
        </div>
        <div style={styles.search}><input placeholder="Search for a place" type="text" style={styles.input} /></div>
        <div style={styles.bottomDiv}>
            <Figure top={"27C"} bottom={"Temperature"} />
            <Figure top={"50%"} bottom={"Humidity"} />
            <Figure top={"20"} bottom={"Humidity"} />

        </div>
    </div>

}

export default Home;