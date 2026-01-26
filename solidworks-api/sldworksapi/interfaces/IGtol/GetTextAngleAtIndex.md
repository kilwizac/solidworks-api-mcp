---
type: method
interface: IGtol
member: GetTextAngleAtIndex
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index of the piece of text
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetTextAtIndex
  - IGtol.GetTextCount
  - IGtol.GetTextFont
  - IGtol.GetTextHeightAtIndex
  - IGtol.GetTextInvertAtIndex
  - IGtol.GetTextPoint
  - IGtol.GetTextPositionAtIndex
  - IGtol.IGetTextPoint
  - IGtol.IGetTextPositionAtIndex
keywords:
  - text
  - geometric
  - tolerancing
  - gettextangleatindex
  - igtol
  - gtol
  - angle
  - index
  - int32
  - double
---

# IGtol.GetTextAngleAtIndex

Gets the text angle for the specified piece of text in this GTol.

## Signature

```csharp
System.Double GetTextAngleAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): 0-based index of the piece of text

## Return Value

Text angle for the specified piece of text in radians, measured CCW from the X axis

## See Also

- `IGtol.GetTextAtIndex`
- `IGtol.GetTextCount`
- `IGtol.GetTextFont`
- `IGtol.GetTextHeightAtIndex`
- `IGtol.GetTextInvertAtIndex`
- `IGtol.GetTextPoint`
- `IGtol.GetTextPositionAtIndex`
- `IGtol.IGetTextPoint`
- `IGtol.IGetTextPositionAtIndex`