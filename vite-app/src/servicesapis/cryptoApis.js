
const url = 'https://cryptocurrency-news2.p.rapidapi.com/v1/cryptodaily';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ed6ba45b10mshffd7d567fdb2362p1b9d58jsn6be4fe5a332d',
		'x-rapidapi-host': 'cryptocurrency-news2.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}