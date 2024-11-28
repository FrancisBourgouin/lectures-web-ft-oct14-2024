import "./App.scss";
import Header from "./components/Header";
import Question from "./components/Question";
import ReplyForm from "./components/ReplyForm";
import ReplyList from "./components/ReplyList";
import ReplyListItem from "./components/ReplyListItem";
import { forumPost } from "./data/postData";
import { usersObj } from "./data/userData";

function App() {
  const replyListItemData = forumPost.replies[0];
  const replyListData = forumPost.replies;
  const authors = usersObj;
  const author = usersObj[replyListItemData.authorId];
  const fakeVote = (replyId, isUpvote) => {
    console.log("CALLED!", replyId, isUpvote);
  };

  // return <Header />
  // return <ReplyListItem {...replyListItemData} author={author} vote={fakeVote}/>
  // return <ReplyList replies={replyListData} vote={fakeVote} authors={authors} />;
  // return <ReplyForm onSubmit={(reply) => console.log("CALLED!", reply)} />;
  // return <Question {...forumPost} authors={authors}/>
  return (
    <>
      <Header />
      <Question {...forumPost} authors={authors}/>
    </>
  )
}

export default App;
