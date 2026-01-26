---
type: method
interface: IGtol
member: IGetSymCircles
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
  - IGtol.GetSymDesc
  - IGtol.GetSymEdgeCounts
  - IGtol.GetSymLines
  - IGtol.GetSymName
  - IGtol.GetSymText
  - IGtol.GetSymTextPoints
  - IGtol.IGetSymArcs
  - IGtol.IGetSymEdgeCounts
  - IGtol.IGetSymLines
  - IGtol.IGetSymText
  - IGtol.IGetSymTextPoints
keywords:
  - symbols
  - geometric
  - tolerancing
  - igetsymcircles
  - igtol
  - gtol
  - sym
  - circles
  - idx
  - int16
  - double
---

# IGtol.IGetSymCircles

Gets an array that defines all circles in the symbol.

## Signature

```csharp
System.Double IGetSymCircles( 
   System.Int16
SymIdx
)
```
## Parameters

- `SymIdx` (System.Int16): Indexed position of the symbol

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

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
- `IGtol.IGetSymEdgeCounts`
- `IGtol.IGetSymLines`
- `IGtol.IGetSymText`
- `IGtol.IGetSymTextPoints`