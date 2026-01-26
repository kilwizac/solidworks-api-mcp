---
type: method
interface: ISFSymbol
member: IGetTextPositionAtIndex
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
  - ISFSymbol.GetTextHeightAtIndex
  - ISFSymbol.GetTextInvertAtIndex
  - ISFSymbol.GetTextPositionAtIndex
  - ISFSymbol.GetTextRefPositionAtIndex
  - ISFSymbol.SetText
keywords:
  - igettextpositionatindex
  - isfsymbol
  - isf
  - symbol
  - text
  - position
  - index
  - int32
  - double
---

# ISFSymbol.IGetTextPositionAtIndex

Gets the text item's offset relative to note's text point.

## Signature

```csharp
System.Double IGetTextPositionAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the text where the index begins at 0

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

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
Call
ISFSymbol::GetTextCount
before calling this method to get the number of text items.

## See Also

- `ISFSymbol.GetText`
- `ISFSymbol.GetTextAngleAtIndex`
- `ISFSymbol.GetTextAtIndex`
- `ISFSymbol.GetTextFontAtIndex`
- `ISFSymbol.GetTextHeightAtIndex`
- `ISFSymbol.GetTextInvertAtIndex`
- `ISFSymbol.GetTextPositionAtIndex`
- `ISFSymbol.GetTextRefPositionAtIndex`
- `ISFSymbol.SetText`