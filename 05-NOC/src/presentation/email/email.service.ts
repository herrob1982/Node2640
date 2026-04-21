
import nodemailer from "nodemailer";
import { envs } from "../../config/plugins/envs.plugin";



interface SendEmailOptions {
    to: string;
    subject: string;
    htmlBody: string;
    attachments?: Attachment[];
}

interface Attachment {
    filename: string;
   // content?: Buffer | string;
   // contentType?: string;
    path? : string;
}   

export class EmailService {


    constructor(
       
    ) {

    }



    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVER,
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY
        }
    });


    async sendMail(options: SendEmailOptions) : Promise<boolean> {
    
        try {

            const { to, subject, htmlBody, attachments = [] } = options;


            const sendInformation = await this.transporter.sendMail({
                from: envs.MAILER_EMAIL,
                to: options.to,
                subject: options.subject,
                html: options.htmlBody,
               //attachments: options.attachments,
            });

            
            console.log("Email sent:", sendInformation);

            return true;
        } catch (error) {
            console.error("Error sending email:", error);

        


            return false;
        }
    }


    async sendEmailWithFileSystem( to: string | string[]): Promise<boolean>{

try {

        const subject = "Test email with attachment from Node.js";
        const htmlBody = "<h1>Hello from Node.js!</h1><p>This is a test email sent using Nodemailer with attachment.</p>";
        const attachments: Attachment[] = [
            {
                filename: "logs-all.txt",
                path: "./logs/logs-all.txt"
            },
            {
                filename: "logs-high.txt",
                path: "./logs/logs-high.txt"
            },

        ];


            await this.transporter.sendMail({
            from: envs.MAILER_EMAIL,
            to: to,
            subject: subject,
            html: htmlBody,
            attachments: attachments, // <--- Aquí se pasan los archivos
        });

            return true;


         } catch (error) {

            console.error("Error sending email:", error);

            return false;

         }

    }





}

