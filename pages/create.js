import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

import { useLicence } from "../context/licenceContext";
import style from "../styles/LicenceForm.module.css";

export default function LicenceForm() {
  const router = useRouter();
  const { license, createLicence } = useLicence();
  const [licence, setLicence] = useState({
    username: "",
    userURL: "",
    theme: "light",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLicence({
      username: "",
      userURL: "",
      theme: e.target.value,
    }); // Clear form after submit
    createLicence(licence);
    router.push("/");
  };

  return (
    <>
      <h1 className="pageTitle">Crea una Licencia</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label className={style.formLabel} htmlFor="username">
            Ingresa tu nombre de usuario:
          </label>
          <input
            required
            className={style.formInput}
            type="text"
            name="username"
            value={licence.username}
            onChange={(e) =>
              setLicence({ ...licence, username: e.target.value })
            }
          />
        </div>
        {/*  */}
        <div className={style.formGroup}>
          <label className={style.formLabel} htmlFor="userURL">
            Ingresa una URL para tu licencia:
          </label>
          <input
            required
            className={style.formInput}
            type="url"
            name="userURL"
            value={licence.userURL}
            onChange={(e) =>
              setLicence({ ...licence, userURL: e.target.value })
            }
          />
          <p className={style.formHelpText}>
            Esta URL generará un código QR que dirijirá a donde tú apuntes,
            escoge ese destino con cuidado 😉.
          </p>
        </div>
        <div className={style.formGroup}>
          <label className={style.formLabel} htmlFor="licenceTheme">
            Selecciona un tema para tu licencia:
          </label>
          <select
            required
            className={style.formInput}
            name="licenceTheme"
            value={licence.theme}
            onChange={(e) => setLicence({ ...licence, theme: e.target.value })}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
          <div className={style.themesInfo}>
            <AiOutlineInfoCircle className={style.formInfoIcon} />
            <Link
              className={style.infoLink}
              href="/licences-preview"
              title="Ver temas"
            >
              Ver temas
            </Link>
          </div>
        </div>
        <button className={style.formButton} type="submit">
          Crear Licencia
        </button>
      </form>
    </>
  );
}
