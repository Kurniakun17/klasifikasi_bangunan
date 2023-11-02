import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { submitData } from '@/utils/api';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Predict = () => {
  const [file, setFiles] = useState<File | null>(null);
  const [result, setResult] = useState('');
  const navigate = useNavigate();

  const onSubmitClickHandler = async () => {
    if (file !== null) {
      const body = new FormData();
      body.append('uploaded_file', file);

      const response = await submitData(body);
      setResult(response);
    }
  };

  return (
    <div className="min-h-screen m-auto max-w-[600px] px-12 flex flex-col justify-center items-center gap-5">
      <Button
        className="absolute font-semibold text-lg top-10 left-10 bg-white hover:bg-gray-300 text-gray-800"
        onClick={() => navigate('/home')}
      >
        <p className="text-black">{'< Back'}</p>
      </Button>
      <div className="p-8 py-6 border flex flex-col gap-4 w-full border-slate-300 rounded-lg">
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
        <div className="p-4 border w-full text-center rounded-lg font-bold max-w-[600px]">
          <p>Result: {result.slice(18)}</p>
        </div>
      )}
    </div>
  );
};

export default Predict;
