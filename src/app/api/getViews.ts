const API_URL = '<API Gateway Invoke URL>';

export async function getViews(): Promise<number> {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Origin': window.location.origin,
      },
      credentials: 'omit'
    });
    
    if (!response.ok) {
      console.error('API Error:', response.status, response.statusText);
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    return data.views;
  } catch (error) {
    console.error('Error fetching view count:', error);
    return 0;
  }
}