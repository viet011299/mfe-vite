<template>
  <div class="bg-white overflow-hidden shadow rounded-lg mt-6">
    <div class="px-6 py-4 border-b border-gray-200">
      <h2 class="text-lg font-medium text-gray-900">Thêm/Sửa Chức vụ</h2>
    </div>
    <div class="px-6 py-4">
      <form @submit.prevent="savePosition" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Tên chức vụ</label
            >
            <input
              v-model="form.name"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Tên chức vụ"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Lương (VND)</label
            >
            <input
              v-model.number="form.salary"
              type="number"
              step="1000000"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="0"
              required
            />
          </div>
        </div>
        <div class="flex justify-end">
          <button
            type="submit"
            class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
          >
            Lưu
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { usePositionStore } from "@/stores/position";

const store = usePositionStore();
const form = ref({ name: "", salary: 0 });

const savePosition = () => {
  store.add({ ...form.value });
  form.value = { name: "", salary: 0 }; // Reset form
};
</script>