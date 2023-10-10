# Introduction 
The "onboarding" project serves as an automated testing solution for PTA-events, utilizing JavaScript as its primary programming language. The objective is to streamline the quality assurance process by automating tests that validate the FE autotest of the Onboarding application of the PTA-events system.

# Getting Started

1.	Installation process
To start to project you need to download and install the required version of Browser Drivers. They can be found here:https://www.selenium.dev/ecosystem/
The drivers for Chrome, Firefox, and Microsoft's IE and Edge web browsers are all standalone executables that should be placed on your system PATH. 
Apple's safaridriver (v10 and above) can be found at the following path – /usr/bin/safaridriver
2.	Software dependencies
Dependencies:

assert: ^2.0.0

The Node.js built-in assert module provides a set of assertion functions used for verifying conditions during testing. It ensures that values meet specified criteria, enhancing the robustness of test cases.
chai: ^4.3.7

Chai is a powerful assertion library that works seamlessly with Mocha. It offers a variety of assertion styles, including BDD and TDD, providing clear and expressive tests. The version ^4.3.7 specifies compatibility with the project.
chai-subset: ^1.6.0

Chai-subset is an extension for Chai that allows for easy assertion of object subsets. This is particularly useful when verifying that an object contains certain properties or values, enhancing the precision of tests.
chromedriver: ^114.0.3

Chromedriver is a WebDriver implementation for Chrome, enabling the automation of Chrome browser sessions. The specified version ^114.0.3 ensures compatibility and stability with the current project requirements.
dotenv: ^16.3.1

Dotenv simplifies environment configuration by loading variables from a .env file into process.env. This is crucial for managing configuration settings, such as API keys or environment-specific variables, in a consistent manner across different environments.
geckodriver: ^4.0.5

Geckodriver is the WebDriver implementation for Firefox, facilitating automated testing in Firefox browser sessions. The specified version ^4.0.5 ensures compatibility and stability within the project.
mocha: ^10.2.0

Mocha is a versatile and feature-rich JavaScript testing framework. It provides a flexible structure for organizing tests, supports asynchronous testing, and generates detailed test reports. The version ^10.2.0 ensures that the project benefits from the latest features and improvements.
selenium-webdriver: ^4.10.0

Selenium WebDriver is a powerful tool for browser automation. It allows the project to interact with web browsers programmatically, enabling the execution of complex test scenarios. The specified version ^4.10.0 ensures compatibility and access to the latest Selenium features.
webdriver: ^8.13.1

Webdriver is a library that simplifies interactions with browser automation tools, including Selenium WebDriver. It provides a higher-level API for managing browser sessions and executing commands. The version ^8.13.1 ensures compatibility with the project's requirements.


# Build and Test
May be installed via npm with
1.   cd Path_to_your_project/TESTAUTOMATION
2. npm i
3. npm run test
 This script is designed to execute comprehensive Mocha tests located in the "tests" directory. The **/*.spec.js file pattern indicates that it will run all files with a ".spec.js" extension. The -r dotenv/config flag enables the use of the dotenv library for environment configuration. The specified timeout of 60,000 milliseconds ensures that tests are given sufficient time to complete.

 npm run smoke
 This script is specifically tailored for smoke tests, focusing on essential functionality. It executes Mocha tests with a file pattern of smoke.spec.js. Similar to the general test script, it uses dotenv for configuration, but with a longer timeout of 90,000 milliseconds to accommodate potentially lengthier smoke tests.