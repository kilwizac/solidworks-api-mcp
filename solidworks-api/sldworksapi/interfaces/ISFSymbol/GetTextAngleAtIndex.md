---
type: method
interface: ISFSymbol
member: GetTextAngleAtIndex
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
  - ISFSymbol.GetTextAtIndex
  - ISFSymbol.GetTextFontAtIndex
  - ISFSymbol.GetTextHeightAtIndex
  - ISFSymbol.GetTextInvertAtIndex
  - ISFSymbol.GetTextPositionAtIndex
  - ISFSymbol.GetTextRefPositionAtIndex
  - ISFSymbol.IGetTextPositionAtIndex
  - ISFSymbol.SetText
keywords:
  - gettextangleatindex
  - isfsymbol
  - isf
  - symbol
  - text
  - angle
  - index
  - int32
  - double
---

# ISFSymbol.GetTextAngleAtIndex

Gets the text angle for the specified text in this surface finish symbol.

## Signature

```csharp
System.Double GetTextAngleAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the text where the index begins at 0

## Return Value

Text angle for the text in radians; the angle is measured CCW from the X axis

## Remarks

Call
ISFSymbol::GetTextCount
before calling this method to get the number of text items.

## See Also

- `ISFSymbol.GetText`
- `ISFSymbol.GetTextAtIndex`
- `ISFSymbol.GetTextFontAtIndex`
- `ISFSymbol.GetTextHeightAtIndex`
- `ISFSymbol.GetTextInvertAtIndex`
- `ISFSymbol.GetTextPositionAtIndex`
- `ISFSymbol.GetTextRefPositionAtIndex`
- `ISFSymbol.IGetTextPositionAtIndex`
- `ISFSymbol.SetText`