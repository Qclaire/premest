import React from 'react'



const styles = {
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

}


const SignIn = props => {

    const submitForm = event => {
        event.preventDefault();
    }

    return <form onSubmit={submitForm} style={styles.form}>
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

export default SignIn;