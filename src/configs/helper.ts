import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { LOCALE_CODE, PHONE_CODE } from "./constants";
import { AuthType } from "./enums";
import { fBlob } from "./firebase";

export const externaLogin = (providers: AuthType[] | undefined) =>
  providers?.some(x => x.includes(AuthType.Google) || x.includes(AuthType.Facebook));

// E.164 international phone standard
export const includePhoneCountry = (phone: string) => `${PHONE_CODE}${phone}`;
export const excludePhoneCountry = (phone: string) => phone?.toString()?.replace(PHONE_CODE, "");

// format date and time
export const dateNow = () =>
  new Intl.DateTimeFormat(LOCALE_CODE, { dateStyle: "medium" }).format(Date.now());
export const timeNow = () =>
  new Intl.DateTimeFormat(LOCALE_CODE, { timeStyle: "medium" }).format(Date.now());
export const datetimeNow = () => `${dateNow()} ${timeNow()}`;

// firebase storage
export const uploadFile = async (file: File, filePath: string) =>
  await uploadBytesResumable(ref(fBlob, filePath), file);
export const downloadFile = async (filePath: string) => await getDownloadURL(ref(fBlob, filePath));
export const deleteFile = async (filePath: string) => await deleteObject(ref(fBlob, filePath));
