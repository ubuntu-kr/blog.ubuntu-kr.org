---
layout: post
date: 2018-05-19
title: "[Hanjp-IM 프로젝트] GNOME Korea 와의 조인트 모임 후기"
tags: project input-method hanjp gnome-kr report
authors:
    - name: 한영빈
      bio: 우분투한국커뮤니티 대표(2017~2018) / Hanjp-IM 프로젝트 참여자
      email: sukso96100@gmail.com
      launchpad: sukso96100
      github: sukso96100
      profile: https://avatars2.githubusercontent.com/u/1916739?s=460&v=4
image: https://lh3.googleusercontent.com/UJZIXgrrEvHqfcVlVf85ad9jVagf7Ov4t9NpaALj6LY4J8YZtet3QuN7BZ4FKk5-qXe80p1wWHTLS0kxMyBYfL9AUhCqoBU56kVQc-6PepA3D2caC3YQvhONjPButyCZf-xDObzKJLKS2BqPb2Nx6h14vB0XhCuQ2Y39bwsKO59kxXqNaCypb8wNZW2UlI0FhLqK2IsTrP-wL8vKDIAHgZCVvfv2GQqcc54gVKpEy8KRyizV3Xdp2mr3feO-xRvHPwOOAlrNfYcMMSIMJH5OyzE_YmxntsadCp3-8rPkqsARIHtAq2C_oLxPWXnb9vjYQgXx7xYUv6cHtZ3eoHG1_3dHpOJK1Y3HEF_eztX5ZKbc04yXUljlUKUZ1nMk4ajDqxQzT1qcbuPAXEP-7hzxKv01xDCwCWc_9vhUagnOP4k6euw8TrP227hZ3VWLNDgDuYhxaeQNsFF5aoyV4dfDEwShTWe0bz3lsfGjzsytddhxe69u5jBejahaDI-YUsx3cH2tBpKxfYD2_m4mbrGSa_09bHVJT4aEX125Pl97pIrIOYQaUfYTMzamcf-k483e-H-E87IQ6qqXcZBISL-o3qvybpUPRe8BS04RfVbw-kJQRnuj0WJdn53rC0IVPO9EHlSuuYCtxEDFkBdldf0PztKcsX84okdt=w1280-h960-no
---

오늘(2018.05.19) 우분투한국커뮤니티의 Hanjp-IM 프로젝트 팀은, GNOME Korea 와 함께 공동으로 조인트 모임을 진행 하였습니다.
이번 조인트 모임은, 지난 4월 26일 서울에서 열린 우분투 18.04 릴리스 파티에 참석하셨던 GNOME Korea 의 조성호님의 제안으로 마련되었습니다.
당시 Hanjp-IM 프로젝트를 이끄시는 김광연님의 프로젝트 중간 발표를 보시고 프로젝트가 잘 진행되도록 돕고 싶으셔서 제안 하셨습니다.
아무래도 구성원 모두가 입력기 개발을 처음 해 보는 상황이라 프로젝트 진행에 어려움을 많이 겪는 시점에서, iBus 쪽에 기여를 해 보신 분들이 GNOME Korea에 계신다 하셔서 조인트 모임을 하면 큰 도움을 받을 수 있을 것 같아 제안을 수락하게 되었습니다.

모임은 아남타워 7층에 위치한 공개SW개발자센터에서 진행되었습니다.

## 1. 한글 입력 처리 과정 요약
먼저 GNOME Korea 의 조성호 님께서 한글 입력 처리 과정에 대해 소개해 주셨습니다. 한글 입력 처리에 널리 쓰이는 libhangul, 리눅스 환경에서 표준처럼 쓰이는 iBus, ibus 와 libhangul 로 구현한 ibus-hangul 에 대해 소개해 주시고 각 프로그램의 구조와 동작방식, 동작 관계에 대해 상태 전이도 등을 간단히 보여주시면서 설명해 주셨습니다.

