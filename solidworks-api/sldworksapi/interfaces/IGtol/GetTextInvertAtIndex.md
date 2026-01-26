---
type: method
interface: IGtol
member: GetTextInvertAtIndex
returns: System.Int32
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
  - IGtol.GetTextAngleAtIndex
  - IGtol.GetTextAtIndex
  - IGtol.GetTextCount
  - IGtol.GetTextFont
  - IGtol.GetTextHeightAtIndex
  - IGtol.GetTextPoint
  - IGtol.GetTextPositionAtIndex
  - IGtol.GetTextRefPositionAtIndex
  - IGtol.IGetTextPoint
  - IGtol.IGetTextPositionAtIndex
keywords:
  - text
  - geometric
  - tolerancing
  - gettextinvertatindex
  - igtol
  - gtol
  - invert
  - index
  - int32
---

# IGtol.GetTextInvertAtIndex

Gets the specified text item's invert flag.

## Signature

```csharp
System.Int32 GetTextInvertAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): 0-based index of the piece of text

## Return Value

Invert flag for the specified text item

## Remarks

The invert flag specifies whether the text has been mirrored (reflected) about the X axis. Reflection is applied after text rotation.

## See Also

- `IGtol.GetTextAngleAtIndex`
- `IGtol.GetTextAtIndex`
- `IGtol.GetTextCount`
- `IGtol.GetTextFont`
- `IGtol.GetTextHeightAtIndex`
- `IGtol.GetTextPoint`
- `IGtol.GetTextPositionAtIndex`
- `IGtol.GetTextRefPositionAtIndex`
- `IGtol.IGetTextPoint`
- `IGtol.IGetTextPositionAtIndex`