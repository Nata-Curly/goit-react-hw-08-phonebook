import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Btn, Form, Label } from './LoginForm.styled';

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            }),
        );
        form.reset();
    };

    return (
        <Form onSubmit={handleSubmit}
            autoComplete='off'>
            <Label>Email
                <input type="email" name='email' />
            </Label>
            <Label>Password
                <input type="password" name='password' />
            </Label>
            <Btn type='submit'>Log in</Btn>
        </Form>
    );
};

