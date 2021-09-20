
const payload = {
  "box_type": "custom_package",
  "dimension": {"depth": 1, "width": 1, "height": 1, "unit": "in"},
  "ship_date": "2021-09-20",
  "ship_from": {"country": "USA", "postal_code": "10001"},
  "ship_to": {"country": "GBR", "postal_code": "10001"},
  "slug": "usps-discounted",
  "weight": {"value": 0.5, "unit": "lb"}
}

export const getRates = async () => {
  const response = await fetch(
		'https://production-api.postmen.com/v3/tools/shipping-rates',
		{
			method: 'POST',
      mode: 'no-cors',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(payload),
		}
	);
  console.log(response.status, 'status')
  console.log(response.body, 'data')
}