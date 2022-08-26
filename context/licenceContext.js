import { useState, createContext, useContext, useEffect } from "react";

const licenceContext = createContext();

export const useLicence = () => useContext(licenceContext);

export const LicenceProvider = ({ children }) => {
  const [licence, setLicence] = useState({
    username: "",
    userURL: "",
    theme: "light",
  });
  const [appConfig, setAppConfig] = useState({
    theme: "light",
  });

  const getLicence = () => {
    const licence = localStorage.getItem("licence");
    if (licence) {
      setLicence(JSON.parse(licence));
    }
    return licence;
  };

  const createLicence = async (licence) => {
    const { username, userURL, theme } = licence;

    try {
      localStorage.setItem("licence", JSON.stringify(licence));
      setLicence({
        username: username,
        userURL: userURL,
        theme: theme,
      });
    } catch (error) {
      return new Error("Error setting licence", error);
    }
  };

  const deleteLicence = () => {
    try {
      localStorage.removeItem("licence");
      setLicence({
        username: "",
        userURL: "",
        theme: "light",
      });
    } catch (error) {
      return new Error("Error deleting licence", error);
    }
  };

  useEffect(() => {
    getLicence();
  }, []);

  return (
    <licenceContext.Provider value={{ licence, createLicence, deleteLicence }}>
      {children}
    </licenceContext.Provider>
  );
};
