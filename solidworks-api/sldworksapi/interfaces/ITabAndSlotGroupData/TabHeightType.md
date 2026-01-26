---
type: property
interface: ITabAndSlotGroupData
member: TabHeightType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - tabheighttype
  - itabandslotgroupdata
  - tab
  - slot
  - group
  - data
  - height
  - type
  - int32
readonly: null
---

# ITabAndSlotGroupData.TabHeightType

Gets or sets the type of tab height.

## Signature

```csharp
System.Int32 TabHeightType {get; set;}
```
## Parameters

None.

## Return Value

Tab height type as defined in swTabSlotFeatureHeightType_e

## Remarks

If you set this property to swTabSlotFeatureHeightType_e:
Blind, then use
ITabAndSlotGroupData::TabHeightValue
to set the tab height.
OffsetFromSurface, then use
ITabAndSlotGroupData::TabOffsetValue
to set the tab offset value as measured from the slot face. Also set
ITabAndSlotGroupData::TabReverseDirection
.
UpToSurface, then the tab height is automatically set to the distance up to the slot face.