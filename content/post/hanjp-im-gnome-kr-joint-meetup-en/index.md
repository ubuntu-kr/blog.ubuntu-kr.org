---
layout: post
date: 2018-05-19
title: "[Hanjp-IM Project] Joint meetup with GNOME Korea"
tags:
 - project
 - input-method
 - hanjp
 - gnome-kr
 - report
authors:
    - name: Youngbin Han
      bio: Leader of the Ubuntu Korea Community(Ubuntu Korea LoCo Team)(2017~2018) / Hanjp-IM Project Member
      email: sukso96100@gmail.com
      launchpad: sukso96100
      github: sukso96100
      profile: https://avatars2.githubusercontent.com/u/1916739?s=460&v=4
image: https://lh3.googleusercontent.com/UJZIXgrrEvHqfcVlVf85ad9jVagf7Ov4t9NpaALj6LY4J8YZtet3QuN7BZ4FKk5-qXe80p1wWHTLS0kxMyBYfL9AUhCqoBU56kVQc-6PepA3D2caC3YQvhONjPButyCZf-xDObzKJLKS2BqPb2Nx6h14vB0XhCuQ2Y39bwsKO59kxXqNaCypb8wNZW2UlI0FhLqK2IsTrP-wL8vKDIAHgZCVvfv2GQqcc54gVKpEy8KRyizV3Xdp2mr3feO-xRvHPwOOAlrNfYcMMSIMJH5OyzE_YmxntsadCp3-8rPkqsARIHtAq2C_oLxPWXnb9vjYQgXx7xYUv6cHtZ3eoHG1_3dHpOJK1Y3HEF_eztX5ZKbc04yXUljlUKUZ1nMk4ajDqxQzT1qcbuPAXEP-7hzxKv01xDCwCWc_9vhUagnOP4k6euw8TrP227hZ3VWLNDgDuYhxaeQNsFF5aoyV4dfDEwShTWe0bz3lsfGjzsytddhxe69u5jBejahaDI-YUsx3cH2tBpKxfYD2_m4mbrGSa_09bHVJT4aEX125Pl97pIrIOYQaUfYTMzamcf-k483e-H-E87IQ6qqXcZBISL-o3qvybpUPRe8BS04RfVbw-kJQRnuj0WJdn53rC0IVPO9EHlSuuYCtxEDFkBdldf0PztKcsX84okdt=w1280-h960-no
---

Today(May 19, 2018), Our Hanjp-IM Team from Ubuntu Korea Community, opened a joint meetup with GNOME Korea.
This joint meetup was organized with the suggestion from Seong-Ho Cho, from GNOME Korea. who attended Ubuntu 18.04 LTS Release Party @ Seoul.
After he watched the presentation about status of Hanjp-IM Project, he suggested us a joint meetup because he wanted to help our project.
Since we have many difficulties with developing input method because all of us are begineer in input method field, We have accepted the suggestion wo that we can get some help with our project from the people knows manh things about iBus and input method.

The meetup was hold at KossLab located at the 7th floor of the anam tower.

## 1. Summary of how hangul is processed
First, Seong-Ho Cho from GNOME Korea described about how hangul input is processed. He introduced 3 diffreent software : libhangul a library for processing hanugl input, iBus a very well known input method for linux desktop, and ibus-hangul implemented with ibus and libhangul. He also presented us how those are works and its architectures by showing us some state diagram.

## 2. Outline of hangul input in linux desktop
Changwoo Ryu from GNOME Korea described about how hangul input is processed in linux desktop. He emphasized that problems that occurs when typing hangul(such as disappearing of last character when pressing space) isn't just because of input methods. But it's a complex problem since other various softwares are also related and participate with input processing. To describe this much better he showed us some diagram of input processing scenarios. Since not just X.org but Wayland also have to be considered when processing input these days, He also introduced some functions included in Wayland that processed keyboard input itself.

## 3. Hanjp-IM Project Intrduction
Gwangyeon Kim, who leads our Hanjp-IM Project, introduced about our Hanjp-IM Project by showing some piece of codes from libhanjp which provide similar features to libhangul. he described how libhanjp uses libhangul to process Japanese Kana thorugh typing Korean Hangul. After his introduction, We talked about solving out some problems of our project, what kind of options should we put to build, and fixing errors from libhanjp. We also tried to write and test test code for libhanjp. Gwan-gyeong Mun and Changwoo Ryu help him with writting code, Makefile writting and gcc build options, and debugging with gdb.

## 4. Setting up development environment for GNOME with jhbuild, and how to build, test, and submit issue
Gwan-gyeong Mun from GNOME Korea introduced about setting up development environment, building, testing GNOME with jh build. and also submitting issues to GNOME Project.
He also showed us how to use looking glass a tool for debugging Gjs(Javascript binding for GNOME) by demonstrating inspection of components on GNOME Shell and other features from looking glass.

