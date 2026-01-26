---
type: method
interface: IGtol
member: GetWitnessLine
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.IGetWitnessLine
keywords:
  - lines
  - geometric
  - tolerancing
  - getwitnessline
  - igtol
  - gtol
  - witness
  - line
  - object
  - vba
  - vb
  - net
---

# IGtol.GetWitnessLine

Gets the extension line that connects the leader of this geometric tolerance with the entity being dimensioned.

## Signature

```csharp
System.Object GetWitnessLine()
```
## Parameters

None.

## Return Value

An array of six doubles (see Remarks )

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

## Examples

- Get GTol Witness Line (VBA) (Get_GTol_Witness_Line_Example_VB.htm)
- Get GTol Witness Line (VB.NET) (Get_GTol_Witness_Line_Example_VBNET.htm)
- Get GTol Witness Line (C#) (Get_GTol_Witness_Line_Example_CSharp.htm)

## See Also

- `IGtol.IGetWitnessLine`