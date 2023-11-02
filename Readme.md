# SizedBox for React

`SizedBox` is a React component that provides a simple way to add spacing to your layout. It creates an empty `<div>` with specified `width` and/or `height`, supporting both standard number input (interpreted as pixels) and string values for various CSS units.

## Features

- Easy to use: Just add `<SizedBox />` with the desired dimensions.
- Flexible: Accepts dimensions as numbers (pixels) or strings (any CSS unit).
- Minimalistic: No dependencies, just a small, focused component.

## Installation

Install `SizedBox` using npm:

```bash
npm install react-sizedbox --save
```

Or with yarn:

```bash
yarn add react-sizedbox
```

Usage
After installation, you can use SizedBox in your React components to add fixed space either vertically, horizontally, or both.

Import SizedBox:

```tsx
import SizedBox from 'react-sizedbox';
```
Then, you can use it in your JSX like this:

```tsx
<SizedBox vertical={20} />       // 20px of vertical space
<SizedBox horizontal="2em" />    // 2em of horizontal space
<SizedBox vertical="5vh" horizontal={50} /> // 5vh of vertical and 50px of horizontal space
```
Props
SizedBox accepts the following props:

- vertical?: number | string - The height of the spacer element. If a number is provided, it is assumed to be in pixels.
- horizontal?: number | string - The width of the spacer element. If a number is provided, it is assumed to be in pixels.
At least one of the props must be provided for SizedBox to function correctly.
