// for API Requests from Eval:
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // Use the value from the .env file
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAutofill = async (partialQuery, numSuggestions = 5) => {
  try {
    const response = await apiClient.get('/v0/GetAutofill', {
      headers: {
        'Partial-Query': partialQuery,
        'Num-Suggestions': numSuggestions,
      },
    });
    return response.data.suggestions;
  } catch (error) {
    console.error('Error fetching autofill suggestions:', error);
    throw error;
  }
};

export const getQueryID = async () => {
  try {
    const response = await apiClient.get('/v0/GetQueryID');
    return response.data.query_ID;
  } catch (error) {
    console.error('Error fetching query ID:', error);
    throw error;
  }
};

export const reportSearchResults = async (data) => {
  try {
    await apiClient.post('/v0/ReportSearchResults', data);
  } catch (error) {
    console.error('Error reporting search results:', error);
    throw error;
  }
};

export const submitFeedback = async (feedback) => {
  try {
    await apiClient.post('/v0/SubmitFeedback', feedback);
  } catch (error) {
    console.error('Error submitting feedback:', error);
    throw error;
  }
};
