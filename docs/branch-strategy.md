# Git Branch Strategy

- **main**: 배포용 브랜치(항상 배포 가능한 상태 유지)
- **dev**: 통합 브랜치(main으로 병합 전, QA/테스트 진행)
- **feature/xxx**: 각 기능별로 생성. 완료 후 dev로 Pull Request

## Workflow
1. main에서 새 branch 따로 안 만듦 (main은 항상 안정적 상태 유지)
2. dev 브랜치로 feature 병합 → QA/테스트 완료 후 main에 병합
3. 버전 태그(tag) 후 main에서 배포