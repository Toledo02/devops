const { Router } = require('express');

const router = Router();

// GET /health -> { status: "ok", timestamp: "..." }
router.get('/', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;
