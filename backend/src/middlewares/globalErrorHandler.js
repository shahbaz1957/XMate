
const globalError= (
err,
req,
res
) => {
  const statuCode = err.statusCode || 500;
  return res.status(statuCode).json({
    message: err.message,
    errorStack: process.env.ENVIRONEMENT === "development" ? err.stack : "",
  });
};


export default globalError;