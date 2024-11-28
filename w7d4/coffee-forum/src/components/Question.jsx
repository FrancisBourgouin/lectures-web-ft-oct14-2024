import ReplyForm from "./ReplyForm";
import ReplyList from "./ReplyList";

export default function Question(props) {
  const { authorId, authors, id, likes, question, replies, title } = props;
  const fakeVote = (replyId, isUpvote) => {
    console.log("CALLED!", replyId, isUpvote);
  };

  const questionAuthor = authors[authorId]

  return (
    <main className="Question">
      <header>
        <h1>{question}</h1>
        <h2>
          <img src={questionAuthor.profile_url} alt="" />
          <span>{questionAuthor.name}</span>
        </h2>
      </header>
      <ReplyList replies={replies} vote={fakeVote} authors={authors} />
      <ReplyForm onSubmit={(reply) => console.log("CALLED!", reply)} />
    </main>
  );
}
