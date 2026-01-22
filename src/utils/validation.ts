/**
 * Validates the MIME type of a file.
 * Allowed types:
 * - Images: png, jpeg, webp
 * - Videos: mp4, webm, quicktime
 * @param file The file to validate.
 * @returns True if the file type is allowed, false otherwise.
 */
export const validateFileType = (file: File): boolean => {
  const allowedTypes = [
    "image/png",
    "image/jpeg",
    "image/webp",
    "video/mp4",
    "video/webm",
    "video/quicktime",
  ];

  return allowedTypes.includes(file.type);
};

/**
 * Validates the size of a file.
 * Limits:
 * - Images: 5MB
 * - Videos: 500MB
 * @param file The file to validate.
 * @returns True if the file size is within the allowed limit, false otherwise.
 */
export const validateFileSize = (file: File): boolean => {
  const imageTypes = ["image/png", "image/jpeg", "image/webp"];
  const videoTypes = ["video/mp4", "video/webm", "video/quicktime"];

  const KB = 1024;
  const MB = 1024 * KB;

  if (imageTypes.includes(file.type)) {
    return file.size <= 5 * MB;
  }

  if (videoTypes.includes(file.type)) {
    return file.size <= 500 * MB;
  }

  return false;
};
