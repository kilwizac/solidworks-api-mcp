---
type: property
interface: ISplitLineFeatureData
member: SingleDirection
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISplitLineFeatureData.PullDirectionBase
  - ISplitLineFeatureData.PullDirectionType
  - ISplitLineFeatureData.ReverseDirection
  - ISplitLineFeatureData.SplitType
keywords:
  - singledirection
  - isplitlinefeaturedata
  - split
  - line
  - feature
  - data
  - single
  - direction
  - boolean
readonly: null
---

# ISplitLineFeatureData.SingleDirection

Gets or sets whether the projection split line is in a single direction.

## Signature

```csharp
System.Boolean SingleDirection {get; set;}
```
## Parameters

None.

## Return Value

True if single direction, false if not

## Remarks

This property is valid only if
ISplitLineFeatureData::GetType
is set to
swSplitLineFeatureType_e
.swSplitLineFeatureType_Projection.

## Examples

- ISplitLineFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISplitLineFeatureData)

## See Also

- `ISplitLineFeatureData.PullDirectionBase`
- `ISplitLineFeatureData.PullDirectionType`
- `ISplitLineFeatureData.ReverseDirection`
- `ISplitLineFeatureData.SplitType`