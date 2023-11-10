import { Container } from 'react-bootstrap';
import titlePolicy from "../images/title-policy.svg";

export default function Policy() {
  return (
    <section className="policy" id="policy">
      <Container>
        <img className="policy-title" src={titlePolicy} alt="政策議題" />
        <ul className="row policy-list">
          <li className="col">
            <div className="policy-list-card">
              <p className="policy-list-card-tag">政策一</p>
              <h3>為毛孩子謀福利！推動寵物醫療保障方案</h3>
              <ol>
                <li>設立寵物醫療基金：每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用</li>
                <li>提供醫療補助：每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力</li>
                <li>合作動物醫院：目前已有和超過 200 家動物醫院進行初步的合作討論</li>
              </ol>
            </div>
          </li>
          <li className="col">
            <div className="policy-list-card policy-list-card-2">
              <p className="policy-list-card-tag">政策二</p>
              <h3>打造休閒天堂！推廣寵物休閒與娛樂場所</h3>
              <ol>
                <li>建立寵物公園：每年撥款新台幣 5 億元，用於在各大都市建立專屬的寵物公園。</li>
                <li>推廣寵物友善商家：鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。預計在政策實施後的首年，將有超過 500 家商家加入此計畫</li>
                <li>舉辦寵物活動和工作坊：與各大寵物社團和組織合作，每年舉辦至少 5 場大型的寵物活動⋯</li>
              </ol>
            </div>
          </li>
          <li className="col">
            <div className="policy-list-card">
              <p className="policy-list-card-tag">政策三</p>
              <h3>推廣寵物飼養教育，讓愛更加專業</h3>
              <ol>
                <li>建立寵物飼養教育中心：每年撥款新台幣 3 億元，用於在全國各地建立專業的寵物飼養教育中心。預計在第一年內，在全國至少 5 大城市設立教育中心。</li>
                <li>推廣寵物飼養課程：與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。預計每年將有超過 10,000 名市民受益。</li>
                <li>製作教育資料：出版寵物飼養手冊、影片和⋯</li>
              </ol>
            </div>
          </li>
        </ul>
      </Container>
    </section >
  )
}