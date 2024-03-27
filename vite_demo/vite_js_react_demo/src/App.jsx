


function App() {

  return <div>
     <CardWrapper innerComponent ={<TextComponent/>}></CardWrapper>
     </div>

}

function TextComponent(){
  return <div>
    Hello
  </div>
}

function CardWrapper({innerComponent}){
  return <div  style={{border:"2px solid black"}}>
      {innerComponent}
  </div>
}

export default App;
