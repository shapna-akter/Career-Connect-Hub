import BuildResume from "./BuildResume";
import CounterPage from "./CounterPage";
import FeaturedProfile from "./FeaturedProfile";
import HomeBlog from "./HomeBlog";
import HomePageBanner from "./HomePageBanner";
import HowWorks from "./HowWorks";
import PerformInterview from "./PerformInterview";
import SearchJobs from "./SearchJobs";
import Testimonial from "./Testimonial";

const Homepage = () => {
  return (
    <div>
      <HomePageBanner></HomePageBanner>
      <HowWorks/>
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
