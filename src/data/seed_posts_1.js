export const seedPosts1 = [
  {
    title: "클라우드 컴퓨팅이란 무엇인가: 개념부터 서비스 모델까지",
    category: "클라우드 기초",
    cover_emoji: "☁️",
    excerpt: "IaaS, PaaS, SaaS의 차이와 클라우드 컴퓨팅이 기존 온프레미스 방식과 어떻게 다른지 기초부터 정리합니다.",
    content: `
<p>클라우드 컴퓨팅은 서버, 스토리지, 데이터베이스, 네트워크, 소프트웨어 같은 컴퓨팅 자원을 인터넷을 통해 필요한 만큼 빌려 쓰는 방식을 말합니다. 과거에는 기업이 직접 서버실을 구축하고 하드웨어를 구매해야 했지만, 클라우드 환경에서는 사용한 만큼만 비용을 지불하며 필요할 때 즉시 자원을 늘리거나 줄일 수 있습니다.</p>

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
<p>클라우드 컴퓨팅은 단순한 유행이 아니라 IT 인프라를 운영하는 방식 자체를 바꾼 패러다임입니다. 다음 글에서는 대표적인 클라우드 제공업체인 AWS, GCP, Azure를 비교해보겠습니다.</p>
    `.trim(),
  },
  {
    title: "AWS vs GCP vs Azure: 3대 클라우드 플랫폼 비교",
    category: "클라우드 기초",
    cover_emoji: "🌐",
    excerpt: "세계 3대 클라우드 서비스의 특징과 강점을 비교하여 프로젝트에 맞는 플랫폼 선택을 돕습니다.",
    content: `
<p>클라우드 시장은 Amazon Web Services(AWS), Google Cloud Platform(GCP), Microsoft Azure 세 업체가 대부분을 차지하고 있습니다. 각 플랫폼은 저마다 강점이 다르기 때문에 프로젝트의 성격에 따라 적합한 선택이 달라집니다.</p>

<h2>AWS: 가장 폭넓은 서비스와 생태계</h2>
<p>AWS는 2006년 가장 먼저 클라우드 서비스를 시작한 선두주자로, 시장 점유율이 가장 높습니다. 200개가 넘는 서비스를 제공하며 스타트업부터 대기업까지 폭넓게 사용됩니다. 특히 EC2, S3, Lambda 같은 서비스는 업계 표준처럼 여겨질 정도로 널리 쓰입니다.</p>

<h2>GCP: 데이터 분석과 AI에 강점</h2>
<p>Google Cloud는 빅쿼리(BigQuery)와 같은 데이터 분석 도구, 그리고 자체 개발한 TPU를 활용한 머신러닝 인프라에서 강점을 보입니다. Kubernetes를 처음 만든 회사인 만큼 컨테이너 오케스트레이션 분야에서도 신뢰도가 높습니다.</p>

<h2>Azure: 기업 및 하이브리드 클라우드에 최적화</h2>
<p>Microsoft Azure는 기존에 Windows Server나 Active Directory를 사용하던 기업들이 자연스럽게 이전하기 좋은 환경을 제공합니다. Office 365, Teams 등과의 연동성이 뛰어나 대기업의 하이브리드 클라우드 전략에 자주 채택됩니다.</p>

<h2>선택 기준</h2>
<p>단순히 인지도만으로 플랫폼을 선택하기보다는 팀의 기술 스택, 예산, 필요한 관리형 서비스의 종류를 고려해야 합니다. 스타트업이라면 무료 크레딧과 커뮤니티 자료가 풍부한 AWS나 GCP를, 기존 Microsoft 생태계를 사용 중이라면 Azure를 우선 검토하는 것이 합리적입니다.</p>
    `.trim(),
  },
  {
    title: "리눅스 서버 기초: 처음 시작하는 서버 관리",
    category: "서버 운영",
    cover_emoji: "🐧",
    excerpt: "리눅스 서버를 처음 다루는 사람을 위한 기본 명령어와 디렉토리 구조, 필수 개념을 소개합니다.",
    content: `
<p>서버를 운영하려면 대부분 리눅스 운영체제를 다루게 됩니다. 리눅스는 오픈소스이면서도 안정성이 높아 전 세계 서버의 절대 다수가 채택하고 있습니다. 이번 글에서는 서버 관리를 처음 시작하는 사람이 알아야 할 기본 개념을 정리합니다.</p>

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
<p>서버 관리는 반복적인 실습을 통해 익숙해지는 영역입니다. 가상 머신이나 클라우드의 무료 티어를 활용해 직접 서버를 만들고 명령어를 연습해보는 것이 가장 좋은 학습 방법입니다.</p>
    `.trim(),
  },
  {
    title: "SSH로 원격 서버에 안전하게 접속하는 방법",
    category: "서버 운영",
    cover_emoji: "🔑",
    excerpt: "SSH의 동작 원리와 키 기반 인증 설정, 보안 강화를 위한 실전 팁을 다룹니다.",
    content: `
<p>SSH(Secure Shell)는 원격 서버에 암호화된 통신으로 접속할 수 있게 해주는 프로토콜입니다. 서버 관리자는 대부분의 작업을 SSH를 통해 수행하기 때문에 올바른 설정과 보안 관리가 매우 중요합니다.</p>

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
<p>SSH는 서버 관리의 출입문과 같습니다. 키 기반 인증, 포트 변경, Fail2ban 도입만으로도 대부분의 자동화된 공격을 효과적으로 막을 수 있으니 서버를 구축한 직후 반드시 적용하는 것을 권장합니다.</p>
    `.trim(),
  },
  {
    title: "Docker 입문: 컨테이너란 무엇이고 왜 사용하는가",
    category: "컨테이너",
    cover_emoji: "🐳",
    excerpt: "가상 머신과 컨테이너의 차이, Docker의 기본 개념과 첫 컨테이너 실행까지 단계별로 설명합니다.",
    content: `
<p>Docker는 애플리케이션을 컨테이너라는 격리된 환경에 담아 어디서든 동일하게 실행할 수 있게 해주는 플랫폼입니다. "내 컴퓨터에서는 잘 되는데요"라는 흔한 문제를 해결해주는 도구로 널리 알려져 있습니다.</p>

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
<p>개발, 테스트, 운영 환경의 차이에서 발생하는 문제를 원천적으로 줄여주고, 여러 애플리케이션을 하나의 서버에서 충돌 없이 운영할 수 있게 해줍니다. 또한 마이크로서비스 아키텍처와 CI/CD 파이프라인의 핵심 구성 요소로 자리 잡았습니다.</p>
    `.trim(),
  },
  {
    title: "Kubernetes 기초: 컨테이너 오케스트레이션이 필요한 이유",
    category: "컨테이너",
    cover_emoji: "⚙️",
    excerpt: "Docker 컨테이너가 많아질 때 왜 Kubernetes가 필요한지, 핵심 구성 요소는 무엇인지 알아봅니다.",
    content: `
<p>컨테이너 하나 정도는 수동으로 관리할 수 있지만, 서비스가 성장하면서 수십, 수백 개의 컨테이너를 운영해야 하는 상황이 옵니다. 이때 필요한 것이 바로 컨테이너 오케스트레이션 도구인 Kubernetes(쿠버네티스)입니다.</p>

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
<p>모든 프로젝트에 Kubernetes가 필요한 것은 아닙니다. 트래픽이 적고 컨테이너 수가 적다면 Docker Compose만으로도 충분합니다. 하지만 서비스 규모가 커지고 무중단 배포, 자동 확장, 장애 복구가 중요해진다면 Kubernetes 도입을 검토할 시점입니다.</p>
    `.trim(),
  },
  {
    title: "Nginx 리버스 프록시 설정 완벽 가이드",
    category: "서버 운영",
    cover_emoji: "🌀",
    excerpt: "Nginx를 리버스 프록시로 활용해 여러 애플리케이션을 하나의 도메인으로 서비스하는 방법을 알아봅니다.",
    content: `
<p>Nginx는 웹 서버이자 리버스 프록시로서 매우 널리 사용되는 소프트웨어입니다. 리버스 프록시란 클라이언트의 요청을 받아 내부의 실제 애플리케이션 서버로 전달해주는 중개자 역할을 합니다.</p>

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
<p>Let's Encrypt와 Certbot을 사용하면 무료로 SSL 인증서를 발급받아 HTTPS를 적용할 수 있습니다. <code>certbot --nginx</code> 명령 한 번으로 인증서 발급부터 Nginx 설정 변경까지 자동으로 처리됩니다.</p>

<h2>정리</h2>
<p>Nginx 리버스 프록시는 단순한 웹 서버를 넘어 트래픽 관리의 핵심 허브 역할을 합니다. 설정 파일 문법에 익숙해지면 복잡한 인프라도 유연하게 구성할 수 있습니다.</p>
    `.trim(),
  },
  {
    title: "서버 로드 밸런싱의 개념과 주요 알고리즘",
    category: "네트워크",
    cover_emoji: "⚖️",
    excerpt: "트래픽이 늘어날 때 서버를 어떻게 분산시키는지, 로드 밸런싱의 원리와 대표 알고리즘을 소개합니다.",
    content: `
<p>서비스 이용자가 늘어나면 하나의 서버로는 모든 요청을 처리하기 어려워집니다. 이때 여러 대의 서버에 트래픽을 고르게 분산시켜주는 기술이 바로 로드 밸런싱입니다.</p>

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
<p>로드 밸런싱은 서비스 규모가 커질수록 반드시 고려해야 하는 핵심 인프라 요소입니다. 알고리즘의 특성을 이해하고 서비스 성격에 맞는 방식을 선택하는 것이 중요합니다.</p>
    `.trim(),
  },
  {
    title: "CDN이란 무엇인가: 콘텐츠 전송 네트워크의 원리",
    category: "네트워크",
    cover_emoji: "🚀",
    excerpt: "웹사이트 속도를 크게 개선해주는 CDN의 동작 원리와 대표 서비스들을 살펴봅니다.",
    content: `
<p>CDN(Content Delivery Network)은 전 세계 여러 지역에 분산된 서버 네트워크를 이용해 사용자에게 콘텐츠를 더 빠르게 전달하는 기술입니다. 이미지, 동영상, CSS, JavaScript 같은 정적 파일을 사용자와 가장 가까운 서버에서 제공함으로써 로딩 속도를 크게 개선합니다.</p>

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
<p>CDN은 이제 대규모 서비스뿐 아니라 개인 블로그나 소규모 웹사이트에서도 기본적으로 고려해야 할 요소가 되었습니다. 적절한 CDN 도입만으로도 체감 속도를 크게 개선할 수 있습니다.</p>
    `.trim(),
  },
  {
    title: "서버 모니터링이 중요한 이유와 필수 지표",
    category: "서버 운영",
    cover_emoji: "📈",
    excerpt: "장애를 사전에 방지하기 위한 서버 모니터링의 필요성과 반드시 확인해야 할 핵심 지표를 정리합니다.",
    content: `
<p>서버는 눈에 보이지 않는 곳에서 24시간 동작하기 때문에, 문제가 생겨도 모니터링 시스템이 없다면 사용자의 신고를 받고 나서야 장애를 인지하게 됩니다. 체계적인 모니터링은 장애를 사전에 예방하고 원인을 빠르게 파악하는 데 필수적입니다.</p>

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
<p>모니터링은 "문제가 생기면 확인하는 도구"가 아니라 "문제가 생기기 전에 알려주는 시스템"으로 설계해야 합니다. 초기 설정에 시간이 들더라도 장기적으로는 훨씬 안정적인 서비스 운영이 가능합니다.</p>
    `.trim(),
  },
];
