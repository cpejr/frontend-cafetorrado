import { setChartParams } from './RequestHandler/RequestHandler';
import saveMarks from './RequestHandler/SaveMarks';

export default async function getChartParams(marks) {
  const RoastName = prompt('Digite o nome da sua torra');
  const chartParams = await setChartParams(RoastName);
  marks.forEach(async (mark) => {
    await saveMarks(mark, chartParams);
  });
  /* OS ESTADOS GLOBAIS DEVEM SER LIMPOS E O USUARIO DEVE SER REDIRECIONADO PARA A PÁGINA HOME */
}

/* SALVAR A TORRA NORMALMENTE, PEGAR O ID DE RESPOSTA, DEPOIS CHAMAR OUTRA ROTA PARA SALVAR DENTRO DO ARQUIVO DA TORRA NO BACKEND, AS ANOTAÇÕES */
