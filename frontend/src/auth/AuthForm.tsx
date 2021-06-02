import React, { useState } from 'react';
import { LOGIN_SUBMIT_BUTTON_TEXT, PASSWORD_TEXT_FIELD_LABEL, USERNAME_TEXT_FIELD_LABEL } from './Constants';

interface AuthFormProps {
  onSubmit: (login: string, password: string, onSuccess: (success: boolean) => void) => void;
  onSuccess: (success: boolean) => void;
}

const AuthForm: React.FC<AuthFormProps> = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit(username, password, props.onSuccess);
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
