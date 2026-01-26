---
type: property
interface: IBomTableSortData
member: ItemGroups
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - itemgroups
  - ibomtablesortdata
  - bom
  - table
  - sort
  - data
  - item
  - groups
  - object
readonly: null
---

# IBomTableSortData.ItemGroups

Gets and sets the categories into which the BOM table rows are grouped.

## Signature

```csharp
System.Object ItemGroups {get; set;}
```
## Parameters

None.

## Return Value

Array of categories as defined in swBomTableSortItemGroup_e or null (see Remarks )

## Remarks

You can set this property in one of two ways:
Specify null to indicate that the BOM table rows are not to be grouped into categories.
Specify an array of
swBomTableSortItemGroup_e
enumerators to indicate that the BOM table rows are to be grouped into categories (assemblies, parts, user defined).
For example, when you set this property to an array of three enumerators in the following order, assemblies are grouped first, parts are grouped next, and user-defined categories are grouped last:
swBomTableSortItemGroup_e
.swBomTableSortItemGroup_Assemblies
swBomTableSortItemGroup_e
.swBomTableSortItemGroup_Parts
swBomTableSortItemGroup_e
.swBomTableSortItemGroup_Other
To eliminate grouping into a category, do not include it in the array.
For example, when you set this property to the following array, no assemblies are grouped, parts are grouped first, and user-defined categories are grouped last:
swBomTableSortItemGroup_e
.swBomTableSortItemGroup_Parts
swBomTableSortItemGroup_e
.swBomTableSortItemGroup_Other

## Examples

- IBomTableSortData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBomTableSortData)