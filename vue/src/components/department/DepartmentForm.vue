<template>
  <div class="bg-white overflow-hidden shadow rounded-lg mb-6">
    <div class="px-6 py-4 border-b border-gray-200">
      <h2 class="text-lg font-medium text-gray-900">Thêm/Sửa Phòng ban</h2>
    </div>
    <div class="px-6 py-4">
      <form @submit.prevent="saveDepartment" class="space-y-6">
        <div class="grid grid-cols-1 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Tên phòng ban</label
            >
            <input
              v-model="form.name"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Tên phòng ban"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Mô tả</label
            >
            <textarea
              v-model="form.description"
              rows="3"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Mô tả"
              required
            ></textarea>
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
import { useDepartmentStore } from "@/stores/department";
import { useRouter } from "vue-router";

const store = useDepartmentStore();
const router = useRouter();
const form = ref({ name: "", description: "" });

const saveDepartment = () => {
  store.add({ ...form.value });
  router.push("employees");
  form.value = { name: "", description: "" }; // Reset form
};
</script>