---
type: property
interface: IFace2
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
  - IEdge.Check
keywords:
  - check
  - face
  - edge
  - iface2
  - face2
  - fault
  - entity
  - faces
  - faults
  - vba
readonly: true
---

# IFace2.Check

Checks whether the face is a valid, and, if not, returns the faults.

## Signature

```csharp
FaultEntity Check {get;}
```
## Parameters

None.

## Return Value

Pointer to IFaultEntity object

## Examples

- Check Faces for Faults (VBA) (Check_Faces_for_Faults_Example_VB.htm)

## See Also

- `IBody2.Check3`
- `IEdge.Check`