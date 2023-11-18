import { useContext, useEffect, useState, useRef } from 'react';
import { Container, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { StoreContext } from "../store";
import { setFormInputError, setFormError } from '../actions';
import titleEmail from "../images/title-email.svg";

export default function Email() {
  const { state: { email: { formInputError, formError } }, dispatch } = useContext(StoreContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const sendMessenge = (e) => {
    e.preventDefault();
    setShow(true);
    const formInputs = document.querySelectorAll('.email-content-form-input, .email-content-form textarea');
    const inputEmpty = {};

    let formEmptyStatus = false;
    formInputs.forEach((input) => {
      inputEmpty[input.name] = input.value.trim() === "" ? true : false;
      if (input.value.trim() === "") { formEmptyStatus = true };
    });
    dispatch(setFormError(formEmptyStatus));
    dispatch(setFormInputError(inputEmpty));

    if (!formEmptyStatus) {
      formInputs.forEach((input) => {
        input.value = "";
      });
    };
  }

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value.trim() === '';

    dispatch(setFormInputError({ ...formInputError, [inputName]: inputValue }));
  }

  return (
    <>
      <section className="email" id="email">
        <Container data-aos="fade-up" data-aos-offset="800">
          <div className="row email-content">
            <div className="col-lg-7 col-sm-12 col-xs-12 email-content-text">
              <img className="email-content-title" src={titleEmail} alt="民眾服務信箱" />
              <p className="email-content-text-1">您的聲音，我們的行動！</p>
              <p className="email-content-text-2">親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！</p>
            </div>
            <form className="col-lg-5 col-sm-12 col-xs-12 email-content-form" action="">
              <input name="name" type="text" className={`email-content-form-input ${formInputError.name ? "error" : ""}`} placeholder="您的姓名" onChange={handleInputChange} />
              <input name="email" type="email" className={`email-content-form-input ${formInputError.email ? "error" : ""}`} placeholder="您的 Email" onChange={handleInputChange} />
              <input name="tel" type="tel" className={`email-content-form-input ${formInputError.tel ? "error" : ""}`} placeholder="您的手機" onChange={handleInputChange} />
              <textarea name="message" className={`email-content-form-textarea ${formInputError.message ? "error" : ""}`} placeholder="您的建言" onChange={handleInputChange}></textarea>
              <input type="submit" className="email-content-form-btn" value="送出意見" onClick={sendMessenge} />
            </form>
          </div>

          <Modal
            className="email-modal"
            show={show}
            onHide={handleClose}
          >
            {
              formError ? (
                <>
                  <h4 className="mb-5">請填寫完整資料</h4>
                  <button onClick={handleClose}>返回</button>
                </>
              ) : (
                <>
                  <h4>感謝您抽出寶貴的時間給予我們寶貴的建議</h4>
                  <p>我們非常重視您的意見，它是我們不斷改進和提升服務的動力。您提出的建議已經轉交給相關部門進行評估，我們將努力在未來的服務中加以考慮和實施。</p>
                  <button onClick={handleClose}>返回</button>
                </>
              )
            }
          </Modal>
        </Container>
      </section>
    </>
  )
}