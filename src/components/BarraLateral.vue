<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="Logo alura-tracker">
    </h1>
    <button class="button" @click="alterarTema">
      <span class="icon"> <i class="fa-solid fa-moon"></i></span>
      <span> {{textoBotao}}</span>  
    </button>
  </header>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    export default defineComponent({
      name: 'BarraLateral',
      emits:['aoTemaAlterado'],
      data(){
        return{
          modoEscuroAtivo: false
        }
      },
      computed: {
        textoBotao(){
          if(this.modoEscuroAtivo){
            return 'Desativar modo escuro'
          }
            return 'Ativar modo escuro'
          
        }
      },
      methods: {
         alterarTema(){
            this.modoEscuroAtivo =!this.modoEscuroAtivo
            this.$emit('aoTemaAlterado', this.modoEscuroAtivo)
         }
      }
    })
</script>

<style scoped>
    header{
      background: #0d3b66;
      border-start-end-radius: 0.8rem;
      width: 100%;
      height: 100vh;
      padding: 0.8rem;
      text-align: center;
    }
    @media only screen and (max-width: 768px){
      header{
        padding: 2.5rem;
        height:auto;
      }
    }
</style>