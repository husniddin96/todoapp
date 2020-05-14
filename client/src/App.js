import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Login from './components/pages/Login';
import axios from 'axios';
import config from './config.js';
import './App.css';
import Sort from './components/Sort';

class App extends Component {
  state = {
    todos: [],
    // [{ id: 1, title: 'A' }, { id: 2, title: 'B' }, { id: 3, title: 'C' }]
    sort: 1,
    access: false,
    incorrectCredentials: false
  };

  componentDidMount() {
    axios
      .get(`${config.BASE_URL}/todo`)
      .then(res => {
        this.setState({ todos: res.data.todos })
      });
  }


  login = (login, password) => {
    axios.post(`${config.BASE_URL}/login`, { login, password })
      .then(res => {
        res.data.success ? this.setState({ access: res.data.success }) : this.setState({ incorrectCredentials: true })
      }
      )
  }

  // Toggle Complete
  markComplete = id => {
    const todo = this.state.todos.filter(t => t._id == id)[0];
    axios.put(`${config.BASE_URL}/todo/${id}`, { isCompleted: !todo.isCompleted })
      .then(res => this.setState({ todos: res.data.todos }))
  };

  // Delete Todo
  delTodo = id => {
    axios.delete(`${config.BASE_URL}/todo/${id}`)
      .then(res =>
        this.setState({
          todos: res.data.todos
        })
      )
  };

  // Add Todo
  addTodo = title => {
    this.setState({
      sort: this.state.sort,
    });

    axios
      .post(`${config.BASE_URL}/todo`, {
        title
      })
      .then(res => this.setState({
        todos: res.data.todos
      }));
  };

  changeSort = () => {
    this.setState({
      sort: this.state.sort * -1,
    });

    axios
      .get(`${config.BASE_URL}/todo?sort=${this.state.sort}`)
      .then(res => this.setState({
        todos: res.data.todos
      })
      )
  }

  editTodo = async (id, todo) => {
    await axios.put(`${config.BASE_URL}/todo/${id}`, todo)
      .then(async res => await this.setState({ todos: res.data.todos }));
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/login' render={props => <Login login={this.login} access={this.state.access} incorrectCredentials={this.state.incorrectCredentials} />} />
          <Route
            exact
            path="/main"
            render={props => (
              <React.Fragment>
                <div className="App" style={{ paddingTop: '5%', marginLeft: "20%", marginRight: "20%" }}>
                  <div className="container">
                    <Header />
                    <AddTodo addTodo={this.addTodo} />
                    <Divider />
                    <Sort sort={this.state.sort} changeSort={this.changeSort} />
                    <Todos
                      todos={this.state.todos}
                      markComplete={this.markComplete}
                      editTodo={this.editTodo}
                      delTodo={this.delTodo}
                    />
                  </div>
                </div>
              </React.Fragment>
            )}
          />
          <Redirect from="/" to="/login" />
        </Switch>
      </Router>
    );
  }
}

export default App;
