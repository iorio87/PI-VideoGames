import { MemoryRouter } from "react-router-dom";

describe('Formulario de creación de producto', () => {
    let createProduct;
    //let store = mockStore(state);
    beforeEach(() => {
       createProduct = mount(
          <Provider store={store}>
             <MemoryRouter initialEntries={['/detail']}>
                <CreateProduct />
             </MemoryRouter>
          </Provider>,
       );
    });

    it('Debe renderizar un formulario', () => {
       expect(createProduct.find('form').length).toBe(1);
    });
});