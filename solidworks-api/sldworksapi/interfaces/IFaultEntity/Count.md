---
type: property
interface: IFaultEntity
member: Count
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - count
  - ifaultentity
  - fault
  - entity
  - int32
  - check
  - edges
  - faults
  - vba
  - faces
  - fill
  - gaps
  - body
  - vb
  - net
readonly: true
---

# IFaultEntity.Count

Gets the number of faults that the entity has.

## Signature

```csharp
System.Int32 Count {get;}
```
## Parameters

None.

## Return Value

Number of faults

## Remarks

The return value has a 0-based index.
Call this property before calling
IFaultEntity::Entity2
and
IFaultEntity::ErrorCode
.

## Examples

- Check Edges for Faults (VBA) (Check_Edges_for_Faults_Example_VB.htm)
- Check Faces for Faults (VBA) (Check_Faces_for_Faults_Example_VB.htm)
- Get and Fill Gaps in Body (C#) (Get_and_Fill_Gaps_in_Body_Example_CSharp.htm)
- Get and Fill Gaps in Body (VB.NET) (Get_and_Fill_Gaps_in_Body_Example_VBNET.htm)
- Get and Fill Gaps in Body (VBA) (Get_and_Fill_Gaps_in_Body_Example_VB.htm)