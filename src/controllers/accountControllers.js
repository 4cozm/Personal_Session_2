import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const prisma = new PrismaClient();

export const createAccount = async (req, res) => {
  const { accountId, password, passwordCheck } = req.body;

  try {
    const existingaccountId = await prisma.accounts.findUnique({
      where: {
        accountId: accountId,
      },
    });
    if (existingaccountId) {
      throw new Error('이미 존재하는 계정입니다');
    }
    if (!vaildatePassword(password)) {
      throw new Error(
        '비밀번호 생성 조건이 잘못되었습니다. 6자리 이상, 숫자 ,영문 소문자 만 사용 가능합니다'
      );
    } else if (password !== passwordCheck) {
      throw new Error('비밀번호 확인이 올바르지 않습니다');
    }
  } catch (error) {
    res.status(400).json({ errorMessage: error.message });
    return;
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // 사용자가 입력한 password를 해싱하고 10자리 salt를 친다
    const newAccount = await prisma.accounts.create({
      data: {
        accountId,
        password: hashedPassword, //해싱된 password 사용
      },
      select: {
        accountId: true,
        createAt: true,
      },
    });

    res
      .status(201)
      .json({ message: '계정이 정상적으로 생성되었습니다.', newAccount });
  } catch (error) {
    res
      .status(500)
      .json({ errorMessage: '계정생성에 문제가 발생했습니다' + error.message });
  }
};

export const deleteAccount = async (req, res) => {
  const { accountId, password } = req.body;
  const user =await findAccount(accountId);

  try {
    const check =await checkPassword(user, password); //패스워드 체크
    if (check) {
      await prisma.accounts.delete({
        where: {
          accountId: accountId,
        },
      });
      return res.status(200).json({ message: '계정 삭제 완료' });
    } else {
      return res
        .status(403)
        .json({ errorMessage: '비밀번호가 올바르지 않습니다' });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: '계정 삭제 과정중 오류 발생'+error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { accountId, password } = req.body;
    const user =await findAccount(accountId);
    const check =await checkPassword(user, password);
    if (check) {
      const token = jwt.sign({ accountId }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });
      res.cookie('token', token, {
        httpOnly: true,
      });
      res.status(200).json({ messgae: '로그인 성공 인증토큰 발행 완료' });
    } else {
      res.status(403).json({ errorMessage: '비밀번호가 올바르지 않습니다' });
    }
  } catch {
    res.status(500).json({ errorMessage: '로그인 중 문제 발생' });
  }
};

function vaildatePassword(password) {
  //비밀번호 유효성 검사
  //비밀번호는 6자리 이상,숫자 or 영어 소문자만 사용가능
  const condition = /^(?=.*[0-9a-z])[a-z0-9]{6,}$/;
  return condition.test(password);
}

async function findAccount(accountId) {
  try {
    const user = await prisma.accounts.findUnique({
      where: {
        accountId: accountId,
      },
    });
    if (!user) throw new Error('해당 아이디로 가입된 계정을 찾을 수 없습니다');
    return user;
  } catch (error) {
    throw new Error(error.message); // 계정 검색오류를 상위 함수로 다시 던집니다.
  }
}

async function checkPassword(user, password) {
  if (!password) {
    throw new Error('비밀번호를 입력하지 않았습니다');
  }
  try {
    // 주어진 비밀번호와 사용자의 해시된 비밀번호를 비교
    return await bcrypt.compare(password, user.password);
  } catch (error) {
    throw new Error(error.message); // 비밀번호 오류를 상위 함수로 다시 던집니다.
  }
}
