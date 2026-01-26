---
type: property
interface: ITabAndSlotGroupData
member: TabFace
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - tabface
  - itabandslotgroupdata
  - tab
  - slot
  - group
  - data
  - face
  - object
readonly: null
---

# ITabAndSlotGroupData.TabFace

Gets or sets the tab face that defines the tab thickness.

## Signature

```csharp
System.Object TabFace {get; set;}
```
## Parameters

None.

## Return Value

IFace2

## Remarks

The value of this property is a planar face that is shared with
ITabAndSlotGroupData::SelectionTabEdge
of thickness,
ITabAndSlotGroupData::TabThickness
.