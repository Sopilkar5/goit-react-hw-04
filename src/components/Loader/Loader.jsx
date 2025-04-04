import { BeatLoader } from "react-spinners";
import styles from "./Loader.module.css";

const Loader = ({ center = false }) => {
  return (
    <div className={center ? styles.centeredLoader : styles.loader}>
      <BeatLoader color="#00bcd4" size={15} />
    </div>
  );
};

export default Loader;
