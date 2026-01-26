---
type: property
interface: ISMGussetFeatureData
member: UseAngleDimForProfile
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - useangledimforprofile
  - ismgussetfeaturedata
  - ism
  - gusset
  - feature
  - data
  - use
  - angle
  - dim
  - profile
  - boolean
readonly: null
---

# ISMGussetFeatureData.UseAngleDimForProfile

Gets or sets whether to dimension this gusset using an angle.

## Signature

```csharp
System.Boolean UseAngleDimForProfile {get; set;}
```
## Parameters

None.

## Return Value

True to use an angle to dimension this gusset, false to not

## Remarks

This property is valid only if
ISMGussetFeatureData::ProfileDimensionScheme
is set to 1.
After setting this property to true, set
ISMGussetFeatureData::ProfileAngleDim
.
See the
ISMGussetFeatureData
Remarks.

## Examples

- ISMGussetFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISMGussetFeatureData)