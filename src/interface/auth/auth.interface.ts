export interface ILogin {
  email: string;
  password: string;
}

export interface ISign {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  gender?: {
    label?: string;
    value?: string;
  };
  confirm_password: string;
}

export interface IReview {
  rating: number;
  review: string;
}
