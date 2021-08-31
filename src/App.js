import React from "react";
import './App.css';
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

const mapDispatchToProps =  {}

class App extends React.Component {
  render() {
    return (
      <section className="todoapp">
        <Header/>
        { this.props.todos.length > 0 && <TodoList/> }
        { this.props.todos.length > 0 && <Footer/> }
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
