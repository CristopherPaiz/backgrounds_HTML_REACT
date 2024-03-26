import { PropTypes } from "prop-types";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/light.css";
import "react-simple-toasts/dist/theme/dark.css";
import "react-simple-toasts/dist/theme/light-edge.css";
import "react-simple-toasts/dist/theme/dark-edge.css";
import "react-simple-toasts/dist/theme/pink-dawn.css";
import "react-simple-toasts/dist/theme/chroma.css";
import "react-simple-toasts/dist/theme/info.css";
import "react-simple-toasts/dist/theme/blue-dusk.css";
import "react-simple-toasts/dist/theme/ocean-wave.css";
import "react-simple-toasts/dist/theme/sunset.css";
import "react-simple-toasts/dist/theme/moonlight.css";
import "react-simple-toasts/dist/theme/frosted-glass.css";
import "react-simple-toasts/dist/theme/success.css";
import "react-simple-toasts/dist/theme/warning.css";
import "react-simple-toasts/dist/theme/failure.css";
import "react-simple-toasts/dist/theme/plain.css";
import "./App.css";

const Botones = ({ backgroundData }) => {
  const { theme, css, react } = backgroundData;

  const handleToast = (text) => {
    if (text === "HTML") navigator.clipboard.writeText(css);
    if (text === "REACT") navigator.clipboard.writeText(react);
    toast(`${text} copied!`, {
      theme: theme,
      position: "bottom-left",
      clickClosable: true,
      maxVisibleToasts: 1,
      duration: 3000,
    });
  };

  return (
    <div className="BotonesCopy">
      <button className="botonGeneralCopy" onClick={() => handleToast("HTML")}>
        <div className="homeIconCopy">
          <svg className="iconoHome" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M4 16v-2H2v2H1v-5h1v2h2v-2h1v5H4zm3 0v-4H5.6v-1h3.7v1H8v4H7zm3 0v-5h1l1.4 3.4h.1L14 11h1v5h-1v-3.1h-.1l-1.1 2.5h-.6l-1.1-2.5H11V16h-1zm9 0h-3v-5h1v4h2v1zM9.4 4.2 7.1 6.5l2.3 2.3-.6 1.2-3.5-3.5L8.8 3l.6 1.2zm1.2 4.6 2.3-2.3-2.3-2.3.6-1.2 3.5 3.5-3.5 3.5-.6-1.2z" />
          </svg>
        </div>
        Copy HTML
      </button>
      <button className="botonGeneralCopy" onClick={() => handleToast("REACT")}>
        <div className="homeIconCopy">
          <svg className="iconoHome" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 10.11A1.87 1.87 0 1 1 10.13 12 1.88 1.88 0 0 1 12 10.11M7.37 20c.63.38 2-.2 3.6-1.7a24.22 24.22 0 0 1-1.51-1.9 22.7 22.7 0 0 1-2.4-.4c-.51 2.14-.32 3.61.31 4m.71-5.74-.29-.51a7.91 7.91 0 0 0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9h-1.71c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47h3.42c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7a24.22 24.22 0 0 1 1.51 1.9 22.7 22.7 0 0 1 2.4.36c.51-2.14.32-3.61-.32-4m-.7 5.74.29.51a7.91 7.91 0 0 0 .29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84 1.63 3.05 1 5.63 2.54.75 4.37 2 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1 5.63s-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68s1.83-2.94 4.37-3.69c-.62-2.58-.46-4.79 1-5.63s3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12a22.51 22.51 0 0 1 .92 2.26c2.1-.63 3.28-1.53 3.28-2.26S20.07 10.37 18 9.74a22.51 22.51 0 0 1-.92 2.26M6.92 12A22.51 22.51 0 0 1 6 9.74c-2.1.63-3.28 1.53-3.28 2.26S3.93 13.63 6 14.26A22.51 22.51 0 0 1 6.92 12m9 2.26-.3.51c.31 0 .61-.1.88-.16a7.91 7.91 0 0 0-.29-.86l-.29.51M13 18.3c1.59 1.5 3 2.08 3.59 1.7s.83-1.82.32-4a22.7 22.7 0 0 1-2.4.36A24.22 24.22 0 0 1 13 18.3M8.08 9.74l.3-.51c-.31 0-.61.1-.88.16a7.91 7.91 0 0 0 .29.86l.29-.51M11 5.7C9.38 4.2 8 3.62 7.37 4s-.82 1.82-.31 4a22.7 22.7 0 0 1 2.4-.36A24.22 24.22 0 0 1 11 5.7Z" />
          </svg>
        </div>
        Copy REACT
      </button>
    </div>
  );
};

export default Botones;

// PropTypes
Botones.propTypes = {
  backgroundData: PropTypes.object.isRequired,
};
