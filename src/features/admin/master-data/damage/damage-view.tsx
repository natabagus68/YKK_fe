import React from "react";
import useDamage from "./damage-model";
import { Breadcrumbs } from "@common/components";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import EditIcon from "@common/components/icons-new/EditIcon";
import EyeShowIcon from "@common/components/icons-new/EyeShowIcon";
import PlusIcon from "@common/components/icons-new/PlusIcon";
import TrashIcon from "@common/components/icons-new/TrashIcon";
import ModalConfirm from "@common/components/modals/ModalConfirm";
import ModalDelete from "@common/components/modals/ModalDelete";
import ModalSuccess from "@common/components/modals/ModalSeccess";

export default function DamageView() {
  const damage = useDamage();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <ModalDelete
        open={damage.openModalDelete}
        setOpen={damage.setOpenModalDelete}
        setOpenConfirm={damage.setOpenModalConfirm}
      />
      <ModalConfirm
        open={damage.openModalConfirm}
        setOpen={damage.setOpenModalConfirm}
        setOpenSuccess={damage.setOpenModalSuccess}
        cb={(setIsLoading) => {
          setTimeout(() => {
            setIsLoading({ loading: false, exec: true });
            console.log("delete useDamage");
          }, 3000);
        }}
      />
      <ModalSuccess
        open={damage.openModalSuccess}
        setOpen={damage.setOpenModalSuccess}
      />
      <Breadcrumbs items={["Master Data", `Damage`]} />

      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">Damage</span>
          <div className="flex items-end gap-4">
            <button
              className="flex items-center gap-2 h-[46px] px-[20px] bg-[#20519F] rounded"
              onClick={() => damage.navigate("create")}
            >
              <PlusIcon color="white" />
              <span className="text-white text-sm font-semibold">Add Data</span>
            </button>
          </div>
        </div>

        <table className="w-full">
          <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
            <tr>
              <th className="px-[32px] text-start">ID</th>
              <th className="px-[32px] text-start">Jenis Kerusakan</th>
              <th className="px-[32px] text-start">Action</th>
            </tr>
          </thead>
          <tbody className="text-base text-[#514E4E]">
            <tr className="border-b border-[#D0D3D9] h-[64px]">
              <td className="px-[32px]">A0B1C027</td>
              <td className="px-[32px]">Kerusakan 1</td>
              <td className="px-[32px]">
                <div className="flex items-center gap-6">
                  <button
                    className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F79009] rounded"
                    onClick={() =>
                      damage.navigate("edit", {
                        state: {
                          edit: true,
                          data: {
                            id: "A0B1C027",
                            damage: "Kerusakan 1",
                          },
                        },
                      })
                    }
                  >
                    <EditIcon color="white" />
                    <span className="text-white text-sm font-semibold">
                      Edit
                    </span>
                  </button>
                  <button
                    className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F04438] rounded"
                    onClick={() => damage.setOpenModalDelete(true)}
                  >
                    <TrashIcon color="white" />
                    <span className="text-white text-sm font-semibold">
                      Delete
                    </span>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex py-4 px-[32px] justify-end gap-4">
          <button className="px-4 h-[40px] text-[#B8B6B6] border gap-2 border-[#B8B6B6] rounded flex items-center justify-center">
            <ArrowUpIcon
              className="w-[16px] h-[16px] -rotate-90"
              color="#B8B6B6"
            />
            <span>Prev</span>
          </button>
          <div className="w-[40px] h-[40px] bg-[#20519F] rounded flex items-center justify-center text-white">
            1
          </div>
          <button className="px-4 h-[40px] text-[#20519F] border gap-2 border-[#20519F] rounded flex items-center justify-center">
            <span>Next</span>
            <ArrowUpIcon
              className="w-[16px] h-[16px] rotate-90"
              color="#20519F"
            />
          </button>
        </div>
      </div>
    </main>
  );
}
