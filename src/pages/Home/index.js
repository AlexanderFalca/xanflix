import React from 'react';
import Styled from 'styled-components';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

const AppWrapper = Styled.div`
  background: var(--grayDark);
`;

function Home() {
  return (
    <AppWrapper>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={
<<<<<<< HEAD
          'Waterford is the perfect destination to enjoy the outdoors as it’s located in the sunny southeast and has a diverse and beautiful landscape of coastline, beaches, mountains, rivers, and woodland.'
=======
          'O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!'
>>>>>>> 7bc6f9b3770ebe459239b4bc62a2a7670773471b
        }
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Carousel category={dadosIniciais.categorias[1]} />

      <Carousel category={dadosIniciais.categorias[2]} />

      <Carousel category={dadosIniciais.categorias[3]} />

      <Carousel category={dadosIniciais.categorias[4]} />

<<<<<<< HEAD
=======
      <Carousel category={dadosIniciais.categorias[5]} />
>>>>>>> 7bc6f9b3770ebe459239b4bc62a2a7670773471b

      <Footer />
    </AppWrapper>
  );
}

export default Home;
