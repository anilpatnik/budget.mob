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
