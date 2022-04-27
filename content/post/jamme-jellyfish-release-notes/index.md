
---
layout: post
date: 2022-04-22 02:00:00 +0900
title: "Ubuntu 22.04 LTS Jammy Jellyfish Release Notes"
tags:
 - release-notes
authors:
    - name: Ubuntu Korean Translators
      bio: .
      email: ubuntu-l10n-ko@lists.ubuntu.com
      launchpad: ubuntu-l10n-ko
      github: ubuntu-kr
      profile: https://launchpad.net/@@/team-logo
---
# Jammy Jellyfish Release Notes

# Introduction

These release notes for **Ubuntu 22.04 LTS** (Jammy Jellyfish) provide an overview of the release and document the known issues with Ubuntu and its flavours.

## Support lifespan

Maintenance updates will be provided for 5 years until [April 2027](https://wiki.ubuntu.com/Releases) for Ubuntu Desktop, Ubuntu Server, Ubuntu Cloud, and Ubuntu Core. All the remaining flavours will be supported for 3 years. Additional security support is available with [ESM (Extended Security Maintenance).](https://ubuntu.com/security/esm)

# Get Ubuntu 22.04 LTS

## Download Ubuntu 22.04

Images can be downloaded from a location near you.

You can download ISOs and flashable images from:

  * [Ubuntu Desktop and Server for 64-bit x86 (AMD64) ](http://releases.ubuntu.com/22.04/)
  * [Less Frequently Downloaded Ubuntu Images](http://cdimage.ubuntu.com/ubuntu/releases/22.04/release/)
  * [Ubuntu Cloud Images](http://cloud-images.ubuntu.com/daily/server/jammy/current/)
  * [Lubuntu](http://cdimage.ubuntu.com/lubuntu/releases/22.04/release/)
  * [Kubuntu](http://cdimage.ubuntu.com/kubuntu/releases/22.04/release/)
  * [Ubuntu Budgie](http://cdimage.ubuntu.com/ubuntu-budgie/releases/22.04/release/)
  * [Ubuntu Kylin](http://cdimage.ubuntu.com/ubuntukylin/releases/22.04/release/)
  * [Ubuntu MATE](http://cdimage.ubuntu.com/ubuntu-mate/releases/22.04/release/)
  * [Ubuntu Studio](http://cdimage.ubuntu.com/ubuntustudio/releases/22.04/release/)
  * [Xubuntu](http://cdimage.ubuntu.com/xubuntu/releases/22.04/release/)

# Upgrading from Ubuntu 21.10

**Upgrades to 22.04 LTS are currently not enabled (due a bug with snapd and update-notifier) but will be in the next couple of days.**

To upgrade on a desktop system:

  * Open the "Software & Updates" Setting in System Settings.
  * Select the 3rd Tab called "Updates".
  * Set the "Notify me of a new Ubuntu version" dropdown menu to "For any new version".
  * Press <kbd>Alt</kbd>+ <kbd>F2</kbd> and type in `update-manager -c` into the command box.
    * Update Manager should open up and tell you: **"New distribution release '22.04' is available."**
  * If not you can also use `/usr/lib/ubuntu-release-upgrader/check-new-release-gtk`
  * Click Upgrade and follow the on-screen instructions. 

To upgrade on a server system:

  * Make sure the Prompt line in `/etc/update-manager/release-upgrades` is set to normal.
  * Launch the upgrade tool with the command `sudo do-release-upgrade`.
  * Follow the on-screen instructions. 

Note that the server upgrade will use GNU screen and automatically re-attach in case of dropped connection problems.

There are no offline upgrade options for Ubuntu Desktop and Ubuntu Server. Please ensure you have network connectivity to one of the official mirrors or to a locally accessible mirror and follow the instructions above.

# New features in 22.04 LTS

## Updated Packages

## Linux kernel :penguin:

Ubuntu 22.04 LTS ships multiple optimized kernels on per-product basis:

* Ubuntu Desktop will automatically opt-into [v5.17](https://kernelnewbies.org/Linux_5.17) kernel on the latest generations of certified devices (`linux-oem-22.04`)
* Ubuntu Desktop uses a rolling HWE kernel (`linux-hwe-22.04`) on all other generations of hardware. The rolling HWE kernel is based on the [v5.15](https://kernelnewbies.org/Linux_5.15) kernel for 22.04.0 and 22.04.1 point releases
* Ubuntu Server defaults to a non-rolling LTS kernel v5.15 (`linux-generic`)
* Ubuntu Cloud and Devices use optimized kernels in collaboration with partners (v5.15+ with additional backports and features)

Additional optimized and certified kernel flavours will become available in Ubuntu 22.04 LTS in due course.

### NVIDIA drivers

Ubuntu 22.04 LTS adds linux-restricted-modules of NVIDIA drivers on ARM64, in addition to the existing x86_64. Users on ARM64 can now use `ubuntu-drivers` tool to install and configure NVIDIA drivers from the Ubuntu Archive.

### UDP disabled for NFS mounts
Since Ubuntu 20.10 ("Groovy Gorilla"), the kernel option `CONFIG_NFS_DISABLE_UDP_SUPPORT=y` is set and this disables using UDP as the transport for NFS mounts, regardless of NFS version.

In practice, if you try to use `udp`, you will get this error:
```
$ sudo mount f1:/storage /mnt -o udp
mount.nfs: an incorrect mount option was specified
```


## Toolchain Upgrades :hammer_and_wrench:

GCC was updated to the 11.2.0 release, binutils to 2.38, and glibc to 2.35. Python :snake: now ships at version 3.10.4, Perl :camel: at version 5.34.0. LLVM now defaults to version 14. golang defaults to version 1.18.x. rustc defaults to version 1.58.

In addition to OpenJDK 11, OpenJDK 18 is now provided (but not used for package builds).

Ruby :gem: was updated from v2.7.4 to v3.0.

## systemd v249.11
The init system was updated to systemd v249, using a solid .11 patchlevel for the LTS. Please refer to the upstream [changelog](https://github.com/systemd/systemd/releases/tag/v249) for more information about the individual features. We've enabled the userspace OOMD service and are shipping the `systemd-oomd` package by default on the "Ubuntu Desktop" flavour, to avoid overloaded systems and the need of the kernel's OOM killer to kick in. The OOMD status can be checked using `oomctl`.

## OpenSSL 3.0

We've upgraded the OpenSSL library to the new 3.0 version, which disables a lot of legacy algorithms by default, as detailed in their [migration guide](https://www.openssl.org/docs/manmaster/man7/migration_guide.html). In particular, certificates using SHA1 or MD5 as hash algorithms are now invalid under the default security level.

In addition to the upstream deprecations, please note that since Ubuntu 20.04 (Focal Fossa), the security level 2 (which is the default) disables the (D)TLS protocols below 1.2 (included).

Since the new version has an API bump, third-party packages that depend on libssl1.1 will need to be rebuilt to instead depend on libssl3, as the older ABI isn't provided anymore.

## Security Improvements :lock:

nftables is now the default backend for the firewall. All applications on the system must agree on whether they will use the legacy `xtables` backend or the newer `nftables` backend. [Bug 1968608](https://bugs.launchpad.net/bugs/1968608) provides some context that may be helpful. [Docker may not be ready for the new `nftables` backend](https://github.com/docker-snap/docker-snap/issues/68).

`ssh-rsa` is now [disabled by default in OpenSSH](https://www.openssh.com/txt/release-8.8). See [bug 1961833](https://bugs.launchpad.net/ubuntu/+source/openssh/+bug/1961833) to learn how to selectively re-enable it if necessary.  If you are upgrading a system remotely over SSH, you should check that you are not relying on this to ensure that you will retain access after the upgrade. 

`scp` offers a [`-s` command line option](http://manpages.ubuntu.com/manpages/jammy/en/man1/scp.1.html) to use [sftp mode rather than scp mode](https://www.openssh.com/txt/release-8.9) when handling remote filenames. This new, safer, behaviour will eventually become the default.

## Ubuntu Desktop

* Ubuntu now offers [10 color choices](https://discourse.ubuntu.com/t/yaru-accent-colors-are-coming-to-jammy/27200) each in dark and light styles
* Firefox is now only provided in Ubuntu as a snap. Some benefits include
  * Directly maintained by Mozilla
  * More maintainable for the entire Ubuntu LTS lifecycle
  * … Which means faster access to the newest Firefox versions
  * Easily switch to a different Firefox flavor with snap channels including `esr/stable`, `latest/candidate`, `latest/beta`, and `latest/edge`
  * Sandboxed for improved security hardening for this critical app
* Desktop icons are shown in the bottom right by default but this can be changed through new settings added to the Appearance panel of the Settings app.
* Also there are new settings to control the Dock look and behavior
* Dock devices and filemanager integration has been improved

### GNOME :footprints:

* GNOME has been updated to include new features and fixes from [GNOME 41](https://release.gnome.org/41/) and [GNOME 42](https://release.gnome.org/42/) 
* Several apps are still at their 41 version numbers to provide a more time-tested experience for the LTS desktop by mostly avoiding libadwaita.
* The new cross-desktop [dark style](https://discourse.ubuntu.com/t/ubuntu-22-04-lts-dark-style-changes/27206) preference is supported.
* GNOME Shell and mutter have lots of performance improvements including the triple buffering patch.
* The default session for most systems that don't have an Nvidia graphics card is now Wayland. If you need a non-Wayland session, you can choose the *Ubuntu on Xorg* session by clicking the gear button after selecting your name on the login screen.
* Hardware with privacy screen support is now supported
* RDP is now available for sharing your desktop remotely. Legacy VNC is still available, but it is strongly recommended to use RDP for better security, privacy, and performance. If you were previously using VNC, you'll need to manually re-enable desktop sharing in the Settings app and get your new login information.

### Updated Applications

* Firefox 99 :fire::fox_face:
* [LibreOffice 7.3](https://wiki.documentfoundation.org/ReleaseNotes/7.3) :books:
* Thunderbird 91 :cloud_with_lightning::bird:

### Updated Subsystems

* [BlueZ 5.63](https://git.kernel.org/pub/scm/bluetooth/bluez.git/tree/ChangeLog?id=5.63)
* [CUPS 2.4](https://github.com/OpenPrinting/cups/blob/v2.4.1/CHANGES.md)
* [NetworkManager 1.36](https://gitlab.freedesktop.org/NetworkManager/NetworkManager/-/blob/nm-1-36/NEWS)
* [Mesa 22](https://docs.mesa3d.org/relnotes/22.0.0.html)
* [Poppler 22.02](https://gitlab.freedesktop.org/poppler/poppler/-/blob/poppler-22.02.0/NEWS)
* [PulseAudio 16](https://www.freedesktop.org/wiki/Software/PulseAudio/Notes/16.0/)
* [xdg-desktop-portal 1.14](https://github.com/flatpak/xdg-desktop-portal/blob/1.14.2/NEWS)

## Ubuntu Server

#### Ubuntu HA/Clustering

##### Corosync

3.16 버전으로 업데이트 되면서 포함된 몇 가지 새로운 기능:

- 실행중(runtime)인 상태에서 암호화(crypto)와 관련된 설정을 변경 할 수 있습니다. 해당 변경사항에서 암호화 적용 또는 해제, *crypto_cipher* 및 *crypto_hash* 변경, 암호화 키 변경이 포함됩니다.
- 기본 토큰(token)의 시간 제한이 1초에서 3초로 변경되었습니다.
- *corosync -v* 명령어를 사용하여 coresync.conf에서 사용할 있는 암호화 및 압축 모델의 목록을 가져올 수 있습니다.
- Cgroup v2를 지원합니다.

변경 사항과 관련된 전체 목록은 [업스트림 릴리스 노트](https://github.com/corosync/corosync/releases)를 참고하십시오.

##### Pacemaker

2.1.2 버전으로 업데이트 되면서 포함된 몇 가지 새로운 기능:

- *priority-fencing-delay*가 새롭게 추가되었습니다. 실행 중인 상태의 리소스의 우선 순위에서 선택적으로 노드의 우선 순위를 도출 할 수 있습니다.
- 승격된 자원(promoted resources)에 대한 *on-fail=demot*e 및 *no-quorum-policy=demote* 복구 정책을 추가하였습니다.
- OCF Resource Agent API 1.1 표준을 지원합니다.
- *crm_mon* 및 *crm_resource*가 많은 개선이 되었습니다.

전체 변경 사항 목록은 [업스트림 릴리스 노트](https://github.com/ClusterLabs/pacemaker/releases)를 참고하십시오.

Ubuntu Focal 20.04 버전과 비교해서 주목할만한 차이점은 기본 구성 파일이 노드 이름을 node1로 정의하지 않고 uname -n의 출력을 기본 노드 이름으로 사용합니다.

##### Resource agents

4.7.0 버전으로 업데이트 되었습니다. Ubuntu Focal 20.04 이후 변경 사항 목록은 [여기](https://github.com/ClusterLabs/resource-agents/blob/main/ChangeLog#L95-L219)에서 참고하십시오.

에이전트(agents)는 이제 resource-agents-base 및 resource-agents-extra의 두 패키지로 분리됩니다. resource-agents-base 패키지는 Ubuntu Server 팀에서 선별한 에이전트가 포함되어 있습니다. 지속적 통합 시스템에서 자동화된 테스트가 진행되어 해당 에이전트의 품질을 보장합니다. resource-agents 패키지는 이제 resource-agents-base와 resource-agents-extra에 관련된 메타패키지입니다. resource-agents 패키지는 향후 릴리스에서 제거될 예정입니다. resource-agents에 의존하지 않는 것이 좋습니다.

##### Fence agents

4.7.1 버전으로 업데이트 되었습니다.

에이전트는 이제 두 개의 패키지(fence-agents-base 및 fence-agents-extra)로 분리됩니다. fence-agents-base 패키지에는 Ubuntu Server 팀에서 선별한 에이전트가 포함되어 있습니다. 지속적인 통합 시스템에서 자동화된 테스트가 진행되어 해당 에이전트의 품질을 보장합니다. fence-agents 패키지는 이제 fence-agents-base 및 fence-agents-extra에 관련된 메타 패키지 입니다. fence-agents는 제거될 예정입니다. fence-agents에 의존하지 않는 것이 좋습니다.

#### 컨테이너 런타임

##### containerd

1.5.9 버전으로 업데이트 되었습니다. 몇 가지 흥미로운 변경 사항은 다음과 같습니다.

* descriptors에서 non-https가 아닌 url을 처리하도록 pull을 업데이트를 하였습니다.
* arm64용 apparmor 파서를 설치하고 seccomp를 2.5.1로 업데이트 하였습니다.
* *clone3* syscall에 대한 지원을 추가하여 seccomp가 활성화된 경우 발생하는 특정 이미지의 문제를 수정하였습니다.
* CRI 컨테이너 생성에 이미지 구성 레이블 추가하였습니다.

전체 변경 사항 목록은 [업스트림 릴리스 페이지](https://github.com/containerd/containerd/releases)를 참고하십시오.

##### runc

1.1.0 버전으로 업데이트 되었습니다. [업스트림 릴리스 페이지](https://github.com/opencontainers/runc/releases)에서 찾을 수 있는 많은 개선 사항 및 버그 수정 사항이 있습니다. 업그레이드에 영향을 줄 수 있는 일부 지원 중단 및 제거는 다음과 같습니다.

지원 중단

* runc run/start는 새 컨테이너 cgroup이 비어 있지 않거나 고정된 경우 경고합니다. 이 경고는 runc 1.2에서 오류가 됩니다.

제거

* cgroup.GetHugePageSizes는 완전히 제거되었으며 더 효율적인 cgroup.HugePageSizes로 대체되었습니다.
* intelrdt.GetIntelRdtPath가 제거되었습니다. intelrdt 루트를 얻기 위해 이 기능을 사용하던 사용자는 대신 새로운 intelrdt.Root를 사용해야 합니다.

#### Ruby 3.0

기본 Ruby 인터프리터는 3.0이며 성능, 동시성 및 타입 관련 기능이 업데이트 되었습니다. 멋진 기능과 개선 사항에 대한 광범위한 소개를 보려면 [Ruby 3.0 Release Announcement](https://www.ruby-lang.org/en/news/2020/12/25/ruby-3-0-0-released/)를 참조하십시오.

* 이전 Ubuntu 릴리스(Ubuntu Focal 20.04 이상)를 사용했던 사용자는 Ruby 2.7에서 3.0으로 변경됩니다. 이 경우 [Ruby 2.7 Release Announcement](https://www.ruby-lang.org/en/news/2019/12/25/ruby-2-7-0-released/)도 유용할 수 있습니다. 명심해야 할 중요한 점은 다음 라이브러리가 Ruby에서 더 이상 번들로 제공되지 않는다는 것입니다.

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

Ubuntu Focal 20.04에서 Ubuntu Jammy 22.04으로 업그레이드 하는 경우 새로운 OpenLDAP 2.5.11 버전을 사용하게 됩니다. 해당 버전에선 몇 가지 변경 사항, 새로운 기능의 추가 그리고 지원 중단/제거된 기능 등이 있습니다. 업그레이드 프로세스 중에 알아야 할 사항의 목록은 다음과 같습니다.

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
- 사용되지 않고 작동하지 않는 여러 설정 옵션이 제거되었으며, 해당 설정 옵션이 존재할 때 설정 오류로 처리됩니다. 이러한 설정의 전체 목록은 [upstream release notes](https://bind9.readthedocs.io/en/v9_18_1/notes.html#removed-features)에서 확인할 수 있습니다.

#### Apache has been updated to 2.4.52 from 2.4.48.

 - OpenSSL support is improved to support OpenSSL v3.  mod_ssl also received various refinements for outgoing connection behaviors, backwards compatibility, and wireshark logging.
 - mod_md adds support for ACME External Account Binding (EAB) along with a host of other enhancements and fixes.
 - Numerous fixes, including better hostname and UDS URI checking and handling, status code responses, and so on.


#### PostgreSQL 14

PostgreSQL has been updated to version 14.2.

This update contains many new features and enhancements, including:

- Stored procedures can now return data via OUT parameters.
- The SQL-standard SEARCH and CYCLE options for common table expressions have been implemented.
- Subscripting can now be applied to any data type for which it is a useful notation, not only arrays. In this release, the jsonb and hstore types have gained subscripting operators.
- Range types have been extended by adding multiranges, allowing representation of noncontiguous data ranges.
- Numerous performance improvements have been made for parallel queries, heavily-concurrent workloads, partitioned tables, logical replication, and vacuuming.
- B-tree index updates are managed more efficiently, reducing index bloat.
- VACUUM automatically becomes more aggressive, and skips inessential cleanup, if the database starts to approach a transaction ID wraparound condition.
- Extended statistics can now be collected on expressions, allowing better planning results for complex queries.
- libpq now has the ability to pipeline multiple queries, which can boost throughput over high-latency connections.

These and a long list of further enhancements as well as bug fixes can be found in the release notes of [v14](https://www.postgresql.org/docs/14/release-14.html), [v14.1](https://www.postgresql.org/docs/release/14.1/), and [v14.2](https://www.postgresql.org/docs/release/14.2/).

#### Django 3.2.12

Django was updated from the previous LTS version 2.2 to the new LTS version 3.2.

The update contains many new features and bug fixes such as:

- Automatic AppConfig discovery
- Type customization of auto-created primary keys
- Functional indexes
- Asynchronous views and middleware support
- JSONField for all supported database backends
- And various further major and minor features, see the see the [release notes](https://docs.djangoproject.com/en/4.0/releases/3.2/) for more

Users upgrading from previous versions should be aware of the following backwards incompatibilities:

Changes have been made to:
- The Database backend API
- django.contrib.admin
- AbstractUser.first_name max_length - changed to 150
- Model.save() when providing a default for the primary key
- Along with various minor module changes 

For additional information, especially since an upgrade would be from the former v2.2 LTS to v3.2 LTS do not only check the Django project release notes of [3.2](https://docs.djangoproject.com/en/4.0/releases/3.2/) but also [3.1](https://docs.djangoproject.com/en/4.0/releases/3.1) and [3.0](https://docs.djangoproject.com/en/4.0/releases/3.0) as well as the various minor releases included up to 3.2.12 that is in Ubuntu 22.04.

#### MySQL 8.0

MySQL has been updated to version 8.0.28 in Jammy Jellyfish alongside Focal Fossa and Impish Indri.
It contains new features such as:

- The audit_log_disable system
- Data type updates
- The CPU_TIME statement metric

See the [8.0.28 upstream release notes](https://dev.mysql.com/doc/relnotes/mysql/8.0/en/news-8-0-28.html) for more information.


#### NFS server
The NFS server and client packages have finally been updated to the latest upstream version.

All NFS services now read their configuration from `/etc/nfs.conf` and `/etc/nfs.conf.d/*.conf`, which is an INI-style configuration file, where each section is about one daemon or aspect of the NFS service. The old `/etc/defaults/nfs-*` configuration files are still left around, but are unused.

During upgrade, a conversion script is run if the package detects that the `/etc/default/nfs-*` files have been changed. This script is `/usr/share/nfs-common/nfsconvert.py` and it will read the options from `/etc/defaults/nfs-*` and generate `/etc/nfs.conf.d/local.conf`, which overrides the defaults in `/etc/nfs.conf`.

If the conversion script fails for some reason, the package installation or upgrade will fail, and the issue will have to be resolved. Please [file a bug against `nfs-utils` in Launchpad](https://bugs.launchpad.net/ubuntu/+source/nfs-utils/+filebug) if you encounter such a scenario.

A new tool called `nfsconf(8)` can be used to query the configuration settings of `/etc/nfs.conf` and `/etc/nfs.conf.d/*.conf`.

#### Samba server
Samba was updated to 4.15.5, which brings some noteworthy changes. Please see the [upstream release notes for details](https://www.samba.org/samba/history/samba-4.15.0.html), but here are some highlights:

* The development SMB versions SMB2_22, SMB2_24 and SMB3_10 are no longer recognized. SMB2_22 and SMB2_24 should be replaced by SMB3_00, and SMB3_10 should be replaced by SMB3_11
* server multi channel support is no longer experimental
* command-line options in all CLI tooling are now using a common parser, and unknown options which might have been ignored in the past, will now be rejected. See the [upstream release notes](https://www.samba.org/samba/history/samba-4.15.0.html) for details.
* many `/etc/samba/smb.conf` parameters were changed, some removed. Please see the [upstream release notes](https://www.samba.org/samba/history/samba-4.15.0.html) for details.
* the CTDB package was adjusted to work with the new NFS server version shipped in this Ubuntu 22.04
* `findsmb(1)` was removed
* [glusterfs support enabled](https://bugs.launchpad.net/ubuntu/+source/samba/+bug/1894618) in the Ubuntu packaging. This was possible because [glusterfs was promoted to Main](https://bugs.launchpad.net/ubuntu/+source/glusterfs/+bug/1950321) during the 22.04 LTS development cycle, which allowed us to enable the glusterfs vfs module. This module is now present in the `samba-vfs-modules` package.

#### Quagga replaced with frr
`quagga` was removed from Ubuntu 22.04 and replaced by FRRouting (`frr`, https://frrouting.org/).

#### Chrony time synchronization

Chrony has been updated to version 4.2 which includes

 * Add support for AES-CMAC and hash functions in GnuTLS
 * Improve server interleaved mode to be more reliable and support multiple clients behind NAT
 * Add statistics about interleaved mode to serverstats report
 * Adds and enabled further hardening options to the chrony service
 * Allow reading timemaster created configurations
 * For more details read the upstream [release notes](https://chrony.tuxfamily.org/news.html)

#### Virtualization

As usual the release notes can only list a few bigger and more noteworthy changes and packages while
underneath many more components have been updated as well. For an even more complete picture please
have a look at the changelogs of packages and upstream releases of the respective components.

##### qemu

Qemu was updated to version v6.2.0 which brings many major and minor improvements. Among others this version includes:

 * fuse3 based non-root way to [export image files](https://www.qemu.org/2021/08/22/fuse-blkexport/)
 * Jack support for low latency audio
 * Massively improved RISC-V support
 * Many fixes for the emulation of AMD virtualization extensions
 * Improved Power10 support
 * More devices for the microvm build (`virtio-gpu`, `vhost-user-gpu`, `virtio-input-host` and `vhost_user_input`)
 * Allow to remove the additional drivers of `qemu-block-extra`
 * Most common qemu features are now separate modules
 * s390x got improved storage key emulation (e.g. fixed address handling, lazy storage key enablement for TCG, ...)
 * See the upstream changelog for version [6.1](https://wiki.qemu.org/ChangeLog/6.1) and [6.2](https://wiki.qemu.org/ChangeLog/6.2) for an overview of the many further improvements. These also contain a list of suggested alternatives for removed, deprecated and incompatible features.

##### libvirt

Following the regular releases of libvirt version v8.0.0 is now provided in Ubunt 22.04 which includes:

 * Support hotplug and hotunplug for virtiofs
 * Introduce virtio-mem `<memory/>` model
 * qemu: Support librbd encryption
 * qemu: Add new API to inject a launch secret in a domain
 * enhanced swtpm integration (see swtpm below for more)
 * See the upstream [Changelogs](https://libvirt.org/news.html) for the many further improvements and fixes since version 7.6 that was in [Ubuntu 21.10](https://discourse.ubuntu.com/t/impish-indri-release-notes/21951).

##### virt-manager

The new version 4.0.0 of virt-manager is the most recent update after almost 1.5 years without a new upstream version) providing a list of new features:

 * shared memory configuration in the UI
 * virtiofs filesystem driver UI option
 * enable a TPM by default when UEFI is used
 * Use cpu host-passthrough by default on qemu x86
 * use virtio-gpu video for most modern distros
 * More details can be found on the [news page](https://github.com/virt-manager/virt-manager/blob/main/NEWS.md) and individual commits on the [projects website](https://github.com/virt-manager/virt-manager)

##### dpdk

Following the yearly flow of upstream DPDK LTS releases Ubuntu 22.04 contains the most recent DPDK LTS 21.11.
That contains various new device drivers, fixes and optimizations. Even the rather huge [release notes](http://doc.dpdk.org/guides/rel_notes/release_21_11.html) is just about 21.11 itself. Compared to the former DPDK LTS 20.11 that shipped with Ubuntu 21.10 you'd also want to read the DPDK release notes of [21.02](http://doc.dpdk.org/guides/rel_notes/release_21_02.html), [21.05](http://doc.dpdk.org/guides/rel_notes/release_21_05.html) and [21.08](http://doc.dpdk.org/guides/rel_notes/release_21_08.html).

##### openvswitch

The new version 2.17.0 of openvswitch is in Ubuntu 22.04 and provides a general update including the following changes:

 * Various features that ease the use of a userspace datapath.
 * Performance improvements for the OVSDB and clustered OVSDB which is heavily used in OVN deployments.
 * Brings compatibility with DPDK 21.11 (see above).
 * [The OVS News](https://www.openvswitch.org/releases/NEWS-2.17.0.txt) page holds more details about the new version.

##### swtpm

The `swtpm` as well as `libtpms` package is now available and supported in Ubuntu 22.04.

`swtpm` provides TPM emulators with different front-end interfaces to libtpms. TPM emulators provide socket interfaces (TCP/IP and unix) and the Linux CUSE interface for the creation of multiple native /dev/vtpm* devices..

A common use case for `swtpm` is to use it as virtual TPM for virtual machine and container use cases.
This is particular important for guest operating systems that consider TPM support mandatory.

See the [upstream wiki](https://github.com/stefanberger/swtpm/wiki) for more details.

#### Squid

* The `squid` package links against the GnuTLS library.  If you would like to use OpenSSL, you can install the new `squid-openssl` package.

#### cloud-init
                                                                                
Version 22.1 of cloud-init has been released to 22.04, 21.10, 20.04 and 18.04.
                                                                                
Notable features introduced since the last LTS release:
                                                                                
 * Clouds and datasources
   * Add LXD datasource in Jammy which reads dynamic instance data from LXD socket and applies config changes across reboot
   * Added a native VMWare datasource
   * OpenStack and ConfigDrive now support vendor_data2 config overrides
   * Azure boot speed improvements, network config validation and SSH key handling
   * GCE detected earlier in boot
 * Config Modules
   * Add [opt-in hotplug network support via user-data](https://cloudinit.readthedocs.io/en/latest/topics/modules.html#install-hotplug) for OpenStack and ConfigDrive
   * Add deferred write_files config to emit files later in boot
 * Usability
   * Schema validation of `#cloud-config` userdata to annotate specific errors in user-provided configuration

#### ubuntu-advantage-tools

Ubuntu-advantage-tools version 27.8 is released with Jammy.

Notable improvements introduced in this cycle:
 * Service offerings:
     * Ubuntu Pro and Ubuntu Pro FIPS images on Azure, GCP and AWS
     * GCP support to add Ubuntu Advantage licenses to existing VMs
     * AWS support for IPv6 IMDS
     * CIS benchmarks packaged as part of Ubuntu Security Guide (USG)
 * Usability
     * `ua security-status` provides a detailed view of available and applicable package updates provided by Ubuntu proper and Extended Security Maintenance channels
     * Enable Desktop installer to validate and attach Ubuntu Advantage tokens
     * Support machine-readable output JSON/YAML format for most commands
     * Configurable auto attach behavior via `ua attach --attach-config`
### Ubuntu Server Main Promotions
For Ubuntu Server 22.04 LTS, the following source packages were promoted to main:
 * [wireguard](https://www.wireguard.com): fast, modern, secure kernel VPN tunnel
 * [glusterfs](https://www.gluster.org/): cluster file-system capable of scaling to several peta-bytes
 * [frr](https://www.frrouting.org/): suite of internet routing protocols (BGP, OSPF, IS-IS, ...)

### LXD was updated to the new 5.0 LTS version

5.0 LTS significantly steps up LXD’s abilities, especially when operating in clustered environments. In comparison to LXD 4.0, virtual machines are now effectively at feature parity with containers, and a lot of networking options, clustering, and project features were added.

Some of the key changes include:

* **LXD virtual machines** now come with vTPM support as well as arbitrary PCI passthrough support. VMs can now be live-migrated and support some device hotplug and additional storage options.
* **Networking** now includes OVN support combined with BGP, DNS, floating IP and hardware acceleration support.
* **Projects** have grown a number of additional limits and restrictions, making it easy to safely grant access to various teams and limit their resource usage.
* **LXD-migrate** has been reworked with support for both containers and VMs
* **Cluster** users can now perform easy maintenance through cluster evacuation, group servers into target groups and get detailed instance metrics across entire clusters.

Additional details and a complete changelog can be found [here](https://discuss.linuxcontainers.org/t/lxd-5-0-lts-has-been-released/13723).


### Ceph

Ubuntu 22.04 includes the latest release candidate of the Ceph Quincy release.

Ceph packages will be updated as a [stable release update](https://bugs.launchpad.net/ubuntu/+source/ceph/+bug/1968318) once Quincy is released by the Ceph community.

### OpenStack

Ubuntu 22.04 includes the latest OpenStack release, Yoga, including the following components:

* OpenStack Identity - Keystone
* OpenStack Imaging - Glance
* OpenStack Block Storage - Cinder
* OpenStack Compute - Nova
* OpenStack Networking - Neutron
* OpenStack Telemetry - Ceilometer, Aodh, Gnocchi
* OpenStack Orchestration - Heat
* OpenStack Dashboard - Horizon
* OpenStack Object Storage - Swift
* OpenStack DNS - Designate
* OpenStack Bare-metal - Ironic
* OpenStack Filesystem - Manila
* OpenStack Key Manager - Barbican
* OpenStack Load Balancer - Octavia
* OpenStack Instance HA - Masakari

Please refer to the [OpenStack Yoga release notes](https://releases.openstack.org/yoga/) for full details of this release of OpenStack.

OpenStack Yoga is also provided via the [Ubuntu Cloud Archive](https://wiki.ubuntu.com/OpenStack/CloudArchive) for OpenStack Yoga for Ubuntu 20.04 LTS users.

WARNING: Upgrading an OpenStack deployment is a non-trivial process and care should be taken to plan and test upgrade procedures which will be specific to each OpenStack deployment.

Make sure you read the [OpenStack Charm Release Notes](https://docs.openstack.org/charm-guide/latest) for more information about how to deploy and operate Ubuntu OpenStack using Juju.

### needrestart and unattended operations

[needrestart](https://discourse.ubuntu.com/t/needrestart-for-servers/21552) was first installed by default in Ubuntu 21.04 and continues to feature in Ubuntu 22.04. It helps ensure that services are correctly restarted when their dependencies receive security updates.

By default, needrestart will prompt after upgrading packages if restarts are determined to be required. To suppress this behaviour, you can set `DEBIAN_FRONTEND=noninteractive` as usual. needrestart will then fall back to "list only mode". It will be necessary to restart services afterwards, for example by rebooting or invoking `needrestart -ra`.

## Platforms

### Cloud Images :cloud:

#### AWS
* AWS amd64 images use now a GPT partition table and setup a ESP partition to make it possible to use UEFI as boot mode.

#### Oracle
* Jammy Minimal images are available for ARM64 servers on Oracle Cloud Infrastructure. Note that OCI releases images on a fixed cadence, and Jammy release to OCI will be slightly delayed.

### Raspberry Pi :strawberry:

* The first long-term service (LTS) release of the Ubuntu Desktop for Raspberry Pi
* Support for several Pi-specific boards and tools have been added to the archive:
  * All variants of the popular Pimoroni [Unicorn HAT](https://shop.pimoroni.com/products/unicorn-hat?variant=932565325) are now supported with packaging
  * The official DSI touchscreen is now supported (however, see known issues below for a workaround regarding the desktop image)
  * The [rpiboot](https://launchpad.net/ubuntu/+source/rpiboot) package contains the [rpiboot](https://github.com/raspberrypi/usbboot) utility for working with Raspberry Pi Compute Modules (and other Pi boot facilities)
  * The [pyboard-rshell](https://launchpad.net/ubuntu/+source/pyboard-rshell) package contains the [rshell](https://pypi.org/project/rshell/) utility for working with micro-controller boards supporting MicroPython, including the Raspberry Pi Pico
  * The [rpi-imager](https://launchpad.net/ubuntu/+source/rpi-imager) package contains the Raspberry Pi imager utility. The equivalent [snap package](https://snapcraft.io/rpi-imager) has also been updated to operate on all architectures (and bumped to the current version)

### ppc64el

Starting with 22.04 LTS, Ubuntu Server for IBM POWER (ppc64el) is now compiled for Power9 processors using '--with-cpu=power9' ([bug 1930086](https://bugs.launchpad.net/bugs/1930086)).
Thus Ubuntu Server 22.04 LTS will not run, install or even boot on Power8 systems anymore, due to the different instruction set requirements.
Ubuntu Server 20.04 LTS can still be used for Power8 systems for several years - at least until end of base support in April 2025. Users running Ubuntu Server on Power8 today will be prevented from being upgraded to 22.04 LTS using ‘do-release-upgrade’, as this will obviously break such systems ([bug 1960255](https://bugs.launchpad.net/bugs/1960255)).
In addition, Ubuntu Server 22.04 LTS is the first Ubuntu release that comes with official support for IBM Power10 systems.

### s390x

Starting with Ubuntu Server 20.04 LTS (for IBM Z and LinuxONE), the minimal architectural level set was raised to z13 (and LinuxONE Rockhopper / Emperor) - this still applies to Ubuntu Server 22.04 LTS and support also includes all newer hardware that is in service as of today (22.04 release date). Support for additional future hardware might be added later.
Ubuntu Server 22.04 LTS can be installed in an LPAR (classic or DPM mode), as IBM z/VM guest, as KVM virtual machine and in different container environments, such as LXD, docker or kubernetes.

IBM Z and LinuxONE / s390x-specific enhancements since 21.10 (partially not limited to s390x):

  * Like mentioned above, 22.04 LTS is the first release that picked up OpenSSL 3, to be precise v3.0.2 ([bug 1905022](https://bugs.launchpad.net/bugs/1905022)), this transition triggered for compatibility reasons ([bug 1959736](https://bugs.launchpad.net/bugs/1959736)) further updates, that largely ended up in the renewal of the entire s390x crypto stack, including:
    * libica update to finally v4.0.1 ([bug 1959421](https://bugs.launchpad.net/bugs/1959421)), including extend statistics to reflect security measures ([bug 1959553](https://bugs.launchpad.net/bugs/1959553))
    * openssl-ibmca update ([bug 1958419](https://bugs.launchpad.net/bugs/1958419)) to finally 2.2.2 to ensure compatibility with libica4 ([bug 1960004](https://bugs.launchpad.net/bugs/1960004)).
    * opencryptoki update to v3.17.0+dfsg+20220202.b40982e (since the planned release date for 3.18 is post 22.04 GA) (Bug:1959419), including several (security) fixes and new features like in the key management tool (LP 1959577).
    * with that cryptsetup was updated as well ([bug 1959427](https://bugs.launchpad.net/bugs/1959427))
Further updates in the area of cryptography that are relevant for s390x are:
    * the upgrade of libgcrypt(20) to latest v1.9.4
    * in kernel crypto optimization of chacha20 now using a SIMD implementation ([bug 1853152](https://bugs.launchpad.net/bugs/1853152))
    * zcrypt device driver update for adding exploitation of new IBM Z crypto hardware ([bug 1959547](https://bugs.launchpad.net/bugs/1959547))
    * and finally the newly packaged IBM Z protected-key crypto library that provides interfaces for cryptographic primitives ([bug 1932522](https://bugs.launchpad.net/bugs/1932522))

  * Furthermore new network features were added, like Enhanced HSCI (HiperSockets Converged Interface) Multi-MAC support for enhancing KVM setups and z/OS interoperability (kernel LP: 1932137 and s390-tools LP: 1929721). And significant updates in the area of Shared Memory Communication (SMC), like EID (Enterprise ID) support (kernel LP: 1929060, s390-tools LP: 1929056), SMC statistics support ([bug 1959470](https://bugs.launchpad.net/bugs/1959470)) and SMC-R v2 support ([bug 1929035](https://bugs.launchpad.net/bugs/1929035)) - and with all that the smc-tools have been upgraded to latest v1.7.0 ([bug 1959428](https://bugs.launchpad.net/bugs/1959428)).

  * Several KVM and Secure Execution related new features landed too, like:
    * enablement of storage key checking for intercepted instructions handled by KVM ([bug 1933176](https://bugs.launchpad.net/bugs/1933176)) and by user-space ([bug 1933179](https://bugs.launchpad.net/bugs/1933179))
    * the 'access register mode' got enabled ([bug 1933178](https://bugs.launchpad.net/bugs/1933178))
    * allowing long kernel command lines for QEMU ([bug 1959984](https://bugs.launchpad.net/bugs/1959984)) and for Secure Execution guests ([bug 1959985](https://bugs.launchpad.net/bugs/1959985)).
    * enable guest interrupt support via GISA for Secure Execution guests ([bug 1959977](https://bugs.launchpad.net/bugs/1959977))
    * support for Secure Execution guest dump encryption with customer keys ([bug 1959965](https://bugs.launchpad.net/bugs/1959965))
    * and enablement of vfio-ccw and vfio-ap in virt-* tools, especially virt-manager ([bug 1959976](https://bugs.launchpad.net/bugs/1959976))
    * In addition the KVM_CAP_S390_MEM_OP_EXTENSION capability was raised to 211 ([bug 1963901](https://bugs.launchpad.net/bugs/1963901)) and KVM got improved SIGP architectural compliance ([bug 1959735](https://bugs.launchpad.net/bugs/1959735)).

  * The modernized tool-chain was needed in order to add support for new IBM Z hardware ([bug 1959379](https://bugs.launchpad.net/bugs/1959379)), and the 22.04 default gcc became v11.2 (12, 10 and 9 are in universe).
Binutils were aligned to gdb ([bug 1959407](https://bugs.launchpad.net/bugs/1959407)) and updated to v2.38 ([bug 1959463](https://bugs.launchpad.net/bugs/1959463)), again for adding support for new hardware ([bug 1959408](https://bugs.launchpad.net/bugs/1959408)).
And LLVM was updated as well for new hardware support ([bug 1959378](https://bugs.launchpad.net/bugs/1959378)) and to include further optimizations ([bug 1959406](https://bugs.launchpad.net/bugs/1959406)), but not only v13 is available, even v14 is the default.

  * On top new hardware support was added to glibc ([bug 1959385](https://bugs.launchpad.net/bugs/1959385) and LP: 1959383) while glibc was upgraded to latest v2.35 ([bug 1959429](https://bugs.launchpad.net/bugs/1959429)), which contains HWCAP_S390_PCI_MIO and HWCAP_S390_SIE ([bug 1959462](https://bugs.launchpad.net/bugs/1959462)).
The Perl Compatible Regular Expression Library PCRE2 was updated to v10.39 and includes improvements for s390x and full JIT performance ([bug 1959917](https://bugs.launchpad.net/bugs/1959917)).
The 'Eigen3' algebra library contains further optimizations for s390x too ([bug 1884725](https://bugs.launchpad.net/bugs/1884725)) and the query capacity library and utility for extracting system information 'qclib' was raised to v2.3.0 ([bug 1959464](https://bugs.launchpad.net/bugs/1959464)).
Finally a brand new low-level IBM Z Deep Neural Network Library (zDNN) library, that provides an interface for applications making use of Neural Network Processing Assist Facility (NNPA), got packaged and is now available ([bug 1959396](https://bugs.launchpad.net/bugs/1959396)).

  * A core component of Ubuntu Server for IBM Z is the s390-tools package, which was upgraded to v2.2.0 ([bug 1959420](https://bugs.launchpad.net/bugs/1959420)) in alignment to jammy's kernel 5.15, and includes among other features now an environment block implementation ([bug 1959409](https://bugs.launchpad.net/bugs/1959409)), that is a persistent configuration information which is evaluated during boot without the need to rewrite IPL records, an option to auto-activate PCI devices for DPM system ([bug 1959537](https://bugs.launchpad.net/bugs/1959537)) and the new multipath re-IPL feature ([bug 1959546](https://bugs.launchpad.net/bugs/1959546)).

  * The kernel received several s390x improvements as well, like kernel based support for new IBM Z hardware ([bug 1960187](https://bugs.launchpad.net/bugs/1960187)), new CPU-MF Counters for new hardware ([bug 1960117](https://bugs.launchpad.net/bugs/1960117)), support for long kernel command lines on s390x ([bug 1960580](https://bugs.launchpad.net/bugs/1960580)), transparent PCI device recovery support ([bug 1959532](https://bugs.launchpad.net/bugs/1959532)), enhanced user information on HBA firmware ([bug 1959545](https://bugs.launchpad.net/bugs/1959545)) and as clean-up the deactivation of the CONFIG_QETH_OSX kernel config option ([bug 1959890](https://bugs.launchpad.net/bugs/1959890)).

  * The service-call logical processor (SCLP) console interface driver (for 'Operating Systems Messages' line-mode and 'Integrated ASCII console' VT220) got two new debug features for logging relevant data for all sclp requests or just for failing sclp requests, which requires kernel ([bug 1960435](https://bugs.launchpad.net/bugs/1960435)) as well as s390-tools modifications ([bug 1960437](https://bugs.launchpad.net/bugs/1960437)).

### RISC-V

Starting with 22.04 LTS, besides the standard device-specific preinstalled image, we now also provide a live installer image for the RISC-V architecture. This can be helpful when wanting to install Ubuntu on an NVMe drive on an Unmatched board, for instance.

### UEFI and BIOS boot

Other operating systems are not displayed in the boot menu anymore, unless Ubuntu has been installed alongside another operating system. Once all other operating systems are removed from the machine, detection of other operating systems is disabled, and to re-enable if after installing another OS, you will have to delete `/boot/grub/grub.cfg` and immediately run `update-grub` again.

# Known Issues

As is to be expected, with any release, there are some significant known bugs that users may run into with this release of Ubuntu. The ones we know about at this point (and some of the workarounds), are documented here so you don’t need to spend time reporting these bugs again:

## Linux kernel

Nothing yet.

## Security
* OpenSSL 3.0.2 doesn't work with the [Turkish locale](https://launchpad.net/bugs/1968997).  To work around this issue until a fix is available, affected users are advised to set LC_CTYPE=C.UTF-8 in their environment for processes that use openssl (at a shell: `export LC_CTYPE=C.UTF-8`).  This will break capitalization of strings according to rules for the Turkish language, so is not recommended to be overridden at the system level.

## System
* systemd / journald now defaults to `zstd` compression and uses the “keyed hash” feature (upstream default as of v246). Therefore, journal files written on Ubuntu 22.04 (using systemd v249) cannot be opened using an older version of journal (i.e. from a 18.04/20.04/Core20 installation). This will fail with an error ([LP: #1953744](https://bugs.launchpad.net/subiquity/+bug/1953744), [forum.snapcraft.io](https://forum.snapcraft.io/t/accessing-journal-logs-from-22-04-hosts-when-using-older-base-snap/29627)):
    ```
    Journal file xxx.journal has unknown incompatible flags 0xc
    Failed to open journal file xxx.journal: Protocol not supported
    ```
* Users of grub-customizer could hit [a bug](https://pad.lv/1969353) in the late stage of the upgrade process leading to the final stage of the upgrade to fail (autoremoval of packages). A workaround is available [in the bug's comments](https://bugs.launchpad.net/ubuntu/+source/ubuntu-release-upgrader/+bug/1969353/comments/6).

## Ubuntu Desktop

* The Ubuntu Desktop images can be slow to boot (taking up to 10 minutes) when booted from a USB drive on a BIOS system. The issue is being [investigated](https://bugs.launchpad.net/ubuntu/+source/casper/+bug/1922342), however once the system is installed this is not an issue.
* The Ubuntu Desktop images can be very slow to boot (taking up to 30 minutes) when booted from optical media (DVD) on a a BIOS or UEFI system. This is due to an integrity checker being run against the installation media. A workaround (setting "fsck.mode=skip") is documented in [the relevant bug](https://bugs.launchpad.net/ubuntu/+source/casper/+bug/1930880).
* A hang of the Ubuntu Desktop installer, Ubiquity, [has been observed](https://bugs.launchpad.net/ubuntu/+source/linux/+bug/1946828),  where it is scanning NTFS partitions to determine if they can be resized.  The symptom of this is a spinning ball cursor when attempting to continue past the installer 'Updates and other software' screen.  If this occurs, please reboot and try again.
* The Firefox snap does not support the [NativeMessaging protocol](https://launchpad.net/bugs/1741074) yet but this feature is planned to be added soon. This means for instance that installing GNOME Shell extensions from Firefox won't work. As a workaround, you can try the `gnome-shell-extension-manager` app.
 * Brazilians (and others that need PKCS#11 smartcard support in Firefox) **should not upgrade to Jammy** until [pkcs#11 support is added to the firefox snap](https://bugs.launchpad.net/ubuntu/+source/firefox/+bug/1967632)
* The GNOME Tweaks app no longer manages GNOME Shell extensions. You can install `gnome-shell-extension-manager` instead.
* There isn't an option to use Wayland for systems with [Nvidia graphics drivers](https://launchpad.net/bugs/1968929).
* To use AppImages, you'll first [need to run](https://launchpad.net/bugs/1965636) `sudo apt install libfuse2`
* RDP (Remote Desktop) Sharing [appears on](https://launchpad.net/bugs/1969619) by default but it is not on and needs to be turned off and then turned on to enable.
* An upgrade to Ubuntu 22.04 LTS can cause [a bad interaction between snapd and update-notifier](https://bugs.launchpad.net/ubuntu/+source/snapd/+bug/1969162) which can cause the upgrade to hang. The fix is currently in flight and upgrades will be enabled shortly.

## Ubuntu Server

* Due to a [current issue with fallocate on zfs](https://bugs.launchpad.net/ubuntu/+source/zfs-linux/+bug/1969247), mysql fails to install on Jammy zfs systems 

## Platforms

### Cloud Images

#### Vagrant
* Jammy `vagrant` from `universe` does not support openssl3 upstream. This will cause users of vagrant on a Jammy host to receive OpenSSL errors on start. The box will still be booted, and `vagrant ssh` will operate, however `vagrant` functionality will be severely impacted. Connections between boxes will not operate normally. [bug report.](https://bugs.launchpad.net/ubuntu/+source/vagrant/+bug/1964025)
* Vagrant < 2.216 will fail to launch due to SSH connection issues. `vagrant`, as provided in the Ubuntu archives, does not reach >= 2.2.16 until Jammy .  One workaround is to use an upstream version of `vagrant` on your system. [Upstream bug, already fixed.](https://github.com/hashicorp/vagrant/issues/11783).  The Cloud Team is also working on a more permanent solution: [Public cloud-images bug](https://bugs.launchpad.net/cloud-images/+bug/1969664)

### Raspberry Pi

* The Raspberry Pi desktop images have switched to using the Full KMS graphics drivers. The official Raspberry Pi DSI display does not work with full KMS enabled. To enable the use of the Raspberry Pi DSI display, edit the `config.txt` file on your Raspberry Pi's hard drive and change the line `dtoverlay=vc4-fkms-v3d` to `dtoverlay=vc4-kms-v3d`
* Currently, the USB ports on the official IO board for the Compute Module 4 are inoperative ([bug 1969689](https://launchpad.net/bugs/1969689))
* On the desktop image, the Firefox snap can take some time (several minutes has been noted) to complete initialization after first login ([bug 1969529](https://launchpad.net/bugs/1969529))
* The legacy camera stack (MMAL based) is no longer supported on `arm64`; [libcamera] is the supported method of using the Pi Camera Module on the `arm64` architecture (the boot-time configuration will automatically load overlays for detected modules)

Carried over from interim releases (these are changes are applicable from LTS->LTS):

* After initial user setup on the desktop image, several packages can still be autoremoved ([bug 1925265](https://launchpad.net/bugs/1925265)); run `sudo apt autoremove` to work around this
* On the desktop image, the wrong audio output device is selected on each boot. A workaround is available in the bug report ([bug 1899962](https://launchpad.net/bugs/1899962))
* Various kernel modules have been moved from the `linux-modules-raspi` package in order to reduce the initramfs size. If you find an application failing due to missing kernel modules, please try the following:
  * `sudo apt install linux-modules-extra-raspi`

### s390x

No known issues yet.

# Official flavours

The release notes for the official flavours can be found at the following links:

* [Kubuntu Release Notes](https://wiki.ubuntu.com/JammyJellyfish/ReleaseNotes/Kubuntu)
* [Lubuntu Release Notes](https://discourse.lubuntu.me/t/lubuntu-22-04-lts-jammy-jellyfish-release-notes/3179)
* [Ubuntu Budgie Release Notes for 21.10 upgraders](https://ubuntubudgie.org/2022/03/ubuntu-budgie-22-04-lts-release-notes/) & [Ubuntu Budgie Release Notes for 20.04 upgraders](https://ubuntubudgie.org/2022/04/ubuntu-22-04-release-notes-for-20-04-upgraders/)
* [Ubuntu Kylin Release Notes](https://wiki.ubuntu.com/JammyJellyfish/ReleaseNotes/UbuntuKylin)
* [Ubuntu MATE Release Notes](https://ubuntu-mate.org/blog/ubuntu-mate-jammy-jellyfish-release-notes/)
* [Ubuntu Studio Release Notes](https://ubuntustudio.org/ubuntu-studio-22-04-lts-release-notes/)
* [Xubuntu Release Notes](https://wiki.xubuntu.org/releases/22.04/release-notes)

# More information

## Reporting bugs

Your comments, bug reports, patches and suggestions will help fix bugs and improve the quality of future releases. Please [report bugs using the tools provided](http://help.ubuntu.com/community/ReportingBugs). If you want to help out with bugs, the [Bug Squad](http://wiki.ubuntu.com/BugSquad) is always looking for help.

## Participate in Ubuntu

If you would like to help shape Ubuntu, take a look at the list of ways you can participate at:

* https://community.ubuntu.com/contribute

## More about Ubuntu

You can find out more about Ubuntu on the [Ubuntu website](https://www.ubuntu.com).

To sign up for future Ubuntu development announcements, please subscribe to Ubuntu’s development announcement list at:

* https://lists.ubuntu.com/mailman/listinfo/ubuntu-devel-announce