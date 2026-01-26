---
type: method
interface: IGtol
member: GetSymArcs
returns: System.Object
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
  - IGtol.GetSymCircles
  - IGtol.GetSymDesc
  - IGtol.GetSymEdgeCounts
  - IGtol.GetSymLines
  - IGtol.GetSymName
  - IGtol.GetSymText
  - IGtol.GetSymTextPoints
  - IGtol.IGetSymArcs
  - IGtol.IGetSymLines
  - IGtol.IGetSymText
  - IGtol.IGetSymTextPoints
keywords:
  - symbols
  - geometric
  - tolerancing
  - getsymarcs
  - igtol
  - gtol
  - sym
  - arcs
  - idx
  - int16
  - object
---

# IGtol.GetSymArcs

Gets an array that defines all arcs in the symbol.

## Signature

```csharp
System.Object GetSymArcs( 
   System.Int16
SymIdx
)
```
## Parameters

- `SymIdx` (System.Int16): Indexed position of the symbol

## Return Value

Array (see Remarks )

## Remarks

Each arc in the symbol is defined by three points: center, arc start, and arc end.
Format of return information is the following array of doubles:
For the
i
th arc:
retval
[9 *
i
+ 0] = X-coordinate of center point
retval
[9 *
i
+ 1] = Y-coordinate of center point
retval
[9 *
i
+ 2] = Z-coordinate of center point
retval
[9 *
i
+ 3] = X-coordinate of arc start point
retval
[9 *
i
+ 4] = Y-coordinate of arc start point
retval
[9 *
i
+ 5] = Z-coordinate of arc start point
retval
[9 *
i
+ 6] = X-coordinate of arc end point
retval
[9 *
i
+ 7] = Y-coordinate of arc end point
retval
[9 *
i
+ 8] = Z-coordinate of arc end point

## See Also

- `IGtol.GetSymCircles`
- `IGtol.GetSymDesc`
- `IGtol.GetSymEdgeCounts`
- `IGtol.GetSymLines`
- `IGtol.GetSymName`
- `IGtol.GetSymText`
- `IGtol.GetSymTextPoints`
- `IGtol.IGetSymArcs`
- `IGtol.IGetSymLines`
- `IGtol.IGetSymText`
- `IGtol.IGetSymTextPoints`