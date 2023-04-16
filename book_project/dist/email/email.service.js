"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const nodemailer = require("nodemailer");
const common_1 = require("@nestjs/common");
let EmailService = class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'johnny55043@gmail.com',
                pass: 'luognhxgbxdrbsmo',
            }
        });
    }
    async sendMemberJoinVerification(emailAddress, signupVerifyToken) {
        const baseUrl = 'http://localhost:3000';
        const url = '${baseUrl}/users/email-verify?signupVerifyToken=$(signupVerifyToken)';
        const mailOptions = {
            to: emailAddress,
            subject: '가입 인증 메일',
            html: '가입확인 버튼을 누르시면 가입 인증이 완료됩니다.<br/>' +
                '<form action="${url}" method="POST">' +
                '  <button>가입확인</button>' +
                '</form>'
        };
        return await this.transporter.sendMail(mailOptions);
    }
};
EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], EmailService);
exports.EmailService = EmailService;
//# sourceMappingURL=email.service.js.map