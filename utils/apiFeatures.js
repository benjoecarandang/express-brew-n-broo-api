class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    //Filter
    // const queryObj = { ...req.query };
    // const excludedFields = ["page", "sort", "limit", "fields"];
    // excludedFields.forEach((item) => delete queryObj[item]);

    // //Advance Filtering
    // let queryStr = JSON.stringify(queryObj);
    // let query = Product.find(JSON.parse(queryStr));

    //Filter
    const queryObj = { ...this.queryString };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((item) => delete queryObj[item]);

    console.log('filter');

    //Advance Filtering
    let queryStr = JSON.stringify(queryObj);

    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }

  sort() {
    // if(req.query.sort) {
    //   const sort = req.query.sort.split(",").join(" ");
    //   query = query.sort(sort);
    // } else {
    //   query.sort('-createdAt');
    // }

    console.log('sort');

    if(this.queryString.sort) {
      const sort = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sort);
    } else {
      this.query = this.query.sort('-createdAt');
    }

    return this;
  }

  fields() {
    // if(req.query.fields) {
    //   const fields = req.query.fields.split(",").join(" ");
    //   query = query.select(fields);
    // } else {
    //   query = query.select('-__v');
    // }

    console.log('fields');

    if(this.queryString.fields) {
      const fields = this.queryString.fields.split(",").join(" ");
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select('-__v');
    }

    return this;
  }

  paginate() {
    // const page = +req.query.page;
    // const limit = +req.query.limit || 10;
    // const skip = (page - 1) * limit;

    // query = query.skip(skip).limit(limit);

    console.log('paginate');

    const page = +this.queryString.page || 1;
    const limit = +this.queryString.limit || 10;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}

module.exports = APIFeatures;
