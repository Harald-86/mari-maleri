import axios from "axios";
import { useState } from "react";

export default function BestillingsForm() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/xbjeebyq",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(true, "Tusen takk for din bestilling.");
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <main>
      <h1>Noe du lurer på?</h1>
      <hr />
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="email">Epost</label>
        <input
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
        />

        <input
          name="subject"
          type="hidden"
          value="Bestilling | Marimaleri.no"
        />
        <label htmlFor="message">Melding</label>
        <textarea
          id="message"
          name="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
        />
        <button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? "Send"
              : "Sendt"
            : "Sender..."}
        </button>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </main>
  );
}
