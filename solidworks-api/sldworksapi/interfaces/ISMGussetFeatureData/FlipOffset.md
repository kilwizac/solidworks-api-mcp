---
type: property
interface: ISMGussetFeatureData
member: FlipOffset
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISMGussetFeatureData.OffsetDistance
keywords:
  - flipoffset
  - ismgussetfeaturedata
  - ism
  - gusset
  - feature
  - data
  - flip
  - offset
  - boolean
readonly: null
---

# ISMGussetFeatureData.FlipOffset

Gets or sets whether to offset the gusset section plane on the opposite side of the specified reference point.

## Signature

```csharp
System.Boolean FlipOffset {get; set;}
```
## Parameters

None.

## Return Value

True to offset the gusset section plane on the opposite side of the reference point, false to not

## Remarks

This property is valid only if
ISMGussetFeatureData::UseOffset
is true.

## Examples

- ISMGussetFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISMGussetFeatureData)

## See Also

- `ISMGussetFeatureData.OffsetDistance`