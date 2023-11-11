import { Container } from 'react-bootstrap';
import textTitle1 from "../images/text-candidate-title1.svg";
import textTitle2 from "../images/text-candidate-title2.svg";
import textTitle3 from "../images/text-candidate-title3.svg";
import textTitle4 from "../images/text-candidate-title4.svg";
import textTitle5 from "../images/text-candidate-title5.svg";
import imgCandidate from "../images/img-candidate.png";

export default function Candidate() {
  return (
    <section className="candidate" id="candidate">
      <Container>
        <div className="candidate-keyVision">
          <div className="candidate-titles-1">
            <img className="candidate-title-1" src={textTitle1} alt="2023 THE F2E 立委競選" />
            <img className="candidate-title-2" src={textTitle2} alt="從喵的眼中 看見台灣" />
          </div>
          <div className="candidate-titles-2">
            <img className="candidate-title-3" src={textTitle3} alt="KEEP IT POSSIBLE" />
            <img className="candidate-title-4" src={textTitle4} alt="Miao Li-Han" />
            <img className="candidate-title-5" src={textTitle5} alt="喵立翰" />
            <img className="candidate-image" src={imgCandidate} alt="喵立翰" />
          </div>
        </div>
        <div className="candidate-claim">
          <h2>護航台灣幸福經濟  從照顧每一隻貓咪開始</h2>
          <p>
            我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。<br />
            <br />
            因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。
          </p>
        </div>
      </Container>
    </section>
  )
}