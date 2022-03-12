const path = require('path');

exports.homePage = (req, res) => {
  const pathFile = path.join(__dirname, '../views/index.html');
  res.sendFile(pathFile);
};

exports.sayHello = (req, res) => {
  res.json({ greeting: 'hello API' });
};

exports.getDates = (req, res) => {
  const dateSent = req.params.date;
  const invalid = 'Invalid Date';

  if (!dateSent) {
    res.json(
      {
        unix: new Date().getTime(),
        utc: new Date().toUTCString(),
      },
    );
  }

  if (new Date(dateSent) == invalid && new Date(+dateSent) == invalid) {
    res.json({ error: 'Invalid Date' });
  }

  const finalReturn = new Date(dateSent) == invalid ? new Date(+dateSent) : new Date(dateSent);

  res.json({
    unix: finalReturn.getTime(),
    utc: finalReturn.toUTCString(),
  });
};
