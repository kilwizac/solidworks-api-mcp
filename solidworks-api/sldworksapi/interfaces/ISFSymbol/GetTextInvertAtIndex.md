---
type: method
interface: ISFSymbol
member: GetTextInvertAtIndex
returns: System.Int32
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
  - ISFSymbol.GetTextHeightAtIndex
  - ISFSymbol.GetTextPositionAtIndex
  - ISFSymbol.GetTextRefPositionAtIndex
  - ISFSymbol.IGetTextPositionAtIndex
  - ISFSymbol.SetText
keywords:
  - gettextinvertatindex
  - isfsymbol
  - isf
  - symbol
  - text
  - invert
  - index
  - int32
---

# ISFSymbol.GetTextInvertAtIndex

Gets the specified text item's invert flag.

## Signature

```csharp
System.Int32 GetTextInvertAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the text where the index begins at 0

## Return Value

Text item's invert flag

## Remarks

The invert flag specifies whether the text has been mirrored (reflected) about the X axis. Any reflection is applied after text rotation.
Call
ISFSymbol::GetTextCount
before calling this method to get the number of text items.

## See Also

- `ISFSymbol.GetText`
- `ISFSymbol.GetTextAngleAtIndex`
- `ISFSymbol.GetTextAtIndex`
- `ISFSymbol.GetTextFontAtIndex`
- `ISFSymbol.GetTextHeightAtIndex`
- `ISFSymbol.GetTextPositionAtIndex`
- `ISFSymbol.GetTextRefPositionAtIndex`
- `ISFSymbol.IGetTextPositionAtIndex`
- `ISFSymbol.SetText`