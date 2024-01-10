import styled from "styled-components";

const StyledPageDetails = styled.section`
  padding-top: 8rem;
`;

function PageDetails() {
  return (
    <StyledPageDetails>
      <aside>
        <h3 className="text-[4.2rem] font-[700] mb-[4rem] text-[#222]">
          Know more about each folder in details
        </h3>
      </aside>
    </StyledPageDetails>
  );
}

export default PageDetails;
