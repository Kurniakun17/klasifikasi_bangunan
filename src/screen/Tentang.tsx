import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Tentang = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen m-auto max-w-[600px] px-12 flex flex-col justify-center items-center gap-5">
      <Button
        className="absolute top-10 left-10 font-semibold text-lg bg-white hover:bg-gray-300 text-gray-800"
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
    </div>
  );
};

export default Tentang;
