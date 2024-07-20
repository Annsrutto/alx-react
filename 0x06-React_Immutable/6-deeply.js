import { fromJS } from 'immutable';

export const mergeDeeplyElements = (page1, page2) => fromJS(page1).mergeDeeply(fromJS(page2));
