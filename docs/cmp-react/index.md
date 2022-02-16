---
title: Button
group:
  title: 常用
  order: 1
  path: /cmp-react
footer: false
---

```tsx
import React from 'react';
import { Button } from '@fdt/cmp-react';
export default () => (
  <div>
    <Button
      onClick={() => {
        console.log('this is click');
      }}
    >
      点击
    </Button>
  </div>
);
```

<API src="../../packages/cmp-react/src/Button/index.tsx"></API>
