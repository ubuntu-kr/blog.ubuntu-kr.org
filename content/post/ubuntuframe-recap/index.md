---
date: 2023-02-07T12:31:04+09:00
title: "2021 Ubucon Asia에서의 Ubuntu Frame 워크숍"
tags:
 - ubucon
 - iot
authors:
    - name: 김광연
      bio: Ubuntu Korea Community
      email: ghemool123@gmail.com
      launchpad: horary
      github: onting
      profile: profile.jpg # 프로필 이미지 URL
image: ubuntu-frame-logo.png
draft: false # 글 초안 여부
---

## Table of Contents
1. [도입](#도입)
2. [우분투 Core & Frame](#우분투-core--frame)
3. [Electron 앱 패키징 및 배포](#electron-앱-패키징-및-배포)
4. [회고와 정리](#회고와-정리)

## 도입
수 년전인가 부터 임베디드 혹은 IoT 분야는 4차 산업혁명이라는 말로 강조 되오기 시작했습니다. 사실 임베디드 시스템은 훨씬 이전 부터 우리 생활에 밀접하게 자리 잡아 있었지만 딥러닝의 등장으로 전에 불가능했던 수많은 앱들이 앞으로 가능할 것이라 보고 앞으로는 edge 기기들 증가하고 통신의 중요성이 화두가 될 것이라 보는 것이죠. 그러나 저는 임베디드의 기반 시스템 개발 부분은 앱 개발 만큼 논의가 활발히 이루어 지지 않는다고 느낍니다.
아직도 맞춤형 OS는 유지보수, 개발 난이도 등의 문제들을 합리적으로 다루기 어려워서 데스크톱용 OS에 GUI 앱을 올리는 형태로 많이 개발 되고 있습니다.
![Signage 장애 이미지](./signage_error.jpeg)

이와 관련해 조사해서 제가 2022 Ubucon Asia에서 발표했던 Ubuntu Frame에 대한 워크숍 내용을 이 글에 정리하려 합니다.
필요에 따라 [워크숍 슬라이드 파일](https://docs.google.com/presentation/d/1scBM6nhjr_amlooKgobwNzKSSdhIdW7i4rp9tW1bfQE/edit?usp=sharing)을 통해 요약된 내용을 확인하기 바랍니다.

## 우분투 Core & Frame

### 1. Ubuntu Frame 소개
Ubuntu Frame은 GUI 임베디드 및 IoT 시스템 개발을 위해 작년 10월 경에 출시 된 Canonical 사의 제품으로 Ubuntu Core와 함께 임베디드 개발에 활용 될 수 있습니다.
Ubuntu Fram의 공식 설명을 보면 "다양한 임베디드 그래픽 디스플레이 구현을 위한 기반이며, wayland 기반의 단순한 Full-screen Shell을 제공해서 키오스크, 안내판 등에 활용될 수 있다."라고 설명되고 있습니다. 즉 아래 그림과 같은 단순히 회색 화면만 있는 창이 디스플레이를 점유하는 환경을 제공하는 것입니다.
![Ubuntu Frame Screen Simulator](./ubuntu-frame-simulator.jpeg)

Ubuntu Frame은 위와 같이 최소의 wayland compositor(display server)를 제공해서 GUI 앱과 통신할 수 있는 소캣을 제공하는데, 마우스, 키보드, 터치스크린 등의 다양한 I/O가 가능합니다.

### 2. Ubuntu Core 소개

### 3. Ubuntu Frame 살펴보기

### 4. 요약 및 결론


## Electron 앱 패키징 및 배포

## 기기로 앱 업로드하기

## 회고와 정리

