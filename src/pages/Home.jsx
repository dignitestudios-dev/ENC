import Hero from "../component/home/Hero";
import Imfor from "../component/home/Imfor";
import BookingBtn from "../component/home/BookingBtn";
import Notes from "../component/home/Notes";
import Donate from "../component/home/Donate";

const Home = () => {
  return (
    <div className="bg-img1">
      <Hero />
      <Imfor />
      <Donate />
      <Notes />
      <BookingBtn />
    </div>
  );
};

export default Home;
