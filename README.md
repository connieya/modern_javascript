# 모던 자바스크립트 Deep Dive

### 01장 프로그래밍

- 1.1 프로그램이이란?
- 1.2 프로그래밍 언어
- 1.3 구문과 의미


### [02장 자바스크립트란?](ch02/2장.md)

- 2.1 자바스크립트의 탄생
- 2.2 자바스크립트의 표준화
- 2.3 자바스크립트 성장의 역사
  - 2.3.1 Ajax
  - 2.3.2 jQuery
  - 2.3.3 V8 자바스크립트 엔진
  - 2.3.4 Node.js
  - 2.3.5 SPA 프레임워크
- 2.4 자바스크립트와 ECMAScript
- 2.5 자바스크립트의 특징
- 2.6 ES6 브라우저 지원 현황

### [03장 자바스크립트 개발 환경과 실행 방법](ch03/3장.md)
- 3.1 자바스크립트 실행 환경
- 3.2 웹 브라우저
  - 3.2.1 개발자 도구
  - 3.2.2 콘솔
  - 3.2.3 브라우저에서 자바스크립트 실행
  - 3.2.4 디버깅

- 3.3 Node.js
  - 3.3.1 Node.js 와 npm 소개
  - 3.3.2 Node.js 설치
  - 3.3.3 Node.js REPL


### [04장 변수](ch04/4장.md)

- 4.1 변수란 무엇인가? 왜 필요한가?
- 4.2 식별자
- 4.3 변수 선언
- 4.4 변수 선언의 실행 시점과 변수 호이스팅
- 4.5 값의 할당
- 4.6 값의 재할당
- 4.7 식별자 네이밍 규칙

### [05장 표현식과 문](ch05/5장.md)

- 5.1 값
- 5.2 리터럴
- 5.3 표현식
- 5.4 문
- 5.5 세미콜론과 세미콜론 자동 삽입 기능
- 5.6 표현식인 문과 표현식이 아닌 문

### [06장 데이터 타입](ch06/6장.md)

- 6.1 숫자 타입
- 6.2 문자열 타입
- 6.3 템플릿 리터럴
  - 6.3.1 멀티라인 문자열
  - 6.3.2 표현식 삽입

- 6.4 불리언 타입
- 6.5 undefined 타입
- 6.6 null 타입
- 6.7 심벌 타입
- 6.8 객체 타입
- 6.9 데이터 타입의 필요성
  - 6.9.1 데이터 타입에 의한 메모리 공간의 확보와 참조
  - 6.9.2 데이터 타입에 의한 값의 해석

- 6.10 동적 타이핑
  - 6.10.1 동적 타입 언어와 정적 타입 언어
  - 6.10.2 동적 타입 언어와 변수


### [07장 연산자](ch07/7장.md)

- 7.1 산술 연산자
  - 7.1.1 이항 산술 연산자
  - 7.1.2 단항 산술 연산자
  - 7.1.3 문자열 연결 연산자

- 7.2 할당 연산자
- 7.3 비교 연산자
  - 7.3.1 동등/일치 비교 연산자
  - 7.3.2 대소 관계 비교 연산자

- 7.4 삼항 조건 연산자
- 7.5 논리 연산자
- 7.6 쉼표 연산자
- 7.7 그룹 연산자
- 7.8 typeof 연산자
- 7.9 지수 연산자
- 7.10 그 외의 연산자
- 7.11 연산자의 부수 효과
- 7.12 연산자 우선순위
- 7.13 연산자 결합 순서




### [09장 타입 변환과 단축 평가](ch09/9장.md)

- 9.1 타입 변환이란?
- 9.2 암묵적 타입 변환
  - 9.2.1 문자열 타입으로 변환
  - 9.2.2 숫자 타입으로 변환
  - 9.2.3 불리언 타입으로 변환

- 9.3 명시적 타입 변환
  - 9.3.1 문자열 타입으로 변환
  - 9.3.2 숫자 타입으로 변환
  - 9.3.3 불리언 타입으로 변환

