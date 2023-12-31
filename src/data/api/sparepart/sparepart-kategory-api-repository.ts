import { SparepartKategory } from "@domain/models/sparepart/sparepart-kategory";
import { SparepartKategoryRepository } from "@domain/repositories/sparepart/sparepart-kategory-repository";
import { api } from "../_api";

export class SparepartKategoryApiRepository
  implements SparepartKategoryRepository
{
  async get(): Promise<SparepartKategory[]> {
    const { data } = await api.get(`sparepart-category`);
    return data?.data?.map((item) =>
      SparepartKategory.create({
        id: item?.id,
        name: item?.name || "-",
      })
    );
  }
  async create(category: SparepartKategory): Promise<void> {
    try {
      const { data } = await api.post("sparepart-category", {
        name: category?.name,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
  async getDataById(id: string): Promise<SparepartKategory> {
    try {
      const { data } = await api.get(`sparepart-category/${id}`);
      return SparepartKategory.create({
        name: data.data?.name,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
  async edit(category: SparepartKategory): Promise<void> {
    try {
      const { data } = await api.put(`sparepart-category/${category.id}`, {
        name: category?.name,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
  async delete(id: string): Promise<void> {
    try {
      const { data } = await api.delete(`sparepart-category/${id}`);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
