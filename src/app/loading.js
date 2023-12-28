"use client";
import { useEffect, useState } from "react";

const languages = [
  { name: "English", hello: "Hello" },
  { name: "Spanish", hello: "Hola" },
  { name: "French", hello: "Bonjour" },
  { name: "German", hello: "Hallo" },
  { name: "Italian", hello: "Ciao" },
  { name: "Yoruba", hello: "Pẹlẹ o" },
  { name: "Igbo", hello: "Nno" },
  { name: "Hausa", hello: "Sannu" },
  { name: "Idoma", hello: "Nma o" },
  { name: "Japanese", hello: "こんにちは" }, // Japanese
  { name: "Russian", hello: "Привет" }, // Russian
  { name: "Arabic", hello: "مرحبا" }, // Arabic
  { name: "Chinese", hello: "你好" }, // Chinese
  { name: "Portuguese", hello: "Olá" }, // Portuguese
  { name: "Swahili", hello: "Jambo" }, // Swahili
  { name: "Dutch", hello: "Hallo" }, // Dutch
  { name: "Swedish", hello: "Hej" }, // Swedish
  { name: "Korean", hello: "안녕하세요" }, // Korean
  { name: "Greek", hello: "Γειά σου" }, // Greek
  { name: "Turkish", hello: "Merhaba" }, // Turkish
  { name: "Polish", hello: "Cześć" },
];

const Loading = ({ setLoading }) => {
    const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
    const currentLanguage = languages[currentLanguageIndex];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
      }, 200); 
     
  
      return () => {
        clearInterval(interval);
      
      };
    }, []);
   
  return (
    <div className=" font-urbanist flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-light mb-4">{`${currentLanguage.hello}!`}</h1>
      </div>
    </div>
  );
};

export default Loading;
