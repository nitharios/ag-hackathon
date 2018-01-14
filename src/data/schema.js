/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
  GraphQLNonNull as NonNull,
  GraphQLString as StringType,
} from 'graphql';

import me from './queries/me';
import news from './queries/news';
import recall from './queries/recall';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      me,
      news,
      recall,
    },
  }),
  mutation: new ObjectType({
    name: 'CreateRecallMutation',
    fields: {
      name: { type: StringType },
      contactInfo: { type: StringType },
      dateTime: { type: StringType },
      recallReason: { type: StringType },
    },
  }),
});

export default schema;
