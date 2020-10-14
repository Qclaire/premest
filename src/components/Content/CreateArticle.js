import React from 'react'


const CreateArticle = props => {
    const [data, setData] = React.useState(null)

    const handleChange = event => {
        event.preventDefault();
        setData({ ...data, [event.target.id]: event.target.value });
    }

    const addArticle = event => {
        event.preventDefault();
    }
    return <form onSubmit={addArticle}>
        <div style={{ width: "50%", margin: "15px 0" }}>
            <label>Article Title</label>
            <input style={{ width: "100%", }} id="title" type="text" onChange={handleChange} placeholder="Enter a title for the article" />
        </div>

        <div style={{ width: "100%", margin: "15px 0" }}>
            <label>Article Content</label>
            <textarea placeholder="Please enter the body of your article" id="body" onChange={handleChange} rows="20" cols="100" />
        </div>
        <div>
            <input type="submit" value="Add article" />
        </div>

    </form>
}


export default CreateArticle;