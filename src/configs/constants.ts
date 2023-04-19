import { CountryCode, LocaleCode, PhoneCode } from "./enums";

export const FIREBASE_PROJECT_ID = "grabmetest";
export const COUNTRY_CODE = "AU" as CountryCode;
export const LOCALE_CODE = "en-AU" as LocaleCode;
export const PHONE_CODE = "+61" as PhoneCode;
export const FLAG_IMG = "https://flagcdn.com/w40/{COUNTRY}.png";
export const FB_IMG = `https://firebasestorage.googleapis.com/v0/b/${FIREBASE_PROJECT_ID}.appspot.com/o/{FILE}?alt=media&token={TOKEN}`;

export const TWENTY_FOUR_HOURS_IN_MS = 1000 * 60 * 60 * 24;
export const TWELVE_HOURS_IN_MS = 1000 * 60 * 60 * 12;

export const TOKEN_LENGTH = 10;
export const AUTH = "auth";
export const ID = "id";
export const ACTION_CODE = "actionCode";
export const STATE_CHANGED = "state_changed";
export const EXTERNAL_LOGIN = "external";
export const SUCCESS = "success";
