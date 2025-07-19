import BookDetailsClient from './book-details-client';
import { Book } from '@/lib/data';

interface BookDetailsWrapperProps {
  book: Book;
}

export default function BookDetailsWrapper({ book }: BookDetailsWrapperProps) {
  return <BookDetailsClient book={book} />;
}