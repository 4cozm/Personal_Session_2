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
    const {health,power} = itemStat; //스텟에서 필드 추출
    const extractStat = {health,power}; // 추출한 필드를 다시 객체 변환
    const result = await prisma.items.create({
      data: {
        itemCode: +itemCode,
        itemName: itemName,
        itemStat: extractStat,
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
      return res.status(401).json({
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
      return res.status(401).json({
        errorMessage: '변경하려고 하는 이름의 아이템이 이미 존재합니다',
      });
    }
    //3.수정한다
    const { health, power } = itemStat;
    const extractStat = {health,power};
    const result = await prisma.items.update({
      where: {
        itemCode: originalItemCode,
      },
      data: {
        itemName: itemName,
        itemCode: itemCode,
        itemStat: extractStat
      },
    });
    return res.status(201).json({ data: result });
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};

export const searchItems = async (req, res) => {
  //1.모든 아이템의 코드,이름,가격
  const result = await prisma.items.findMany({
    select: {
      itemId: true,
      itemCode: true,
      itemName: true,
      itemPrice: true,
    },
  });
  return res.status(200).json({ data: result });
};

export const searchOneItem = async (req, res) => {
  try {
    const itemID = parseInt(req.params.id);
    const result = await prisma.items.findFirst({
      where: {
        itemCode: +itemID,
      },
      select: {
        itemCode: true,
        itemName: true,
        itemStat: true,
        itemPrice: true,
      },
    });
    if (!result) {
      return res
        .status(401)
        .json({ message: '해당 코드의 아이템이 존재하지 않습니다' });
    }
    return res.status(200).json({ data: result });
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};
