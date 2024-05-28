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
    return res.status(201).json({ data: result });
  } catch (error) {
    res
      .status(500)
      .json({ errorMessage: error.message + '////createItems에서 오류 발생' });
  }
};

export const reNewItem = async (req, res) => {
  try {
    const { originalItemCode, itemCode, itemName, itemStat } = req.body;
    //1.오리지날 아이템 코드를 기반으로 아이템을 찾는다.
    const targetItem = await prisma.items.findFirst({
      where: {
        itemCode: originalItemCode,
      },
    });
    if (!targetItem) {
      return res
        .status(401)
        .json({
          errorMessage: '해당하는 아이템 코드로 아이템을 찾을 수 없습니다',
        });
    }
    //2.수정하려는 아이템 이름이 이미 존재하는지 확인한다
    const nameExsist = await prisma.items.findFirst({
      where: {
        itemName: itemName,
      },
    });
    if (nameExsist) {
      return res
        .status(401)
        .json({
          errorMessage: '변경하려고 하는 이름의 아이템이 이미 존재합니다',
        });
    }
    //3.수정한다
    const { health, power } = itemStat;
    const result = await prisma.items.update({
      where: {
        itemCode: originalItemCode,
      },
      data: {
        itemName: itemName,
        itemCode: itemCode,
        health: health,
        power: power,
      },
    });
    return res.status(201).json({ data: result });
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};
