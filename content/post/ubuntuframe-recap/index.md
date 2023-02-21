---
date: 2023-02-07T12:31:04+09:00
title: "Ubuntu Frame 처음 만나보기"
tags:
 - ubucon
 - iot
authors:
    - name: 김광연
      bio: Ubuntu Korea Community
      email: ghemool123@gmail.com
      launchpad: horary
      github: onting
      profile: profile.jpg
image: ubuntu-frame-logo.png
draft: false
---

## Table of Contents
1. [서론](#서론)
2. [우분투 Core & Frame](#우분투-core--frame)
3. [데스크톱 환경에서 실습하기](#desktop-환경에서-실습하기)
4. [Electron 앱 패키징](#electron-앱-패키징)
5. [Ubuntu Core로 실습하기](#ubuntu-core로-실습하기)
6. [회고와 정리](#회고와-정리)

## 서론
수년 전인가 부터 임베디드와 IoT가 4차 산업혁명이라는 말로 강조 되기 시작했습니다. 사실 임베디드 시스템은 훨씬 예전 부터 우리 생활에 밀접하게 자리 잡아 있었지만 딥러닝의 등장으로 전에 불가능했던 수많은 앱들이 앞으로 실현 가능할 것이라 보고 앞으로는 edge 기기들 증가하고 통신의 중요성이 화두가 될 것이라 보는 것이죠. 그러나 이런 전망에도 불구하고 저는 임베디드의 기반 시스템 개발 부분은 앱 개발 만큼 논의가 활발히 이루어 지지 않는다고 느낍니다.
아직도 맞춤형 OS는 유지보수, 개발 난이도 등의 문제들을 합리적으로 다루기 어려워서 데스크톱용 OS에 GUI 앱을 올리는 형태로 많이 개발 되고 있는 행태입니다.
![Signage 장애 이미지](./signage_error.jpeg)

이와 관련해 조사해서 2022년도 Ubucon Asia에서 발표했던 Ubuntu Frame에 대한 워크숍 내용을 이 글에 정리하려 합니다.
필요에 따라 [워크숍 슬라이드 파일](https://docs.google.com/presentation/d/1scBM6nhjr_amlooKgobwNzKSSdhIdW7i4rp9tW1bfQE/edit?usp=sharing)을 통해 요약된 내용을 확인하기 바랍니다.

## 우분투 Core & Frame

### 1. Ubuntu Frame이란?
Ubuntu Frame은 GUI 임베디드 및 IoT 시스템 개발을 위해 작년 10월 경에 출시 된 Canonical 사의 제품으로 Ubuntu Core와 함께 임베디드 개발에 활용 될 수 있습니다.
[Ubuntu Frame의 공식 설명](https://github.com/MirServer/ubuntu-frame#description)을 보면 Ubuntu Frame은 "다양한 임베디드 그래픽 디스플레이 구현을 위한 기반이며, 단순한 Full-screen Shell을 제공해서 키오스크, 안내판 등에 활용될 수 있다."라고 설명되고 있습니다. 즉 아래 그림과 같은 단순히 회색 화면만 있는 창이 디스플레이를 점유하는 환경을 제공하는 것입니다.
![Ubuntu Frame Screen Simulator](./ubuntu-frame-simulator.jpeg)

Ubuntu Frame은 이와 같이 GUI 앱이 전체 화면을 점유할 수 있는 단순한 Shell을 제공하며 마우스, 키보드, 터치스크린 등의 다양한 I/O도 가능합니다. 또한, Ubuntu Frame은 Ubuntu Core 위에서 실행되는 것이 권장되지만 일반 리눅스 배포판에서도 실행이 가능합니다.

그런데 이런 기본적인 GUI 환경이 왜 제공되는지에 대한 등장 배경과 Ubuntu Frame의 구조를 이해하기 위해서 Ubuntu Core에 대해 설명하겠습니다.

### 2. Ubuntu Core 소개
우선 소개에 앞서 우리가 임베디드 개발에서 커스텀 리눅스 이미지가 필요하게 되는 이유와 이것이 실제로 어려운 이유를 짚어보겠습니다. 
임베디드 시스템에서는 다양한 작업을 해야하는 PC와 달리 정해진 작업들을 안정적으로 수행하는 것이 중요합니다. 반면, 컴퓨터 시스템에서 더 많은 기능들은 더 많은 결함 발생 가능성을 의미하기 때문에 안정성과 하드웨어 비용을 위해서 리눅스 이미지 맞춤 제작이 임베디드에서는 화두되고 있습니다. 그러나 리눅스 맞춤 제작은 실제로는 굉장히 어려운 문제입니다. 리눅스를 스스로 개발한다는 것은 리눅스 배포판이 관리해주던 커널 컴파일, 디바이스 드라이버, 설치 등을 개발자가 Root File System을 생성 할 때 스스로 고려를 해야 한다는 것을 의미하고 더욱이 시스템이 GUI를 사용해야 한다면 디스플레이 서버 프로토콜을 고려해야하는 등 문제가 복잡합니다. 그리고 개발을 하고 배포했을 때에도 시스템 배포 후 원격 접속, 업데이트, 모니터링 등의 유지보수가 어려워지는 문제 또한 생기게 됩니다.

![Ubuntu Core Logo](./ubuntu-core.png)
여기에서 [Ubuntu Core](https://ubuntu.com/core)가 등장하게 됩니다. Ubuntu Core는 임베디드 시스템을 위해서 리눅스 이미지를 맞춤 제작을 하기 보다는 리눅스 배포판의 장점을 적용해 개발과 관리를 용이하게 하겠다는 접근입니다.
일단 Ubuntu Core는 임베디드를 위한 리눅스 배포판입니다. Ubuntu Core는 보안과 유지보수를 강화했고 OS 이미지 또한 임베디드에 맞게 260MB 정도로 초 경량화 됐습니다. 또한, 패키지를 전부 snap으로 관리해서 보안성과 의존성 문제를 향상했고 [Snap Store](https://snapcraft.io/store)가 사용 가능해서 배포/재배포가 용이합니다.

반면 Ubuntu Core에서는 특이하게 보통 Ubuntu와 다르게 패키지 관리자가 Snap만 이용 가능하고 APT는 사용할 수 없습니다. 이는 Snap을 이용해서 보안을 향상하기 위해서 인데 Snap은 차세대 패키지 관리자로 아래 그림과 같은 격리된 앱 실행 환경을 제공해서 보안와 의존성 문제를 향상 시킵니다.
![App Execution in Ubuntu Core](./ubuntu-core-confinement.png)

Snap의 이런 격리된 앱 실행 환경을 [Snap Confinement](https://snapcraft.io/docs/snap-confinement)라고 부르는데 도커와 비슷하게 snap에서는 앱이 격리된 상태로 패키징 되서 배포 됩니다. 이런 격리 환경은 기존에 앱들이 시스템 자원들을 권한만 갖고 있으면 무제한으로 사용 가능했던 것과 구분되게 Snap 앱들은 각 패키지 간에 [Interface](https://snapcraft.io/docs/interface-management)라는 형태로 사전에 서로 합의된 자원에만 접근할 수 있습니다. 이런 snap의 자원 추상화인 Interface에는 아래 그림과 같이 두 가지 단위가 있습니다.

![Snap Interface](./snap-interface.png)
바로 Slot과 Plug입니다.
그림에 나와 있듯 slot은 자원 제공 단위, plug는 자원 소비 단위입니다. 이를 우리가 살펴볼 Ubuntu Frame을 기준으로 생각해보면 우선 ubuntu-frame은 snap 패키지로 제공이 됩니다. 이때 ubuntu-frame 앱은 사실 Wayland compositor로서 GUI 앱을 서비스 할 수 있는 디스플레이 서버인데, 앱이 통신할 수 있는 Wayland socket은 해당 패키지의 slot으로서 제공이 됩니다. 반면 우리가 임베디드 시스템에서 사용할 GUI 앱은 Snap 패키지로 배포 돼서 plug가 되는 것이죠.


### 3. Ubuntu Frame 살펴보기
이제 우리는 Ubuntu Frame의 등장 배경과 구조를 이해할 수 있습니다. RootFS의 최소화, 보안성, 유지보수 용이성 등을 위해서 임베디드 특화 리눅스인 우분투 Core가 등장했고, 이런 장점을 유지할 수 있는 최소 GUI Shell인 Ubuntu Frame이 이에 맞추어 출시됐습니다. Snap 패키지만 사용 가능한 Ubuntu Core의 환경에 맞게 Ubuntu Frame은 Snap 패키지로 Wayland Socket을 slot으로 제공하고 사용자 배포 앱은 여기에 plug로 붙어서 서비스 될 수 있습니다. 즉, Ubuntu Frame은 Wayland 프로토콜을 지원하는 다양한 GUI 앱들을 지원해서 GTK+, QT, Flutter, HTML5 등의 다양한 툴킷으로 앱 개발이 가능합니다. 또한 X.org 프로토콜을 지원하는 기존 앱들도 경량 X 서버를 포함하는 것으로 지원할 수 있습니다.
또한 snap store를 이용해서 임베디등의 어려운 문제인 배포/재배포를 용이하게 합니다.

Ubuntu Frame은 다음 3가지 설정 옵션을 제공합니다. ```snap set``` 명령어로 설정 가능합니다.

* ```daemon=[true|false]```
  - daemon을 활성화 합니다.
  - ```true```로 설정되면 Ubuntu Frame이 스크린 전체를 점유하게 되고 deployment에 필요합니다. 데스크톱 리눅스에서는 기본 ```false```로 설정 되어있고 이는 ```ubuntu-frame```을 실행할 때 스크린 시뮬레이터를 실행하게 합니다.

* ```config=<options for the shell>```
  - 위 옵션으로 ```ubuntu-frame```의 설정 파일을 수정할 수 있습니다.
  - 바탕화면, 돌리기, 그라데이션 등의 다양한 옵션을 설정합니다.
* ```display=<options for the shell>```
  - 장치를 설정할 수 있는 옵션입니다.
  - 그래픽 카드나 시스템 출력 등의 하드웨어 정보를 다룰 수 있습니다.
  - ```frame.display``` 파일에서 설정을 위한 템플릿을 확인 할 수 있습니다.

### 4. 요약 및 결론
![ubuntu-frame-summary](./ubuntu-frame-summary.png)
위 그림은 Wayland 프로토콜 메시지 교환 구조에 제 Ubuntu Frame 설명을 추가한 것입니다.
그림에 빗대어 밑에서 부터 앞선 설명을 회고하고 정리하겠습니다.

1. 가장 밑 부분은 커널 부분입니다. 리눅스 커널을 통해서 여러 디바이스 드라이버 등과 결합되서 추상화된 프로그래밍 환경이 제공되고 이런 커널 부분을 편리하게 관리하는 것이 리눅스 배포판의 역할 중 하나입니다. 너무 많은 기능이 존재하는 데스크톱 리눅스 대신에 Ubuntu Core를 통해서 기능 최소화, 보안 향상, 쉬운 디바이스 드라이버 설치/관리가 가능합니다.
2. 그러나 GUI 시스템에는 커널 말고도 디스플레이 서버를 관리해야할 필요가 생깁니다. 이는 디스플레이 서버 프로토콜과 추가적인 패키지 관리 등의 어려움이 생기기 때문에 Ubuntu Frame이 Wayland Compositor를 제공해서 이를 위한 의미있는 추상화를 제공합니다.
3. 마지막으로 프로그래머는 Wayland 앱을 작성해서 Snap으로 배포해 ```ubuntu-frame```에 붙어서 wayland client로 서비스 되게 됩니다.

이제 Ubuntu Frame에 대한 개념 설명을 마치고 실습을 해보겠습니다.

## 데스크톱 환경에서 실습하기
Ubuntu Frame은 데스크톱, 가상환경, 물리기기에서 모두 실행이 가능합니다.
이 중에서 데스크톱 환경에서는 기본적으로 ```daemon=false```로 설정이 돼 있기 때문에  ```ubuntu-frame```이 실행되면 화면 전체가 ```ubuntu-frame```로 점유 되기 보다는 데스크톱 환경에 스크린 시뮬레이터가 창 형태로 실행되서 개발과 패키징 도중에 앱을 실험 해보기 좋습니다.
때문에 공식 문서의 [데스크톱 환경에서 Ubuntu Frame 실행하기](https://mir-server.io/docs/run-ubuntu-frame-on-your-desktop) 가이드를 먼저 따라해보면서 Ubuntu Frame에 대해 알아보겠습니다.

우선 아래 명령어로 현재 세션에 설정된 wayland socket을 확인 해보겠습니다.
```
$ ls $XDG_RUNTIME_DIR/wayland*
/run/user/1000/wayland-0  /run/user/1000/wayland-0.lock  
```
환경변수 ```$XDG_RUNTIME_DIR```은 현재 로그인 된 데스크톱 세션과 관련된 디렉토리로, 현재 로그인 된 유저와 관련된 파일들이 이곳에 위치하게 됩니다. 다시말해 위의 ```/run/user/*/wayland-0*``` 파일들은 현재 로그인 된 유저에 대해 설정된 wayland socket 파일들입니다.

이제 Ubuntu Frame을 설치하고 실행해보겠습니다. 아래 명령어로 Ubuntu Frame을 설치합니다.
```
$ snap install ubuntu-frame
```
위 앱을 실행하면 해당 디스플레이 서버가 wayland socket을 생성해 GUI 앱을 붙여 보는 것이 가능합니다. 해당 소캣은 패키징 할 때 환경변수 ```$XDG_RUNTIME_DIR/$WAYLAND_DISPLAY```로 설정되서 사용됩니다.

이제 ```ubuntu-frame```을 실행하는데 아래와 같은 두 가지 방식이 존재합니다.
* 현재 유저로 실행하기
  - 이 방법으로 실행하면 ```ubuntu-frame```이 현재 유저가 실행시킨 프로세스가 되고 ```$XDG_RUNTIME_DIR/$WAYLAND_DISPLAY``` 소캣의 소유자가 현재 유저가 됩니다. 실행 방법이 단순하기 때문에 패키징을 하지 않고 단순히 동일한 유저가 실행시킨 GUI 앱을 ```ubuntu-frame```에 붙여 볼 때 유용합니다.
* root로 실행하기
  - 이 방법은 ```ubuntu-frame```의 실제 실행 환경과 조금 더 유사하기 때문에 패키징 했을 때 환경을 시험해보기 좋습니다. ```ubuntu-frame```이 생성하는 wayland socket가 소유자가 root가 아니면 ```ubuntu-frame```과 통신하려는 프로세스의 소유자가 다르면(심지어 root라도) 접속할 수 없기 때문에 ```init```이 생성한 프로세스(이를테면 daemon)들과 통신하려면 root로 실행할 필요가 있습니다. 이 방법은 현재 유저로 실행하는 것보다 조금 더 복잡합니다.

여기에서는 현재 유저로 실행하는 것만 다루겠습니다. 아래 명령어로 실행하고 생성된 소켓을 확인합니다.
```
$ WAYLAND_DISPLAY=wayland-99 ubuntu-frame
$ ls $XDG_RUNTIME_DIR/wayland*
/run/user/1000/wayland-0       /run/user/1000/wayland-99
/run/user/1000/wayland-0.lock  /run/user/1000/wayland-99.lock
```
위 명령어로 ```ubuntu-frame```을 환경변수 ```$WAYLAND_DISPLAY```를 넘겨줘서 실행한다는 의미입니다. 해당 명령어로 새로운 시뮬레이터 창이 생성되고 ```wayland-99``` 소캣을 생성한 것을 볼 수 있을 겁니다.

저는 이것을 electron-quick-start 프로그램을 약간 수정한 프로그램으로 실험해보겠습니다. 다음 명령어로 해당 프로그램을 실행해봅시다.
```
$ git clone https://github.com/onting/electron-ubucon-asia.git
$ cd electron-ubucon-asia
$ npm install
$ npm start
```
![elctron-quick-start](./electron-quick-start.png)
위와 같은 프로그램을 이제 ```ubuntu-frame```에 다음과 같은 명령어로 붙입니다.
```
export WAYLAND_DISPLAY=wayland-99
npm start -- --enable-features=UseOzonePlatform --ozone-platform=wayland
```
그러면 다음과 같이 스크린 시뮬레이터에 앱이 붙은 것을 볼 수 있을 겁니다.
![electron app attach](./electron-attach.png)

다음은 이 앱을 Ubuntu Frame을 위해서 snap 앱으로 패키징하는 과정입니다.

## Electron 앱 패키징
이제 공식 문서의 [Electron 앱 패키징 하기](https://mir-server.io/docs/packaging-a-flutter-application-as-an-iot-gui)를 따라해보겠습니다. 이 과정에서는 Electron 위에서 다루었던 앱을 [```iot-example-graphical-snap```](https://github.com/MirServer/iot-example-graphical-snap) 코드를 활용해서 Ubuntu Frame을 위한 snap 패키징을 하는 것을 다룹니다.

우선 ```iot-example-graphical-snap```을 다운로드 받고 사용 가능한 예시들을 보겠습니다.
```
$ git clone https://github.com/MirServer/iot-example-graphical-snap.git
$ cd iot-example-graphical-snap
$ git branch -a
* master
remotes/origin/GTK3-mastermind
remotes/origin/HEAD -> origin/master
remotes/origin/Qt5-bomber
remotes/origin/SDL2-neverputt
remotes/origin/master
```
위와 같이 브렌치들을 살펴보면 GTK3, SDL2-neverputt 등 다양한 예시를 제공한다는 것을 알 수 있습니다. 다음 명령어로 기본 Electron 패키징 예시를 실행해보겠습니다.
```
$ git checkout Electron-quick-start
$ snapcraft
$ ls
bors.toml  iot-example-graphical-snap_0+git.f5b57f7_amd64.snap  README.md  wayland-launch
dbus       LICENCE                                              snap       wrapper
```
위와 같이 ```iot-example-graphical-snap_*_*_.snap``` snap 패키지 파일이 생성된 것을 확인할 수 있습니다.

이제 ```snap/snapcraft.yaml``` 파일에서 레시피가 어떻게 구성돼있는지 확인하고 앞서 소개드린 ```electron-ubucon-asic``` 프로그램을 패키징 하는 것으로 바꿔보겠습니다.

```yaml
...

parts:
  electron-helloworld:
    plugin: nil
    source: https://github.com/electron/electron-quick-start.git
    build-environment:
      - PATH: "$PATH:$SNAPCRAFT_PART_BUILD/node_modules/.bin"
    override-build: |
      set +u # core20 base does not allow unbound variables !
      # workaround for build.snapcraft.io builds
      # https://bugs.launchpad.net/bugs/1886861
      if [ -n "$http_proxy" ]; then
        export ELECTRON_GET_USE_PROXY=1
        export GLOBAL_AGENT_HTTP_PROXY="${http_proxy}"
        export GLOBAL_AGENT_HTTPS_PROXY="${http_proxy}"
      fi

      # Replace the default app with the Mir website
      sed --in-place "s!loadFile('index.html')!loadURL('https://mir-server.io')!" main.js

      npm install --unsafe-perm true electron-packager
      electron-packager . --overwrite --platform=linux \
          --output=release-build --prune=true
      cp -a ./electron-quick-start-linux-* $SNAPCRAFT_PART_INSTALL/electron-helloworld
      chmod a+rx $SNAPCRAFT_PART_INSTALL/electron-helloworld
    stage-packages:
      - libnspr4
      - libnss3
      - libatk-bridge2.0-0
      - libcups2
      - libgtk-3-0
      - libasound2
    build-snaps:
      - node/16/stable

...
```
```snap/snapcraft.yaml```파일을 열어보면 다양한 속성들이 존재합니다만 편의를 위해 ```parts``` 만 살펴보겠습니다. 각 속성에 대해 자세히 알기 위해선 [snapcraft.yaml 만들기](https://snapcraft.io/docs/creating-snapcraft-yaml) 가이드를 참고하십시오.
다시 돌아와, 우리가 바꿀 부분은 ```parts``` 속성의 ```electron-helloworld``` 부분입니다. ```parts```는 패키지를 구성하는 요소들을 의미하는데 앱, 라이브러리, 정적 에셋 등 다양한 요소들이 part로 기술 될 수 있고 part를 위한 빌드, 실행 환경, 의존성 등을 포함할 수 있습니다.
기본적으로 snap 패키지는 가져오는 소스코드로 부터 자동적으로 빌드를 하려 시도하고 npm, cmake, autotools 등의 빌드 시스템 통합을 위해서 ```plugin``` 속성이 사용 될 수 있지만 위와 코드와 같이 ```override-build```를 통해서 직접 빌드 과정을 기술할 수 있습니다. 또한 ```stage-package```에 배포에 포함할 패키지를 기술해 의존성 패키지나 원격 접속을 위한 툴 등을 포함을 수 있습니다.

다음과 같이 레시피를 수정합니다.
1. 현재 ```override-build```는  ```sed --in-place "s!loadFile('index.html')!loadURL('https://mir-server.io')!" main.js```와 같이 ```index.html```을 렌더링하는 대신 mir-server 홈페이지를 불러오도록 바꾸는 부분이 있는데 앱 변경 반영을 위해서 지워줍니다.
2. ```source``` 부분에 ```https://github.com/onting/electron-ubucon-asia.git```을 넣어줍니다.
3. ```stage-packages```에 현재 패키지에 한글 폰트를 포함시키기 위해서 나눔폰트를 추가해줍니다. 패키지명은 현재 시스템이 apt인지 yum인지에 따라서 패키지명을 적어주면 되고 우분투 기준으로는 ```fonts-nanum```, ```fonts-nanum-coding```, ```fonts-nanum-extra```를 추가하면 됩니다.

그리고 다음과 같이 확인해봅니다.
```
$ rm *.snap
$ snapcraft
$ snap install --dangerous *.snap
$ snap run iot-example-graphical-snap
```
이는 다음과 같은 오류를 발생할 수 있습니다.
```
WARNING: wayland interface not connected! Please run: /snap/iot-example-graphical-snap/current/bin/setup.sh
[231190:0624/162014.069287:ERROR:wayland_connection.cc(209)] Failed to connect to Wayland display
[231190:0624/162014.069317:ERROR:ozone_platform_wayland.cc(226)] Failed to initialize Wayland platform
[231190:0624/162014.069322:ERROR:env.cc(226)] The platform failed to initialize.  Exiting.
The futex facility returned an unexpected error code.
```
이는 snap confinement에 의한 오류로 앱이 실행되는데 필요한 인터페이스들이 연결되지 않아서 발생합니다. 이를 해결하기 위한 스크립드 또한 제공되기에 다음과 같이 실행해 해결합니다.
```
$ /snap/iot-example-graphical-snap/current/bin/setup.sh
$ snap run iot-example-graphical-snap
```
이제 다음과 같은 창이 뜰 겁니다.
![snapped electron app](./snapped-electron-app.png)
위 화면이 배포됐을 때 화면이라 보면 됩니다.

## Ubuntu Core로 실습하기
이제 Ubuntu Core 시스템 위에 전 단계에서 패키징한 패키지를 설치해 실행하는 것을 해보겠습니다.
이 과정을 위해서는 [Ubuntu One 계정](https://login.launchpad.net/)에 ssh 공개키가 등록되어 있어야 합니다.
키 등록을 위한 과정은 launchpad의 [ssh 키 쌍 생성](https://help.launchpad.net/YourAccount/CreatingAnSSHKeyPair) 가이드를 참고하십시오.

우선 패키지를 해당 기기로 쉽게 옮기고 설치하기 위해서 다음 명령어로 Snap Store에서 앱을 빌드합니다.
```
$ snapcraft remote-build
$ ls *.snap
iot-example-graphical-snap_0+git.f5b57f7-dirty_amd64.snap  iot-example-graphical-snap_0+git.f5b57f7-dirty_armhf.snap
iot-example-graphical-snap_0+git.f5b57f7-dirty_arm64.snap
```
이 명령어는 Snap Store의 인프라로 해당 레시피에 기술되어있는 모든 아키텍쳐로 빌드를 해줍니다. 다만 서버로 전송되는 모든 데이터는 공개될 수 있음을 주의해야 합니다.

다음으로 Ubuntu Core 이미지를 실행하는데 편의를 위해 이 글에선 QEMU로 진행하겠습니다. 자세한 내용을 위해선 [가상머신에 Ubuntu Frame 실행하기](https://mir-server.io/docs/run-ubuntu-frame-in-a-virtual-machine) 가이드를 참고하십시오.
아래와 같이 QEMU를 설치합니다.
```
$ sudo snap install qemu-virgil
$ sudo snap install connect qemu-virgil:kvm
$ qemu-virgil --version
```
이후 아래와 같이 Ubuntu Core 이미지를 다운로드 받고 실행합니다.
```
$ wget https://cdimage.ubuntu.com/ubuntu-core/20/stable/current/ubuntu-core-20-amd64.img.xz
$ unxz https://cdimage.ubuntu.com/ubuntu-core/20/stable/current/ubuntu-core-20-amd64.img.xz
$ qemu-virgil -enable-kvm -m 512 -device virtio-vga,virgl=on\
 -display sdl,gl=on -netdev user,id=ethernet.0,hostfwd=tcp::10022-:22\
 -device rtl8139,netdev=ethernet.0\
 -drive file=/snap/qemu-virgil/current/usr/share/qemu/edk2-x86_64-code.fd,if=pflash,format=raw,unit=0,readonly=on\
 ./ubuntu-core-20-amd64.img
```
창이 실행 된 후 Ubuntu One 계정을 넣어서 초기화 합니다.
이후 다음 명령어로 패키지 파일을 옮기고 접속해 설치합니다.
```
$ scp -P 10022 *_amd64.snap <your-user>@localhost:~
$ ssh -p 10022 <your‑user>@localhost
$ snap install ubuntu-frame
$ snap install --dangerous *.snap
```

## 회고와 정리
여기까지가 작년 워크숍에서 다룬 내용입니다. 개인적으로 지난 행사는 평소 개인적 관심으로 조금씩 살펴본 Ubuntu Frame 내용을 정리하는 계기가 됐습니다. 행사 준비를 위해서 Ubuntu Frame 튜토리얼을 심화 단계까지 따라해보면서 Ubuntu Frame의 구조를 더 잘 이해할 수 있었고, snap packaging이 실제로 어떻게 이루어지는지를 실제로 볼 수 있었습니다. Ubuntu Core의 장점과 한계점 또한 정리해볼 수 있었습니다. 캐노니컬사의 임베디드 포트폴리오 전반을 살펴보면서 저는 해당 전략이 보안성, 재개발 비용, 유지보수성 면에서 우수해서 넓은 범위로 산업에서 적용될 여지가 충분하다고 느꼈습니다. 그러나 Ubuntu Core 근본적으로 snap 버그 등의 이유로 안정성 등이 현재 엄격한 시험대에 올라가 평가 받고 있는 상태라고 생각합니다. 그래서 가까운 미래의 사용자 경험이 평판에 매우 중요하다고 보여집니다. 덧붙여 Ubuntu Frame 또한 실제로 써보면 개념 만큼 개발이 간단하지는 않고 추가적으로 알아야 할 것들이 꽤나 있다는 것을 튜토리얼을 해보면서 느꼈습니다. 저는 앞으로 Ubuntu Core가 신뢰도를 위해서 어떤 행보를 보일지 또 한국 임베디드 산업에도 이런 기술이 정착할 수 있을지 흥미롭습니다.