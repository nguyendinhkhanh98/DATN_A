// Create an object composed of the picked object properties

const pick = (object, keys) => {
  return keys.reduce((obj, key) => {
    if(object && Object.prototype.hasOwnProperty.call(object, key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
};

module.exports = pick;

/* 
object = req.query(sortBy?column=name&type=desc)

object= {
  sortBy: {
    column
  }
}

object = req.query(sortBy?name=desc&role=asc)
req.query =>
object = {
  sortBy: {
    name: desc,
    role: asc,
  }
};

keys = ['sortBy', 'limit', 'page']

keys.reduce(obj, key); obj={};
options = {
  sortBy: {
    name: desc,
    role: asc,
  }
};
=> sortOption = [{name: desc}, {role: asc}]

const[key, order];  key = name; order = desc

=> sortingCriteria = [-name,role]

sort = sortingCriteria.join(' '); => '-name role'

filter = {
  name: khanh,
  role: 2
}


*/