---
type: method
interface: IGtol
member: GetSymCircles
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
  - IGtol.GetSymArcs
  - IGtol.GetSymDesc
  - IGtol.GetSymEdgeCounts
  - IGtol.GetSymLines
  - IGtol.GetSymName
  - IGtol.GetSymText
  - IGtol.GetSymTextPoints
  - IGtol.IGetSymArcs
  - IGtol.IGetSymCircles
  - IGtol.IGetSymEdgeCounts
  - IGtol.IGetSymLines
  - IGtol.IGetSymText
  - IGtol.IGetSymTextPoints
keywords:
  - symbols
  - geometric
  - tolerancing
  - getsymcircles
  - igtol
  - gtol
  - sym
  - circles
  - idx
  - int16
  - object
---

# IGtol.GetSymCircles

Gets an array that defines all circles in the symbol.

## Signature

```csharp
System.Object GetSymCircles( 
   System.Int16
SymIdx
)
```
## Parameters

- `SymIdx` (System.Int16): Indexed position of the symbol

## Return Value

Array (see Remarks )

## Remarks

Each circle in the symbol is defined by its radius and center point.
Format of return information is the following array of doubles.
For the
i
th circle:
retval
[4 *
i
] = radius
retval
[4 *
i
+ 1] = X-coordinate of center point
retval
[4 *
i
+ 2] = Y-coordinate of center point
retval
[4 *
i
+ 3] = Z-coordinate of center point

## See Also

- `IGtol.GetSymArcs`
- `IGtol.GetSymDesc`
- `IGtol.GetSymEdgeCounts`
- `IGtol.GetSymLines`
- `IGtol.GetSymName`
- `IGtol.GetSymText`
- `IGtol.GetSymTextPoints`
- `IGtol.IGetSymArcs`
- `IGtol.IGetSymCircles`
- `IGtol.IGetSymEdgeCounts`
- `IGtol.IGetSymLines`
- `IGtol.IGetSymText`
- `IGtol.IGetSymTextPoints`