import { Container } from 'react-bootstrap';
import { useEffect, useRef } from 'react';
import titleDonation from "../images/text-donation-total.svg";
import textTotal from "../images/title-donation.svg";
import { ReactComponent as IconCoin } from "../images/icon-coin.svg";
import counterUp from "counterup2";

export default function Donation() {
  const counterRef = useRef(null);

  const handleScroll = () => {
    const element = counterRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top <= windowHeight && rect.bottom >= 0) {
      counterUp(element, {
        duration: 1000,
        delay: 16,
      });
      window.removeEventListener('scroll', handleScroll);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="donation" id="donation">
      <Container>
        <div className="donation-card">
          <img className="donation-card-title" src={titleDonation} alt="小額捐款" />
          <p className="donation-card-text">您的小筆捐款，是每隻毛孩未來的大大動力！</p>
          <img className="donation-card-total" src={textTotal} alt="累積總金額" />
          <p ref={counterRef} className="donation-card-totalNum" id="counter">NT$987,655,873</p>
          <button className="donation-card-goToDanate">前往捐款</button>
        </div>
        {/* <div className="donation-card">
          <img src={titleDonation} alt="小額捐款" />
          <p>您的小筆捐款，是每隻毛孩未來的大大動力！</p>
          <img src={textTotal} alt="累積總金額" />
          <p>NT$987,655,873</p>
          <button>前往捐款</button>
        </div> */}

      </Container>
    </section>
  )
}