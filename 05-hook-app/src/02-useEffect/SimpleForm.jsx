import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {


  const [formState, setFormState] = useState({
    username: 'enya',
    email: 'enya@gmail.com',
  })

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log('useEffect called!');
  },[]);

  useEffect(() => {
    // console.log('FormState Changed!');
  },[formState]);

  useEffect(() => {
    // console.log('email Changed!');
  },[email]);


  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="text"
        className="form-control mt-2"
        placeholder="EnyaOficial001@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {
        (username === 'enya') && <Message />
      }
    </>
  )
}

