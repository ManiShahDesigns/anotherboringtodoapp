import React from "react";
import "./addtodo.css";

class AddTodo extends React.Component {
  constructor() {
    super();

    this.state = {
      todo: ""
    };
  }
  render() {
    return (
      <div className="addTodoContainer">
        <form onSubmit={e => this.submitTodo(e)}>
          <input
            className="input"
            id="addTodoInput"
            onChange={e => this.updateInput(e)}
            type="text"
            placeholder="Type in your todos..."
          />
          <button className="button" type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
  }

  updateInput = e => {
    this.setState({ todo: e.target.value });
  };

  submitTodo = e => {
    e.preventDefault();
    this.props.addTodoFunc(this.state.todo);
    document.getElementById("addTodoInput").value = "";
  };
}

export default AddTodo;
