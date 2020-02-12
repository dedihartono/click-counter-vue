<template>
  <div>
    <div>
      <span id="label_counter">{{ counter }}</span>
    </div>
    <div>
      <button id="increment_button" @click="counter += 1">Increment</button>
      <input id="input_counter" type="text" v-model="counter">
      <button id="decrement_button" @click="counter -= 1">Decrement</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClickCounter',
  data: function()  {
     return (
       {
         counter: 0
       }
     ) 
  }
}
</script>

<style scoped>

input {
  text-align: center; 
}

</style>