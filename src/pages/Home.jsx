/* eslint-disable import/no-extraneous-dependencies */
import Tilt from 'react-parallax-tilt';
import Illustration from '../assets/g938.svg';
import Pic from '../assets/pic.jpg';

function Home() {
  return (
    <>
      <div className="container py-5">
        <div className="row text-center">
          <div className="col-12">
            <img src={Illustration} width={300} className="img-fluid" alt="" />
          </div>
          <div className="col align-items-center">
            <h1 className="display-1 pt-4">
              Hello!
              <span className="text-primary"> I&apos;m Faiz</span>
            </h1>
            <p>a CS Student who currently have interest in Frontend Web Development</p>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5 bg-lightblue">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 text-center my-4">
              <Tilt tiltReverse tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <img src={Pic} alt="" width={500} className="rounded-4 img-fluid" />
              </Tilt>
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
              <h1 className="display-4 text-primary"><u>About Me</u></h1>
              {/* eslint-disable-next-line max-len */}
              <p>A Computer Science student who puts an interest in creative and technology fields, especially in graphic design, game, and website development. Faiz has a high level of curiosity, able to take the initiative and think critically, full of consideration, and never runs out of ambitions. Faiz always looks for opportunities to develop his capacity, both in terms of soft skills and technical skills.</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
export default Home;
