import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { NumberInput, NumberInputField, Select} from '@chakra-ui/react';

interface SizeInputProps {
  updateForm: Dispatch<SetStateAction<number[]>>;
}

const SizeInput = ({ updateForm }: SizeInputProps) => {
  const [size, setSize] = useState([854, 480]);
  const [showCustom, setShowCustom] = useState<Boolean>(false);
  const [width, setWidth] = useState(123);
  const [height, setHeight] = useState(123);

  useEffect(() => {
    updateForm(size);
  }, [size]);

  function handleChange(sizeId: string) {
    const id = parseInt(sizeId);
    if (parseInt(sizeId) === 5) {
      setShowCustom(true);
      setSize([width, height]);
    } else {
      setShowCustom(false);
      const sizeMap = new Map([
        [1, [150, 150]],
        [2, [854, 480]],
        [3, [1366, 768]],
        [4, [1920, 1080]],
      ]);
      setSize(sizeMap.get(id) || [123, 123]);
    }
  }

  return (
    <>
      <Select onChange={(e) => handleChange(e.target.value)} bg="brand.primary" >
        Size
        <option value={1}>Thumbnail - 150 x 150 pixels</option>
        <option value={2}>Small 854 x 480 pixels</option>
        <option value={3}>Medium 1366 x 768 pixels</option>
        <option value={4}>Large 1920 x 1080 pixels</option>
        <option value={5}>Custom</option>
      </Select>
      {showCustom && (
        <>
          <NumberInput
            focusBorderColor="brand.primary"
            value={width}
            onChange={(value) => {
              setSize((prev) => [parseInt(value), prev[1]]);
              setWidth(parseInt(value));
            }}
          >
            Width
            <NumberInputField />
          </NumberInput>
          
          <NumberInput
            focusBorderColor="brand.primary"
            value={height}
            onChange={(value) => {
              setSize((prev) => [prev[0], parseInt(value)]);
              setHeight(parseInt(value));
            }}
          >
            Height
            <NumberInputField />
          </NumberInput>
        </>
      )}
    </>
  );
};

export default SizeInput;
