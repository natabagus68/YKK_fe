import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function useCorrective() {
  const navigate = useNavigate();
  const { state } = useLocation();
  //data Preventive
  const [dataCorrective, setDataCorrective] = useState([]);
  //modalExport
  const [openModalExport, setOpenModalExport] = useState(false);
  const [openModalDetail, setOpenModalDetail] = useState(false);
  const [openModalPicture, setOpenModalPicture] = useState(false);
  const [openModalVideo, setOpenModalVideo] = useState(false);
  const [statusDocument, setStatusDocument] = useState(false);
  //click detail data
  const onOpenDetail = (data): void => {
    navigate("details", {
      state: {
        data: {
          id: state?.data?.id,
          idCorrective: state?.data?.idCorrective,
          date: state?.data?.date,
          noMesin: state?.data?.noMesin,
          pelaksana: state?.data?.pelaksana,
        },
      },
    });
  };
  //click back/kembali
  const onOpenBack = (): void => {
    navigate("../");
  };

  const onOpenBackDetail = (): void => {
    setOpenModalDetail(false);
  };
  const onOpenBackModalPicture = (): void => {
    setOpenModalPicture(false);
  };
  const onOpenBackModalVideo = (): void => {
    setOpenModalVideo(false);
  };

  useEffect(() => {
    setDataCorrective([
      {
        id: 1,
        idPreventive: "A0B12345",
        date: "13/10/2023",
        noMesin: "SR-12345",
        pelaksana: "Bramantra Putra",
        status: "closed",
      },
      {
        id: 2,
        idPreventive: "A0B1222",
        date: "13/10/2023",
        noMesin: "RS-12345",
        pelaksana: "Cendani Arum",
        status: "open",
      },
    ]);
  }, []);

  return {
    state,
    navigate,
    dataCorrective,
    openModalExport,
    openModalDetail,
    openModalPicture,
    openModalVideo,
    onOpenDetail,
    onOpenBack,
    onOpenBackDetail,
    onOpenBackModalPicture,
    onOpenBackModalVideo,
    setOpenModalExport,
    setOpenModalDetail,
    setOpenModalPicture,
    setOpenModalVideo,
    statusDocument,
    setStatusDocument,
  };
}
