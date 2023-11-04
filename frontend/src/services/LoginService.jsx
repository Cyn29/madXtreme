// loginService.js
const baseURL = "https://madxtreme-ecommerce.onrender.com/"; 
export const loginService = {
  async postLogin(email, user_password) {
    try {
      const response = await fetch(`${baseURL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, user_password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login status:', data);
        return { success: true, data };
      } else {
        console.error('Login error');
        return { success: false, error: 'Login error' };
      }
    } catch (error) {
      console.error('Failed request:', error);
      return { success: false, error: 'Failed request' };
    }
  },
};
