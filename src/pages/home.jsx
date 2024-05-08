import Header from "../components/header";
import Footer from "../components/footer";
import Carousel from "../components/carousel";
import FAQ from "../components/faq";
const Home = () => {
  return (
    // <div>
    //   <img src={logo} alt='brunel' className='mb-8' />
    //   <h1 className='text-3xl'>Primary font</h1>
    //   <h1 className='font-coveredByYourGrace text-3xl'>Seconday font</h1>
    //   <h1 className='font-switzer text-3xl'>Tertiary font</h1>
    // </div>
    <>
      <Header />
      <div className="flex flex-col gap-32">
        <Carousel />
        <FAQ />
      </div>
      <Footer />
    </>

  );
};

export default Home;
