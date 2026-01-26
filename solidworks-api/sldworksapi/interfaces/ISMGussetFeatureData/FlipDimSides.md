---
type: property
interface: ISMGussetFeatureData
member: FlipDimSides
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISMGussetFeatureData.ProfileAngleDim
  - ISMGussetFeatureData.ProfileDimensionScheme
  - ISMGussetFeatureData.UseAngleDimForProfile
keywords:
  - flipdimsides
  - ismgussetfeaturedata
  - ism
  - gusset
  - feature
  - data
  - flip
  - dim
  - sides
  - boolean
readonly: null
---

# ISMGussetFeatureData.FlipDimSides

Gets or sets whether to swap the gusset legs in the dimensioning scheme.

## Signature

```csharp
System.Boolean FlipDimSides {get; set;}
```
## Parameters

None.

## Return Value

True to swap the gusset legs in the dimensioning scheme, false to not

## Remarks

ISMGussetFeatureData::ProfileHeightDim
corresponds to the d2 leg and
ISMGussetFeatureData::ProfileLengthDim
corresponds to the d1 leg in the dimensioning scheme. This property allows you to swap the d2 and d1 legs in order to change the gusset dimension profile.
See the
ISMGussetFeatureData
Remarks.

## Examples

- ISMGussetFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISMGussetFeatureData)

## See Also

- `ISMGussetFeatureData.ProfileAngleDim`
- `ISMGussetFeatureData.ProfileDimensionScheme`
- `ISMGussetFeatureData.UseAngleDimForProfile`