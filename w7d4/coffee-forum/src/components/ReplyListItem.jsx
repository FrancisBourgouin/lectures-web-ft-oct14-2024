export default function ReplyListItem(props) {
  const {content, likes, author, vote, id} = props
  return (
    <article className="ReplyListItem">
      <h1>{author.name}</h1>
      <img src={author.profile_url} alt="" />
      <p>
        {content}
      </p>
      <section>
        <button onClick={() => vote(id, false)}>-</button>
        <span>{likes}</span>
        <button onClick={() => vote(id, true)}>+</button>
      </section>
    </article>
  );
}
