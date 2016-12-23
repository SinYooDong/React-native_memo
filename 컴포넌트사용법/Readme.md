##React-native Component

React-native에서 지원하는 컴포넌트들의 사용법을 작성해두겠습니다.

해당 컴포넌트에서 지원하는 props나 스타일은 React-native에서 확인해주시고
사용방법 위주로만 작성해두겠습니다.

30개 모두 채워서 넣을 예정입니다.


##View

레이아웃이라고 먼저 말하면 딱 이해하십니다.

안드로이드에서 사용되는 Layout과 동일하며 Html에서는 많이 사용되는 <div>와 같다고 보시면 됩니다.(IOS는 안해봐서 몰라요..)

"

	<View style={styles.top}>

	       <ListView
		 style={styles.list}
		 dataSource={this.state.list}
		 renderRow={(rowData) =><ContactListItem rowData={rowData} select_item={this.select_item}/>}
	       />
	       <TouchableOpacity
	       onPress={this.test('01033813196')}
	       >
	       <Text>테스트
	       </Text>
	       </TouchableOpacity>
	</View>

"

영역을 나누는 용도로 사용됩니다. 
자주 사용되는 스타일 속성 값으로는
flexDirection  -> 자식들 정렬방향(?) ('row', 'row-reverse', 'column', 'column-reverse)
justifyContent -> 자식들 기준 위치 ('flex-start', 'flex-end', 'center', 'space-between', 'space-around') 
alignItems ->  ('flex-start', 'flex-end', 'center', 'stretch')

요 3가지를 자주 사용합니다(시작한지 별루 안되서...잘몰라요)

##Text

말 그대로 Text입니다.

"

	 <Text>테스트</Text>

"


##TextInput

안드에서는 EditText, Html에서는 <input tyle="text">와 같습니다.

"

	<TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />

"


끝입니다...

prosp는 홈페이지에서..




##Image

uri와 리소스에서 가져오는 방법 입니다.

"

	<Image
          source={require('./내부이미지경로')}
        />

	<Image
          source={{uri: 'https://uri경로~'}}
        />

"


##ListView

"

	<ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
	/>


"

React-native ListView는 기본적으로 2개의 props가 필요합니다. dataSource는 listview로 보여줄 데이터들(배열형태),
renderRow는 ListView안에 보여줄 뷰를 설정하는 부분입니다. 위 코드는 현재 Text로만 나열되게 된 코드입니다.

그럼 여기서 필요한건 dataSource에 들어갈 데이터를 먼저 준비하는 것입니다.

"

	const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	      this.state = {
		dataSource: ds.cloneWithRows(['(결혼) 12월 27일 박기동 신랑', '(결혼) 12월 27일 박기동 신랑', '(결혼) 12월 27일 박기동 신랑', '(결혼) 12월 27일 박기동 신랑', '(결혼) 12월 27일 박기동 신랑', '(결혼) 12월 27일 박기동 신랑', '(결혼) 12월 27일 박기동 신랑']),
	      };

"

ListView.DataSource를 ds를 생성합니다. (뒤에 rowHasChanged는 아직 정확하게 무슨 함수인지 모릅니다...)

그리고 cloneWithRows를 사용하여 state에 저장시켜 사용합니다.

보통 JSON으로 데이터를 넣을 것 같은데 예시로 남겨둡니다. 'ds.cloneWithRows(JSON.parse(jsonArrayData))



##Navigator

"

	<Navigator
          style={styles.body}
          ref='navigator'
          initialRoute={{name: 'mainview'}}
          renderScene={this._renderScene}/>

"


Navigator도 2개의 props가 기본적으로 필요합니다. 
initialRoute -> 초기 Route 값.
renderScene -> Navigator로 보여줄 뷰

코드가 깔끔해 보일려면(?) _renderScene라는 함수를 정의하셔야합니다.

"

	_renderScene(route,navigator) {
	    switch (route.name) {
	    case 'mainview':
	      return <MainView navigator={navigator}/>;
	    case 'calrendar_Body':
	      return <CalrendarView navigator={navigator}/>;
	    case 'sMSnavigator':
	      return <SMSnavigator navigator={navigator}/>

	    default:
	      console.error('Encountered unexpected route: ' + route.name);
	    }

	    return <MainView />;
	  }

"

route에 name에 따라 보여질 페이지가 달라지는 것입니다.

그렇기에 case에는 보여질 페이지의 키값을 임의로 적어주시고 return값으로 해당 페이지를 리턴하시면 됩니다.

아, navigator를 props로 넘겨주는건 잊지말고 해줘야 편합니다... navigator는 render에 선언된 Navigator 자신인거 같습니다.


화면 이동 방법은

Navigator를 가르키는 'navigator'를 이용합니다
navigator를 저장해둔 영역에서 접근하여 다음과 같이 사용됩니다.

"

	this.props.navigartor.push({name:'calrendar_Body'});

	//or

	this.refs.navigartor.push({name:'calrendar_Body'});


"

push로 넘겨주게되면 Navigator안 스택에 순서대로 쌓이게 됩니다. 많으면 앱이 느려질수가 있다고 합니다.
스택 컨트롤은 React-native 홈페이지에 ListView에 props 목록을 보면 replace나 pop, popN등 여러가지 컨트롤 방법이 있으니 보시면됩니다.


##Navigator bar  

안했음...



##DrawerLayoutAndroid

왜 DrawerLayouyAndroid만 있을까요...? 왜죠..

사용방법은 다음이 기본입니다. 아래 코드를 

"
	render() {
		retunr(
		<DrawerLayoutAndroid
		      drawerWidth={300}	//드로워 넓이..
		      drawerPosition={DrawerLayoutAndroid.positions.Left}	//포지션
		      renderNavigationView={() => navigationView}>	//드로워에 표시할 뷰.

		      <View style={{flex: 1, alignItems: 'center'}}>
			<Text>영어도 못하는데...</Text>	//그냥 보여줄 뷰.
			<Text>아........ㅠㅠㅠㅜㅜㅜ</Text>
		      </View>

		    </DrawerLayoutAndroid>
		);
	    }


"

이것 말고도 드로어에 보여줄 뷰가 필요하겠죠??

"

	var navigationView = (
	    <View style={{flex: 1, backgroundColor: '#fff',flexDirection:'column'}}>
	      <TouchableOpacity
		style ={{flex: 0.3}}
		onPress={this.goCal}		//클릭 이벤트.
	      >
		<Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>홈으로</Text>
	      </TouchableOpacity>
	    </View>
	  );

"

다음과 같이 선언해서 뷰를 작성해주시면 됩니다.

함수는 딱 2개!

openDrawer()    ,      closeDrawer()

끗.