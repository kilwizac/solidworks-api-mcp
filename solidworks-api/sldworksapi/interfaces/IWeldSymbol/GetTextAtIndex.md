---
type: method
interface: IWeldSymbol
member: GetTextAtIndex
returns: System.String
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
  - IWeldSymbol.GetTextCount
  - IWeldSymbol.GetTextHeightAtIndex
  - IWeldSymbol.GetTextInvertAtIndex
  - IWeldSymbol.GetTextPositionAtIndex
  - IWeldSymbol.GetTextRefPositionAtIndex
  - IWeldSymbol.IGetTextPositionAtIndex
  - IWeldSymbol.SetText
keywords:
  - gettextatindex
  - iweldsymbol
  - weld
  - symbol
  - text
  - index
  - int32
  - string
---

# IWeldSymbol.GetTextAtIndex

Gets the specified text from this weld symbol.

## Signature

```csharp
System.String GetTextAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the piece of text where the index begins at 0

## Return Value

Text

## See Also

- `IWeldSymbol.GetText`
- `IWeldSymbol.GetTextAngleAtIndex`
- `IWeldSymbol.GetTextCount`
- `IWeldSymbol.GetTextHeightAtIndex`
- `IWeldSymbol.GetTextInvertAtIndex`
- `IWeldSymbol.GetTextPositionAtIndex`
- `IWeldSymbol.GetTextRefPositionAtIndex`
- `IWeldSymbol.IGetTextPositionAtIndex`
- `IWeldSymbol.SetText`