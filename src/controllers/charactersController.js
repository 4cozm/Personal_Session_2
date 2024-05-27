import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createCharacters =async (req, res) => {
  try {
    const { accountName, characterName } = req.body;
    const cookie = req.headers.authorization.split(' ')[1];
    const verifty = jwt.verify(cookie, process.env.JWT_SECRET);
    if (verifty) {
      if (!charDupleTest(characterName)) {
        throw new Error('캐릭터 이름이 이미 존재합니다');
      } else {
        const newCharacter = await prisma.characters.create({
          data: {
            name: characterName,
          },
        });
        await prisma.inventory.create({
          data: {
            CharacterId: newCharacter.characterId,
          },
        });
      }
    }
    res.status(201).json({message:"캐릭터가 성공적으로 생성되었습니다" + characterName})
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

async function charDupleTest(characterName) {
  return prisma.characters.findUnique({
    where: {
      name: characterName,
    },
  });
}
