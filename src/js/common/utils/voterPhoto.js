// eslint-disable-next-line import/prefer-default-export
export default function voterPhoto (voter) {
  const placeholderImageUrl = '';
  if (!voter) {
    return placeholderImageUrl;
  }
  const {
    voter_photo_url_medium: voterPhotoUrlMedium,
    // signed_in_with_apple: signedInWithApple,
  } = voter;
  // if (!voterPhotoUrlMedium && signedInWithApple && isIOS()) {
  //   return placeholderImageUrl;
  // }
  return voterPhotoUrlMedium;
}
