import { CreateUserDto } from "./dto/create-user.dto";
import { VerifyEmailDto } from "./dto/verify-email.dto";
import { UserLoginDto } from "./dto/user-login.dto";
import { UserInfo } from "./UserInfo";
import { UsersService } from "./users.service";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(dto: CreateUserDto): Promise<void>;
    verifyEmail(dto: VerifyEmailDto): Promise<String>;
    login(dto: UserLoginDto): Promise<String>;
    getUserInfo(userId: string): Promise<UserInfo>;
}
