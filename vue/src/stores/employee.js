import { defineStore } from "pinia";
import { useDepartmentStore } from "./department";
import { usePositionStore } from "./position";

export const useEmployeeStore = defineStore("employee", {
  state: () => ({
    employees: [
      {
        id: 1,
        name: "Nguyễn Văn A",
        email: "a@example.com",
        phone: "0123456789",
        departmentId: 1,
        positionId: 1,
      },
      {
        id: 2,
        name: "Trần Thị B",
        email: "b@example.com",
        phone: "0987654321",
        departmentId: 2,
        positionId: 2,
      },
    ],
  }),
  getters: {
    employeesWithDetails: (state) => {
      const deptStore = useDepartmentStore();
      const posStore = usePositionStore();
      return state.employees.map((emp) => ({
        ...emp,
        department:
          deptStore.departments.find((d) => d.id === emp.departmentId)?.name ||
          "N/A",
        position:
          posStore.positions.find((p) => p.id === emp.positionId)?.name ||
          "N/A",
      }));
    },
  },
  actions: {
    add(employee) {
      const newId = Math.max(...this.employees.map((e) => e.id)) + 1;
      this.employees.push({ id: newId, ...employee });
    },
    update(id, employee) {
      const index = this.employees.findIndex((e) => e.id === id);
      if (index !== -1)
        this.employees[index] = { ...this.employees[index], ...employee };
    },
    remove(id) {
      this.employees = this.employees.filter((e) => e.id !== id);
    },
  },
});
