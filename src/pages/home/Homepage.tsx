import BuildResume from "./BuildResume";
import CounterPage from "./CounterPage";
import FeaturedProfile from "./FeaturedProfile";
import HomeBlog from "./HomeBlog";
import HomePageBanner from "./HomePageBanner";
import PerformInterview from "./PerformInterview";
import SearchJobs from "./SearchJobs";
import Testimonial from "./Testimonial";

const Homepage = () => {
  return (
    <div>
      <HomePageBanner></HomePageBanner>
      <SearchJobs/>
      <BuildResume/>
      <PerformInterview/>
      <FeaturedProfile></FeaturedProfile>
      {/* <HelpCenter /> */}
      <HomeBlog></HomeBlog>
      <Testimonial/>
      <CounterPage/>
    </div>
  );
};

export default Homepage;
