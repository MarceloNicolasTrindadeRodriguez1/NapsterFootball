// Fetching Data from API
async function fetchData() {
    const url = 'https://api-football-v1.p.rapidapi.com/v3/standings?season=2020&league=39';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'MY API',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
  
      // Check for a successful response (status code 200-299)
      if (!response.ok) {
        throw new Error(`Network response was not ok (${response.status})`);
      }
  
      const result = await response.json(); // Use json() to parse the response as JSON
      console.log(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
fetchData();  // Call the async function to initiate the data fetching
//////////////////

var matchStandings = document.createElement('div');

