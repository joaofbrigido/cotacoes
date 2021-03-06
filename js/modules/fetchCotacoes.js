export default function fetchCotacoes() {
  const usdMainVal = document.getElementById('usd-cot');
  const usdValCompra = document.querySelector('[data-cota="usdCompra"]');
  const usdValVenda = document.querySelector('[data-cota="usdVenda"]');
  const usdVariacao = document.querySelector('[data-cota="usdVariacao"]');

  const eurMainVal = document.getElementById('eur-cot');
  const eurValCompra = document.querySelector('[data-cota="eurCompra"]');
  const eurValVenda = document.querySelector('[data-cota="eurVenda"]');
  const eurVariacao = document.querySelector('[data-cota="eurVariacao"]');

  const btcMainVal = document.getElementById('btc-cot');
  const btcValCompra = document.querySelector('[data-cota="btcCompra"]');
  const btcVariacao = document.querySelector('[data-cota="btcVariacao"]');

  const ibovMainVal = document.getElementById('ibov-cot');
  const ibovPontos = document.querySelector('[data-cota="ibovPontos"]');
  const ibovVariacao = document.querySelector('[data-cota="ibovVariacao"]');

  const selicMainVal = document.getElementById('selic-cot');
  const selicDiario = document.querySelector('[data-cota="selic"]');

  const cdiMainVal = document.getElementById('cdi-cot');
  const cdiDiario = document.querySelector('[data-cota="cdi"]');

  const fatorDiario = document.querySelector('[data-cota="fatorDiario"]');
  const fatorDiarioCdi = document.querySelector('[data-cota="fatorDiarioCdi"]');


  async function setValCotacoes() {
    const url = 'https://api.hgbrasil.com/finance?format=json-cors&key=64788d64';
    try {
      const resp = await fetch(url);
      const cotaJson = await resp.json();
      const cotacao = await cotaJson.results;

      let usdBuyPrice = cotacao.currencies.USD.buy;
      let usdSellPrice = cotacao.currencies.USD.sell;
      let usdVariation = cotacao.currencies.USD.variation;
      usdMainVal.innerHTML = `R$ ${usdBuyPrice}`;
      usdValCompra.innerHTML = `R$ ${usdBuyPrice}`;
      usdValVenda.innerHTML = `R$ ${usdSellPrice}`;
      usdVariacao.innerHTML = `${usdVariation}%`;

      let eurBuyPrice = cotacao.currencies.EUR.buy;
      let eurSellPrice = cotacao.currencies.EUR.sell;
      let eurVariation = cotacao.currencies.EUR.variation;
      eurMainVal.innerHTML = `R$ ${eurBuyPrice}`;
      eurValCompra.innerHTML = `R$ ${eurBuyPrice}`;
      eurValVenda.innerHTML = `R$ ${eurSellPrice}`;
      eurVariacao.innerHTML = `${eurVariation}%`;

      let btcBuyPrice = cotacao.bitcoin.foxbit.last;
      let btcVariation = cotacao.bitcoin.foxbit.variation;
      btcMainVal.innerHTML = `R$ ${btcBuyPrice}`
      btcValCompra.innerHTML = `R$ ${btcBuyPrice}`
      btcVariacao.innerHTML = `${btcVariation}%`

      let ibovPoints = cotacao.stocks.IBOVESPA.points;
      let ibovVariation = cotacao.stocks.IBOVESPA.variation;
      ibovMainVal.innerHTML = `${ibovPoints}`;
      ibovPontos.innerHTML = `${ibovPoints}`;
      ibovVariacao.innerHTML = `${ibovVariation}%`;

      let selicTax = cotacao.taxes[0].selic;
      let selicTaxDaily = cotacao.taxes[0].selic_daily;
      selicMainVal.innerHTML = `${selicTax}%`;
      selicDiario.innerHTML = `${selicTaxDaily}%`;

      let cdiTax = cotacao.taxes[0].cdi;
      let cdiTaxDaily = cotacao.taxes[0].cdi_daily;
      cdiMainVal.innerHTML = `${cdiTax}%`;
      cdiDiario.innerHTML = `${cdiTaxDaily}%`;

      let dailyFactory = cotacao.taxes[0].daily_factor;
      fatorDiario.innerHTML = `${dailyFactory}%`;
      fatorDiarioCdi.innerHTML = `${dailyFactory}%`;
    } catch (error) {
      console.log(error);
    }
  }
  setValCotacoes();

}
