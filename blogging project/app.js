var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require("./models/index")
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/author');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', usersRouter);
db.sequelize.sync({alter:true}).then(()=>{
  console.log("db synced");
}).catch((error)=>{
  console.log(`db conncetion failed due to some ${error}`);
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {s
  next(createError(404));
});

app.use(async(err,req,res,next)=>{
    const error = await err;
    console.log(error);
    res.status(500).send({sucess:false,message:"Internal server error"})
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in developments
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
