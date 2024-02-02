import styled, {css} from 'styled-components';
import {theme} from '../../styles/common/Theme.styled';
import desert from "../../assets/img/desert.jpeg"


function Card() {
    return (
        <Wrapper>
            <Image src = {desert} alt = {"cards image"}/>
            <Content>
                <Title>Headline</Title>
                <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen</Text>
                <Container>
                    <StyledButton colored>See more</StyledButton>
                    <StyledButton outlined>Save</StyledButton>
                </Container>
            </Content>
        </Wrapper>
    );
}

export default Card;


const Wrapper = styled.div`
  padding: 10px 15px;
  background: ${theme.colors.backgroundLight};
  border-radius: 15px;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
 
 max-width: 500px;
  margin: auto;
`;


const Image = styled.img.attrs((props) => ({alt: `${props.alt}`, src: `${props.src}`}))`
  width: 100%;
`;

const Content = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: ${theme.typography.black};
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  text-align: left;
  margin-top: 10px;
`;

const Text = styled.p`
  color: ${theme.typography.grayMedium};
  font-size: 1rem;
  margin: 20px 0;
`;

const Container = styled.div`
  & button + button {
    margin-left: 12px;
  }
`;


type StyledButtonProps = {
    outlined?: boolean
    colored?: boolean
    title?: string
}

const StyledButton = styled.button<StyledButtonProps>`
  font-size: 10px;
  line-height: 20px;
  font-weight: bold;
  padding: 4px 4px 6px;
  width: 90px;
  border-radius: 5px;
  cursor: pointer;
  box-sizing: border-box;
  border: 2px solid ${theme.colors.primary};
  ${props => props.colored && css<StyledButtonProps>`
    background-color: ${theme.colors.primary};
    color: ${theme.typography.light};
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

    &:hover {
      background-color: ${theme.colors.backgroundLight};
      color: ${theme.colors.primary};
    }
  `}
  ${props => props.outlined && css<StyledButtonProps>`
    background-color: ${theme.colors.backgroundLight};
    color: ${theme.colors.primary};

    &:hover {
      background-color: ${theme.colors.primary};
      color: ${theme.typography.light};
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    }
  `}
`;