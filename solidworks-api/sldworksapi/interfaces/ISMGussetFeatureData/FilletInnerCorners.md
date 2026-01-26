---
type: property
interface: ISMGussetFeatureData
member: FilletInnerCorners
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISMGussetFeatureData.FilletOuterCorners
keywords:
  - filletinnercorners
  - ismgussetfeaturedata
  - ism
  - gusset
  - feature
  - data
  - fillet
  - inner
  - corners
  - boolean
readonly: null
---

# ISMGussetFeatureData.FilletInnerCorners

Gets or sets whether to fillet the inner corners of this gusset.

## Signature

```csharp
System.Boolean FilletInnerCorners {get; set;}
```
## Parameters

None.

## Return Value

True to fillet the inner corners of this gusset, false to not

## Remarks

After setting this property, set
ISMGussetFeatureData::InnerCornerFilletRadius
.

## Examples

- ISMGussetFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISMGussetFeatureData)

## See Also

- `ISMGussetFeatureData.FilletOuterCorners`