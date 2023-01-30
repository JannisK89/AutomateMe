# Automate Me

## What is Automate Me?

Automate Me is a open source project for developers and test engineers to practice writing web/test automation in a safe and fun environment by completing different challenges that get harder and harder as you progress.

The idea is to use your favorite web/test automation framework documentation as a manual for figuring out how to pass the different challenges.

## How does it work?

It's pretty simple! To your left side (on top if you are on small screens) is a menu that tells you what you need to do for each challenge. When you manage to do what it tells you, you will get an code that says "ASSERTME" that will let you know you completed the level. To navigate between challenges, simply use the back and forward buttons on the side menu although we recommend that you open each challenge in your tests using the corresponding URL.

We also highly recommend that you put each challenge in a separate test and add an assertion for the text "ASSERTME" at the end of each test. That way when the test goes green you know that you completed the challenge and can move on to the next one.

### Playwright (using Javascript)

```
const assertion = page.getByText('ASSERTME')
expect(assertion).toBeVisible()
```

### Cypress

```
cy.contains('ASSERTME')
```

## Are there tutorials included?

For now no, all you get on each challenge is tips for how to solve the challenge that link to the official documentation of the test tools, but it is something we have in mind for the future.

## Can I only use Playwright or Cypress?

No, you are allowed to use any tool you want but the challenges and tips for each challenge are created using Playwright or Cypress in mind.
