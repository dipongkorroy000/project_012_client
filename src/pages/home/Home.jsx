import Banner from "./banner/Banner";
import BestWorkers from "./bestWorkers/BestWorkers";
import UserReviewComponent from "./homeComponents/UserReviewComponent";
import NewUserFeaturedComponent from "./homeComponents/NewUserFeaturedComponent";
import SecurityAndTrustComponent from "./homeComponents/SecurityAndTrustComponent";

const Home = () => {
  return (
    <>
      <section className="w-4/6 mx-auto max-xl:w-5/6 mt-20 mb-20 max-md:mb-10">
        <Banner></Banner>
      </section>
      <section className="w-4/6 max-md:my-3 mx-auto max-xl:w-5/6 mt-20 max-md:mb-10">
        <BestWorkers></BestWorkers>
      </section>
      <section className="w-4/6 max-md:mt-20 mx-auto max-xl:w-5/6 my-20">
        <UserReviewComponent></UserReviewComponent>
      </section>
      <section className="w-4/6 max-md:mt-20 mx-auto max-xl:w-5/6 mb-20 mt-32">
        <NewUserFeaturedComponent></NewUserFeaturedComponent>
      </section>
      <section className="w-4/6 max-md:mt-20 mx-auto max-xl:w-5/6 mb-16 mt-32">
        <SecurityAndTrustComponent></SecurityAndTrustComponent>
      </section>
    </>
  );
};

export default Home;
