# Challenge: A Quote Server

## What's this about?

In this challenge you must make a server (using Node and Express) which serves quotes, in JSON form.

In the _extended_ work of this challenge, you also make a React app which displays the quotes retrieved from your new server.

## screenshot of using an example server

![screenshot of the server in use](./screenshots/quote-server-example.png)

## Level 1 Challenge - make the quote server

Your server must have at least these two "routes":

- `/quotes` - returns ALL of the quotes, as JSON.
- `/quotes/random` - returns ONE of the quotes, picked differently at random each time it is requested.

[quotes.json](A list of quotes, in JSON format, is provided).

## Ideas for further work

- Use YOUR favourite quotes

- Use the same code to serve something other than quotes - maybe revision notes, proverbs, or other data that you want to be reminded about.

### Task: Advanced: Add a React app as a front-end

- Make a very simple React app called quotes-react-app
- Have it fetch a random quote from your server on glitch
- (Bonus: Allow the user to get a new random quote from the server, by clicking a button or clicking the quote.)
- Host your react app on netlify
- Post the URL to your hosted React app on Slack.

## Example screenshot of Simple React app

Here's an example of how your react app might look.
Note I didn't add a "get new quote" button here.
![Example Screenshot of React App](./screenshots/example_react_quotes_app.png)
