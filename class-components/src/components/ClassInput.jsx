import { Component } from 'react';

class Count extends Component {
  render() {
    return <div>{this.props.todos.length}</div>;
  }
}

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Just some demo tasks', 'As an example'],
      inputVal: '',
      editingTodo: null,
      editText: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.resubmitTodo = this.resubmitTodo.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
  }

  editTodo(todo) {
    this.setState({
      editingTodo: todo,
      editText: todo,
    });
  }

  handleEditChange(e) {
    this.setState({
      editText: e.target.value,
    });
  }

  resubmitTodo() {
    this.setState((state) => ({
      todos: state.todos.map((todo) =>
        todo === state.editingTodo ? state.editText : todo
      ),
      editingTodo: null,
      editText: '',
    }));
  }

  deleteTodo(todo) {
    this.setState((state) => ({
      todos: state.todos.filter((item) => item !== todo),
    }));
  }

  handleInputChange(e) {
    this.setState({
      inputVal: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: '',
    }));
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>

          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />

          <button type="submit">Submit</button>
        </form>

        <h4>All the tasks!</h4>

        <span>Total todos:</span>
        <Count todos={this.state.todos} />

        <ul>
          {this.state.todos.map((todo) => (
            <div key={todo}>
              {this.state.editingTodo === todo ? (
                <>
                  <input
                    type="text"
                    value={this.state.editText}
                    onChange={this.handleEditChange}
                  />

                  <button onClick={this.resubmitTodo}>
                    Resubmit
                  </button>
                </>
              ) : (
                <>
                  <li>{todo}</li>

                  <button onClick={() => this.deleteTodo(todo)}>
                    Delete Todo
                  </button>

                  <button onClick={() => this.editTodo(todo)}>
                    Edit Todo
                  </button>
                </>
              )}
            </div>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;