---
type: method
interface: IGtol
member: GetTextHeightAtIndex
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
  - IGtol.GetTextAngleAtIndex
  - IGtol.GetTextAtIndex
  - IGtol.GetTextCount
  - IGtol.GetTextFont
  - IGtol.GetTextInvertAtIndex
  - IGtol.GetTextPoint
  - IGtol.GetTextPositionAtIndex
  - IGtol.GetTextRefPositionAtIndex
  - IGtol.IGetTextPoint
  - IGtol.IGetTextPositionAtIndex
keywords:
  - text
  - geometric
  - tolerancing
  - gettextheightatindex
  - igtol
  - gtol
  - height
  - index
  - int32
  - double
---

# IGtol.GetTextHeightAtIndex

Gets the text height for the specified piece of text in this GTol.

## Signature

```csharp
System.Double GetTextHeightAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): 0-based index of the piece of text

## Return Value

Text height for the specified piece of text in meters

## See Also

- `IGtol.GetTextAngleAtIndex`
- `IGtol.GetTextAtIndex`
- `IGtol.GetTextCount`
- `IGtol.GetTextFont`
- `IGtol.GetTextInvertAtIndex`
- `IGtol.GetTextPoint`
- `IGtol.GetTextPositionAtIndex`
- `IGtol.GetTextRefPositionAtIndex`
- `IGtol.IGetTextPoint`
- `IGtol.IGetTextPositionAtIndex`