Through this joint meetup with GNOME Korea our Hanjp-IM team could get a lot of help with the project, and it was a great opertunitty to think about which way should we choose for progress of the project and what we actually have to do to do it.
With this meetup, it's already 20th meetup for our project. If we got right way for the project, we'll be able to make a quick progress and also launch a first version much quicker.

## Links
- [Summary of how hangul is processed (Slides)](https://www.slideshare.net/gnomekr/20180519-hangul-processing)
- [Outline of hangul input in linux desktop (Slides)](https://www.slideshare.net/gnomekr/korean-input-overview-in-the-linux-desktop)
- [Setting up development environment for GNOME and debugging tips (Gwan-gyeong Mun's document from his Google Docs)](https://docs.google.com/document/d/1F5Yf515SgZPimIujRmTgbtY78aVLWS3EpU_z5TRyIJs/edit)
- [JavaScript Debugging (GNOME Wiki)](https://wiki.gnome.org/Projects/GnomeShell/DebuggingJavaScript)
- [2018년 5월 그놈 모임 회고 - 그놈 한국 블로그(GNOME KOREA Blog)](http://gnome-kr.blogspot.kr/2018/05/2018-5.html)
- [Hanjp-IM Project GitHub Repo](https://github.com/ubuntu-kr/hanjp-im)
- [Hanjp-IM Project Document on Ubuntu Korea Community Wiki](https://wiki.ubuntu-kr.org/index.php/HanJP_IM)
- [Hanjp-IM Project meetups photo album](https://photos.app.goo.gl/9hBFNe0jwk40xzox1)

## Photos
Some photos were taken by Gwan-gyeong Mun. Thanks for the photos.
![](https://lh3.googleusercontent.com/AdlgWvWAZvmI4S3GePHIC0dEarSnFERe4Dv0r66EZcDeNqUlBAx7QVdM4H6oiffk3w1AfvCm2r38KkbV9bH1klq526jvjioyqTp2DHrCy5rF40bcUgZd_lzcWhOfA6libmHYBRyCpdMudeZLJYhA2X_VqS-sU_DvzkRff45mqz5n298M1snvOz-43e1c352xliDQe_bAzxEU716YdIS3gISo6jQO849olBqkWqcA0Mhkt8TV-AnZyFHfwWkwvlwo509CQpqqxI9iHWoWGAQ4g6_310Hk_9PtRjuZGefl1up7zaW4gqvxC1R_mDqfD58ImzmnKs_uH3A4XRbhJyJo0KiqOclsbOWTHWVQDMeQwrtz2G5YKLRuK4FbW7r96JcBsw-ZTne9VZFcuFrd67a4noSOGC-8UgQX7JfITyJXC6mQYWgeyOB4vxWhINM7iR-5KQKY_sNvK5T4PfJQpW4k_XmEZDksPjy9KB512q6HdmDbf3BulsBMFyK4eGsiafXoqzt9oRZ6koO3HRL7TSpD-CsAg0XGsAhKH4lAMCXt651gFHjWvQNeUebhK9a4C6Ko9034e94C-6_-KzUOJMNJs--auyz8jmrCAeiF_oMXDupDQiJ0IrJyy5Gdn8Il7tucRTqqBHGm3P_wnyLxLeRuVD7QnhNi_noG=w2856-h1606-no)
![](https://lh3.googleusercontent.com/F3MPp-jG2wVvUmUthFvH1ZGVkhwnd7LFrBXulhx5F7SnkCd-Pd2UkZFoMIhD35xP-M4pC3yqgCFLogLrX0XYy5WR68EA24gndDcq09fRK6YRcGj7aQVrtbWV3gpSxsIqYWF3Je5jSXaU6AcnjlFpopvbfPirCTkvJXbDD4exAGZor7KUjZhL5ndPbuDFv-bJh0KvwrjS-LSf7CqUYZtlxPb9vgV2rbBy2EN8AmdWgTShQiCE-LKjnT6ZoOIstPknvbJen2OfMdE1ngkYiuqBbts8XfRVPHX9PhfMWvgFf185SL_ZUorgr61Scs0B2ltitzcQzV8Su5FyM9BQ0KT9LdHVHC-lOFT-ejH8TFO7gSvlsMWl_UJUx1MdQNgDr-awNSHP40dyW7gVBK6FTtNIH02iymcjuXBFd6LvDyFIvQfL9U1EESifNk4OlgxQ_qp_zrIFhe8XiRbfqrs8jlGlmgI3ScFdH6Ook033Db1uC_83bJJO6xbNBSxwukbhNnS93CGm2JTvku4adBWKtYtTjdGJTrLuF1bu6G5Xyw597BFMKn6Lwxn3u1VNnDU-A9suQtcFtHQur65FkMLYpkcRWKLGEcfh1cSPLSZtKL-iNYa5NeipqRdUIXPigEcJCcpMcKBwYWLOw7Jq09xifMXAopADEbjCmiGG=w2856-h1606-no)
![](https://lh3.googleusercontent.com/HbPCySK91BK9EbQDlKwuGwNZ90Q_iHk_RDK4FA2toB01JDxGQi4uzWyp0py0LmYn2xXPLcLl5Owg-JTG-FHNH6CodoJbXzZmL2nSOd8YpsrX434sH_wHz85asAibm4KSN3-42VeMSnwBJOQgcIvzJV1TcNiw7E-l6EXodCOKAL7UkHLZ5YziXs8JY7CRxMiMJS1ebH4uyV-dIqHj_l5mpw4AfJa46mbMtJZerbrs2dnd_7LC8HAD_2uC-UcF18Ni-_0wW-0I3Z5DPvkYjExUgipIbTPuFdatQJItZG_MxKKf6ITNfm6QgNTFTkxc5VQ07ZESKvzQ7wMM0f-8QJ5mcYEuZAMD7xVLBc-TGtVqMv-qnVoj4rU7bYYc70J-hvd4XI7gk9ZodWYqferBtcI-b7ztpFIss7dYSpgTNOE6u6V1hoW2-C476_W6iEiyVOG9W6CTflC8OS-gky3LUDVuEKVL8jJpBi7rJ8KQdVCvHMVsGkzwSpMFjC5YEknKtA5TgLM4I7r1bVXQt9hJjQaYc0D1OlgIixkzCXnOAAyAIpfK4mdG4hi9F2qVS03Eq70MRkr5JycjhcNCGV2kYtPqOIcyHBGqF4KIp4Ny0oCRYUfpNxc-XKJDFJjwRb6tK1EbvMvrh6QBpigg5lvJTH-FbulQZnd_2nSO=w2856-h1606-no)
![](https://lh3.googleusercontent.com/UJZIXgrrEvHqfcVlVf85ad9jVagf7Ov4t9NpaALj6LY4J8YZtet3QuN7BZ4FKk5-qXe80p1wWHTLS0kxMyBYfL9AUhCqoBU56kVQc-6PepA3D2caC3YQvhONjPButyCZf-xDObzKJLKS2BqPb2Nx6h14vB0XhCuQ2Y39bwsKO59kxXqNaCypb8wNZW2UlI0FhLqK2IsTrP-wL8vKDIAHgZCVvfv2GQqcc54gVKpEy8KRyizV3Xdp2mr3feO-xRvHPwOOAlrNfYcMMSIMJH5OyzE_YmxntsadCp3-8rPkqsARIHtAq2C_oLxPWXnb9vjYQgXx7xYUv6cHtZ3eoHG1_3dHpOJK1Y3HEF_eztX5ZKbc04yXUljlUKUZ1nMk4ajDqxQzT1qcbuPAXEP-7hzxKv01xDCwCWc_9vhUagnOP4k6euw8TrP227hZ3VWLNDgDuYhxaeQNsFF5aoyV4dfDEwShTWe0bz3lsfGjzsytddhxe69u5jBejahaDI-YUsx3cH2tBpKxfYD2_m4mbrGSa_09bHVJT4aEX125Pl97pIrIOYQaUfYTMzamcf-k483e-H-E87IQ6qqXcZBISL-o3qvybpUPRe8BS04RfVbw-kJQRnuj0WJdn53rC0IVPO9EHlSuuYCtxEDFkBdldf0PztKcsX84okdt=w1280-h960-no)
![](https://lh3.googleusercontent.com/kVaImuBGQOT20Gf1MLcLCP_Ql3MuOn2TK5oVFfBnUKONQ05BrP8pQfZ9v8jJ_-gIkAfXEmI8zfUmnhgidCWJJRg9SbuUrQhVyx7rUp7LjuRTMYqSSvjrsIRRZFoQcbDEvITsNRZFgnPSlzPrSwIV9Wnzk9mRCi9Hs9HujnsZ61lEOiPwQgRjdcARvXUVlr2BxQqW8JZ11YDgvvdZK90WBWdI74KhQF7FZjZ7XP92tfmzkIGEFW-9_Jo-cVfJ3VaBEy8FwfRClKzNOkZGlHLBcLqnDAbNlDCkttbh_ES5r4sUFWdqOa2F8-b8--b57qPtSioMpRAhjHxQhvjno_75Zb6qHWZ7YA5SXWeKf7TT6iBk3yZZEB__TakAsefGGp5lFwld7nd5tmPBzEBgR0ZJMsNo37mi0cgJGqIGLbDMQVNQhq82jxPl4yMYMOQe6y9o_WrmR7OqNzbyHwBXiG2QSlCW-iFqzHqqe2BzO6DRRdicKAeEIRgm92eNxN2AzWdY6fcMkyryPGho-2-83GsApjNbVdLLe6XssxFjrPZL6lA4kRGuqOpiD25EAOgNLfws5gXGXUqx479BQoPM70GqhO-7vtWdp3yq_bfB3IBvRmZgYsyNVUziLKYBII2fqmVmK7hDQAmCGEoqYHQ6sIZANd6tFWzjqP4A=w1280-h960-no)