import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from '../../styles/components';
import ReviewsTable from './styled';

class Reviews extends Component {
 state = {
   reviews: [],
 }

 componentDidMount() {

 }

 render() {
   return (
     <Container>
       <Content>
         <ReviewsTable>
           <tr>
             <td>
                Id
             </td>
             <td>
                Shopify Domain
             </td>
             <td>
                App Slug
             </td>
             <td>
                Star Rating
             </td>
             <td>
                Previous Star Rating
             </td>
             <td>
                Last Update Date
             </td>
             <td>
                Created at
             </td>
             <td>
                Action
             </td>
           </tr>
           <thead />
           <tbody>
             {
               this.state.reviews.map(review => (
                 <tr>
                   <td>
                 teste 1
                   </td>
                   <td>
                 teste 1
                   </td>
                   <td>
                 teste 1
                   </td>
                   <td>
                 teste 1
                   </td>
                   <td>
                 teste 1
                   </td>
                   <td>
                 teste 1
                   </td>
                   <td>
                 teste 1
                   </td>
                   <td>
                     <button>
                     Add raiting
                     </button>
                   </td>
                 </tr>
               ))
             }

           </tbody>
         </ReviewsTable>
       </Content>
     </Container>
   );
 }
}


Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    shopifyDomain: PropTypes.string.isRequired,
    appSlug: PropTypes.string,
    starRating: PropTypes.number,
    previousStarRating: PropTypes.number,
    updatedAt: PropTypes.date,
    createdAt: PropTypes.date,

  })).isRequired,
};

export default Reviews;