- 9.4 단축 평가
  - 9.4.1 논리 연산자를 사용한 단축 평가
  - 9.4.2 옵셔널 체이닝 연산자
  - 9.4.3  null 병합 연산자


### [10장 객체 리터럴](ch10/10장.md)

- 10.1 객체란?
- 10.2 객체 리터럴에 의한 객체 생성
- 10.3 프로퍼티
- 10.4 메서드
- 10.5 프로퍼티 접근
- 10.6 프로퍼티 값 갱신
- 10.7 프로퍼티 동적 생성
- 10.8 프로퍼티 삭제
- 10.9 ES6에서 추가된 객체 리터럴의 확장기능
  - 10.9.1 프로퍼티 축약 표현
  - 10.9.2 계산된 프로퍼티 이름
  - 10.9.3 메서드 축약 표현


### [11장 원시 값과 객체의 비교](ch11/11장.md)

- 11.1 원시 값
  - 11.1.1 변경 불가능한 값
  - 11.1.2 문자열과 불변성
  - 11.1.3 값에 의한 전달

- 11.2 객체
  - 11.2.1 변경 가능한 값
  - 11.2.2 참조에 의한 전달

### [12장 함수](ch12/12장.md)

- 12.1 함수란?
- 12.2 함수를 사용하는 이유
- 12.3 함수 리터럴
- 12.4 함수 정의
  - 12.4.1 함수 선언문
  - 12.4.2 함수 표현식
  - 12.4.3 함수 생성 시점과 함수 호이스팅
  - 12.4.4 Function 생성자 함수
  - 12.4.5 화살표 함수

- 12.5 함수 호출
  - 12.5.1 매개변수와 인수
  - 12.5.2 인수 확인
  - 12.5.3 매개변수의 최대 개수
  - 12.5.4 반환문

- 12.6 참조에 의한 전달과 외부 상태의 변경
- 12.7 다양한 함수의 형태
  - 12.7.1 즉시 실행 함수
  - 12.7.2 재귀 함수
  - 12.7.3 중첩 함수
  - 12.7.4 콜백 함수
  - 12.7.5 순수 함수와 비순수 함수


### [13장 스코프](ch13/13장.md)

- 13.1 스코프란?
- 13.2 스코프의 종류
  - 13.2.1 전역과 전역 스코프
  - 13.2.2 지역과 지역 스코프

- 13.3 스코프 체인
  - 13.3.1 스코프 체인에 의한 변수 검색
  - 13.3.2 스코프 체인에 의한 함수 검색
  - 13.3.4 함수 레벨 스코프
  - 13.3.5 렉시컬 스코프


### [14장 전역 변수의 문제점](ch14/14장.md)

- 14.1 변수의 생명 주기
  - 14.1.1 지역 변수의 생명 주기
  - 14.1.2 전역 변수의 생명 주기
- 14.2 전역 변수의 문제점
- 14.3 전역 변수의 사용을 억제하는 방법
  - 14.3.1 즉시 실행 함수
  - 14.3.2 네임스페이스 객체
  - 14.3.3 모듈 패턴
  - 14.3.4 ES6 모듈

### [15장 let,const 키워드와 블록 레벨 스코프](ch15/15장.md)

- 15.1 var 키워드로 선언한 변수의 문제점
  - 15.1.1 변수 중복 선언 허용
  - 15.1.2 함수 레벨 스코프
  - 15.1.3 변수 호이스팅

- 15.2 let 키워드
  - 15.2.1 변수 중복 선언 금지
  - 15.2.2 블록 레벨 스코프
  - 15.2.3 변수 호이스팅

- 15.3 const 키워드
  - 15.3.1 선언과 초기화
  - 15.3.2 재할당 금지
  - 15.3.3 상수
  - 15.3.4 const 키워드와 객체

- 15.4 var vs let vs const 

### [16장 프로퍼티 어트리뷰트](ch16/16장.md) 

- 16.1 내부 슬롯과 내부 메서드
- 16.2 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체
- 16.3 데이터 프로퍼티와 접근자 프로퍼티
  - 16.3.1 데이터 프로퍼티
  - 16.3.2 접근자 프로퍼티
