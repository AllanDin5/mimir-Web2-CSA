import styled from 'styled-components/macro'

export function AppBar() {
    return <Bar>
        <TitleText>Mirmir</TitleText>
        <TopButton onClick={sayHello}>New Game </TopButton>
        <ManageCardsSetupButton onClick={sayHello}>Manage Cards</ManageCardsSetupButton>

    </Bar>
}

const Bar = styled.div`
  background: darkblue;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`
const TitleText = styled.div`
  color: white;
`
const ManageCardsSetupButton = styled.button`
  color: lightblue;
  background: darkblue;
  border-width: 0px;
`
const TopButton = styled.button`
  background-color: lightblue;
  color: white;
  border-radius: 5px;
  border-width: 0px;
  
`
function sayHello() {
    alert('You clicked me!');
}