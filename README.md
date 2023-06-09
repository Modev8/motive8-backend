# motive8-backend

## Domain Modeling

![Databse](<./Screenshot%202023-06-08%20at%2010.18.49%20PM%20(2).png>)

## Database Schema

![Schema](./Screenshot%202023-06-08%20at%2010.23.43%20PM.png)

1. Each user will have a 1 title which is there name, 1 description and 1 email associate to them. They can have more than 1 comment which can be added.
2. The comment item on the database will be distribute to each user that can be pass along and shared.
3. Do many items in your database relate to many other items in your database? For example, a band has many musicians, and a musician can be in many bands. The comment will be related to other users that is and the comment will be associate to many users.

The collection:

1. The name of each property stored in the collection is comment, userEmail, title and description.
2. The data require will be a string and a boolean
