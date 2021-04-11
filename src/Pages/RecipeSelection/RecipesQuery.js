import React from 'react';
import { getRoasts } from '../../components/RequestHandler/RequestHandler';

const RecipesQuery = async () => {
  const RoastQuery = await getRoasts();
  console.log(RoastQuery);
};

export default RecipesQuery;
