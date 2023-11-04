const baseURL = "http://localhost:3000";
export const loginService = {
  async postLogin(email, user_password) {
    try {
      const response = await fetch(`${baseURL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, user_password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login status:', data);
        return { success: true };
      } else {
        console.error('Login error');
        return { error: 'Login error' };
      }
    } catch (error) {
      console.error('Failed request:', error);
      return { error: 'Failed request' };
    }
  },
};
