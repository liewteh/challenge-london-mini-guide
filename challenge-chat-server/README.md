# Challenge: A Chat Server

### How long will this take?

- 1 hour (level 1)
- 3-4 hours (advanced level)

## Overview: what is this challenge?

In this challenge you must make a server (using Node and Express) which maintains a list of chat messages, in JSON form. A simple front-end has been provided to allow you to test some functionality.

In the optional final part of this challenge, you also make a React app which allows you to read, add and delete messages, backed by your new server.

## TODO: screenshot or link to working client backed by working (obfuscated?) demo API

## Level 1 Challenge - make the chat server

Your API _must_ support at least:

- Create a new message
- Read all messages in _descending_ chronological order.
- Delete a message, by ID
- Read one message specified by an ID

You may also wish to add:

- Read all messages by a specific author.
- Filter messages by content
- Update of a message. We'll cover this in week 3.

All message content should be passed as JSON.

TODO: provide 1000 random messages to allow testing of filter, etc, with a larger dataset.

### A note on security

There is intentionally no security or ownership of messages - anyone can delete a message on your server. This is a big topic for further study.

### Data model

Each chat message is an object with the following properties:

| Name     | Type     | Example  |
| -------- | -------- | -------- |
| id       | number   | 17       |
| from     | string   | "neill"  |
| text     | string   | "hi CYF! |
| timeSent | DateTime | TODO     |

Try to use what you know to do this challenge on your own. However, there are some steps to guide you, below.

### Suggested Routes (Spoiler)

| method | example path | behaviour              |
| ------ | ------------ | ---------------------- |
| GET    | /messages    | return all messages    |
| GET    | /messages/17 | get one message by id  |
| POST   | /messages    | create a new message   |
| DELETE | /messages/17 | delete a message by id |

## Start by remixing our example server

- Remix [this server on glitch -
  https://glitch.com/~cyf-quotes-start](https://glitch.com/~cyf-chat-start)
- Name your new server `yourname-chat-server`
- Make sure you're logged in so that it saves
- Check that it is working by making a request to `/`
- Take time to read the comments

## Add a `/messages` route

Add a `/messages` route to return _all_ of the messages as JSON.

Test that your server successfully serves all of the messages as JSON by making a request for /messages from your new server.

## Now do the other routes!

## End of Level 1 challenge!

Well done!

- _Don't_ post on slack, unless there's a thread announced specifically for it.
- Instead, post the URLs when you mark your google classroom assignment done.
- You might want to download your project for safekeeping. (Tools: Git, Import, and Export: Download Project)
- Read the following ideas for further work

### Go ahead!

If you think you know how to do that, go ahead!

### In more detail

### Ideas for further work

## Challenge: Advanced: Add a React app as a front-end

Note: only do this if you have done all other Node homework this week - that is the priority.

- Make a very simple React app called chat-react-app
- You'll have to enable CORS on the express app.
- Host your react app on netlify
- Post the URL to your hosted React app on Slack, and in your google classroom submission (along with your glitch server url)
- Host your code on github
- Link your application from your portfolio.

### Example screenshot of Simple React app

Here's an example of how your react app might look.
Note I didn't add a "get new quote" button here.
![Example Screenshot of React App](./screenshots/example_react_quotes_app.png)

#### Enabling CORS on the Express app

You'll have to install and enable CORS on your server in order to allow your JSON to be loaded from a different server than your React app has been loaded from.

(Your react app has probably been loaded from the `netlify.com` domain and your server is at `glitch.me`).

On your express project on glitch, edit your `package.json` to add a dependency for `"cors": "^2.8.5"`

Then in your `server.js` add...

`var cors = require('cors')`

and

`app.use(cors())`

Read more or CORS [here](https://codeyourfuture.github.io/syllabus-master/others/cors.html)
and in CORS in Express [here](https://expressjs.com/en/resources/middleware/cors.html).

### Credits
