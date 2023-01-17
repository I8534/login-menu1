# login-menu1

https://velog.io/@dev-tinkerbell/display-none%EC%9D%B4-transition%EC%9D%B4-%EC%95%88%EB%A8%B9%ED%9E%88%EB%8A%94-%EC%9D%B4%EC%9C%A0

display none, block이 될 때 무슨일이 일어나길래..?
요소가 화면에 출력되기 위해 무슨 과정을 거치는지부터 생각을 해보자. 일단 HTML과 CSS를 파싱후에 각각 DOM, CSSOM이 생성될 것이다. DOM과 CSSOM을 결합하여 렌더링 트리를 형성한다. 
이 렌더링 트리는 화면에 출력될 요소들의 레이아웃을 계산하는 데 사용되고 픽셀을 화면에 렌더링하는 페인트 프로세스에 대한 입력으로 처리된다.

이때, 렌더링 트리는 화면에 출력되지 않아도 될 일부 노드(meta, script 등)와 CSS를 통해 숨겨지는 노드가 렌더링 트리에서 생략된다.

transition은 두 상태에서 속성의 변화가 일정 기간에 걸쳐 일어나도록 하지만 
display: none 상태에서 동적으로 클래스를 추가하여 display: block을 추가한다고 하면 렌더 트리에 없다가 추가되는 것이기 때문에 transition의 처음 시작점이 없다. 
그래서 시각적으로transition이 동작되지 않는 것처럼 보이는 것이다.
