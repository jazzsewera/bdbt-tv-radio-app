import React, { useState } from 'react';
import type { TAppDispatch } from 'src/redux-store/RootReducer';
import { useAppDispatch } from '../redux-store/Hooks';
import {
  LOGIN_SUBMIT_BUTTON_TEXT,
  PASSWORD_TEXT_FIELD_LABEL,
  USERNAME_TEXT_FIELD_LABEL,
} from './Constants';

export interface AuthFormProps {
  onSubmit: (login: string, password: string, dispatch: TAppDispatch) => void;
}

const AuthForm: React.FC<AuthFormProps> = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit(username, password, dispatch);
      }}
    >
      <input
        type="text"
        aria-label={USERNAME_TEXT_FIELD_LABEL}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        aria-label={PASSWORD_TEXT_FIELD_LABEL}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="submit">{LOGIN_SUBMIT_BUTTON_TEXT}</button>
    </form>
  );
};

export default AuthForm;
