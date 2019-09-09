import { css } from 'styled-components';
export const flexCenterRow = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexCenterColumn = css`
  ${flexCenterRow}
  flex-direction: column;
`;
