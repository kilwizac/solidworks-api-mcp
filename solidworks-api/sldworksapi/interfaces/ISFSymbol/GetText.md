---
type: method
interface: ISFSymbol
member: GetText
returns: System.String
parameters:
  -
    name: WhichOne
    type: System.Int32
    description: Text item to get as defined in swSurfaceFinishSymbolText_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ISFSymbol.GetTextAngleAtIndex
  - ISFSymbol.GetTextAtIndex
  - ISFSymbol.GetTextCount
  - ISFSymbol.GetTextFontAtIndex
  - ISFSymbol.GetTextHeightAtIndex
  - ISFSymbol.GetTextInvertAtIndex
  - ISFSymbol.GetTextPositionAtIndex
  - ISFSymbol.GetTextRefPositionAtIndex
  - ISFSymbol.IGetTextPositionAtIndex
keywords:
  - gettext
  - isfsymbol
  - isf
  - symbol
  - text
  - which
  - one
  - int32
  - string
---

# ISFSymbol.GetText

Gets the specified text string in this surface finish symbol.

## Signature

```csharp
System.String GetText( 
   System.Int32
WhichOne
)
```
## Parameters

- `WhichOne` (System.Int32): Text item to get as defined in swSurfaceFinishSymbolText_e

## Return Value

Text string

## Remarks

Call
ISFSymbol::GetTextCount
before calling this method to get the number of text items.
To set the text strings, use
ISFSymbol::SetText
.

## See Also

- `ISFSymbol.GetTextAngleAtIndex`
- `ISFSymbol.GetTextAtIndex`
- `ISFSymbol.GetTextCount`
- `ISFSymbol.GetTextFontAtIndex`
- `ISFSymbol.GetTextHeightAtIndex`
- `ISFSymbol.GetTextInvertAtIndex`
- `ISFSymbol.GetTextPositionAtIndex`
- `ISFSymbol.GetTextRefPositionAtIndex`
- `ISFSymbol.IGetTextPositionAtIndex`