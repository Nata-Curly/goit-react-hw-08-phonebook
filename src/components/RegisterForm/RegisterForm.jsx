import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Btn, Form, Label } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <input type="text" name="name" />
      </Label>
      <Label>
        Email
        <input type="email" name="email"/>
      </Label>
      <Label>
        Password
        <input type="password" name="password" />
      </Label>
      <Btn type="submit">Register</Btn>
    </Form>
  );
};
