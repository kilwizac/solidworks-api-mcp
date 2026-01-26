---
type: property
interface: IEdge
member: Check
returns: FaultEntity
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.Check3
  - IFace2.Check
keywords:
  - check
  - face
  - edge
  - iedge
  - fault
  - entity
  - edges
  - faults
  - vb
  - net
  - vba
readonly: true
---

# IEdge.Check

Gets whether the edge is a valid, and, if not, returns the faults.

## Signature

```csharp
FaultEntity Check {get;}
```
## Parameters

None.

## Return Value

Pointer to IFaultEntity object

## Examples

- Check Edges for Faults (C#) (Check_Edges_for_Faults_Example_CSharp.htm)
- Check Edges for Faults (VB.NET) (Check_Edges_for_Faults_Example_VBNET.htm)
- Check Edges for Faults (VBA) (Check_Edges_for_Faults_Example_VB.htm)

## See Also

- `IBody2.Check3`
- `IFace2.Check`