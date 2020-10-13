import React from 'react'

const styles = {
    container: {
        position: "relative",
        height: "100%",
        width: "100%",
        margin: "auto auto",
        alignItems: "center",
        alignContent: "center",

    },
    searchInput: {
        width: "100%",
        alignItems: "center",
        alignContent: "center",
        margin: "auto auto"
    },
    input: {
        width: "50%",
        alignItems: "center",
        alignContent: "center",
        margin: "0 auto",
        position: "relative",
        left: "50%",
        transform: "translate(-50%, 5%)"
    },
    resultContainer: {
        position: "absolute",
        // background: "black",
        top: "35px",
        zIndex: "500",
        height: "50%",
        margin: "auto auto",
        left: "50%",
        minWidth: "54%",
        transform: "translate(-50%, 0)",
    }

}

const Search = props => {
    const submitQuery = event => {
        const key = event.keyCode;
        if (key === 13) {
            //do something
        }
    }
    return <div style={styles.container}>
        <div style={styles.searchInput}>
            <input onKeyUp={submitQuery} style={styles.input} type="text" />
        </div>
        <div style={styles.resultContainer}>
            <h4>Search reults will appear here</h4>
        </div>
    </div>
}

export default Search;