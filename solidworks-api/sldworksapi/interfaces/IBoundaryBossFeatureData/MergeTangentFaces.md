---
type: property
interface: IBoundaryBossFeatureData
member: MergeTangentFaces
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IBoundaryBossFeatureData.GetGuideTangencyType
  - IBoundaryBossFeatureData.GetTangentApplyToAll
  - IBoundaryBossFeatureData.GetTangentDirectionReversed
  - IBoundaryBossFeatureData.GetTangentInfluence
  - IBoundaryBossFeatureData.GetTangentLength
  - IBoundaryBossFeatureData.MergeResult
  - IBoundaryBossFeatureData.SetGuideTangencyType
  - IBoundaryBossFeatureData.SetTangentApplyToAll
  - IBoundaryBossFeatureData.SetTangentDirectionReversed
  - IBoundaryBossFeatureData.SetTangentInfluence
  - IBoundaryBossFeatureData.SetTangentLength
keywords:
  - mergetangentfaces
  - iboundarybossfeaturedata
  - boundary
  - boss
  - feature
  - data
  - merge
  - tangent
  - faces
  - boolean
readonly: null
---

# IBoundaryBossFeatureData.MergeTangentFaces

Gets or sets whether to make the surfaces in the resulting boundary feature tangent if the corresponding boundary segments are tangent.

## Signature

```csharp
System.Boolean MergeTangentFaces {get; set;}
```
## Parameters

None.

## Return Value

True to make the surfaces in the resulting boundary feature tangent if the corresponding boundary segments are tangent, false to not

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `IBoundaryBossFeatureData.GetGuideTangencyType`
- `IBoundaryBossFeatureData.GetTangentApplyToAll`
- `IBoundaryBossFeatureData.GetTangentDirectionReversed`
- `IBoundaryBossFeatureData.GetTangentInfluence`
- `IBoundaryBossFeatureData.GetTangentLength`
- `IBoundaryBossFeatureData.MergeResult`
- `IBoundaryBossFeatureData.SetGuideTangencyType`
- `IBoundaryBossFeatureData.SetTangentApplyToAll`
- `IBoundaryBossFeatureData.SetTangentDirectionReversed`
- `IBoundaryBossFeatureData.SetTangentInfluence`
- `IBoundaryBossFeatureData.SetTangentLength`