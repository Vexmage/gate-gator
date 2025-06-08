import { useEffect, useState } from "react";

export const useTypewriter = (text: string, speed: number = 30): string => {
  const [output, setOutput] = useState("");

  useEffect(() => {
    setOutput("");
    let index = 0;

    const interval = setInterval(() => {
      setOutput((prev) => prev + text[index]);
      index++;
      if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return output;
};
