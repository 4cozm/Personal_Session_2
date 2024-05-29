```
Personal_Session_2/                  # root
├── prisma/                          # Prisma 관련 파일들
│   └── schema.prisma               # Prisma 스키마 파일
├── src/                             # 소스 코드
│   ├── controllers/                 # 컨트롤러들
│   │   ├── accountControllers.js    # 계정 컨트롤러
│   │   ├── charactersController.js # 캐릭터 컨트롤러
│   │   └── itemControllers.js      # 아이템 컨트롤러
│   ├── middleware/                  # 미들웨어
│   │   ├── auth.middleware.js      # 인증 미들웨어
│   │   └── log.middleware.js       # 로깅 미들웨어
│   ├── routers/                     # 라우터들
│   │   ├── account.js              # 계정 라우터
│   │   ├── characters.js           # 캐릭터 라우터
│   │   └── items.js                # 아이템 라우터
│   └── utils/                       # 유틸리티들
│       └── prisma/                  # Prisma 관련 유틸리티
│           └── index.js             # Prisma 인덱스 파일
├── app.js                           # 애플리케이션 진입점 파일
├── .gitattributes                   # Git 속성 파일
├── .gitignore                       # Git 무시 파일
├── .prettierrc                      # Prettier 설정 파일
├── README.md                        # 프로젝트 README 파일
├── package-lock.json                # npm 패키지 락 파일
└── package.json                     # npm 패키지 파일
```
데이터베이스 구조
![Untitled](https://github.com/4cozm/Personal_Session_2/assets/49065386/c48310bf-b8e2-44f2-be98-6089e9b449d5)

## API 명세서

### 계정 관련

| 요청 방법 | 엔드포인트     | 입력값                                          | 출력값                               |
|----------|---------------|-------------------------------------------------|-------------------------------------|
| POST     | `/api/account`| ```json {"accountName": "hohoMadame", "password": "a123456", "passwordCheck": "a123456"}``` | ```json {"data": {"accountName": "hohoMadame"}}``` |
| DELETE   | `/api/account`| ```json {"accountId": "hohoMadame", "password": "a123456"}``` | ```json {"message": "계정 삭제 완료"}``` |
| GET      | `/api/account`| ```json {"accountId": "hohoMadame", "password": "a123456"}``` | ```json {"message": "로그인 성공, 인증토큰 발행 완료"}``` |

### 캐릭터 관련

| 요청 방법 | 엔드포인트       | 입력값                                                    | 출력값                                                 |
|----------|-----------------|-----------------------------------------------------------|-------------------------------------------------------|
| POST     | `/api/character`| ```json {"accountName": "hohoMadame", "characterName": "hohoAZE", "gender": "male"}``` | ```json {"message": "캐릭터가 성공적으로 생성되었습니다hohoAZE"}``` |
| GET      | `/api/character`| ```json {"characterName": "hohoAZE"}```                   | ```json {"data": {"characterId": 2, "characterName": "hohoAZE", "gender": "MALE", "power": 100, "health": 500, "accountId": 3}}``` |
| DELETE   | `/api/character`| ```json {"characterName": "hohoAZE"}```                   | ```json {"message": "캐릭터 삭제 완료"}```             |

### 아이템 관련

| 요청 방법 | 엔드포인트   | 입력값                                                                                               | 출력값                                                                                           |
|----------|-------------|------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| POST     | `/api/item` | ```json {"itemCode": 3, "itemName": "파멸의 조끼4", "itemStat": {"health": 20, "power": 2}, "itemPrice": 500}``` | ```json {"data": {"itemId": 3, "itemCode": 3, "itemName": "파멸의 조끼4", "itemStat": {"power": 2, "health": 20}, "itemPrice": 500, "inventoryId": null, "EquipId": null}}``` |
| PATCH    | `/api/item` | ```json {"originalItemCode":5, "itemcode":10, "itemName":"파멸의 반지 리뉴얼", "itemStat":{"health": 100, "power": 100}}``` | ```json {"data": {"itemId": 1, "itemCode": 5, "itemName": "파멸의 반지 리뉴얼", "itemStat": {"power": 100, "health": 100}, "itemPrice": 500, "inventoryId": null, "EquipId": null}}``` |
| GET      | `/api/item` | ```json {}```                                                                                       | ```json {"data": [{"itemId": 1, "itemCode": 5, "itemName": "파멸의 반지 리뉴얼", "itemPrice": 500}, {"itemId": 2, "itemCode": 1, "itemName": "파멸의 조끼", "itemPrice": 500}, {"itemId": 3, "itemCode": 3, "itemName": "파멸의 조끼4", "itemPrice": 500}]}``` |
| GET      | `/api/item/:id` | ```json {}```                                                                                   | ```json {"data": {"itemCode": 3, "itemName": "파멸의 조끼4", "itemStat": {"power": 2, "health": 20}, "itemPrice": 500}}``` |
