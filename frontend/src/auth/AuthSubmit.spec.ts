import onAuthSubmit from './AuthSubmit';

describe('AuthSubmit tests', () => {
  jest.mock('../Constants', () => ({ BACKEND_URL: 'mock' }));

  it('submits the form', () => {
    const loginString = 'login';
    const passwordString = 'password';
    const onSuccess = (success: boolean) => {
      if (!success) fail();
    };

    onAuthSubmit(loginString, passwordString, onSuccess);
  });
});
