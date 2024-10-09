import bullsEye from '../assets/bulls-eye.webp';
import thumbUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';
import { Image, ImageProps } from '@chakra-ui/react';
interface Props {
    rating: number
}
const Emojis = ({rating}: Props) => {
    const emojiMap: {[key: number]: ImageProps} = {
        3: {src: meh, alt: 'meh', boxSize: '25px'},
        4: {src: thumbUp, alt: 'recomended', boxSize: '25px'},
        5: {src: bullsEye, alt: 'Exeptional', boxSize: '35px'}
    }
  return (
   <Image {...emojiMap[rating]} />
  )
}

export default Emojis