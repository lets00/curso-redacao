import { useState } from "react";
import Image from "next/image";

interface ImageUploaderProps {
  className: string
  readOnly: boolean
}

export default function ImageUploader(props: ImageUploaderProps) {
  const [base64Image, setBase64Image] = useState<string | null>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const base64 = await convertToBase64(file);
      setBase64Image(base64);
    }
  };

  const convertToBase64 = (file: File): Promise<string | null> => {
    return new Promise((resolve) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        if (event.target) {
          resolve(event.target.result as string);
        } else {
          resolve(null);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="flex flex-col justify-end">
      <div className={`w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden relative ${props.readOnly == true ? null : "hover:brightness-90"} ${props.className}`}>
        {base64Image && (
          <img
            src={base64Image}
            alt="Uploaded Image"
            className="w-full h-full object-cover absolute top-0 left-0"
          />
        )}
        <input
          disabled={props.readOnly}
          type="file"
          accept="image/*"
          className={`w-full h-full opacity-0 absolute top-0 left-0 ${props.readOnly == false ? "cursor-pointer" : null}`}
          onChange={handleImageUpload}
        />
      </div>
      {props.readOnly == false ?
        <figure className="-m-8 -ml-5">
          <Image src="/images/editar-imagem.png" width={38} height={38} alt="imagemDoCurso"/>
        </figure>
      : null }
    </div>
  );
}