- 16.4 프로퍼티 정의
- 16.5 객체 변경 금지
  - 16.5.1 객체 확장 금지
  - 16.5.2 객체 밀봉
  - 16.5.3 객체 동결
  - 16.5.4 불변 객체

### [17장 생성자 함수에 의한 객체 생성](ch17/17장.md)

- 17.1 Object 생성자 함수
- 17.2 생성자 함수
  - 17.2.1 객체 리터럴에 의한 객체 생성 방식의 문제점
  - 17.2.2 생성자 함수에 의한 객체 생성 방식의 장점
  - 17.2.3 생성자 함수의 인스턴스 생성 과정
  - 17.2.4 내부 메서드 [[Call]] 과 [[Construct]]
  - 17.2.5 constructor 와 non-constructor 의 구분
  - 17.2.6 new 연산자
  - 17.2.7 new.target



### [18장 함수와 일급 객체](ch18/18장.md)

- 18.1 일급 객체
- 18.2 함수 객체의 프로퍼티
  - 18.2.1 arguments 프로퍼티
  - 18.2.2 caller 프로퍼티
  - 18.2.3. length 프로퍼티
  - 18.2.4 name 프로퍼티
  - 18.2.5 __proto__ 접근자 프로퍼티
  - 18.2.6 prototype 프로퍼티

### [19장 프로토타입](ch19/19장.md )

- 19.1 객체지향 프로그래밍
- 19.2 상속과 프로토타입
- 19.3 프로토타입 객체
  - 19.3.1 __proto__ 접근자 프로퍼티
  - 19.3.2 함수 객체의 prototype 프로퍼티
  - 19.3.3 프로토타입의 constructor 프로퍼티와 생성자 함수

- 19.4 리터럴 표기법에 의해 생성된 객체의 생성자 함수와 프로토타입
- 19.5 프로토타입의 생성 시점
  - 19.5.1 사용자 정의 생성자 함수와 프로토타입 생성 시점
  - 19.5.2 빌트인 생성자 함수와 프로토타입 생성 시점

- 19.6 객체 생성 방식과 프로토타입의 결정
  - 19.6.1 객체 리터럴에 의해 생성된 객체의 프로토타입
  - 19.6.2 object 생성자 함수에 해 생성된 객체의 프로토타입
  - 19.6.3 생성자 함수에 의해 생성된 객체의 프로토타입
  
- 19.7 프로토타입 체인
- 19.8 오버라이딩과 프로퍼티 섀도잉
- 19.9 프로토타입의 교체
  - 19.9.1 생성자 함수에 의한 프로토타입의 교체
  - 19.9.2 인스턴스에 의한 프로토타입의 교체

- 19.10 instanceof 연산자
- 19.11 직접 상속
  - 19.11.1 Object.create에 의한 직접 상속

- 19.12 정적 프로퍼티/메서드


### [20장 strict mode](ch20/20장.md)

- 20.1 strict mode 란?
- 20.2 strict modde의 적용
- 20.3 전역에 strict mode를 적용하는 것은 피하자
- 20.4 함수 단위로 strict mode를 적용하는 것도 피하자
- 20.5 strict mode가 발생시키는 에러
  - 20.5.1 암묵적 전역
  - 20.5.2 변수,함수,  매개변수의 삭제
  - 20.5.3 매개변수 이름의 중복
  - 20.5.4 with 문의 사용
- 20.6 strict mode 적용에 의한 변화
  - 20.6.1 일반 함수의 this
  - 20.6.2 arguments 객체

### [21장 빌트인 객체](ch21/21장.md)

- 21.1 자바스크립트 객체의 종류
- 21.2 표준 빌트인 객체
- 21.3 원시값고 래퍼 객체
- 21.4 전역 객체
  - 21.4.1 빌트인 전역 프로퍼티
  - 21.4.2 빌트인 전역 함수
  - 21.4.3 암묵적 전역


### [22장 this](ch22/22장.md)

