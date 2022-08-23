# React Remove Green Background

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save remove-green-background
```

![](public/taste.gif)

## Usage

```jsx
import { TransparentCanvas } from 'react-remove-green-background'

export const Component = () => {
  <TransparentCanvas
    rColor={150}
    gColor={130}
    autoPlay={true}
    videoSrc='video_path.mp4'
    loop={true}
  />
}
```

### # videoSrc = The path of the video you want to use
### # autoPlay = Auto play feature, gets true or false 
### # rColor =  Red color 
### # gColor =  Green color 
### # bColor =  Blue color 
### # originalVideo = Show original video, gets true or false



## License

MIT © [serkancagman](https://github.com/serkancagman)
