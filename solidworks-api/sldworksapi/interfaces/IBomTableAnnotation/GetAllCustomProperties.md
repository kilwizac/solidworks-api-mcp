---
type: method
interface: IBomTableAnnotation
member: GetAllCustomProperties
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IBomTableAnnotation.GetColumnCustomProperty
  - IBomTableAnnotation.IGetAllCustomProperties
keywords:
  - bill
  - materials
  - custom
  - properties
  - see
  - also
  - icustompropertymanager
  - getallcustomproperties
  - ibomtableannotation
  - bom
  - table
  - annotation
  - all
  - object
  - available
  - vba
---

# IBomTableAnnotation.GetAllCustomProperties

Gets the list of available custom properties that can be used for a custom properties column in this BOM table annotation.

## Signature

```csharp
System.Object GetAllCustomProperties()
```
## Parameters

None.

## Return Value

Array of strings of available custom properties

## Remarks

To get the number of custom properties, use
IBomTableAnnotation::GetAllCustomPropertiesCount
.
The list of available custom properties includes all of the items in the BOM table, which includes items from the file summary items and file custom properties that have been set.

## Examples

- Get Available Custom Properties for BOM Table (VBA) (Get_Available_Custom_Properties_for_BOM_Table_Example_VB.htm)

## See Also

- `IBomTableAnnotation.GetColumnCustomProperty`
- `IBomTableAnnotation.IGetAllCustomProperties`