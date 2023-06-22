## API Documentation

### Users

#### List all users

- URL: `/api/v1/users`
- Method: GET
- Description: Retrieves a list of all users.
- Response:
  - Status: 200 OK
  - Body: Array of user objects.

#### Get a specific user

- URL: `/api/v1/users/:id`
- Method: GET
- Description: Retrieves information about a specific user.
- Parameters:
  - `id` (integer): The ID of the user.
- Response:
  - Status: 200 OK
  - Body: User object.

#### Create a user

- URL: `/api/v1/users`
- Method: POST
- Description: Creates a new user.
- Parameters:
  - User object: The details of the user to be created.
- Response:
  - Status: 201 Created
  - Body: User object of the newly created user.

#### Update a user

- URL: `/api/v1/users/:id`
- Method: PUT/PATCH
- Description: Updates an existing user.
- Parameters:
  - `id` (integer): The ID of the user to be updated.
  - User object: The updated details of the user.
- Response:
  - Status: 200 OK
  - Body: Updated user object.

#### Delete a user

- URL: `/api/v1/users/:id`
- Method: DELETE
- Description: Deletes an existing user.
- Parameters:
  - `id` (integer): The ID of the user to be deleted.
- Response:
  - Status: 204 No Content

### Cars

#### List all cars

- URL: `/api/v1/cars`
- Method: GET
- Description: Retrieves a list of all cars.
- Response:
  - Status: 200 OK
  - Body: Array of car objects.

#### Get a specific car

- URL: `/api/v1/cars/:id`
- Method: GET
- Description: Retrieves information about a specific car.
- Parameters:
  - `id` (integer): The ID of the car.
- Response:
  - Status: 200 OK
  - Body: Car object.

#### Create a car

- URL: `/api/v1/cars`
- Method: POST
- Description: Creates a new car.
- Parameters:
  - Car object: The details of the car to be created.
- Response:
  - Status: 201 Created
  - Body: Car object of the newly created car.

#### Delete a car

- URL: `/api/v1/cars/:id`
- Method: DELETE
- Description: Deletes an existing car.
- Parameters:
  - `id` (integer): The ID of the car to be deleted.
- Response:
  - Status: 204 No Content

### Reservations

#### List all reservations

- URL: `/api/v1/reservations`
- Method: GET
- Description: Retrieves a list of all reservations.
- Response:
  - Status: 200 OK
  - Body: Array of reservation objects.

#### Create a reservation

- URL: `/api/v1/reservations`
- Method: POST
- Description: Creates a new reservation.
- Parameters:
  - Reservation object: The details of the reservation to be created.
- Response:
  - Status: 201 Created
  - Body: Reservation object of the newly created reservation.

#### Get a specific reservation

- URL: `/api/v1/reservations/:id`
- Method: GET
- Description: Retrieves information about a specific reservation.
- Parameters:
  - `id` (integer): The ID of the reservation.
- Response:
  - Status: 200 OK
  - Body: Reservation object.

#### Delete a reservation

- URL: `/api/v1/reservations/:id`
- Method: DELETE
- Description: Deletes an existing reservation.
- Parameters:
  - `id` (integer): The ID of the reservation to be deleted.
- Response:
  - Status: 204 No Content

#### Get user reservations

- URL: `/api/v1/users/:user_id/reservations`
- Method: GET
- Description: Retrieves a list of reservations for a specific user.
- Parameters:
  - `user_id` (integer): The ID of the user.
- Response:
  - Status: 200 OK
  - Body: Array of reservation objects.

### User Signin

#### Sign in a user

- URL: `/api/v1/users/signin`
- Method: POST
- Description: Signs in a user and generates an authentication token.
- Parameters:
  - User credentials (e.g., email and password).
- Response:
  - Status: 200 OK
  - Body: Authentication token.

### Miscellaneous

#### List all users

- URL: `/api/v1/users/index`
- Method: GET
- Description: Retrieves a list of all users.
- Response:
  - Status: 200 OK
  - Body: Array of user objects.

### Catch-all Route

- URL: `*path`
- Method: GET
- Description: Handles all other routes and redirects to the index page.
- Response:
  - Status: 200 OK
  - Body: HTML of the index page.

#### Root Page

- URL: `/`
- Method: GET
- Description: The root page of the application.
- Response:
  - Status: 200 OK
  - Body: HTML of the index page.
