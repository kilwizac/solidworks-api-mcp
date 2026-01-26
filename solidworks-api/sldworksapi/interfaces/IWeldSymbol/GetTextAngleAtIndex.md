---
type: method
interface: IWeldSymbol
member: GetTextAngleAtIndex
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the piece of text where the index begins at 0
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IWeldSymbol.GetText
  - IWeldSymbol.GetTextAtIndex
  - IWeldSymbol.GetTextCount
  - IWeldSymbol.GetTextHeightAtIndex
  - IWeldSymbol.GetTextInvertAtIndex
  - IWeldSymbol.GetTextPositionAtIndex
  - IWeldSymbol.GetTextRefPositionAtIndex
  - IWeldSymbol.IGetTextPositionAtIndex
  - IWeldSymbol.SetText
keywords:
  - gettextangleatindex
  - iweldsymbol
  - weld
  - symbol
  - text
  - angle
  - index
  - int32
  - double
---

# IWeldSymbol.GetTextAngleAtIndex

Gets the text angle for the specified piece of text in this weld symbol.

## Signature

```csharp
System.Double GetTextAngleAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the piece of text where the index begins at 0

## Return Value

Text angle for the specified piece of text in radians; the angle is measured CCW from the X axis

## See Also

- `IWeldSymbol.GetText`
- `IWeldSymbol.GetTextAtIndex`
- `IWeldSymbol.GetTextCount`
- `IWeldSymbol.GetTextHeightAtIndex`
- `IWeldSymbol.GetTextInvertAtIndex`
- `IWeldSymbol.GetTextPositionAtIndex`
- `IWeldSymbol.GetTextRefPositionAtIndex`
- `IWeldSymbol.IGetTextPositionAtIndex`
- `IWeldSymbol.SetText`