## 2. 리눅스 데스크톱의 한국어 입력 개요
다음으로는 GNOME Korea 의 류창우 님께서 리눅스 데스크톱에서 한국어 입력이 어떤 과정을 통해 처리 되는지에 대해 설명해 주셨습니다. 또한 입력 처리 시나리오 그림을 몇가지 보여주시면서, 우리가 많이 겪는 한글 끝글자 버그 등의 문제는 단순히 입력기 만의 문제가 아니며, 입력 처리에 관여하는 다양한 소프트웨어도 연관된 복합적인 문제라는 점을 강조하셨습니다. 요즘 언어 입력 처리는 X.org 뿐만 아니라 최근 많은 리눅스 데스크톱에서 기본으로 쓰이는 추세인 Wayland 도 고려해야 하는데, Wayland 에서 자체적으로 입력 처리를 하는 함수도 몇가지 소개해 주셨습니다.

## 3. Hanjp-IM 프로젝트 소개
프로젝트를 이끄시는 김광연 님께서, libhangul 과 비슷한 방식으로 입력 처리를 지원하는 라이브러리인 libhanjp 의 소스코드를 보여 주시면서 Hanjp-IM 프로젝트에 대해 간단히 소개해 주셨습니다. 한글 입력을 통해 최종적으로 일본어 문자 입력을 처리하기 위해, libhangul 을 libhanjp 에서 어떤 방식으로 활용하는지 등에 대해서도 설명해 주셨습니다. 그 외 프로젝트를 하면서 막히는 부분에 대한 논의도 이뤄졌고, 빌드를 할떄 어떤 옵션을 줘야 하는지, 예제 코드와 libhanjp 에서 오류가 나는 부분도 찾고 해결할 방안에 대해서도 논의 하였습니다. 문관경님과 류창우 님께서 libhanjp 테스트를 위한 예제 코드 작성, 컴파일을 위한 Makefile 작성과 gcc 빌드 옵션, gdb 를 이용한 디버깅에 있어 많은 도움을 주셨습니다.

## 4. jhbuild를 활용한 그놈 개발 환경 구축, 빌드, 테스트, 이슈등록
GNOME Korea 의 문관경 님께서 그놈 개발 환경 구축과, 빌드, 테스트 이슈 등록 방법 등에 대해 소개해 주시고, 그놈 개발에서 진입 장벽이 비교적 낮은 Gjs(JavaScript) 개발을 할떄 많이 사용되는 looking glass 에 대해서 소개해 주셨습니다. looking glass 를 이용하여 그뇸 셸의 컴포넌트를 inspect 하는 방법과 그놈 확장 기능 디버깅 방법 등에 대해서 간단한 시연을 통해 보여주셨습니다.

이번 GNOME Korea 와의 조인트 모임을 통해 Hanjp-IM 프로젝트가 많은 도움을 받았고, 또 앞으로 프로젝트를 어떤 방향으로 진행하야 하는지에 대해 많은 생각을 해 볼수 있는 좋은 기회였던 것 같습니다. 특히 컴파일이나 디버깅 쪽에 대한 도움과 조언이 앞으로 프로젝트를 진행하는데 많은 도움이 될 듯 합니다.
프로젝트 모임을 계속 지속적으로 가지다 보니, 이번 모임이 어느세 20회차 모임이 되었습니다. 지금까지도 이렇게 꾸준히 모여 진행한 만큼, 앞으로도 계속 진행하면 좋은 성과가 나올 것 같습니다.

