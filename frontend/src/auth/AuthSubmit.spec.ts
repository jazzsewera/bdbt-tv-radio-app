import onAuthSubmit from './AuthSubmit';

describe('AuthSubmit tests', () => {
  jest.mock('../Constants', () => ({ BACKEND_URL: 'mock' }));
  const fun = jest.fn();

  it('submits the form', () => {
    const loginString = 'login';
    const passwordString = 'password';

    onAuthSubmit(loginString, passwordString, fun);
  });
});
