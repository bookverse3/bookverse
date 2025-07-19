import { notFound } from 'next/navigation';
import { getBookBySlug, trendingBooks } from '@/lib/data';
import BookDetailsWrapper from './book-details-wrapper';

export async function generateStaticParams() {
  return trendingBooks.map((book) => ({
    slug: book.id,
  }));
}

export default function BookPage({ params }: { params: { slug: string } }) {
  const book = getBookBySlug(params.slug);

  if (!book) {
    notFound();
  }

  return <BookDetailsWrapper book={book} />;
}