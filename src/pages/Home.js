import Header from '../components/Header'
import Candidate from '../components/Candidate'
import Activity from '../components/Activity'
import Policy from '../components/Policy'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <div className="body-border"></div>
      <Header />
      <Candidate />
      <Activity />
      <Policy />
      <Footer />
    </>
  )
}

export default Home;