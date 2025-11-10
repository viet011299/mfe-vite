<template>
  <div>
    <EmployeeForm
      :item="selectedItem"
      @save="handleSaveEmployee"
      @cancel="handleCancelEdit"
    />
    <div class="bg-white overflow-hidden shadow rounded-lg">
      <div class="px-6 py-4 border-b border-gray-200">
        <h2 class="text-lg font-medium text-gray-900">Danh sách Nhân viên</h2>
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ID
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Tên
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Phone
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Phòng ban
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Chức vụ
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr
              v-for="emp in employeesWithDetails"
              :key="emp.id"
              class="hover:bg-gray-50"
            >
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ emp.id }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ emp.name }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ emp.email }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ emp.phone }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ emp.department }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ emp.position }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  @click="editEmployee(emp)"
                  class="text-indigo-600 hover:text-indigo-900 mr-2"
                >
                  Sửa
                </button>
                <button
                  @click="deleteEmployee(emp.id)"
                  class="text-red-600 hover:text-red-900"
                >
                  Xóa
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useEmployeeStore } from "@/stores/employee";
import EmployeeForm from "./EmployeeForm.vue";

const store = useEmployeeStore();
const employeesWithDetails = computed(() => store.employeesWithDetails);
const selectedItem = ref(null);
const editEmployee = (emp) => {
  console.log("Edit:", emp);
  selectedItem.value = { ...emp };
};

const deleteEmployee = (id) => {
  if (confirm("Xác nhận xóa?")) {
    store.remove(id);
  }
};

const handleSaveEmployee = () => {
  selectedItem.value = null;
};

const handleCancelEdit = () => {
  selectedItem.value = null;
};
</script>