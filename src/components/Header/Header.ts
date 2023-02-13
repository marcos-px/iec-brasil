import styled from "styled-components";

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-around;
  max-height: 92px;
  height: 100vh;
  background-color: #1ca3dd;
  gap: 150px;
  .header-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
  .iec-logo {
    margin-left: 40px;
    width: 90px;
    height: 65px;
  }
  .social-media {
    display: flex;
    color: white;
    gap: 26px;
    font-size: 24px;
  }

.social-media :only-child{
  cursor: pointer;
}
  .header-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .link-buttons{
  display: flex;
  justify-content: center;
  align-items: center;
  border: none; 
  white-space: nowrap;
  margin-right: 24px;
  color: white;
  }
`;
