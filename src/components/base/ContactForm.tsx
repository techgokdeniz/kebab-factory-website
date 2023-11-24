import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/Button";

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <div className="mt-16 max-w-2xl flex flex-col gap-4">
      <Input placeholder="Adınız ve soyadınız" />
      <Input placeholder="Telefon Numaranız" />
      <Input placeholder="Email adresiniz" />
      <Textarea placeholder="Mesajınız" />
      <Button variant="noborderRed" className="p-8 text-xl text-white">
        GÖNDER
      </Button>
    </div>
  );
};

export default ContactForm;
