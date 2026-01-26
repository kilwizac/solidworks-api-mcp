---
type: property
interface: ILoftFeatureData
member: EndConstraintDraftAngleDirection
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILoftFeatureData.EndConstraintDraftAngle
  - ILoftFeatureData.EndTangencyType
  - ILoftFeatureData.EndTangentLength
  - ILoftFeatureData.GetGuideTangencyType
  - ILoftFeatureData.MaintainTangency
  - ILoftFeatureData.ReverseEndTangentDirection
  - ILoftFeatureData.ReverseStartTangentDirection
  - ILoftFeatureData.SetGuideTangencyType
  - ILoftFeatureData.StartConstraintDraftAngle
  - ILoftFeatureData.StartConstraintDraftAngleDirection
  - ILoftFeatureData.StartTangencyType
  - ILoftFeatureData.StartTangentLength
keywords:
  - lofts
  - see
  - also
  - iloftfeaturedata
  - tangent
  - endconstraintdraftangledirection
  - loft
  - feature
  - data
  - end
  - constraint
  - draft
  - angle
  - direction
  - boolean
readonly: null
---

# ILoftFeatureData.EndConstraintDraftAngleDirection

Gets or sets the direction of the angle of the draft for the end constraint for the loft feature.

## Signature

```csharp
System.Boolean EndConstraintDraftAngleDirection {get; set;}
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

- `ILoftFeatureData.EndConstraintDraftAngle`
- `ILoftFeatureData.EndTangencyType`
- `ILoftFeatureData.EndTangentLength`
- `ILoftFeatureData.GetGuideTangencyType`
- `ILoftFeatureData.MaintainTangency`
- `ILoftFeatureData.ReverseEndTangentDirection`
- `ILoftFeatureData.ReverseStartTangentDirection`
- `ILoftFeatureData.SetGuideTangencyType`
- `ILoftFeatureData.StartConstraintDraftAngle`
- `ILoftFeatureData.StartConstraintDraftAngleDirection`
- `ILoftFeatureData.StartTangencyType`
- `ILoftFeatureData.StartTangentLength`