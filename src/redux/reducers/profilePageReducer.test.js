import profilePageReducer, {
  createPostActionCreator,
} from "./profilePageReducer";
import { postsData } from "../../components/Posts/postsData";

it("length of posts should be incremented", () => {
  let action = createPostActionCreator("Hello, kitty");
  let state = {
      posts: postsData,
    },
    newState = profilePageReducer(state, action);
  expect(newState.posts.length).toBe(5);
});
