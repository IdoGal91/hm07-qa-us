// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "cardId": 45, 
    "name": "idogal" 
};

test('Create an empty kit', async () => {
    let actualStatusCode;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        actualStatusCode = response.status;

        if (!response.ok) {
            const responseBody = await response.text();
            console.error('Failed to create kit:', responseBody);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }

    expect(actualStatusCode).toBe(201);
});

test('Verify that status code returns 200', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/8`, {
			method: 'DELETE',
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});

test('Verify that kit is deleted according to the status body', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/8`, {
			method: 'DELETE',
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody["ok"]).toBe(true);
});