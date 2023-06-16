## Software Requirements

### Vision

>Our vision is a web application that allows users to find motivational content in the hopes that this content will help reset their mindset when needed, remind them of what's truly important, and motivate the user to continue pushing through their life's obstacles, no matter how big or small, so they can inch closer to achieving whatever goals they currently aspire to.

>This projects solves the pain-point of when a user loses motivation and sight of their goals, and needs some reinvigoration.

>Our application is meant to spread positivity and generate good vibes only, and this is how it differentiates from other similar applications.

<hr>

### Scope (In/Out)

**IN** - What will our product do

- The application will show a new motivational quote each time we log-in.
- The application will allow others to post words of encouragement on our status.
- The application will find us motivational content such as quotes, videos, and images.
  
**OUT** - What will our product not do.

- Our application will not allow any type of selling or advertising.
- There 
  
**Minimum Viable Product**

- Connect to Zen Quotes API for motivational quotes. 
- Connect to Unsplash API for motivational images.
- Connect to Youtube API for motivational videos.
- Get all three motivational content to render.

**Stretch Goals**

- Allow users to interact with other users

<hr>

### Functional Requirements

- Users will be able to search for motivational content through an input form
- Video and image content will be displayed back to the user upon form submission
- A user can like and unlike quotes
- A user can change their favorite quotes

**Examples:**
  - An admin can create and delete user accounts
  - A user can update their profile information
  - A user can search all of the products in the inventory

<hr>

### Data Flow

Describe the flow of data in your application. Write out what happens from the time the user begins using the app to the time the user is done with the app. Think about the “Happy Path” of the application. Describe through visuals and text what requests are made, and what data is processed, in addition to any other details about how the user moves through the site.

![Web Request/Response Cycle](Screenshot%202023-06-15%20at%209.45.02%20PM.png)

CRUD Methods
- addQuote()
- getQuotes()
- updateFaveQuote()
- deleteQuote()

<hr>

### Non-Functional Requirements

- Data and requests from the front-end will be sent to the back-end server. 
- Depending on the request type, the back-end server will either send data to the database for storage or retrieval, OR the back-end server send new content requests to the third-party APIs.
- We will utilize Auth0 to manage our user information such as emails, names, etc.
- We will utilize MongoDB atlas to store all of our user information and their motivational content in the cloud.