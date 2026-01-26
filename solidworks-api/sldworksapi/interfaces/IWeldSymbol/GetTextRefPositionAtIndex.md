---
type: method
interface: IWeldSymbol
member: GetTextRefPositionAtIndex
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
  - IWeldSymbol.GetTextInvertAtIndex
  - IWeldSymbol.GetTextPositionAtIndex
  - IWeldSymbol.IGetTextPositionAtIndex
  - IWeldSymbol.SetText
keywords:
  - gettextrefpositionatindex
  - iweldsymbol
  - weld
  - symbol
  - text
  - ref
  - position
  - index
  - int32
---

# IWeldSymbol.GetTextRefPositionAtIndex

Gets the specified text's reference position in this weld symbol (that is, upper left, lower left, center).

## Signature

```csharp
System.Int32 GetTextRefPositionAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the piece of text where the index begins at 0

## Return Value

Reference position of the specified text item as defined in swTextPosition_e

## See Also

- `IWeldSymbol.GetText`
- `IWeldSymbol.GetTextAngleAtIndex`
- `IWeldSymbol.GetTextAtIndex`
- `IWeldSymbol.GetTextCount`
- `IWeldSymbol.GetTextHeightAtIndex`
- `IWeldSymbol.GetTextInvertAtIndex`
- `IWeldSymbol.GetTextPositionAtIndex`
- `IWeldSymbol.IGetTextPositionAtIndex`
- `IWeldSymbol.SetText`