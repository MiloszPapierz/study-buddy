import React from 'react'
import styled from 'styled-components'
import Navigation from 'components/organisms/Navigation/Navigation'
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles'
import { SearchBar } from 'components/organisms/SearchBar/SearchBar'

const News = styled.div`
   grid-row: 1/3;
   grid-column: 3/3;
   border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
`

const MainTemplate = ({ children }) => {
   return (
      <Wrapper>
         <Navigation />
         <SearchBar />
         {children}
         <News>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
         </News>
      </Wrapper>
   )
}

export default MainTemplate
