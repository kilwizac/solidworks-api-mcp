---
type: property
interface: ISMGussetFeatureData
member: ProfileLengthDim
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
  - ISMGussetFeatureData.ProfileHeightDim
keywords:
  - profilelengthdim
  - ismgussetfeaturedata
  - ism
  - gusset
  - feature
  - data
  - profile
  - length
  - dim
  - double
readonly: null
---

# ISMGussetFeatureData.ProfileLengthDim

Gets or sets the length of the d1 leg of this gusset.

## Signature

```csharp
System.Double ProfileLengthDim {get; set;}
```
## Parameters

None.

## Return Value

Length of d1 leg

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
- `ISMGussetFeatureData.ProfileHeightDim`