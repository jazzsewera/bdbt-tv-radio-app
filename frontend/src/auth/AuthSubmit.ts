import { BACKEND_URL } from '../Constants';

const onAuthSubmit = (login: string, password: string, onSuccess: (success: boolean) => void): void => {
  // TODO: POST login and password to a backend and get a result
  // with fetch()
  console.log(BACKEND_URL);
  console.log(login);
  console.log(password);
  onSuccess(true);
};

export default onAuthSubmit;
