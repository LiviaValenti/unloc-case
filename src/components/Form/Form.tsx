import BlurInput from "./BlurInput";
import SizeInput from "./SizeInput";
import { useEffect, useState } from 'react';
import { fetchRandomImage } from '../../utils';
import { Button, VStack, Checkbox, Spinner, Skeleton, Image} from "@chakra-ui/react";
import ImageIcon from '../Form/ImageIcon'

  const Form = () => {
      const [imageSource, setImageSource] = useState("")
      const [blur, setBlur] = useState(0);
      const [size, setSize] = useState<number[]>([100,100])
      const [isGrayscale, setIsGrayscale] = useState(false)
      const [isLoading, setIsLoading] = useState(false)

      useEffect(() => {
        fetchImage()
      },[])

      const fetchImage = () => {
        setIsLoading(true)
        fetchRandomImage(size[0], size[1], blur, isGrayscale).then(res => {
          setImageSource(res.url)
          setIsLoading(false)
        })
      }

      return (
        <VStack spacing="2em" h="100%" w={["100%", "70%", "50%", "50%"]} padding="20px">
            <Skeleton isLoaded={!isLoading} startColor="brand.primary" endColor="brand.secondary" speed={2}>
              <Image src={imageSource} alt="Picsum"/>
            </Skeleton>
            <SizeInput updateForm={setSize} />
            <BlurInput updateForm={setBlur} />
            <Checkbox onChange={e => setIsGrayscale(e.target.checked)}><b>Grayscale</b></Checkbox>
            <Button color="brand.secondary" leftIcon={isLoading? <Spinner /> : <ImageIcon/>} bg="brand.primary" onClick={() => fetchImage()}>
               GET NEW IMAGE
            </Button>
        </VStack>
      );
    };
    
  export default Form