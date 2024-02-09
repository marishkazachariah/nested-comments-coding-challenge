## Skoove Frontend Engineer Coding Challenge

Thanks a lot for taking the time for this challenge and for applying at Skoove. Your assignment consists of writing the code for a mockup design in Figma, representing a system of nested comments with replies. This coding challenge is designed to evaluate your frontend engineering skills, focusing on technical proficiency and system design.

### User Story
As a Skoove user, I want to engage with a community platform that allows me to easily read, post, and interact with comments in a structured and user-friendly way.

### Figma Deliverables
https://drive.google.com/file/d/1R_Jsp3cdrBvYkwpFs8Q8NO9luEZmmY2q/view

### Functional Requirements

- [ ] **Nested comment system display:** The comment system should be displayed in a nested structure as illustrated in the Figma file
- [ ] **Handling high volume of comments:** Although the platform currently doesn't frequently encounter a high volume of comments, consider optimizations to cover edge cases with a big number of comments, preventing overloading the user interface. Suggest possible optimization strategies in the [document](PROGRESS.md) for future discussion
- [ ] **Comment submission form:** 
    - [ ] Users must be able to add comments by submitting a form
    - [ ] There is no validation for comments; users can enter any text without character limits or validation checks
    - [ ] Comments are restricted to textual format only
    - [ ] When a user clicks the 'Reply' button on a comment, the same form should be displayed with two buttons: 'Reply' and 'Cancel'
    - [ ] 'Cancel' button should reset the form to its initial state, allowing users to add a new comment instead of replying
    - [ ] The form should automatically include the username of the user being replied to, as a reference in the reply
- [ ] **Handling deeply nested comments:** The Figma mockup limits the number of nested comments. Consider and propose UX/UI solutions for replying to comments beyond this limit. Ideas can be noted in the [document](PROGRESS.md). The implementation in code is not mandatory. We leave it up to you
- [ ] **Timestamp on comments:** Each comment should display a timestamp indicating when it was created, like '1 day ago', '2 days ago', etc
- [ ] **After refresh behavior:** After refreshing the page, it is acceptable if newly added comments are not saved and only the mock data comments are displayed
- [ ] **Comment reactions:** Each comment has a simple 'Like' button with two states
- [ ] **Language Support:** The platform should support English only, with no requirement for other languages

### Non-functional Requirements

- [ ] **Device compatibility:** Compatibility with the latest versions of mobile browsers is essential. Desktop compatibility should be considered secondary to the mobile experience
- [ ] **Configurability:** Ensure that components are designed for easy configurability, anticipating future changes
- [ ] **Accessibility:** It's not a mandatory, aim to provide basic support for accessibility, considering how users with varying abilities will interact with the platform
- [ ] **Testability:** We recommend writing unit tests to verify the business logic. We leave it up to you to decide which parts of the implementation should be covered by tests, given the constraint of time


### Evaluation Criteria

- [ ] **Correctness**: The implementation should be free of bugs and strictly follows the requirements
- [ ] **Code Quality**: The code should be clean, readable, well-organized, and structured in a way that ensures easy maintenance and future scalability
- [ ] **Visual Implementation**: The implementation should be closely align with the provided Figma mockups
- [ ] **QA**: The implementation should be supported by several unit tests
- [ ] **Documentation**: Feel free to share all thoughts, progress stages and solutions in [document](PROGRESS.md)

### Technical Details

- [ ] **Data storage and state management**: You are free to choose any suitable tools for state management, including various libraries and state managements
- [ ] **Mock data structure:** The task doesn't require any interaction with API. In the 'assets/mockApi.json' folder, put a suitable, scalable structure for mock data that would be received from an API


### How to run the app

| Command             | Description                                               |
|---------------------|-----------------------------------------------------------|
| `npm run start`     | Runs in dev mode                                          |
| `npm run test`      | Runs Unit tests                                           |
| `npm run typecheck` | Runs Typescript checks                                    |
| `npm run lint:fix`  | Runs Eslint to automatically fix prettier & eslint errors |
| `npm run lint`      | Runs Eslint                                               |

