# useSingletonState

![GitHub](https://img.shields.io/github/license/AndrewLawendy/use-singleton-state)
![GitHub package.json version](https://img.shields.io/github/package-json/v/AndrewLawendy/use-singleton-state)
![npm](https://img.shields.io/npm/dw/use-react-singleton-state)
![GitHub file size in bytes](https://img.shields.io/github/size/AndrewLawendy/use-singleton-state/src/index.ts)

[![NPM](https://nodei.co/npm/use-react-singleton-state.png?downloads=true)](https://nodei.co/npm/use-react-singleton-state/)

Provide a context-like API to listen and update values across multiple uses of the custom hook

## Motivation

I needed to create a custom hook that shared one source of truth, or at least I could trust that all instances synced.

For a minor task, I didn't want to store the value on the app context, nor did I want to create a state on a parent for a hook to use.

I did a lookup on the internet, and I wasn't comfortable with the alternatives, where other libraries have trouble exposing the setter as easily as a regular `useState` hook would do, and this is when I thought of this approach!

## How it works

It's based on an [Observer](https://www.patterns.dev/posts/observer-pattern) design pattern singleton to sync up values between different instances of the same hook while sharing the same key signature.

## Usage

```typescript
import useSingletonState from 'use-react-singleton-state';

const useCounter = (defaultValue: number) => {
  const [counter, setCounter] = useSingletonState(
    'my-custom-hook',
    defaultValue
  );
};

export default useCounter;
```

## Demo

In this GIF, it is evident that both counters are not connected to the same parent, but they are flawlessly synchronized with the same value.

![singleton-state](https://github.com/AndrewLawendy/use-singleton-state/assets/22712035/ae313a1c-6d94-4404-8d22-a33f431763e4)


This is the page structure that you can use to make a comparison with the React Dev Tool shown in the GIF.

![structure](https://github.com/AndrewLawendy/use-singleton-state/assets/22712035/20f1a7c7-b4f2-4af6-9fc6-3b7d8803c3e6)
