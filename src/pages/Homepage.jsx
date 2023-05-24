import { Link } from "react-router-dom";
import { Cardcontentcomp, Layout, Titlecomp } from "../components";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const Homepage = () => {
  return (
    <Layout>
      <div className="w-full md:h-96 h-52  md:mt-60 mt-20 flex">
        <div className="space-y-4">
          <p className="lg:text-[60px] text-3xl">Selamat datang di website</p>
          <p className="lg:text-[25px] text-xl">
            Belajar pemrogramman dan edukasi mahasiswa
          </p>
          <div className="flex space-x-5 mt-2">
            <Link
              target="_blank"
              to="https://github.com/ronalissaputra"
              className="text-[30px] text-red-500"
            >
              <BsGithub />
            </Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/ronalis-saputra-057994245/"
            >
              <BsLinkedin className="text-[30px] text-blue-500" />
            </Link>
            <Link
              target="_blank"
              to={`https://api.whatsapp.com/send?phone=${6282188079182}`}
            >
              <BsWhatsapp className="text-[30px] text-green-500" />
            </Link>
          </div>
        </div>
      </div>
      <Titlecomp>Frontend Learn</Titlecomp>
      <Cardcontentcomp />
      <Titlecomp>Backend Learn</Titlecomp>
    </Layout>
  );
};

export default Homepage;
