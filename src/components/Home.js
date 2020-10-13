import React from 'react'
import Figure from './Figures'
import FlexContainer from './FlexContainer'
import TextBlock from './TextBlock'


const styles = {

    container: {
        background: "transparent",
        height: "100%",
        position: "relative",
        margin: "auto",
        borderRadius: "5px"
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


}

const Home = props => {
    const [data, setData] = React.useState(null)

    const API_KEY = "80321912fccba716f04685bfbbc1486c";
    const endPoint = "80321912fccba716f04685bfbbc1486c";
    const URL = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=fetch:ip`

    React.useEffect(() => {
        fetch(URL).then(resp => resp.json()).then(data => {

            const current = data["current"];
            const location = data["location"];
            if (current)
                setData({
                    humidity: current["humidiy"],
                    temperature: current["temperature"],
                    country: location["country"],
                })


        })
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
                <TextBlock data={{ bigText: "Accra", smallText: data?.country }} />
            </FlexContainer>
        </div>
        <div style={styles.bottomDiv}>
            <Figure top={`${data?.temperature || 30}C`} bottom={"Temperature"} />
            <Figure top={`${data?.humidity || 50}%`} bottom={"Humidity"} />

        </div>
    </div>

}

export default Home;