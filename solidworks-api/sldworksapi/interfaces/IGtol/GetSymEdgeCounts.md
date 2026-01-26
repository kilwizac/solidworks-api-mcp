---
type: method
interface: IGtol
member: GetSymEdgeCounts
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
  - geometry
related:
  - IGtol.GetSymArcs
  - IGtol.GetSymCircles
  - IGtol.GetSymDesc
  - IGtol.GetSymLines
  - IGtol.GetSymName
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
  - getsymedgecounts
  - igtol
  - gtol
  - sym
  - edge
  - counts
  - idx
  - int16
  - object
---

# IGtol.GetSymEdgeCounts

Gets an array of the number of lines, arcs and circles in the specified symbol.

## Signature

```csharp
System.Object GetSymEdgeCounts( 
   System.Int16
SymIdx
)
```
## Parameters

- `SymIdx` (System.Int16): Indexed position of the symbol

## Return Value

Array (see Remarks )

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
IGtol::GetSymText
and
IGtol::GetSymTextPoints
.

## See Also

- `IGtol.GetSymArcs`
- `IGtol.GetSymCircles`
- `IGtol.GetSymDesc`
- `IGtol.GetSymLines`
- `IGtol.GetSymName`
- `IGtol.IGetSymArcs`
- `IGtol.IGetSymCircles`
- `IGtol.IGetSymEdgeCounts`
- `IGtol.IGetSymLines`
- `IGtol.IGetSymText`
- `IGtol.IGetSymTextPoints`