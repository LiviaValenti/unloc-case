interface ImageProps{
  source: string;
}

const Image = ({source}: ImageProps) => {
    return (
      <div>
        <img src={source} alt="Picsum"/>
      </div>
    );
  };
  
export default Image