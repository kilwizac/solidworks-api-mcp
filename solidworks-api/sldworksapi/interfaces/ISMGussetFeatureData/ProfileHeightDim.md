---
type: property
interface: ISMGussetFeatureData
member: ProfileHeightDim
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISMGussetFeatureData.FlipDimSides
  - ISMGussetFeatureData.ProfileAngleDim
  - ISMGussetFeatureData.ProfileLengthDim
keywords:
  - profileheightdim
  - ismgussetfeaturedata
  - ism
  - gusset
  - feature
  - data
  - profile
  - height
  - dim
  - double
readonly: null
---

# ISMGussetFeatureData.ProfileHeightDim

Gets or sets the length of the d2 leg of this gusset.

## Signature

```csharp
System.Double ProfileHeightDim {get; set;}
```
## Parameters

None.

## Return Value

Length of d2 leg

## Remarks

This property is valid only if
ISMGussetFeatureData::ProfileDimensionScheme
is set to 1.
See the
ISMGussetFeatureData
Remarks.

## Examples

- ISMGussetFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISMGussetFeatureData)

## See Also

- `ISMGussetFeatureData.FlipDimSides`
- `ISMGussetFeatureData.ProfileAngleDim`
- `ISMGussetFeatureData.ProfileLengthDim`