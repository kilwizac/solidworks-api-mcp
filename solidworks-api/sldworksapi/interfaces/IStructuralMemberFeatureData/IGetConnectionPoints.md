---
type: method
interface: IStructuralMemberFeatureData
member: IGetConnectionPoints
returns: SketchPoint
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of connection points
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
  - igetconnectionpoints
  - istructuralmemberfeaturedata
  - structural
  - member
  - feature
  - data
  - connection
  - points
  - count
  - int32
  - sketch
  - point
---

# IStructuralMemberFeatureData.IGetConnectionPoints

Gets the connection points for this structural member.

## Signature

```csharp
SketchPoint IGetConnectionPoints( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of connection points

## Return Value

in-process, unmanaged C++: Pointer to an array of sketch points representing the connection points VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IStructuralMemberFeatureData::GetConnectionPointsCount
before this method to get the value for Count.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IStructuralMemberFeatureData.ApplyCornerTreatment`
- `IStructuralMemberFeatureData.ConnectionType`
- `IStructuralMemberFeatureData.CornerTreatmentType`
- `IStructuralMemberFeatureData.GetConnectionPoints`