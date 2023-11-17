import { Container } from 'react-bootstrap';
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode, Pagination } from 'swiper/modules';
import titleActivity from "../images/title-activity.svg";
import imgActivity1 from "../images/img-activity1.png";
import imgActivity2 from "../images/img-activity2.png";
import imgActivity3 from "../images/img-activity3.png";

export default function Activity() {
  // 安裝所需的 Swiper 模組
  // SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

  return (
    <section data-aos="fade-up" data-aos-offset="700" className="activity" id="activity">
      <Container>
        <img className="activity-title" src={titleActivity} alt="最新活動" />

        <div className="activity-list-mobile">
          <Swiper
            centeredSlides={true}
            initialSlide={0}
            spaceBetween={20}
            navigation={false}
            pagination={{ clickable: true, type: 'bullets' }}
            breakpoints={{
              375: { slidesPerView: 1.3 },
              767: { slidesPerView: 1.8 },
            }}
            modules={[FreeMode, Pagination]}
            loop={true}
          >
            <SwiperSlide>
              <div className="activity-list-topNews">
                <div className="activity-list-card activity-list-cardB">
                  <div className="activity-list-card-img">
                    <img src={imgActivity1} alt="參與台北寵物論壇 爭取貓咪友善環境" />
                    <time datatime="2023-12-26"><span>26</span><br />DEC.</time>
                  </div>
                  <div className="activity-list-card-text activity-list-cardB-text">
                    <h3>參與台北寵物論壇 爭取貓咪友善環境</h3>
                    <p>炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="activity-list-card activity-list-cardB">
                <div className="activity-list-card-img">
                  <img src={imgActivity2} alt="帶著你的貓耳，來和我一起走！" />
                  <time datatime="2023-12-26"><span>26</span><br />DEC.</time>
                </div>
                <div className="activity-list-card-text activity-list-cardB-text">
                  <h3>帶著你的貓耳，來和我一起走！</h3>
                  <p>街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <li className="activity-list-card activity-list-cardB">
                <div className="activity-list-card-img">
                  <img src={imgActivity3} alt="收容所模特兒大比拼！" />
                  <time datatime="2023-12-20"><span>20</span><br />DEC.</time>
                </div>
                <div className="activity-list-card-text activity-list-cardB-text">
                  <h3>收容所模特兒大比拼！</h3>
                  <p>活動三消息內容：今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！</p>
                </div>
              </li>
            </SwiperSlide>
            {/* 更多的 Slides */}
          </Swiper>
        </div>

        <div className="row activity-list">
          <div className="col-lg-5 col-xs-7 activity-list-topNews">
            <div className="activity-list-card activity-list-cardB">
              <div className="activity-list-card-img">
                <img src={imgActivity1} alt="參與台北寵物論壇 爭取貓咪友善環境" />
                <time datatime="2023-12-26"><span>26</span><br />DEC.</time>
              </div>
              <div className="activity-list-card-text activity-list-cardB-text">
                <h3>參與台北寵物論壇 爭取貓咪友善環境</h3>
                <p>炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。</p>
              </div>
            </div>
          </div>
          <ul className="col-lg-7 col-xs-7 activity-list-insideList">
            <li className="activity-list-card activity-list-cardS activity-list-cardS-1">
              <div className="activity-list-card-img">
                <img src={imgActivity2} alt="帶著你的貓耳，來和我一起走！" />
              </div>
              <div className="activity-list-card-text activity-list-cardS-text">
                <time datatime="2023-12-26">2023.12.26</time>
                <h3>帶著你的貓耳，來和我一起走！</h3>
                <p>街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。</p>
              </div>
            </li>
            <li className="activity-list-card activity-list-cardS">
              <div className="activity-list-card-img">
                <img src={imgActivity3} alt="收容所模特兒大比拼！" />
              </div>
              <div className="activity-list-card-text activity-list-cardS-text">
                <time datatime="2023-12-20">2023.12.20</time>
                <h3>收容所模特兒大比拼！</h3>
                <p>活動三消息內容：今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！</p>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}