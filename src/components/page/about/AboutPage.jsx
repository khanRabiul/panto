import bgImage from '../../../assets/about-background.jpg'
import Exprience from '../home/Experience';

const AboutPage = () => {
  return (
    <section>
      <div className='w-full h-[400px] bg-no-repeat bg-cover flex items-center justify-center text-white' style={{backgroundImage: `url(${bgImage})`}}>
        <div>
          <h1 className='text-5xl font-bold underline underline-offset-4'>About Us</h1>
        </div>
      </div>
        <Exprience />
    </section>
  );
};

export default AboutPage;