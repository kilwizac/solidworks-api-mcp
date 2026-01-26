---
type: method
interface: IGtol
member: GetBetweenTwoPoints
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetBetweenTwoPointsText
  - IGtol.SetBetweenTwoPoints
keywords:
  - getbetweentwopoints
  - igtol
  - gtol
  - between
  - two
  - points
  - boolean
---

# IGtol.GetBetweenTwoPoints

Gets whether the between two points symbol is being used.

## Signature

```csharp
System.Boolean GetBetweenTwoPoints()
```
## Parameters

None.

## Return Value

True if using the between two points symbol, false if not

## Remarks

Use
IGtol::GetBetweenTwoPointsText
to get the text that is used with this symbol.
IGtol::SetBetweenTwoPoints
to enable this symbol and its texts.

## See Also

- `IGtol.GetBetweenTwoPointsText`
- `IGtol.SetBetweenTwoPoints`