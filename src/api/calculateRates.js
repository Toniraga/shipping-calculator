const url =
	'https://thingproxy.freeboard.io/fetch/https://production-api.postmen.com/v3/tools/shipping-rates';


export const httpGetRates = async (payload) => {
	try {
		const response = await fetch(url, {
			method: 'POST',
			mode: 'cors',
			credentials: 'omit',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		});

		const data = await response.json();
		return data.data;
	} catch (err) {
		throw new Error(err);
	}
};