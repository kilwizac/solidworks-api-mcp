---
type: property
interface: IDesignTable
member: EnableCellDropdownLists
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - enablecelldropdownlists
  - idesigntable
  - design
  - table
  - enable
  - cell
  - dropdown
  - lists
  - boolean
  - disable
  - drop
  - down
  - vb
  - net
  - vba
readonly: null
---

# IDesignTable.EnableCellDropdownLists

Gets or sets whether to enable cell drop-down lists in the design table.

## Signature

```csharp
System.Boolean EnableCellDropdownLists {get; set;}
```
## Parameters

None.

## Return Value

True to enable cell drop-down lists in the design table, false to disable them

## Remarks

You must call:
IDesignTable::EditFeature
before setting this property.
IDesignTable::UpdateFeature
after setting this property.

## Examples

- Disable Cell Drop-down Lists in Design Table (C#) (Disable_Cell_Drop-down_Lists_in_Design_Table_Example_CSharp.htm)
- Disable Cell Drop-down Lists in Design Table (VB.NET) (Disable_Cell_Drop-down_Lists_in_Design_Table_Example_VBNET.htm)
- Disable Cell Drop-down Lists in Design Table (VBA) (Disable_Cell_Drop-down_Lists_in_Design_Table_Example_VB.htm)