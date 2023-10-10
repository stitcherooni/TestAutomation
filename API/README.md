# Introduction 
The "onboarding" project serves as an automated testing solution for PTA-events, utilizing JavaScript as its primary programming language. The objective is to streamline the quality assurance process by automating tests that validate the API autotest of the Onboarding application of the PTA-events system.

# Scripts:

postinstall:

Command: npm run pretest
Description: This script is executed automatically after the package is installed. It triggers the pretest script to prepare the environment for testing.

pretest:

Command: openapi-typescript https://ptaeventsgateway.azurewebsites.net/swagger/v1/swagger.json --output ./.temp/types.ts
Description: This script generates TypeScript types based on the OpenAPI specification provided by the PTA Events Gateway. The generated types are output to the ./.temp/types.ts file. Types used to validate the request bodies of the used endpoints.

test:

Command: mocha --require ts-node/register ./test/**/*.ts
Description: This script runs Mocha tests written in TypeScript. The ts-node/register module is required to enable TypeScript execution in Mocha. The tests are located in the ./test/ directory and have a .ts extension.



# Software dependencies
@types/mocha: 8.2.0

TypeScript type definitions for Mocha, ensuring type safety and IntelliSense support when writing Mocha tests in TypeScript.
@types/node: 14.14.20

TypeScript type definitions for Node.js, providing type information for Node.js modules used in the project.
ajv: ^8.12.0

Ajv is a JSON Schema validator. It ensures that data structures sent or received by the API conform to the defined schema.
dotenv: ^16.3.1

Dotenv for TypeScript, enabling the configuration of environment variables for the project.
got: 11.7.0

Got is a lightweight HTTP request library. It simplifies and enhances the process of making HTTP requests to the API under test.
http-req-builder: ^1.0.2

HTTP Request Builder is a library that facilitates the construction of HTTP requests in a modular and readable way. It contributes to the maintainability of API test code.
mocha: ^10.2.0

Mocha is a versatile testing framework for JavaScript and TypeScript. It provides a robust structure for organizing and running tests.
openapi-typescript: ^6.6.1

OpenAPI TypeScript is used to generate TypeScript types from an OpenAPI specification. This is essential for ensuring that API requests and responses adhere to the defined contract.
ts-dotenv: ^0.9.1

TypeScript wrapper for dotenv, facilitating the loading of environment variables from a .env file.
ts-node: 9.1.1

Ts-node enables TypeScript execution directly in Node.js, allowing the project to run TypeScript files without the need for pre-compilation.
typescript: 4.1.3

TypeScript is a superset of JavaScript that adds static typing. It is used to write the API tests in a type-safe manner.


# Build and Test
May be installed via npm with
1.   cd Path_to_your_project/API
2. npm i
3. npm run test
 