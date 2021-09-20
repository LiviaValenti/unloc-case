import Blur from "./Blur";
import Size from "./Size";
import { useEffect, useState } from 'react';
import Image from '../Image';
import { fetchRandomImage } from '../../utils';

  const Form = () => {
      const [imageSource, setImageSource] = useState("")
      const [blur, setBlur] = useState(0);
      const [size, setSize] = useState<number[]>([100,100])
      const [isGrayscale, setIsGrayscale] = useState(false)

      useEffect(() => {
        fetchRandomImage(500, 500, 4, false).then(res => setImageSource(res.url))
      },[])

      const fetchImage = () => {
        fetchRandomImage(size[0], size[1], blur, isGrayscale).then(res => setImageSource(res.url))
      }

      return (
        <div>
           <Image source={imageSource}/>
            <Size updateForm={setSize} />
            <Blur updateForm={setBlur} />
            <label>
            Grayscale
            <input type="checkbox" onChange={e => setIsGrayscale(e.target.checked)}/>
            </label>
            
            <button onClick={() => fetchImage()}>Get new image</button>
        </div>
      );
    };
    
  export default Form