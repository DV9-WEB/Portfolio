const Contact = () => {
  return (
    <main className="max-w-4xl w-full mx-auto py-20 px-4 md:px-10">
      <span className="text-4xl">✉️</span>
      <h1 className="text-base md:text-xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-black mb-2">
        Contact Me
      </h1>
      <p className="text-sm lg:text-base font-normal text-secondary mb-10 max-w-xl">
        Reach out to me over email or fill up this contact form. I will get back
        to you ASAP - I promise.
      </p>
      <form
        className="form"
        action="https://formspree.io/f/xqkrvkwn"
        method="POST"
      >
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <input
            placeholder="Your Name"
            name="userName"
            className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
            type="text"
          />
          <input
            placeholder="Your email address"
            name="email"
            className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
            type="email"
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="10"
            className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
          />
        </div>
        <button
          className="w-full px-2 py-2 mt-4 bg-blue-500 rounded-md font-bold text-black-500"
          type="submit"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default Contact;
