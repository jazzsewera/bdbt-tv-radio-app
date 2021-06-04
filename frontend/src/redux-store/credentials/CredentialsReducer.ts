const credentialsInitialState = {
  isLoggedIn: false,
  username: '',
  password: '',
};

export type TCredentials = typeof credentialsInitialState;

export interface ICredentialsAction {
  type: 'credentials/update';
  payload?: TCredentials;
}

const credentialsReducer = (state = credentialsInitialState, action: ICredentialsAction) => {
  switch (action.type) {
    case 'credentials/update':
      return action.payload;
    default:
      return state;
  }
};

export default credentialsReducer;
