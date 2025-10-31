<template>
  <div class="counter">
    <div class="display">{{ count }}</div>
    <div class="buttons">
      <button @click="decrement" class="btn btn-red">− Giảm</button>
      <button @click="increment" class="btn btn-green">+ Tăng</button>
    </div>
    <button @click="reset" class="btn btn-blue">🔄 Reset</button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count > 0) {
        this.count--;
      }
    },
    reset() {
      this.count = 0;
    },
  },
};
</script>

<style scoped>
.counter {
  text-align: center;
  padding: 20px;
}

.display {
  font-size: 64px;
  font-weight: bold;
  color: #10b981;
  margin-bottom: 20px;
}

.buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 15px;
}

.btn {
  padding: 12px 30px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  color: white;
  transition: transform 0.2s;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-green {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.btn-red {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
}

.btn-blue {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
}
</style>