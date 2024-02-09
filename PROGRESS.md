## Progress

### Demo 

![GitHub Image](/public/skoove-code-demo.gif)

### In regards to handling deeply nested comments

- To enhance user experience and maintain UI manageability, the comment system could implement collapsing comments at a certain depth. For instance, when a CommentCard is deeply nested, occupying around 50% of the screen height on mobile devices or 75% on desktops, a "View more replies..." button could be displayed.
- Clicking on "View more replies..." would expand the thread, revealing further comments. Alternatively, the button could lead to a separate page dedicated to the expanded thread, providing a more comprehensive view of the conversation.

### In regards to handling high volume of comments

- In tackling the challenge of managing a large volume of comments, I suggest implementing pagination both on the backend and frontend. Pagination involves fetching a predetermined number of comments at a time, optimizing network performance by reducing the data transferred in each request.
    - Additionally, we can further enhance the user experience by initially loading a limited number of comments and incorporating a "View more" button. This approach allows users to load additional comments incrementally, providing a balance between performance and content accessibility.
- To address the influx of comments efficiently, we could integrate a WebSocket-based solution. With this approach, whenever a user submits a new comment within an ongoing conversation, it would dynamically appear without requiring a page refresh, providing users with real-time updates.

## Additional Notes

- Regarding the structure of the Comment interface, the commentId field serves as a unique identifier for each comment within the system. By assigning a numerical value to commentId, we ensure that each comment is uniquely identifiable, facilitating various operations such as retrieval, update, and deletion.
    - Additionally, the commentId field serves as a reference point for managing parent-child relationships within nested comments. By including a parentId field, we establish hierarchical connections between comments, enabling threaded discussions and structured comment sections. 
    I unfortunately did not get around to it due to time constraints, but I would have worked on a method to match the userids with the commentId the user clicked on, so the submitted comment would be added and nested correctly as the last item in the `comment.replies` array
- The nesting structure is achieved through recursion, where each nested reply is rendered using another instance of the `CommentCard` component
    - Pros
        - Simplifies the rendering of nested data structures such as threaded comments.
        - Provides a clean and concise way to represent hierarchical relationships.
    Cons
        - Can lead to performance issues if the depth of recursion is too high.
        - Needs proper handling to avoid infinite loops
- The CommentsProvider context provider manages the state of comment data within the application. It utilizes React's context API to provide comment data to all components that need access to it, ensuring a consistent and centralized approach to state management
- The `addReply` funcition is designed to handle the addition of a new comment or reply within a threaded comment system. It accepts an array of comments, the new comment to be added, and an optional parent ID indicating the comment to which the new reply should be attached. If no parent ID is provided, the new comment is added at the top level of the comment hierarchy. If a parent ID is provided, the function recursively traverses the comment tree to locate the parent comment and appends the new reply to its list of replies. Finally, it returns the updated array of comments with the new comment appended in the appropriate location.
- The timestamp in the `mockApi.json` would (ideally) be of ISO 8601 Format
    - Regarding the timestamp, I would also implement a custom hook calculating the time difference between the current time and the timestamp. Based on this difference, this would determine whether to display "a few minutes ago" or "a few hours ago", etc.
- For the Button component, while I decided to follow the typical naming conventions used for a style guide (i.e. Primary, Secondary, Tertiary, etc.), instead of defining the buttons based on their purpose
- On that note, I would have typically `theme.ts` file to place all the styles  
    - Make the repo more consistent between using Tailwind and `theme.ts`
- Implement proper breakpoints in the `theme.ts` that would follow the style guide. (4px, 8px, 16px, etc.) Admittedly, it was a bit challenging to get these values automatically on the free version of Figma
- Add an onFocus when selecting the textbox. I decided against it to follow the Figma guidelines
- I installed `react-contenteditable` to apply different styling to different variables in the text form
    - On that note, doing more research on libraries to help with this would be another nice-to-have. While I could customize styling with the `ContentEditable` component, there doesn't seem to be a way to place any placeholder text
- I also installed `@testing-library/react-hooks`
- I used `&nbsp;` (non-breaking space HTML entity) to ensure the space is recognized in the HTML content. This approach is useful if you want the space to be part of the HTML structure and not collapse in certain HTML rendering situations.
- For keeping the `@userId` annotated in blue
    - I initially wanted to keep the userId (when replying to a user) blue on submission, but this involved some extra steps that I felt were unncessary to implement given the time constraints, but I thought might be nice to reference here.
- I would have ideally liked to have more time posting a comment within a nested reply.
- With more time, I would like to deal with more error-handling/edge-cases for the instance that the comment/`Comment` type is undefined (and would be an additional unit test)
- I wrote tests for the two main components: `CommentSubmissionForm` and `CommentCard` based on importance of functionality
    - Ideally, I would have also liked to write tests for the `CommentsLists` page to show tests if data if the context wasn't found/api wasn't loaded or null
- I decided to add a translations file
    - While English is the only language used/needed in this case, I thought it served as best practice when designing for for easy configurability, anticipating future changes