- 22.1 this 키워드
- 22.2 함수 호출 방식과 this 바인딩
  - 22.2.1 일반 함수 호출
  - 22.2.2 메서드 호출
  - 22.2.3 생성자 호출
  - 22.2.4 Function.prototype.apply/call/bind 메서드에 의한 간접 호출

### [23장 실행 컨텍스트](ch23/23장.md)
- 23.1 소스코드의 타입
- 23.2 소스코드의 평가와 실행
- 23.3 실행컨텍스트의 역할
- 23.4 실행 컨텍스트 스택
- 23.5 렉시컬 환경
- 23.6 실행 컨텍스트의 생성과 식별자 검색 과정
  - 23.6.1 전역 객체 생성
  - 23.6.2 전역 코드 평가
  - 23.6.3 전역 코드 실행
  - 23.6.4 foo 함수 코드 평가
  - 23.6.5 foo 함수 코드 실행
  - 23.6.6 bar 함수 코드 평가
  - 23.6.7 bar 함수 코드 실행
  - 23.6.8 bar 함수 코드 실행 종료
  - 23.6.9 foo 함수 코드 실행 종료
  - 23.6.10 전역 코드 실행 종료

- 23.7 실행 컨텍스트와 블록 레벨 스코프

### [24장 클로저](ch24/24장.md)

- 24.1 렉시컬 스코프
- 24.2 함수 객체의 내부 슬롯
- 24.3 클로저와 렉시컬 환경
- 24.4 클로저의 활용
- 24.5 캡슐화와 정보 은닉
- 24.6 자주 발생하는 실수

### 25장 클래스

- 25.1 클래스는 프로토타입의 문법적 설탕인가?
- 25.2 클래스 정의
- 25.3 클래스 호이스팅
- 25.4 인스턴스 생성
- 25.5 메서드
  - 25.5.1 constructor
  - 25.5.2 프로토타입 메서드
  - 25.5.3 정적 메서드
  - 25.5.4 정적 메서드와 프로토타입 메서드의 차이
  - 25.5.5 클래스에서 정의한 메서드의 특징

- 25.6 클래스의 인슽너스 생성 과정
- 25.7 프로퍼티
  - 25.7.1 인스턴스 프로퍼티
  - 25.7.2 접근자 프로퍼티
  - 25.7.3 클래스 필드 정의 제안
  - 25.7.4 private 필드 정의 제안
  - 25.7.5 static 필드 정의 제안

- 25.8 상속에 의한 클래스 확장
  - 25.8.1 클래스 상속과 생성자 함수 상속
  - 25.8.2 extends 키워드
  - 25.8.3 동적 상속
  - 25.8.4 서브클래스의 constructor
  - 25.8.5 super 키워드
  - 25.8.6 상속 클래스의 인스턴스 생성 과정
  - 25.8.7 표준 빌트인 생성자 함수 확장

### [26장 ES6 함수의 추가 기능](ch26/26장.md)

- 26.1 함수의 구분
- 26.2 메서드
- 26.3 화살표 함수
  - 26.3.1 화살표 함수 정의
  - 26.3.2 화살표 함수와 일반 함수의 차이
  - 26.3.3 this
  - 26.3.4 super
  - 26.3.5 arguments

- 26.4 Rest 파라미터
  - 26.4.1 기본 문법
  - 26.4.2 Rest 파라미터와 arguments 객체

- 26.5 매개변수 기본값

### [27장 배열](ch27/27장.md)

- 27.1 배열이란?
- 27.2 자바스크립트 배열은 배열이 아니다.
- 27.3 length 프로퍼티와 희소 배열
- 27.4 배열 생성
  - 27.4.1 배열 리터럴
  - 27.4.2 Array 생성자 함수
  - 27.4.3 Array.of 
  - 27.4.4 Array.from

