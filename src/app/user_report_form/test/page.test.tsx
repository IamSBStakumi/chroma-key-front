import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Report from "../page";

const queryClient = new QueryClient();
const mockedPostIssue = jest.fn();
mockedPostIssue.mockImplementation(() => {
  return new Promise((resolve) => {
    resolve({ json: async () => ({ message: "テスト用メッセージ", isSuccess: true }) });
  });
});
global.fetch = jest.fn().mockImplementation(mockedPostIssue);
const routerPush = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter() {
    {
      return {
        push: routerPush,
      };
    }
  },
}));

beforeEach(() => {
  render(
    <QueryClientProvider client={queryClient}>
      <Report />
    </QueryClientProvider>,
  );
});
afterEach(() => {
  (global.fetch as jest.Mock).mockClear();
  mockedPostIssue.mockClear();
});

describe("要素の表示", () => {
  test("ページタイトル", () => {
    expect(screen.getByText("不具合報告ページ")).toBeInTheDocument();
  });
  test("タイトル入力欄", () => {
    expect(screen.getByText("概要")).toBeInTheDocument();
    expect(screen.getByLabelText("概要 *")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("適当なタイトルを付けてください"));
  });
  test("内容入力欄", () => {
    expect(screen.getByText("不具合の内容"));
    expect(screen.getByLabelText("不具合の内容 *")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("要望などもこちらへどうぞ"));
  });
  test("ボタンの確認", () => {
    expect(screen.getByText("送信")).toBeInTheDocument();
    expect(screen.queryByText("戻る")).toBeNull();
  });
});

describe("報告フォームの動作確認", () => {
  test("概要および不具合の内容を入力しないまま送信ボタンをクリックしても、APIリクエストは送らない", async () => {
    const PostButton = screen.getByRole("button", { name: "送信" });
    await user.click(PostButton);

    expect(mockedPostIssue).not.toHaveBeenCalled();
    expect(screen.getByText("タイトルまたは不具合の内容が入力されていません"));
  });

  test("概要のみ入力した状態で送信ボタンをクリックしても、APIリクエストは送らない", async () => {
    const TitleForm = screen.getByLabelText("概要 *");
    const PostButton = screen.getByRole("button", { name: "送信" });
    await user.type(TitleForm, "タイトル");
    await user.click(PostButton);

    expect(mockedPostIssue).not.toHaveBeenCalled();
    expect(screen.getByText("タイトルまたは不具合の内容が入力されていません"));
  });

  test("不具合の内容のみ入力した状態で送信ボタンをクリックしても、APIリクエストは送らない", async () => {
    const BodyForm = screen.getByLabelText("不具合の内容 *");
    const PostButton = screen.getByRole("button", { name: "送信" });
    await user.type(BodyForm, "内容内容Contents");
    await user.click(PostButton);

    expect(mockedPostIssue).not.toHaveBeenCalled();
    expect(screen.getByText("タイトルまたは不具合の内容が入力されていません"));
  });

  test("概要および不具合の内容を入力した状態で送信ボタンをクリックすると、APIリクエストを送る", async () => {
    const TitleForm = screen.getByLabelText("概要 *");
    const BodyForm = screen.getByLabelText("不具合の内容 *");
    const PostButton = screen.getByRole("button", { name: "送信" });
    await user.type(TitleForm, "タイトル");
    await user.type(BodyForm, "Issue作成が成功した場合、戻るボタンが表示される");
    await user.click(PostButton);

    expect(mockedPostIssue).toHaveBeenCalledTimes(1);
    expect(screen.getByText("テスト用メッセージ")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "戻る" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "送信" })).toBeNull();
  });

  test("APIリクエストを送りIssue作成が失敗した時、戻るボタンは非表示のまま", async () => {
    mockedPostIssue.mockImplementation(() => {
      return new Promise((resolve) => {
        resolve({ json: async () => ({ message: "エラー発生。戻るボタンは非表示", isSuccess: false }) });
      });
    });

    const TitleForm = screen.getByLabelText("概要 *");
    const BodyForm = screen.getByLabelText("不具合の内容 *");
    const PostButton = screen.getByRole("button", { name: "送信" });
    await user.type(TitleForm, "APIリクエスト失敗テスト");
    await user.type(BodyForm, "失敗しているならば、戻るボタンを表示しない");
    await user.click(PostButton);

    expect(mockedPostIssue).toHaveBeenCalledTimes(1);
    expect(screen.getByText("エラー発生。戻るボタンは非表示")).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "戻る" })).toBeNull();
    expect(screen.getByRole("button", { name: "送信" })).toBeInTheDocument();
  });
});
