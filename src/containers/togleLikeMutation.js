
import { gql, useMutation } from "@apollo/client";


const LIKE_PHOTO = gql`
mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`
export const TogleLikeMutation = () => {

  const [mutation] = useMutation(LIKE_PHOTO);
  return { mutation };
};