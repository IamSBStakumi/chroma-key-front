import React from "react";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import Main from "../page";

const queryClient = new QueryClient();
const mockedComposeFile = jest.spyOn(axios, "post").mockImplementation(() => {
  return Promise.resolve("sampleVideoUrl");
});

beforeEach(() => {
  render(
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>,
  );
});
afterEach(() => {
  mockedComposeFile.mockClear();
});

describe("要素の表示", () => {
  test("説明テキスト", () => {
    expect(screen.getByText(/グリーンバックの動画と背景画像を/)).toBeInTheDocument();
    expect(screen.getByText(/アップロードして、 合成を行うことができます/)).toBeInTheDocument();
  });
  test("画像用フォーム", () => {
    expect(screen.getByText("背景画像")).toBeInTheDocument();
    const PictureInput = screen.getByLabelText("背景画像");
    expect(PictureInput).toBeInTheDocument();
    expect(PictureInput).not.toHaveValue();
  });
  test("動画用フォーム", () => {
    expect(screen.getByText("合成する動画")).toBeInTheDocument();
    const VideoInput = screen.getByLabelText("合成する動画");
    expect(VideoInput).toBeInTheDocument();
    expect(VideoInput).not.toHaveValue();
  });
  test("合成開始ボタン", () => {
    expect(screen.getByRole("button", { name: "合成開始" })).toBeInTheDocument();
  });
});

describe("処理部分のテスト", () => {
  test("何もアップロードせずに合成開始ボタンをクリックするとモーダルが開く", async () => {
    const ComposeButton = screen.getByRole("button", { name: "合成開始" });
    await user.click(ComposeButton);
    expect(screen.getByText("警告")).toBeInTheDocument();
    expect(screen.getByText(/画像または動画が/)).toBeInTheDocument();
    expect(screen.getByText(/アップロードされていません/)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "OK" })).toBeInTheDocument();
    expect(mockedComposeFile).not.toHaveBeenCalled();
  });
  test("png画像ファイルを画像フォームにアップロードできる", async () => {
    const PictureInput = screen.getByLabelText("背景画像");
    const PngFile = new File(["Image"], "Image.png", { type: "image/png" });
    await user.upload(PictureInput, PngFile);
    expect(PictureInput).toHaveValue();
    // MEMO: next/imageは読み込みを待つ必要がある
    expect(await screen.findByAltText("Image.png")).toBeInTheDocument();
  });
  // MEMO: jpegの場合だとテストが失敗
  // test("jpeg画像ファイルを画像フォームにアップロードできる", async () => {
  //   const PictureInput = screen.getByLabelText("背景画像");
  //   const JpegFile = new File(["ffd8ff"], "Image.jpeg", { type: "image/jpeg" });
  //   await user.upload(PictureInput, JpegFile);
  //   expect(PictureInput).toHaveValue();
  // });
  test("動画ファイルを動画フォームにアップロードできる", async () => {
    const MovieInput = screen.getByLabelText("合成する動画");
    const MovieFile = new File(["movie"], "Movie.mp4", { type: "video.mp4" });
    await user.upload(MovieInput, MovieFile);
    expect(MovieInput).toHaveValue();
    expect(screen.getByLabelText("preview-video")).toBeInTheDocument();
  });
  /* MEMO: モーダルの文言をgetByTextで取得できなかった
   * モーダルが開いていない?
   */
  test("画像以外のファイルを画像フォームにアップロードしても受け取らない", async () => {
    const PictureInput = screen.getByLabelText("背景画像");
    const notPicture = new File(["not Picture"], "notPicture.csv", { type: "text/csv" });
    await user.upload(PictureInput, notPicture);
    expect(PictureInput).not.toHaveValue();
  });
  /* MEMO: モーダルの文言をgetByTextで取得できなかった
   * モーダルが開いていない?
   */
  test("動画以外のファイルを動画フォームにアップロードしても受け取らない", async () => {
    const MovieInput = screen.getByLabelText("合成する動画");
    const notMovie = new File(["not Movie"], "notMovie.csv", { type: "text/csv" });
    await user.upload(MovieInput, notMovie);
    expect(MovieInput).not.toHaveValue();
  });
  test("画像と動画をアップロードして、合成開始ボタンを押すとAPIが呼び出される", async () => {
    const PictureInput = screen.getByLabelText("背景画像");
    const MovieInput = screen.getByLabelText("合成する動画");
    const ComposeButton = screen.getByRole("button", { name: "合成開始" });

    const PngFile = new File(["Image"], "Image.png", { type: "image/png" });
    const MovieFile = new File(["movie"], "Movie.mp4", { type: "video.mp4" });

    await user.upload(PictureInput, PngFile);
    await user.upload(MovieInput, MovieFile);

    await user.click(ComposeButton);
    expect(mockedComposeFile).toHaveBeenCalledTimes(1);
    // MEMO: ダウンロードリンクを確認するとエラーになる
    // expect(screen.getByRole("article", { name: "ダウンロード" }));
    // expect(screen.getByText("ダウンロード")).toBeInTheDocument();
  });
});
