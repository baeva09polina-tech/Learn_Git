# Dynamic Employee Reviews

This page displays employee details from `names.json` instead of using a
hard-coded list in JavaScript.

## Changes

- `app.js` fetches `names.json` and builds the displayed records from its
  `employees` array.
- Each record shows the employee's name, job title, image, tech stack, and
  email address. The name is taken from `userName`, or from `firstName` and
  `lastName` when those are provided. A default job title is used when
  `jobTitleName` is missing.
- The previous, next, and surprise-me buttons navigate through the loaded
  employees. The controls are disabled until the data loads.
- `index.html` shows a loading label, provides an accessible image description
  and button labels, and includes an area for data-loading errors.
- If the data cannot be fetched or does not contain a non-empty `employees`
  array, the page logs the error to the browser console and displays a message.

## Run the page

Because the app fetches a JSON file, open it from a local web server rather
than directly as a `file://` URL. For example, use the VS Code Live Server
extension and open `index.html`.

## Employee data

The JSON file must have an `employees` array. Each employee should provide
`techstack` (an array), `image`, and `emailAddress`, as well as either
`userName` or `firstName` and `lastName`. `jobTitleName` is optional.
