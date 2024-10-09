// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "cardId": 41, 
    "name": "idogal" 
};

const updateBody = {
    "productsList": [
        {
            "id": 7,
            "quantity": 2
        }
    ],
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
        const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateBody)
        });
        actualStatusCode = response.status;

        if (!response.ok) {
            const responseBody = await response.text();
            console.error('Failed to update kit:', responseBody);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }

    expect(actualStatusCode).toBe(200);
});


test('Verify that kit is updated according to the status body', async () => {
    let actualResponseBody;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateBody)
        });
        actualResponseBody = await response.json();

        if (!response.ok) {
            const responseBody = await response.text();
            console.error('Failed to update kit:', responseBody);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }

    expect(actualResponseBody["ok"]).toBe(true);
});