import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

function ArticleItem({ article }) {
  return (
    <div>
      <Link href="/article/[id]" as={`/article/${article.id}`} legacyBehavior>
        <a className={articleStyles.card}>
          <h3>{article.title} &rarr;</h3>
          <p>{article.excerpt}</p>
        </a>
      </Link>
    </div>
  )
}

export default ArticleItem
