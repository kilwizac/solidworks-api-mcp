---
type: method
interface: IGtol
member: GetSymDesc
returns: System.String
parameters:
  -
    name: SymIdx
    type: System.Int16
    description: Indexed position of the symbol
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetSymArcs
  - IGtol.GetSymCircles
  - IGtol.GetSymEdgeCounts
  - IGtol.GetSymLines
  - IGtol.GetSymName
  - IGtol.GetSymText
  - IGtol.GetSymTextPoints
  - IGtol.IGetSymArcs
  - IGtol.IGetSymCircles
  - IGtol.IGetSymEdgeCounts
  - IGtol.IGetSymLines
  - IGtol.IGetTextPoint
  - IGtol.IGetTextPositionAtIndex
keywords:
  - symbols
  - geometric
  - tolerancing
  - getsymdesc
  - igtol
  - gtol
  - sym
  - desc
  - idx
  - int16
  - string
---

# IGtol.GetSymDesc

Gets the specified symbol description.

## Signature

```csharp
System.String GetSymDesc( 
   System.Int16
SymIdx
)
```
## Parameters

- `SymIdx` (System.Int16): Indexed position of the symbol

## Return Value

Symbol description

## See Also

- `IGtol.GetSymArcs`
- `IGtol.GetSymCircles`
- `IGtol.GetSymEdgeCounts`
- `IGtol.GetSymLines`
- `IGtol.GetSymName`
- `IGtol.GetSymText`
- `IGtol.GetSymTextPoints`
- `IGtol.IGetSymArcs`
- `IGtol.IGetSymCircles`
- `IGtol.IGetSymEdgeCounts`
- `IGtol.IGetSymLines`
- `IGtol.IGetTextPoint`
- `IGtol.IGetTextPositionAtIndex`