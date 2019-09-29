import React from "react";
import TodoItem from "../todoitem/todoitem";

class TodoList extends React.Component {
  render() {
    const { todos } = this.props;
    return (
      <div className="todoListContainer">
        {todos.map((_todo, _index) => {
          return (
            <TodoItem
              updateTodoFn={this.updateTodo}
              key={_index}
              todo={_todo}
            />
          );
        })}
      </div>
    );
  }

  updateTodo = todo => {
    this.props.updateTodoFn(todo);
    console.log(todo);
  };
}

export default TodoList;
