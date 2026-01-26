---
type: method
interface: ISFSymbol
member: GetTextHeightAtIndex
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the text where the index begins at 0
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ISFSymbol.GetText
  - ISFSymbol.GetTextAngleAtIndex
  - ISFSymbol.GetTextAtIndex
  - ISFSymbol.GetTextFontAtIndex
  - ISFSymbol.GetTextInvertAtIndex
  - ISFSymbol.GetTextPositionAtIndex
  - ISFSymbol.GetTextRefPositionAtIndex
  - ISFSymbol.IGetTextPositionAtIndex
  - ISFSymbol.SetText
keywords:
  - gettextheightatindex
  - isfsymbol
  - isf
  - symbol
  - text
  - height
  - index
  - int32
  - double
---

# ISFSymbol.GetTextHeightAtIndex

Gets the text height for the specified piece of text in this surface finish symbol.

## Signature

```csharp
System.Double GetTextHeightAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the text where the index begins at 0

## Return Value

Text height for the specified piece of text in meters

## Remarks

Call
ISFSymbol::GetTextCount
before calling this method to get the number of text items.

## See Also

- `ISFSymbol.GetText`
- `ISFSymbol.GetTextAngleAtIndex`
- `ISFSymbol.GetTextAtIndex`
- `ISFSymbol.GetTextFontAtIndex`
- `ISFSymbol.GetTextInvertAtIndex`
- `ISFSymbol.GetTextPositionAtIndex`
- `ISFSymbol.GetTextRefPositionAtIndex`
- `ISFSymbol.IGetTextPositionAtIndex`
- `ISFSymbol.SetText`