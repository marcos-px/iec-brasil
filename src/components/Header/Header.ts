import styled from "styled-components";

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: 92px;
  height: 100vh;
  background-color: #1ca3dd;
  .header-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
  .iec-logo {
    margin-left: 80px;
    width: 90px;
    height: 65px;
  }
  .social-media {
    display: flex;
    color: white;
    gap: 26px;
    font-size: 24px;
  }
`;
