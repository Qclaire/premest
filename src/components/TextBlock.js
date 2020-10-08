import React from 'react'


const styles = {
    container: {
        padding: "20px",
    },
    bigText: {
        fontSize: "40px",
        fontWeight: "200",
    },
    secondBiggText: {
        fontSize: "25px",
    },
    smallText: {
        fontSize: "18px",
        fontWeight: "200",
        float: "right"
    }

}

const TextBlock = props => {

    const data = props.data;

    return <div style={styles.container}>
        <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
            <div style={styles.bigText}>
                {data.bigText}
            </div>
            <div style={styles.secondBiggText}>
                {data.secondBiggText}
            </div>
        </div>

        <div style={styles.smallText}>
            {data.smallText}
        </div>

    </div>
}

export default TextBlock;