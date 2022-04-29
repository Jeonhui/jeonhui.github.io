import styled, {css} from "styled-components";
import iphoneImg from "../../source/iphone12pro_3:4.png";

const Iphonea = styled.div`
  position: absolute;
  bottom: 0;
  right: 150px;
  width: 381px;
  height: 587.25px;
  transition: bottom 2s;
  ${props => !props.load && css`
    bottom: -381px;
  `}
`

const Screen = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 381px;
  height: 587.25px;
  background: url(${iphoneImg}) center center;
  background-size: cover;
`
const ScreenTop = styled.div`
  border-radius: inherit;
  padding-bottom: 50px;
`

const ScreenNotification = styled.div`
  height: 45px;
  border-radius: inherit;
  margin-bottom: 10px;
`

const Time = styled.span`
  position: relative;
  top: 50%;
  transform: translate(-100%, -50%);
  left: 40px;
  font-weight: 500;
`
const MessageBox = styled.div`
  position: relative;
  width: 100%;
`

const Message = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
`

const MyMessage = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translate(0,-50%);
  border-radius: 20px;
  right: 25px;
  padding: 5px 12px;
  color: white;
  background-color: dodgerblue;
  transition: all 0.2s linear;
  text-align: right;

  &:hover {
    transform: scale(1.05);
  }
`

const YourMessage = styled.div`
  display: inline-block;
  position: absolute;
  border-radius: 50px;
  top: 50%;
  transform: translate(0,-50%);
  left: 25px;
  padding: 5px 12px;
  background-color: lightgray;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.1);
  }
`


export default function Iphone(props) {
    return (
        <Iphonea load={props.load}>
            <Screen>
                <ScreenTop>
                    <ScreenNotification>
                        <Time>14:41</Time>
                    </ScreenNotification>
                </ScreenTop>
                <MessageBox>
                    <Message><YourMessage>Hi!</YourMessage></Message>
                    <Message><MyMessage>Hi, I'm Jeonhui Lee</MyMessage></Message>
                    <Message><MyMessage>It's my portfolio website<br/>IOS Developer</MyMessage></Message>
                    <Message><MyMessage>Hi, I'm Jeonhui Lee</MyMessage></Message>
                </MessageBox>
            </Screen>
        </Iphonea>
    );
}

