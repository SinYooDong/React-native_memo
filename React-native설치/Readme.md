##Windows에서 React-native 설치법.  -->안드로이드만 다룹니다.  설치법 추가중..

React는 node.js를 사용한 서버를 실행시켜 화면을 바로바로 reload를 하는 방식인 것 같습니다.

그리고 npm저장소를 이용하여 설치하기 때문에 node.js와 npm 저장소를 모두 설치할 필요가 있습니다.

윈도우에는 node.js 홈페이지에서 node.js 설치 파일로 설치하면 npm저장소까지 같이 설치되어지니

다운받아서 설치하기길 바랍니다.

https://nodejs.org/ko/

(자세한 설치법은 나중에 추가하겠습니다.... 나....중에..)

node.js 설치후

android SDK 설치.



##환경 변수 설정

ANDROID_HOME = SDK를 설치한 폴더 경로

Path 뒤쪽에 sdk/platform-tools 경로와 sdk/tools경로를 추가



##지니모션 설치

https://docs.genymotion.com/Content/Home.htm

기종종류며 속도며, 지니모션을 많이 추천한다고합니다.


##React-native 프로젝트 생성

적당한 경로에서 cmd창을 실행. (쉬프트 + 우클릭하면 '여기서 명령창열기'가 있습니다.)

"

	react-native init 프로젝트명

"

이것저것 다운로드되면서 생성완료되면

안드로이드 예뮬을 실행(지니모션이나 android studio 예뮬)을 한후 

해당 프로젝트 경로에 cmd창에서

"

	react-native run-android

"

실행!  그러면 한개의 더 cmd 창이 켜지고(서버입니다).

기다리면 해당 예물에서 실행된 react-native 앱을 확인 할 수 있습니다.