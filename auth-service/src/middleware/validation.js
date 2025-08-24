export function basicPresence(req, res, next) {
  if (!req.body) {
    return res.status(400).json({
      error: { code: "EMPTY_BODY", message: "Request body required" },
      timestamp: new Date().toISOString(),
    });
  }
  next();
}
