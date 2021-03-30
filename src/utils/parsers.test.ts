import { expect } from "chai";
import { DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_SIZE, DEFAULT_SORT_ORDER } from "src/models/components/pagination";
import { parseQueryParams } from "./parsers";

describe('parseQueryParams()', () => {

  it('deve ignorar o parâmetro "page" com valor default', () => {
    const nomeParametro = 'page';
    const params: Record<string, string> = { [nomeParametro]: `${DEFAULT_PAGE_NUMBER}` };
    const resposta = parseQueryParams(params);
    
    expect(resposta).to.not.have.property(nomeParametro);
  });

  // -------------------------------------------------------------

  it('deve ignorar o parâmetro "size" com valor default', () => {
    const nomeParametro = 'size';
    const params: Record<string, string> = { [nomeParametro]: `${DEFAULT_PAGE_SIZE}` };
    const resposta = parseQueryParams(params);
    
    expect(resposta).to.not.have.property(nomeParametro);
  });
  
  // -------------------------------------------------------------

  it('deve ignorar o parâmetro "order" com valor default', () => {
    const nomeParametro = 'order';
    const params: Record<string, string> = { [nomeParametro]: DEFAULT_SORT_ORDER };
    const resposta = parseQueryParams(params);
    
    expect(resposta).to.not.have.property(nomeParametro);
  });

  // -------------------------------------------------------------

  it('deve conter todos os parâmetros que não tenha valores default', () => {
    const params: Record<string, string> = {
      page: '1',
      size: '8',
      sort: 'campo',
      order: 'desc'
    };
    const resposta = parseQueryParams(params);
    
    //expect(resposta).to.deep.equal(resposta);
    expect(resposta).to.be.false;
  });

});
