---
type: method
interface: IGtol
member: IGetSymEdgeCounts
returns: System.Int16
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
  - geometry
related:
  - IGtol.GetSymArcs
  - IGtol.GetSymCircles
  - IGtol.GetSymDesc
  - IGtol.GetSymEdgeCounts
  - IGtol.GetSymLines
  - IGtol.GetSymName
  - IGtol.GetSymText
  - IGtol.GetSymTextPoints
  - IGtol.IGetSymArcs
  - IGtol.IGetSymCircles
  - IGtol.IGetSymLines
keywords:
  - symbols
  - geometric
  - tolerancing
  - igetsymedgecounts
  - igtol
  - gtol
  - sym
  - edge
  - counts
  - idx
  - int16
---

# IGtol.IGetSymEdgeCounts

Gets an array of the number of lines, arcs and circles in the specified symbol.

## Signature

```csharp
System.Int16 IGetSymEdgeCounts( 
   System.Int16
SymIdx
)
```
## Parameters

- `SymIdx` (System.Int16): Indexed position of the symbol

## Return Value

in-process, unmanaged C++: Pointer to an array of shorts (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Format of return information is the following array of short integers:
retval
[0] = Line count
retval
[1] = Arc count
retval
[2] = Circle count
retval
[3] = Text count
For more information, see
IGtol::IGetSymText
and
IGtol::IGetSymTextPoints
.

## See Also

- `IGtol.GetSymArcs`
- `IGtol.GetSymCircles`
- `IGtol.GetSymDesc`
- `IGtol.GetSymEdgeCounts`
- `IGtol.GetSymLines`
- `IGtol.GetSymName`
- `IGtol.GetSymText`
- `IGtol.GetSymTextPoints`
- `IGtol.IGetSymArcs`
- `IGtol.IGetSymCircles`
- `IGtol.IGetSymLines`