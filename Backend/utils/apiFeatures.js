const search = (query, queryStr) => {
  let searchKeyword = {};
  if (queryStr.q) {
    const regex = new RegExp(queryStr.q, "i");
    searchKeyword = {
      $or: [
        { title: { $regex: regex } },
        { director: { $regex: regex } },
        // { year: { $eq: parseInt(queryStr.q) } },
        { genre: { $regex: regex } },
      ],
    };
  }
  query = query.find(searchKeyword);

  return query;
};

//filter
const filter = (query, queryStr) => {
  const filters = {
    title: queryStr.title,
    director: queryStr.director,
    year: queryStr.year,
    genre: queryStr.genre,
  };

  // Remove undefined filters
  Object.keys(filters).forEach(
    (key) => filters[key] === undefined && delete filters[key]
  );

  // Apply filters to query
  query = query.find(filters);

  return query;
};

//new sort function
const sort = (query, queryStr) => {
  if (queryStr.sort) {
    // Parse the sort query string and split it into fields
    const sortFields = queryStr.sort.split(",");

    // Construct the sort object
    const sortObj = {};
    sortFields.forEach((field) => {
      const sortOrder = field.startsWith("-") ? -1 : 1;
      const fieldName = sortOrder === -1 ? field.slice(1) : field;

      // Check if the field is valid for sorting
      if (["title", "director", "genre", "year"].includes(fieldName)) {
        sortObj[fieldName] = sortOrder;
      }
    });

    // Apply the sort object to the query
    query = query.sort(sortObj);
  } else {
    // Default sort order by title, ascending
    query = query.sort({ title: 1 });
  }

  return query;
};

const paginate = (query, queryStr, resultPerPage) => {
  const currentPage = Number(queryStr.page) || 1;
  const skip = resultPerPage * (currentPage - 1);
  query = query.limit(resultPerPage).skip(skip);
  return query;
};

module.exports = {
  search,
  filter,
  sort,
  paginate,
};
