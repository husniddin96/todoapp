import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Login from './components/pages/Login';
import uuid from 'uuid';
import axios from 'axios';

import './App.css';
import Sort from './components/Sort';

class App extends Component {
  state = {
    todos: [{ id: 1, title: 'A' }, { id: 2, title: 'B' }, { id: 3, title: 'C' }],
    sort: -1
  };

  componentDidMount() {
    axios
      .get('http://localhost:3001/todo')
      .then(res => {console.log(res);
       this.setState({ todos: res.data })});
  }

  // Toggle Complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // Delete Todo
  delTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };

  // Add Todo
  addTodo = title => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      })
      .then(res => {
        res.data.id = uuid.v4();
        this.setState({ todos: [...this.state.todos, res.data] });
      });
  };

  changeSort = async () => {
    const todos = await axios.get('https://jsonplaceholder.typicode.com/todos');
    this.setState({
      sort: !this.state.sort,
      todos: [...this.state.todos].sort()
    })

  }

  editTodo = (id, todo) => {
    console.log('EDIT TODO WORKED!', { id, todo });

    this.setState({
      todos: this.state.todos.map(t => {
        if (t.id === id) {
          t = todo;
        }
        return t;
      })
    })
  }

  render() {
    return (
      // <BrowserRouter>
      //   <Switch>
      //     <Route path='/main' render={props => <Main {...props} />} />
      //   </Switch>
      // </BrowserRouter>

      <Router>
        <Switch>

          <Route path='/login' render={props => <Login {...props} />} />

          <Route
            path="/main"
            render={props => (
              <React.Fragment>
                <div className="App" style={{ paddingTop: '5%', marginLeft: "20%", marginRight: "20%" }}>
                  <div className="container">

                    <Header />
                    <AddTodo addTodo={this.addTodo}/>
                    <Divider />
                    <Sort  sort={this.state.sort} changeSort={this.changeSort} />
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



    // return (
    //   <Router>
    //     <div className="App" style={{ paddingTop: '5%', marginLeft: "20%", marginRight:  "20%" }}>
    //       <div className="container">
    //         <Header />
    //         <Route
    //           exact
    //           path="/"
    //           render={props => (
    //             <React.Fragment>
    //               <AddTodo addTodo={this.addTodo} />
    //               <Todos
    //                 todos={this.state.todos}
    //                 markComplete={this.markComplete}
    //                 delTodo={this.delTodo}
    //               />
    //             </React.Fragment>
    //           )}
    //         />
    //         <Route path="/about" component={About} />
    //       </div>
    //     </div>
    //   </Router>
    // );
  }
}

export default App;
