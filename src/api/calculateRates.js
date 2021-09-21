// https://thingproxy.freeboard.io/fetch/

const url = 'https://sandbox-api.postmen.com/v3/tools/shipping-rates';


export const httpGetRates = async (payload) => {
	try {
		const response = await fetch(url, {
			method: 'POST',
			mode: 'cors',
			credentials: 'omit',
			headers: {
				Accept: '*/*',
				'Content-Type': 'application/json',
				'postmen-api-key': '75634e4f-5e98-4326-8c02-0fe37720ffe8',
				'Access-Control-Allow-Origin': 'https://sandbox-api.postmen.com',
			},
			body: JSON.stringify(payload),
		});

		const data = await response.json();
		return data.data;
	} catch (err) {
		throw new Error(err);
	}
};