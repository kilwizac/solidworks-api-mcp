---
type: property
interface: ITabAndSlotGroupData
member: Spacing
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - spacing
  - itabandslotgroupdata
  - tab
  - slot
  - group
  - data
  - double
readonly: null
---

# ITabAndSlotGroupData.Spacing

Gets or sets the spacing between tabs/slots.

## Signature

```csharp
System.Double Spacing {get; set;}
```
## Parameters

None.

## Return Value

Spacing between tabs

## Remarks

This property is valid only if
ITabAndSlotGroupData::SpacingType
is set to
swTabSlotFeatureSpacingType_e
.SpacingLength.
The value of this property drives the number of instances.