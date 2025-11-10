import { defineStore } from "pinia";

export const usePositionStore = defineStore("position", {
  state: () => ({
    positions: [
      { id: 1, name: "Developer", salary: 10000000 },
      { id: 2, name: "Manager", salary: 20000000 },
    ],
  }),
  actions: {
    add(position) {
      const newId = Math.max(...this.positions.map((p) => p.id)) + 1;
      this.positions.push({ id: newId, ...position });
    },
    update(id, position) {
      const index = this.positions.findIndex((p) => p.id === id);
      if (index !== -1)
        this.positions[index] = { ...this.positions[index], ...position };
    },
    remove(id) {
      this.positions = this.positions.filter((p) => p.id !== id);
    },
  },
});
