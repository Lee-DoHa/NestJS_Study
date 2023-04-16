import { EmailService } from "../email/email.service";
import { UserInfo } from "./UserInfo";
export declare class UsersService {
    private emailService;
    constructor(emailService: EmailService);
    createUser(name: string, email: string, password: string): Promise<void>;
    private checkUserExists;
    private saveUser;
    private sendMemberJoinEmail;
    verifyEmail(signupVerifyToken: string): Promise<string>;
    login(email: string, password: string): Promise<string>;
    getUserInfo(userId: string): Promise<UserInfo>;
}
