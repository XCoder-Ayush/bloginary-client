import axios from 'axios';

const apiUrl = 'http://localhost:8080/api/v1/user';

const authservice = async (userData, file) => {
  const formData = new FormData();
  formData.append('userData', JSON.stringify(userData));
  formData.append('file', file);

  try {
    const response = await axios.post(apiUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error('Something went wrong');
  }
};

export default {
  authservice,
};
