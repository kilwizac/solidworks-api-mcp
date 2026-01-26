---
type: property
interface: ISplitLineFeatureData
member: PullDirectionBase
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISplitLineFeatureData.ReverseDirection
  - ISplitLineFeatureData.SingleDirection
  - ISplitLineFeatureData.SplitType
keywords:
  - pulldirectionbase
  - isplitlinefeaturedata
  - split
  - line
  - feature
  - data
  - pull
  - direction
  - base
  - object
readonly: null
---

# ISplitLineFeatureData.PullDirectionBase

Gets or sets the entity indicating the direction of pull of this split line feature.

## Signature

```csharp
System.Object PullDirectionBase {get; set;}
```
## Parameters

None.

## Return Value

Entity indicating the direction of pull: axis , edge , face , or plane

## Remarks

This property is only valid when
ISplitLineFeatureData::GetType
is set to
swSplitLineFeatureType_e
.swSplitLineFeatureType_Draft.
After calling this property, call
ISplitLineFeatureData::PullDirectionType
to determine the type of entity.

## See Also

- `ISplitLineFeatureData.ReverseDirection`
- `ISplitLineFeatureData.SingleDirection`
- `ISplitLineFeatureData.SplitType`