import React from 'react'

const styles = {}

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

        </div>
    </div>
}

export default Search;