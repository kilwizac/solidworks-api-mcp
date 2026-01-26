---
type: method
interface: IBomTableAnnotation
member: GetComponents2
returns: System.Object
parameters:
  -
    name: RowIndex
    type: System.Int32
    description: Row in the BOM table where to get the components; 0-based index
  -
    name: Configuration
    type: System.String
    description: Configuration for which to get components in top-level only BOMs; specify an empty string for parts only and indented BOMs
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IBomTableAnnotation.GetComponentsCount2
  - IBomTableAnnotation.IGetComponents2
keywords:
  - bill
  - materials
  - components
  - see
  - also
  - icomponent2
  - bom
  - table
  - getcomponents2
  - ibomtableannotation
  - annotation
  - components2
  - row
  - index
  - int32
  - configuration
  - string
  - object
  - each
  - vba
  - vb
  - net
---

# IBomTableAnnotation.GetComponents2

Gets the components in the specified row for the specified configuration in this BOM table annotation.

## Signature

```csharp
System.Object GetComponents2( 
   System.Int32
RowIndex
,
   System.String
Configuration
)
```
## Parameters

- `RowIndex` (System.Int32): Row in the BOM table where to get the components; 0-based index
- `Configuration` (System.String): Configuration for which to get components in top-level only BOMs; specify an empty string for parts only and indented BOMs

## Return Value

Array of components in the specified row for the specified configuration

## Examples

- Get Components in Each BOM Table Row (VBA) (Get_Components_in_Each_BOM_Table_Row_VB.htm)
- Get Components in Each BOM Table Row (VB.NET) (Get_Components_in_Each_BOM_Table_Row_Example_VBNET.htm)
- Get Components in Each BOM Table Row (C#) (Get_Components_in_Each_BOM_Table_Row_Example_CSharp.htm)

## See Also

- `IBomTableAnnotation.GetComponentsCount2`
- `IBomTableAnnotation.IGetComponents2`