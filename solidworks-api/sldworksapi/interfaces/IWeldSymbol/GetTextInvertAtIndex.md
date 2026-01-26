---
type: method
interface: IWeldSymbol
member: GetTextInvertAtIndex
returns: System.Int32
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
  - IWeldSymbol.GetTextAngleAtIndex
  - IWeldSymbol.GetTextAtIndex
  - IWeldSymbol.GetTextCount
  - IWeldSymbol.GetTextHeightAtIndex
  - IWeldSymbol.GetTextPositionAtIndex
  - IWeldSymbol.GetTextRefPositionAtIndex
  - IWeldSymbol.IGetTextPositionAtIndex
  - IWeldSymbol.SetText
keywords:
  - gettextinvertatindex
  - iweldsymbol
  - weld
  - symbol
  - text
  - invert
  - index
  - int32
---

# IWeldSymbol.GetTextInvertAtIndex

Gets whether the text has been mirrored (reflected) about the X axis; any reflection is applied after text rotation.

## Signature

```csharp
System.Int32 GetTextInvertAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the piece of text where the index begins at 0

## Return Value

Text item's invert flag

## See Also

- `IWeldSymbol.GetText`
- `IWeldSymbol.GetTextAngleAtIndex`
- `IWeldSymbol.GetTextAtIndex`
- `IWeldSymbol.GetTextCount`
- `IWeldSymbol.GetTextHeightAtIndex`
- `IWeldSymbol.GetTextPositionAtIndex`
- `IWeldSymbol.GetTextRefPositionAtIndex`
- `IWeldSymbol.IGetTextPositionAtIndex`
- `IWeldSymbol.SetText`