- 27.5 배열 요소의 참조
- 27.6 배열 요소의 추가와 갱신
- 27.7 배열 요소의 삭제
- 27.8 배열 메서드
  - 27.8.1 Array.isArray
  - 27.8.2 Array.prototype.indexOf
  - 27.8.3 Array.prototype.push
  - 27.8.4 Array.prototype.pop
  - 27.8.5 Array.prototype.unshift
  - 27.8.6 Array.prototype.shift
  - 27.8.7 Array.prototype.concat
  - 27.8.8 Array.prototype.splice
  - 27.8.9 Array.prototype.slice
  - 27.8.10 Array.prototype.join
  - 27.8.11 Array.prototype.reverse
  - 27.8.12 Array.prototype.fill
  - 27.8.13 Array.prototype.includes
  - 27.8.14 Array.prototype.flat

- 27.9 배열 고차 함수
  - 27.9.1 Array.prototype.sort
  - 27.9.2 Array.prototype.forEach
  - 27.9.3 Array.prototype.map
  - 27.9.4 Array.prototype.filter
  - 27.9.5 Array.prototype.reduce
  - 27.9.6 Array.prototype.some
  - 27.9.7 Array.prototype.every
  - 27.9.8 Array.prototype.find
  - 27.9.9 Array.prototype.findIndex
  - 27.9.10 Array.prototype.flatMap


### [29장 Math](ch29/29장.md)

- 29.1 Math 프로퍼티
  - 29.1.1 Math.PI

- 29.2 Math 메서드
  - 29.2.1 Math.abs
  - 29.2.2 Math.round
  - 29.2.3 Math.ceil
  - 29.2.4 Math.floor
  - 29.2.5 Math.sqrt
  - 29.2.6 Math.random
  - 29.2.7 Math.pow
  - 29.2.8 Math.max
  - 29.2.9 Math.min


### [32장 String](ch32/32장.md)

- 32.1 String 생성자 함수
- 32.2 length 프로퍼티
- 32.3 String 메서드
  - 32.3.1 String.prototype.indexOf
  - 32.3.2 String.prototype.search
  - 32.3.3 String.prototype.includes
  - 32.3.4 String.prototype.startsWith
  - 32.3.5 String.prototype.endsWith
  - 32.3.6 String.prototype.charAt
  - 32.3.7 String.prototype.substring
  - 32.3.8 String.prototype.slice
  - 32.3.9 String.prototype.toUpperCase
  - 32.3.10 String.prototype.toLowerCase
  - 32.3.11 String.prototype.trim
  - 32.3.12 String.prototype.repeat
  - 32.3.13 String.prototype.replace
  - 32.3.14 String.prototype.split

### [33장 7번째 데이터 타입 Symbol](ch33/33장.md)

- 33.1 심벌이란?
- 33.2 심벌 값의 생성
  - 33.2.1 Symbol 생성
  - 33.2.2 Symbol.for / Symbol.keyFor 메서드
- 33.3 심벌과 상수
- 33.4 심벌과 프로퍼티 키 
- 33.5 심벌과 프로퍼티 은닉
- 33.6 심벌과 표준 빌트인 객체 확장
- 33.7 Well-known Symbol


### [34장 이터러블](ch34/34장.md)

- 34.1 이터레이션 프로토콜
  - 34.1.1 이터러블
  - 34.1.2 이터레이터
- 34.2 빌트인 이터러블
- 34.3 for...of 문
- 34.4 이터러블과 유사 배열 객체
- 34.5 이터레이션 프로토콜의 필요성
- 34.6 사용자 정의 이터러블
  - 34.6.1 사용자 정의 이터러블 구현
  - 34.6.2 이터러블을 생성하는 함수
  - 34.6.3 이터러블이면서 이터레이터인 객체를 생성하는 함수
  - 34.6.4 무한 이터러블과 지연 평가


### [35장 스프레드 문법 ](ch35/35장.md)

- 35.1 함수 호출문의 인수 목록에서 사용하는 경우
- 35.2 배열 리터럴 내부에서 사용하는 경우
  - 35.2.1 concat
  - 35.2.2 splice
  - 35.2.3 배열 복사
  - 35.2.4 이터러블을 배열로 반환

- 35.3 객체 리터널 내부에서 사용하는 경우


### [36장 디스트럭처링 할당](ch36/36장.md)

