const { ZodError } = require('zod');

const handleError = (error, res) => {
  // console.log("ERROR CAUGHT:", error);

  const isZodError = error instanceof ZodError;
  const isDuplicate = error.code === 'P2002';
  const isNotFound = error.code === 'P2025';

  const message =
    isZodError
      ? error.issues?.[0]?.message || "Invalid input"
      : isDuplicate
        ? "Duplicate entry (email or branch code already exists)"
        : isNotFound
          ? "Record not found"
          : "Something went wrong";

  const statusCode =
    isZodError ? 400
      : isDuplicate ? 409
        : isNotFound ? 404
          : 500;

  res.status(statusCode).json({ error: message });
};

module.exports = handleError;
