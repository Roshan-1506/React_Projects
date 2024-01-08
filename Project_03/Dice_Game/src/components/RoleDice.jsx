
import styled from "styled-components";

const RoleDice = ({roleDice,currentDice}) => {
     
   const DiceContainer = styled.div`
      margin-top: 48px;
      display: flex;
      flex-direction: column;
      align-items: center;


      p{
        font-size: 24px;
      }
   
      .dice{
        cursor: pointer;
      }
   `;

  return (
    <DiceContainer>
    <div className="dice" onClick={roleDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="dice1"/>
    </div>
    <p>Click On Dice to Roll</p>
    </DiceContainer>
  );
};

export default RoleDice;