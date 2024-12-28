# LegalMind Project

## 브랜치 관리 전략

### 주요 브랜치

- `main`: 프로덕션 배포용 안정 버전
- `dev`: 개발 통합 브랜치
- `stage`: 스테이징 환경 배포용

### 보조 브랜치

- `feature/*`: 새로운 기능 개발 (예: feature/auth, feature/search)
- `bugfix/*`: 버그 수정
- `hotfix/*`: 긴급 프로덕션 버그 수정

### 브랜치 작업 흐름

1. feature → dev: 기능 개발 완료
2. dev → stage: 통합 테스트
3. stage → main: 프로덕션 배포
