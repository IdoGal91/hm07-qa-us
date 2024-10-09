// eslint-disable-next-line no-undef
const config = require('../config');

test('Verify that status code returns 200', async () => {
	let actualStatusCode;
		try {
			const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
	actualStatusCode = response.status;
		} catch (error) {
			console.error(error);
		}
	expect(actualStatusCode).toBe(200);
	});

	test('Verify that the response body contains "Everything You Need"', async () => {
		let actualResponseBody;
	
		try {
			const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
			actualResponseBody = await response.json();
			
			const found = actualResponseBody.some(item => item.name === "Everything You Need");
			expect(found).toBe(true);
		} catch (error) {
			console.error(error);
		}
	});
	