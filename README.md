## EC LAB

<p style="text-align: center;">
<img src="https://github.com/user-attachments/assets/1688df08-9769-4170-9ace-68f591a22b67" alt="EC LAB" />
</p>

```
react v18
next v14.2.7
```

## 개발 커맨드

```bash
yarn dev
```

## 디렉토리 구조

```
├── public/
│   ├── images/                - 에셋 폴더 (이미지, 동영상.. 등)
├── src/
│   ├── app/
│   ├── con/                   - 관리자용 페이지 컴포넌트
│   ├── stu/                   - 학생용 페이지 컴포넌트
│   ├── components/            - 전체적인 화면을 구성하는 범용 컴포넌트
│   ├── types/                 - API 데이터 등의 타입 정의
│   ├── helpers/               - 헬퍼 함수 (함수단위)
│   ├── lib/                   - 글로벌 레지스트리 구성
│   ├── hooks/                 - 커스텀 훅
```

## 반응형 적용 해상도 (가로 사이즈 기준)

### PC 및 태블릿

- 1920px ~ 1024px

### 모바일

- 375px ~ 1024px

## 개발 시 참고한 자료

### NextJS에서 styled-components 적용 예시

- https://nextjs.org/docs/app/building-your-application/styling/css-in-js#styled-components
