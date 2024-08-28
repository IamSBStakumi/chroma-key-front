import LoadingSpinner from "./LoadingSpinner";
import { LoadWrapper } from "./StyledComponents/WrapperComponents";

const LoadComponent = () => (
  <LoadWrapper>
    <p style={{ whiteSpace: "pre-wrap" }}>{"動画を合成中です\nこの処理には時間がかかることがあります"}</p>
    <LoadingSpinner />
  </LoadWrapper>
);

export default LoadComponent;
