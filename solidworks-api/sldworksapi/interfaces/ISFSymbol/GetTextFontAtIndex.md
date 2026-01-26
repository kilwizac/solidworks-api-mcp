---
type: method
interface: ISFSymbol
member: GetTextFontAtIndex
returns: System.String
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
  - ISFSymbol.GetTextHeightAtIndex
  - ISFSymbol.GetTextInvertAtIndex
  - ISFSymbol.GetTextPositionAtIndex
  - ISFSymbol.GetTextRefPositionAtIndex
  - ISFSymbol.IGetTextPositionAtIndex
  - ISFSymbol.SetText
keywords:
  - gettextfontatindex
  - isfsymbol
  - isf
  - symbol
  - text
  - font
  - index
  - int32
  - string
---

# ISFSymbol.GetTextFontAtIndex

Gets the font used by the specified text item in this surface finish symbol.

## Signature

```csharp
System.String GetTextFontAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the text where the index begins at 0

## Return Value

Font name used by this surface finish symbol

## Remarks

Call
ISFSymbol::GetTextCount
before calling this method to get the number of text items.

## See Also

- `ISFSymbol.GetText`
- `ISFSymbol.GetTextAngleAtIndex`
- `ISFSymbol.GetTextAtIndex`
- `ISFSymbol.GetTextHeightAtIndex`
- `ISFSymbol.GetTextInvertAtIndex`
- `ISFSymbol.GetTextPositionAtIndex`
- `ISFSymbol.GetTextRefPositionAtIndex`
- `ISFSymbol.IGetTextPositionAtIndex`
- `ISFSymbol.SetText`