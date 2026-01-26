---
type: property
interface: ISMGussetFeatureData
member: FilletOuterCorners
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISMGussetFeatureData.FilletInnerCorners
keywords:
  - filletoutercorners
  - ismgussetfeaturedata
  - ism
  - gusset
  - feature
  - data
  - fillet
  - outer
  - corners
  - boolean
readonly: null
---

# ISMGussetFeatureData.FilletOuterCorners

Gets or sets whether to fillet the outer corners of this gusset.

## Signature

```csharp
System.Boolean FilletOuterCorners {get; set;}
```
## Parameters

None.

## Return Value

True to fillet the outer corners of this gusset, false to not

## Remarks

After setting this property, set
ISMGussetFeatureData::OuterCornerFilletRadius
.

## Examples

- ISMGussetFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISMGussetFeatureData)

## See Also

- `ISMGussetFeatureData.FilletInnerCorners`