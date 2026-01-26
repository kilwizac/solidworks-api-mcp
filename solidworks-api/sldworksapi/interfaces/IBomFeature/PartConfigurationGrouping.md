---
type: property
interface: IBomFeature
member: PartConfigurationGrouping
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - features
  - parts
related:
  - IBomFeature.DisplayAsOneItem
  - IBomTableAnnotation.GetComponents2
  - IBomTableAnnotation.GetComponentsCount2
  - IBomTableAnnotation.IGetComponents2
keywords:
  - configuration
  - see
  - also
  - iconfiguration
  - bill
  - materials
  - configurations
  - partconfigurationgrouping
  - ibomfeature
  - bom
  - feature
  - part
  - grouping
  - int32
readonly: null
---

# IBomFeature.PartConfigurationGrouping

Gets and sets the part configuration grouping for this BOM table.

## Signature

```csharp
System.Int32 PartConfigurationGrouping {get; set;}
```
## Parameters

None.

## Return Value

Grouping as defined in swPartConfigurationGroupingOption_e

## Remarks

This property corresponds to the
Part Configuration Grouping
section in the
Bill of Materials
PropertyManager, which displays when you create or edit a BOM table in an assembly drawing.

## See Also

- `IBomFeature.DisplayAsOneItem`
- `IBomTableAnnotation.GetComponents2`
- `IBomTableAnnotation.GetComponentsCount2`
- `IBomTableAnnotation.IGetComponents2`