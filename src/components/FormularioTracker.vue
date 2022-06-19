<template>
    <div class="box formulario">
        <div class="columns">
           <div class="column is-10" role="form" aria-label="Formulario para criação de uma nova tarefa">
            <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar ?" v-model="descricao">
           </div>
        </div>
        <div class="column">
            <TemporizadorTracker @aoTemporizadorFinalizado="finalizaTarefa" />
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import TemporizadorTracker from "../components/TemporizadorTracker.vue"

export default defineComponent({
  name:'FormularioTracker',
  emits:['aoSalvarTarefa'],
  components:{
    TemporizadorTracker,
  },
  data(){
      return {
        descricao:''
      }
  },
  methods:{
      finalizaTarefa(tempoDecorrido:number): void{
        this.$emit('aoSalvarTarefa',{
          duracaoEmSegundos: tempoDecorrido,
          descricao: this.descricao
        })
        this.descricao = ''
      }
 }
});
</script>

<style>
  .formulario{
    background-color: var(--bg-primario);
    color: var(--texto-primario)
  }
</style>