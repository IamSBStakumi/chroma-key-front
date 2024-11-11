import StyledVideo from "./StyledComponents/StyledVideo";

const ComposedVideo = ({ videoUrl }: { videoUrl: string }) => {
	return (
		<div>
			<a href={videoUrl} download="processed_video.mp4">
				ダウンロード
			</a>
			<StyledVideo controls src={videoUrl} />
		</div>
	);
};

export default ComposedVideo;
