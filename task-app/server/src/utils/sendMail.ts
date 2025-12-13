import nodemailer, {Transporter} from "nodemailer"

interface EmailOptions{
    to: string,
    subject: string,
    html: string,
}

export async function sendEmail ({to,subject,html}: EmailOptions): Promise<void> {
    try {
        const transporter: Transporter  = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        }) 

        const mailOptions = {
            from: ` "Task App" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            html,
        }

        await transporter.sendMail(mailOptions)
    } catch (error) {
        throw error
        
    }
    
}