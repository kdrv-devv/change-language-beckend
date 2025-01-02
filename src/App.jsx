import React, { useEffect, useState, useTransition } from "react";
import { useTranslation } from "react-i18next";
// import reaact icons
import { IoLanguageSharp } from "react-icons/io5";
import Modal from "./components/modals";
import { useDispatch, useSelector } from "react-redux";
import { languageModalVisiblityAction } from "./redux/modal-slice";
import "./components/language";
import axios from "axios";


const App = () => {
  const { lang } = useSelector((state) => state.languageSlice);
  const [data , setData] = useState([])
  useEffect(()=>{

    axios.get("http://localhost:3000/0").then(data => setData(data.data?.products))
  },[lang])
  console.log(data);
  
  const dispatch = useDispatch();
  const { t } = useTranslation();
  
  return (  
    <div className="bg-green-400">
      <section className="w-[90%] m-auto flex  items-center justify-between py-5 ">
        <h3 className="text-[30px] text-white font-bold">{t("navbar.logo")}</h3>
        <div className="flex items-center gap-5 text-white text-[25px]">
          <h3 className="cursor-pointer">{t("navbar.link1")}</h3>
          <h3 className="cursor-pointer">{t("navbar.link2")}</h3>
          <h3 className="cursor-pointer">{t("navbar.link3")}</h3>
          <IoLanguageSharp
            onClick={() => dispatch(languageModalVisiblityAction())}
            className="text-[25px] cursor-pointer"
          />
        </div>
      </section>
      <Modal />

      <section className="products">
        <div className="w-[90%] m-auto">
            <div className="product-cards grid grid-cols-[repeat(4,_1fr)] gap-5">

              {
                data?.map((value) => <div key={value.id} className="w-[200px] h-[330px] border-[2px] border-[solid] border-[white] p-3   ">
                  <div className="card-img w-[100%] h-[200px]">
                    <img src={value.img} alt="" className="w-[100%] h-[100%]" />
                  </div>
                  <div className="card-bottom h-[80px] flex flex-col justify-between">
                    <h4 className="text-[19px] font-bold  text-white">{value.title[lang]}</h4>
                    <h5 className="text-[12px] text-white">{value.description[lang]}</h5>
                    <h6 className="text-[15px] text-red-500 ">{value.price}$</h6>
                  </div>

                </div> )
              }


            </div>
        </div>
      </section>


    </div>
  );
};

export default App;
