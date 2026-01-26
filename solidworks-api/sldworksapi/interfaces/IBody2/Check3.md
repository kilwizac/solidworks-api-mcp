---
type: property
interface: IBody2
member: Check3
returns: FaultEntity
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IEdge.Check
  - IFace2.Check
keywords:
  - check3
  - ibody2
  - body2
  - fault
  - entity
  - check
  - bodies
  - faults
  - vba
  - fill
  - gaps
  - body
  - vb
  - net
readonly: true
---

# IBody2.Check3

Gets whether the body is a valid and returns an IFaultEntity object if any faults exist.

## Signature

```csharp
FaultEntity Check3 {get;}
```
## Parameters

None.

## Return Value

Pointer to IFaultEntity object

## Examples

- Check Bodies for Faults (VBA) (Check_Bodies_for_Faults_Example_VB.htm)
- Get and Fill Gaps in Body (C#) (Get_and_Fill_Gaps_in_Body_Example_CSharp.htm)
- Get and Fill Gaps in Body (VB.NET) (Get_and_Fill_Gaps_in_Body_Example_VBNET.htm)
- Get and Fill Gaps in Body (VBA) (Get_and_Fill_Gaps_in_Body_Example_VB.htm)

## See Also

- `IEdge.Check`
- `IFace2.Check`