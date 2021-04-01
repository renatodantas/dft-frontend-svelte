// import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
import { expect } from 'chai';
import HeaderColumn from './HeaderColumn.svelte';

describe('<HeaderColumn>', () => {
  it('Renderiza a label corretamente', () => {
    const label = 'Teste label';
    // // expect(comp.getByText(label)).to.contains(label);
    const { getByText } = render(HeaderColumn, { label });
    const linkElement = getByText(label);
    expect(document.body.contains(linkElement));
    
  });
});
