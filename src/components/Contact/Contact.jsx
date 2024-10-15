import styles from "./ContactStyles.module.css";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xrbggljj");
  console.log(state, handleSubmit);
  if (state.submitting) {
    return (
      <section id="contact" className={styles.container}>
        <p>Submitting...</p>
      </section>
    );
  } else if (state.succeeded)
    return (
      <section id="contact" className={styles.container}>
        <p>
          <b>Thank you for reaching out!</b> I&apos;ll get back to you as soon
          as possible,
        </p>
      </section>
    );

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form
        action="https://formspree.io/f/xrbggljj"
        onSubmit={handleSubmit}
        method="POST"
      >
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="Message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <input
          type="submit"
          className="hover btn"
          value="Submit"
          disabled={state.submitting}
        />
      </form>
    </section>
  );
}

export default Contact;
