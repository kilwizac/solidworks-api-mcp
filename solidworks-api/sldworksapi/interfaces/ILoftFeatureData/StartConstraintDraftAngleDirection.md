---
type: property
interface: ILoftFeatureData
member: StartConstraintDraftAngleDirection
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILoftFeatureData.EndConstraintApplyToAll
  - ILoftFeatureData.EndConstraintDraftAngle
  - ILoftFeatureData.EndConstraintDraftAngleDirection
  - ILoftFeatureData.EndTangencyType
  - ILoftFeatureData.EndTangentLength
  - ILoftFeatureData.GetGuideTangencyType
  - ILoftFeatureData.MaintainTangency
  - ILoftFeatureData.ReverseEndTangentDirection
  - ILoftFeatureData.ReverseStartTangentDirection
  - ILoftFeatureData.SetGuideTangencyType
  - ILoftFeatureData.StartConstraintApplyToAll
  - ILoftFeatureData.StartConstraintDraftAngle
  - ILoftFeatureData.StartTangencyType
  - ILoftFeatureData.StartTangentLength
keywords:
  - tangent
  - lofts
  - see
  - also
  - iloftfeaturedata
  - startconstraintdraftangledirection
  - loft
  - feature
  - data
  - start
  - constraint
  - draft
  - angle
  - direction
  - boolean
readonly: null
---

# ILoftFeatureData.StartConstraintDraftAngleDirection

Gets or sets the direction of the angle of the draft for the start constraint for the loft feature.

## Signature

```csharp
System.Boolean StartConstraintDraftAngleDirection {get; set;}
```
## Parameters

None.

## Return Value

True if the direction of the draft angle is reversed, false if not

## Remarks

This property is only valid if
ILoftFeatureData::StartConstraintApplyToAll
and
ILoftFeatureData::EndConstraintApplyToAll
are True.

## See Also

- `ILoftFeatureData.EndConstraintApplyToAll`
- `ILoftFeatureData.EndConstraintDraftAngle`
- `ILoftFeatureData.EndConstraintDraftAngleDirection`
- `ILoftFeatureData.EndTangencyType`
- `ILoftFeatureData.EndTangentLength`
- `ILoftFeatureData.GetGuideTangencyType`
- `ILoftFeatureData.MaintainTangency`
- `ILoftFeatureData.ReverseEndTangentDirection`
- `ILoftFeatureData.ReverseStartTangentDirection`
- `ILoftFeatureData.SetGuideTangencyType`
- `ILoftFeatureData.StartConstraintApplyToAll`
- `ILoftFeatureData.StartConstraintDraftAngle`
- `ILoftFeatureData.StartTangencyType`
- `ILoftFeatureData.StartTangentLength`