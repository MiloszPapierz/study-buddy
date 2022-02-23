import { Button } from 'components/atoms/Button/Button'
import React, { useState, useEffect } from 'react'
import { Wrapper, NewsSectionHeader, ArticleWrapper, TitleWrapper, ContentWrapper } from 'components/templates/NewsSection/NewsSection.styles'
import axios from 'axios'

const NewsSection = () => {
   const [articles, setArticles] = useState([])
   const [error, setError] = useState('')

   useEffect(() => {
      axios
         .post(
            'https://graphql.datocms.com/',
            {
               query: `{
         allArticles{
           title
           category
           content
           image{
             url
           }
         }
       }`,
            },
            {
               headers: {
                  authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
               },
            },
         )
         .then(({ data: { data } }) => {
            setArticles(data.allArticles)
         })
         .catch((err) => {
            setError("Sorry, we couldn't load articles for you")
         })
   }, [])

   return (
      <Wrapper>
         <NewsSectionHeader>University news feed</NewsSectionHeader>
         {articles.length > 0 ? (
            articles.map(({ title, category, content, image = null }) => (
               <ArticleWrapper key={title}>
                  <TitleWrapper>
                     <h3>{title}</h3>
                     <p>{category}</p>
                  </TitleWrapper>
                  <ContentWrapper>
                     <p>{content}</p>
                     {image ? <img src={image.url} alt="article image" /> : null}
                  </ContentWrapper>
                  <Button isBig>Read more</Button>
               </ArticleWrapper>
            ))
         ) : (
            <NewsSectionHeader>{error ? error : 'Loading...'}</NewsSectionHeader>
         )}
      </Wrapper>
   )
}

export default NewsSection
