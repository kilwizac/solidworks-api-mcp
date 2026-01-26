---
type: property
interface: ISMGussetFeatureData
member: ProfileAngleDim
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISMGussetFeatureData.FlipDimSides
  - ISMGussetFeatureData.ProfileHeightDim
  - ISMGussetFeatureData.ProfileLengthDim
keywords:
  - profileangledim
  - ismgussetfeaturedata
  - ism
  - gusset
  - feature
  - data
  - profile
  - angle
  - dim
  - double
readonly: null
---

# ISMGussetFeatureData.ProfileAngleDim

Gets or sets the angle formed by the intersection of this gusset with one face adjacent to the bend of the sheet metal part.

## Signature

```csharp
System.Double ProfileAngleDim {get; set;}
```
## Parameters

None.

## Return Value

Angle formed where gusset intersects the sheet metal part

## Remarks

This property is valid only if
ISMGussetFeatureData::UseAngleDimForProfile
is true and
ISMGussetFeatureData::ProfileDimensionScheme
is set to 1.
See the
ISMGussetFeatureData
Remarks.

## Examples

- ISMGussetFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISMGussetFeatureData)

## See Also

- `ISMGussetFeatureData.FlipDimSides`
- `ISMGussetFeatureData.ProfileHeightDim`
- `ISMGussetFeatureData.ProfileLengthDim`