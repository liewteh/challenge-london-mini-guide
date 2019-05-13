# Challenge: A Quote Server

### How long will this take?

- 1 hour (level 1)
- 3-4 hours (advanced level)

## Overview: what is this challenge?

In this challenge you must make a server (using Node and Express) which serves quotes, in JSON form.

In the _extended_ work of this challenge, you also make a React app which displays the quotes retrieved from your new server.

Here's how it might look if you make a request to such a server.
![screenshot of the server in use](./screenshots/quote-server-example.png)

## Level 1 Challenge - make the quote server

Your server must have at least these two "routes":

- `/quotes` - returns ALL of the quotes, as JSON.
- `/quotes/random` - returns ONE of the quotes, picked differently at random each time it is requested.

A list of quotes (in JSON format) is provided in this repo [quotes.json](./quotes.json), but it will also be included in the starter project on glitch.  Each quote is a simple object with a quote and an author.

Try to use what you know to do this challenge on your own.  However, there are some steps to guide you, below.

## Start by remixing our example server

- Remix [this server on glitch](https://glitch.com/~cyf-quotes-start)
- Name your new server `yourname-quote-server`
- Make sure you're logged in so that it saves
- Check that it is working by making a request to `/`
- Take time to read the comments

## Add a `/quotes` route

Add a `/quotes` route to return _all_ of the quotes as JSON.

Note that the quotes have already been loaded for you from a JSON file.

Test that your server successfully serves all of the quotes as json by making a request for /quotes from your new server.

## Add a `/quotes/random` route

Add a `/quotes/random` route to return _ONE_ of the quotes, picked randomly on each request.

The JavaScript to pick randomly from an array is actually quite difficult, so we've provided a function to help you, called `pickFromArray`.

If you want a tougher JS challenge, feel free to write your own function which returns one element at random from any given array, and use that!

Test that this route is working too by making a request to `/quotes/random` You should get one quote - an object with a quote and an author.

Be sure to check that the previous routes `/quotes` and `/` are still working, too!

## End of Level 1 challenge!

Well done!

- On Slack, post the address of your server.
- Also post the address when you mark your google classroom assignment done.
- You might want to download your project for safekeeping. (Tools: Git, Import, and Export: Download Project)
- Read the following ideas for further work

https://glitch.com/~cyf-quotes-start

### Ideas for further work

- Use YOUR favourite quotes

- Use the same code to serve something other than quotes - maybe revision notes, proverbs, or other data that you want to be reminded about.

## Challenge: Advanced: Use a library to make random picking easier

In the real world, many developers would use a library like [lodash](https://lodash.com/) to make it simpler to do tasks like picking randomly from an array.

In this extra challenge, you should install and use lodash to do the picking.

[Here's the documentation for its sample() function](https://lodash.com/docs/4.17.11#sample).

Install the lodash library by adding a dependency line in `package.json` - glitch will automatically install it.

Remember to add a "require" line in your server.js

`const lodash = require('lodash');`

then you can use...

`lodash.sample(myArray)`

## Challenge: Advanced: Add a React app as a front-end

- Make a very simple React app called quotes-react-app
- Have it fetch a random quote from your server on glitch
- (Bonus: Allow the user to get a new random quote from the server, by clicking a button or clicking the quote.)
- Host your react app on netlify
- Post the URL to your hosted React app on Slack, and in your google classroom submission (along with your glitch server url)

### Example screenshot of Simple React app

Here's an example of how your react app might look.
Note I didn't add a "get new quote" button here.
![Example Screenshot of React App](./screenshots/example_react_quotes_app.png)



### Credits

I found the quotes list here https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json
