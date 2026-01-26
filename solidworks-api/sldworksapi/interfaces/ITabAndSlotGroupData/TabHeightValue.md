---
type: property
interface: ITabAndSlotGroupData
member: TabHeightValue
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - tabheightvalue
  - itabandslotgroupdata
  - tab
  - slot
  - group
  - data
  - height
  - value
  - double
readonly: null
---

# ITabAndSlotGroupData.TabHeightValue

Gets or sets the tab height.

## Signature

```csharp
System.Double TabHeightValue {get; set;}
```
## Parameters

None.

## Return Value

Tab height

## Remarks

This property is valid only if
ITabAndSlotGroupData::TabHeightType
is set to
swTabSlotFeatureHeightType_e
.Blind.
See the Remarks for ITabAndSlotGroupData::TabHeightType.