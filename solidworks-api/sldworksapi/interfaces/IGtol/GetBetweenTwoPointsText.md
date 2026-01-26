---
type: method
interface: IGtol
member: GetBetweenTwoPointsText
returns: System.String
parameters:
  -
    name: Index
    type: System.Int32
    description: 0 for the text on the left end of the symbol, 1 for the text on the right end of the symbol
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetBetweenTwoPoints
  - IGtol.SetBetweenTwoPoints
keywords:
  - getbetweentwopointstext
  - igtol
  - gtol
  - between
  - two
  - points
  - text
  - index
  - int32
  - string
---

# IGtol.GetBetweenTwoPointsText

Gets the text used in the between two points symbol.

## Signature

```csharp
System.String GetBetweenTwoPointsText( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): 0 for the text on the left end of the symbol, 1 for the text on the right end of the symbol

## Return Value

Symbol text

## Remarks

This method returns the requested text whether the between two points symbol is currently enabled. Use
IGtol::GetBetweenTwoPoints
to determine if this symbol is enabled.
Use
IGtol::SetBetweenTwoPoints
to enable this symbol and its texts.

## See Also

- `IGtol.GetBetweenTwoPoints`
- `IGtol.SetBetweenTwoPoints`