export function doFetch(query) {
    const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '43423774-a3cd1b17116146cc10b0d5ce8';
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}