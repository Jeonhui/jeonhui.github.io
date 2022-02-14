import styled from "styled-components";

const Flex_box_column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;
`
const Flex_box_row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
`
const Flex = styled.div`
  display: inline-block;
  border: 1px solid black;
  flex-grow: 1;
`

function projects() {
    return (
        <div className="projects">
            <Flex_box_column>
                <Flex_box_row>
                    <Flex></Flex>
                    <Flex></Flex>
                    <Flex></Flex>
                    <Flex></Flex>
                    <Flex></Flex>
                    <Flex></Flex>
                    <Flex></Flex>
                </Flex_box_row>
                <Flex_box_row>
                    <Flex></Flex>
                    <Flex></Flex>
                    <Flex></Flex>
                    <Flex></Flex>
                    <Flex></Flex>
                    <Flex></Flex>
                    <Flex></Flex>
                </Flex_box_row>
            </Flex_box_column>
        </div>
    );
}

export default projects;
