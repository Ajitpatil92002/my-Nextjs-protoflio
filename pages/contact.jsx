import { useState } from "react";
import Alert from "../components/Alert";
import Navbar from "../components/Navbar";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const ContactPage = ({
  ReCAPTCHA_sitekey_PROD,
  ReCAPTCHA_SiteKey,
  Emailjs_key,
  Emailjs_SeriviveID,
  Emailjs_TemplateID,
}) => {
  const [contactDetails, setContactDetails] = useState({
    username: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [verfied, setVerifed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleOnchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContactDetails({ ...contactDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(contactDetails);
      setLoading(true);

      setContactDetails({
        username: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      await emailjs.send(
        `${Emailjs_SeriviveID}`,
        `${Emailjs_TemplateID}`,
        contactDetails,
        `${Emailjs_key}`
      );
      setSuccess(true);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAlert = () => {
    setSuccess(!success);
  };

  return (
    <>
      <div className="bg-navy-blue scroll-smooth">
        <Navbar />
        <section>
          <div className="min-h-screen bg-navy-blue text-textlightWhite antialiased px-4 sm:py-12">
            <div className="relative py-3 w-full sm:max-w-xl mx-auto text-center space-y-10">
              <span className="text-2xl font-bold font-mono text-textlightWhite opacity-70">
                Contact Me
              </span>
              <div className="relative mt-4 bg-light-navy shadow-md sm:rounded-lg text-left">
                <div className="h-2 bg-green rounded-t-md"></div>
                <form onSubmit={handleSubmit}>
                  <div className="p-10">
                    <div>
                      <label
                        htmlFor="username"
                        className="block font-semibold mt-3 text-"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        minLength={3}
                        placeholder="username"
                        name="username"
                        id="username"
                        onChange={handleOnchange}
                        value={contactDetails.username}
                        className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-tint rounded-md caret-navy-blue text-navy-blue"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-semibold mt-3"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="email"
                        name="email"
                        id="email"
                        onChange={handleOnchange}
                        value={contactDetails.email}
                        className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-tint rounded-md caret-navy-blue text-navy-blue"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block font-semibold mt-3"
                      >
                        Phone
                      </label>
                      <input
                        type="phone"
                        placeholder="phone"
                        name="phone"
                        id="phone"
                        onChange={handleOnchange}
                        value={contactDetails.phone}
                        className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-tint rounded-md caret-navy-blue text-navy-blue"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block font-semibold mt-3"
                      >
                        subject
                      </label>
                      <input
                        minLength={3}
                        type="subject"
                        placeholder="subject"
                        name="subject"
                        onChange={handleOnchange}
                        value={contactDetails.subject}
                        id="subject"
                        className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-tint rounded-md caret-navy-blue text-navy-blue"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block font-semibold mt-3"
                      >
                        message
                      </label>
                      <textarea
                        minLength={10}
                        type="message"
                        placeholder="message"
                        name="message"
                        onChange={handleOnchange}
                        value={contactDetails.message}
                        id="message"
                        className="border w-full px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-tint rounded-md caret-navy-blue text-navy-blue"
                        required
                      />
                    </div>
                    {success && (
                      <Alert
                        textColor={"#64ffda"}
                        type={"Message Sent SuccessFully"}
                        msg={"I will Get Back soon"}
                        handleAlert={handleAlert}
                      />
                    )}

                    <div className="flex justify-between md:items-center flex-col md:flex-row mt-4">
                      <ReCAPTCHA
                        className="mt-2"
                        sitekey={`ReCAPTCHA_sitekey_PROD`}
                        // sitekey={`${process.env.ReCAPTCHA_sitekey}`} //for testing
                        onChange={() => {
                          setVerifed(true);
                        }}
                      />
                      <button
                        type="submit"
                        disabled={loading || !verfied}
                        className="mt-4 border disabled:cursor-not-allowed font-mono border-green hover:bg-green-tint text-white py-2 px-6 rounded-lg block"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;

export const getStaticProps = async (ctx) => {
  const ReCAPTCHA_SiteKey = process.env.ReCAPTCHA_sitekey;
  const ReCAPTCHA_sitekey_PROD = process.env.ReCAPTCHA_sitekey_PROD;
  const Emailjs_key = process.env.Emailjs_key;
  const Emailjs_SeriviveID = process.env.Emailjs_SeriviveID;
  const Emailjs_TemplateID = process.env.Emailjs_TemplateID;
  return {
    props: {
      ReCAPTCHA_sitekey_PROD,
      ReCAPTCHA_SiteKey,
      Emailjs_key,
      Emailjs_SeriviveID,
      Emailjs_TemplateID,
    },
  };
};
