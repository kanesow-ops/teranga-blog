function ArticleCard({ article }) {
  const extrait = article.body.slice(0, 100) + "...";

  return (
    <article className="article-card">
      <h3>{article.title}</h3>
      <p>{extrait}</p>
    </article>
  );
}

export default ArticleCard;
