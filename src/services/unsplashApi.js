import axios from 'axios';

export const fetchImages = async (query, page = 1) => {
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query,
        page,
        per_page: 12,
        client_id: 'JpWHyi59Eu4iQhmgdj5hmZ6klpHKCp_1gZUQUqzdbNU',  
      },
      headers: {
        'Accept-Version': 'v1',
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error.response);
  }
};

