import { useEffect, useState } from "react";

export default function DogPics() {
  // API: https://dog.ceo/dog-api/
  const [dogImg, setDogImg] = useState("");

  useEffect(() => {
    getDogPic();
  }, []);

  const getDogPic = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    setDogImg(data.message);
  };

  return (
    <div className="dog-pics">
      <img src={dogImg} />
      <button onClick={getDogPic}>🐶</button>
    </div>
  );
}
