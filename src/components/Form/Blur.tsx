import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface BlurProps {
  updateForm: Dispatch<SetStateAction<number>>;
}

const Blur = ({updateForm} : BlurProps) => {
  const [blur, setBlur] = useState(0)

  useEffect(() => {
    updateForm(blur)
  },[blur])
  
  return (
    <div>
      <input type="range" step={1} min={0} max={10} value={blur} onChange={e => setBlur(parseInt(e.target.value))}/>
    </div>
  );
};

export default Blur;
