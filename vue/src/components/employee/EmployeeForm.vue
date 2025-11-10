<template>
  <div class="bg-white overflow-hidden shadow rounded-lg mb-6">
    <div class="px-6 py-4 border-b border-gray-200">
      <h2 class="text-lg font-medium text-gray-900">
        {{ props.item ? "Sửa Nhân viên" : "Thêm Nhân viên" }}
      </h2>
    </div>
    <div class="px-6 py-4">
      <form @submit.prevent="saveEmployee" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Tên</label
            >
            <input
              v-model="form.name"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Tên"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Email</label
            >
            <input
              v-model="form.email"
              type="email"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Phone</label
            >
            <input
              v-model="form.phone"
              type="tel"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Phone"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Phòng ban</label
            >
            <select
              v-model="form.departmentId"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="">Chọn phòng ban</option>
              <option
                v-for="dept in departments"
                :key="dept.id"
                :value="dept.id"
              >
                {{ dept.name }}
              </option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Chức vụ</label
            >
            <select
              v-model="form.positionId"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="">Chọn chức vụ</option>
              <option v-for="pos in positions" :key="pos.id" :value="pos.id">
                {{ pos.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="flex justify-end space-x-2">
          <button
            type="button"
            @click="cancelEdit"
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded-md transition duration-200"
            v-if="props.item"
          >
            Hủy
          </button>
          <button
            type="submit"
            class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
          >
            {{ props.item ? "Sửa" : "Thêm" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useEmployeeStore } from "@/stores/employee";
import { useDepartmentStore } from "@/stores/department";
import { usePositionStore } from "@/stores/position";


const emit = defineEmits(['save', 'cancel'])
const props = defineProps({
  item: Object,
});

const store = useEmployeeStore();
const deptStore = useDepartmentStore();
const posStore = usePositionStore();

const form = ref({
  name: "",
  email: "",
  phone: "",
  departmentId: "",
  positionId: "",
});
const departments = computed(() => deptStore.departments);
const positions = computed(() => posStore.positions);

onMounted(() => {
  // Sync data nếu cần
});

watch(
  () => props.item,
  (newItem) => {
    if (newItem) {
      form.value = { ...newItem }; // Load data vào form
    } else {
      form.value = { name: "", email: "", departmentId: "", positionId: "" }; // Reset cho add
    }
  },
  { immediate: true }
);

const saveEmployee = () => {
  if (props.item && props.item.id) {
    store.update(props.item.id, form.value);
  } else {
    store.add(form.value);
  }
  emit("save");
};

const cancelEdit = () => {
  emit("cancel"); // Notify parent để clear
};
</script>