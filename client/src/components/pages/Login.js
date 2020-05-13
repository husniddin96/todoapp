import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class SimpleForm extends Component {
    state = {
        sercret: {
            login: 'johndoe',
            password: 'jdoe123'
        },
        login: "",
        password: "",
        access: false,
        incorrectCredentials: false
    };

    componentDidMount() {
    }

    componentWillUnmount() {
    }


    handleSubmit = event => {
        console.log(event);
        const { login, password } = this.state.sercret;

        if (this.state.login === login && this.state.password === password) {
            this.setState({ access: true });
            console.log('RIGHT!!!')

        } else {

            this.setState({
                incorrectCredentials: true
            });
            event.prevenDefault();

        }
    };

    handleChange = event => {
        event.persist();
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state)
    };

    render() {
        if (this.state.access) {
            return (<Redirect to="/main" />)
        }
        return (
            <div style={{ marginTop: "40%" }}>
                <div style={{ position: "absolute", width: "20%", border: "1px solid black", left: "40%", top: "20%" }}>
                    <div style={{ textAlign: "center" }}>
                        <label style={{}}>Login</label>
                    </div>
                    {
                        this.state.incorrectCredentials ?
                            <div style={{ textAlign: "center" }}>
                                <label style={{ color: "red" }}>Incorrect login or password</label>
                            </div>
                            : ''
                    }
                    <br />
                    <div style={{ textAlign: "center" }}>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div style={{ textAlign: "center" }}>
                                <div>
                                    <input name="login" type="text" placeholder="login" onChange={this.handleChange.bind(this)} />
                                </div>
                                <br />
                                <div>
                                    <input name="password" type="password" placeholder="password" onChange={this.handleChange.bind(this)} />
                                </div>
                            </div>
                            <br />
                            <div>
                                <input type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const divStyle = {
    height: "100%",
    width: "100%",
    backgroundColor: "green"
}
export default SimpleForm;
