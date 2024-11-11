"use client";

import { useState, useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import DefaultModal from "@/components/Modal";
import Explanation from "@/components/Explanation";
import UploadForm from "@/components/UploadForm";
import { PreviewWrapper } from "@/components/StyledComponents/WrapperComponents";
import PreviewImage from "@/components/PreviewImage";
import PreviewVideo from "@/components/PreviewVideo";
import composeFiles from "@/utils/composeFiles";
import LoadComponent from "@/components/LoadComponent";
import ComposedVideo from "@/components/ComposedVideo";

import BetaCheckBox from "@/components/BetaCheckBox";

export default function Home() {
	const [image, setImage] = useState<File | null>(null);
	const [video, setMovie] = useState<File | null>(null);
	const [isModalOpen, setModalOpen] = useState(false);
	const [modalMessage, setModalMessage] = useState("");
	const [isDisabledButton, setDisabledButton] = useState<boolean>(false);
	const [videoUrl, setVideoUrl] = useState<string | null>(null);
	const [isChecked, setChecked] = useState(false);

	const mutation = useMutation({
		mutationFn: ({ image, video }: { image: File; video: File }) => composeFiles(image, video, isChecked),
		onMutate: () => setVideoUrl(""),
		onSuccess: (response) => {
			setDisabledButton(false);
			setVideoUrl(response);
		},
		onError: () => {
			setDisabledButton(false);
		},
	});

	const openModal = (message: string) => {
		setModalMessage(message);
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
		setModalMessage("");
	};

	const handleChangeImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setImage(null);

		const input = e.target.files;
		if (!input || !input.length) return;
		const file = input[0] as File;
		if (file.type !== "image/png" && file.type !== "image/jpeg") {
			openModal("アップロードできるのは拡張子がpngかjpegの画像のみです");

			return;
		}
		setImage(file);
	}, []);

	const handleChangeVideo = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setMovie(null);

		const input = e.target.files;
		if (!input || !input.length) return;
		const file = input[0] as File;
		const isMp4 = file.type === "video/mp4";
		const isMov = file.type === "video/quicktime";
		if (!isMp4 && !isMov) {
			openModal("アップロードできるのは拡張子がmp4またはmovの動画のみです");

			return;
		}
		setMovie(file);
	}, []);

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (image === null || video === null) {
			openModal("画像または動画が\nアップロードされていません");

			return;
		}
		setDisabledButton(true);
		mutation.mutate({ image, video });
	};

	const handleChangeCheckValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(e.target.checked);
	};

	return (
		<main>
			<Explanation />
			<BetaCheckBox checked={isChecked} handleChangeValue={handleChangeCheckValue} />
			<UploadForm
				handleChangeImage={handleChangeImage}
				handleChangeVideo={handleChangeVideo}
				handleSubmit={handleSubmit}
				isDisabledButton={isDisabledButton}
			/>
			{mutation.isPending && <LoadComponent />}
			{videoUrl && <ComposedVideo videoUrl={videoUrl} />}
			<PreviewWrapper>
				<PreviewImage file={image} />
				<PreviewVideo file={video} />
			</PreviewWrapper>
			<DefaultModal isModalOpen={isModalOpen} closeModal={closeModal} modalMessage={modalMessage} />
		</main>
	);
}
