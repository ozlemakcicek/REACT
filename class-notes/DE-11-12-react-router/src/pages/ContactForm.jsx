import React from "react";
import { useState } from "react";

//!event-hooks DE-05-06 dan forms componentinden Form.jsx  ten aldık

const ContactForm = () => {
  const [isim, setIsim] = useState("");
  const [password, setPass] = useState("");
  const [country, setCountry] = useState("");

  const formAlindi = () => {
    //?burada backend e yollama yerine şimdilik alert verdik
    alert(
      `Username= ${isim}
        Password= ${password}
        Country= ${country}
        `
    );
  };

  return (
    <div className="container text-center mt-4">
      <h1>**************************************************</h1>
      <h1>FORM (EVENTS)</h1>
      <form onSubmit={formAlindi}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            USERNAME:
            <span className="text-danger fw-bold">{isim}</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            onInput={(e) => setIsim(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            PASSWORD
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(a) => setPass(a.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            COUNTRY:
            <span className="text-danger fw-bold">{country}</span>
          </label>
          <select
            className="form-select"
            id="country"
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">COUNTRY</option>
            <option value="Turkey">TURKEY</option>
            <option value="Germany">GERMANY</option>
            <option value="USA">USA</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          GONDER (submit)
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
