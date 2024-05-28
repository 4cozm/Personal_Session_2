import jwt from "jsonwebtoken";
import { prisma } from "../utils/prisma/index.js";

export default async function (req, res, next) {
  try {
    const { authorization } = req.cookies;
    if(!authorization){
        throw new Error("토큰이 존재하지 않습니다");
    }
    
    const [tokenType, token] = authorization.split(" "); //배열 구조분해 할당

    if (tokenType !== "Bearer")
      throw new Error("토큰 타입이 일치하지 않습니다");

    const decodedToken = jwt.verify(token, "비번"); //실패시 에러발생
    const userId = decodedToken.userId;

    const user = await prisma.Users.findFirst({
      where: {
        userId: +userId,
      },
    });
    
    if (!user) {
      throw new Error("토큰 사용자가 존재하지 않습니다");
    }

    req.user = user;
    next();

  } catch (error) {
    res.clearCookie("authorization"); //특정 쿠키 삭제
    switch (error.name) {
      case "TokenExpireError":
        res.status(401).json({ message: "토큰 만료" });
        break;
      case "JsonWebTokenError":
        res.status(401).json({ message: "토큰 인증 실패" });
        break;
      default:
        return res
          .status(401)
          .json({ message: error ?? "비 정상적인 요청" });
    }
  }
}
