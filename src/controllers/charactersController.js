import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createCharacters = async (req, res) => {
  try {
    const { accountName, characterName, gender } = req.body;
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
          accountId: user.accountId, //계정 주인 & 관계설정
          characterName: characterName, //캐릭터 이름
          gender: gender.toUpperCase(),
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

export const deleteCharacter = async (req, res) => {
  try {
    //1.body에 전달받은 캐릭터 이름으로 삭제 진행
    const { characterName } = req.body;
    const character = await prisma.characters.findFirst({
      where: {
        characterName: characterName,
      },
    });
    if (!character) {
      return res
        .status(404)
        .json({ errorMessage: '캐릭터 이름을 찾을수 없습니다' });
    }

    //2.미들웨어에서 받아온 accountId를 기준으로 캐릭터 필드의 accountId가 동일한지 확인
    const user = req.user;
    if (user.accountId != character.accountId) {
      return res
        .status(401)
        .json({ errorMessage: '캐릭터가 본인의 소유가 아닙니다' });
    }
    //3.삭제 진행
    await prisma.characters.delete({
      where: {
        accountId: +user.accountId,
      },
    });
    return res.status(200).json({ message: '캐릭터 삭제 완료' });
  } catch (error) {
    return res.status(500).json({
      errorMessage: error.message + '////deleteCharacter에서 오류 발생',
    });
  }
};

export const searchCharacters = async (req, res) => {
  try {
    //1.body에서 캐릭터 이름을 받아온다 캐릭터가 존재하는지 확인한다
    const { characterName } = req.body;
    const character = await prisma.characters.findFirst({
      where: {
        characterName: characterName,
      },
    });
    if (!character) {
      return res
        .status(404)
        .json({ message: '존재하지 않는 캐릭터 이름입니다' });
    }
    //2.인증 미들웨어로 사용자의 계정에 포함된 캐릭터인지 확인한다
    const user = req.user;

    if (user.accountId == character.accountId) {
      //3.사용자 소유의 캐릭터일 경우
      return res.status(200).json({ data: character }); //모든 정보를 반환
    } else {
      //4.사용자 소유의 캐릭터가 아닐 경우
      const { characterName, power, health } = character;
      const characterInfo = {
        characterName: characterName,
        power: power,
        health: health,
      };
      return res.status(200).json({ data: characterInfo });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        errorMessage: error.message + '////searchCharacters에서 오류 발생',
      });
  }
};

async function charDupleTest(bodyCharacterName) {
  return prisma.characters.findFirst({
    where: {
      characterName: bodyCharacterName,
    },
  });
}
