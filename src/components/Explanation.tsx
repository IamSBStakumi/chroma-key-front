"use client";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  padding: 2.5rem 0 2.5rem 0;
`;

const Text = styled.h2`
  font-size: 1.5rem;
`;

const Explanation = () => (
  <Wrapper>
    <Text>
      グリーンバックの動画と背景画像を
      <br />
      アップロードして、 合成を行うことができます。
    </Text>
  </Wrapper>
);

export default Explanation;
