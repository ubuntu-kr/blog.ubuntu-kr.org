---
title: "블로그에 기고하기"
---
우분투한국커뮤니티 운영진이시거나, 우분투한국커뮤니티에서 활동 하시는 분이시라면, 누구든지 이 블로그에 글을 기고할 수 있습니다.

# 운영진
GitHub 의 [`ubuntu-kr`](https://github.com/ubuntu-kr) 조직 구성원이 되어야 합니다. 이후, 블로그 소스코드가 있는 저장소인 [`ubuntu-kr/blog.ubuntu-kr.org`](https://github.com/ubuntu-kr/blog.ubuntu-kr.org) 저장소에 대한 읽기 및 쓰기 권한을 받아야 합니다. 권한이 없는 경우, 권한이 있는 다른 운영진 분들께 요청 하시기 바랍니다.

권한을 모두 얻은 후, [`ubuntu-kr/blog.ubuntu-kr.org`](https://github.com/ubuntu-kr/blog.ubuntu-kr.org) 저장소를 로컬에 복제 하고, [`README.md`](https://github.com/ubuntu-kr/blog.ubuntu-kr.org/blob/main/README.md) 에 나와 있는 안내에 따라 새 글을 생성 하고 작성합니다. 되도록 글 작성을 위한 별도 브랜치를 생성하여 글 작성을 하시길 권장 드립니다. 

운영진은 별도 검토 절차가 없습니다. 작성이 완료 되어 게시 하려면, 게시물 파일을 `main` 브랜치에 커밋하고, 원격 저장소에 푸시 합니다. 보통 GitHub Actions 를 통한 게시 절차를 통해 5~10분 내로 게시가 완료 되어 블로그에서 확인 하실 수 있습니다.

# 운영진이 아닌 경우
블로그 저장소 ([`ubuntu-kr/blog.ubuntu-kr.org`](https://github.com/ubuntu-kr/blog.ubuntu-kr.org)) 를 포크(Fork) 하고, 포크 한 저장소를 로컬에 복제 합니다. 이후, [`README.md`](https://github.com/ubuntu-kr/blog.ubuntu-kr.org/blob/main/README.md) 에 나와 있는 안내에 따라 새 글을 생성 하고 작성합니다.

작성이 완료 되었다면, 게시물 파일을 `main` 브랜치에 커밋하고, 원격 저장소(포크된 저장소)에 푸시 합니다. 이후 [Pull Request](https://github.com/ubuntu-kr/blog.ubuntu-kr.org/compare) 를 제출하여, 검토 및 게시를 요청합니다. 그러면 운영진이 확인 및 검토 후, 이상이 없다면 Pull Request 요청을 수락하여 기고하신 글을 게시 합니다.

# Git/GitHub 사용이 어려우신 경우
글 원고를 작성 하셔서 본인의 프로필 정보(이름, 프로필 사진, 이메일 주소 등)와 함께 [이메일로 발송해 주세요.](mailto:contact@ubuntu-kr.org)

# 글 작성 시 주의사항
- 우분투 또는 우분투한국커뮤니티 활동에 관련된 내용으로 작성해 주세요. 우분투 및 우분투한국커뮤니티와 관련이 전혀 없는 글을 기고가 거절되거나 삭제될 수 있습니다.
- 글 내용이 [우분투 행동 강령(Ubuntu Code of Conduct)](https://ubuntu.com/community/code-of-conduct)를 위반하면 안 됩니다.
- 작성이 완료되지 않은 글을 `main` 브랜치에 커밋 및 푸시하여 게시하지 않도록 합니다. 운영진 분들의 경우 글 작성 시, 별도의 브랜치에서 글 작성을 권장 드립니다.
- 서비스/사업/제품 등을 노골적으로 홍보하거나 판촉하는 글은 게시할 수 없습니다.