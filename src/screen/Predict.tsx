import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { submitData } from '@/utils/api';
import { Hasil, deskripsiHasil } from '@/utils/misc';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Predict = () => {
  const [file, setFiles] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);

  const onSubmitClickHandler = async () => {
    if (file !== null) {
      const body = new FormData();
      body.append('uploaded_file', file);
      try {
        setLoading(true);
        const response = await submitData(body);
        const tempResult = response.slice(18);
        setResult(
          tempResult === 'keraton jogja' ? 'klaton yogyakarta' : tempResult
        );
        console.log(response);
      } catch (error) {
        console.log(`ini error ${error}`);
        toast.error('Prediction failed!');
      } finally {
        setLoading(false);
      }
    }
  };

  const onPageHandleClick = (obj: { selected: number }) => {
    setOffset(obj.selected);
  };

  return (
    <div className="min-h-screen m-auto relative px-12 py-24 flex flex-col justify-center items-center gap-5">
      {loading && (
        <div className="fixed grid z-50 inset-0 place-items-center bg-white/40">
          <div className="flex flex-col gap-4">
            <Loader2
              className="animate-spin text-black "
              color="#393d76"
              size={100}
            />
            <p className="font-bold text-black bg-white px-4 py-1 rounded-xl">
              Loading...
            </p>
          </div>
        </div>
      )}
      <Button
        className="fixed font-semibold text-lg top-10 left-10 bg-white hover:bg-gray-300 text-gray-800"
        onClick={() => navigate('/home')}
      >
        <p className="text-black">{'< Back'}</p>
      </Button>
      <div className="p-8 py-6 border flex flex-col gap-4 w-full max-w-[600px] border-slate-300 rounded-lg">
        <h2 className="text-center text-white font-bold text-xl">
          Pilih gambar untuk diklasifikasi
        </h2>
        {file !== null &&
          (() => {
            return (
              <img
                className="rounded-lg border-4 p-0.5 border-dashed border-slate-300"
                src={URL.createObjectURL(file as File)}
              />
            );
          })()}
        <Input
          type="file"
          onChange={(e) => {
            if (e.target.files![0] !== undefined) {
              return setFiles(e.target.files![0]);
            }
            setResult('');
            setFiles(null);
          }}
          className="hover:cursor-pointer text-black"
        />
        <Button
          onClick={onSubmitClickHandler}
          className="font-semibold bg-white hover:bg-gray-300 text-gray-800"
        >
          Submit
        </Button>
      </div>

      {result && (
        <div className="p-4 border w-full rounded-lg mb-12 max-w-[900px]">
          <h2 className="font-semibold text-center">RESULT</h2>
          <h3 className="text-center font-bold text-2xl mb-2"> {result}</h3>
          <p className="">{deskripsiHasil[result.toLowerCase() as Hasil]}</p>
          <div className="flex flex-col gap-4 mt-8">
            <h3 className="font-semibold text-center">Gambar yang serupa</h3>
            <div className="grid grid-cols-4 gap-4 mb-2">
              {Array.from({ length: 8 }, (_, i) => offset * 8 + i).map(
                (index) => {
                  return (
                    <div
                      key={`${index} image`}
                      className=" bg-slate-400 w-full aspect-video"
                    >
                      <img
                        className="aspect-video"
                        src={`/${result.toLowerCase()} (${index + 1}).jpg`}
                        alt=""
                      />
                    </div>
                  );
                }
              )}
            </div>
            <ReactPaginate
              previousLabel={<ChevronLeft color="#66748c" />}
              nextLabel={<ChevronRight color="#66748c" />}
              pageCount={5}
              breakLabel="..."
              onPageChange={onPageHandleClick}
              containerClassName="flex gap-3 w-fit mx-auto"
              pageClassName="bg-white rounded-md border font-bold"
              nextClassName="bg-white text-slate-200 border rounded-md font-bold"
              previousClassName="bg-white text-slate-200 border rounded-md font-bold "
              activeClassName="border active text-red-500 border-blue-500"
            ></ReactPaginate>
          </div>
        </div>
      )}
    </div>
  );
};

export default Predict;
