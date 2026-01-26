---
type: property
interface: ISMGussetFeatureData
member: OffsetDistance
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISMGussetFeatureData.FlipOffset
keywords:
  - offsetdistance
  - ismgussetfeaturedata
  - ism
  - gusset
  - feature
  - data
  - offset
  - distance
  - double
readonly: null
---

# ISMGussetFeatureData.OffsetDistance

Gets or sets the offset of the gusset's section plane from a specified reference point.

## Signature

```csharp
System.Double OffsetDistance {get; set;}
```
## Parameters

None.

## Return Value

Gusset section plane offset

## Remarks

This property is valid only if
ISMGussetFeatureData::UseOffset
is true.

## Examples

- ISMGussetFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISMGussetFeatureData)

## See Also

- `ISMGussetFeatureData.FlipOffset`