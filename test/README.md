# Test Guidelines
The system is designed with a unit-testing forward philosophy, ensuring that individual components are rigorously validated before assessing their interactions. Both unit and integration tests are implemented using Jest, providing a robust framework for maintaining high code quality and reliability.

## Unit Testing
The unit tests constitute a comprehensive suite that focuses on validating the functionality of individual methods and components within the API, CORE, and UTILS modules. Each function is tested independently to ensure it behaves as expected under various conditions. Supporting functions and helpers are systematically mocked to isolate the specific components being tested, ensuring the tests focus exclusively on the unit's behavior.

## Integration Testing
The integration tests evaluate how multiple components interact with each other in real-world scenarios. These tests leverage predefined sample input and output values, located in the samples folder, where the expected results have been meticulously pre-computed. By comparing the actual output of integrated functions against these pre-computed values, the integration tests ensure that the overall system produces accurate results and functions cohesively.

Test Organization and Execution
All test files are organized under the test folder, making them easy to locate and manage. The system supports the following commands for running tests:

Run Unit Tests:
```
npm run test:unit
```

Run Integration Tests:
```
npm run test:integration
```
Run All Tests:
```
npm run test
```

This clear separation between unit and integration tests enables a focused, maintainable, and scalable approach to quality assurance, ensuring that individual components are reliable and that their interactions yield consistent results. By adhering to a unit-testing forward philosophy, the system minimizes dependencies during development and testing, fostering confidence in the stability of the codebase.