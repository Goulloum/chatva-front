import { LoginPayload } from "./login-payload.interface";
import { UserInterface } from "./user.interface";

export interface AuthContextInterface {
  user: UserInterface | null;
  login: (loginPayload: LoginPayload) => Promise<boolean>;
  logout: () => Promise<void>;
}
