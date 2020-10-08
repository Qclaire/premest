import React from 'react'
import FlexContainer from './FlexContainer'
import TextBlock from './TextBlock'
import bg from "./bg1.jpg"
import Figure from './Figures'


const styles = {
    outerLayer: {
        background: "transparent",
        height: "100vh",
        overflow: "hidden",
        backgroundImage: `url(${bg})`,
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
        border: "solid #545454 15px",
        borderRadius: "25px",
        width: "70%",
        margin: "auto",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    container: {
        background: "transparent",
        height: "70vh",
        position: "relative",
        margin: "auto"
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
        // width: "50px",
        // height: "20px",
        // padding: "20px 40px"
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
const Index = props => {
    const [location, setLocation] = React.useState(null);
    const [logginState, setLogginState] = React.useState(false);

    React.useEffect(() => {
        if (window.navigator.geolocation) {
            //setLocation(window.navigator.geolocation.getCurrentPosition(obj => obj.coords, console.log))
        }
    }, [])

    const submitForm = event => {
        event.preventDefault();
        setLogginState(!logginState)
    }

    return <div style={styles.outerLayer}>
        <input style={{ ...styles.logout, display: logginState ? "" : "nonec" }} type="button" value="Sign out" onClick={() => { setLogginState(false) }} />
        {logginState ?
            <div style={styles.middleLayer}>
                <div style={styles.innerLayer}>
                    <div style={styles.midLine}>
                        <div style={styles.container}>
                            <div style={styles.topDiv}>
                                <FlexContainer>
                                    <TextBlock data={{ bigText: "7:44", secondBiggText: "AM", smallText: "Friday, January 12, 2020" }} />
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

                        <div style={styles.btn}></div>
                    </div>
                </div>
            </div>
            :
            <form onSubmit={submitForm} style={styles.form}>
                <div>
                    <label style={styles.label}>Username: </label>
                    <input type="text" />
                </div>
                <div>
                    <label style={styles.label}>Password: </label>
                    <input type="password" />
                </div>
                <div>
                    <input style={styles.button} type="submit" value="Login" />
                </div>

                Click the button to see next page

            </form>
        }
    </div>
}

export default Index;