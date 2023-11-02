import { Button } from '@/components/ui/button';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Panduan = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen m-auto px-12 flex flex-col justify-center items-center gap-5">
      <Button
        className="absolute font-semibold text-lg top-10 left-10 bg-white hover:bg-gray-300 text-gray-800"
        onClick={() => navigate('/home')}
      >
        <p className="text-black">{'< Back'}</p>
      </Button>
      <div className="text-xl flex flex-col gap-4 font-semibold bg-slate-600 p-6 rounded-xl">
        <ol type="1">
          <li>1. Tekan tombol mulai untuk masuk kedalam halaman prediksi</li>
          <li>
            2. Masukan gambar bangunan bersejarah yang ingin diklasifikasi
          </li>
          <li>3. Tunggu hingga hasil prediksi keluar</li>
        </ol>
      </div>
    </div>
  );
};

export default Panduan;
