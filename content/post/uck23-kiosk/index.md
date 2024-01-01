---
date: 2023-09-25T10:50:36+09:00
title: "UbuCon Korea 2023 체크인 키오스크 개발기"
tags:
 - ubucon
 - recap
 - report
 - ubuntu-core
 - ubuntu-frame
 - iot
forum_username: sukso96100
authors:
    - name: 한영빈
      bio: 우분투한국커뮤니티 대표
      email: ybhan@ubuntu.com
      launchpad: ybhan
      github: sukso96100
      profile: https://avatars2.githubusercontent.com/u/1916739?s=460&v=4
image: team.jpg
draft: false
---

UbuCon Korea 2023이 끝난지도 어느덧 한달이 다 되어 가는데요. 저는 이번에 행사를 준비하면서, 개인적으로 잘 작동하여(?) 뿌듯한 것이 있었다면, 여러분들이 행사장에 체크인 할 때 만났던 체크인 키오스크 입니다. 물론 항상 잘 작동 한 것은 아니고, 행사날 아침 제대로 작동하지 않는 이슈 등이 간혹 있어서 우여곡절도 조금씩 있었는데요. 그럼에도 대부분의 경우 잘 작동하여 리셉션에 계시던 행사 준비위원 분들과 자원봉사자 분들의 일을 덜 수 있어 좋았습니다.

여러분이 만났던 키오스크는 이번에 제가 몇 달 정도 시간을 내어 직접 개발한 것인데요. Ubuntu Core, Ubuntu Frame, Ubuntu Frame OSK, Flutter, Yaru.dark(Flutter 테마), libusb, TSPL, Django 등을 활용하여 개발 및 구축하였습니다. 이 글을 통해 키오스크가 어떻게 개발 되었는지 과정을 한번 정리 해 보고자 합니다.

## 왜 만들게 되었는가

여러 이유가 섞여서 하나 만들어 보자는 생각을 하게 되어 만들기 시작 했습니다. 가장 큰 이유라면, 작년에 준비했던 UbuCon Asia 2022의 경우 실제 행사에 참석 하였음에도 체크인 기록이 누락되어 있는 경우가 많이 있었습니다. 분명 행사장에서 뵈었는데, 나중에 이벤트 플랫폼 콘솔을 보니 체크인 확인이 안 되어 있는 경우가 종종 있더군요. 그래서 참가자의 QR을 스캔하면 자동으로 체크인 처리도 되고, 명찰도 나오고록 시스템이 있어서 체크인 누락을 줄였으면 좋겠다는 생각을 했습니다. 

또한, 작년 UbuCon Asia 2022와, Ubuntu Summit 에서는 Flutter와 Ubuntu Frame이 많이 소개가 많이 되고, 이를 활용한 키오스크 앱 만들어서 Raspberry Pi에 올려보기 워크샵이 여러 번 있었습니다. 흥미롭긴 했지만, 딱히 활용 사례에 대한 이야기는 없었다 보니 실제 활용 사례를 하나 만들어 보면 재미있을 것 같더군요. 리눅스용 Flutter 앱 개발하기가 용이한 편인지, 관련 패키지가 충분히 있는지도 알아보면 좋을 듯 하고, Ubuntu Frame 도 앱 패키징 해서 설치 경험 해 보고 공유 해 보면 좋을 것 같다는 생각도 했습니다.

