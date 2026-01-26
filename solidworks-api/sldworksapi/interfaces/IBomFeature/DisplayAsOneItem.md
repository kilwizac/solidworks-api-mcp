---
type: property
interface: IBomFeature
member: DisplayAsOneItem
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - features
related:
  - IBomFeature.PartConfigurationGrouping
keywords:
  - displayasoneitem
  - ibomfeature
  - bom
  - feature
  - display
  - one
  - item
  - boolean
readonly: null
---

# IBomFeature.DisplayAsOneItem

Gets or sets whether all of the configurations appear with the same item number if the BOM table contains components that have multiple configurations.

## Signature

```csharp
System.Boolean DisplayAsOneItem {get; set;}
```
## Parameters

None.

## Return Value

True if different configurations are displayed as the same item number, false if not

## Remarks

This property corresponds to the
Part Configuration Grouping
> Display as one item number
check box in the
Bill of Materials
PropertyManager, which displays when you create or edit a BOM table in an assembly drawing.
This property applies to top-level only BOM tables. Use
IBomFeature::TableType
to determine the BOM table type.

## Examples

- IBomFeature (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBomFeature)

## See Also

- `IBomFeature.PartConfigurationGrouping`