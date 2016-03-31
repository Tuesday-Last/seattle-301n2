# Pair Assignment for Class 14 - Managing Application State

Let's circle back to our UI logic... Ya know, everything that sets up the page for interaction. Now we can use our new tools of routing, middleware, MVC separation, SQL, and resource rendering.

<<<<<<< HEAD
Let's use these new tools to review the refactored components of the UI: author filter, category filter, the teaser link, and a bunch of click events.

Work with a pair to comment on the execution path for sections labeled with "COMMENT:".  These items are essentially TODO items that have been done for you and demonstrate the concepts presented during lecture this morning.  While you will not be building out any additional functionality for this assignment, you will need to describe what each newly refactored method does and where it points back to.  The navigator for this assignment should be tracing the execution path and determining what each new method/update is doing while the driver will need to summarize the navigator's thoughts into a 1-2 sentence comment (below each "COMMENT:" item).  Be sure to switch roles after 4-5 COMMENT items have been completed.

## Helpful Hints?
 - Review the `Article.findWhere` method.  This lets you grab a subset of articles by some field/value combo you pass in.
 - The "Read On" link is now a standard html link.
 - The filters now populate based on what's in the DB, not what's in the DOM: "single source of truth"
 - If there are spaces in a URL, we have replaced them with a '+'
 - This regular expression will match all whitespace in a string: `/\W+/g`

## Technical Requirements and Grading Rubric
 - Ensure your code passes ESLint.
 - Accurately comment on each COMMENT item to demonstrate your understanding of the functionality and the execution path.
=======
Let's use these new tools to refactor each component of the UI: author filter, category filter, the teaser link, and a bunch of click events.

See how many user stories your pair can get through in the allotted time. This is open-ended, and you can refactor the app however you see fit.

## User Stories
 1. As a reader clicking the "Read On" link, I want a page with individual articles, so that I can share one article at a time.
  - Rather than expanding articles in-place, in the index view, it'd be better to have a "page" where we can load any article.
  - If we can specify the id of the article in the url, each article (resource) has it's own place to live, which is more RESTful.
  - We can create a small middleware function to retrieve the one article from the database, then hand off control to the existing index view to render the page.
  - Use a url structure like: '/articles/42'
 1. As a reader, I want articles of the same category to be together under the same URL, so I can discover and share the articles I'm most interested in.
  - Use a url structure like '/category/firewall'
  - With a small middleware function, we can load up just the right subset of articles from the database.
 1. As an author, I want my own URL, so that I can show my mom all my posts in one place.
  - This will work very similarly to the above!

## Helpful Hints?
 - Add a `Article.findWhere` method to let you grab a subset of articles by some field/value combo you pass in.
 - The "Read On" link can now be a standard html link.
 - The filters should populate based on what's in the DB, not what's in the DOM: "single source of truth"
 - If there are spaces in a URL, you might need to replace them with a '+'
 - This regular expression will match all whitespace in a string: `/\W+/g`
 - You can see a [working version](https://mvc-blog.herokuapp.com/category/matrix) deployed on Heroku.

## Technical Requirements and Grading Rubric
 1. Ensure your code passes ESLint.
 - Page changes (like filters) should now work with the browser's back/forward buttons.
 - DRY code by using Page.js middleware: chain calls that handle routes where appropriate.
 - Pipeline object transformations with `.map` where appropriate.
>>>>>>> 2530535780f344b9ad972cced14d67763c433b55
