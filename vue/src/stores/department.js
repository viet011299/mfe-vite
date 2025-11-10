import { defineStore } from "pinia";

export const useDepartmentStore = defineStore("department", {
  state: () => ({
    departments: [
      { id: 1, name: "Phòng IT", description: "Quản lý công nghệ" },
      { id: 2, name: "Phòng Nhân sự", description: "Quản lý con người" },
    ],
  }),
  actions: {
    add(department) {
      const newId = Math.max(...this.departments.map((d) => d.id)) + 1;
      this.departments.push({ id: newId, ...department });
    },
    update(id, department) {
      const index = this.departments.findIndex((d) => d.id === id);
      if (index !== -1)
        this.departments[index] = { ...this.departments[index], ...department };
    },
    remove(id) {
      this.departments = this.departments.filter((d) => d.id !== id);
    },
  },
});
