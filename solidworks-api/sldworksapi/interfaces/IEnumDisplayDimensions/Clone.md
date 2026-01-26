---
type: method
interface: IEnumDisplayDimensions
member: Clone
returns: void
parameters:
  -
    name: Ppenum
    type: EnumDisplayDimensions
    description: Pointer to the cloned display dimensions enumeration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - dimensions
related: []
keywords:
  - clone
  - ienumdisplaydimensions
  - display
  - dimensions
  - ppenum
  - void
---

# IEnumDisplayDimensions.Clone

Clones the display dimensions enumeration.

## Signature

```csharp
void Clone( 
   out EnumDisplayDimensions
Ppenum
)
```
## Parameters

- `Ppenum` (EnumDisplayDimensions): Pointer to the cloned display dimensions enumeration

## Return Value

Unknown.

## Remarks

For use in in-process DLLs only.