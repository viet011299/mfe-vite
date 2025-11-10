<template>
  <div id="app" class="min-h-screen bg-gray-100">
    <nav class="bg-blue-600 shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-white text-xl font-bold">Quản lý Nhân viên</h1>
          </div>
          <div class="flex items-center space-x-4">
            <router-link
              to="/"
              class="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-200"
            >
              Home
            </router-link>

            <router-link
              to="/contacts"
              class="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-200"
            >
              Danh bạ liên hệ
            </router-link>

            <router-link
              to="/employees"
              class="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-200"
            >
              Nhân viên
            </router-link>
            <router-link
              to="/departments"
              class="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-200"
            >
              Phòng ban
            </router-link>
            <router-link
              to="/positions"
              class="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-200"
            >
              Chức vụ
            </router-link>
          </div>
        </div>
      </div>
    </nav>
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <router-view />
    </main>
  </div>
</template>

<script setup>
// Không cần script
</script>