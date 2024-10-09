# Sprint 7 project

Description:
This project is a jest API testing suite for the Urban Grocers app. it has tests for GET, POST, PUT, and DELETE endpoints (2 tests for each). 8/8 of the tests in this project have passed.

Documentation source used:
ApiDoc (URL + /docs/).

Technologies and techniques used:
 - Variables and Functions are named according to the camelCase principle.
 - Only nouns are used as variable names.
 - Function names start with a verb.
 - If a variable is declared using `let` , its value must change somewhere.
 - If a variable is declared using `const`, its value doesn’t change.

How to run this project:
1. Clone the repository to your local directory.
2. Run `$ npm install` in the terminal of your local directory.
3. Start the practicum server and copy its address.
4. Paste the server adress instead of `API_URL` in the `config.js` file.
5. To run all the tests, use `$ npx jest` in the terminal.
6. Use `$ npx jest tests/getHandlers.test.js`, `$ npx jest tests/postHandlers.test.js`, `$ npx jest tests/putHandlers.test.js`, or `$ npx jest tests/deleteHandlers.test.js`, in order to run each kind of tests separately. 