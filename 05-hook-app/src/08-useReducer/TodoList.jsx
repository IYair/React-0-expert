import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos = [] }) => {


  return (
    <ul ul className="list-group" >
      {
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      }
    </ul>
  )
}
