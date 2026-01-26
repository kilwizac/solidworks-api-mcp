---
type: method
interface: IPartingLineFeatureData
member: DraftAnalysis
returns: System.Boolean
parameters:
  -
    name: Angle
    type: System.Double
    description: Draft angle
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related:
  - IPartingLineFeatureData.Angle
  - IPartingLineFeatureData.GetFacesByType
  - IPartingLineFeatureData.GetFacesByTypeCount
  - IPartingLineFeatureData.IGetFacesByType
  - IPartingLineFeatureData.PullDirection
  - IPartingLineFeatureData.PullDirectionType
keywords:
  - drafts
  - see
  - also
  - idraftfeaturedata2
  - parting
  - lines
  - draftanalysis
  - ipartinglinefeaturedata
  - line
  - feature
  - data
  - draft
  - analysis
  - angle
  - double
  - boolean
---

# IPartingLineFeatureData.DraftAnalysis

Performs draft analysis for the input angle and the direction of pull.

## Signature

```csharp
System.Boolean DraftAnalysis( 
   System.Double
Angle
)
```
## Parameters

- `Angle` (System.Double): Draft angle

## Return Value

True if draft analysis is performed, false if not

## Remarks

If you want a different pull direction, then use
IPartingLineFeatureData::PullDirectionBase
to change the direction. Once this method is called, only the information for different faces (negative, positive, and so on) is generated.

## See Also

- `IPartingLineFeatureData.Angle`
- `IPartingLineFeatureData.GetFacesByType`
- `IPartingLineFeatureData.GetFacesByTypeCount`
- `IPartingLineFeatureData.IGetFacesByType`
- `IPartingLineFeatureData.PullDirection`
- `IPartingLineFeatureData.PullDirectionType`