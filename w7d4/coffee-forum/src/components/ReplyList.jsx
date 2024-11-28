import ReplyListItem from "./ReplyListItem";

export default function ReplyList(props) {
  const { authors, replies, vote } = props;

  const parsedReplies =
    Array.isArray(replies) &&
    replies.map((reply) => (
      <ReplyListItem author={authors[reply.authorId]} {...reply} vote={vote} />
    ));

  return <section className="ReplyList">
    {parsedReplies}
  </section>;
}
