---
type: property
interface: ITabAndSlotGroupData
member: TabReverseDirection
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - tabreversedirection
  - itabandslotgroupdata
  - tab
  - slot
  - group
  - data
  - reverse
  - direction
  - boolean
readonly: null
---

# ITabAndSlotGroupData.TabReverseDirection

Gets or sets whether to reverse the tab offset from surface value.

## Signature

```csharp
System.Boolean TabReverseDirection {get; set;}
```
## Parameters

None.

## Return Value

True to reverse the tab offset from surface value, false to not

## Remarks

This property is valid only if valid only if
ITabAndSlotGroupData::TabHeightType
is set to
swTabSlotFeatureHeightType_e
.OffsetFromSurface.