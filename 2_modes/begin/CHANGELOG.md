# Change Notes

## Interactive demo button message

### Change required

In `script.js`, change the text assigned to `title.textContent` in the button's click handler:

- Current: `You have clicked the button.`
- Expected: `You clicked the button!`

### Reason

The click handler currently updates the heading, but its message does not match the required text.

### Files

- `script.js` — update the heading text in the click handler.
- `index.html` and `style.css` — no changes are required for this fix.

### Verification

Open `index.html` in a browser, click **Update Title**, and confirm the heading reads exactly **You clicked the button!**.
