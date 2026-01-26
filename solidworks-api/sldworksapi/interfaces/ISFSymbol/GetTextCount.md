---
type: method
interface: ISFSymbol
member: GetTextCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - gettextcount
  - isfsymbol
  - isf
  - symbol
  - text
  - count
  - int32
---

# ISFSymbol.GetTextCount

Gets the number of text items in the surface finish symbol.

## Signature

```csharp
System.Int32 GetTextCount()
```
## Parameters

None.

## Return Value

Number of text items

## Remarks

Call this method before calling the following methods to get the number of text items in this surface finish symbol:
ISFSymbol::GetText
ISFSymbol::GetTextAngleAtIndex
ISFSymbol::GetTextFontAtIndex
ISFSymbol::GetTextHeightAtIndex
ISFSymbol::GetTextInvertAtIndex
ISFSymbol::GetTextPositionAtIndex
and
ISFSymbol::IGetTextPositionAtIndex
ISFSymbol::GetTextRefPositioinAtIndex