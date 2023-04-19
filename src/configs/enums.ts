export type CountryCode = "AU" | "NZ" | "IN";
export type LocaleCode = "en-AU" | "en-NZ" | "en-IN";
export type PhoneCode = "+61" | "+64" | "+91";

export enum AuthType {
  Email = "password",
  Phone = "phone",
  Google = "google",
  Facebook = "facebook"
}

export enum RoleType {
  Buyer = 10,
  Seller = 20,
  DataAdmin = 30,
  SiteAdmin = 40
}

export enum RouterType {
  Auth = 10,
  User = 20,
  Role = 30
}

export enum CrudType {
  Read = 10,
  Create = 20,
  Update = 30,
  Delete = 40
}

export enum PageType {
  Step1 = 0,
  Step2,
  Step3,
  Step4,
  Step5,
  Default
}

export enum AccordionType {
  Step1 = "10",
  Step2 = "20",
  Step3 = "30",
  Step4 = "40",
  Step5 = "50",
  Default = "100"
}

export enum NavType {
  RootUrl = "/",
  PubDealsUrl = "/shop",
  SignInUrl = "/signin",
  SignUpUrl = "/signup",
  HandlerUrl = "/handler",
  VerifyEmailUrl = "/verifyemail",
  ForgotPasswordUrl = "/forgotpassword",
  ResetPasswordUrl = "/resetpassword",
  ChangePasswordUrl = "/changepassword",
  ProfileUrl = "/profile",
  UsersUrl = "/users",
  UserDealsUrl = "/mydeals",
  SellerTradesUrl = "/trades",
  SellerDealsUrl = "/deals",
  NotFoundUrl = "/404"
}

export enum ServiceType {
  SignInUrl = "/signin",
  ProfileUrl = "/profile",
  UserUrl = "/user",
  UsersUrl = "/users",
  CategoriesUrl = "/categories",
  LocationsUrl = "/locations",
  RegionsUrl = "/regions",
  TradesUrl = "/trades",
  TradeUrl = "/trade",
  DealsUrl = "/deals",
  DealUrl = "/deal"
}
