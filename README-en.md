# Chroma_key_Front

[日本語](README.en.md)

## URL for this Service

## About

This application allows you to composite an image that serves as a background to a video.
By using this application, you can easily composite videos on a website.
To use it, simply upload the video you shot in green background and the image you want to use as a background.

This application is intended for use by people who want to post short videos on video sharing websites, but do not have the equipment, such as a computer or paid editing software, to composite the background.
Of course, those who do not fall into the above categories are also free to use this service.

Since I do not use a database, I do not store the videos or images used for compositing.

Currently, only videos using green background are supported, but I am considering expanding the functionality in the future.

### Confirmed to Work

#### Video File

- mp4 file
  - Video taken on a green background of about 1 minute.

### Image File

- png file
- jpeg file

## Tech Stack

### Frontend

![Next.js Badge](https://img.shields.io/badge/Next%2Ejs-000?logo=nextdotjs&logoColor=fff&style=plastic)

![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=plastic)

![styled-components Badge](https://img.shields.io/badge/styled--components-DB7093?logo=styledcomponents&logoColor=fff&style=plastic)

### Backend

![Python Badge](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=fff&style=plastic)

![FastAPI Badge](https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=fff&style=plastic)

![OpenCV Badge](https://img.shields.io/badge/OpenCV-5C3EE8?logo=opencv&logoColor=fff&style=plastic)

![NumPy Badge](https://img.shields.io/badge/NumPy-013243?logo=numpy&logoColor=fff&style=plastic)

### Test

![Jest Badge](https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=fff&style=plastic)

![Testing Library Badge](https://img.shields.io/badge/Testing%20Library-E33332?logo=testinglibrary&logoColor=fff&style=plastic)

### Environment

#### Commonness

![Docker Badge](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff&style=plastic)

#### Backend Only

![Poetry Badge](https://img.shields.io/badge/Poetry-60A5FA?logo=poetry&logoColor=fff&style=plastic)

## Infrastructure

![Google Cloud Badge](https://img.shields.io/badge/Cloud%20Run-4285F4?logo=googlecloud&logoColor=fff&style=plastic)

### linter/formatter

![ESLint Badge](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=fff&style=plastic)

![Prettier Badge](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=fff&style=plastic)

![pre-commit Badge](https://img.shields.io/badge/pre--commit-FAB040?logo=precommit&logoColor=fff&style=plastic)

![husky](https://img.shields.io/badge/husky-222222.svg?logo=husky&style=plastic)

![lint-staged](https://img.shields.io/badge/lint--staged-222222.svg?logo=lint-staged&style=plastic)

## Screen Shots

Video composition can be performed from the following screen.

![Movie Composer Page](/Stuff/Compositor.png)

You can submit problems and requests from the following screen.

![Report Form Page](/Stuff/ReportForm.png)
