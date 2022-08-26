import { QRCodeSVG } from "qrcode.react";
import sha256 from "crypto-js/sha256";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { useRouter } from "next/router";

import style from "../styles/licence/License.module.css";
import { useLicence } from "../context/licenceContext";

export default function License() {
  const router = useRouter();

  const { licence } = useLicence();
  const hashDigest = (qrCode, username) => {
    const hash = sha256(qrCode + username).toString();
    return hash.substring(0, 25);
  };
  const userID = hashDigest(licence.userURL, licence.username);

  const theme = licence.theme;

  const licenceToRender = () => {
    return (
      <div className={`licence${theme}`}>
        <div className={`qrCodeContainer${theme}`}>
          <QRCodeSVG
            value={licence.userURL}
            size={256}
            bgColor="transparent"
            fgColor={"#000000"}
            level="H"
            className={`qrCode${theme}`}
          />
        </div>
        <div className={`textContainer${theme}`}>
          <div className={`usernameContainer${theme}`}>
            <p className={`username${theme}`}>{licence.username}</p>
          </div>
          <div className={`userIDContainer${theme}`}>
            <p className={`userID${theme}`}>ID {userID}</p>
          </div>
        </div>
      </div>
    );
  };

  const licenceEmpty = () => {
    return (
      <div
        className={style.licenceEmpty}
        onClick={() => router.push("create/")}
      >
        <div className={style.emptyIcon}>
          <AiOutlineMedicineBox />
        </div>
        <p>Ups!</p>
        <p className={style.licenceEmptyText}>
          Aun no tienes ninguna licencia.
        </p>
        <p className={style.licenceEmptyLink}>Has click aquí para crear una.</p>
      </div>
    );
  };

  if (licence.username) {
    return licenceToRender();
  } else {
    return licenceEmpty();
  }
}
