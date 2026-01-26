---
type: method
interface: ISFSymbol
member: GetTextPositionAtIndex
returns: System.Object
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
  - ISFSymbol.GetTextInvertAtIndex
  - ISFSymbol.GetTextRefPositionAtIndex
  - ISFSymbol.IGetTextPositionAtIndex
  - ISFSymbol.SetText
keywords:
  - gettextpositionatindex
  - isfsymbol
  - isf
  - symbol
  - text
  - position
  - index
  - int32
  - object
---

# ISFSymbol.GetTextPositionAtIndex

Gets the text item's offset relative to note's text point.

## Signature

```csharp
System.Object GetTextPositionAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the text where the index begins at 0

## Return Value

Array of doubles (see Remarks )

## Remarks

Call
ISFSymbol::GetTextCount
before calling this method to get the number of text items.
The return value is the following array of doubles :
[
textPtX, textPtY, textPtZ
]
where these text position values are offset values from the origin of this
ISFSymbol
object.

## See Also

- `ISFSymbol.GetText`
- `ISFSymbol.GetTextAngleAtIndex`
- `ISFSymbol.GetTextAtIndex`
- `ISFSymbol.GetTextFontAtIndex`
- `ISFSymbol.GetTextHeightAtIndex`
- `ISFSymbol.GetTextInvertAtIndex`
- `ISFSymbol.GetTextRefPositionAtIndex`
- `ISFSymbol.IGetTextPositionAtIndex`
- `ISFSymbol.SetText`