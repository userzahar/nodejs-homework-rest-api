const { httpError } = require("../helpers");
const Jimp = require("jimp");
const resizeAvatar = async (req, res, next) => {
  try {
    const { file } = req;

    if (!file) {
      return next(httpError(404));
    }
    const avatar = await Jimp.read(file.path);
    await avatar
      .autocrop()
      .cover(
        250,
        250,
        Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE
      )
      .writeAsync(file.path);
    next();
  } catch (error) {
    next(httpError(404));
  }
};

module.exports = resizeAvatar;
