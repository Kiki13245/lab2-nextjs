export default function CommentsPage({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <main>
      <h1>Комментарии к товару {id}</h1>
      <a href={`/products/${id}`}>Назад к товару</a>
    </main>
  );
}