## 참고 링크
- [한글 입력 처리 과정 요약 (슬라이드 자료)](https://www.slideshare.net/gnomekr/20180519-hangul-processing)
- [리눅스 데스크톱의 한글 입력 개요 (슬라이드 자료)](https://www.slideshare.net/gnomekr/korean-input-overview-in-the-linux-desktop)
- [그놈 셸 개발환경 설정과 디버깅 팁 (문관경 님 Google Docs 문서)](https://docs.google.com/document/d/1F5Yf515SgZPimIujRmTgbtY78aVLWS3EpU_z5TRyIJs/edit)
- [그놈 셸 JavaScript 디버깅 (GNOME 공식 문서)](https://wiki.gnome.org/Projects/GnomeShell/DebuggingJavaScript)
- [2018년 5월 그놈 모임 회고 - 그놈 한국 블로그(GNOME KOREA Blog)](http://gnome-kr.blogspot.kr/2018/05/2018-5.html)
- [Hanjp-IM 프로젝트 GitHub 저장소](https://github.com/ubuntu-kr/hanjp-im)
- [Hanjp-IM 프로젝트 우분투한국커뮤니티 위키 문서](https://wiki.ubuntu-kr.org/index.php/HanJP_IM)
- [Hanjp-IM 프로젝트 모임 사진첩](https://photos.app.goo.gl/9hBFNe0jwk40xzox1)

## 사진
사진 일부는 문관경님께서 촬영하신 사진입니다. 촬영해 주신 문관경님께 감사 드립니다.
![](https://lh3.googleusercontent.com/AdlgWvWAZvmI4S3GePHIC0dEarSnFERe4Dv0r66EZcDeNqUlBAx7QVdM4H6oiffk3w1AfvCm2r38KkbV9bH1klq526jvjioyqTp2DHrCy5rF40bcUgZd_lzcWhOfA6libmHYBRyCpdMudeZLJYhA2X_VqS-sU_DvzkRff45mqz5n298M1snvOz-43e1c352xliDQe_bAzxEU716YdIS3gISo6jQO849olBqkWqcA0Mhkt8TV-AnZyFHfwWkwvlwo509CQpqqxI9iHWoWGAQ4g6_310Hk_9PtRjuZGefl1up7zaW4gqvxC1R_mDqfD58ImzmnKs_uH3A4XRbhJyJo0KiqOclsbOWTHWVQDMeQwrtz2G5YKLRuK4FbW7r96JcBsw-ZTne9VZFcuFrd67a4noSOGC-8UgQX7JfITyJXC6mQYWgeyOB4vxWhINM7iR-5KQKY_sNvK5T4PfJQpW4k_XmEZDksPjy9KB512q6HdmDbf3BulsBMFyK4eGsiafXoqzt9oRZ6koO3HRL7TSpD-CsAg0XGsAhKH4lAMCXt651gFHjWvQNeUebhK9a4C6Ko9034e94C-6_-KzUOJMNJs--auyz8jmrCAeiF_oMXDupDQiJ0IrJyy5Gdn8Il7tucRTqqBHGm3P_wnyLxLeRuVD7QnhNi_noG=w2856-h1606-no)
![](https://lh3.googleusercontent.com/F3MPp-jG2wVvUmUthFvH1ZGVkhwnd7LFrBXulhx5F7SnkCd-Pd2UkZFoMIhD35xP-M4pC3yqgCFLogLrX0XYy5WR68EA24gndDcq09fRK6YRcGj7aQVrtbWV3gpSxsIqYWF3Je5jSXaU6AcnjlFpopvbfPirCTkvJXbDD4exAGZor7KUjZhL5ndPbuDFv-bJh0KvwrjS-LSf7CqUYZtlxPb9vgV2rbBy2EN8AmdWgTShQiCE-LKjnT6ZoOIstPknvbJen2OfMdE1ngkYiuqBbts8XfRVPHX9PhfMWvgFf185SL_ZUorgr61Scs0B2ltitzcQzV8Su5FyM9BQ0KT9LdHVHC-lOFT-ejH8TFO7gSvlsMWl_UJUx1MdQNgDr-awNSHP40dyW7gVBK6FTtNIH02iymcjuXBFd6LvDyFIvQfL9U1EESifNk4OlgxQ_qp_zrIFhe8XiRbfqrs8jlGlmgI3ScFdH6Ook033Db1uC_83bJJO6xbNBSxwukbhNnS93CGm2JTvku4adBWKtYtTjdGJTrLuF1bu6G5Xyw597BFMKn6Lwxn3u1VNnDU-A9suQtcFtHQur65FkMLYpkcRWKLGEcfh1cSPLSZtKL-iNYa5NeipqRdUIXPigEcJCcpMcKBwYWLOw7Jq09xifMXAopADEbjCmiGG=w2856-h1606-no)
![](https://lh3.googleusercontent.com/HbPCySK91BK9EbQDlKwuGwNZ90Q_iHk_RDK4FA2toB01JDxGQi4uzWyp0py0LmYn2xXPLcLl5Owg-JTG-FHNH6CodoJbXzZmL2nSOd8YpsrX434sH_wHz85asAibm4KSN3-42VeMSnwBJOQgcIvzJV1TcNiw7E-l6EXodCOKAL7UkHLZ5YziXs8JY7CRxMiMJS1ebH4uyV-dIqHj_l5mpw4AfJa46mbMtJZerbrs2dnd_7LC8HAD_2uC-UcF18Ni-_0wW-0I3Z5DPvkYjExUgipIbTPuFdatQJItZG_MxKKf6ITNfm6QgNTFTkxc5VQ07ZESKvzQ7wMM0f-8QJ5mcYEuZAMD7xVLBc-TGtVqMv-qnVoj4rU7bYYc70J-hvd4XI7gk9ZodWYqferBtcI-b7ztpFIss7dYSpgTNOE6u6V1hoW2-C476_W6iEiyVOG9W6CTflC8OS-gky3LUDVuEKVL8jJpBi7rJ8KQdVCvHMVsGkzwSpMFjC5YEknKtA5TgLM4I7r1bVXQt9hJjQaYc0D1OlgIixkzCXnOAAyAIpfK4mdG4hi9F2qVS03Eq70MRkr5JycjhcNCGV2kYtPqOIcyHBGqF4KIp4Ny0oCRYUfpNxc-XKJDFJjwRb6tK1EbvMvrh6QBpigg5lvJTH-FbulQZnd_2nSO=w2856-h1606-no)
![](https://lh3.googleusercontent.com/UJZIXgrrEvHqfcVlVf85ad9jVagf7Ov4t9NpaALj6LY4J8YZtet3QuN7BZ4FKk5-qXe80p1wWHTLS0kxMyBYfL9AUhCqoBU56kVQc-6PepA3D2caC3YQvhONjPButyCZf-xDObzKJLKS2BqPb2Nx6h14vB0XhCuQ2Y39bwsKO59kxXqNaCypb8wNZW2UlI0FhLqK2IsTrP-wL8vKDIAHgZCVvfv2GQqcc54gVKpEy8KRyizV3Xdp2mr3feO-xRvHPwOOAlrNfYcMMSIMJH5OyzE_YmxntsadCp3-8rPkqsARIHtAq2C_oLxPWXnb9vjYQgXx7xYUv6cHtZ3eoHG1_3dHpOJK1Y3HEF_eztX5ZKbc04yXUljlUKUZ1nMk4ajDqxQzT1qcbuPAXEP-7hzxKv01xDCwCWc_9vhUagnOP4k6euw8TrP227hZ3VWLNDgDuYhxaeQNsFF5aoyV4dfDEwShTWe0bz3lsfGjzsytddhxe69u5jBejahaDI-YUsx3cH2tBpKxfYD2_m4mbrGSa_09bHVJT4aEX125Pl97pIrIOYQaUfYTMzamcf-k483e-H-E87IQ6qqXcZBISL-o3qvybpUPRe8BS04RfVbw-kJQRnuj0WJdn53rC0IVPO9EHlSuuYCtxEDFkBdldf0PztKcsX84okdt=w1280-h960-no)
![](https://lh3.googleusercontent.com/kVaImuBGQOT20Gf1MLcLCP_Ql3MuOn2TK5oVFfBnUKONQ05BrP8pQfZ9v8jJ_-gIkAfXEmI8zfUmnhgidCWJJRg9SbuUrQhVyx7rUp7LjuRTMYqSSvjrsIRRZFoQcbDEvITsNRZFgnPSlzPrSwIV9Wnzk9mRCi9Hs9HujnsZ61lEOiPwQgRjdcARvXUVlr2BxQqW8JZ11YDgvvdZK90WBWdI74KhQF7FZjZ7XP92tfmzkIGEFW-9_Jo-cVfJ3VaBEy8FwfRClKzNOkZGlHLBcLqnDAbNlDCkttbh_ES5r4sUFWdqOa2F8-b8--b57qPtSioMpRAhjHxQhvjno_75Zb6qHWZ7YA5SXWeKf7TT6iBk3yZZEB__TakAsefGGp5lFwld7nd5tmPBzEBgR0ZJMsNo37mi0cgJGqIGLbDMQVNQhq82jxPl4yMYMOQe6y9o_WrmR7OqNzbyHwBXiG2QSlCW-iFqzHqqe2BzO6DRRdicKAeEIRgm92eNxN2AzWdY6fcMkyryPGho-2-83GsApjNbVdLLe6XssxFjrPZL6lA4kRGuqOpiD25EAOgNLfws5gXGXUqx479BQoPM70GqhO-7vtWdp3yq_bfB3IBvRmZgYsyNVUziLKYBII2fqmVmK7hDQAmCGEoqYHQ6sIZANd6tFWzjqP4A=w1280-h960-no)