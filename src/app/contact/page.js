import React from 'react'
import Contactcard from '../components/ContactCard'
import styles from "./contact.module.css"
import ContactForm from '../components/ContactForm'
const Contact = () => {
  return (
    <div>
      <div className={styles.container}>
       <h1>contact us</h1>
       <Contactcard/>
       <section className={styles.contact_section}>
        <h2>We'd love to hear<span> from you</span> </h2>
        <ContactForm />
       </section>
       </div>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7136.426524955562!2d93.16159479357907!3d26.577531000000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744412d379f65df%3A0x8b2b74b6e7c99458!2sKaziranga%20National%20Park!5e0!3m2!1sen!2sin!4v1688350876934!5m2!1sen!2sin" width={600} height={450} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={styles.mapping}></iframe>
    </div>
  )
}

export default Contact
