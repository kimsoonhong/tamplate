# tamplate



- Pages => 페이지 별로 depth를 표현하는 파일, 도메인 또는 화면별로 폴더를 분리하여 unit에서 import 해온다.
    - Example => src/components/unit/Example.container를 import 하여 화면에 랜딩해준다.
    - Mui => src/components/unit/Mui.container를 import 하여 화면에 랜딩해준다.
    - Products => src/components/unit/Products.container를 import 하여 화면에 랜딩해준다.
    - Index.tsx => 최초의 랜딩 페이지
    - _app.tsx => 모든 페이지에 적용할 공통 레이아웃이며, context 등을 선언하여 속성을 관리한다.
- Public => 폰트와 파비콘, 이미지 등을 보관하여 관리하는 폴더
    - font
- src => 페이지를 구성하기위한 모든 소스파일을들을 모아 놓는다.
    - Commons => 전역에서 공통으로 재사용 가능한 함수, 또는 기능을을 보관한다.
        - Constants => 상수 파일을 보관한다.
        - Interface => 전역에서 사용하는 Typescript interface파일을 보관한다. 모든 interface 에는 구분을 위해 대문자 I 를 붙혀 선언한다.
        - Libraries => 외부 라이브러리 또는 전역에서  재사용이 가능한 utils 함수들을 보관한다.
            - Axios
            - Utils
        - Styles => 전역에서 사용하는 스타일 함수들을 보관한다. 
    - Components => React Element를 Return 하는 파일을 보관한다.
        - Commons => 전역에서 재활용이 가능한 컴퍼넌트들을 보관하는 폴더, 
            - Layout
            - Button
            - Inputs
            - Dialog
            - …
        - Unit => 도메인, 또는 화면단위로 폴더를 구분하여 구성하며 depth 표현은 상위 pages 폴더에서 주로 한다. 
            - Example
                - Example.container.tsx => view 파일을 구성하기 위한 함수와 비지닉스 로직을 보관하는 컨테이너파일.
                - Example.presenter.tsx => view 파일,  container에서 함수와 변수를 props 받아 구성하며 가능하면 파일은 하나로 구성한다.
                - Example.api.tsx => 해당 도메인, 또는 화면에 필요한 api를 호출하여 사용 가능하도록 함수를 선언해놓은 파일
                - Example.type.tsx => 해당 도메인 또는 화면에 필요한 타입을 모아놓은 파일, 한곳이상에 재사용하는 interface만 보관하며 재사용되지 않는다면 해당 파일에서 직접 interface 선언하여 사용할것
            - Mui => 상동
            - Products => 상동
            - Login => 상동
            - Item => 상동
            - 





            - 모든 폴더는 camelCase 로 구성한다
            - 모든 파일은 PascalCase로 구성한다. (pages에 index파일 제외)
            - 상수는 UPPER_SNAKE_CASE로 관리한다
            - 상태관리는 app.tsx 에 context로 하며 추후 필요시 recoil 사용 고려

