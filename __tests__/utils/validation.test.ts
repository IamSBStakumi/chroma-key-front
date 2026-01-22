import { validateFileType, validateFileSize } from "../../src/utils/validation";

describe("Validation Logic", () => {
  // --- File Type Validation ---
  describe("validateFileType", () => {
    it.each([
      ["image/png"],
      ["image/jpeg"],
      ["image/webp"],
      ["video/mp4"],
      ["video/webm"],
      ["video/quicktime"],
    ])("should return true for allowed MIME type: %s", (mimeType) => {
      const file = new File(["dummy"], "test.file", { type: mimeType });
      expect(validateFileType(file)).toBe(true);
    });

    it.each([["text/plain"], ["application/pdf"], ["application/json"], [""]])(
      "should return false for disallowed MIME type: %s",
      (mimeType) => {
        const file = new File(["dummy"], "test.file", { type: mimeType });
        expect(validateFileType(file)).toBe(false);
      }
    );
  });

  // --- File Size Validation ---
  describe("validateFileSize", () => {
    // 1MB = 1048576 bytes
    // Image limit: 5MB
    // Video limit: 500MB

    const createLargeFile = (size: number, type: string) => {
      // Mocking the size property since we can't easily create large blobs in JSDOM memory
      return { size, type } as File;
    };

    it("should return true for image within size limit (5MB)", () => {
      const file = createLargeFile(5 * 1024 * 1024, "image/jpeg");
      expect(validateFileSize(file)).toBe(true);
    });

    it("should return false for image exceeding size limit (5MB + 1 byte)", () => {
      const file = createLargeFile(5 * 1024 * 1024 + 1, "image/jpeg");
      expect(validateFileSize(file)).toBe(false);
    });

    it("should return true for video within size limit (500MB)", () => {
      const file = createLargeFile(500 * 1024 * 1024, "video/mp4");
      expect(validateFileSize(file)).toBe(true);
    });

    it("should return false for video exceeding size limit (500MB + 1 byte)", () => {
      const file = createLargeFile(500 * 1024 * 1024 + 1, "video/mp4");
      expect(validateFileSize(file)).toBe(false);
    });
  });
});
