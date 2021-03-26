import { expect } from "chai";
import { DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_SIZE, DEFAULT_SORT_ORDER } from "src/models/components/pagination";
import { parseQueryParams } from "./parsers";

describe('parseQueryParams()', () => {

  it('deve ignorar o parâmetro "page" com valor default', () => {
    const NOME_PARAMETRO = 'page';
    const params: Record<string, string> = { [NOME_PARAMETRO]: `${DEFAULT_PAGE_NUMBER}` };
    const resposta = parseQueryParams(params);
    
    expect(resposta).to.not.have.property(NOME_PARAMETRO);
  });

  // -------------------------------------------------------------

  it('deve ignorar o parâmetro "size" com valor default', () => {
    const NOME_PARAMETRO = 'size';
    const params: Record<string, string> = { [NOME_PARAMETRO]: `${DEFAULT_PAGE_SIZE}` };
    const resposta = parseQueryParams(params);
    
    expect(resposta).to.not.have.property(NOME_PARAMETRO);
  });
  
  // -------------------------------------------------------------

  it('deve ignorar o parâmetro "order" com valor default', () => {
    const NOME_PARAMETRO = 'order';
    const params: Record<string, string> = { [NOME_PARAMETRO]: DEFAULT_SORT_ORDER };
    const resposta = parseQueryParams(params);
    
    expect(resposta).to.not.have.property(NOME_PARAMETRO);
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
    
    expect(resposta).to.deep.equal(resposta);
  });

});
