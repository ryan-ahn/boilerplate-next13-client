'use client';

import styled from 'styled-components';
import { flexSet, boxSet, colorSet, fontSet } from '@styles/mixin';
// import { useAuthStore, useDataStore } from '@store/index';
import { CONTENT_PAGE } from '@constants/data/content';
import AtomsCustomButton from '@components/atoms/button/custom';

export default function mainContainer() {
  return (
    <StyledWrapper>
      <StyledContentBox>
        <p>{CONTENT_PAGE.main.body}</p>
        <AtomsCustomButton text="테스트" color="#6f86d6" />
      </StyledContentBox>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  ${() => flexSet('center', 'center', 'row')};
  ${() => boxSet('100%', 'calc(100vh - 80px)')};
  ${() => colorSet('white', '#101010')};
`;

const StyledContentBox = styled.div`
  ${() => flexSet('center', 'center', 'column')};
  white-space: pre-wrap;
  & > p {
    ${() => fontSet(50, 500, 60)};
    text-align: center;
  }
`;
