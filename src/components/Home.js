import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import ProductSmokingHero from './modules/views/ProductSmokingHero';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import ProductHowItWorks from './modules/views/ProductHowItWorks';
import ProductCTA from './modules/views/ProductCTA';
import AppAppBar from './modules/views/AppAppBar';
import ComplexButtons from './modules/views/ComplexButtons';
import Buttons from './modules/views/Buttons';

function Index() {
  return (
    <React.Fragment>
      {/* 
      
      <ProductValues />
      <ProductHero />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter /> */}
      <AppAppBar />
      <Buttons/>
      <ComplexButtons/>
    </React.Fragment>
  );
}

export default withRoot(Index);