마지막으로는, [이호민님이 라벨 프린터로 재미있게 노시는 것을 보고(?)](https://www.youtube.com/watch?v=wGpcQVV1wBA) 저도 취미로 라벨 프린터 하나 사다가 굴려보는 김에 키오스크도 개발(?) 하게 된 것도 있습니다.

## 초창기 목표
처음 목표는 대충 이렇습니다.

- 참가자 대상으로 사전에 이메일로 체크인 QR코드 발급
- 참가자가 현장에 와서 웹캠 통해서 스캔 하면 자동으로 체크인 처리하고, 명찰에 부착할 라벨 출력
- 키오스크쪽 소프트웨어는 Flutter + Yaru.dart 테마로 만들어 보기
- Ubuntu Core(사물인터넷 전용 Ubuntu), Ubuntu Frame(Mir 디스플레이 서버 기발 GUI 셸), Ubuntu Frame OSK 설치된 SBC에 배포
- 가능하면(?) 연초에 배송 받은 RISC-V SBC인 VisionFive2에 올려보기.

그리고 여러 삽질(?)을 거치며 최종적으로는 이렇게 완성되게 됩니다.

- 참가자 대상으로 사전에 이메일로 체크인 QR코드 발급
- 참가자가 현장에 와서 바코드 스캐너 통해서 스캔 하면 자동으로 체크인 처리하고, 명찰에 부착할 라벨 출력
- 키오스크쪽 소프트웨어는 Flutter + Yaru.dart 테마로 만들어 보기
- Ubuntu Core(사물인터넷 전용 Ubuntu), Ubuntu Frame(Mir 디스플레이 서버 기발 GUI 셸), Ubuntu Frame OSK 설치된 SBC에 배포
- Raspberry Pi에 Ubuntu Core, Ubuntu Frame, Ubuntu Frame OSK와 개발한 소프트웨어 설치

## 라벨 프린터 구입해서 굴려보기
일단 먼저 한 것은, 체크인 기능을 구현한 것은 아니고. 라벨 프린터를 사다가 Flutter로 개발한 앱으로 제어 해 보는 것이였습니다. 아마 여기에서 삽질을 가장 많이 하지 않았나... 싶기도 합니다. 라벨 프린터를 처음에는 저도 이호민님이 구입 하셨던(?) 브라더 QL-800이나, Zebra 제품을 생각을 했었는데. 가격이 비싸서 부담이 많이 되더군요. 그래서 저렴 하면서도, 리눅스 지원이 있고(왜냐하면 Ubuntu Core 굴러가는 기기와 연결해야 하기 때문에...), 감열 라벨 인쇄 가능한 것으로 알아보게 되었습니다.

그러다가, [Xprinter XP-365B 를 하나 AliExpress 에서 구입하게 되었습니다.](https://ko.aliexpress.com/item/1005002344329322.html) 배송비까지 포함해서 약 6만원 이라는 저렴한 가격에 리눅스 드라이버 지원도 있어 구입을 했고, 같이 사용할 감열 롤 라벨지는 오히려 국내에서 사는 것이 저렴하면서 크기 규격도 다양하고, 배송도 빠르다 보니. [여기](https://www.hihimall.com/shop/goods/goods_view.php?goodsno=302&category=029001001) 에서 명찰에 부착할 크기인 70mm*70mm 감열 롤라벨을 하나 구입 했습니다. 함정이 있다면, 1000장 짜리 롤이다 보니... 나중에 받아서 직접 소분을 해서 라벨 프린터에 넣어야 했지만... 그래도 일단은 잘 사용 중입니다. 소분된 것을 주문제작 요청할까 하였으나, 그러면 일단 대량으로 구입해야 해서 바로 포기 했습니다.

구입한 프린터는 리눅스 드라이버는 있었지만, 아쉽게도 x86용 드라이버 바이너리만 있었습니다. 개발한 키오스크를 노트북에서 구동한다면 상관 없지만, VisionFive2나 Raspberry Pi같은 x86이 아닌 RISC-V나 ARM 칩으로 돌아가는 보드에서는 사용할 수 없는 것이였죠. 다행이도 라벨 프린터에서 많이 사용하는 프린터용 프로그래밍 언어인 TSPL을 지원하는 프린터여서, `libusb`로 TSPL 코드를 직접 만들어 프린터에 보내는 형태로 개발을 시작 하게 되었습니다. Hackernoon 웹사이트에 몇몇 포스팅이 TSPL 다루는 글 이여서, 이를 참고해서 프린터 조작을 먼저 해 보게 되었습니다. [How to Print labels with TSPL and JavaScript](https://hackernoon.com/how-to-print-labels-with-tspl-and-javascript), [How to Print images with TSPL and JavaScript
](https://hackernoon.com/how-to-print-images-with-tspl-and-javascript)이 두 포스팅을 많이 참고한 것 같네요. USB를 통한 통신 부분은 내부적으로 `libusb`를 사용하는 [`quick_usb`](https://pub.dev/packages/quick_usb)를 활용 하였습니다.