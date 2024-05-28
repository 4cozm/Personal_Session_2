import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createItems = async (req, res) => {
  try {
    const { itemCode, itemName, itemStat, itemPrice } = req.body;
    //1.아이템 이름이 이미 존재하는지 확인
    const nameExsist = await prisma.items.findFirst({
      where: {
        itemName: itemName,
      },
    });
    if (nameExsist) {
      return res
        .status(401)
        .json({ message: '이미 존재하는 아이템 이름입니다' });
    }
    const codeExsist = await prisma.items.findFirst({
      where: {
        itemCode: +itemCode,
      },
    });
    if (codeExsist) {
      return res
        .status(401)
        .json({ message: '이미 존재하는 아이템 코드입니다' });
    }
    //2.등록
    const { power, health } = itemStat;
    const result = await prisma.items.create({
      data: {
        itemCode: +itemCode,
        itemName: itemName,
        power: power,
        health: health,
        itemPrice: itemPrice,
      },
    });
    return res.status(201).json({data:result});
  } catch (error) {
    res
      .status(500)
      .json({ errorMessage: error.message + '////createItems에서 오류 발생' });
  }
};
