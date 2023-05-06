const movieModel = require("../Model/movieModel");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");

// Create Movie
const createMovie = catchAsyncErrors(async (req, res, next) => {
  
  const movie = await movieModel.create(req.body);
  //   const new_movie = await movie.save();
  res.status(201).json({ success: true, movie });
});

//get All Movies
const getAllMovies = catchAsyncErrors(async (req, res, next) => {
  const { q,sort, page, limit } = req.query;

  // Create an empty filter object
  let filterObj = {};

  // If the 'q' query parameter is present, add search criteria to the filter object
  if (q ) {
    const regex = new RegExp(q, "i");
    filterObj = {
      $or: [
        { title: { $regex: regex } },
        { director: { $regex: regex } },
        // { year: { $eq: parseInt(q) } },
        { genre: { $regex: regex } },
      ],
    };
  }

  // Create a sort object based on the 'sort' query parameter
  let sortObj = {};
  if (sort) {
    const fields = sort.split(",");
    fields.forEach((field) => {
      let sortOrder = 1;
      if (field.startsWith("-")) {
        sortOrder = -1;
        field = field.substring(1);
      }
      sortObj[field] = sortOrder;
    });
  } else {
    sortObj = { _id: -1 };
  }

  // Query the database using the filter and sort criteria
  const movies = await movieModel
    .find(filterObj)
    .sort(sortObj)
    .skip((page - 1) * limit)
    .limit(limit);

  // Get the total count of movies based on the filter criteria
  const movieCount = await movieModel.countDocuments();

  res.status(201).json({ success: true, movies, movieCount });
});

//single Movie detail
const singleMovie = catchAsyncErrors(async (req, res, next) => {
  const movieID = req.params.id;
  const movie = await movieModel.findById(movieID);
  if (!movie) {
    return next(ErrorHandler("Movie Not Found", 500));
  }
  const movies = await movieModel.findById(movieID);

  res.status(200).json({
    success: true,
    movies,
  });
});

//update movie
const updateMovie = catchAsyncErrors(async (req, res) => {
  const movieID = req.params.id;
    
  const movie = await movieModel.findById(movieID);
  if (!movie) {
    return next(ErrorHandler("Movie Not Found", 500));
  }
  const movies = await movieModel.findByIdAndUpdate(movieID, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    movies,
  });
});

//Delete product
const deleteMovie = catchAsyncErrors(async (req, res) => {
  const movieID = req.params.id;
  const movie = await movieModel.findById(movieID);
  if (!movie) {
    return next(ErrorHandler("Movie Not Found", 500));
    
  }
  await movieModel.findByIdAndDelete(movieID);

  res.status(200).json({
    success: true,
    message: "Movie has been deleted sucessfully",
  });
});

module.exports = {
  getAllMovies,
  singleMovie,
  createMovie,
  updateMovie,
  deleteMovie,
};
