import { useState } from "react";
import { FORMSPREE_ID } from "../data/constants";

const EMPTY_FORM = {
  nome: "",
  email: "",
  empresa: "",
  tipo: "",
  orcamento: "",
  mensagem: "",
};

/**
 * useContactForm — manages form state and Formspree submission.
 * @returns {{ form, status, handleChange, handleSubmit }}
 */
export function useContactForm() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!form.nome || !form.email) return;

    setStatus("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nome: form.nome,
          email: form.email,
          empresa: form.empresa,
          tipo_de_projeto: form.tipo,
          orcamento: form.orcamento,
          mensagem: form.mensagem,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setForm(EMPTY_FORM);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return { form, status, handleChange, handleSubmit };
}
