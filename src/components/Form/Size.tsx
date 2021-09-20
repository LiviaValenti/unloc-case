import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface SizeProps {
  updateForm: Dispatch<SetStateAction<number[]>>;
}

const Size = ({updateForm} : SizeProps) => {
  const [size, setSize] = useState([854, 480])
  const [showCustom, setShowCustom] = useState<Boolean>(false);
  const [width, setWidth] = useState(123)
  const [height, setHeight] = useState(123)


  useEffect(() => {
    updateForm(size)
  },[size])

  function handleChange(sizeId: string){
    const id = parseInt(sizeId)
    if (parseInt(sizeId) === 5){
      setShowCustom(true)
      setSize([width, height])
    } else {
      setShowCustom(false)
      const sizeMap =  new Map([
        [1, [150,150]],
        [2, [854,480]],
        [3, [1366,768]],
        [4, [1920,1080]],
      ])
      setSize(sizeMap.get(id) || [123,123])
    }
  }

  return (
    <div>
      Size
      <select onChange={e => handleChange(e.target.value)}>
        <option value={1}>Thumbnail - 150 x 150 pixels</option>
        <option value={2}>Small 854 x 480 pixels</option>
        <option value={3}>Medium 1366 x 768 pixels</option>
        <option value={4}>Large 1920 x 1080 pixels</option>
        <option value={5}>Custom</option>
      </select>
      {showCustom && 
      <div>
        <label>Width
        <input value={width} onChange={e => {
          setSize(prev => [parseInt(e.target.value), prev[1]])
          setWidth(parseInt(e.target.value))
        }} type="number"/>
        </label>
        
        <label>Height
        <input value={height} onChange={e => {
          setSize(prev => [prev[0], parseInt(e.target.value)])
          setHeight(parseInt(e.target.value))
        }} type="number"/>
        </label>
      </div>}
    </div>
  );
};

export default Size;
