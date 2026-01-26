---
type: property
interface: ISplitLineFeatureData
member: ReverseDirection
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
  - ISplitLineFeatureData.SingleDirection
  - ISplitLineFeatureData.SplitType
keywords:
  - reversedirection
  - isplitlinefeaturedata
  - split
  - line
  - feature
  - data
  - reverse
  - direction
  - boolean
readonly: null
---

# ISplitLineFeatureData.ReverseDirection

Gets or sets whether to reverse the direction of pull of this split line.

## Signature

```csharp
System.Boolean ReverseDirection {get; set;}
```
## Parameters

None.

## Return Value

True to reverse direction, false to not

## Remarks

If creating a projection split line, then
ISplitLineFeatureData::SingleDirection
must be set to true to access this property.

## Examples

- ISplitLineFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISplitLineFeatureData)

## See Also

- `ISplitLineFeatureData.PullDirectionBase`
- `ISplitLineFeatureData.PullDirectionType`
- `ISplitLineFeatureData.SingleDirection`
- `ISplitLineFeatureData.SplitType`