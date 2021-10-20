import { setChartParams, saveMarks } from './RequestHandler/RequestHandler';

// trocar getChartParams por setMarksParams
export default async function getChartParams(marks) {
  // eslint-disable-next-line no-useless-catch
  try {
    // podemos criar um input para o nome da torra antes, para tirar esse prompt q o amoras nao gostou (nem eu)
    const RoastName = prompt('Digite o nome da sua torra');
    // temos q ver oq tem no chartParams pra poder pegar o id da torra criada agora com o setChartParams
    const chartParams = await setChartParams(RoastName);
    cosole.log(chartParams, 'eeeeiiiitaaaaaaa choooorooooooo');
    marks.forEach(async (mark) => {
      await saveMarks(mark, chartParams);
    });
    /* OS ESTADOS GLOBAIS DEVEM SER LIMPOS E O USUARIO DEVE SER REDIRECIONADO PARA A PÁGINA HOME */
  } catch (error) {
    throw error;
  }
}

/* SALVAR A TORRA NORMALMENTE, PEGAR O ID DE RESPOSTA, DEPOIS CHAMAR OUTRA ROTA PARA SALVAR DENTRO DO ARQUIVO DA TORRA NO BACKEND, AS ANOTAÇÕES */
