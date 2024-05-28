import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createCharacters = async (req, res) => {
  try {
    const { accountName, characterName,gender } = req.body;
    //1. body에 전달해준 accountName과 미들웨어를 거친 user.accountName을 비교
    const user = req.user; //미들웨어를 거쳐 나온 user 정보
    if (user.accountName != accountName) {
      throw new Error('전달한 계정과 인증토큰이 일치하지 않습니다');
    }
    //2. 캐릭터 이름이 중복되었는지 확인
    if (!charDupleTest(characterName)) {
      throw new Error('캐릭터 이름이 이미 존재합니다');
    } else {
      const newCharacter = await prisma.characters.create({
        data: {
          accountId:user.accountId,//계정 주인 & 관계설정
          characterName: characterName,//캐릭터 이름
          gender:gender.toUpperCase(),
        },
      });
    //3.캐릭터 등록후 그 정보를 기반으로 인벤토리 자동 생성
      await prisma.inventory.create({
        data: {
          CharacterId: newCharacter.characterId,
        },
      });
    }

    res
      .status(201)
      .json({ message: '캐릭터가 성공적으로 생성되었습니다' + characterName });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

async function charDupleTest(bodyCharacterName) {
  return prisma.characters.findFirst({
    where: {
      characterName: bodyCharacterName,
    },
  });
}
