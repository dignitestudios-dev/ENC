import Hero from "../component/home/Hero";
import Imfor from "../component/home/Imfor";
import BookingBtn from "../component/home/BookingBtn";
import Notes from "../component/home/Notes";
import Donate from "../component/home/Donate";
import Blogs from "../component/blogs/Blogs";

const Home = () => {
  return (
    <div className="bg-img1">
      <Hero />
      <Imfor />
      <Donate />
      <Notes />
      <BookingBtn />
      <Blogs/>
    </div>
  );
};

export default Home;
