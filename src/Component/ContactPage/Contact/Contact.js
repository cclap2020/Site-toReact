import "./Contact.css";

export default function Contact() {
  return (
    <div>
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
            <form className="contact-main__right__form">
              <div className="form__name">
                <section className="name__first-name">
                  <h4>First Name *</h4>
                  <input type="text" placeholder="First Name" />
                </section>

                <section className="name__last-name">
                  <h4>Last Name *</h4>
                  <input type="text" placeholder="Last Name" />
                </section>
              </div>

              <div className="form__email">
                <h4>Email *</h4>
                <input type="text" placeholder="Email" />
              </div>

              <div className="form__message">
                <h4>Message *</h4>
                <textarea placeholder="Message"></textarea>
              </div>

              <div class="form__submit">
                <a href="/#">Submit</a>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
