---
type: method
interface: IWeldSymbol
member: GetTextHeightAtIndex
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the desired piece of text where the index begins at 0
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
  - IWeldSymbol.GetTextInvertAtIndex
  - IWeldSymbol.GetTextPositionAtIndex
  - IWeldSymbol.GetTextRefPositionAtIndex
  - IWeldSymbol.IGetTextPositionAtIndex
  - IWeldSymbol.SetText
keywords:
  - gettextheightatindex
  - iweldsymbol
  - weld
  - symbol
  - text
  - height
  - index
  - int32
  - double
---

# IWeldSymbol.GetTextHeightAtIndex

Gets the text height for the specified piece of text in this weld symbol.

## Signature

```csharp
System.Double GetTextHeightAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the desired piece of text where the index begins at 0

## Return Value

Text height for the specified piece of text in meters

## See Also

- `IWeldSymbol.GetText`
- `IWeldSymbol.GetTextAngleAtIndex`
- `IWeldSymbol.GetTextAtIndex`
- `IWeldSymbol.GetTextCount`
- `IWeldSymbol.GetTextInvertAtIndex`
- `IWeldSymbol.GetTextPositionAtIndex`
- `IWeldSymbol.GetTextRefPositionAtIndex`
- `IWeldSymbol.IGetTextPositionAtIndex`
- `IWeldSymbol.SetText`