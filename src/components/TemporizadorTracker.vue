<template>
      <div class="is-flex is-align-items-center">
          <CronometroTracker :tempoEmSegundos="tempoEmSegundos"/>
          <BotaoTracker @clicado="iniciar" icone="fas fa-play" texto="play" :desabilitado="cronometroRodando"/>
          <BotaoTracker @clicado="finalizar" icone='fas fa-stop' texto="stop" :desabilitado="!cronometroRodando"/>           
    </div>
</template> 

<script lang="ts">
  import { defineComponent } from "vue";
  import CronometroTracker from "./CronometroTracker.vue";
  import BotaoTracker from "./BotaoTracker.vue";

  export default defineComponent({
    name: 'TemporizadorTracker',
    emits:['aoTemporizadorFinalizado'],
    components:{
       CronometroTracker,
       BotaoTracker,
       },
    data(){
      return {
          tempoEmSegundos:0,
          cronometro:0,
          cronometroRodando: false
      }
    },
    
    methods:{
        iniciar(){
          this.cronometroRodando = true
         this.cronometro=setInterval(()=>{
            this.tempoEmSegundos += 1;
          }, 1000)
        },
        finalizar(){
           this.cronometroRodando = false
           clearInterval(this.cronometro)
           this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)
           this.tempoEmSegundos = 0
        }

    }
  })
</script>
            