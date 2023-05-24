import { Layout } from "../components";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/BS";

const Homepage = () => {
  return (
    <Layout>
      <div className="w-full h-96 lg:mt-60 flex">
        <div className="space-y-4">
          <p className="lg:text-[60px] text-3xl">Selamat datang di website</p>
          <p className="lg:text-[25px] text-xl">
            Belajar pemrogramman dan edukasi mahasiswa
          </p>
          <div className="flex space-x-5 mt-2">
            <button className="text-[30px] text-red-500">
              <BsGithub />
            </button>
            <button>
              <BsLinkedin className="text-[30px] text-blue-500" />
            </button>
            <button>
              <BsWhatsapp className="text-[30px] text-green-500" />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
