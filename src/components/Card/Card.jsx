import image from "../../assets/react.svg";
import Modal from "react-modal";

import { useState } from "react";
import ReactModal from "react-modal";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

ReactModal.setAppElement("#root");

export default function Card({ settingInfo }) {
  const { title, description, id } = settingInfo;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isMaintenance, setIsMaintenance] = useState(false);
  const { t, i18n } = useTranslation();
  const [direction, setDirection] = useState("");
  const [selectedValue, setSelectedValue] = useState("en");

  const [formData, setFormData] = useState({
    titleEn: "The store is under maintenance",
    titleAr: "المتجر قيد الصيانة",
    descriptionEn: "Sorry dear customer, the store is currently under maintenance and we will resume work shortly",
    descriptionAr: "عذراً عزيزي العميل، المتجر حالياً قيد الصيانة و سنعاود العمل خلال فترة وجيزة",
  });

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
    if (i18n.language === "ar") {
      setSelectedValue("ar");
      setDirection("rtl");
    }
  }, []);

  const toggleMaintenance = () => {
    setIsMaintenance(!isMaintenance);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const customStyles = {
    content: {
      padding: "0px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#eee",
    },
  };

  return (
    <>
      <div
        onClick={() => {
          if (id === "1") {
            openModal();
          }
        }}
        className="card border-solid border border-b-gray-300 rounded-md flex flex-col justify-center items-center py-2 cursor-pointer"
      >
        <img className="w-20 h-20 object-contain" src={image} alt="" />
        <h2 className="font-semibold text-lg">{title}</h2>
        <p>{description}</p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          className="flex justify-between items-center px-3 py-1s bg-gray-300"
          dir={direction}
        >
          <button className="w-5 text-xl" onClick={closeModal}>
            x
          </button>
          <h4>{t('ModalTitle')}</h4>
        </div>
        <button
          onClick={toggleMaintenance}
          className={`mt-3 ml-3 px-4 py-2 text-white rounded ${
            isMaintenance ? "bg-red-500" : "bg-green-500"
          }`}
          dir={direction}
        >
          {isMaintenance
            ? t('disableMode')
            : t('enableMode')}
        </button>

        <div className="content px-5 py-7" dir={direction}>
          <h4>{t('ModalTitle')}</h4>
          <p className="mb-4 text-slate-500">
            {t('descriptionMode')}
          </p>
          <form className="space-y-4 ">
            <p> {t('labelTitle')} </p>
            <div className="border-solid border border-b-gray-200 rounded overflow-hidden flex justify-center items-center bg-white ">
              <i className="fa-solid fa-t p-2 bg-white"></i>
              <input
                type="text"
                name={selectedValue === "ar" ? "titleAr" : "titleEn"}
                value={
                  selectedValue === "ar" ? formData.titleAr : formData.titleEn
                }
                onChange={handleInputChange}
                className="grow px-2 py-1 focus:outline-none"
              />
              <select
                name="lang"
                id="lang"
                onChange={handleSelectChange}
                value={selectedValue}
                className="bg-white focus:outline-none"
              >
                <option value="ar">ar</option>
                <option value="en">en</option>
              </select>
            </div>
            <p>{t('descriptionLabel')} </p>
            <div className="bg-white border-solid border border-b-gray-200 rounded overflow-hidden flex justify-center items-center">
              <i className="fa-solid fa-t p-2 bg-white"></i>
              <input
                type="text"
                name={
                  selectedValue === "ar" ? "descriptionAr" : "descriptionEn"
                }
                value={
                  selectedValue === "ar"
                    ? formData.descriptionAr
                    : formData.descriptionEn
                }
                onChange={handleInputChange}
                className="w-full px-2 py-1 focus:outline-none"
              />
              <select
                name="descriptionLang"
                id="descriptionLang"
                onChange={handleSelectChange}
                value={selectedValue}
                className="bg-white focus:outline-none"
              >
                <option value="ar">ar</option>
                <option value="en">en</option>
              </select>
            </div>
          </form>
        </div>
        <div className="bg-gray-500 py-3 px-1">
          <button
            onClick={() => {
              closeModal();
              setIsMaintenance(true);
            }}
            className="px-2 py-1 w-fit bg-slate-100 mx-3 rounded hover:bg-gray-200"
          >
            {t('saveBtn')}
          </button>
        </div>
      </Modal>
      {isMaintenance && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 text-white">
          <div className="text-center">
            {i18n.language === "ar" ? (
              <>
                <h1 className="text-2xl">
                  {formData.titleAr || "تحت الصيانة"}
                </h1>
                <p className="mt-2">{formData.descriptionAr}</p>
              </>
            ) : (
              <>
                <h1 className="text-2xl">
                  {formData.titleEn || "Under Maintenance"}
                </h1>
                <p className="mt-2">{formData.descriptionEn}</p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
