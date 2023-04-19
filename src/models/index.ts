import { AuthType, CrudType, RoleType } from "../configs";

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

export interface ILookup {
  id?: string;
  name?: string;
  code?: string;
}
export const Lookup: ILookup = {
  id: "",
  name: "",
  code: ""
};

export interface ILogin {
  name?: string;
  email: string;
  password: string;
}

export interface IUser {
  name?: string;
  email?: string;
  role?: RoleType;
  photo?: string;
  phone?: string;
  locationId?: string;
  token?: string;
  auth?: boolean;
  external?: boolean;
}
export const User: IUser = {
  name: "",
  email: "",
  role: RoleType.Buyer,
  photo: "",
  phone: "",
  locationId: "",
  token: "",
  auth: false,
  external: false
};

export interface IAdminUser {
  uid?: string;
  name?: string;
  email?: string;
  phone?: string;
  photo?: string;
  emailVerified?: boolean;
  disabled?: boolean;
  role?: RoleType;
  lastUpdated?: string;
  providers?: AuthType[];
  type?: CrudType;
}
export const AdminUser: IAdminUser = {
  uid: "",
  name: "",
  email: "",
  phone: "",
  photo: "",
  emailVerified: true,
  disabled: false,
  role: RoleType.Buyer,
  lastUpdated: "",
  providers: [],
  type: CrudType.Read
};
