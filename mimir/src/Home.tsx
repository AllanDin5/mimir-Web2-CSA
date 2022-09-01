import styled from 'styled-components/macro'

export function Home() {
    return <Main>
    <StartGameButton onClick={sayHello}>Start New Game </StartGameButton>
    <NoGameText>No running Game</NoGameText>
    </Main>
}


const Main = styled.div`
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 10px;
`
const NoGameText = styled.div`
  align-self: center;
`
const StartGameButton = styled.button`
  align-self: center;
  background-color: darkblue;
  color: white;
  border-radius: 5px;
  border-width: 0px;
`
function sayHello() {
    alert('Lets Start!');
}