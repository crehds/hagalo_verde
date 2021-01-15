import React from 'react';
import { DescriptionArticle } from '../DescriptionArticle';
import { ImageWrapper } from '../ImageWrapper';
import { TitleArticle } from '../TitleArticle';
import { Article as ArticleWrapper } from './styles';


export const Article = ({ ord, title, description, href, icon, text, imageSrc }) => {
  return (
    <ArticleWrapper>
      <TitleArticle ord={ord} title={title} />
      <DescriptionArticle
        description={description}
        href={href}
        icon={icon}
        text={text}
      />
      <ImageWrapper src={imageSrc} />
    </ArticleWrapper>
  );
};
