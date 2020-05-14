import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class SimpleForm extends Component {
    state = {
        login: "",
        password: "",
        incorrectCredentials: false
    };

    componentDidUpdate() {

    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };


    render() {

        return (
            <div style={{ marginTop: "40%" }}>
                <div style={{ position: "absolute", width: "20%", border: "1px solid black", left: "40%", top: "20%" }}>
                    <div style={{ textAlign: "center" }}>
                        <label style={{}}>Login</label>
                    </div>
                    {
                        this.props.incorrectCredentials ?
                            <div style={{ textAlign: "center" }}>
                                <label style={{ color: "red" }}>Incorrect login or password</label>
                            </div>
                            : ''
                    }
                    <br />
                    <div style={{ textAlign: "center" }}>
                        <form onSubmit={this.props.login.bind(this, this.state.login, this.state.password)}>
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
                                {/* <Link className="btn" to={"/search/"+this.state.text} onClick={this.handleOnClick}>Search!</Link> */}

                                {/* <input type="submit" /> */}
                                <button onMouseOver={this.props.login.bind(this, this.state.login, this.state.password)}><a href={this.props.access ? "/main" : '/login'}>Submit</a></button>
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
