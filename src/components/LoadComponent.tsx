import LoadingSpinner from "./LoadingSpinner";
import { LoadWrapper } from "./StyledComponents/WrapperComponents";

const LoadComponent = () => (
  <LoadWrapper>
    <p>
      動画を合成中です
      <br />
      この処理には時間がかかることがあります
    </p>
    <LoadingSpinner />
  </LoadWrapper>
);

export default LoadComponent;
