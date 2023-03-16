import Illustration from '../assets/g938.svg';

function Home() {
  return (
    <div className="container">
      <div className="row py-5 text-center">
        <div className="col-12">
          <img src={Illustration} className="img-fluid" alt="" />
        </div>
        <div className="col align-items-center">
          <h1 className="display-1">
            Hello!
            <span className="text-primary"> I&apos;m Faiz</span>
          </h1>
          <p>a CS Student currently have interest in Frontend Web Development</p>
        </div>
      </div>
    </div>
  );
}
export default Home;
