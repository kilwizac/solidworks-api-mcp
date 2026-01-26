---
type: property
interface: ISplitLineFeatureData
member: PullDirectionType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISplitLineFeatureData.ReverseDirection
  - ISplitLineFeatureData.SingleDirection
keywords:
  - pulldirectiontype
  - isplitlinefeaturedata
  - split
  - line
  - feature
  - data
  - pull
  - direction
  - type
  - int32
readonly: true
---

# ISplitLineFeatureData.PullDirectionType

Gets the type of entity indicating the direction of pull for this split line feature.

## Signature

```csharp
System.Int32 PullDirectionType {get;}
```
## Parameters

None.

## Return Value

Type of entity as defined in swSelectType_e : swSelDATUMAXES swSelEDGES swSelFACES swSelDATUMPLANES swSelDATUMPOINT swSelVERTICES

## Remarks

Before calling this property, call
ISplitLineFeatureData::PullDirectionBase
to get the entity that indicates the pull direction.

## See Also

- `ISplitLineFeatureData.ReverseDirection`
- `ISplitLineFeatureData.SingleDirection`