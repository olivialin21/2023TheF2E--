import { useEffect } from 'react';
import AOS from 'aos';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from '../components/Header';
import Candidate from '../components/Candidate';
import Activity from '../components/Activity';
import Policy from '../components/Policy';
import Donation from '../components/Donation';
import Email from '../components/Email';
import Footer from '../components/Footer';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // 設定你想要的動畫持續時間
      once: true, // 讓所有動畫只撥放一次
      disable: function() {
        var maxWidth = 1200;
        return window.innerWidth < maxWidth;
      }
    });
    AOS.refresh(); // 建議在 React 組件渲染後呼叫 refresh() 以觸發動畫
  }, []);

  return (
    <>
      <ParallaxProvider>
        <div className="body-border"></div>
        <Header />
        <Candidate />
        <Activity />
        {/* <Policy /> */}
        {/* <Donation /> */}
        {/* <Email />/ */}
        {/* <Footer /> */}
      </ParallaxProvider>
    </>
  )
}

export default Home;