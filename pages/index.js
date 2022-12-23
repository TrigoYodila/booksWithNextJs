import { getFeaturedBooks } from "../api-helpers/frontend/utils";
import BookList from "../components/BookList";

export default function Home({ books }) {
  return <BookList data={books} />;
}

export const getStaticProps = async () => {
  const books = await getFeaturedBooks();

  return {
    props: {
      books,
    },
  };
};
