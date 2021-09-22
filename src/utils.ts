import { Image } from "./types";

/**
 * Returns a randome image based based on given parameters from https://picsum.photos
 * @param width number value in pixels
 * @param height number value in pixels
 * @param blur number between 0-10
 * @param grayscale boolean
 * @returns Image source
 */
 export const fetchRandomImage = async (width: number, height: number, blur: number, grayscale: boolean) =>
 fetch(`https://picsum.photos/${width}/${height}${grayscale ? "?grayscale&" : "/?"}${blur && "blur="+blur}`).then<Image>(
   (res) => {
     const expectedResponseCode = 200;
     if (res.status === expectedResponseCode) {
       return res;
     }
     throw new Error(
       `Got HTTP status code ${res.status}, when HTTP status code ${expectedResponseCode} was expected`
     );
   }
 );