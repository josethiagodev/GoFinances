import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { 
    Container,
    Header, 
    UserWrapper,
    UserInfo, 
    Photo, 
    User, 
    UserName,
    BtnClosed, 
    ResultsCards, 
} from './styles';

export function Dashboard(){
    return (
        <Container>

            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo 
                            source={{ uri: 'https://avatars.githubusercontent.com/u/56521337?v=4' }} 
                        />
                        <User>
                            <UserName>José Thiago</UserName>
                        </User>
                    </UserInfo>

                    <BtnClosed name="power" />
                </UserWrapper>
            </Header>

            <ResultsCards>
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
            </ResultsCards>
        </Container>
    )
}