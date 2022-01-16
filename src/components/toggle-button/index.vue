<template>
  <div class="toggle">
    <div class="toggle__label">
      <span>{{ label }}</span>
    </div>

    <div class="toggle__buttons-container">
      <button type="button" class="toggle__button toggle__button--no" :class="{active: !computedValue}" @click="toggle(false)">Não</button>

      <button type="button" class="toggle__button toggle__button--yes" :class="{active: computedValue}" @click="toggle(true)">Sim</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toggle-button',
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      computedValue: false
    }
  },
  created() {
    this.computedValue = this.value
  },
  methods: {
    toggle(value) {
      this.computedValue = value
    }
  }
}
</script>

<style scoped>
.toggle {
  width: auto;
  display: flex;
  flex-direction: column;
  padding: 4px;
}

.toggle__label {
  display: flex;
}

.toggle__label span {
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.75);
  margin-bottom: 12px;
}

.toggle__buttons-container {
  width: auto;
  display: flex;
}

.toggle__button {
  padding: 8px 12px;
  border: none;
  border-radius: 2px;
  font-size: 0.9rem;
}

.toggle__button--no {
  background: #e64f4f;
  color: #fafafa;
  transition: 0.3s;
}
.toggle__button--no:hover,
.toggle__button--no.active {
  background: #fc1b1b;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}

.toggle__button--yes {
  background: #47cb47;
  color: #fafafa;
  transition: 0.3s;
}
.toggle__button--yes:hover,
.toggle__button--yes.active {
  background: #29f429;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}
</style>