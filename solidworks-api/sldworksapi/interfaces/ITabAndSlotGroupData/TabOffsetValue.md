---
type: property
interface: ITabAndSlotGroupData
member: TabOffsetValue
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - taboffsetvalue
  - itabandslotgroupdata
  - tab
  - slot
  - group
  - data
  - offset
  - value
  - double
readonly: null
---

# ITabAndSlotGroupData.TabOffsetValue

Gets or sets the tab offset value.

## Signature

```csharp
System.Double TabOffsetValue {get; set;}
```
## Parameters

None.

## Return Value

Tab offset value

## Remarks

This property is:
measured from
ITabAndSlotGroupData::SelectionSlotFace
-and-
valid only if
ITabAndSlotGroupData::TabHeightType
is set to
swTabSlotFeatureHeightType_e
.OffsetFromSurface.