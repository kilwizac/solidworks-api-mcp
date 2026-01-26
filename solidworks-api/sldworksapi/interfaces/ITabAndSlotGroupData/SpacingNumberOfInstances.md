---
type: property
interface: ITabAndSlotGroupData
member: SpacingNumberOfInstances
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - spacingnumberofinstances
  - itabandslotgroupdata
  - tab
  - slot
  - group
  - data
  - spacing
  - number
  - instances
  - int32
  - itabandslotfeaturedata
readonly: null
---

# ITabAndSlotGroupData.SpacingNumberOfInstances

Gets or sets the number of instances of equally spaced tabs/slots in this group.

## Signature

```csharp
System.Int32 SpacingNumberOfInstances {get; set;}
```
## Parameters

None.

## Return Value

Number of instances

## Remarks

This property is valid only if
ITabAndSlotGroupData::SpacingType
is set to
swTabSlotFeatureSpacingType_e
.EqualSpacing.

## Examples

- ITabAndSlotFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ITabAndSlotFeatureData)