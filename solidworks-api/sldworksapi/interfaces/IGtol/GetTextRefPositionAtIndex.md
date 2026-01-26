---
type: method
interface: IGtol
member: GetTextRefPositionAtIndex
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
  - IGtol.GetTextInvertAtIndex
  - IGtol.GetTextPoint
  - IGtol.GetTextPositionAtIndex
  - IGtol.IGetTextPoint
  - IGtol.IGetTextPositionAtIndex
keywords:
  - gettextrefpositionatindex
  - igtol
  - gtol
  - text
  - ref
  - position
  - index
  - int32
---

# IGtol.GetTextRefPositionAtIndex

Gets the reference position for the specified text item in this GTol (for example, upper-left, lower-left, center).

## Signature

```csharp
System.Int32 GetTextRefPositionAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): 0-based index of the piece of text

## Return Value

Reference position of the specified text item as defined in swTextPosition_e

## See Also

- `IGtol.GetTextAngleAtIndex`
- `IGtol.GetTextAtIndex`
- `IGtol.GetTextCount`
- `IGtol.GetTextFont`
- `IGtol.GetTextHeightAtIndex`
- `IGtol.GetTextInvertAtIndex`
- `IGtol.GetTextPoint`
- `IGtol.GetTextPositionAtIndex`
- `IGtol.IGetTextPoint`
- `IGtol.IGetTextPositionAtIndex`