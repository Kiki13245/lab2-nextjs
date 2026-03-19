import { Metadata } from 'next';
import { getPost } from '../../../lib/data'; // путь может отличаться

type Props = {
  params: Promise<{ id: string }>;
};

// Генерация метаданных на основе id
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await getPost(id);
  return {
    title: post.title,
    description: post.body.slice(0, 160),
    openGraph: {
      title: post.title,
      description: post.body.slice(0, 160),
      type: 'article',
    },
  };
}

// Сама страница
export default async function PostPage({ params }: Props) {
  const { id } = await params;
  const post = await getPost(id);
  return (
    <main style={{ padding: '2rem' }}>
      <h1>{post.title}</h1>
      <p><strong>Post ID:</strong> {post.id}</p>
      <p><strong>User ID:</strong> {post.userId}</p>
      <article>{post.body}</article>
      <hr />
      <a href="/posts">← К списку постов</a> (если список будет создан)
    </main>
  );
}