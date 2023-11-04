const baseURL = "https://madxtreme-ecommerce.onrender.com/";
export const registerService = {
  async registerUser(fullName, email, user_password) {
    try {
      const response = await fetch(`${baseURL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, user_password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Register status:', data);
        return { success: true };
      } else {
        console.error('Register error');
        return { error: 'Register error' };
      }
    } catch (error) {
      console.error('Failed request:', error);
      return { error: 'Failed request' };
    }
  },
};
