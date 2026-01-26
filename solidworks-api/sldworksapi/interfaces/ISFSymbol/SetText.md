---
type: method
interface: ISFSymbol
member: SetText
returns: System.Boolean
parameters:
  -
    name: WhichOne
    type: System.Int32
    description: Text item to set as defined in swSurfaceFinishSymbolText_e
  -
    name: Text
    type: System.String
    description: Text string
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
  - settext
  - isfsymbol
  - isf
  - symbol
  - text
  - which
  - one
  - int32
  - string
  - boolean
---

# ISFSymbol.SetText

Sets a text string in this surface finish symbol.

## Signature

```csharp
System.Boolean SetText( 
   System.Int32
WhichOne
,
   System.String
Text
)
```
## Parameters

- `WhichOne` (System.Int32): Text item to set as defined in swSurfaceFinishSymbolText_e
- `Text` (System.String): Text string

## Return Value

True if the text string is successfully set, false if not

## Remarks

If an invalid text item is specified, the symbol is not changed, and false is returned.
To see the model or drawing changes caused by running this method, you must redraw your window. See
IModelDoc2::GraphicsRedraw2
for details.
To get the text strings, use
ISFSymbol::GetText
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