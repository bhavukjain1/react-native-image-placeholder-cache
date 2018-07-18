# react-native-image-placeholder-cache

A complete Image component replacer with local image placeholder and cache support for React Native apps. This only works with Expo apps.

## Installation

```
npm install react-native-image-placeholder-cache --save
```

## Usage

```
import Image from 'react-native-image-placeholder-cache'

...

<Image placeholder={require('./placeholder.png')} source={{uri:'https://example.com/image.png'}}/>
```

`placeholder` must be a local image. All other `props` are same as the default Image component props.

This uses a modified version of `CacheManager`. The original version is written by [William Candillon](https://github.com/wcandillon).
