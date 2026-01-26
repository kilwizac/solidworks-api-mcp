---
type: property
interface: ISlotMateFeatureData
member: Constraint
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related: []
keywords:
  - constraint
  - islotmatefeaturedata
  - slot
  - mate
  - feature
  - data
  - int32
readonly: null
---

# ISlotMateFeatureData.Constraint

Gets or sets how to constrain the component in the slot of this slot mate.

## Signature

```csharp
System.Int32 Constraint {get; set;}
```
## Parameters

None.

## Return Value

Constraint option as defined in swSlotMateConstraintOptions_e

## Remarks

If this property is set to swSlotMateConstraintOptions_e:
swSlotMateConstraintOption_Distance, specify the
ISlotMateFeatureData::Distance
from the end of the slot where to place the component axis.
swSlotMateConstraintOption_Percent, specify the distance as a
ISlotMateFeatureData::Percent
of the slot length where to place the component axis.
If this is a slot-to-slot mate, the only valid constraints are:
swSlotMateConstraintOptions_e.swSlotMateConstraintOption_Free
swSlotMateConstraintOptions_e.swSlotMateConstraintOption_Centered
To change the endpoint from which the distance is measured, set
ISlotMateFeatureData::FlipDirection
to true.

## Examples

- ISlotMateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISlotMateFeatureData)