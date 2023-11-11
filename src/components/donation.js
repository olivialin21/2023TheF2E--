import { useContext, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import counterUp from "counterup2";
import { StoreContext } from "../store"
import { flipCard } from '../actions'
import titleDonation from "../images/title-donation.svg";
import textTotal from "../images/text-donation-total.svg";
import IconCoin from "../images/icon-coin.svg";
import text600 from "../images/text-donation-NT600.svg";
import text6000 from "../images/text-donation-NT6000.svg";
import text60000 from "../images/text-donation-NT60000.svg";

export default function Donation() {
  const { state: { donation: { card: { isFlipped } } }, dispatch } = useContext(StoreContext);
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

const toggleCard = (e) => {
  e.preventDefault();
  dispatch(flipCard());
}

const donateInputOnClick = (e) => {
  e.preventDefault();
  document.getElementById('option4').checked = true;
}

return (
  <section className="donation" id="donation">
    <Container>
      <div className={`donation-card ${isFlipped ? "flipped" : ""}`}>
        <div className="donation-card-inner">
          <div className="donation-card-front">
            <img className="donation-card-front-title" src={titleDonation} alt="小額捐款" />
            <p className="donation-card-front-text">您的小筆捐款，是每隻毛孩未來的大大動力！</p>
            <img className="donation-card-front-total" src={textTotal} alt="累積總金額" />
            <p ref={counterRef} className="donation-card-front-totalNum" id="counter">NT$987,655,873</p>
            <button className="donation-card-front-goToDanate" onClick={toggleCard}><img src={IconCoin} alt="icon-coin" />前往捐款</button>
          </div>
          <div className="donation-card-back">
            <form action="" className="donation-card-back-container">
              <h4 className="donation-card-back-title">選擇捐款方案</h4>
              <ul className="donation-card-back-list">
                <li className="donation-card-back-item">
                  <input type="radio" id="option1" name="options" value={{ caseName: "喵星人之友", money: "NT$6000" }} />
                  <label htmlFor="option1">
                    <h5>喵星人之友</h5>
                    <img src={text600} alt="NT$600" />
                    <p>已有 9957 人贊助</p>
                  </label>
                </li>
                <li className="donation-card-back-item">
                  <input type="radio" id="option2" name="options" value={{ caseName: "喵星大使", money: "NT$6000" }} />
                  <label htmlFor="option2">
                    <h5>喵星大使</h5>
                    <img src={text6000} alt="NT$6000" />
                    <p>已有 2000 人贊助</p>
                  </label>
                </li>
                <li className="donation-card-back-item">
                  <input type="radio" id="option3" name="options" value={{ caseName: "喵星傳奇", money: "NT$60000" }} />
                  <label htmlFor="option3">
                    <h5>喵星傳奇</h5>
                    <img src={text60000} alt="NT$60000" />
                    <p>已有 9957 人贊助</p>
                  </label>
                </li>
              </ul>
              <div className="donation-card-back-input">
                <input type="radio" id="option4" name="options" value="" />
                <label htmlFor="option4">
                  <p>自訂捐款金額</p>
                  <input type="text" name="otherText" placeholder="請填寫其他" onClick={donateInputOnClick}></input>
                </label>
              </div>
              <div className="donation-card-back-btn">
                <button className="donation-card-back-goBack" onClick={toggleCard}>返回</button>
                <button className="donation-card-back-goToDanate"><img src={IconCoin} alt="icon-coin" />我要捐款</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  </section>
)
}