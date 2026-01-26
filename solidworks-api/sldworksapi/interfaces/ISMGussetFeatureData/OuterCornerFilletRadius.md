---
type: property
interface: ISMGussetFeatureData
member: OuterCornerFilletRadius
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISMGussetFeatureData.InnerCornerFilletRadius
keywords:
  - outercornerfilletradius
  - ismgussetfeaturedata
  - ism
  - gusset
  - feature
  - data
  - outer
  - corner
  - fillet
  - radius
  - double
readonly: null
---

# ISMGussetFeatureData.OuterCornerFilletRadius

Gets or sets the fillet radius for the outer corners of this gusset.

## Signature

```csharp
System.Double OuterCornerFilletRadius {get; set;}
```
## Parameters

None.

## Return Value

Outer corner fillet radius

## Remarks

This property is valid only if
ISMGussetFeatureData::FilletOuterCorners
is true.

## Examples

- ISMGussetFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISMGussetFeatureData)

## See Also

- `ISMGussetFeatureData.InnerCornerFilletRadius`