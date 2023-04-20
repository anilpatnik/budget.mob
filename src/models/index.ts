export interface ILoading {
  loading?: boolean;
  success?: boolean;
  message?: string;
}
export const Loading: ILoading = {
  loading: false,
  success: false,
  message: ""
};

export interface IUser {
  uid?: string;
  name?: string;
  email?: string;
  photo?: string;
  phone?: string;
  auth?: boolean;
}
export const User: IUser = {
  uid: "",
  name: "",
  email: "",
  photo: "",
  phone: "",
  auth: false
};
