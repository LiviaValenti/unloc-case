import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip,
  HStack,
} from "@chakra-ui/react"

interface BlurProps {
  updateForm: Dispatch<SetStateAction<number>>;
}

const BlurInput = ({updateForm} : BlurProps) => {
  const [blurValue, setBlurValue] = useState(0)

  useEffect(() => {
    updateForm(blurValue)
  },[blurValue])

  const min = 0
  const max = 10
  
  return (
    <>
      <HStack w={"100%"} spacing="10px">
        <b>Blur</b>
        <p>{min}</p>
        <Slider step={1} min={min} max={max} value={blurValue} onChange={value => setBlurValue(value)}>
          <SliderTrack bg="brand.faded">
            <SliderFilledTrack bg="brand.primary"/>
          </SliderTrack>
          <Tooltip hasArrow label={blurValue} placement="top" bg="brand.secondary" color="white" isOpen>
            <SliderThumb bg="brand.secondary" />
          </Tooltip>
        </Slider>
        <p>{max}</p>
      </HStack>
    </>
  );
};

export default BlurInput;
