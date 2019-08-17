import React from 'react'
import PageContainer from '../PageContainer/PageContainer';
import NavBar from '../../features/NavBar/NavBar';

const MainLayout = ({ children }) => (
  <div>
    <PageContainer>
      <NavBar />
      {children}
      {/*<Footer />*/}
    </PageContainer>
  </div>
);

export default MainLayout;
