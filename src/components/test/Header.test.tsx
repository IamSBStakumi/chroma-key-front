import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Header from "../Header";

const routerPush = jest.fn();
const mockedPathname = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: routerPush }),
  usePathname: () => mockedPathname(),
}));

afterEach(() => {
  jest.resetAllMocks();
});

describe("要素の表示", () => {
  beforeEach(() => {
    render(<Header />);
  });
  test("タイトル", () => {
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
  test("タブ", () => {
    expect(screen.getByRole("tab", { name: "動画合成" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "不具合の報告" })).toBeInTheDocument();
  });
});

describe("タブクリック時の処理", () => {
  test("現在のパスが'/'の時、動画合成タブをクリックしても何も起こらない", async () => {
    mockedPathname.mockImplementation(() => "/");
    render(<Header />);

    const toHome = screen.getByRole("tab", { name: "動画合成" });
    await user.click(toHome);

    expect(routerPush).not.toHaveBeenCalled();
  });
  test("現在のパスが'/'の時、不具合の報告タブをクリックすると画面遷移が起こる", async () => {
    mockedPathname.mockImplementation(() => "/");
    render(<Header />);

    const toReport = screen.getByRole("tab", { name: "不具合の報告" });
    await user.click(toReport);

    expect(routerPush).toHaveBeenCalledTimes(1);
    expect(routerPush).toHaveBeenCalledWith("/user_report_form");
  });
  test("現在のパスが'/user_report_form'の時、不具合の報告タブをクリックしても何も起こらない", async () => {
    mockedPathname.mockImplementation(() => "/user_report_form");
    render(<Header />);

    const toReport = screen.getByRole("tab", { name: "不具合の報告" });
    await user.click(toReport);

    expect(routerPush).not.toHaveBeenCalled();
  });
  test("現在のパスが'/user_report_form'の時、動画合成タブをクリックすると画面遷移が起こる", async () => {
    mockedPathname.mockImplementation(() => "/user_report_form");
    render(<Header />);

    const toHome = screen.getByRole("tab", { name: "動画合成" });
    await user.click(toHome);

    expect(routerPush).toHaveBeenCalledTimes(1);
    expect(routerPush).toHaveBeenCalledWith("/");
  });
});
