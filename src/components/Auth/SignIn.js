import React from 'react'


const SignIn = props => {
    const [data, setData] = React.useState({ email: "", password: "" })

    const handleChange = event => {
        event.preventDefault();
        const val = event.target.value;
        const id = event.target.id;
        setData({ ...data, id: val })
    }

    const handleSubmit = event => {
        event.preventDefault();
        const emailAddress = data.email;
        const password = data.password;
        //verification here
    }
    return <div>
        <form>
            <div>
                <label>
                    Email:
                     <input type="email" id="email" onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Email:
                     <input type="password" id="password" onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Email:
                     <input type="Submit" value="Sign in" />
                </label>
            </div>

        </form>
    </div>
}