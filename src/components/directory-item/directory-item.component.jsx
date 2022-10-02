/* eslint-disable */
import React from 'react'
import { 
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.style';

import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({category}) => {
    const {imageUrl,title, route}= category;
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate(route);
    return (
      <>
           <DirectoryItemContainer onClick={onNavigateHandler}>
           <BackgroundImage imageUrl={imageUrl}/>
            <Body>
                  <h1>{title}</h1>
                  <p>Shop now</p>
            </Body>
        </DirectoryItemContainer>
      </>
    );
}

export default DirectoryItem;