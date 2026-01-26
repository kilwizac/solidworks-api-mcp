---
type: method
interface: IGtol
member: GetSymLines
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
  - IGtol.GetSymCircles
  - IGtol.GetSymDesc
  - IGtol.GetSymEdgeCounts
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
  - getsymlines
  - igtol
  - gtol
  - sym
  - lines
  - idx
  - int16
  - object
---

# IGtol.GetSymLines

Gets an array that defines all lines in the symbol.

## Signature

```csharp
System.Object GetSymLines( 
   System.Int16
SymIdx
)
```
## Parameters

- `SymIdx` (System.Int16): Indexed position of the symbol

## Return Value

Array (see Remarks )

## Remarks

Each line in the symbol is defined by two points.
Format of return information is the following array of doubles:
For the
i
th line:
retval
[6 *
i
+ 0] = X-coordinate of first point
retval
[6 *
i
+ 1] = Y-coordinate of first point
retval
[6 *
i
+ 2] = Z-coordinate of first point
retval
[6 *
i
+ 3] = X-coordinate of second point
retval
[6 *
i
+ 4] = Y-coordinate of second point
retval
[6 *
i
+ 5] = Z-coordinate of second point

## See Also

- `IGtol.GetSymArcs`
- `IGtol.GetSymCircles`
- `IGtol.GetSymDesc`
- `IGtol.GetSymEdgeCounts`
- `IGtol.GetSymName`
- `IGtol.GetSymText`
- `IGtol.GetSymTextPoints`
- `IGtol.IGetSymArcs`
- `IGtol.IGetSymCircles`
- `IGtol.IGetSymEdgeCounts`
- `IGtol.IGetSymLines`
- `IGtol.IGetSymText`
- `IGtol.IGetSymTextPoints`