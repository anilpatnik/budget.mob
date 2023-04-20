import { LOCALE_CODE, PHONE_CODE } from "./constants";
import { AuthType } from "./enums";
import { fbBlob } from "./firebase";
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export const externaLogin = (providers: AuthType[] | undefined) =>
  providers?.some(x => x.includes(AuthType.Google) || x.includes(AuthType.Facebook));

// E.164 international phone standard
export const inclPhCountry = (phone: string) => `${PHONE_CODE}${phone}`;
export const exclPhCountry = (phone: string) => phone?.toString()?.replace(PHONE_CODE, "");

// format date and time
export const dateNow = () =>
  new Intl.DateTimeFormat(LOCALE_CODE, { dateStyle: "medium" }).format(Date.now());
export const timeNow = () =>
  new Intl.DateTimeFormat(LOCALE_CODE, { timeStyle: "medium" }).format(Date.now());
export const datetimeNow = () => `${dateNow()} ${timeNow()}`;

// firebase storage
export const uploadFile = async (file: File, filePath: string) =>
  await uploadBytesResumable(ref(fbBlob, filePath), file);
export const downloadFile = async (filePath: string) => await getDownloadURL(ref(fbBlob, filePath));
export const deleteFile = async (filePath: string) => await deleteObject(ref(fbBlob, filePath));
