// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const { name, mail, message, phone } = req.body;

    console.log(name, mail, message, phone);

    if (!name || !mail || !message || !phone) {
      return res
        .status(400)
        .json({ success: false, error: "Lütfen tüm alanları doldurunuz." });
    }
    const transporter = nodemailer.createTransport({
      host: "mail.kebabfactory.com.tr",
      port: 465,
      secure: true,
      auth: {
        user: "info@kebabfactory.com.tr",
        pass: "85k5tpD7#",
      },
    });

    const mailOptions = {
      from: "info@kebabfactory.com.tr", // Gönderen e-posta adresi
      to: "info@kebabfactory.com.tr", // Alıcı e-posta adresi
      subject: "İletişim Formu",
      text: `Ad: ${name}\nE-posta: ${mail}\nMesaj: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("E-posta gönderildi");
      res.status(200).json({ success: true });
    } catch (error: any) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
