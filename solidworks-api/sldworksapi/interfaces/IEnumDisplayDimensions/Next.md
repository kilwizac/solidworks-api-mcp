---
type: method
interface: IEnumDisplayDimensions
member: Next
returns: void
parameters:
  -
    name: Celt
    type: System.Int32
    description: Number of display dimensions for the display dimension enumeration
  -
    name: Rgelt
    type: DisplayDimension
    description: Pointer to an array of display dimensions in of size Celt
  -
    name: PceltFetched
    type: System.Int32
    description: Pointer to the number of display dimensions from the list; this value can be less than Celt if you ask for more display dimensions than exist, or it can be NULL if no more display dimensions exist
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - dimensions
related: []
keywords:
  - next
  - ienumdisplaydimensions
  - display
  - dimensions
  - celt
  - int32
  - rgelt
  - dimension
  - pcelt
  - fetched
  - void
---

# IEnumDisplayDimensions.Next

Gets the next display dimension in the display dimensions enumeration.

## Signature

```csharp
void Next( 
   System.Int32
Celt
,
   out DisplayDimension
Rgelt
,
   out System.Int32
PceltFetched
)
```
## Parameters

- `Celt` (System.Int32): Number of display dimensions for the display dimension enumeration
- `Rgelt` (DisplayDimension): Pointer to an array of display dimensions in of size Celt
- `PceltFetched` (System.Int32): Pointer to the number of display dimensions from the list; this value can be less than Celt if you ask for more display dimensions than exist, or it can be NULL if no more display dimensions exist

## Return Value

Unknown.

## Remarks

For use in in-process DLLs only.