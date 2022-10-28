import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
            <Section
                title="2023 Ferd Bronky"
                description="Discover which Broncy can reunite you with adventure."
                backgroundImg="bronco.jpeg"
                leftButtonText="custom order"
                rightButtonText="local inventory"
                textColor="black"
            />
            <Section
                title="2023 Ferd Superb Duty"
                description="Discover the power and capabilities behind the badge."
                backgroundImg="sd.jpeg"
                leftButtonText="custom order"
                rightButtonText="local inventory"
                textColor="inherit"
            />
            <Section
                title="2023 Ferd Merstang"
                description="Find uncompromised power and spirit in every model of an icon."
                backgroundImg="mustang.webp"
                leftButtonText="custom order"
                rightButtonText="local inventory"
                textColor="inherit"
            />
            <Section
                title="Let's Go Ewectric, Together"
                description="See how Ferd ewectric vehicles fit into your life."
                backgroundImg="mach.jpeg"
                leftButtonText="Browse Vehicles"
                rightButtonText="Ferd EV Living"
                textColor="black"
            />
        </Container>
  );
}

export default Home;

const Container = styled.div`
    height: 100vh;

`