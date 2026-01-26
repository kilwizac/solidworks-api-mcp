---
type: property
interface: ILoftFeatureData
member: EndConstraintDraftAngle
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILoftFeatureData.EndConstraintDraftAngleDirection
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
  - endconstraintdraftangle
  - loft
  - feature
  - data
  - end
  - constraint
  - draft
  - angle
  - double
readonly: null
---

# ILoftFeatureData.EndConstraintDraftAngle

Gets or sets the draft angle for the end constraint for the loft feature.

## Signature

```csharp
System.Double EndConstraintDraftAngle {get; set;}
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

- `ILoftFeatureData.EndConstraintDraftAngleDirection`
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