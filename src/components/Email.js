import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import titleEmail from "../images/title-email.svg";

export default function Email() {
  return (
    <section className="email" id="email">
      <Container>
        <div className="row email-content">
          <div className="col-7 email-content-text">
            <img className="email-content-title" src={titleEmail} alt="民眾服務信箱" />
            <p>您的聲音，我們的行動！</p>
            <p>親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！</p>
          </div>
          <form className="col-5 email-content-form" action="">
            <input name="name" type="text" className="email-content-form-input" placeholder="您的姓名"/>
            <input name="email" type="email" className="email-content-form-input" placeholder="您的 Email"/>
            <input name="tel" type="tel" className="email-content-form-input" placeholder="您的手機"/>
            <textarea name="message" placeholder="您的建言"></textarea>
            <input type="submit" className="email-content-form-btn" value="送出意見" />
          </form>
        </div>
      </Container>
    </section>
  )
}