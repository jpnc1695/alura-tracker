<template>
    <div class="box formulario">
        <div class="columns">
           <div class="column is-5" role="form" aria-label="Formulario para criação de uma nova tarefa">
            <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar ?" v-model="descricao">
           </div>
        </div>
        <div class="column is-3">
          <div class="select">
            <select v-model="idProjeto">
              <option value="">Selecione o projeto</option>
                <option 
                  :value="projeto.id"
                  v-for="projeto in projetos"
                  :key="projeto.id"
                  >
                   {{projeto.nome}}
                </option>
              </select>
          </div>
        </div>
        <div class="column">
            <TemporizadorTracker @aoTemporizadorFinalizado="finalizaTarefa" />
        </div>
    </div>
</template>


<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import TemporizadorTracker from "../components/TemporizadorTracker.vue"

import { key } from "@/store";

export default defineComponent({
  name:'FormularioTracker',
  emits:['aoSalvarTarefa'],
  components:{
    TemporizadorTracker,
  },
  data(){
      return {
        descricao:'',
        idProjeto:''
      }
  },
  methods:{
      finalizaTarefa(tempoDecorrido:number): void{
        this.$emit('aoSalvarTarefa',{
          duracaoEmSegundos: tempoDecorrido,
          descricao: this.descricao,
          projeto: this.projetos.find((proj: { id: string; }) => proj.id == this.idProjeto)
        })
        this.descricao = ''
      },
      setup(){
        const store = useStore(key)
        return {
          projetos: computed(()=>store.state.projetos)
        }
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