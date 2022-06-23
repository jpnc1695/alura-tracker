import IProjeto from '@/interface/IProjeto';

export default interface ITarefa{
  duracaoEmSegundos:number,
  descricao:string,
  projeto: IProjeto
}