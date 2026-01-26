---
type: property
interface: ITabAndSlotGroupData
member: Offset
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - offset
  - itabandslotgroupdata
  - tab
  - slot
  - group
  - data
  - boolean
  - itabandslotfeaturedata
readonly: null
---

# ITabAndSlotGroupData.Offset

Gets or sets whether to offset the tabs/slots from the edge of the model.

## Signature

```csharp
System.Boolean Offset {get; set;}
```
## Parameters

None.

## Return Value

True to offset the tabs/slots, false to not

## Remarks

If you set this property to true, also set:
ITabAndSlotGroupData::D1OffsetFromStart
ITabAndSlotGroupData::D2OffsetFromEnd

## Examples

- ITabAndSlotFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ITabAndSlotFeatureData)