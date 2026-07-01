INSERT OR IGNORE INTO posts (slug, title, category, excerpt, content, cover_emoji, status) VALUES ('클라우드-컴퓨팅이란-무엇인가-개념부터-서비스-모델까지-1', '클라우드 컴퓨팅이란 무엇인가: 개념부터 서비스 모델까지', '클라우드 기초', 'IaaS, PaaS, SaaS의 차이와 클라우드 컴퓨팅이 기존 온프레미스 방식과 어떻게 다른지 기초부터 정리합니다.', '<p>클라우드 컴퓨팅은 서버, 스토리지, 데이터베이스, 네트워크, 소프트웨어 같은 컴퓨팅 자원을 인터넷을 통해 필요한 만큼 빌려 쓰는 방식을 말합니다. 과거에는 기업이 직접 서버실을 구축하고 하드웨어를 구매해야 했지만, 클라우드 환경에서는 사용한 만큼만 비용을 지불하며 필요할 때 즉시 자원을 늘리거나 줄일 수 있습니다.</p>

<h2>클라우드 서비스의 세 가지 모델</h2>
<p>클라우드 서비스는 일반적으로 IaaS, PaaS, SaaS 세 가지로 구분됩니다.</p>
<ul>
  <li><strong>IaaS(Infrastructure as a Service)</strong>: 가상 서버, 스토리지, 네트워크 등 인프라 자체를 제공합니다. AWS EC2, Google Compute Engine이 대표적입니다.</li>
  <li><strong>PaaS(Platform as a Service)</strong>: 애플리케이션을 개발하고 배포할 수 있는 플랫폼을 제공합니다. 개발자는 인프라 관리를 신경 쓰지 않고 코드에 집중할 수 있습니다.</li>
  <li><strong>SaaS(Software as a Service)</strong>: 완성된 소프트웨어를 웹 브라우저를 통해 바로 사용하는 방식으로, Gmail이나 Slack이 여기에 해당합니다.</li>
</ul>

<h2>왜 클라우드를 사용하는가</h2>
<p>클라우드의 가장 큰 장점은 탄력성입니다. 트래픽이 급증하는 이벤트 기간에는 서버를 자동으로 늘리고, 평상시에는 다시 줄여 비용을 절감할 수 있습니다. 또한 전 세계 여러 리전에 데이터센터를 두고 있어 사용자와 가까운 위치에서 서비스를 제공함으로써 응답 속도를 높일 수 있습니다.</p>

<h2>온프레미스와의 차이</h2>
<p>온프레미스 환경은 초기 투자 비용이 크고 확장에 시간이 걸리는 반면, 클라우드는 초기 비용 부담이 적고 몇 분 안에 새로운 서버를 생성할 수 있습니다. 다만 장기적으로 사용량이 많아지면 오히려 온프레미스가 비용 면에서 유리할 수도 있어, 기업의 상황에 맞는 전략적 선택이 필요합니다.</p>

<h2>정리</h2>
<p>클라우드 컴퓨팅은 단순한 유행이 아니라 IT 인프라를 운영하는 방식 자체를 바꾼 패러다임입니다. 다음 글에서는 대표적인 클라우드 제공업체인 AWS, GCP, Azure를 비교해보겠습니다.</p>', '☁️', 'published');
INSERT OR IGNORE INTO posts (slug, title, category, excerpt, content, cover_emoji, status) VALUES ('aws-vs-gcp-vs-azure-3대-클라우드-플랫폼-비교-2', 'AWS vs GCP vs Azure: 3대 클라우드 플랫폼 비교', '클라우드 기초', '세계 3대 클라우드 서비스의 특징과 강점을 비교하여 프로젝트에 맞는 플랫폼 선택을 돕습니다.', '<p>클라우드 시장은 Amazon Web Services(AWS), Google Cloud Platform(GCP), Microsoft Azure 세 업체가 대부분을 차지하고 있습니다. 각 플랫폼은 저마다 강점이 다르기 때문에 프로젝트의 성격에 따라 적합한 선택이 달라집니다.</p>

<h2>AWS: 가장 폭넓은 서비스와 생태계</h2>
<p>AWS는 2006년 가장 먼저 클라우드 서비스를 시작한 선두주자로, 시장 점유율이 가장 높습니다. 200개가 넘는 서비스를 제공하며 스타트업부터 대기업까지 폭넓게 사용됩니다. 특히 EC2, S3, Lambda 같은 서비스는 업계 표준처럼 여겨질 정도로 널리 쓰입니다.</p>

<h2>GCP: 데이터 분석과 AI에 강점</h2>
<p>Google Cloud는 빅쿼리(BigQuery)와 같은 데이터 분석 도구, 그리고 자체 개발한 TPU를 활용한 머신러닝 인프라에서 강점을 보입니다. Kubernetes를 처음 만든 회사인 만큼 컨테이너 오케스트레이션 분야에서도 신뢰도가 높습니다.</p>

<h2>Azure: 기업 및 하이브리드 클라우드에 최적화</h2>
<p>Microsoft Azure는 기존에 Windows Server나 Active Directory를 사용하던 기업들이 자연스럽게 이전하기 좋은 환경을 제공합니다. Office 365, Teams 등과의 연동성이 뛰어나 대기업의 하이브리드 클라우드 전략에 자주 채택됩니다.</p>

<h2>선택 기준</h2>
<p>단순히 인지도만으로 플랫폼을 선택하기보다는 팀의 기술 스택, 예산, 필요한 관리형 서비스의 종류를 고려해야 합니다. 스타트업이라면 무료 크레딧과 커뮤니티 자료가 풍부한 AWS나 GCP를, 기존 Microsoft 생태계를 사용 중이라면 Azure를 우선 검토하는 것이 합리적입니다.</p>', '🌐', 'published');
INSERT OR IGNORE INTO posts (slug, title, category, excerpt, content, cover_emoji, status) VALUES ('리눅스-서버-기초-처음-시작하는-서버-관리-3', '리눅스 서버 기초: 처음 시작하는 서버 관리', '서버 운영', '리눅스 서버를 처음 다루는 사람을 위한 기본 명령어와 디렉토리 구조, 필수 개념을 소개합니다.', '<p>서버를 운영하려면 대부분 리눅스 운영체제를 다루게 됩니다. 리눅스는 오픈소스이면서도 안정성이 높아 전 세계 서버의 절대 다수가 채택하고 있습니다. 이번 글에서는 서버 관리를 처음 시작하는 사람이 알아야 할 기본 개념을 정리합니다.</p>

<h2>기본 디렉토리 구조</h2>
<p>리눅스는 파일 시스템 계층 구조(FHS)를 따르며, 대표적인 디렉토리는 다음과 같습니다.</p>
<ul>
  <li><code>/etc</code>: 시스템 설정 파일이 위치합니다.</li>
  <li><code>/var/log</code>: 각종 로그 파일이 저장됩니다.</li>
  <li><code>/home</code>: 사용자 개인 디렉토리입니다.</li>
  <li><code>/usr/bin</code>: 사용자가 실행할 수 있는 프로그램들이 위치합니다.</li>
</ul>

<h2>필수 명령어</h2>
<pre><code>ls -al          # 파일 목록을 상세히 확인
cd /var/log     # 디렉토리 이동
cat access.log  # 파일 내용 출력
tail -f app.log # 로그 실시간 확인
top             # 실행 중인 프로세스 확인
df -h           # 디스크 사용량 확인</code></pre>

<h2>패키지 관리</h2>
<p>Ubuntu/Debian 계열은 <code>apt</code>, CentOS/RHEL 계열은 <code>yum</code> 또는 <code>dnf</code>를 사용해 소프트웨어를 설치하고 관리합니다. 예를 들어 Nginx를 설치하려면 Ubuntu에서는 <code>sudo apt install nginx</code> 명령을 사용합니다.</p>

<h2>사용자 및 권한 관리</h2>
<p>리눅스는 각 파일과 디렉토리에 읽기, 쓰기, 실행 권한을 세밀하게 설정할 수 있습니다. <code>chmod</code>, <code>chown</code> 명령으로 권한과 소유자를 변경하며, 보안을 위해 root 계정을 직접 사용하기보다는 일반 사용자 계정에 sudo 권한을 부여하는 것이 권장됩니다.</p>

<h2>마무리</h2>
<p>서버 관리는 반복적인 실습을 통해 익숙해지는 영역입니다. 가상 머신이나 클라우드의 무료 티어를 활용해 직접 서버를 만들고 명령어를 연습해보는 것이 가장 좋은 학습 방법입니다.</p>', '🐧', 'published');
INSERT OR IGNORE INTO posts (slug, title, category, excerpt, content, cover_emoji, status) VALUES ('ssh로-원격-서버에-안전하게-접속하는-방법-4', 'SSH로 원격 서버에 안전하게 접속하는 방법', '서버 운영', 'SSH의 동작 원리와 키 기반 인증 설정, 보안 강화를 위한 실전 팁을 다룹니다.', '<p>SSH(Secure Shell)는 원격 서버에 암호화된 통신으로 접속할 수 있게 해주는 프로토콜입니다. 서버 관리자는 대부분의 작업을 SSH를 통해 수행하기 때문에 올바른 설정과 보안 관리가 매우 중요합니다.</p>

<h2>기본 접속 방법</h2>
<pre><code>ssh username@server_ip
ssh -p 2222 username@server_ip   # 포트를 변경한 경우</code></pre>

<h2>비밀번호 대신 키 기반 인증 사용하기</h2>
<p>비밀번호 인증은 무차별 대입 공격에 취약할 수 있습니다. SSH 키 페어(공개키/개인키)를 사용하면 훨씬 안전하게 접속할 수 있습니다.</p>
<pre><code>ssh-keygen -t ed25519 -C "my-server-key"
ssh-copy-id username@server_ip</code></pre>
<p>위 명령으로 키를 생성하고 서버에 공개키를 등록하면, 이후 개인키만으로 비밀번호 없이 로그인할 수 있습니다.</p>

<h2>보안을 강화하는 설정</h2>
<p><code>/etc/ssh/sshd_config</code> 파일에서 다음과 같은 설정을 조정하면 보안을 크게 강화할 수 있습니다.</p>
<ul>
  <li><code>PermitRootLogin no</code>: root 계정으로 직접 로그인하는 것을 차단합니다.</li>
  <li><code>PasswordAuthentication no</code>: 비밀번호 인증을 비활성화하고 키 인증만 허용합니다.</li>
  <li><code>Port 22222</code>: 기본 포트를 변경해 자동화된 스캔 공격을 줄입니다.</li>
</ul>

<h2>Fail2ban으로 추가 방어하기</h2>
<p>Fail2ban은 짧은 시간 내 반복적으로 로그인에 실패한 IP를 자동으로 차단해주는 도구입니다. 설치 후 기본 설정만으로도 무차별 대입 공격에 대한 방어력을 크게 높일 수 있습니다.</p>

<h2>정리</h2>
<p>SSH는 서버 관리의 출입문과 같습니다. 키 기반 인증, 포트 변경, Fail2ban 도입만으로도 대부분의 자동화된 공격을 효과적으로 막을 수 있으니 서버를 구축한 직후 반드시 적용하는 것을 권장합니다.</p>', '🔑', 'published');
INSERT OR IGNORE INTO posts (slug, title, category, excerpt, content, cover_emoji, status) VALUES ('docker-입문-컨테이너란-무엇이고-왜-사용하는가-5', 'Docker 입문: 컨테이너란 무엇이고 왜 사용하는가', '컨테이너', '가상 머신과 컨테이너의 차이, Docker의 기본 개념과 첫 컨테이너 실행까지 단계별로 설명합니다.', '<p>Docker는 애플리케이션을 컨테이너라는 격리된 환경에 담아 어디서든 동일하게 실행할 수 있게 해주는 플랫폼입니다. "내 컴퓨터에서는 잘 되는데요"라는 흔한 문제를 해결해주는 도구로 널리 알려져 있습니다.</p>

<h2>가상 머신과 컨테이너의 차이</h2>
<p>가상 머신(VM)은 하이퍼바이저 위에 각각 독립된 운영체제를 통째로 올리는 방식이라 무겁고 부팅이 느립니다. 반면 컨테이너는 호스트 운영체제의 커널을 공유하면서 프로세스 단위로 격리되기 때문에 훨씬 가볍고 몇 초 안에 실행됩니다.</p>

<h2>기본 개념: 이미지와 컨테이너</h2>
<p>Docker 이미지는 애플리케이션 실행에 필요한 코드, 라이브러리, 설정을 담은 읽기 전용 템플릿입니다. 이 이미지를 실행한 상태가 바로 컨테이너입니다.</p>
<pre><code>docker pull nginx              # 이미지 다운로드
docker run -d -p 8080:80 nginx # 컨테이너 실행
docker ps                      # 실행 중인 컨테이너 확인
docker stop &lt;container_id&gt;     # 컨테이너 중지</code></pre>

<h2>Dockerfile로 이미지 만들기</h2>
<p>직접 만든 애플리케이션을 이미지로 만들려면 Dockerfile을 작성합니다.</p>
<pre><code>FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "server.js"]</code></pre>
<p>이 파일을 기반으로 <code>docker build -t my-app .</code> 명령을 실행하면 나만의 이미지를 만들 수 있습니다.</p>

<h2>왜 Docker를 쓰는가</h2>
<p>개발, 테스트, 운영 환경의 차이에서 발생하는 문제를 원천적으로 줄여주고, 여러 애플리케이션을 하나의 서버에서 충돌 없이 운영할 수 있게 해줍니다. 또한 마이크로서비스 아키텍처와 CI/CD 파이프라인의 핵심 구성 요소로 자리 잡았습니다.</p>', '🐳', 'published');
INSERT OR IGNORE INTO posts (slug, title, category, excerpt, content, cover_emoji, status) VALUES ('kubernetes-기초-컨테이너-오케스트레이션이-필요한-이유-6', 'Kubernetes 기초: 컨테이너 오케스트레이션이 필요한 이유', '컨테이너', 'Docker 컨테이너가 많아질 때 왜 Kubernetes가 필요한지, 핵심 구성 요소는 무엇인지 알아봅니다.', '<p>컨테이너 하나 정도는 수동으로 관리할 수 있지만, 서비스가 성장하면서 수십, 수백 개의 컨테이너를 운영해야 하는 상황이 옵니다. 이때 필요한 것이 바로 컨테이너 오케스트레이션 도구인 Kubernetes(쿠버네티스)입니다.</p>

<h2>Kubernetes가 해결하는 문제</h2>
<p>Kubernetes는 컨테이너의 배포, 확장, 장애 복구를 자동화합니다. 특정 컨테이너가 다운되면 자동으로 새 컨테이너를 띄우고, 트래픽이 몰리면 컨테이너 수를 자동으로 늘리는 오토스케일링 기능도 제공합니다.</p>

<h2>핵심 구성 요소</h2>
<ul>
  <li><strong>Pod</strong>: 하나 이상의 컨테이너를 묶은 최소 배포 단위입니다.</li>
  <li><strong>Node</strong>: Pod가 실제로 실행되는 서버(가상 머신)입니다.</li>
  <li><strong>Deployment</strong>: Pod의 원하는 상태를 정의하고 유지 관리합니다.</li>
  <li><strong>Service</strong>: Pod에 접근할 수 있는 안정적인 네트워크 엔드포인트를 제공합니다.</li>
  <li><strong>Control Plane</strong>: 클러스터 전체의 상태를 관리하는 두뇌 역할을 합니다.</li>
</ul>

<h2>간단한 예시</h2>
<pre><code>apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-app
        image: my-app:latest
        ports:
        - containerPort: 3000</code></pre>
<p>위 YAML 파일은 my-app이라는 컨테이너를 3개의 복제본(replica)으로 실행하도록 정의합니다.</p>

<h2>언제 Kubernetes가 필요한가</h2>
<p>모든 프로젝트에 Kubernetes가 필요한 것은 아닙니다. 트래픽이 적고 컨테이너 수가 적다면 Docker Compose만으로도 충분합니다. 하지만 서비스 규모가 커지고 무중단 배포, 자동 확장, 장애 복구가 중요해진다면 Kubernetes 도입을 검토할 시점입니다.</p>', '⚙️', 'published');
INSERT OR IGNORE INTO posts (slug, title, category, excerpt, content, cover_emoji, status) VALUES ('nginx-리버스-프록시-설정-완벽-가이드-7', 'Nginx 리버스 프록시 설정 완벽 가이드', '서버 운영', 'Nginx를 리버스 프록시로 활용해 여러 애플리케이션을 하나의 도메인으로 서비스하는 방법을 알아봅니다.', '<p>Nginx는 웹 서버이자 리버스 프록시로서 매우 널리 사용되는 소프트웨어입니다. 리버스 프록시란 클라이언트의 요청을 받아 내부의 실제 애플리케이션 서버로 전달해주는 중개자 역할을 합니다.</p>

<h2>리버스 프록시가 필요한 이유</h2>
<p>백엔드 애플리케이션을 외부에 직접 노출하지 않고 Nginx를 앞단에 두면, SSL 인증서 처리, 로드 밸런싱, 캐싱, 요청 필터링 같은 작업을 한 곳에서 통합 관리할 수 있습니다.</p>

<h2>기본 설정 예시</h2>
<pre><code>server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}</code></pre>
<p>위 설정은 example.com으로 들어오는 요청을 로컬 3000번 포트에서 실행 중인 애플리케이션으로 전달합니다.</p>

<h2>여러 서비스를 하나의 도메인으로 운영하기</h2>
<p>경로 기반 라우팅을 사용하면 하나의 도메인 아래 여러 서비스를 나누어 운영할 수 있습니다.</p>
<pre><code>location /api/ {
    proxy_pass http://127.0.0.1:4000/;
}
location /admin/ {
    proxy_pass http://127.0.0.1:5000/;
}</code></pre>

<h2>HTTPS 적용하기</h2>
<p>Let''s Encrypt와 Certbot을 사용하면 무료로 SSL 인증서를 발급받아 HTTPS를 적용할 수 있습니다. <code>certbot --nginx</code> 명령 한 번으로 인증서 발급부터 Nginx 설정 변경까지 자동으로 처리됩니다.</p>

<h2>정리</h2>
<p>Nginx 리버스 프록시는 단순한 웹 서버를 넘어 트래픽 관리의 핵심 허브 역할을 합니다. 설정 파일 문법에 익숙해지면 복잡한 인프라도 유연하게 구성할 수 있습니다.</p>', '🌀', 'published');
INSERT OR IGNORE INTO posts (slug, title, category, excerpt, content, cover_emoji, status) VALUES ('서버-로드-밸런싱의-개념과-주요-알고리즘-8', '서버 로드 밸런싱의 개념과 주요 알고리즘', '네트워크', '트래픽이 늘어날 때 서버를 어떻게 분산시키는지, 로드 밸런싱의 원리와 대표 알고리즘을 소개합니다.', '<p>서비스 이용자가 늘어나면 하나의 서버로는 모든 요청을 처리하기 어려워집니다. 이때 여러 대의 서버에 트래픽을 고르게 분산시켜주는 기술이 바로 로드 밸런싱입니다.</p>

<h2>로드 밸런싱이 필요한 이유</h2>
<p>단일 서버에 장애가 발생하면 서비스 전체가 중단될 수 있습니다. 여러 서버에 트래픽을 분산하면 하나의 서버가 다운되더라도 나머지 서버가 요청을 처리해 서비스 가용성을 유지할 수 있습니다.</p>

<h2>대표적인 로드 밸런싱 알고리즘</h2>
<ul>
  <li><strong>라운드 로빈(Round Robin)</strong>: 요청을 순서대로 각 서버에 균등하게 분배합니다.</li>
  <li><strong>최소 연결(Least Connections)</strong>: 현재 연결 수가 가장 적은 서버로 요청을 보냅니다.</li>
  <li><strong>IP 해시(IP Hash)</strong>: 클라이언트의 IP를 기준으로 항상 같은 서버로 요청을 보내 세션을 유지합니다.</li>
  <li><strong>가중 라운드 로빈(Weighted Round Robin)</strong>: 서버의 성능에 따라 가중치를 부여해 트래픽 비율을 조정합니다.</li>
</ul>

<h2>L4 vs L7 로드 밸런서</h2>
<p>L4 로드 밸런서는 IP와 포트 정보만으로 트래픽을 분산하기 때문에 속도가 빠릅니다. 반면 L7 로드 밸런서는 HTTP 헤더나 URL 경로까지 확인해 더 정교한 라우팅이 가능하지만 처리 부하가 다소 높습니다.</p>

<h2>클라우드 환경에서의 로드 밸런서</h2>
<p>AWS의 ALB(Application Load Balancer), GCP의 Cloud Load Balancing처럼 클라우드 업체들은 관리형 로드 밸런서 서비스를 제공합니다. 직접 Nginx나 HAProxy로 구성할 수도 있지만, 관리형 서비스를 사용하면 헬스체크, 오토스케일링과의 연동을 훨씬 간편하게 처리할 수 있습니다.</p>

<h2>마무리</h2>
<p>로드 밸런싱은 서비스 규모가 커질수록 반드시 고려해야 하는 핵심 인프라 요소입니다. 알고리즘의 특성을 이해하고 서비스 성격에 맞는 방식을 선택하는 것이 중요합니다.</p>', '⚖️', 'published');
INSERT OR IGNORE INTO posts (slug, title, category, excerpt, content, cover_emoji, status) VALUES ('cdn이란-무엇인가-콘텐츠-전송-네트워크의-원리-9', 'CDN이란 무엇인가: 콘텐츠 전송 네트워크의 원리', '네트워크', '웹사이트 속도를 크게 개선해주는 CDN의 동작 원리와 대표 서비스들을 살펴봅니다.', '<p>CDN(Content Delivery Network)은 전 세계 여러 지역에 분산된 서버 네트워크를 이용해 사용자에게 콘텐츠를 더 빠르게 전달하는 기술입니다. 이미지, 동영상, CSS, JavaScript 같은 정적 파일을 사용자와 가장 가까운 서버에서 제공함으로써 로딩 속도를 크게 개선합니다.</p>

<h2>CDN의 동작 원리</h2>
<p>원본 서버(Origin Server)가 한 곳에만 있다면 지구 반대편 사용자는 물리적 거리 때문에 응답 속도가 느릴 수밖에 없습니다. CDN은 전 세계 여러 곳에 엣지 서버(Edge Server)를 두고 원본 서버의 콘텐츠를 캐싱해, 사용자의 요청이 가장 가까운 엣지 서버에서 처리되도록 합니다.</p>

<h2>CDN 사용의 장점</h2>
<ul>
  <li>페이지 로딩 속도 개선으로 사용자 경험 향상</li>
  <li>원본 서버의 트래픽 부하 감소</li>
  <li>DDoS 공격 등 악성 트래픽에 대한 1차 방어</li>
  <li>전 세계 어디서든 안정적인 접속 속도 제공</li>
</ul>

<h2>대표적인 CDN 서비스</h2>
<p>Cloudflare, AWS CloudFront, Akamai, Fastly 등이 대표적인 CDN 서비스입니다. 특히 Cloudflare는 무료 플랜으로도 강력한 CDN과 보안 기능을 제공해 개인 개발자나 소규모 프로젝트에서 널리 사용됩니다.</p>

<h2>캐시 전략의 중요성</h2>
<p>CDN을 효과적으로 활용하려면 캐시 유효기간(TTL)을 적절히 설정하는 것이 중요합니다. 자주 변하지 않는 정적 리소스는 긴 캐시 기간을, 자주 업데이트되는 콘텐츠는 짧은 캐시 기간이나 캐시 무효화(Cache Invalidation) 전략을 사용해야 합니다.</p>

<h2>정리</h2>
<p>CDN은 이제 대규모 서비스뿐 아니라 개인 블로그나 소규모 웹사이트에서도 기본적으로 고려해야 할 요소가 되었습니다. 적절한 CDN 도입만으로도 체감 속도를 크게 개선할 수 있습니다.</p>', '🚀', 'published');
INSERT OR IGNORE INTO posts (slug, title, category, excerpt, content, cover_emoji, status) VALUES ('서버-모니터링이-중요한-이유와-필수-지표-10', '서버 모니터링이 중요한 이유와 필수 지표', '서버 운영', '장애를 사전에 방지하기 위한 서버 모니터링의 필요성과 반드시 확인해야 할 핵심 지표를 정리합니다.', '<p>서버는 눈에 보이지 않는 곳에서 24시간 동작하기 때문에, 문제가 생겨도 모니터링 시스템이 없다면 사용자의 신고를 받고 나서야 장애를 인지하게 됩니다. 체계적인 모니터링은 장애를 사전에 예방하고 원인을 빠르게 파악하는 데 필수적입니다.</p>

<h2>반드시 확인해야 할 핵심 지표</h2>
<ul>
  <li><strong>CPU 사용률</strong>: 지속적으로 높은 CPU 사용률은 성능 저하나 병목의 신호입니다.</li>
  <li><strong>메모리 사용률</strong>: 메모리 부족은 스왑(Swap) 사용을 유발해 응답 속도를 크게 떨어뜨립니다.</li>
  <li><strong>디스크 I/O 및 용량</strong>: 디스크 공간이 가득 차면 로그 기록이나 데이터베이스 쓰기 작업이 실패할 수 있습니다.</li>
  <li><strong>네트워크 트래픽</strong>: 비정상적인 트래픽 급증은 DDoS 공격이나 애플리케이션 버그의 신호일 수 있습니다.</li>
  <li><strong>응답 시간과 에러율</strong>: 사용자 체감 성능을 가장 직접적으로 보여주는 지표입니다.</li>
</ul>

<h2>대표적인 모니터링 도구</h2>
<p>Prometheus와 Grafana 조합은 오픈소스 모니터링의 사실상 표준으로 자리 잡았습니다. Prometheus가 지표를 수집하고 저장하면, Grafana가 이를 시각적인 대시보드로 보여줍니다. 그 외에도 Datadog, New Relic 같은 상용 SaaS 도구도 널리 사용됩니다.</p>

<h2>알림(Alerting) 설정의 중요성</h2>
<p>지표를 눈으로 확인하는 것만으로는 즉각적인 대응이 어렵습니다. CPU 사용률이 90%를 넘거나 에러율이 급증할 때 Slack이나 이메일로 즉시 알림을 받도록 설정해두면 장애 대응 시간을 크게 단축할 수 있습니다.</p>

<h2>로그 수집도 함께</h2>
<p>지표 모니터링과 함께 로그를 중앙에서 수집하는 것도 중요합니다. ELK 스택(Elasticsearch, Logstash, Kibana)이나 클라우드의 관리형 로그 서비스를 활용하면 여러 서버에 흩어진 로그를 한곳에서 검색하고 분석할 수 있습니다.</p>

<h2>정리</h2>
<p>모니터링은 "문제가 생기면 확인하는 도구"가 아니라 "문제가 생기기 전에 알려주는 시스템"으로 설계해야 합니다. 초기 설정에 시간이 들더라도 장기적으로는 훨씬 안정적인 서비스 운영이 가능합니다.</p>', '📈', 'published');
INSERT OR IGNORE INTO posts (slug, title, category, excerpt, content, cover_emoji, status) VALUES ('서버-보안-기초-반드시-지켜야-할-체크리스트-11', '서버 보안 기초: 반드시 지켜야 할 체크리스트', '보안', '서버를 처음 구축할 때 반드시 점검해야 할 기본 보안 설정 항목들을 체크리스트 형태로 정리합니다.', '<p>서버는 인터넷에 노출되는 순간부터 끊임없이 자동화된 공격 스캔의 대상이 됩니다. 복잡한 보안 솔루션을 도입하기 전에 기본적인 보안 수칙만 지켜도 대부분의 공격을 막을 수 있습니다.</p>

<h2>1. 방화벽 설정</h2>
<p>필요한 포트만 열어두는 것이 기본 원칙입니다. 웹 서버라면 80, 443 포트, SSH라면 변경한 포트만 열고 나머지는 모두 차단해야 합니다. Ubuntu에서는 UFW를 사용해 간단히 설정할 수 있습니다.</p>
<pre><code>sudo ufw allow 80
sudo ufw allow 443
sudo ufw allow 22222
sudo ufw enable</code></pre>

<h2>2. 정기적인 시스템 업데이트</h2>
<p>운영체제와 소프트웨어의 보안 취약점은 지속적으로 발견되고 패치됩니다. <code>sudo apt update && sudo apt upgrade</code>를 정기적으로 실행하거나 자동 업데이트를 설정해두는 것이 중요합니다.</p>

<h2>3. 최소 권한 원칙</h2>
<p>모든 작업을 root 계정으로 수행하지 말고, 필요한 권한만 가진 별도 계정을 만들어 사용해야 합니다. 데이터베이스 계정 역시 애플리케이션이 필요한 최소한의 권한만 부여받아야 합니다.</p>

<h2>4. 비밀번호와 시크릿 관리</h2>
<p>API 키나 데이터베이스 비밀번호를 코드에 직접 작성하지 말고 환경 변수나 시크릿 관리 도구(예: AWS Secrets Manager, Cloudflare Secrets)를 사용해야 합니다. 소스코드 저장소에 민감한 정보가 올라가지 않도록 <code>.gitignore</code> 설정도 필수입니다.</p>

<h2>5. 정기적인 백업</h2>
<p>보안 사고나 실수로 데이터가 손상되었을 때 복구할 수 있는 유일한 방법은 백업입니다. 자동화된 백업 스케줄을 설정하고, 백업 파일이 실제로 복원 가능한지 주기적으로 테스트해야 합니다.</p>

<h2>마무리</h2>
<p>보안은 한 번 설정하고 끝나는 것이 아니라 지속적으로 점검하고 개선해야 하는 과정입니다. 위의 다섯 가지 기본 원칙만 잘 지켜도 대부분의 흔한 공격으로부터 서버를 보호할 수 있습니다.</p>', '🛡️', 'published');
INSERT OR IGNORE INTO posts (slug, title, category, excerpt, content, cover_emoji, status) VALUES ('https와-ssltls-인증서-제대로-이해하기-12', 'HTTPS와 SSL/TLS 인증서, 제대로 이해하기', '보안', '웹사이트 주소창의 자물쇠 아이콘이 의미하는 것과 SSL/TLS 인증서의 동작 원리를 알아봅니다.', '<p>웹사이트 주소가 http가 아닌 https로 시작하는 것을 흔히 볼 수 있습니다. 이 ''s''는 Secure를 의미하며, SSL/TLS 프로토콜을 통해 브라우저와 서버 간 통신이 암호화되었다는 것을 나타냅니다.</p>

<h2>왜 HTTPS가 필요한가</h2>
<p>암호화되지 않은 HTTP 통신은 중간에서 누군가 데이터를 가로채 읽거나 조작할 수 있습니다. 로그인 정보, 결제 정보 같은 민감한 데이터를 다루는 사이트라면 HTTPS는 선택이 아닌 필수입니다. 또한 Google을 비롯한 검색 엔진은 HTTPS를 사용하지 않는 사이트의 검색 순위를 낮추는 정책을 가지고 있습니다.</p>

<h2>SSL과 TLS의 차이</h2>
<p>SSL(Secure Sockets Layer)은 TLS(Transport Layer Security)의 이전 버전으로, 현재는 보안 취약점 때문에 사용이 중단되었습니다. 지금 사용되는 것은 사실상 모두 TLS이지만, 관용적으로 여전히 ''SSL 인증서''라는 표현이 널리 쓰입니다.</p>

<h2>인증서 발급 방법</h2>
<p>과거에는 SSL 인증서를 유료로 구매해야 했지만, 지금은 Let''s Encrypt라는 비영리 기관이 무료로 인증서를 발급해줍니다. Certbot 도구를 사용하면 몇 분 안에 인증서를 발급받고 자동 갱신까지 설정할 수 있습니다.</p>
<pre><code>sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d example.com -d www.example.com</code></pre>

<h2>인증서의 동작 원리 간단히 이해하기</h2>
<p>TLS는 공개키 암호화 방식을 사용합니다. 서버는 공개키가 담긴 인증서를 브라우저에 전달하고, 브라우저는 이를 통해 서버의 신원을 확인한 뒤 암호화된 세션 키를 교환합니다. 이후 통신은 이 세션 키로 암호화되어 제3자가 내용을 알아볼 수 없게 됩니다.</p>

<h2>Cloudflare를 활용한 손쉬운 HTTPS 적용</h2>
<p>Cloudflare 같은 서비스를 사용하면 별도의 인증서 관리 없이도 자동으로 HTTPS를 적용할 수 있습니다. 도메인의 네임서버를 Cloudflare로 옮기기만 하면 무료로 SSL 인증서가 발급되고 자동으로 갱신됩니다.</p>', '🔒', 'published');
INSERT OR IGNORE INTO posts (slug, title, category, excerpt, content, cover_emoji, status) VALUES ('cicd-파이프라인-구축-기초-배포-자동화의-시작-13', 'CI/CD 파이프라인 구축 기초: 배포 자동화의 시작', 'DevOps', '코드를 푸시하면 자동으로 테스트하고 배포되는 CI/CD 파이프라인의 개념과 기본 구성 방법을 설명합니다.', '<p>CI/CD는 지속적 통합(Continuous Integration)과 지속적 배포(Continuous Deployment)의 약자로, 코드 변경사항을 자동으로 테스트하고 서버에 배포하는 과정을 자동화하는 것을 의미합니다.</p>

<h2>CI/CD가 필요한 이유</h2>
<p>수동으로 파일을 서버에 업로드하고 서비스를 재시작하는 방식은 실수가 발생하기 쉽고 시간도 많이 걸립니다. CI/CD 파이프라인을 구축하면 코드를 저장소에 푸시하는 순간부터 테스트, 빌드, 배포까지 자동으로 진행되어 개발자는 코드 작성에만 집중할 수 있습니다.</p>

<h2>CI/CD 파이프라인의 기본 단계</h2>
<ul>
  <li><strong>Build</strong>: 소스코드를 컴파일하거나 의존성을 설치합니다.</li>
  <li><strong>Test</strong>: 단위 테스트, 통합 테스트를 자동으로 실행합니다.</li>
  <li><strong>Deploy</strong>: 테스트를 통과한 코드를 실제 서버나 클라우드 환경에 배포합니다.</li>
</ul>

<h2>GitHub Actions 예시</h2>
<pre><code>name: Deploy
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
      - name: Deploy
        run: npm run deploy</code></pre>
<p>위 워크플로우는 main 브랜치에 코드가 푸시될 때마다 자동으로 의존성 설치, 테스트, 배포를 순서대로 실행합니다.</p>

<h2>대표적인 CI/CD 도구</h2>
<p>GitHub Actions, GitLab CI/CD, Jenkins, CircleCI 등이 널리 사용됩니다. 특히 GitHub Actions는 GitHub 저장소와 완전히 통합되어 있어 별도의 설정 없이 바로 사용할 수 있다는 장점이 있습니다.</p>

<h2>배포 전략도 함께 고려하기</h2>
<p>단순히 자동 배포만 구현하는 것을 넘어, 블루-그린 배포나 카나리 배포 같은 전략을 함께 적용하면 배포 중 장애가 발생해도 사용자에게 미치는 영향을 최소화할 수 있습니다.</p>

<h2>정리</h2>
<p>CI/CD는 단순한 편의 기능이 아니라 소프트웨어 품질과 배포 안정성을 동시에 높이는 핵심 관행입니다. 작은 프로젝트라도 초기부터 CI/CD를 구축해두면 장기적으로 큰 시간을 절약할 수 있습니다.</p>', '🔄', 'published');
INSERT OR IGNORE INTO posts (slug, title, category, excerpt, content, cover_emoji, status) VALUES ('서버리스serverless-아키텍처란-무엇인가-14', '서버리스(Serverless) 아키텍처란 무엇인가', '클라우드 기초', '서버 관리 없이 코드만 배포하는 서버리스 컴퓨팅의 개념과 장단점, 대표 서비스를 소개합니다.', '<p>서버리스(Serverless)는 이름과 달리 서버가 없는 것이 아니라, 개발자가 서버 관리에 신경 쓸 필요 없이 코드만 작성하면 클라우드 제공업체가 나머지 인프라를 알아서 처리해주는 방식을 말합니다.</p>

<h2>서버리스의 핵심 개념: FaaS</h2>
<p>서버리스의 대표적인 형태는 FaaS(Function as a Service)입니다. 개발자는 하나의 함수 단위로 코드를 작성해 업로드하고, 이 함수는 요청이 들어올 때만 실행되며 사용한 만큼만 비용이 청구됩니다. AWS Lambda, Cloudflare Workers, Google Cloud Functions가 대표적입니다.</p>

<h2>서버리스의 장점</h2>
<ul>
  <li>서버 프로비저닝과 운영체제 관리가 필요 없음</li>
  <li>트래픽에 따라 자동으로 확장되며, 요청이 없으면 비용도 발생하지 않음</li>
  <li>빠른 배포와 개발 속도</li>
</ul>

<h2>서버리스의 단점</h2>
<ul>
  <li>콜드 스타트(Cold Start): 오랫동안 호출되지 않은 함수는 첫 실행 시 지연이 발생할 수 있습니다.</li>
  <li>실행 시간 제한: 대부분의 서버리스 플랫폼은 함수 실행 시간에 제한을 둡니다.</li>
  <li>벤더 종속성: 특정 클라우드 업체의 서버리스 생태계에 맞춰 코드를 작성하면 다른 플랫폼으로 이전하기 어려워질 수 있습니다.</li>
</ul>

<h2>Cloudflare Workers의 특별한 강점</h2>
<p>Cloudflare Workers는 V8 엔진의 Isolate 기술을 사용해 콜드 스타트 문제를 크게 줄였습니다. 전 세계 수백 개의 엣지 로케이션에서 실행되기 때문에 사용자와 가장 가까운 곳에서 코드가 실행되어 응답 속도가 매우 빠른 것이 특징입니다.</p>

<h2>언제 서버리스를 선택해야 하는가</h2>
<p>트래픽이 불규칙하거나 예측하기 어려운 서비스, 간단한 API나 웹훅 처리, 이벤트 기반 작업에는 서버리스가 적합합니다. 반면 지속적으로 높은 트래픽을 처리하거나 긴 실행 시간이 필요한 작업에는 기존 서버 방식이 비용 면에서 더 유리할 수 있습니다.</p>', '⚡', 'published');
INSERT OR IGNORE INTO posts (slug, title, category, excerpt, content, cover_emoji, status) VALUES ('데이터베이스-백업-전략-3-2-1-규칙으로-데이터-지키기-15', '데이터베이스 백업 전략: 3-2-1 규칙으로 데이터 지키기', '서버 운영', '데이터 손실을 방지하기 위한 백업의 기본 원칙과 널리 알려진 3-2-1 백업 규칙을 설명합니다.', '<p>서버 운영에서 가장 치명적인 사고 중 하나는 데이터 손실입니다. 하드웨어 고장, 실수로 인한 삭제, 랜섬웨어 공격 등 다양한 원인으로 데이터가 사라질 수 있으며, 이를 대비하는 유일한 방법은 체계적인 백업입니다.</p>

<h2>3-2-1 백업 규칙</h2>
<p>백업 업계에서 오랫동안 통용되어온 원칙으로, 다음과 같이 요약됩니다.</p>
<ul>
  <li><strong>3개의 복사본</strong>을 유지한다 (원본 포함)</li>
  <li><strong>2개의 다른 저장 매체</strong>에 저장한다 (예: 로컬 디스크 + 클라우드 스토리지)</li>
  <li><strong>1개는 원격지(오프사이트)</strong>에 보관한다</li>
</ul>
<p>이 원칙을 따르면 하나의 저장소에 문제가 생기더라도 다른 위치의 백업으로 데이터를 복구할 수 있습니다.</p>

<h2>데이터베이스 백업 방법</h2>
<p>MySQL의 경우 <code>mysqldump</code>를 사용해 전체 데이터베이스를 SQL 파일로 백업할 수 있습니다.</p>
<pre><code>mysqldump -u root -p mydatabase > backup_$(date +%Y%m%d).sql</code></pre>
<p>PostgreSQL은 <code>pg_dump</code> 명령을 사용하며, 대용량 데이터베이스의 경우 증분 백업이나 WAL(Write-Ahead Log) 아카이빙을 함께 고려해야 합니다.</p>

<h2>자동화된 백업 스케줄링</h2>
<p>cron을 이용해 매일 새벽 특정 시간에 자동으로 백업이 실행되도록 설정하고, 백업 파일을 클라우드 스토리지(S3, Google Cloud Storage 등)에 자동 업로드하는 스크립트를 함께 구성하는 것이 일반적입니다.</p>

<h2>백업만큼 중요한 복구 테스트</h2>
<p>백업 파일이 존재한다고 해서 반드시 복구가 가능한 것은 아닙니다. 정기적으로 백업 파일을 실제로 복원해보는 테스트를 진행해야 실제 장애 상황에서 당황하지 않고 데이터를 되살릴 수 있습니다.</p>

<h2>정리</h2>
<p>백업은 "언젠가 필요할 수도 있는 보험"이 아니라 서버 운영의 필수 요소입니다. 3-2-1 규칙을 기본으로 삼아 우리 서비스에 맞는 백업 전략을 구축해보시기 바랍니다.</p>', '💾', 'published');
INSERT OR IGNORE INTO posts (slug, title, category, excerpt, content, cover_emoji, status) VALUES ('api-게이트웨이란-무엇이고-왜-필요한가-16', 'API 게이트웨이란 무엇이고 왜 필요한가', '네트워크', '마이크로서비스 환경에서 API 게이트웨이가 담당하는 역할과 도입 시 얻을 수 있는 이점을 정리합니다.', '<p>서비스가 여러 개의 마이크로서비스로 분리되면, 클라이언트가 각 서비스의 주소를 일일이 알아야 하는 복잡함이 생깁니다. API 게이트웨이는 이러한 여러 서비스 앞에 위치해 요청을 적절히 라우팅해주는 단일 진입점 역할을 합니다.</p>

<h2>API 게이트웨이의 주요 역할</h2>
<ul>
  <li><strong>라우팅</strong>: 요청 경로에 따라 적절한 내부 서비스로 트래픽을 전달합니다.</li>
  <li><strong>인증 및 인가</strong>: API 키나 토큰 검증을 게이트웨이 단에서 한 번에 처리합니다.</li>
  <li><strong>요청 제한(Rate Limiting)</strong>: 특정 클라이언트의 과도한 요청을 제한해 서비스를 보호합니다.</li>
  <li><strong>로깅 및 모니터링</strong>: 모든 요청이 게이트웨이를 거치므로 트래픽 분석이 용이합니다.</li>
  <li><strong>응답 캐싱</strong>: 자주 요청되는 데이터를 캐싱해 백엔드 부하를 줄입니다.</li>
</ul>

<h2>API 게이트웨이가 없다면?</h2>
<p>각 마이크로서비스가 개별적으로 인증, 로깅, 요청 제한 로직을 중복 구현해야 하며, 클라이언트는 여러 서비스의 주소와 프로토콜을 각각 알아야 합니다. 이는 코드 중복과 관리 복잡도를 크게 증가시킵니다.</p>

<h2>대표적인 API 게이트웨이 솔루션</h2>
<p>Kong, AWS API Gateway, Nginx를 활용한 자체 구축, 그리고 Cloudflare의 API Gateway 기능 등이 널리 사용됩니다. 클라우드 관리형 서비스를 사용하면 인프라 관리 부담 없이 빠르게 게이트웨이를 구축할 수 있습니다.</p>

<h2>마이크로서비스와의 관계</h2>
<p>API 게이트웨이는 마이크로서비스 아키텍처의 필수 구성 요소로 여겨집니다. 서비스가 늘어날수록 게이트웨이가 제공하는 통합 관리 기능의 가치가 커지기 때문에, 서비스 확장을 계획하고 있다면 초기 설계 단계부터 게이트웨이 도입을 고려하는 것이 좋습니다.</p>', '🚪', 'published');
INSERT OR IGNORE INTO posts (slug, title, category, excerpt, content, cover_emoji, status) VALUES ('서버-스케일링-수직-확장과-수평-확장의-차이-17', '서버 스케일링: 수직 확장과 수평 확장의 차이', '클라우드 기초', '트래픽 증가에 대응하는 두 가지 확장 방식, 스케일 업과 스케일 아웃의 개념과 선택 기준을 알아봅니다.', '<p>서비스 이용자가 늘어나면 서버 자원을 늘려야 하는 시점이 옵니다. 이때 선택할 수 있는 방법은 크게 수직 확장(Scale Up)과 수평 확장(Scale Out) 두 가지입니다.</p>

<h2>수직 확장(Scale Up)</h2>
<p>기존 서버의 CPU, 메모리, 디스크 사양을 더 높은 성능으로 업그레이드하는 방식입니다. 예를 들어 2코어 4GB 서버를 8코어 16GB로 교체하는 것이 여기에 해당합니다.</p>
<ul>
  <li><strong>장점</strong>: 애플리케이션 구조를 바꿀 필요 없이 간단하게 적용 가능</li>
  <li><strong>단점</strong>: 물리적/기술적 한계가 있으며, 한 대의 서버에 장애가 생기면 서비스 전체가 중단됨</li>
</ul>

<h2>수평 확장(Scale Out)</h2>
<p>서버의 사양을 올리는 대신 동일한 사양의 서버를 여러 대 추가해 트래픽을 분산시키는 방식입니다. 로드 밸런서와 함께 사용되는 것이 일반적입니다.</p>
<ul>
  <li><strong>장점</strong>: 이론적으로 무한히 확장 가능하며, 일부 서버에 장애가 생겨도 나머지 서버가 서비스를 지속할 수 있음</li>
  <li><strong>단점</strong>: 여러 서버 간 상태 동기화, 세션 관리 등 아키텍처 복잡도가 증가함</li>
</ul>

<h2>클라우드에서의 오토스케일링</h2>
<p>AWS의 Auto Scaling Group이나 Kubernetes의 Horizontal Pod Autoscaler는 트래픽 지표를 기준으로 서버(또는 Pod) 수를 자동으로 늘리거나 줄여줍니다. 트래픽이 몰리는 시간대에는 자동으로 확장하고, 한산한 시간에는 축소해 비용을 절감할 수 있습니다.</p>

<h2>어떤 방식을 선택해야 할까</h2>
<p>초기 단계의 소규모 서비스는 수직 확장으로 충분한 경우가 많습니다. 하지만 서비스가 성장하며 고가용성이 중요해진다면 수평 확장으로 전환하는 것이 장기적으로 바람직합니다. 많은 현대적 서비스는 두 방식을 병행하며 상황에 맞게 활용합니다.</p>', '📊', 'published');
INSERT OR IGNORE INTO posts (slug, title, category, excerpt, content, cover_emoji, status) VALUES ('환경-변수와-설정-관리-12-factor-app-원칙-18', '환경 변수와 설정 관리: 12 Factor App 원칙', 'DevOps', '설정값을 코드와 분리해야 하는 이유와 12 Factor App에서 제시하는 설정 관리 원칙을 소개합니다.', '<p>애플리케이션을 개발하다 보면 데이터베이스 주소, API 키, 포트 번호 같은 설정값을 어디에 저장할지 고민하게 됩니다. 이런 값을 코드에 직접 하드코딩하면 여러 환경(개발, 스테이징, 운영)에 배포할 때마다 코드를 수정해야 하는 문제가 생깁니다.</p>

<h2>12 Factor App이란</h2>
<p>12 Factor App은 현대적인 클라우드 네이티브 애플리케이션을 만들기 위한 방법론으로, 그중 세 번째 원칙이 바로 "설정을 환경 변수에 저장하라"는 것입니다. 이 원칙은 코드와 설정을 명확히 분리해 동일한 코드베이스를 여러 환경에서 재사용할 수 있게 합니다.</p>

<h2>환경 변수 사용 예시</h2>
<pre><code># .env 파일 (절대 저장소에 커밋하지 않음)
DATABASE_URL=postgres://user:pass@localhost:5432/mydb
API_SECRET_KEY=your-secret-key
NODE_ENV=production</code></pre>
<pre><code>// 코드에서 사용
const dbUrl = process.env.DATABASE_URL;</code></pre>

<h2>왜 하드코딩하면 안 되는가</h2>
<ul>
  <li>민감한 정보(비밀번호, API 키)가 소스코드에 노출되어 보안 사고로 이어질 수 있음</li>
  <li>환경마다 다른 설정값을 적용하려면 코드를 매번 수정해야 하는 비효율 발생</li>
  <li>여러 개발자가 협업할 때 각자의 로컬 환경 설정이 충돌할 수 있음</li>
</ul>

<h2>클라우드 환경에서의 시크릿 관리</h2>
<p>단순한 환경 변수를 넘어서, 민감한 시크릿은 전용 관리 도구를 사용하는 것이 더 안전합니다. AWS Secrets Manager, HashiCorp Vault, Cloudflare Workers의 Secrets 기능 등은 암호화된 저장과 접근 권한 관리를 제공합니다.</p>

<h2>정리</h2>
<p>설정과 코드를 분리하는 것은 단순한 모범 사례를 넘어, 안전하고 유연한 배포 파이프라인을 구축하기 위한 기초 공사와 같습니다. 프로젝트 초기부터 이 원칙을 습관화하는 것이 좋습니다.</p>', '⚙️', 'published');
INSERT OR IGNORE INTO posts (slug, title, category, excerpt, content, cover_emoji, status) VALUES ('dns의-원리-도메인이-ip-주소로-바뀌는-과정-19', 'DNS의 원리: 도메인이 IP 주소로 바뀌는 과정', '네트워크', '우리가 입력한 도메인 주소가 실제 서버의 IP로 변환되기까지 벌어지는 과정을 단계별로 설명합니다.', '<p>브라우저에 example.com을 입력하면 어떻게 실제 서버에 연결될까요? 그 뒤에는 DNS(Domain Name System)라는 인터넷의 전화번호부 같은 시스템이 작동하고 있습니다.</p>

<h2>DNS 조회 과정</h2>
<p>도메인을 입력하면 다음과 같은 순서로 IP 주소를 찾아갑니다.</p>
<ol>
  <li>브라우저와 운영체제의 캐시를 먼저 확인합니다.</li>
  <li>캐시에 없다면 리졸버(주로 ISP나 Google의 8.8.8.8 같은 DNS 서버)에 질의합니다.</li>
  <li>리졸버는 루트 DNS 서버에 물어 .com을 관리하는 TLD 서버의 위치를 알아냅니다.</li>
  <li>TLD 서버에서 example.com을 관리하는 네임서버(Authoritative Name Server)의 주소를 받습니다.</li>
  <li>해당 네임서버에 최종적으로 질의해 실제 IP 주소를 얻습니다.</li>
</ol>
<p>이 모든 과정은 보통 수십 밀리초 안에 이루어지며, 이후에는 캐싱을 통해 더 빠르게 처리됩니다.</p>

<h2>주요 DNS 레코드 타입</h2>
<ul>
  <li><strong>A 레코드</strong>: 도메인을 IPv4 주소와 연결합니다.</li>
  <li><strong>AAAA 레코드</strong>: 도메인을 IPv6 주소와 연결합니다.</li>
  <li><strong>CNAME 레코드</strong>: 도메인을 다른 도메인으로 별칭 연결합니다.</li>
  <li><strong>MX 레코드</strong>: 해당 도메인의 이메일을 처리할 서버를 지정합니다.</li>
  <li><strong>TXT 레코드</strong>: 도메인 소유권 확인이나 SPF, DKIM 같은 이메일 인증에 사용됩니다.</li>
</ul>

<h2>DNS 전파 시간</h2>
<p>DNS 설정을 변경하면 전 세계 모든 DNS 서버에 즉시 반영되는 것이 아니라, 각 레코드에 설정된 TTL(Time To Live)에 따라 캐시가 남아있는 동안 이전 값이 보일 수 있습니다. 이를 ''DNS 전파''라고 하며 보통 몇 분에서 최대 48시간까지 걸릴 수 있습니다.</p>

<h2>Cloudflare DNS의 장점</h2>
<p>Cloudflare는 무료로 빠르고 안정적인 DNS 서비스를 제공하며, DNS 관리와 동시에 CDN, 보안 기능까지 통합적으로 사용할 수 있어 많은 웹사이트 운영자들이 선호합니다.</p>', '🧭', 'published');
INSERT OR IGNORE INTO posts (slug, title, category, excerpt, content, cover_emoji, status) VALUES ('무중단-배포란-무엇인가-블루-그린과-롤링-배포-20', '무중단 배포란 무엇인가: 블루-그린과 롤링 배포', 'DevOps', '서비스 중단 없이 새 버전을 배포하는 대표적인 배포 전략, 블루-그린 배포와 롤링 배포를 비교합니다.', '<p>서비스를 업데이트할 때 기존 방식대로 서버를 잠시 멈추고 새 코드를 올린다면 그 시간 동안 사용자는 서비스를 이용할 수 없습니다. 무중단 배포는 이러한 서비스 중단 없이 새로운 버전으로 안전하게 전환하는 기법을 말합니다.</p>

<h2>블루-그린 배포</h2>
<p>동일한 사양의 두 환경(Blue, Green)을 준비해두고, 현재 트래픽이 흐르는 환경이 Blue라면 새 버전을 Green 환경에 배포합니다. Green 환경에서 충분히 테스트한 후, 로드 밸런서의 트래픽을 한 번에 Green으로 전환합니다.</p>
<ul>
  <li><strong>장점</strong>: 전환이 즉각적이며, 문제가 생기면 즉시 이전 환경(Blue)으로 되돌릴 수 있음</li>
  <li><strong>단점</strong>: 두 배의 인프라 자원이 필요해 비용이 증가함</li>
</ul>

<h2>롤링 배포</h2>
<p>여러 대의 서버 중 일부씩 순차적으로 새 버전으로 교체해나가는 방식입니다. 예를 들어 10대의 서버 중 2대씩 순서대로 업데이트하며, 전체 서버가 교체될 때까지 나머지 서버는 계속 이전 버전으로 서비스를 제공합니다.</p>
<ul>
  <li><strong>장점</strong>: 추가 인프라 비용이 적고, 점진적으로 배포되어 위험을 분산할 수 있음</li>
  <li><strong>단점</strong>: 배포 중 신버전과 구버전이 동시에 존재해, 호환성을 신경 써야 함</li>
</ul>

<h2>카나리 배포</h2>
<p>새 버전을 일부 트래픽(예: 5%)에만 먼저 노출시켜 문제가 없는지 확인한 후, 점진적으로 트래픽 비율을 늘려가는 방식입니다. 위험을 최소화하며 실제 사용자 반응을 살필 수 있어 대규모 서비스에서 널리 사용됩니다.</p>

<h2>Kubernetes에서의 배포 전략</h2>
<p>Kubernetes는 기본적으로 롤링 업데이트를 지원하며, Deployment 리소스의 <code>strategy</code> 설정을 통해 한 번에 교체할 Pod 수를 세밀하게 조정할 수 있습니다. Istio 같은 서비스 메시를 함께 사용하면 카나리 배포도 정교하게 구현할 수 있습니다.</p>

<h2>정리</h2>
<p>어떤 배포 전략을 선택하든 핵심 목표는 동일합니다: 사용자가 배포 과정을 전혀 느끼지 못하게 하는 것입니다. 서비스의 규모와 인프라 예산에 맞는 전략을 선택하는 것이 중요합니다.</p>', '🔀', 'published');