---
type: method
interface: IGtol
member: IGetWitnessLine
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetWitnessLine
keywords:
  - lines
  - geometric
  - tolerancing
  - igetwitnessline
  - igtol
  - gtol
  - witness
  - line
  - double
---

# IGtol.IGetWitnessLine

Gets the extension line that connects the leader of this geometric tolerance with the entity that is being dimensioned.

## Signature

```csharp
System.Double IGetWitnessLine()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to array of six doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

As you drag a geometric tolerance leader off an entity, SOLIDWORKS dynamically builds a witness or extension line that connects the leader to the entity.
The return value is the following array of six doubles:
[
startPt[3], endPt[3]
]
where:
startPt
[3] = x,y,z start point coordinates of the witness line
endPt
[3] = x,y,z end point coordinates of the witness line

## See Also

- `IGtol.GetWitnessLine`