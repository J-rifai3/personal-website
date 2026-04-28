function CsContactPage() {
  return (
    <section className="page-card">
      <p className="eyebrow">Contact</p>
      <h2>Let&apos;s connect.</h2>
      <p className="lead">Feel free to reach out to me via email, LinkedIn, or my phone number!</p>
      <div className="contact-panel">
        <p>
          <strong>Email:</strong>{' '}
          <a className="contact-link" href="mailto:jrifai3@gatech.edu">
            jrifai3@gatech.edu
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/jude-rifai"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/jude-rifai
          </a>
        </p>
        <p>
          <strong>Phone:</strong>{' '}
          <a className="contact-link" href="tel:+17622316652">
            (762) 231-6652
          </a>
        </p>
        <p>
          <strong>Location:</strong> Atlanta, GA
        </p>
      </div>
    </section>
  )
}

export default CsContactPage
