import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="grid place-items-center min-h-screen">
      <div className="flex flex-col gap-4 max-w-[600px] w-[85%]">
        <h1 className="text-white text-center text-2xl font-bold">
          Klasifikasi Bangunan Bersejarah pada Daerah Jawa dan Sumatra
        </h1>
        <img className="w-[400px] m-auto py-12" src="AI.svg" alt="" />
        <Button
          onClick={() => navigate('/predict')}
          className="font-semibold text-xl py-6 bg-white hover:bg-gray-300 text-gray-800"
        >
          Mulai
        </Button>
        <Button
          onClick={() => navigate('/panduan')}
          className="font-semibold text-xl py-6 bg-white hover:bg-gray-300 text-gray-800"
        >
          Panduan
        </Button>
        <Button
          onClick={() => navigate('/tentang')}
          className="font-semibold text-xl py-6 bg-white hover:bg-gray-300 text-gray-800"
        >
          Tentang
        </Button>
        {/* <Input className="hover:cursor-pointer" type="file" multiple /> */}
      </div>
    </div>
  );
};

export default Home;
