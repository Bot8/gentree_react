import tree from 'fixtures/gentree';
import detail from 'fixtures/personDetail';

class TreeService {
  loadTree = (callback) => {
    setTimeout(() => {
      callback(tree);
    }, 2000);
  };
  
  getDetail = (id, callback) => {
    setTimeout(() => {
      callback(detail);
    }, 2000);
  };
}

export const treeService = new TreeService();