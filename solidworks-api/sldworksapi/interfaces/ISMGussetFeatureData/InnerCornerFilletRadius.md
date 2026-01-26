---
type: property
interface: ISMGussetFeatureData
member: InnerCornerFilletRadius
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISMGussetFeatureData.OuterCornerFilletRadius
keywords:
  - innercornerfilletradius
  - ismgussetfeaturedata
  - ism
  - gusset
  - feature
  - data
  - inner
  - corner
  - fillet
  - radius
  - double
readonly: null
---

# ISMGussetFeatureData.InnerCornerFilletRadius

Gets or sets the fillet radius for the inner corners of this gusset.

## Signature

```csharp
System.Double InnerCornerFilletRadius {get; set;}
```
## Parameters

None.

## Return Value

Inner corner fillet radius

## Remarks

This property is valid only if
ISMGussetFeatureData::FilletInnerCorners
is true.

## Examples

- ISMGussetFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISMGussetFeatureData)

## See Also

- `ISMGussetFeatureData.OuterCornerFilletRadius`