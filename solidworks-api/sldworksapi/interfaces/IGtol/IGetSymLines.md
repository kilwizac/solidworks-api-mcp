---
type: method
interface: IGtol
member: IGetSymLines
returns: System.Double
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
  - IGtol.IGetSymText
  - IGtol.IGetTextPositionAtIndex
keywords:
  - symbols
  - geometric
  - tolerancing
  - igetsymlines
  - igtol
  - gtol
  - sym
  - lines
  - idx
  - int16
  - double
---

# IGtol.IGetSymLines

Gets an array that defines all lines in the symbol.

## Signature

```csharp
System.Double IGetSymLines( 
   System.Int16
SymIdx
)
```
## Parameters

- `SymIdx` (System.Int16): Indexed position of the symbol

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

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
- `IGtol.IGetSymText`
- `IGtol.IGetTextPositionAtIndex`