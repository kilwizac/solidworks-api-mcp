---
type: method
interface: IStructuralMemberFeatureData
member: GetConnectionPointsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IStructuralMemberFeatureData.ApplyCornerTreatment
  - IStructuralMemberFeatureData.ConnectionType
  - IStructuralMemberFeatureData.CornerTreatmentType
  - IStructuralMemberFeatureData.GetConnectionPoints
keywords:
  - getconnectionpointscount
  - istructuralmemberfeaturedata
  - structural
  - member
  - feature
  - data
  - connection
  - points
  - count
  - int32
---

# IStructuralMemberFeatureData.GetConnectionPointsCount

Gets the number of sketch points for this structural member.

## Signature

```csharp
System.Int32 GetConnectionPointsCount()
```
## Parameters

None.

## Return Value

Number of sketch points

## Remarks

Call this method before calling
IStructuralMemberFeatureData::IGetConnectionPoints
to get the size of the array for that method.

## See Also

- `IStructuralMemberFeatureData.ApplyCornerTreatment`
- `IStructuralMemberFeatureData.ConnectionType`
- `IStructuralMemberFeatureData.CornerTreatmentType`
- `IStructuralMemberFeatureData.GetConnectionPoints`