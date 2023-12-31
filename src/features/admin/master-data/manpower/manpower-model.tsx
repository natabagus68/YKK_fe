import { useState, useEffect } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useForm } from "react-hook-form";
import { ManpowerApiRepository } from "@data/api/manpower/manpower-api-repository";
import { Manpower } from "@domain/models/manpower/manpower";

import { SectionApiRepository } from "@data/api/location/section-api-repository";
import { Section } from "@domain/models/location/section";
// import { Departemen } from "@domain/models/location/departemen";
// import { DepartemenApiRepository } from "@data/api/location/departemen-api-repository";
import { PositionApiRepository } from "@data/api/manpower/position-api-repository";
import { Position } from "@domain/models/manpower/position";

export default function useManpower() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { type, id } = useParams();
  //setup url params
  const [searchParams, setSearchParams] = useSearchParams();
  //state data manpower by id
  const [dataManpowerById, setDataManpowerById] = useState(null);
  //state data position by id
  const [dataPositionById, setDataPositionById] = useState(null);
  //setup react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      nip: dataManpowerById?.employee_no,
      name:
        type == "manpower" ? dataManpowerById?.name : dataPositionById?.name,
      posisi: dataManpowerById?.position_id,
      section: dataManpowerById?.section_id,
      photo: dataManpowerById?.avatar,
      // departemen: state?.data?.departemen,
    },
  });

  //state modal delete
  const [openModalDelete, setOpenModalDelete] = useState(false);
  //state modal confirm
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  //state modal success
  const [openModalSuccess, setOpenModalSuccess] = useState(false);
  //api authenticationRepository
  const manpowerRepository = new ManpowerApiRepository();
  //state data manpower
  const [dataManpower, setDataManpower] = useState<Manpower[]>([]);
  //state loading data
  const [isLoadingData, setIsLoadingData] = useState(true);
  //state succes create/update data
  const [isSuccess, setIsSuccess] = useState(false);
  //state failed process data
  // const [isFailed, setIsFailed] = useState({ status: false, exec: false });
  //api repository section
  const sectionRepository = new SectionApiRepository();
  //state data Section
  const [dataSection, setDataSection] = useState<Section[]>([]);
  //api repository position
  const positionRepository = new PositionApiRepository();
  //state data departemen
  const [dataPosition, setDataPosition] = useState<Position[]>([]);
  //state for parsing data id
  const [dataId, setDataId] = useState(null);
  //state message from api
  const [message, setMessage] = useState(null);

  // create manpower data
  const createManpower = async (data) => {
    setIsLoadingData(true);
    setMessage(null);
    try {
      const result = await manpowerRepository.create(
        Manpower.create({
          name: data.name,
          employee_no: data.nip,
          section_id: data.section,
          position_id: data.posisi,
          avatar: data.photo,
        })
      );
      setTimeout(() => {
        setIsLoadingData(false);
        navigate("../");
      }, 500);
    } catch (error) {
      console.log(error);
      setTimeout(() => {
        setIsLoadingData(false);
        setMessage("No. Induk Pegawai harus unik!");
      }, 500);
      throw new Error(error);
    }
  };
  // create position data
  const createPosition = async (data) => {
    setIsLoadingData(true);
    setMessage(null);
    try {
      const result = await positionRepository.create(
        Position.create({
          name: data.name,
        })
      );
      setTimeout(() => {
        setIsLoadingData(false);
        navigate("../");
      }, 500);
    } catch (error) {
      setTimeout(() => {
        setIsLoadingData(false);
        setMessage("No. Induk Pegawai harus unik!");
      }, 500);
      throw new Error(error);
    }
  };
  // edit manpower data
  const editManpower = async (data) => {
    setIsLoadingData(true);
    try {
      const result = await manpowerRepository.edit(
        Manpower.create({
          id: id,
          name: data.name,
          employee_no: data.nip,
          section_id: data.section,
          position_id: data.posisi,
          avatar: data.photo,
        })
      );
      setTimeout(() => {
        setIsLoadingData(false);
        navigate("../");
      }, 500);
    } catch (error) {
      setIsLoadingData(false);
      throw new Error(error);
    }
  };
  // edit manpower data
  const editPosition = async (data) => {
    setIsLoadingData(true);
    try {
      const result = await positionRepository.edit(
        Position.create({
          id: id,
          name: data.name,
        })
      );
      setTimeout(() => {
        setIsLoadingData(false);
        navigate("../");
      }, 500);
    } catch (error) {
      setIsLoadingData(false);
      throw new Error(error);
    }
  };
  // delete data manpower
  const deleteDataManpower = async (id: string, setIsLoading) => {
    try {
      const result = await manpowerRepository.delete(id);
      setIsSuccess(true);
      setTimeout(() => {
        getDataManpower();
        setIsLoading({ loading: false, exec: true });
        setDataId(null);
      }, 500);
    } catch (error) {
      setIsSuccess(false);
      setTimeout(() => {
        setIsLoading({ loading: false, exec: true });
        setDataId(null);
        throw new Error(error);
      }, 500);
    }
  };
  // delete data manpower
  const deleteDataPosition = async (id: string, setIsLoading) => {
    try {
      const result = await positionRepository.delete(id);
      setIsSuccess(true);
      setTimeout(() => {
        getDataPosition();
        setIsLoading({ loading: false, exec: true });
        setDataId(null);
      }, 500);
    } catch (error) {
      setIsSuccess(false);
      setTimeout(() => {
        setIsLoading({ loading: false, exec: true });
        setDataId(null);
        throw new Error(error);
      }, 500);
    }
  };
  // get data manpower
  const getDataManpower = async () => {
    setIsLoadingData(true);
    setDataManpower([]);
    try {
      const result = await manpowerRepository.get();
      setDataManpower(result);
      setIsLoadingData(false);
    } catch (error) {
      throw new Error(error);
    }
  };
  // get data position
  const getDataPosition = async () => {
    setIsLoadingData(true);
    setDataPosition([]);
    try {
      const result = await positionRepository.get();
      setDataPosition(result);
      setIsLoadingData(false);
    } catch (error) {
      throw new Error(error);
    }
  };
  // get data manpower
  const getDataManpowerById = async (id: string) => {
    try {
      const result = await manpowerRepository.getDataById(id);
      setDataManpowerById(result);
    } catch (error) {
      throw new Error(error);
    }
  };
  // get data Position
  const getDataPositionById = async (id: string) => {
    try {
      const result = await positionRepository.getDataById(id);
      setDataPositionById(result);
    } catch (error) {
      throw new Error(error);
    }
  };
  // get data section
  const getDataSection = async () => {
    try {
      const result = await sectionRepository.getSection();
      setDataSection(result);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    setMessage(null);
    getDataPosition();
    getDataSection();
  }, []);
  useEffect(() => {
    if (type == "manpower") {
      getDataManpower();
    } else {
      getDataPosition();
    }
  }, [type]);
  useEffect(() => {
    if (!!id && type == "manpower") {
      getDataManpowerById(id);
    } else if (!!id && type == "posisi") {
      getDataPositionById(id);
    }
  }, [id, type]);

  return {
    state,
    searchParams,
    errors,
    openModalDelete,
    openModalConfirm,
    openModalSuccess,
    type,
    dataManpower,
    isLoadingData,
    dataManpowerById,
    dataPositionById,
    dataSection,
    dataPosition,
    isSuccess,
    id,
    dataId,
    message,
    setSearchParams,
    navigate,
    createManpower,
    createPosition,
    editManpower,
    editPosition,
    register,
    handleSubmit,
    setOpenModalDelete,
    setOpenModalConfirm,
    setOpenModalSuccess,
    deleteDataManpower,
    deleteDataPosition,
    setDataId,
    getDataManpower,
  };
}
