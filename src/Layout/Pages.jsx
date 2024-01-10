import styled from "styled-components";

const pagesData = [
  "layout",
  "components",
  "commonLayout",
  "commonStyles",
  "errorPage",
  "fetchData",
  "shared",
  "spinner",
];

const StyledPages = styled.section`
  padding-top: 8rem;

  .card {
    /* background-color: red; */
    border-radius: 3px;
    padding: 10px 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }
`;

function Pages() {
  return (
    <StyledPages>
      <aside>
        <h3 className="text-[4.2rem] font-[700] mb-[4rem] text-[#222]">
          The &#39;/src&#39; folder contains folders named
        </h3>
        <div className="grid grid-cols-4 gap-4">
          {pagesData.map((page) => (
            <div key={page} className="card">
              <p className="text-[26px] font-[700] capitalize text-center">
                {page}
              </p>
            </div>
          ))}
        </div>
      </aside>
    </StyledPages>
  );
}

export default Pages;
