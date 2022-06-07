
---
layout: post
date: 2022-04-22 02:00:00 +0900
title: "우분투 22.04 LTS Jammy Jellyfish 릴리즈 노트"
tags:
 - release-notes
authors:
    - name: 우분투 한국어 번역팀
      bio: .
      email: ubuntu-l10n-ko@lists.ubuntu.com
      launchpad: ubuntu-l10n-ko
      github: ubuntu-kr
      profile: https://launchpad.net/@@/team-logo
---
# Jammy Jellyfish 릴리즈 노트

# 서문

**우분투 22.04 LTS** (Jammy Jellyfish)에 대한 본 릴리즈 노트에서는 릴리즈에 대한 개요와 우분투 및 flavour에서의 알려진 문제들의 문서를 제공합니다.

## 지원 기간

우분투 데스크톱, 우분투 서버, 우분투 클라우드, 우분투 Core의 유지보수 업데이트는 [2027 4월](https://wiki.ubuntu.com/Releases)까지 5년 동안 제공되고, 나머지 모든 flavour에 대해서는 3년간 지원됩니다. 추가적 보안 업데이트는 [ESM (Extended Security Maintenance).](https://ubuntu.com/security/esm)를 통해 지원됩니다.

# 우분투 22.04 LTS 받기

## 우분투 22.04 다운로드

가까운 지역에서 이미지를 다운로드 할 수 있습니다.

ISO나 플래시 가능한 이미지 다운로드:

  * [64 비트 x86 (AMD64) 우분투 데스크톱 및 서버](http://releases.ubuntu.com/22.04/)
  * [종종 다운로드 되는 우분투 이미지](http://cdimage.ubuntu.com/ubuntu/releases/22.04/release/)
  * [우분투 클라우드 이미지](http://cloud-images.ubuntu.com/daily/server/jammy/current/)
  * [루분투](http://cdimage.ubuntu.com/lubuntu/releases/22.04/release/)
  * [쿠분투](http://cdimage.ubuntu.com/kubuntu/releases/22.04/release/)
  * [우분투 Budgie](http://cdimage.ubuntu.com/ubuntu-budgie/releases/22.04/release/)
  * [우분투 Kylin](http://cdimage.ubuntu.com/ubuntukylin/releases/22.04/release/)
  * [우분투 MATE](http://cdimage.ubuntu.com/ubuntu-mate/releases/22.04/release/)
  * [우분투 스튜디오](http://cdimage.ubuntu.com/ubuntustudio/releases/22.04/release/)
  * [주분투](http://cdimage.ubuntu.com/xubuntu/releases/22.04/release/)

# 우분투 21.10에서 업그레이드

**현재 22.04 LTS로의 업그레이드는 활성화 되어 있지 않지만 (snap, update-notifier의 버그로 인함) 수일 이내에 활성화 될 예정입니다.**

데스크톱 시스템에서 업그레이드 하려면:

  * 시스템 설정에서 "소프트웨어 & 업데이트"를 여십시오.
  * 세번째 탭인 "업데이트" 탭을 선택하시오.
  * "새 우분투 버전 알려주기" 드롭다운 메뉴를 "모든 새 버전"으로 바꾸십시오.
  * <kbd>Alt</kbd>+ <kbd>F2</kbd> 키를 누르고 명령 실행에 `update-manager -c`를 입력하십시오.
    * 업데이트 관리자가 열리고 다음과 같이 말할 겁니다: **새 버전의 우분투를 사용할 수 있습니다. 업그레이드 하시겠습니까?"**
  * 만약 되지 않으면 `/usr/lib/ubuntu-release-upgrader/check-new-release-gtk`로도 할 수 있습니다.
  * 업그레이드를 클릭하고 화면의 지시를 따르십시오. 

서버 시스템에서 업그레이드 하려면:

  * `/etc/update-manager/release-upgrades`에서 `Prompt`에 해당하는 줄이 normal으로 설정 되어있는지 확인 하십시오.
  * 업그레이드 도구를 `sudo do-release-upgrade` 명령어로 실행하시오.
  * 화면의 지시를 따르십시오. 

서버 업그레이드에서는 GNU Screen을 사용하고 연결이 끊겼을 때 자동적으로 다시 콘솔에 붙게 된다는 점에 유의 바랍니다.

우분투 데스크톱 및 우분투 서버의 오프라인 업그레이드 선택지는 없습니다. 공식 미러, 혹은 로컬에서 접근 가능한 미러와 연결 가능한지 미리 확인하고 위의 지시들을 따르길 바랍니다.

# 22.04 LTS의 새로운 기능

## 업데이트 된 페키지

## 리눅스 커널 :penguin:

우분투 22.04 LTS는 제품에 따른 다수의 최적화된 커널을 제공합니다:

* 우분투 데스크톱에서 인증된 최신 세대 장치 (`linux-oem-22.04`)에 대해서 자동으로 [v5.17](https://kernelnewbies.org/Linux_5.17) 커널이 선택 됩니다.

* 우분투 데스크톱이 다른 세대의 하드웨어에서 롤링 HWE 커널 (`linux-hwe-22.04`)을 사용합니다. 22.04와 22.04.1 포인트 릴리즈에 대한 롤링 HWE 커널은  [v5.15](https://kernelnewbies.org/Linux_5.15) 커널에 기반합니다
* 우분투 서버는 기본적으로 비롤링 LTS 커널인 v5.15 (`linux-generic`)에 맞춰집니다.
* 우분투 클라우드와 디바이스에서 파트너사와의 협력으로 최적화된 커널을 사용합니다 (추가 백포트와 기능이 있는 v5.15+)


추가적 최적화와 인증된 커널 flavour는 적기에 우분투 22.04 LTS에서 이용 가능할 예정입니다.

### NVIDIA 드라이버

우분투 22.04 LTS에 ARM64 NVIDIA 드라이버의 linux-restricted-modules가 현존 x86_64에 대해 추가 되었습니다. 이제 ARM64 사용자는 NVIDIA 드라이버의 설치 및 설정을 위해서 `ubuntu-drivers` 도구를 우분투 아카이브에서 사용 가능합니다.

### UDP로의 NFS 마운트 비활성화
우분투 20.10 ("Groovy Gorilla")부터 커널 옵션 `CONFIG_NFS_DISABLE_UDP_SUPPORT=y`가 설정 됐고 이는 NFS 버전에 상관없이 UDP가 NFS 마운트의 전송 프로토콜로 사용되는 것을 비활성화 합니다.

실제로 `udp`를 사용하려고 하면 다음과 같은 오류를 얻을 겁니다:
```
$ sudo mount f1:/storage /mnt -o udp
mount.nfs: an incorrect mount option was specified
```


## 툴체인 업그레이드 :hammer_and_wrench:

GCC가 11.2.0로, binutils가 2.38로, glibc가 2.35로 업데이트 됐습니다. Python :snake:은 이제 3.10.4에서, Perl :camel:은 5.34.0에서 제공됩니다. 이제 LLVM은 기본적으로 14 버전에 맞춰집니다. golang은 기본적으로 1.18.x 버전에 맞춰집니다. rustc는 기본적으로 1.58 버전에 맞춰집니다.

OpenJDK 11에 더해 이제 OpenJDK 18도 제공됩니다 (그러나 패키지 빌드에는 사용되지 않습니다).

Ruby :gem:가 v2.7.4에서 v3.0로 업데이트 됐습니다.

## systemd v249.11
init 시스템이 systemd v249로 업데이트 되었고 LTS를 위해 견고한 .11 패치 레벨이 사용됩니다. 각각 개별 기능에 대한 정보는 업스트림 [변경 로그](https://github.com/systemd/systemd/releases/tag/v249)를 참고 하길 바랍니다. 유저 스페이스 OODM 서비스를 활성화 했고 이는 "우분투 데스크톱" flavour에서 기본적으로 `systemd-oodm` 패키지를 제공하며, 이는 시스템 과부하와 자리 확보를 위한 커널의 OOM  killer의 요구를 피하기 위함입니다. OOMD 상태는 `oomctl`을 통해서 확인될 수 있습니다.

## OpenSSL 3.0

OpenSSL 라이브러리를 새로운 3.0 버전으로 업그레이드 했고 이는 라이브러리의 [마이그레이션 가이드](https://www.openssl.org/docs/manmaster/man7/migration_guide.html)에 명시 되었듯 많은 레거시 알고리즘을 비활성화 합니다. 
특히, SHA1이나 MD5를 해쉬 알고리즘을 이용한 인증들은 이제 기본 보안 수준에서 유효하지 않습니다.

업스크림 지원중단과 더불어 우분투 20.04(Focal Fossa)부터 보안 수준 2(기본값)이 1.2(포함) 미만의 (D)TLS 프로토콜을 비활성화합니다.


새로운 버전에 API 판올림이 있기 때문에 libssl1.1에 의존하는 서드파티 패키지는 오래된 ABI가 더이상 제공되지 않음으로 그대신 libssl3에 의존하도록 다시 빌드 돼야 합니다.

## 보안 향상점 :lock:

이제 nftable가 방화벽을 위한 기본 백엔드입니다. 시스템의 모든 애플리케이션은 반드시 레거시 `xtables` 혹은 새로운 `nftables` 백엔드를 사용할 건지 합의해야 합니다. [버그 1968608](https://bugs.launchpad.net/bugs/1968608)가 유용할만한 몇몇 맥락을 제공합니다. [Docker는 새로운 `nftables` 백엔드를 위해 준비 되어있지 않을 수 있습니다](https://github.com/docker-snap/docker-snap/issues/68).

이제 `ssh-rsa`가 [OpenSSH에서 기본적으로 비활성화 되었습니다](https://www.openssh.com/txt/release-8.8). 필요에 의해 선택적으로 다시 활성화 하는 방법을 알기 위해서는 [버그 1961833](https://bugs.launchpad.net/ubuntu/+source/openssh/+bug/1961833)을 보십시오. 만약 SSH를 통해 원격으로 업그레이드 할 계획이라면 업그레이드 후의 접근 유지를 보장하기 위해서 이에 의존하지 않음을 확인하길 바랍니다.

`scp`가 원격 파일 이름을 다룰 때 [scp 모드 보다는 sftp를 사용](https://www.openssh.com/txt/release-8.9)하기 위해서 [`-s` 명령줄 옵션](http://manpages.ubuntu.com/manpages/jammy/en/man1/scp.1.html)을 제공합니다. 이 새롭고 더 안전한 동작은 결국 기본 설정이 될 겁니다.

## 우분투 데스크톱

* 이제 우분투에서 [10가지의 색상 선택지를](https://discourse.ubuntu.com/t/yaru-accent-colors-are-coming-to-jammy/27200) 다크 모드와 라이트 모드로 제공합니다.
* 이제 Firefox 는 우분투에서 Snap으로만 제공됩니다. 아래와 같은 장점이 있습니다
  * Mozilla에서 직접 유지보수 
  * 전체 우분투 LTS 수명주기 동안 유지보수 용이성 향상
  * … 이는 최신 버전의 Firefox에 더 빠르게 접근할 수 있음을 의미합니다
  * `esr/stable`, `latest/candidate`, `latest/beta`및 `latest/edge`를 포함한 다른 종류의 Firefox 로 쉽게 변경
  * 중요한 앱인 Firefox의 보안 강화를 위한 샌드박스 처리
* 데스크톱 아이콘은 기본적으로 우측 하단에 표시되지만 설정 앱의 모양 패널에 추가된 새로운 설정으로 변경할 수 있습니다.
* 독의 모양과 동작을 바꿀 수 있는 새로운 설정도 있습니다
* 독의 디바이스 및 파일 관리자 연동이 향상되었습니다

### GNOME :footprints:

* GNOME을 [GNOME 41](https://release.gnome.org/41/)및 [GNOME 42](https://release.gnome.org/42/)의 새로운 기능과 수정사항을 포함하도록 업데이트했습니다
* 여러 프로그램은 대부분 libadwaita를 피하여 LTS 데스크톱에 대해 더 검증된 경험을 제공하기 위해 여전히 41 버전대로 유지됩니다.
* 데스크톱 전반에 걸친 [다크 스타일](https://discourse.ubuntu.com/t/ubuntu-22-04-lts-dark-style-changes/27206) 설정을 새로 지원합니다.
* GNOME 셸과 Mutter에 트리플 버퍼링 패치를 비롯한 수많은 성능 개선이 있습니다.
* 이제 Nvidia 그래픽 카드를 쓰지 않는 대부분의 시스템의 기본 세션은 Wayland 세션입니다. 비-Wayland 세션이 필요하신 경우, 로그인 화면에서 이름을 선택한 후 우측 하단의 톱니바퀴 아이콘을 클릭하여 *우분투 (Xorg)* 를 선택하실 수 있습니다.
* 이제 사생활 보호 화면 지원이 있는 하드웨어를 지원합니다
* 데스크톱 원격 공유에 RDP를 사용하실 수 있습니다. 기존의 VNC도 여전히 있으나, 더 나은 보안, 사생활 보호 및 성능을 위해 RDP를 사용 하시는 것을 강력히 권장합니다. 기존에 VNC를 사용해 오셨다면, 설정 앱 에서 데스크톱 공유를 수동으로 다시 켜고 새로 로그인 정보를 얻으셔야 할 겁니다. 

### 업데이트된 프로그램

* Firefox 99 :fire::fox_face:
* [LibreOffice 7.3](https://wiki.documentfoundation.org/ReleaseNotes/7.3) :books:
* Thunderbird 91 :cloud_with_lightning::bird:

### 업데이트된 하위 시스템

* [BlueZ 5.63](https://git.kernel.org/pub/scm/bluetooth/bluez.git/tree/ChangeLog?id=5.63)
* [CUPS 2.4](https://github.com/OpenPrinting/cups/blob/v2.4.1/CHANGES.md)
* [NetworkManager 1.36](https://gitlab.freedesktop.org/NetworkManager/NetworkManager/-/blob/nm-1-36/NEWS)
* [Mesa 22](https://docs.mesa3d.org/relnotes/22.0.0.html)
* [Poppler 22.02](https://gitlab.freedesktop.org/poppler/poppler/-/blob/poppler-22.02.0/NEWS)
* [PulseAudio 16](https://www.freedesktop.org/wiki/Software/PulseAudio/Notes/16.0/)
* [xdg-desktop-portal 1.14](https://github.com/flatpak/xdg-desktop-portal/blob/1.14.2/NEWS)

## 우분투 서버

#### 우분투 HA/클러스터링

##### Corosync

3.16 버전으로 업데이트 되면서 포함된 몇 가지 새로운 기능:

- 실행중(runtime)인 상태에서 암호화(crypto)와 관련된 설정을 변경 할 수 있습니다. 해당 변경사항에서 암호화 적용 또는 해제, *crypto_cipher* 및 *crypto_hash* 변경, 암호화 키 변경이 포함됩니다.
- 기본 토큰(token)의 시간 제한이 1초에서 3초로 변경되었습니다.
- *corosync -v* 명령어를 사용하여 coresync.conf에서 사용할 있는 암호화 및 압축 모델의 목록을 가져올 수 있습니다.
- Cgroup v2를 지원합니다.

변경 사항과 관련된 전체 목록은 [업스트림 릴리즈 노트](https://github.com/corosync/corosync/releases)를 참고하십시오.

##### Pacemaker

2.1.2 버전으로 업데이트 되면서 포함된 몇 가지 새로운 기능:

- *priority-fencing-delay*가 새롭게 추가되었습니다. 실행 중인 상태의 리소스의 우선 순위에서 선택적으로 노드의 우선 순위를 도출 할 수 있습니다.
- 승격된 자원(promoted resources)에 대한 *on-fail=demot*e 및 *no-quorum-policy=demote* 복구 정책을 추가하였습니다.
- OCF Resource Agent API 1.1 표준을 지원합니다.
- *crm_mon* 및 *crm_resource*가 많은 개선이 되었습니다.

전체 변경 사항 목록은 [업스트림 릴리즈 노트](https://github.com/ClusterLabs/pacemaker/releases)를 참고하십시오.

우분투 Focal 20.04 버전과 비교해서 주목할만한 차이점은 기본 구성 파일이 노드 이름을 node1로 정의하지 않고 uname -n의 출력을 기본 노드 이름으로 사용합니다.

##### Resource agents

4.7.0 버전으로 업데이트 되었습니다. 우분투 Focal 20.04 이후 변경 사항 목록은 [여기](https://github.com/ClusterLabs/resource-agents/blob/main/ChangeLog#L95-L219)에서 참고하십시오.

에이전트(agents)는 이제 resource-agents-base 및 resource-agents-extra의 두 패키지로 분리됩니다. resource-agents-base 패키지는 우분투 서버 팀에서 선별한 에이전트가 포함되어 있습니다. 지속적 통합 시스템에서 자동화된 테스트가 진행되어 해당 에이전트의 품질을 보장합니다. resource-agents 패키지는 이제 resource-agents-base와 resource-agents-extra에 관련된 메타패키지입니다. resource-agents 패키지는 향후 릴리즈에서 제거될 예정입니다. resource-agents에 의존하지 않는 것이 좋습니다.

##### Fence agents

4.7.1 버전으로 업데이트 되었습니다.

에이전트는 이제 두 개의 패키지(fence-agents-base 및 fence-agents-extra)로 분리됩니다. fence-agents-base 패키지에는 우분투 서버 팀에서 선별한 에이전트가 포함되어 있습니다. 지속적인 통합 시스템에서 자동화된 테스트가 진행되어 해당 에이전트의 품질을 보장합니다. fence-agents 패키지는 이제 fence-agents-base 및 fence-agents-extra에 관련된 메타 패키지 입니다. fence-agents는 제거될 예정입니다. fence-agents에 의존하지 않는 것이 좋습니다.

#### 컨테이너 런타임

##### containerd

1.5.9 버전으로 업데이트 되었습니다. 몇 가지 흥미로운 변경 사항은 다음과 같습니다.

* descriptors에서 non-https가 아닌 url을 처리하도록 pull을 업데이트를 하였습니다.
* arm64용 apparmor 파서를 설치하고 seccomp를 2.5.1로 업데이트 하였습니다.
* *clone3* syscall에 대한 지원을 추가하여 seccomp가 활성화된 경우 발생하는 특정 이미지의 문제를 수정하였습니다.
* CRI 컨테이너 생성에 이미지 구성 레이블 추가하였습니다.

전체 변경 사항 목록은 [업스트림 릴리즈 페이지](https://github.com/containerd/containerd/releases)를 참고하십시오.

##### runc

1.1.0 버전으로 업데이트 되었습니다. [업스트림 릴리즈 페이지](https://github.com/opencontainers/runc/releases)에서 찾을 수 있는 많은 개선 사항 및 버그 수정 사항이 있습니다. 업그레이드에 영향을 줄 수 있는 일부 지원 중단 및 제거는 다음과 같습니다.

지원 중단

* runc run/start는 새 컨테이너 cgroup이 비어 있지 않거나 고정된 경우 경고합니다. 이 경고는 runc 1.2에서 오류가 됩니다.

제거

* cgroup.GetHugePageSizes는 완전히 제거되었으며 더 효율적인 cgroup.HugePageSizes로 대체되었습니다.
* intelrdt.GetIntelRdtPath가 제거되었습니다. intelrdt 루트를 얻기 위해 이 기능을 사용하던 사용자는 대신 새로운 intelrdt.Root를 사용해야 합니다.

#### Ruby 3.0

기본 Ruby 인터프리터는 3.0이며 성능, 동시성 및 타입 관련 기능이 업데이트 되었습니다. 멋진 기능과 개선 사항에 대한 광범위한 소개를 보려면 [Ruby 3.0 Release Announcement](https://www.ruby-lang.org/en/news/2020/12/25/ruby-3-0-0-released/)를 참조하십시오.

* 이전 우분투 릴리즈(우분투 Focal 20.04 이상)를 사용했던 사용자는 Ruby 2.7에서 3.0으로 변경됩니다. 이 경우 [Ruby 2.7 Release Announcement](https://www.ruby-lang.org/en/news/2019/12/25/ruby-2-7-0-released/)도 유용할 수 있습니다. 명심해야 할 중요한 점은 다음 라이브러리가 Ruby에서 더 이상 번들로 제공되지 않는다는 것입니다.

* sdbm
* webrick
* net-telnet
* xmlrpc

이러한 라이브러리가 필요한 경우 별도로 설치하십시오.

애플리케이션을 Ruby 3.0으로 마이그레이션할 때 Ruby 3.0 Release Announcement의 2.7 이후 주요 변경 사항(Other notable changes since 2.7) 부분을 주의해서 참고하십시오.

#### PHP는 8.1.2 버전으로 기본 설정됩니다.

PHP 8.1에는 새로운 기능이 포함되어 있습니다. 열거형을 사용하면 const 사용과 같이 특정 집합으로 제한된 사용자 정의 타입을 정의할 수 있고 더 나은 타입 검사가 가능합니다. 읽기 전용 속성은 초기화 후에 값이 변경되는 것을 방지합니다. 일급 호출 가능 구문(first-class callable syntax)을 사용하면 PHP 코드에서 정적 분석을 더 쉽게 수행할 수 있으며 클로저와 같은 익명 함수를 생성할 수 있습니다. Intersection 타입을 사용하면 여러 타입 제약 조건을 충족해야 하는 함수 매개변수를 지정할 수 있습니다. Union 타입이 A|B 타입 관계를 표현하는 것처럼 Intersection 타입은 A&B 타입을 표현할 수 있습니다. fibers, final class constraints, never return values, 명시적 8진수 표기법, 새로운 inside initializers 사용 등과 같은 다양한 새로운 기능을 통해 더 강력하고 표현력 있는 PHP 코드를 작성할 수 있습니다.

PHP 8.1은 PHP 8.0과 비교하여 Symfony 데모 테스트에서 23%, WordPress에서 3.5% 속도 향상으로 성능에 상당한 관심을 받았습니다. PHP 8.1에 포함된 성능 관련 기능 중 inheritance cache, fast class name resolution, timelib, ext/date, SPL file-system interators, serialize/unserialize 및 많이 사용되는 여러 내부 기능에 대한 다양한 최적화가 포함됩니다.

PHP 7.4 사용자는 버전 PHP 8에서 [사용되지 않는 여러 기능(number of deprecated functionalities)](https://wiki.php.net/rfc/deprecations_php_7_4)을 참고하여 업그레이드할 때 응용 프로그램을 적절하게 변경할 수 있도록 준비해야 합니다.

#### OpenLDAP 2.5.x series

우분투 Focal 20.04에서 우분투 Jammy 22.04으로 업그레이드 하는 경우 새로운 OpenLDAP 2.5.11 버전을 사용하게 됩니다. 해당 버전에선 몇 가지 변경 사항, 새로운 기능의 추가 그리고 지원 중단/제거된 기능 등이 있습니다. 업그레이드 프로세스 중에 알아야 할 사항의 목록은 다음과 같습니다.

* The shell (`slapd-shell`), BDB 및 HDB 백엔드가 모두 제거되었습니다.
* `ppolicy` 모듈은 자체 내장 스키마를 제공합니다. 외부 `ppolicy` 스키마는 제거되었습니다.
* `nssov` 모듈이 제거되었습니다.

특정 상황에서, 설치 후 스크립트가 현재 설치를 새 형식으로 성공적으로 마이그레이션하지 **못할** 수도 있습니다(예: BDB/HDB와 같은 이전 백엔드를 사용하는 경우). 이런 일이 발생하면 실패에 대한 알림이 표시되고 `slapd` 서버가 (재)시작되지 **않습니다**. 데이터를 마이그레이션하고 서비스를 시작하기 위해 수동 조치를 취해야 합니다. [README.Debian ](https://git.launchpad.net/ubuntu/+source/openldap/tree/debian/slapd.README.Debian?h=ubuntu/impish-devel) 파일(`/usr/share/doc/slapd/` 아래)를 참조하십시오.

#### BIND 9.18

BIND 9가 [version 9.18.1](https://bind9.readthedocs.io/en/v9_18_1/notes.html)로 업데이트되었습니다. 새 버전에는 다음이 포함됩니다.

- DNS over TLS(DoT) 및 DNS over HTTPS(DoH)를 지원합니다.
- `named`는 수신 및 발신 영역 전송(zone transfers)에 대해 TLS(XFR-over-TLS, XoT)를 통한 영역 전송을 지원합니다.
- `dig`는 이제 DoT 쿼리를 보낼 수 있습니다.

이전 버전에서 업그레이드하는 사용자는 다음 변경 사항을 알고 있어야 합니다.

- 데몬(daemon) 및 관리 프로그램이 아닌 바이너리 파일은 `/usr/sbin`에서 `/usr/bin`으로 이동되었습니다.
- map zone 파일 형식에 대한 지원이 제거되었습니다. 이러한 zone 파일 형식은 업그레이드 전에 원시 형식(raw format)을 사용하도록 zone 파일을 변환하고 그에 따라 구성을 수정해야 합니다.
- 사용되지 않고 작동하지 않는 여러 설정 옵션이 제거되었으며, 해당 설정 옵션이 존재할 때 설정 오류로 처리됩니다. 이러한 설정의 전체 목록은 [업스트림 릴리즈 노트](https://bind9.readthedocs.io/en/v9_18_1/notes.html#removed-features)에서 확인할 수 있습니다.

#### Apache 2.4.48 버전에서 2.4.52 버전으로 업데이트

 - OpenSSL에선 OpenSSL v3를 지원하도록 개선되었으며, mod_ssl 또한 외부 커넥션 (outgoing connection) 동작, 이전 버전과의 호환성, 그리고 wireshark 로깅에 대한 다양한 개선 사항이 지원되었습니다.
 - mod_md는 기타 여러 개선 및 수정사항과 함께 ACME 외부 계정 바인딩(EAB)에 대한 지원을 추가합니다.
 - 개선된 hostname과 UDS URI 검사 및 처리, 상태코드 응답 등을 포함한 수많은 수정사항이 있습니다.

#### PostgreSQL 14

PostgreSQL이 버전 14.2로 업데이트되었습니다.

이 업데이트는 다음과 같이 많은 새로운 기능과 개선사항이 포함되어 있습니다.

- 이제 저장 프로시저에서 OUT 파라미터를 통해 데이터를 반환할 수 있습니다.
- 공통 테이블 표현식에 대한 SQL 표준 SEARCH 및 CYCLE 옵션이 구현되었습니다.
- 첨자는 배열 뿐 아니라 유용한 표기법이 되는 모든 데이터 유형에 적용될 수 있습니다. 이번 릴리즈에서는 jsonb 및 hstore 유형에 첨자 연산자가 추가되었습니다.
- 다중 범위를 추가함으로써 범위 유형이 확장되었으므로 비연속 데이터 범위를 표현을 할 수 있습니다.
- 병렬 쿼리, 동시 작업이 많은 워크로드, 분할된 테이블, 논리적 복제 및 베큠(Vacuum)에 대한 다양한 성능이 향상되었습니다.
- B-트리 인덱스 업데이트는 보다 효율적으로 관리하여 인덱스 팽창(index bloating)을 줄입니다.
- 베큠(VACUUM)은 데이터베이스가 트랜잭션 ID 랩어라운드 조건에 도달하기 시작할 때, 자동으로 더 적극적으로 작동하며 불필요한 정리를 건너뜁니다.
- 표현식에 대해 확장된 통계를 수집할 수 있으므로 복잡한 쿼리에 대해 더 나은 쿼리 플랜 결과를 얻을 수 있습니다.
- libpq는 다수의 쿼리와 결과를 보내고 받을 때, 지연시간이 긴 조건에서 속도 향상을 할 수 있도록 다수 쿼리가 가능한 파이프라인 모드를 지원합니다.


이런 사항들과 버그 수정을 비롯한 장문의 추가 개선사항들은 릴리즈 노트 [v14](https://www.postgresql.org/docs/14/release-14.html),
[v14.1](https://www.postgresql.org/docs/release/14.1/), 그리고 [v14.2](https://www.postgresql.org/docs/release/14.2/)에서 찾을 수 있습니다.

#### Django 3.2.12

Django는 이전 LTS 2.2 버전에서 새로운 LTS 3.2 버전으로 업데이트되었습니다.

해당 업데이트는 다음과 같이 새로운 기능들과 버그 수정이 포함되어 있습니다.

- 자동 AppConfig 탐색
- 자동 생성된 기본 키의 맞춤형 타입
- 함수형 인덱스
- 비동기식 뷰 및 미들웨어 지원
- 지원되는 모든 데이터베이스 백엔드에 대한 JSONField
- 그 외 다양한 주요 기능과 부가 기능에 대한 자세한 내용은 [릴리즈 노트](https://docs.djangoproject.com/en/4.0/releases/3.2/)를 참조하세요

이전 버전에서 업그레이드하는 사용자는 다음과 같이 이전 버전과의 비호환성을 인지하고 있어야 합니다.

변경사항은 다음과 같습니다.
- 데이터베이스 백엔드 API
- django.contrib.admin
- AbstractUser.first_name max_length - 150으로 변경
- 기본 키에 대한 기본값을 제공할 때 Model.save()
- 다양한 부가 모듈 변경을 포함


추가적인 정보로, 이전 v2.2 LTS에서 우분투 22.04의 v3.2 LTS로 업데이트 된 시점부터는 [3.2](https://docs.djangoproject.com/en/4.0/)의 Django 프로젝트 릴리즈 노트뿐 아니라, [3.1](https://docs.djangoproject.com/en/4.0/releases/3.1) 및 [3.0](https://docs.djangoproject.com/en/4.0/releases/3.0)과 3.2.12까지 포함된 다양한 부가 릴리즈까지 포함된 내용을 확인하십시오.


#### MySQL 8.0

MySQL은 Focal Fossa와 Impish Indri와 같이 Jammy Jellyfish에서 8.0.28 버전으로 업데이트 되었습니다. 
다음과 같은 새로운 기능이 포함되어 있습니다 :

- audit_log_disable 시스템
- 데이터 타입 업데이트
- CPU_TIME 문 메트릭

자세한 내용은 [8.0.28 업스트림 릴리즈 정보](https://dev.mysql.com/doc/relnotes/mysql/8.0/en/news-8-0-28.html) 를 참조하십시오.


#### NFS server
NFS 서버 및 클라이언트 패키지가 마침내 최신 업스트림 버전으로 업데이트되었습니다.

이제 모든 NFS 서비스는 /etc/nfs.conf 및 /etc/nfs.conf.d/*.conf 에서 INI-style의 구성 파일을 읽으며,  거기서 각 Section은 NFS 서비스의 하나의 데몬 또는 측면입니다. 이전 /etc/defaults/nfs-* 구성 파일은 여전히 남아 있지만 사용되지 않습니다.

업그레이드 중에 `/etc/default/nfs-*` 파일이 변경되었음을 패키지가 감지하면 변환 스크립트가 실행됩니다. 이 스크립트는 `/usr/share/nfs-common/nfsconvert.py`이며 `/etc/default/nfs-*`에서 옵션을 읽고 `/etc/nfs.conf.d/local.conf`를 생성 합니다. 여기서 `/etc/nfs.conf`의 기본값은 무시됩니다.

어떤 이유로든 변환 스크립트가 실패하면 패키지 설치 또는 업그레이드가 실패하고 이 문제를 해결해야 합니다. 이러한 상황이 발생하면, 꼭 [Launchpad의 `nfs-utils`에 버그를 제출해 주십시오.]


`nfsconf(8)`라는 새 도구를 사용하여 /etc/nfs.conf 및 /etc/nfs.conf.d/*conf의 구성 설정을 쿼리할 수 있습니다.

#### Samba server
Samba는 4.15.5로 업데이트되었는데, 이것은 몇 가지 주목할 만한 변화를 가져왔습니다. [자세한 사항은 업스트림 릴리즈 노트](https://www.samba.org/samba/history/samba-4.15.0.html)를 확인 하십시오, 다음은 주요 내용입니다:

* 개발 SMB 버전 SMB2_22, SMB2_24 및 SMB3_10은 더 이상 인식되지 않습니다. SMB2_22 및 SMB2_24는 SMB3_00으로, SMB3_10은 SMB3_11로 대체해야 합니다.
* 서버 다중 채널 지원은 더 이상 실험적 기능이 아닙니다.
* 모든 CLI 도구의 명령줄 옵션은 이제 공통 Parser를 사용하고 있으며 과거에는 무시되었을 수 있는 알 수 없는 옵션은 이제 거부됩니다. 자세한 내용은 [업스트림 릴리즈 정보](https://www.samba.org/samba/history/samba-4.15.0.html) 를 참조하십시오.
* 많은 `/etc/syslog/syslog.conf` 매개 변수가 변경되었으며 일부는 제거되었습니다. [업스트림 릴리즈 노트](https://www.samba.org/samba/history/samba-4.15.0.html)를 확인 해 주십시오.
* CTDB 패키지가 이 우분투 22.04에 제공된 새 NFS 서버 버전과 함께 작동하도록 조정되었습니다.
* `findsmb(1)` 제거되었습니다.
* 우분투 패키징에서 [glusterfs 지원이 활성되었습니다.](https://bugs.launchpad.net/ubuntu/+source/samba/+bug/1894618). 이는 22.04 LTS 개발 주기 동안 [glusterfs가 메인으로 승격되어](https://bugs.launchpad.net/ubuntu/+source/glusterfs/+bug/1950321), glusterfs vfs 모듈을 사용할 수 있었기 때문에 가능했습니다. 이 모듈은 이제 samba-vfs-modules 패키지에 있습니다.

#### Quagga가 frr 로 대체됨

'quagga'는 우분투 22.04에서 삭제 되었으며 FRRouting 으로 대체되었습니다. ('frr', https://frrouting.org/).

#### Chrony 시간 동기화

Chrony는 버전 4.2로 업데이트 되었으며 다음을 포함합니다

 * GnuTLS에서 AES-CMAC 해쉬 함수 지원을 추가하였습니다
 * 서버의 인터리브 모드가 조금 더 안정적으로 향상되었으며 NAT 뒤에 다중 클라이언트를 지원합니다
 * Serverstats 보고서에 인터리브 모드에 대한 통계를 추가하였습니다
 * Chrony 서비스에 추가적인 하드닝(Hardening) 옵션을 추가하고 활성화 하였습니다
 * timemaster에서 생성한 구성을 읽는 것을 허용했습니다
 * 더 자세한 내용은 업스트림 [릴리즈 노트](https://chrony.tuxfamily.org/news.html)를 읽으십시오

#### 가상화

언제나 그렇듯이 릴리즈 노트에는 더 크고 주목할 만한 몇 가지 변경이력과 패키지들만 나열할 수 있으며, 그 하위에서는 더 많은 구성요소도 업데이트 되었습니다. 더 자세한 내용은 패키지들의 변경이력과 해당 구성요소의 업스트림 릴리즈를 살펴보십시오.

##### qemu

Qemu는 v6.2.0 버전으로 업데이트되어 많은 크고 작은 개선이 이루어졌습니다. 특히 이 버전에는 다음이 포함됩니다:

 * fuse3를 기반으로하여 non-root 방법으로 [이미지 추출](https://www.qemu.org/2021/08/22/fuse-blkexport/)을 합니다.
 * 저지연 오디오를 위하여 잭을 지원합니다.
 * RISC-V 지원이 대규모로 개선되었습니다.
 * AMD 가상화 확장의 에뮬레이션을 위한 많은 수정사항이 있습니다.
 * Power10 지원이 개선되었습니다.
 * microvm build를 위한 더 많은 장치 (`virtio-gpu`, `vhost-user-gpu`, `virtio-input-host`, `vhost_user_input`)
 * `qemu-block-extra`의 추가 드라이버 제거를 허용합니다.
 * 대부분의 공용 qemu 기능은 이제 별도의 모듈입니다.
 * s390x는 스토리지 키 에뮬레이션(예: 고정 주소 처리, TCG에 대한 지연 스토리지 키 활성화 등)이 개선되었습니다.
 * 더 많은 추가 개선 사항에 대한 개요는 버전 [6.1](https://wiki.qemu.org/ChangeLog/6.1) 및 [6.2](https://wiki.qemu.org/ChangeLog/6.2)에 대한 업스트림 변경 기록을 참조하십시오. 여기에는 제거되거나, 추천하지 않거나, 호환되지 않는 기능에 대한 제한된 대안 목록도 포함됩니다.

##### libvirt

libvirt 버전 v8.0.0은 일반 릴리즈에 이어 이제 Ubunt 22.04에서 아래 기능이 제공됩니다:

 * virtiofs를 위해 hotplug 및 hotunplug를 지원
 * virtio-mem `<memory/>` 모델을 도입
 * qemu: librbd 암호화를 지원
 * qemu: 새 API를 추가하여 도메인 안에 보안 실행을 삽입합니다.
 * 향상된 swtpm 통합 (더 자세히는 아래의 swtpm을 참고)
 * [우분투 21.10](https://discourse.ubuntu.com/t/impish-indri-release-notes/21951)에 있던 버전 7.6 이후의 많은 추가 개선 및 수정 사항은 업스트림 [Changelogs](https://libvirt.org/news.html)를 참조하십시오.

##### virt-manager

virt-manager의 새 버전 4.0.0은 가장 최신 업데이트(거의 1.5년 뒤 새 업스트림 버전이 없이)이고 아래 목록의 새로운 기능이 제공됩니다:

 * UI에서의 공유된 메모리 구성
 * virtiofs 파일시스템 드라이버 UI 옵션
 * UEFI가 사용될 때 기본값으로 TPM을 활성화
 * qemu x86에서 기본값으로 cpu host-passthrough를 사용
 * 대부분의 최신 배포판에서 virtio-gpu 비디오를 사용
 * 더 자세한 내용은 [뉴스 페이지](https://github.com/virt-manager/virt(-manager/blob/main/NEWS.md), 개별 커밋은 [프로젝트 웹사이트](https://github.com/virt-manager/virt-manager)에서 확인할 수 있습니다.

##### dpdk

업스트림 DPDK LTS 릴리즈의 연간 흐름에 따라 우분투 22.04에는 최신 DPDK LTS 21.11이 포함되어 있습니다.
여기에는 다양한 새로운 장치 드라이버, 수정 사항 및 최적화가 포함되어 있습니다. 꽤 거대한 [릴리즈 노트](http://doc.dpdk.org/guides/rel_notes/release_21_11.html)조차도 21.11 자체에 대한 것입니다. 우분투 21.10과 함께 제공되는 이전 DPDK LTS 20.11과 비교하여, 원한다면 [21.02](http://doc.dpdk.org/guides/rel_notes/release_21_02.html), [21.05](http://doc.dpdk.org/guides/rel_notes/release_21_05.html), [21.08](http://doc.dpdk.org/guides/rel_notes/release_21_08.html)의 DPDK 릴리즈 노트도 읽을 수 있습니다.

##### openvswitch

Ubunt 22.04에는 openswitch의 새 버전 2.17.0이 일반 업데이트로 아래 기능을 포함하여 제공됩니다:

 * 사용자 공간 데이터 경로의 사용을 용이하게 하는 다양한 기능.
 * OVN 배포에서 많이 사용되는 OVSDB 및 클러스터된 OVSDB의 성능이 향상되었습니다.
 * DPDK 21.11과의 호환성을 제공합니다(위를 참조).
 * [The OVS News](https://www.openvswitch.org/releases/NEWS-2.17.0.txt) 페이지에는 새 버전에 대한 더 자세한 내용이 있습니다.

##### swtpm

우분투 22.04에서 `swtpm` 패키지가 지원되어 이제 사용할 수 있습니다:

`swtpm`은 libtpms에 대한 다양한 프런트엔드 인터페이스를 갖춘 TPM 에뮬레이터를 제공합니다. TPM 에뮬레이터는 소켓 인터페이스(TCP/IP 및 유닉스)와 여러 네이트브 /dev/vtpm* 장치 생성을 위한 Linux CUSE 인터페이스를 제공합니다.

`swtpm`의 일반적인 사용 사례는 가상 머신 및 컨테이너 사용 사례의 가상 TPM으로 사용하는 것입니다.
이것은 TPM 지원을 필수로 간주하는 게스트 운영체제에 특히 중요합니다.

더 자세한 내용은 [업스트림 위키](https://github.com/stefanberger/swtpm/wiki)를 보십시오.

#### Squid
 
* `squid` 패키지는 GnuTLS 라이브러리에 연결됩니다. OpenSSL을 사용하길 원하신다면, 새로운 `squid-openssl` 패키지를 설치 할 수 있습니다.

#### cloud-init

cloud-init의 22.1 버전은 22.04, 21.10, 22.04 및 18.04에 릴리즈 되었습니다.

마지막 LTS 릴리즈 이후 도입된 주목할만한 기능:

 * Clouds 와 datasources
   * LXD 소켓에서 동적 인스턴스 데이터를 읽어 재부팅 시에 구성 변경 사항을 적용하는 LXD datasource가 Jammy에 추가됨 

   * 네이티브 VMWare datasource를 추가함
   * 이제 오픈스택과 ConfigDrive에서 vendor_data2 구성 재정의를 지원함 
   * Azure의 부팅 속도 개선, 네트워크 구성 유효성 검사 및 SSH 키 처리
   * GCE는 부팅 초기에 감지됨
 * Config 모듈
   * 오픈스택과 ConfigDrive용 [사용자 데이터에 의한 옵트인 핫플러그 네트워크 지원](https://cloudinit.readthedocs.io/en/latest/topics/modules.html#install-hotplug)이 추가됨

   * 나중에 부팅할 때 파일을 내보내기 위해 지연된 write_files 구성 추가
 * 사용성
   * 사용자 제공 구성의 특정 오류에 주석을 달기 위한 `#cloud-config` 사용자 데이터의 스키마 유효성 검사

#### ubuntu-advantage-tools

Jammy와 함께 ubuntu-advantage-tools 버전 27.8 이 릴리즈됨.

이번 사이클에 도입된 주목할 개선사항:
 * 서비스 제공:
     * 우분투 Pro와 우분투 Pro FIPS 이미지는 Azure, GCP 그리고 AWS에 있음
     * GCP에서 기존 VM에 Ubuntu Advantage 라이센스를 추가하는 것을 지원
     * AWS는 IPv6 IMDS를 지원함
     * CIS 벤치마크는 Ubuntu Security Guide (USG)의 일부로 패키지됨
 * 사용성
     * 'ua security-status'는 Ubuntu proper와 Extended Security Maintenance 채널에서 제공하는 사용 가능하고 적용 가능한 패키지 업데이트의 상세 보기를 제공
     * Ubuntu Advantage 토큰을 확인하고 첨부하려면 데스크톱 설치 프로그램을 활성화하십시오.
     * 대부분의 명령에 대해 기계 판독 가능한 출력 JSON/YAML 형식 지원
     * `ua attach --attach-config`를 통해 구성 가능한 자동 연결 동작

### 우분투 서버 메인 패키지 승격

우분투 서버 22.04 LTS에서 다음 소스 패키지가 메인 페키지로 승격되었습니다:
 * [wireguard](https://www.wireguard.com): 빠르고, 최신의 보안 커널 VPN 터널 패키지
 * [glusterfs](https://www.gluster.org/): 페타 바이트로 확장 가능한 클러스터 파일 시스템
 * [frr](https://www.frrouting.org/): 인터넷 라우팅 프로토콜 모음 (BGP, OSPF, IS-IS, ...)

### LXD가 새로운 5.0 LTS 버전으로 업데이트

5.0 LTS는 특히 클러스터 환경에서 작동할 때 LXD의 기능을 크게 향상시켰습니다. LXD 4.0과 비교하여 가상 머신은 이제 컨테이너와 동일한 기능을 제공하며, 많은 네트워킹 옵션, 클러스터링, 프로젝트 기능이 추가되었습니다.

주요 변경 사항은 다음과 같습니다:

* **LXD 가상 머신**은 이제 vTPM 지원과 임의 PCI 패스스루(passthrough) 지원과 함께 제공합니다. 이제 VM은 라이브 마이그레이션을 할 수 있으며, 일부 장치의 핫플러그와 추가 스토리지 옵션을 지원합니다.
* **네트워킹**에는 이제 BGP, DNS, 유동 IP, 하드웨어 가송 지원과 결합된 OVN을 지원합니다.
* **프로젝트**에 추가할 수 있는 제한을 늘렸습니다. 그리고 다양한 팀에 안전하게 접근 권한을 부여하고 리소스 사용을 제안합니다.
* **LXD-migrate**는 컨테이너와 VM 모두를 지원하도록 재작업 되었습니다.
* **클러스터** 사용자는 클러스터 철수(evacuation)을 통해 손쉽게 유지 관리를 수행하고, 서버를 타켓 그룹으로 그룹화하고 전체 클러스터에서 자세한 인스턴스 메트릭을 얻을 수 있습니다.

추가 세부 정부와 전체 변경 로그는 [여기](https://discuss.linuxcontainers.org/t/lxd-5-0-lts-has-been-released/13723)에서 찾을 수 있습니다.


### Ceph

우분투 22.04에는 Ceph Quincy 릴리즈의 최신 릴리즈 후보가 포함되어있습니다.

Ceph 커뮤니티에서 Quincy를 출시하면 Ceph 패키지가 [안정 릴리즈 업데이트](https://bugs.launchpad.net/ubuntu/+source/ceph/+bug/1968318)로 업데이트됩니다.

### 오픈스택

우분투 22.04에는 오픈스택 최신 릴리즈인 Yoga가 추가되어있으며, 다음 컴포넌트가 추가되어있습니다:

* 오픈스택 Identity - Keystone
* 오픈스택 Imaging - Glance
* 오픈스택 Block Storage - Cinder
* 오픈스택 Compute - Nova
* 오픈스택 Networking - Neutron
* 오픈스택 Telemetry - Ceilometer, Aodh, Gnocchi
* 오픈스택 Orchestration - Heat
* 오픈스택 Dashboard - Horizon
* 오픈스택 Object Storage - Swift
* 오픈스택 DNS - Designate
* 오픈스택 Bare-metal - Ironic
* 오픈스택 Filesystem - Manila
* 오픈스택 Key Manager - Barbican
* 오픈스택 Load Balancer - Octavia
* 오픈스택 Instance HA - Masakari

오픈스택 릴리즈에 대한 자세한 내용은 [오픈스택 Yoga 릴리즈 노트](https://releases.openstack.org/yoga/)를 참고하십시오.

오픈스택 Yoga는 우분투 20.04 LTS 버전 사용자를 위해 [우분투 클라우드 아카이브](https://wiki.ubuntu.com/OpenStack/CloudArchive)를 통해서도 제공됩니다.

주의: 오픈스택 배포 업그레이드는 간단한 프로세스이나, 각 오픈소스 컨포넌트에 대한 업그레이드 절차를 계획하고 테스트를 하여 업그레이드시 문제점을 대비해야합니다.

Juju를 사용하여 우분투 오픈스택을 배포하고 운영하는 방법에 대한 자세한 내용은 [오픈스택 Charm 릴리즈 노트](https://docs.openstack.org/charm-guide/latest)를 참고하십시오.

### needrestart와 사용자 간섭없이 작업

[needrestart](https://discourse.ubuntu.com/t/needrestart-for-servers/21552)는 우분투 21.04에서 기본으로 처음 설치되었으며, 우분투 22.04에서 계속 사용이 가능합니다. 관련된 항목이 보안 업데이트가 필요할 때 서비스가 정상적으로 재시작하도록 도와줍니다.

기본 값은 다시 시작이 필요하다고 판단되면 패키지 업그레이드한 이후 필요에 따라 needrestart 화면이 표시됩니다. 이 동작을 피하려면 `DEBIAN_FRONTEND=nointeractive`로 설정할 수 있습니다. 설정 이후에는 needrestart "목록 전용 모드"로 대체됩니다. 재부팅 하거나 `needrestart -ra`를 호출하여 나중에 서비스를 다시 시작해야 합니다.

## 플랫폼

### 클라우드 이미지 :cloud:

#### AWS
* 이제 AWS의 amd64 이미지는 UEFI를 부팅 모드로 사용하기 위해서 GPT 파티션 테이블과 ESP 파티션 설정을 사용합니다.

#### Oracle
* Oracle Cloud Infrastructure에서 ARM64 서버를 위한 Jammy의 최소 이미지가 이용가능합니다. OCI가 이미지를 경직된 속도로 릴리즈 하기 때문에 OCI로의 Jammy 릴리즈가 살짝 늦어짐을 알아두길 바랍니다.

### Raspberry Pi :strawberry:

* Raspberry Pi를 위한 우분투 데스크톱의 첫번째 장기 지원(LTS) 릴리즈
* 여러 종류의 Pi 전용 보드 지원과 도구들이 아카이브에 추가 되었습니다:
  * 인기있는 Pimoroni [Unicorn HAT](https://shop.pimoroni.com/products/unicorn-hat?variant=932565325)가 패키징과 함께 제공됩니다
  * 이제 공식 DSI 터치스크린이 지원됩니다 (그러나 데스크톱 이미지에 대한 해결책을 위해 밑의 알려진 문제 부분을 보십시오)

  * [rpiboot](https://launchpad.net/ubuntu/+source/rpiboot) 패키지가 Raspberry Pi 컴퓨트 모듈(그리고 Pi 부팅 기반)을 위한 [rpiboot](https://github.com/raspberrypi/usbboot) 유틸리티를 포함하게 됩니다
  * [pyboard-rshell](https://launchpad.net/ubuntu/+source/pyboard-rshell) 패키지가 Raspberry Pi Pico를 비롯한 MicroPython을 지원하는 마이크로컨트롤러에서의 작업을 위해 [rshell](https://pypi.org/project/rshell/) 유틸리티를 포함하게 됩니다
  * [rpi-imager](https://launchpad.net/ubuntu/+source/rpi-imager) 패키지가 Raspberry Pi imager를 포함합니다. 동일한 [snap 패키지](https://snapcraft.io/rpi-imager)가 모든 아키텍쳐에서 동작하도록 업데이트 되었습니다 (또한 현재 버전으로 판올림 되었습니다)

### ppc64el

22.04 LTS부터, 이제 IBM POWER (ppc64el)를 위한 우분투 서버 이미지는 Power9 프로세서에 맞춰서 '--with-cpu=power9'을 사용해서 컴파일 됩니다 ([bug 1930086](https://bugs.launchpad.net/bugs/1930086)).
때문에 상이한 명령어 셋 요구로 인해, 우분투 서버 22.04 LTS는 더이상 Power8 시스템에서 실행, 설치, 나아가 부팅까지도 불가능하게 됩니다. 
우분투 서버 20.04 LTS를 여전히 Power8 시스템에서 몇년간 사용 할 수는 있습니다 - 최소한 기본 지원의 끝인 2025년 4월까지는 말입니다. Power8에서 우분투 서버를 돌리고 있는 사용자는 'do-release-upgrade'로 22.04 LTS 업그레이드 할 수 없게 되는데, 해당 방법이 시스템을 망가뜨리기 때문입니다 ([bug 1960255](https://bugs.launchpad.net/bugs/1960255)).

추가로, 우분투 서버 22.04 LTS는 IBM Power10 시스템에 대한 공식 지원이 도입된 첫번째 우분투 릴리즈입니다.

### s390x

우분투 서버 20.04 LTS (IBM Z와 LinuxONE 지원)에서 부터, 최소 아키텍쳐 레벨 셋은 z13(그리고 LinuxONE Rockhopper / Emperor)로 상향 됐었습니다 - 이는 여전히 우분투 서버 22.04 LTS에 적용 돼 있고 지원 역시 현재(22.04 출시일) 서비스 되고 있는 모든 더 신형의 하드웨어를 포함합니다. 미래 하드웨어에 대한 추가적 지원은 차후에 추가 될 수 있습니다.
우분투 서버 22.04 LTS는 LPAR (classic 또는 DPM 모드)에 IBM z/VM 게스트로, KVM 가상 머신으로 그리고 LXD, docker, kubernetes와 같은 서로 다른 컨테이너 환경으로 설치될 수 있습니다.

21.10부터의 IBM Z와 LinuxONE / s390x 특정 (부분적으로 s390x 만이 아닌) 향상점:
  * 위에서 언급했듯이 22.04 LTS는 OpenSSL 3, 정확히는 v3.0.2([버그 1905022](https://bugs.launchpad.net/bugs/1905022))를 차용한 첫번째 릴리즈이고 이 전환은 몇몇 호환성 문제([버그 1959736](https://bugs.launchpad.net/bugs/1959736)) 때문이며 그 업데이트는 다음 변화를 포함하여 전체 s390x 암호화 스택의 대규모 리뉴얼로 마무리 될 예정입니다:
    * 마침내 libica가 v4.0.1 ([버그 1959421](https://bugs.launchpad.net/bugs/1959421))로 업데이트 됐고 이는 보안 조치([버그 1959553](https://bugs.launchpad.net/bugs/1959553))를 반영하기 위한 확장 통계를 포함합니다
    * openssl-ibmca가 libica4와의 호환성을 위해 결국 2.2.2 ([버그 1958419](https://bugs.launchpad.net/bugs/1958419))로 업데이트 됐습니다 ([버그 1960004](https://bugs.launchpad.net/bugs/1960004)). 
    * opencryptoki가 v3.17.0+dfsg+20220202.b40982efh로 업데이트 되었고 (3.18의 예정된 출시일이 22.04 GA로 공고 됐기 때문) (Bug:1959419) 이는 몇몇 (보안) 수정과 핵심 관리 도구(LP 1959577)에 있는 것과 같은 신기능 들을 포함합니다.
    * 더불어 cryptsetup 또한 업데이트 됐습니다 ([버그 1959427](https://bugs.launchpad.net/bugs/1959427))
s390x와 관련된 암호화 관련 업데이트는 다음과 같습니다:
    * libgcyrpt(20)의 최신 v1.9.4로의 업그레이드
    * 이제 SIMD 구현을 사용하게 되는 chacha20 커널 자체 암호화 최적화 ([버그 1853152](https://bugs.launchpad.net/bugs/1853152))
    * 새로운 IBM Z 암호화 하드웨어 활용 추가를 위한 zcrypt 디바이스 드라이버 업데이트 ([버그 1959547](https://bugs.launchpad.net/bugs/1959547))
    * 그리고 암호 기반을 위한 인터페이스를 제공하는 마침내 새롭게 패키징 된 IBM Z 보호키 암호화 라이브러리 ([버그 1932522](https://bugs.launchpad.net/bugs/1932522))

  * 추가로 새로운 네트워크 기능들, 이를테면 KVM 설정 향상과 z/OS 상호 운용성을 위한 향상된 HSCI (HiperSockets Converged Interface) 멀티 MAC 지원 같은 기능이 추가되었습니다 (kernel LP: 1932137 그리고 s390-tools LP: 1929721). 그리고 공유 메모리 통신 분야의 중요한 업데이트 이를테면 EID (Enterprise ID) 지원 (kernel LP: 1929060, s390-tools LP: 1929056), SMC 통계 지원 ([버그 1959470](https://bugs.launchpad.net/bugs/1959470)) 그리고 SMC-R v2 지원 ([버그 1929035](https://bugs.launchpad.net/bugs/1929035)) - 그리고 smc-tools 와 함께 최신 v1.7.0로 업그레이드 됐습니다 ([버그 1959428](https://bugs.launchpad.net/bugs/1959428)).

  * 여러 새로운 기능과 연관된 KVM과 보안 실행 역시 안착했고 다음과 같습니다:
    * KVM과 유저 공간에 의해 가로채진 명령어를 위한 스토리지 키 확인 활성화 ([버그 1933176](https://bugs.launchpad.net/bugs/1933176)) ([버그 1933179](https://bugs.launchpad.net/bugs/1933179))
    * 'access-register mode'가 활성화됨 ([버그 1933178](https://bugs.launchpad.net/bugs/1933178))
    * QEMU ([버그 1959984](https://bugs.launchpad.net/bugs/1959984))와 Secure Execution guest ([버그 1959985](https://bugs.launchpad.net/bugs/1959985))를 위한 긴 명령줄.
    * 보안 실행 게스트를 위한 GISA를 통해 지원되는 게스트 인터럽트 활성화 ([버그 1959977](https://bugs.launchpad.net/bugs/1959977))
    * 사용자 키를 통한 보안 실행 게스트 덤프 암호화 지원 ([버그 1959965](https://bugs.launchpad.net/bugs/1959965))
    * 그리고 virt-*tools, 특히 virt-manager에서 vfio-ccw와 vifio-ap 활성화 ([버그 1959976](https://bugs.launchpad.net/bugs/1959976))
    * 추가로 KVM_CAP_S390_MEM_OP_EXTENSION 가용성이 211로 판올림 됐고 ([버그 1963901](https://bugs.launchpad.net/bugs/1963901)) KVM이 향상된 체계적 SIGP 컴플라이언스를 갖게 됐습니다 ([버그 1959735](https://bugs.launchpad.net/bugs/1959735)).

  * 새로운 IBM Z 하드웨어 지원을 위해 현대화된 툴체인이 필요 했고 ([버그 1959379](https://bugs.launchpad.net/bugs/1959379)), 22.04 기본 gcc가 v11.2가 됐습니다 (12, 10, 9는 universe에 있습니다).
Binutils이 gdb에 할당 되었고 ([버그 1959407](https://bugs.launchpad.net/bugs/1959407)) v2.38로 ([버그 1959463](https://bugs.launchpad.net/bugs/1959463)), 또 다시 새로운 하드웨어 지원을 추가하기 위해 업데이트 됐습니다 ([버그 1959408](https://bugs.launchpad.net/bugs/1959408)).
그리고 LLVM 역시 새로운 하드웨어 지원을 위해서 ([버그 1959378](https://bugs.launchpad.net/bugs/1959378)), 그리고 향상된 최적화를 포함하기 위해서 업데이트 되었는데 ([버그 1959406](https://bugs.launchpad.net/bugs/1959406)), v14가 기본이더라도 v13만 이용 가능한 것이 아닙니다.

  * glibc로 최신 하드웨어 지원 추가가 ([버그 1959385](https://bugs.launchpad.net/bugs/1959385) 그리고 LP: 1959383) glibc가 최신 v2.35로 업그레이드 되면서 이루어졌고 ([버그 1959429](https://bugs.launchpad.net/bugs/1959429)), 이는 HWCAP_S390_PCI_MIO와 HWCAP_S390_SIE를 포함합니다 ([버그 1959462](https://bugs.launchpad.net/bugs/1959462)).
Perl 호환되는 라이브러리 PCRE2가 v10.39로 업데이트 되었고 s390x와 full JIT 성능 향상을 위한 개선을 포함합니다 ([버그 1959917](https://bugs.launchpad.net/bugs/1959917)).
'Eigen3' 대수학 라이브러리 역시 s390x를 위해 향상된 최적화를 포함하고 ([버그 1884725](https://bugs.launchpad.net/bugs/1884725)) 질의 용량 라이브러리이자 시스템 정보 추출 유틸리티인 'qclib'도 v2.3.0로 판올림 되었습니다 ([버그 1959464](https://bugs.launchpad.net/bugs/1959464)).
마지막으로 애플리케이션에서 Nerual Network Processing Assist Facility (NNPA)를 사용케 하는 인터페이스를 제공하는 새로운 저수준 IBM Z Deep Neural Network Library (zDNN) 라이브러리가 패키징 됐고 현재 이용 가능합니다 ([버그 1959396](https://bugs.launchpad.net/bugs/1959396)).

  * IBM Z를 위한 우분투 서버의 핵심 컴포넌트는 s390-tools 패키지이고 이는 jammy의 5.15 커널 배치에 맞춰져 v2.2.0로 업그레이드 되었으며 ([버그 1959420](https://bugs.launchpad.net/bugs/1959420)), 이제 환경 블록과 함께 다른 기능을 포함하는데 ([버그 1959409](https://bugs.launchpad.net/bugs/1959409)), 이 컴포넌트는 다중 경로 re-IPL 기능([버그 1959546](https://bugs.launchpad.net/bugs/1959546)), DPM 시스템을 위해 PCI 장치를 자동 활성화 해주는 옵션인 IPL 레코드의 필요없이 부팅 중에 평가되는 영구적인 설정 정보입니다 ([버그 1959537](https://bugs.launchpad.net/bugs/1959537)).

  * 커널 기반의 새로운 IBM Z 하드웨어 지원 ([버그 1960187](https://bugs.launchpad.net/bugs/1960187)), 새로운 하드웨어를 위한 새로운 CPU-MF 계수기([버그 1960117](https://bugs.launchpad.net/bugs/1960117)), s390x에서의 긴 커널 명령줄 지원 ([버그 1960580](https://bugs.launchpad.net/bugs/1960580)), 투명한 PCI 장치 복구 지원 ([버그 1959532](https://bugs.launchpad.net/bugs/1959532)), HBA 펌웨어에서의 향상된 유저 정보 ([버그 1959545](https://bugs.launchpad.net/bugs/1959545)) 그리고 CONFIG_QETH_OSX 커널 설정 옵션 비활성화의 삭제와 마찬가지로 커널이 몇몇 s390x 향상 역시 얻었습니다. 
  
  * 서비스 호출 논리 프로세서 (SCLP) 콘솔 인터페이스 드라이버 ('운영체제 메시지' 줄 모드와 '통합 ASCII 콘솔' VT220을 위함)가 모든 sclp 요청이나 그저 실패하는 sclp 요청을 로깅하기 위해서 두 가지 디버그 기능을 얻었고, 이는 커널을 ([버그 1960435](https://bugs.launchpad.net/bugs/1960435)) s390 도구 변경과 마찬가지로 필요로 합니다 ([버그 1960437](https://bugs.launchpad.net/bugs/1960437)).


### RISC-V

22.04 LTS 부터, 표준 장치별로 있는 미리 설치된 이미지와 함께 이제 RISC-V 아키텍쳐를 위한 라이브 인스톨러 이미지 또한 제공됩니다. 한 예로, 이는 우분투를 Unmatched 보드의 NVMe 드라이브에 설치하려 할 때 유용할 수 있습니다.

### UEFI 및 BIOS 부팅

우분투가 다른 운영체제과 함께 설치돼 있는 상황이 아니라면 이제 더이상 부팅 메뉴에 다른 운영체제가 표시되지 않습니다. 모든 자신 이외의 운영체제가 기기에서 삭제되면, 다른 운영체제 감지가 비활성화 되며, 다른 운영체제를 설치한 후 활성화하고 싶다면 `/boot/grub/grub.cfg` 를 삭제하고 바로 `update-grub` 을 실행해야만 할 겁니다.

# 알려진 이슈

예상대로 모든 릴리즈에서도 발생하듯, 우분투 릴리즈에서 발생할 수 있는 몇가지 알려진 버그가 존재합니다. 이 시점에서 우리가 알고 있는 것(과 일부 해결 방법)이 문서화하였으며 여기에 적혀있는 버그에 많은 시간을 할애하지 않길 바랍니다.
## 리눅스 커널

아직 없음.

## 보안
* OpenSSL 3.0.2 버전은 [터키 로케일](https://launchpad.net/bugs/1968997)에서 동작하지 않습니다. 수정 사항이 제공될 때까지 이 문제를 해결하려면 `LC_CTYPE=C.UTF-8`을 설정하여 openssl을 사용하는 것을 권해드립니다(셸: `export LC_CTYPE=C.UTF-8`). 하지만, 이렇게 설정하면 터키어 규칙에 따라 문자열의 대문자 사용이 중단되므로 시스템 수준에서 재정의하지 않는 것이 좋습니다.
## 시스템
* systemd / journald 에서는 이제 `zstd` 를 이용하여 압축하고, "keyed hash" 기능(v246 업스트림 기본값)을 사용합니다. 우분투 22.04 (systemd v249 사용)에서 작성된 저널 파일을 (18.04/20.04/Core20에 설치된) 오래된 버전에서는 열어 확인할 수 없습니다. 이 오류는 다음 메시지를 보여주고 실패합니다. ([LP: #1953744](https://bugs.launchpad.net/subiquity/+bug/1953744), [forum.snapcraft.io](https://forum.snapcraft.io/t/accessing-journal-logs-from-22-04-hosts-when-using-older-base-snap/29627)):
    ```
    Journal file xxx.journal has unknown incompatible flags 0xc
    Failed to open journal file xxx.journal: Protocol not supported
    ```
* grub-customizer 사용자는 업그레이드 프로세스의 마지막 단계에서 [해당 버그](https://pad.lv/1969353)에 도달하여 업그레이드 마지막 단계가 실패할 수 있습니다. (패키지 자동 제거됨) [버그 댓글](https://bugs.launchpad.net/ubuntu/+source/ubuntu-release-upgrader/+bug/1969353/comments/6)에 해결 방법이 있습니다.

## 우분투 데스크톱

* 우분투 데스크톱 이미지에서 BIOS 시스템에서 USB 드라이브로 부팅할때 부팅 속도가 느려질 수 있습니다 (최대 10분 소요). 문제는 [조사중](https://bugs.launchpad.net/ubuntu/+source/casper/+bug/1922342)이지만 시스템이 설치되면 문제가 되지 않습니다.
* 우분투 데스크톱 이미지에서 BIOS 또는 UEFI 시스템에서 DVD를 이용하여 부팅할때 부팅 속도가 느릴 수 있습니다 (최대 30분 소요). 이는 설치 미디어에 대한 무결성 검사를 하고 있기 때문입니다. 해결 방법("fsck.mode=skip" 설정)은 [관련 버그](https://bugs.launchpad.net/ubuntu/+source/casper/+bug/1930880)에 설명되어 있습니다.
* 우분투 데스크톱 설치 프로그램인 Ubiquity가 멈추는 현상이 [확인되었습니다](https://bugs.launchpad.net/ubuntu/+source/linux/+bug/1946828). 이때는 NTFS 파티션의 크기가 재조정할 수 있는지 확인하기위해 스캔 중으로 보여집니다. 이 증상은 설치 프로그램 '업데이트 및 기타 소프트웨어' 화면을 지나 계속하려고 할때 회전하는 모양의 커서가 움직이는 것으로 확인할 수 있습니다. 해당 문제가 발생하면 재부팅하고 다시 시도하면 됩니다.
* Firefox snap 에서는 아직 [NativeMessaging protocol](https://launchpad.net/bugs/1741074)을 지원하지 않지만 이 기능은 곧 추가될 예정입니다. Firefox를 통해 GNOME Shell 확장을 설치가 안된다는 것을 의미합니다. 해결 방법으로 `gnome-shell-extension-manager` 앱을 이용하면 됩니다.
  * 브라질어 사용자(와 Firefox에서 PKCS#11 스마트 카드 지원이 필요한) 사용자는 **Jammy로 업그레이드하면 안됩니다**. [pkcs#11 support is added to the firefox snap](https://bugs.launchpad.net/ubuntu/+source/firefox/+bug/1967632)
* GNOME Tweaks 앱에서 더이상 GNOME Shell 확장을 관리하지 않습니다. 대신 `gnome-shell-extension-manager` 를 통해서 설치할 수 있습니다.
* [Nvidia graphics drivers](https://launchpad.net/bugs/1968929) 를 사용하는 시스템에는 Wayland를 사용하는 옵션이 없습니다.
* AppImages를 사용하려면 먼저 `sudo apt install libfuse2` 를 [실행해야 합니다](https://launchpad.net/bugs/1965636).
* RDP (Remote Desktop) 공유는 기본으로 [활성화되어 있는 것으로 표시](https://launchpad.net/bugs/1969619) 되지만 활성화 되어있지 않으니 비활성화한 다음 다시 활성화 해야합니다.
* 우분투 22.04 LTS로 업그레이드 하면 [snapd와 update notifier 간 잘못된 상호 작용](https://bugs.launchpad.net/ubuntu/+source/snapd/+bug/1969162)이 발생하여 업그레이드가 무기한 대기할 수 있습니다. 수정 사항은 현재 진행중이며 곧 업그레이드를 진행할 예정입니다.

## 우분투 서버

* [zfs의 fallocated 관련 문제](https://bugs.launchpad.net/ubuntu/+source/zfs-linux/+bug/1969247)로 인해 mysql이 Jammy zfs 시스템에서 설치되지 않습니다.

## 플랫폼

### 클라우드 이미지

#### Vagrant

* `universse`에서 Jammy `vagrant`에서는 openssl3 업스트림을 지원하지 않습니다. 이로 인해서 Jammy 호스트의 vagrant 사용자는 시작시 OpenSSL 오류를 확인하게 됩니다. Box는 부팅이되고, `vagrant ssh`가 작동하지만, `vagrant` 기능은 심각한 영향을 받습니다. 그리하여 Box간 연결이 정상적으로 동작하지 않습니다. [버그 리포트](https://bugs.launchpad.net/ubuntu/+source/vagrant/+bug/1964025)
* Vagrant 2.2.16 버전 이하에서는 SSH 연결 문제로 인해 실행되지 않습니다. 우분투 패키지 아카이브에 제공된 `vagrant`는 Jammy 때까지 2.2.16 이상 버전으로 반영되지 않았습니다. (역주: 220521일자 기준으로 [2.2.19 버전](https://packages.ubuntu.com/jammy/vagrant)으로 확인된다.) 한 가지 해결 방법은 시스템에서 `vagrant`를 업스트림 버전으로 사용하는 것이다. [업스트림에서는 버그가 수정되었습니다](https://github.com/hashicorp/vagrant/issues/11783). 클라우드 팀에서는 해당 문제를 수정하기위해서 노력하고 있습니다. [공개 클라우드 이미지 버그](https://bugs.launchpad.net/cloud-images/+bug/1969664)

### Raspberry Pi

* 라즈베리 파이 데스크톱 이미지는 Full KMS 그래픽 드라이버를 사용하도록 변경되었습니다. 그러나 공식 라즈베리 파이 DSI 디스플레이는 Full KMS가 활성화된 상태에서는 동작하지 않습니다. 라즈베리 파이 DSI 디스플레이를 사용하도록 활성화시키려면, 라즈베리 파이의 하드 드라이브에서 `config.txt` 파일에서 `dtoverlay=vc4-fkms-v3d` 항목을 `dtoverlay=vc4-kms-v3d`으로 수정해야 합니다.
* 현재 Compute Module 4용 공식 IO 보드의 USB 포트가 작동하지 않습니다.([버그](https://launchpad.net/bugs/1969689))
* 데스크톱 이미지에서 Firefox snap은 최초 로그인후 초기화를 완료하는데 시간이 걸릴 수 있습니다. (해당 시간이 표시됨) ([버그](https://launchpad.net/bugs/1969529))
* (MMAL 기반인) 레거시 카메라 스택은 `arm64`에서는 더이상 지원하지 않습니다. [libcamera]는 `arm64` 아키텍처에서 Pi 카메라 모듈을 사용할 수 있도록 도와주는 라이브러리입니다. (부팅 시간동안 감지된 모듈에 대한 오버레이를 자동으로 구성을 읽어들입니다.)

중간 릴리즈에서 이월됨 (변경사항은 LTS->LTS에서 적용될 수 있습니다.):

* 데스크톱 이미지에서 초기 사용자 설정이후에도 여전히 여러 패키지가 자동 제거될 수 있습니다.([버그 1925265](https://launchpad.net/bugs/1925265)). 이 문제를 해결하려면 `sudo apt autoremove` 를 실행하면 됩니다.
* 데스크톱 이미지에서 부팅할 때마다 잘못된 오디오 출력 장치가 선택될 수 있습니다. 해결 방법은 버그 리포트에서 확인하면됩니다. ([버그 1899962](https://launchpad.net/bugs/1899962))
* initramfs 크기를 줄이기 위해 `linux-modules-raspi` 패키지에서 다양한 모듈이 분리되었습니다. 누락된 커널 모듈로 인해 애플리케이션이 실패하는 경우, 다음을 명령어를 사용하여 설치 하십시오.
  * `sudo apt install linux-modules-extra-raspi`

### s390x

알려진 이슈가 없습니다.

# 공식 flavour

공식 flavour를 위한 릴리즈 노트는 아래 링크를 통해 찾아볼 수 있습니다:

* [쿠분투 릴리즈 노트](https://wiki.ubuntu.com/JammyJellyfish/ReleaseNotes/Kubuntu)
* [루분투 릴리즈 노트](https://discourse.lubuntu.me/t/lubuntu-22-04-lts-jammy-jellyfish-release-notes/3179)
* [21.10에서 업그레이드하는 사용자를 위한 우분투 Budgie 릴리즈 노트](https://ubuntubudgie.org/2022/03/ubuntu-budgie-22-04-lts-release-notes/) & [20.04에서 업그레이드하는 사용자를 위한 우분투 Budgie 릴리즈 노트](https://ubuntubudgie.org/2022/04/ubuntu-22-04-release-notes-for-20-04-upgraders/)
* [우분투 Kylin 릴리즈 노트](https://wiki.ubuntu.com/JammyJellyfish/ReleaseNotes/UbuntuKylin)
* [우분투 MATE 릴리즈 노트](https://ubuntu-mate.org/blog/ubuntu-mate-jammy-jellyfish-release-notes/)
* [우분투 스튜디오 릴리즈 노트](https://ubuntustudio.org/ubuntu-studio-22-04-lts-release-notes/)
* [주분투 릴리즈 노트](https://wiki.xubuntu.org/releases/22.04/release-notes)

# 더 알아보기

## 버그 리포트

여러분의 댓글, 버그 리포트, 패치 그리고 제안은 버그를 수정하고 추후 릴리즈의 질을 향상하는 것에 도움이 됩니다. [제공된 도구를 이용해서 버그 리포트](http://help.ubuntu.com/community/ReportingBugs)하는 것을 부탁드립니다. 만약 버그 수정에 참여하고 싶다면, [Bug Squad](http://wiki.ubuntu.com/BugSquad)은 항상 도움을 기다리고 있습니다.

## 우분투에 참여하기

만약 우분투를 만드는 데 도움을 주고 싶다면, 참여하는 방법 목록을 다음에서 확인하십시오:

* https://community.ubuntu.com/contribute

## 우분투 더 알아보기

[우분투 웹사이트](https://www.ubuntu.com)에서 우분투에 관한 더 많은 정보를 찾을 수 있습니다.

향후 우분투 개발 소식을 보고 싶다면, 우분투의 개발 소식 목록을 다음에서 구독하십시오:

* https://lists.ubuntu.com/mailman/listinfo/ubuntu-devel-announce

> 본 게시물은 [Jammy Jellyfish Release Notes](https://discourse.ubuntu.com/t/jammy-jellyfish-release-notes/24668)를 우분투 한국어 번역팀에서 번역 한 것이며, 번역 검토에 [신민욱 님](https://github.com/minwook-shin), [한상곤 님](https://github.com/sigmadream), [한영빈 님](https://github.com/sukso96100), [김광연 님](https://github.com/onting)께서 참여 하셨으며, 번역에는 [한상곤 님](https://github.com/sigmadream), [한영빈 님](https://github.com/sukso96100), [김광연 님](https://github.com/onting), [방기연 님](https://github.com/GiyeonBang), [강성진 님](https://github.com/ujuc), [QuqqU 님](https://github.com/QuqqU), [neeks76 님](https://github.com/neeks76), [HaeyoonJo 님](https://github.com/HaeyoonJo)께서 참여 해 주셨습니다. 참여 해 주신 모든 분들께 감사 드립니다. [관련 GitHub Issue 확인하기](https://github.com/ubuntu-kr/blog.ubuntu-kr.org/issues/7)
