import contactBgImage from '../../../assets/contact-background.jpg'
import Materials from '../home/Materails';
import Testimonials from '../home/Testimonials';

const ContactPage = () => {
  return (
    <section>
      <div
        className="w-full h-[400px] bg-no-repeat bg-cover flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${contactBgImage})` }}
      >
        <div>
          <h1 className="text-5xl font-bold underline underline-offset-4">Contact Us</h1>
        </div>
      </div>
      <Materials />
      <Testimonials/>
    </section>
  );
};

export default ContactPage;
