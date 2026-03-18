export default function CommentsPage({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <main>
      <h1>Комментарии к товару {id}</h1>
      <p>Здесь будут комментарии для товара с идентификатором {id}.</p>
      <a href={`/products/${id}`}>Назад к товару</a>
    </main>
  );
}