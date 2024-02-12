import React from "react";
import { BookstoreServiceConsumer } from "../bookstore-servise-context";
import BookstoreService from "../../services/bookstore-services";

const withBookstoreService = () => (Wrapped) => {

   return (props) => {

   return (
      <BookstoreServiceConsumer>
         {
            (bookstoreService) => {
               return ( <Wrapped {...props} 
               bookstoreService={bookstoreService}/> )
            }
         }
      </BookstoreServiceConsumer>
   )
   }
}

export default withBookstoreService;