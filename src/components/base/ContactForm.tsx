import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/Button";
import toast, { Toaster } from "react-hot-toast";

type Props = {};

const ContactForm = (props: Props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMail = async () => {
    setLoading(true);
    if (name === "" || phone === "" || mail === "" || message === "") {
      toast.error("Lütfen tüm alanları doldurunuz.");
      setLoading(false);
      return false;
    }

    const resp = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        phone: phone,
        mail: mail,
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await resp.json();

    if (json.success) {
      toast.success("Mesajınız başarıyla gönderildi.");
      setName("");
      setPhone("");
      setMail("");
      setMessage("");
      setLoading(false);
    } else {
      setLoading(false);
      return toast.error("Bir hata oluştu. Lütfen tekrar deneyiniz. ");
    }
    setLoading(false);
    return false;
  };

  return (
    <form>
      <Toaster position="bottom-right" />
      <div className="mt-16 max-w-2xl flex flex-col gap-4">
        <Input
          onChange={(e: any) => setName(e.target.value)}
          required
          placeholder="Adınız ve soyadınız"
        />
        <Input
          onChange={(e: any) => setPhone(e.target.value)}
          required
          placeholder="Telefon Numaranız"
        />
        <Input
          onChange={(e: any) => setMail(e.target.value)}
          required
          placeholder="Email adresiniz"
        />
        <Textarea
          onChange={(e: any) => setMessage(e.target.value)}
          required
          placeholder="Mesajınız"
        />
        <Button
          onClick={sendMail}
          disabled={loading}
          type="button"
          variant="noborderRed"
          className="p-8 text-xl text-white"
        >
          GÖNDER
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
