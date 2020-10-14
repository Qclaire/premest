import React from 'react'
import { useLocation } from "react-router-dom"


const Details = props => {
    const [data, setData] = React.useState(null)

    const location = useLocation();

    React.useEffect(() => {
        setData(location.state ? { ...location.state, votes: Number(localStorage.getItem(location.state.title)) || 0 } : null);


    }, [])

    const changeVotes = value => event => {
        const votes = localStorage.getItem(data.title) || 0;
        localStorage.setItem(data.title, votes + value);
        setData({ ...data, votes: data.votes + value })

    }
    return <div style={{ padding: "0% 0%", background: "#fffddf" }}>{
        data ?
            <div>
                <h3>
                    {data.title}
                </h3>
                <p />
                <article>
                    {data.body}
                </article>
                <p />
                <div style={{ display: "flex", alignItems: "center", alignContent: "space-between" }}>
                    <input onClick={changeVotes(-1)} value="Dislike" type="button" />
                    <h3>{data.votes}</h3>
                    <input onClick={changeVotes(1)} value="Like" type="button" />
                </div>
            </div>
            : <h5>
                sorry the article seems to have no content
        </h5>
    }
    </div>
}

export default Details;