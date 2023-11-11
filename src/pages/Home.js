// import { ParallaxProvider } from 'react-scroll-parallax';
import Header from '../components/Header';
import Candidate from '../components/Candidate';
import Activity from '../components/Activity';
import Policy from '../components/Policy';
import Donation from '../components/Donation';
import Email from '../components/Email';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      {/* <ParallaxProvider> */}
      <div className="body-border"></div>
      <Header />
      <Candidate />
      <Activity />
      <Policy />
      <Donation />
      <Email />
      <Footer />
      {/* </ParallaxProvider> */}
    </>
  )
}

export default Home;