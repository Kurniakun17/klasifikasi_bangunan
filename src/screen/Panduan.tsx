import { Button } from '@/components/ui/button';

import { useNavigate } from 'react-router-dom';

const Panduan = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-12 m-auto px-12 flex flex-col justify-center items-center gap-5">
      <Button
        className="fixed font-semibold text-lg top-10 left-10 bg-white hover:bg-gray-300 text-gray-800"
        onClick={() => navigate('/home')}
      >
        <p className="text-black">{'< Back'}</p>
      </Button>
      <div className="text-xl flex flex-col gap-4 font-semibold bg-slate-600 p-6 rounded-xl">
        <ol type="1">
          <li className="flex flex-col justify-center mb-10 gap-2 items-center">
            <p className="w-full ">
              1. Tekan tombol mulai untuk masuk kedalam halaman prediksi
            </p>
            <img className="max-w-[400px]" src="/step-1.png" alt="" />
          </li>

          <li className="flex flex-col justify-center mb-10 gap-2 items-center">
            <p className="w-full ">
              2. Masukan gambar bangunan bersejarah yang ingin diklasifikasi
            </p>
            <img className="max-w-[400px]" src="/step-2.png" alt="" />
          </li>
          <li className="flex flex-col justify-center mb-10 gap-2 items-center">
            <p className="w-full text-start">
              3. Tunggu hingga hasil prediksi keluar
            </p>
            <img className="max-w-[400px]" src="/step-3.png" alt="" />
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Panduan;
