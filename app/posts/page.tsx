import Link from 'next/link';

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();
  return (
    <main>
      <h1>Список постов</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}