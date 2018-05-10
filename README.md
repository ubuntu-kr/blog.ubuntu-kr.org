# blog

Ubuntu Korea Community Blog

## 포스팅 하기

`_posts`아래에 다음과 같은 이름규칙으로 파일을 생성합니다.
제목은 가능한 영어로 작성합니다.

```
YYY-MM-DD-포스트-타이틀.md
```

다음과 같이 작성자 정보를 [YAML front matter](http://assemble.io/docs/YAML-front-matter.html)로 넣어줍니다.
작성 규칙은 다음과 같습니다.

```
---
layout: post
date: YYYY-MM-DD
title: "포스트 타이틀"
tags: 상단에 들어갈 태그
authors:
    - name: 작성자 이름
      bio: 작성자 소속
      email: 작성자 이메일
      launchpad: 작성자 launchpad 닉네임
      github: 작성자 github 닉네임
      profile: 작성자 대표 사진
image: 포스트 대표 이미지
---
```

* tags: `#태그`의 형식으로 제목 하단에 작성됩니다.
* launchpad 및 github: 닉네임만 입력하시면 해당 프로필 페이지로 링크 됩니다.

내용은 YAML front matter 바로 하단부터 쓰시면 되며, Github 마크다운 문법과 동일하게 작동합니다.
