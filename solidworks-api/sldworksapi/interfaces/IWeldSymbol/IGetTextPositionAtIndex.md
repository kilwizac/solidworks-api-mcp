---
type: method
interface: IWeldSymbol
member: IGetTextPositionAtIndex
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
  - IWeldSymbol.GetTextAngleAtIndex
  - IWeldSymbol.GetTextAtIndex
  - IWeldSymbol.GetTextCount
  - IWeldSymbol.GetTextHeightAtIndex
  - IWeldSymbol.GetTextInvertAtIndex
  - IWeldSymbol.GetTextPositionAtIndex
  - IWeldSymbol.GetTextRefPositionAtIndex
keywords:
  - igettextpositionatindex
  - iweldsymbol
  - weld
  - symbol
  - text
  - position
  - index
  - int32
  - double
---

# IWeldSymbol.IGetTextPositionAtIndex

Gets the text item's offset relative to note's text point.

## Signature

```csharp
System.Double IGetTextPositionAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the piece of text where the index begins at 0

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The return value is the following array of doubles:
[
textPtX, textPtY, textPtZ
]
where these text position values are offset values from the origin of this weld symbol.

## See Also

- `IWeldSymbol.GetText`
- `IWeldSymbol.GetTextAngleAtIndex`
- `IWeldSymbol.GetTextAtIndex`
- `IWeldSymbol.GetTextCount`
- `IWeldSymbol.GetTextHeightAtIndex`
- `IWeldSymbol.GetTextInvertAtIndex`
- `IWeldSymbol.GetTextPositionAtIndex`
- `IWeldSymbol.GetTextRefPositionAtIndex`