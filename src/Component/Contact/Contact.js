import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <Nav />
      <div className="contact-container">
        <header className="contact__header">
          <h1>Contact</h1>
        </header>
        <div className="contact_quote">
          <h4>"XXXXXX"</h4>
          <h4>-XXXDXy</h4>
        </div>
        <main className="contact-main">
          <div className="contact-main__left">
            <section className="main__left__instructions">
              <h2>Reaching out to me</h2>
              <p>
                Don't be afraid to contact me! I'm happy to answer any
                questions, provide more information, or just have a nice
                conversation! Fill out the form below to being reaching out to
                me. If you prefer another email client other than your default,
                which will appear after clicking the button and have all of the
                information you just entered, you can email me at XXXXXX.
              </p>
            </section>
            <section className="main__left__info">
              <h2>Contact Information</h2>
              <p>XXXX</p>
              <p>XXXX</p>
              <p>(XXXX)-445-7747</p>
              <p>XXXXXX@gmail.com</p>
            </section>
          </div>
          <div className="contact-main__right">
            <form>
              <div class="row">
                <div class="col-sm-6 col-md-6">
                  <div class="firstname">
                    <h4>Full Name *</h4>
                    <input type="text" placeholder="First Name" />
                  </div>
                </div>

                <div class="col-sm-6 col-md-6">
                  <div class="lastname">
                    <h4>Full Name *</h4>
                    <input type="text" placeholder="Last Name" />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12 col-md-12">
                  <div class="email">
                    <h4>Email *</h4>
                    <input type="text" placeholder="Email" />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12 col-md-12">
                  <div class="message">
                    <h4>Message *</h4>
                    <textarea placeholder="Message"></textarea>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
                  <div class="submit-contact">
                    <a class="btn btn-default btn-border" href="/#">
                      Submit
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
}
