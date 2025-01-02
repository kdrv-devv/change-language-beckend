import React from "react";
import { useSelector } from "react-redux";
import LanguageModal from "./language-modal";

const Modal = () => {
  const { languageModalVisiblity } = useSelector((state) => state.modalSlice);
  return <> {languageModalVisiblity && <LanguageModal/>} </>;
};

export default Modal;
