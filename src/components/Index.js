import React from 'react'
import { Link } from 'react-router-dom';
import Home from './Content/Home';

const items = [{
    title: "Home",
    path: "/articles",
},
{
    title: "Create article",
    path: "/new-article"
}
]

const Index = props => {

    return <div style={{ background: "#fffdef", height: "100vh" }}>
        <div style={{ background: "linear-gradient(to right, #cc2b5e, #753a88)", width: "100%", position: "absolute", top: "0" }}>
            <ul style={{ display: "flex", fontWeight: "600", fontSize: "25px", listStyleType: "none", alignContent: "space-evenly", alignItems: "center" }}>
                {items.map(item => {
                    return <a style={{ textDecoration: "none", padding: "5px", color: "#FFF" }} href={item.path}><li key={item.title}>{item.title}</li></a>
                })}
            </ul>
        </div>
        <div style={{ position: "relative", top: "90px", width: "50%", margin: "0 auto" }}>
            {props.children}
        </div>
    </div>
}

export default Index;