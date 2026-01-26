---
type: property
interface: ILoftFeatureData
member: StartConstraintDraftAngle
returns: System.Double
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
  - ILoftFeatureData.StartConstraintDraftAngleDirection
  - ILoftFeatureData.StartTangencyType
  - ILoftFeatureData.StartTangentLength
keywords:
  - tangent
  - lofts
  - see
  - also
  - iloftfeaturedata
  - startconstraintdraftangle
  - loft
  - feature
  - data
  - start
  - constraint
  - draft
  - angle
  - double
readonly: null
---

# ILoftFeatureData.StartConstraintDraftAngle

Gets or sets the angle of the draft for the start constraint of the loft feature.

## Signature

```csharp
System.Double StartConstraintDraftAngle {get; set;}
```
## Parameters

None.

## Return Value

Draft angle

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
- `ILoftFeatureData.StartConstraintDraftAngleDirection`
- `ILoftFeatureData.StartTangencyType`
- `ILoftFeatureData.StartTangentLength`