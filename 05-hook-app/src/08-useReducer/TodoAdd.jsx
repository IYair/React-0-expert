import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {

  const { desciption, formState, onInputChange, onResetForm } = useForm({
    desciption: '',
  })

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (desciption.length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      desciption: desciption
    }
    onNewTodo(newTodo);
    onResetForm();
  }


  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Que hay que hacer?"
        className="form-control"
        name="desciption"
        value={desciption}
        onChange={onInputChange}
      />
      <button
        type="submit"
        className="btn btn-outline-primary mt-1"
      >
        Agregar
      </button>
    </form>
  )
}
