/* eslint-disable import/no-extraneous-dependencies */
import github from 'bootstrap-icons/icons/github.svg';
import linkedin from 'bootstrap-icons/icons/linkedin.svg';
import behance from 'bootstrap-icons/icons/behance.svg';

function Footer() {
  return (
    <footer className="container py-5">
      <div className="row">
        <div className="col">
          <p className="m-0">Made with 💖 by Faiz Byputra</p>
        </div>
        <div className="col text-end">
          <a href="https://www.linkedin.com/in/faizbyp/" target="_blank" className="mx-2" rel="noreferrer">
            <img src={linkedin} alt="in" height={25} />
          </a>
          <a href="https://github.com/faizbyp" target="_blank" className="mx-2" rel="noreferrer">
            <img src={github} alt="GH" height={25} />
          </a>
          <a href="https://www.behance.net/faizbyp" target="_blank" className="mx-2" rel="noreferrer">
            <img src={behance} alt="Be" height={25} />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