- 36.1 배열 디스트럭처링 할당
- 36.2 객체 디스트럭처링 할당

### [39장 DOM](ch39/39장.md)

- 39.1 노드
  - 39.1.1 HTML 요소와 노드 객체
  - 39.1.2 노드 객체의 타입
  - 39.1.3 노드 객채의 상속 구조
- 39.2 요소 노드 취득
  - 39.2.1 id를 이용한 요소 노드 취득
  - 39.2.2 태그 이름을 이용한 요소 노드 취득
  - 39.2.3 class 를 이용한 요소 노드 취득
  - 39.2.4 CSS 선택자를 이용한 요소 노드 취득
  - 39.2.5 특정 요소 노드를 취득할 수 있는지 확인
  - 29.2.6 HTMLCollection 과 NodeList
- 39.3 노드 탐색
  - 39.3.1 공백 텍스트 노드
  - 39.3.2 자식 노드 탐색
  - 39.3.3 자식 노드 존재 확인
  - 39.3.4 요소 노드의 텍스트 노드 탐색
  - 39.3.5 부모 노드 탐색
  - 39.3.6 형제 노드 탐색
- 39.4 노드 정보 취득
- 39.5 요소 노드의 텍스트 조작
  - 39.5.1 nodeValue
  - 39.5.2 textContent
- 39.6 DOM 조작
  - 39.6.1 innerHTML
  - 39.6.2 insertAdjacentHTML 메서드
  - 39.6.3 노드 생성과 추가
  - 39.6.4 복수의 노드 생성과 추가
  - 39.6.5 노드 삽입
  - 39.6.6 노드 이동
  - 39.6.7 노드 복사
  - 39.6.8 노드 교체
  - 39.6.9 노드 삭제
- 39.7 어트리뷰트
  - 39.7.1 어트리뷰트 노드와 attributes 프로퍼티
  - 39.7.2 HTML 어트리뷰트 조작
  - 39.7.3 HTML 어트리뷰트 vs DOM 프로퍼티
  - 39.7.4 data 어트리뷰트와 dataset 프로퍼티
- 39.8 스타일
  - 39.8.1 인라인 스타일 조작
  - 39.8.2 클래스 조작
  - 39.8.3 요소에 적용되어 있는 CSS 스타일 참조
- 39.9 DOM 표준

### [40장 이벤트](ch40/40장.md)

- 40.1 이벤트 드리븐 프로그래밍
- 40.2 이벤트 타입
  - 40.2.1 마우스 이벤트
  - 40.2.2 키보드 이벤트
  - 40.2.3 포커스 이벤트
  - 40.2.4 폼 이벤트
  - 40.2.5 값 변경 이벤트
  - 40.2.6 DOM 뮤테이션 이벤트
  - 40.2.7 뷰 이벤트
  - 40.2.8 리소스 이벤트

- 40.3 이벤트 핸들러 등록
  - 40.3.1 이벤트 핸들러 어트리뷰트 방식
  - 40.3.2 이벤트 핸들러 프로퍼티 방식
  - 40.3.3. addEventListener 메서드 방식

- 40.4 이벤트 핸들러 제거
- 40.5 이벤트 객체
  - 40.5.1 이벤트 객체의 상속 구조
  - 40.5.2 이벤트 객체의 공통 프로퍼티
  - 40.5.3 마우스 정보 취득
  - 40.5.4 키보드 정보 취득

- 40.6 이벤트 전파
- 40.7 이벤트 위임
- 40.8 DOM 요소의 기본 동작 조작
  - 40.8.1 DOM 요소의 기본 동작 중단
  - 40.8.2 이벤트 전파 방지

- 40.9 이벤트 핸들러 내부의 this
  - 40.9.1 이벤트 핸들러 어트리뷰트 방식
  - 40.9.2 이벤트 핸들러 프로퍼티 방식과 addEventListener 메서드 방식

- 40.10 이벤트 핸들러에 인수 전달
- 40.11 커스텀 이벤트
  - 40.11.1 커스텀 이벤트 생성
  - 40.11.2 커스텀 이벤트 디스패치

### 41장 타이머

