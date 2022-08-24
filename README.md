# 모던 자바스크립트 Deep Dive

### 01장 프로그래밍

- 1.1 프로그램이이란?
- 1.2 프로그래밍 언어
- 1.3 구문과 의미


### 02장 자바스크립트란?

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

### 03장 자바스크립트 개발 환경과 실행 방법
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


### [9장 타입 변환과 단축 평가](ch09/9장.md)

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