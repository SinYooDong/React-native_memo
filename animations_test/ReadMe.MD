## 리엑트 네이티브 애니메이션

기본적인 메소드

1. Animated.timing()
	-> 시간에 따라 설정값을 변화시킴
2. Animated.decay() 
	-> 초기 속도로 시작하고 점차적으로 멈추게됩니다.(구글번역)
3. Animated.spring()
	-> 해당 모델을 간단하게 점핑(?) 시켜주는 애니메이션 줄수있고, 설정값을 변화시킴.

위 3가지 기본 메소드를 함께 사용할 수 있는 메소드.

공통적으로 배열 형태로 기본 메소드가 들어가져 사용됩니다.

1. Animated.parallel()
	-> 기본적인 메소드. ->들어간 애니메이션들이 동시에 시작됨.
2. Animated.sequence()
	-> 이전 애니메이션이 종료(end)된 후 다음 애니메이션이 시작되며, 이전 애니메이션이 중단(stop)된 경우는 다음 애니메이션이 시작 되지 않습니다.
3. Animated.stagger()
	-> 애니메이션간 지연을 줄 수 있습니다. parallel()와 비슷하지만 각각 애니메이션에 지연 시간을 주어 다르게 시작시킬수 있음.





## Animated.timing(). 메소드

"

	Animated.timing(
	  someValue,
	  {
	    toValue: number, //해당 속성값.
	    duration: number, //해당 속성값에 도달하는 시간.
	    easing: easingFunction, //??
	    delay: number //애니메이션 시작 딜레이 시간.
	  }
	)
	
"

## Animated.spring().  메소드

"

	Animated.spring(
	    someValue,
	    {
	      toValue: number,
	      friction: number
	    }
	)
	
"





## Animated.parallel(). 메소드

"

	Animated.parallel([
		Animated.timing(this.a, {
		  toValue: 100,		//설정값에서 100까지.
		  duration: 300		//300딜레이를 주면서..
		}),
		Animated.spring(this.b,{
		  toValue: 200,		
		  duration: 300
		}),
	      Animated.spring( this.c, {
		toValue: 200,
		duration: 300,
		friction: 2		//튕기는정도.
	      })
	 ]).start();

"






### 파일 설명

Class/BasicAnime.js
	-> Animated.spring 이용한 이미지가 튕기는 애니메이션입니다.

Class/LayoutAnime.js
	-> stats에 레이아웃에 x, y를 설정해둔 후 그 값을 변동 시키며 레이아웃 크기를 조절하는 코드입니다.

Class/ReboundAnime.js
	-> rebound를 이용해서 레이아웃 크기를 조절하는 것...(아직 왜 있는지 모르겠다...)


Class/SequenceTest.js
	-> Animated.sequence를 사용하여 Animated.timing를 반복적으로 실행되도록 하는 코드.

Class/StaggerTest.js
	-> Animated.stagger를 사용하여 약간의 지연시간 차이를 줘서 같은 애니메이션을 같이 시작하여 파도 효과를 주는 코드.

Class/ParallelText.js  (x 오타났네...)
	-> Animated.parallel로 3가지 애니메이션을 동시에 적용시키는 코드 입니다.
