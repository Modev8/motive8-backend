## Software Requirements

### Vision

1. What is the vision of this product? The vision we have for this project is to create an application that allows users to create their own safe spaces for themselves and improve their mental health along with their friends, family, or even complete strangers. The intention is no matter what challenge you post on your page or whatever challenge you may face in this world there are always motiva8ers out there for everyone, and this motivation can spark us to and push us to a greater achievement in life.
2. What pain point does this project solve? To help lift us and get inspired to get things done.
3. Why should we care about your product? Our product is meant to spread positivity and generate good vibes only.
<hr>

### Scope (In/Out)

IN - What will your product do
Describe the individual features that your product will do.

- The application will show a new motivational quote each time we log-in.
- The application will allow others to post words of encouragement on our status.
- The application will find us motivational music and images.
  
OUT - What will your product not do.
- Our application will not allow any type of selling or advertising.

  These should be features that you will make very clear from the beginning that you will not do during development. These should be limited and very few. Pick your battles wisely. This should only be 1 or 2 things. Example: My website will never turn into an IOS or Android app.
  
  
Minimum Viable Product vs
  What will your MVP functionality be?
- Connect to Quote Garden API for inspiration quotes.
- Connect to Unsplash API for images.
- Connect to a music API for feel-good songs.
  What are your stretch goals?
- Connect to YouTube API.
- Send private messages between users.
  Stretch
  What stretch goals are you going to aim for?
- Connect to YouTube API.

### Functional Requirements

List the functionality of your product. This will consist of tasks such as the following:

- We will implement a back-end server to connect to the database for data storage and retrieval.
- The back-end server will also be the go between for the client and our 3rd-party APIs.
- Users will be able to log-in and see motivational content according to their personal goals.

**Examples:**
  - An admin can create and delete user accounts
  - A user can update their profile information
  - A user can search all of the products in the inventory

### Data Flow

Describe the flow of data in your application. Write out what happens from the time the user begins using the app to the time the user is done with the app. Think about the “Happy Path” of the application. Describe through visuals and text what requests are made, and what data is processed, in addition to any other details about how the user moves through the site.

Preliminary methods
- createComment()
- editComment()
- deleteComment()
- viewComment()

### Non-Functional Requirements (301 & 401 only)

Non-functional requirements are requirements that are not directly related to the functionality of the application but still important to the app.
Examples include:
Security
Usability
Testability
etc….
Pick 2 non-functional requirements and describe their functionality in your application.

- We will utilize Auth0 to manage our user information such as emails, names, etc.
- We will utilize MongoDB to store all of our user information.

If you are stuck on what non-functional requirements are, do a quick online search and do some research. Write a minimum of 3-5 sentences to describe how the non-functional requirements fits into your app.
  You MUST describe what the non-functional requirement is and how it will be implemented. Simply saying “Our project will be testable for testibility” is NOT acceptable. Tell us how, why, and what.


