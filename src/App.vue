<script setup>
import { reactive } from 'vue';

const state = reactive({
  filterArithmedicalOperator: '+',
  inputNumberOne: 0,
  inputNumberTwo: 0,
  result:''
})

function result(){
  let result = state.inputNumberOne;
  result +=  state.filterArithmedicalOperator;
  result += state.inputNumberTwo 
  return eval(result)
}


</script>

<template>
  <main class="container ">
    <header class=" p-5 mb-4 mt-4 bg-primary text-center rounded-5">
      <h1>Calculadora</h1>
    </header>
    <form class="form">
      <div class="row d-flex">
        <div class="col">
          <label for="">primeiro numero</label>
          <input :value="state.inputNumberOne" @change="event => state.inputNumberOne = event.target.value" required type="number" placeholder="Digite o primeiro numero" class="form-control border-primary">
        </div>
        <div class="col">
          <label for="">Segundo numero</label>
          <input :value="state.inputNumberTwo" @change="event => state.inputNumberTwo= event.target.value" required type="number" placeholder="Digite o segundo numero" class="form-control border-primary">
        </div>
        <div class="col">
          <label for="">resultado</label>
          <input type="number" name="resultado" :value="result()"  placeholder="Resultado" class="form-control">
        </div>
        <div class="col-md-1">
          <label for="">Operador</label>
          <select name="operação"  class="form-control text-center" @change="event => state.filterArithmedicalOperator = event.target.value">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="/">/</option>
            <option value="*">*</option>
          </select>
        </div>
      </div>
    </form>
  </main>
</template>

<style scoped>
h1{
  color: white;
}
</style>
