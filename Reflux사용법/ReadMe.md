##React-Native Reflux 란
	
	리엑트는 컴포넌트간 단방향 통신이기때문에 구조가 복잡해질수록(조금만 복잡해져도 귀찮아집니다...) 어떠한 상태값을 유지하는 것과
	확인하는 것이 어렵다는 것을 느꼈습니다. 
	그렇기에 사용하는 것이 Reflux입니다. 앱을 킨 이후로부터 원하는 값을 해당 저장소(-> 클래스로 정의됩니다. 저장소라는 표현이 맞을지..)에 저장해 두었다가
	다른 컴포넌트에서 쉽게 해당 값을 가져와 사용 가능합니다.
	Reflux는 기존 flux에서 발전시킨것이라고하는데 잘 모르니 패스..

##Relfux를 사용하기 위한 준비.

	Relfux를 사용하기 위해서는 3가지 준비가 필요합니다.
	첫번쩨 -> Data클래스를 만든다 (DTO라고 생각하시면됩니다.)
	두번째 -> Relfux액션을 생성한다.
	세번째 -> DataStore를 만들고 필요한 액션을 정의한다.


첫번째 부터 시작하겠습니다. 저장할 데이터의 구조를 만들어 두는 것입니다.


	Contact.js

"

	class Contact{

	  constructor(id,name,phonNumber){
	    this.id = id;
	    this.name = name;
	    this.phonNumber = phonNumber;
	  }

	  setFromObject(ob){
	    this.id = id;
	    this.name = name;
	    this.phonNumber = phonNumber;
	  }

	  static fromObject(ob){
	    let c = new Contact(ob.id,ob.name,ob.phonNumber);
	    c.setFromObject(ob);
	    return c;
	  }

	}
	module.exports = Contact;

"

앱안 연락처를 가져와서 담아두는 용도로 만들었던 클래스입니다. 연락처 id와 이름, 폰넘버가 들어갑니다.

두번째 - 액션 생성입니다.

		Action.js

	"
		
		import Reflux from 'reflux';

		export var ContactActions = Reflux.createActions([
		  'createContact',
		  'editContact',
		  'deleteAllContact',
		  'getAllContact'
		]);


	"

최 상단에 reflux를 임폴트 해주시고, Reflux.createActions로 사용이 생각되는 액션을 String 배열 형태로 넣어주시면 됩니다.

한개의 저장소를 사용해서 짧지만 여러개의 저장소가 필요할시 해당 파일에 추가적으로 삽입해서 사용하는게 편합니다.


"
		
		import Reflux from 'reflux';

		export var ContactActions = Reflux.createActions([
		  'createContact',
		  'editContact',
		  'deleteAllContact',
		  'getAllContact'
		]);

		export var ContactActions2 = Reflux.createActions([
		  'createContact',
		  'editContact',
		  'deleteAllContact',
		  'getAllContact'
		]);

		export var ContactActions3 = Reflux.createActions([
		  'createContact',
		  'editContact',
		  'deleteAllContact',
		  'getAllContact'
		]);


	"

세번째 - 미리 약속해둔 액션명에 맞는 함수를 만드는 단계입니다.


먼저 전체 코드입니다.


"

	import Contact from './../data/Contact.js';	//사용할 Data클래스.
	import Reflux from 'reflux';
	import _ from 'lodash';
	import {ContactActions} from './../action.js';	//만들어둔 action.js 파일.

	import React from 'react-native';
	var { AsyncStorage } = React;			//AsyncStorage라고 React-native에서 지원하는 내부 모바일 저장소라고 생각하시면됩니다-> 앱종료후에도 저장되어있음.

	const CARD_KEY = 'tuubong-contact';		//AsyncStorage에서 사용되는 것.

	var contactStore = Reflux.createStore({
	  init() {
	    //this._loadContact().done();
	    this.listenTo(ContactActions.createContact, this.createContact);
	    this.listenTo(ContactActions.deleteAllContact, this.deleteAllContact);
	    this.listenTo(ContactActions.editContact, this.editContact);
	    this.listenTo(ContactActions.getAllContact, this.asd);
	    this._contacts = [];		//직접적으로 데이터가 저장되어있는 곳.
	    this.emit();
	  },


	  async _loadContact() {
	    try {
	      var val = await AsyncStorage.getItem(CARD_KEY);
	      if (val !== null) {
		this._contacts = JSON.parse(val).map((cardObj) => {
		  return Contact.fromObject(cardObj);
		});
		this.emit();
	      }
	      else {
		console.info(`${CARD_KEY} not found on disk.`);
	      }
	    }
	    catch (error) {
	      console.error('AsyncStorage error: ', error.message);
	    }
	  },

	  async _writeContact() {
	    try {
	      await AsyncStorage.setItem(CARD_KEY, JSON.stringify(this._contacts));
	    }
	    catch (error) {
	      console.error('AsyncStorage error: ', error.message);
	    }
	  },

	  deleteAllContact() {
	    this._contacts = [];
	    this.emit();
	  },


	  createContact(id, name, phonNumber) {
	    this._contacts.push(new Contact(id, name, phonNumber));
	    //this.emit();
	  },

	  emit() {
	    this._writeContact().done();
	    this.trigger(this._contacts);
	  },

	  asd(){
	    this.getAllContact().done();
	  },

	  async getAllContact(){
	    try {
	    var val = await AsyncStorage.getItem(CARD_KEY);
	    //console.log(var[0]);
	    }
	    catch (error) {
	      console.error('AsyncStorage error: ', error.message);
	    }
	  }

	});
	export default contactStore;

"


쓸때없는거 버리고 중요한 것 2개만 보시면 됩니다.

"

	init() {
	    this.listenTo(ContactActions.createContact, this.createContact);	//action.js에 선언한 액션명에 만들어둔 함수와 매핑.
	    this.listenTo(ContactActions.deleteAllContact, this.deleteAllContact);
	    this.listenTo(ContactActions.editContact, this.editContact);
	    this.listenTo(ContactActions.getAllContact, this.asd);
	    this._contacts = [];	//직접적으로 데이터가 저장되어있는 곳.
	    this.emit();
	  },

"

초기설정입니다. 주석에 써있는 것처럼 action.js에 선언한 액션명과 함수명을 매핑시켜주는 역활을 합니다. 그럼 다른 js파일에서 'ContactActions.createContact'를 호출을 하면 
해당 파일안 'createContact'파일이 호출이 됩니다.

'this._contacts'는 데이터를 저장하기 위한 배열로 다른 js파일에서 'ContactActions._contacts' 로 접근하면 저장된 값을 사용 할 수 있습니다.



"

	createContact(id, name, phonNumber) {
	    this._contacts.push(new Contact(id, name, phonNumber));
	  }

"
'this._contacts'에 데이터를 넣은 녀석입니다. 다른 파일에서 'ContactActions.createContact('1','홍길동','01012345678')'를 호출 하면 홍길동의 정보가 
'this._contacts'에 저장되어집니다...  이해하고 나니 쉽습니다..



##다른 js파일에서 Reflux사용법!

"

	import ContactStore from './../../src/stores/ContactStore.js'

"

만들어둔 DataStore 파일을 임폴트해서 사용하시면 됩니다...

ex) console.log(ContactStore.this._contacts);    ---> {[object],[object],[object].....}
ex) ContactActions.createContact('1','홍길동','01012345678')  -> 저장.


