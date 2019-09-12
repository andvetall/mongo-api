import * as jwt from "jwt-then";
import config from "../config/config";

const verifyToken = async (req, res, next): Promise<any> => {
  const token: string = req.headers.authorization;

  if (!token) {
    return res.status(403).send({
      auth: false,
      message: "No token provided."
    });
  }

  try {
    const decoded = await jwt.verify(token, config.JWT_ENCRYPTION);
    req.email = (<any>decoded).email;
    next();
  } catch (err) {
    res.status(500).send({
      auth: false,
      message: err
    });

  }
};

export default verifyToken;
