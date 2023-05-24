import { Layout } from "../components";
import { useParams } from "react-router-dom";
import { frontends } from "../datadummy/frontenddata";
import Titlecomp from "../components/Titlecomp";

const Detailpage = () => {
  const { id } = useParams();
  const getById = (id) => {
    return frontends.find((item) => item.id === id);
  };

  const frontendId = `${id}`;
  const frontend = getById(frontendId);
  console.log(frontend);

  return (
    <Layout>
      <div>
        <div className="">
          <div className="flex items-center space-x-2 mb-5">
            <p className="text-2xl">Belajar : {frontend.title}</p>
          </div>
          <p className={`${frontend.color} text-2xl my-8`}>
            Pengertian {frontend.title}
          </p>
          <div className="text-xl mt-2 text-slate-600 space-y-4 text-justify">
            <p>{frontend.paragraf1}</p>
            <p>{frontend.paragraf2}</p>
            <p>{frontend.paragraf3}</p>
            <p>{frontend.paragraf4}</p>
          </div>
          <p className={`${frontend.color} text-2xl my-8`}>
            Contoh penggunaan {frontend.title}
          </p>
          <img src={frontend.contoh} alt="" />
          <div className="text-xl mt-8 text-slate-600 space-y-4 text-justify">
            <p>{frontend.penjelasan}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detailpage;
