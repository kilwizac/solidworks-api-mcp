---
type: property
interface: IStructuralMemberFeatureData
member: ApplyCornerTreatment
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IStructuralMemberFeatureData.ConnectionType
  - IStructuralMemberFeatureData.CornerTreatmentType
  - IStructuralMemberFeatureData.GetConnectionPoints
  - IStructuralMemberFeatureData.GetConnectionPointsCount
  - IStructuralMemberFeatureData.IGetConnectionPoints
keywords:
  - applycornertreatment
  - istructuralmemberfeaturedata
  - structural
  - member
  - feature
  - data
  - apply
  - corner
  - treatment
  - boolean
readonly: null
---

# IStructuralMemberFeatureData.ApplyCornerTreatment

Gets or sets whether or not to apply a corner treatment to this structural member.

## Signature

```csharp
System.Boolean ApplyCornerTreatment {get; set;}
```
## Parameters

None.

## Return Value

True to apply corner treatment, false to not (see Remarks )

## Remarks

You must specify the
type corner treatment
before changing this property from false to true.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IStructuralMemberFeatureData.ConnectionType`
- `IStructuralMemberFeatureData.CornerTreatmentType`
- `IStructuralMemberFeatureData.GetConnectionPoints`
- `IStructuralMemberFeatureData.GetConnectionPointsCount`
- `IStructuralMemberFeatureData.IGetConnectionPoints`