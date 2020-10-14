import React from 'react'
import { Link } from "react-router-dom"
import data from "../Data/data.js"



const Home = props => {
    //const [data, setData] = React.useState(null);
    React.useEffect(() => {
        //fetch("../Data/data.json")

        // .then(data => console.log(data.json()))
    }, [])
    return <div style={{ padding: "0 15%" }}>
        {
            data ? data.map((item, index) => {
                return <Link key={item.title} to={{ pathname: `/articles/details`, state: item }}><h4>{item?.title}</h4></Link>
            }) :
                <h2>There are no articles yet...</h2>
        }
    </div>
}


export default Home;