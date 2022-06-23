<template>
  <FormularioTracker @aoSalvarTarefa="salvarTarefa"/>
  <div class="lista">
    <BoxTracker v-if="listaEstaVazia">
        Sua lista ainda está vazia ☹️ 
      </BoxTracker>
    <TarefaTracker v-for="(tarefa,index) in tarefas" :key="index" :tarefa="tarefa"/>
  </div>    
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormularioTracker from '../components/FormularioTracker.vue';
import TarefaTracker from '../components/TarefaTracker.vue';
import BoxTracker from '../components/BoxTracker.vue';
import ITarefa from '../interface/ITarefa'

export default defineComponent({
  name: 'App',
  components: {
    FormularioTracker,
    TarefaTracker,
    BoxTracker,
    },
  data (){
    return {
      tarefas: [] as ITarefa[],
    }
  },
  methods:{
    salvarTarefa(tarefa: ITarefa):void{
      this.tarefas.push(tarefa)
    }
  },
  computed:{
    listaEstaVazia():boolean {
      return this.tarefas.length === 0
    }
  },
 
});
</script>
