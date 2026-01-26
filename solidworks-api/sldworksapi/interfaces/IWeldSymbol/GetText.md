---
type: method
interface: IWeldSymbol
member: GetText
returns: System.String
parameters:
  -
    name: WhichText
    type: System.Int32
    description: Text to retrieve as defined in swWeldSymbolTextTypes_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IWeldSymbol.GetTextAngleAtIndex
  - IWeldSymbol.GetTextAtIndex
  - IWeldSymbol.GetTextCount
  - IWeldSymbol.GetTextHeightAtIndex
  - IWeldSymbol.GetTextInvertAtIndex
  - IWeldSymbol.GetTextPositionAtIndex
  - IWeldSymbol.GetTextRefPositionAtIndex
  - IWeldSymbol.IGetTextPositionAtIndex
keywords:
  - gettext
  - iweldsymbol
  - weld
  - symbol
  - text
  - which
  - int32
  - string
---

# IWeldSymbol.GetText

Gets individual pieces of text from the weld symbol.

## Signature

```csharp
System.String GetText( 
   System.Int32
WhichText
)
```
## Parameters

- `WhichText` (System.Int32): Text to retrieve as defined in swWeldSymbolTextTypes_e

## Return Value

Text

## Remarks

To set the individual pieces of text for a weld symbol, use
IWeldSymbol::SetText
.

## See Also

- `IWeldSymbol.GetTextAngleAtIndex`
- `IWeldSymbol.GetTextAtIndex`
- `IWeldSymbol.GetTextCount`
- `IWeldSymbol.GetTextHeightAtIndex`
- `IWeldSymbol.GetTextInvertAtIndex`
- `IWeldSymbol.GetTextPositionAtIndex`
- `IWeldSymbol.GetTextRefPositionAtIndex`
- `IWeldSymbol.IGetTextPositionAtIndex`