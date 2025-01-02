import { Modal, Segmented } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { languageModalVisiblityAction } from "../../../redux/modal-slice";
import { useSegmentedApi } from "../../../generic/locale-options";
import { getLang } from "../../../redux/language-slice";
import i18next from "i18next";

const LanguageModal = () => {
  const { languageModalVisiblity } = useSelector((state) => state.modalSlice);
  const [language , setLanguage] = useState(localStorage.getItem("lang") || "eng")
  const dispatch = useDispatch();
  const onOk = () => {
    dispatch(getLang(language))
    i18next.changeLanguage(language)
    dispatch(languageModalVisiblityAction());
  };

  const {segmentedApi} = useSegmentedApi()

  return (
    <Modal
      open={languageModalVisiblity}
      onCancel={() => dispatch(languageModalVisiblityAction())}
      closable={false}
      onOk={onOk}
    >
      <Segmented
      defaultValue={localStorage.getItem("lang") || "eng"}
      className=" flex items-center !w-[70%] m-auto"
        style={{
          marginBottom: 8,
        }}
        onChange={(e) => setLanguage(e)}
        options={segmentedApi()}
      />
    </Modal>
  );
};

export default LanguageModal;




