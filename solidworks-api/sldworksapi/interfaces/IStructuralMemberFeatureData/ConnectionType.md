---
type: property
interface: IStructuralMemberFeatureData
member: ConnectionType
returns: System.Int32
parameters:
  -
    name: AtPoint
    type: SketchPoint
    description: Connect point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IStructuralMemberFeatureData.ApplyCornerTreatment
  - IStructuralMemberFeatureData.CornerTreatmentType
  - IStructuralMemberFeatureData.GetConnectionPoints
  - IStructuralMemberFeatureData.GetConnectionPointsCount
  - IStructuralMemberFeatureData.IGetConnectionPoints
keywords:
  - connectiontype
  - istructuralmemberfeaturedata
  - structural
  - member
  - feature
  - data
  - connection
  - type
  - point
  - sketch
  - int32
readonly: null
---

# IStructuralMemberFeatureData.ConnectionType

Gets or sets the type of corner treatment at the specified connection point of this structural member.

## Signature

```csharp
System.Int32 ConnectionType( 
   SketchPoint
AtPoint
) {get; set;}
```
## Parameters

- `AtPoint` (SketchPoint): Connect point

## Return Value

Type of corner treatment as defined in swSolidworksWeldmentEndCondOptions_e

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `IStructuralMemberFeatureData.ApplyCornerTreatment`
- `IStructuralMemberFeatureData.CornerTreatmentType`
- `IStructuralMemberFeatureData.GetConnectionPoints`
- `IStructuralMemberFeatureData.GetConnectionPointsCount`
- `IStructuralMemberFeatureData.IGetConnectionPoints`