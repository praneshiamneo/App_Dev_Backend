import Header from './Header';
import Footer from './Footer';
import '../../assets/css/userstyling.css'

function CollegeLandingPage() {
  return (
    <div>
      <Header />
      <section id="hero">
        <h1>Welcome to College Name</h1>
        <p>Prepare for the future with our comprehensive programs</p>
        <a href="#admissions" className="btn">Apply Now</a>
      </section>
      <Footer />
    </div>
  );
}

export default CollegeLandingPage;