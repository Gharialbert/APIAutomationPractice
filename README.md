# Cypress API Automation for GoRest

This project demonstrates automated API testing for the [GoRest](https://gorest.co.in/) API using Cypress. It covers CRUD operations (Create, Read, Update, and Delete) on users via API requests.

## **Folder Structure**
root/ ├── cypress/ │ ├── e2e/ │ │ └── APIAutomationPractice/ │ │ └── gorest_api.cy.js │ └── support/ ├── node_modules/ ├── package.json ├── cypress.config.js └── README.md

## **Test Scenarios**

1. **Create a User (POST)**:  
   - Creates a new user with a unique email.  
   - Validates that the user is successfully created and has the correct details.

2. **Retrieve User Details (GET)**:  
   - Fetches the details of the created user.  
   - Validates the response matches the expected data.

3. **Update User Details (PATCH)**:  
   - Updates the user's name and email.  
   - Validates the changes persist.

4. **Delete User (DELETE)**:  
   - Deletes the user.  
   - Validates the user no longer exists.
