import axios from 'axios';
import type { TAppDispatch } from 'src/redux-store/RootReducer';
import { AUTH, BACKEND_URL } from '../Constants';

const onAuthSubmit = (username: string, password: string, dispatch: TAppDispatch): void => {
  axios
    .post(`${BACKEND_URL}${AUTH}`, { username, password })
    .then(() => {
      dispatch({ type: 'credentials/update', payload: { isLoggedIn: true, username, password } });
    })
    .catch(() => {
      dispatch({
        type: 'credentials/update',
        payload: { isLoggedIn: false, username: '', password: '' },
      });
    });
};

export default onAuthSubmit;
