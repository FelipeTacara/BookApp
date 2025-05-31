import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants";

const Home = () => {
  return (
    <>
      <BookOverview {...sampleBooks} />
      <BookList books={sampleBooks} containerClassName={mt - 28} />
    </>
  )
}

export default Home;