- 41.1 호출 스케줄링
- 41.2 타이머 함수
  - 41.2.1 setTimeout / clearTimeout
  - 41.2.2 setInterval / clearInterval
- 41.3 디바운스와 스로틀
  - 41.3.1 디바운스
  - 41.3.2 스로틀


### [42장 비동기 프로그래밍](ch42/42장.md)

- 42.1 동기 처리와 비동기 처리
- 42.2 이벤트 루프와 태스크 큐

### [43장 Ajax](ch43/43장.md)

- 43.1 Ajax 란?
- 43.2 JSON
  - 43.2.1 JSON 표기 방식
  - 43.2.2 JSON.stringify
  - 43.2.3 JSON,parse

- 43.3 XMLHttpRequest
  - 43.3.1 XMLHttpRequest 객체 생성
  - 43.3.2 XMLHttpRequest 객체의 프로퍼티와 메서드
  - 43.3.3 HTTP 요청 전송
  - 43.3.4 HTTP 응답 처리

### [44장 REST API](ch44/44장.md)

- 44.1 REST API의 구성
- 44.2 REST API 설계 원칙
- 44.3 JSON Server 를 이용한 REST API 실습
  - 44.3.1 JSON Server 설치
  - 44.3.2 db.json 파일 생성
  - 44.3.3 JSON Server 실행
  - 44.3.4 GET 요청
  - 44.3.5 POST 요청
  - 44.3.6 PUT 요청
  - 44.3.7 PATCH 요청
  - 44.3.8 DELETE 요청

### [45장 프로미스](ch45/45장.md)

- 45.1 비동기 처리를 위한 콜백 패턴의 단점
  - 45.1.1 콜백 헬
  - 45.1.2 에러 처리의 한계

- 45.2 프로미스의 생성
- 45.3 프로미스의 후속 처리 메서드
  - 45.3.1 Promise.prototype.then
  - 45.3.2 Promise.prototype.catch
  - 45.3.3 Promise.prototype.finally

- 45.4 프로미스의 에러 처리
- 45.5 프로미스 체이닝
- 45.6 프로미스의 정적 메서드
  - 45.6.1 Promise.resolve / Promise.reject
  - 45.6.2 Promise.all
  - 45.6.3 Promise.race
  - 45.6.4 Promise.allSettled

- 45.7 마이크로테스트 큐
- 45.8 fetch 

### [46장 제너레이터와 async/await](ch46/46장.md)

- 46.1 제너레이터란?
- 46.2 제너레이터 함수의 정의
- 46.3 제너레이터 객체
- 46.4 제너레이터의 일시 중지와 재개
- 46.5 제너레이터의 활용
  - 46.5.1 이터러블의 구현
  - 46.5.2 비동기 처리
- 46.6 async / await
  - 46.6.1 async 함수
  - 46.6.2 await 키워드
  - 46.6.3 에러 처리

### [47장 에러 처리](ch47/47장.md)

- 47.1 에러 처리의 필요성
- 47.2 try ... catch ... finally 문
- 47.3 Error 객체
- 47.4 throw 문
- 47.5 에러의 전파

### 48장 모듈

- 48.1 모듈의 일반적 의미
- 48.2 자바스크립트와 모듈
- 48.3 ES6 모듈(ESM)
  - 48.3.1 모듈 스코프
  - 48.3.2 export 키워드
  - 48.3.3 import 키워드

### 49장 Babel 과 Webpack 을 이용한 ES6+/ES.NEXT 개발 환경 구축

- 49.1 Babel
  - 49.1.1 Babel 설치
  - 49.1.2 Babel 프리셋 설치와 babel.config.json 설정 파일 작성
  - 49.1.3 트랜스파일링
  - 49.1.4 Babel 플러그인 설치
  - 49.1.5 브라우저에서 모듈 로딩 테스트

- 49.2 Webpack
  - 49.2.1 Webpack 설치
  - 49.2.2 babel-loader 설치
  - 49.2.3 webpack.config.js 설정 파일 작성
  - 49.2.4 babel-polyfill 설치