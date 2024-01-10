import styled from "styled-components";
import Banner from "./Banner";
import Pages from "./Pages";
import PageDetails from "./PageDetails";

const StyledLayout = styled.div``;

function Layout() {
  return (
    <StyledLayout>
      <Banner />
      <Pages />
      <PageDetails />
    </StyledLayout>
  );
}

export default Layout;
