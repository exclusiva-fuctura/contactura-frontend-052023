import { ValidatorFn, Validators } from "@angular/forms";

export const usernameValidators: Array<ValidatorFn> = [
  Validators.required,
  Validators.email,
  Validators.minLength(5)
];

export const passwordValidators: Array<ValidatorFn> = [
  Validators.required,
  Validators.minLength(5)
];
