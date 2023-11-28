import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Tentang = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen m-auto max-w-[600px] px-12 flex flex-col justify-center items-center gap-5">
      <Button
        className="absolute top-10 left-10 font-semibold text-lg bg-white hover-bg-gray-300 text-gray-800"
        onClick={() => navigate('/home')}
      >
        <p className="text-black">{'< Back'}</p>
      </Button>
      <div className="flex flex-col gap-4 max-w-[600px] w-[85%] bg-slate-600 p-6 rounded-xl">
        <table className="font-semibold text-lg">
          <tbody>
            <tr>
              <td>Nama </td>
              <td>: Erico</td>
            </tr>
            <tr>
              <td>NIM </td>
              <td>: 535200005</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>: Ericokevin12345@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-box bg-slate-600 p-6 rounded-xl">
        Aplikasi perancangan Bangunan Bersejarah Indonesia merupakan aplikasi
        berbasis website yang bertujuan untuk melakukan pengenalan pada bangunan
        bangunan bersejarah yang terdapat di Jawa, Sumatra, dan Bali melalui
        data input image atau gambar bersejarah di Indonesia.Tujuan dari
        perancangan ini adalah melakukan pengenalan pada bangunan bersejarah
        pura di bali melalui sistem perancangan yang diberi nama “Bangunan
        Bersejarah Indonesia” dengan data input image atau gambar bersejarah di
        indonesia. Metode yang digunakan untuk pengenalan adalah Local Binary
        Pattern dan Support Vector Machine dengan kernel polynomial. Hasil
        luaran perancangan ini pengguna dapat menggenali bangunan bersejarah
        melalui gambar bangunan tersebut
      </div>
    </div>
  );
};

export default Tentang;
