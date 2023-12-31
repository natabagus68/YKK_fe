import usePreventive from "./preventive-model";
import { Breadcrumbs } from "@common/components";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import ChecklistIcon from "@common/components/icons-new/ChecklistIcon";
import preventiveIcon from "@common/components/icons-new/ChecklistIcon";
import ExportIcon from "@common/components/icons-new/ExportIcon";
import EyeShowIcon from "@common/components/icons-new/EyeShowIcon";
import PlusIcon from "@common/components/icons-new/PlusIcon";
import Modal from "@common/components/modals/Modal";
import gambar_part from "../../../../assets/Gambar-part.png";

export default function PreventiveDetail() {
  const preventive = usePreventive();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs items={["Report", "Preventive", "Details"]} />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">
            Detail Preventive
          </span>
          <div className="flex items-end gap-4">
            <button
              className="flex items-center gap-2 h-[46px] px-[20px] border border-[#20519F] rounded"
              onClick={() => preventive.onOpenBack()}
            >
              <ArrowUpIcon className="-rotate-90 w-5 h-5" color="#20519F" />
              <span className="text-[#20519F] text-sm font-semibold">
                Kembali
              </span>
            </button>
            <button className="flex items-center gap-2 h-[46px] px-[20px] bg-[#20519F] rounded">
              <ExportIcon color="white" />
              <span className="text-white text-sm font-semibold">
                Download Report
              </span>
            </button>
          </div>
        </div>
        <div className="w-full flex gap-[160px] py-[18px] px-[32px] flex-wrap">
          <div className="flex flex-col gap-6">
            <span className="text-2xl text-[#514E4E]">
              Informasi Maintenance
            </span>
            <table className="w-[442px]">
              <tbody>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">No Mesin</td>
                  <td className="px-4 py-[6px] font-semibold">SR-12345</td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Nama Mesin</td>
                  <td className="px-4 py-[6px] font-semibold">Furnace</td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Pelaksana</td>
                  <td className="px-4 py-[6px] font-semibold">
                    Bramantra Putra
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Interval Preventive</td>
                  <td className="px-4 py-[6px] font-semibold">3 Bulan</td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Waktu Kerja</td>
                  <td className="px-4 py-[6px] font-semibold">
                    1 Jam 23 menit
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="bg-[#12B569] rounded text-white w-fit px-3 py-1">
              Disetujui
            </div>
            <table className="w-fit">
              <thead>
                <tr>
                  <th className="text-start pr-[80px] pb-4">Diperiksa</th>
                  <th className="text-start pb-4">Disetujui</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="flex items-center gap-2">
                      <div className="p-[1px] border rounded-full border-[#12B569] w-fit">
                        <ChecklistIcon className="w-[14px] h-[14px]" />
                      </div>
                      <span>Ferdian</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      <div className="p-[1px] border rounded-full border-[#12B569] w-fit">
                        <ChecklistIcon className="w-[14px] h-[14px]" />
                      </div>
                      <span>Kusnanto</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-base text-[#514E4E] flex items-center gap-4">
              <span>Tanggal & Jam Checklist :</span>
              <span className="font-semibold">12/12/2022</span>
            </div>
            <table className="w-[442px]">
              <tbody>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Section</td>
                  <td className="px-4 py-[6px] font-semibold">Produksi 01</td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Departemen</td>
                  <td className="px-4 py-[6px] font-semibold">Warehouse 01</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">
            Laporan Preventive
          </span>
        </div>

        <table className="w-full">
          <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
            <tr>
              <th className="px-[32px] text-start border-r border-[#D0D3D9]">
                Sub-Mechine
              </th>
              <th className="px-[32px] text-start border-r border-[#D0D3D9]">
                Parameter
              </th>
              <th className="px-[32px] text-start border-r border-[#D0D3D9]">
                Status
              </th>
              <th className="px-[32px] text-start border-r border-[#D0D3D9]">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-base text-[#514E4E]">
            <tr className="border-b border-[#D0D3D9] h-[64px]">
              <td
                rowSpan={3}
                className="px-[32px] border-r border-[#D0D3D9] text-center"
              >
                Dump Feeder
              </td>
              <td className="px-[32px] border-r border-[#D0D3D9]">
                1. Pompa listrik
              </td>
              <td className="px-[32px] text-[#10A560] border-r border-[#D0D3D9]">
                Check
              </td>
            </tr>
            <tr className="border-b border-[#D0D3D9] h-[64px]">
              <td className="px-[32px] border-l border-[#D0D3D9]">2. Gear</td>
              <td className="px-[32px] text-[#E18308] border-l border-[#D0D3D9]">
                Abnormal
              </td>
              <td className="px-[32px] border-l border-[#D0D3D9]">
                <div className="flex items-center gap-6">
                  <button
                    className="flex items-center gap-2 h-[46px] px-[20px] bg-[#1BBDD4]"
                    onClick={() =>
                      preventive.navigate("expands", {
                        state: {
                          data: "Gear",
                        },
                      })
                    }
                  >
                    <EyeShowIcon color="white" />
                    <span className="text-white text-sm font-semibold">
                      Lihat
                    </span>
                  </button>
                </div>
              </td>
            </tr>
            <tr className="border-b border-[#D0D3D9] h-[64px]">
              <td className="px-[32px] border-r border-[#D0D3D9]">
                3. Shaft & Bearing
              </td>
              <td className="px-[32px] text-[#DA3E33] border-r border-[#D0D3D9]">
                Change
              </td>
              <td className="px-[32px]">
                <div className="flex items-center gap-6">
                  <button
                    className="flex items-center gap-2 h-[46px] px-[20px] bg-[#1BBDD4]"
                    onClick={() => preventive.navigate("expands")}
                  >
                    <EyeShowIcon color="white" />
                    <span className="text-white text-sm font-semibold">
                      Lihat
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
