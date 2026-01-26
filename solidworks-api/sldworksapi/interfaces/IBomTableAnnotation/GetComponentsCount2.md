---
type: method
interface: IBomTableAnnotation
member: GetComponentsCount2
returns: System.Int32
parameters:
  -
    name: RowIndex
    type: System.Int32
    description: Row in the BOM table where to get the number of components; 0-based index
  -
    name: Configuration
    type: System.String
    description: Configuration for which to count components in top-level only BOMs; specify an empty string for parts only and indented BOMs
  -
    name: ItemNumber
    type: System.String
    description: Item number of the specified row
  -
    name: PartNumber
    type: System.String
    description: Part number of the specified row
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IBomTableAnnotation.GetComponents2
keywords:
  - bill
  - materials
  - components
  - see
  - also
  - icomponent2
  - bom
  - table
  - getcomponentscount2
  - ibomtableannotation
  - annotation
  - count2
  - row
  - index
  - int32
  - configuration
  - string
  - item
  - number
  - part
  - each
  - vba
  - vb
  - net
---

# IBomTableAnnotation.GetComponentsCount2

Gets the number of components, the item number, and the part number in the specified row for the specified configuration in this BOM table annotation.

## Signature

```csharp
System.Int32 GetComponentsCount2( 
   System.Int32
RowIndex
,
   System.String
Configuration
,
   out System.String
ItemNumber
,
   out System.String
PartNumber
)
```
## Parameters

- `RowIndex` (System.Int32): Row in the BOM table where to get the number of components; 0-based index
- `Configuration` (System.String): Configuration for which to count components in top-level only BOMs; specify an empty string for parts only and indented BOMs
- `ItemNumber` (System.String): Item number of the specified row
- `PartNumber` (System.String): Part number of the specified row

## Return Value

Number of components in the specified row for the specified configuration

## Remarks

Call this method before calling
IBomTableAnnotation::IGetComponents2
to determine the size of the array for that method.

## Examples

- Get Components in Each BOM Table Row (VBA) (Get_Components_in_Each_BOM_Table_Row_VB.htm)
- Get Components in Each BOM Table Row (VB.NET) (Get_Components_in_Each_BOM_Table_Row_Example_VBNET.htm)
- Get Components in Each BOM Table Row (C#) (Get_Components_in_Each_BOM_Table_Row_Example_CSharp.htm)

## See Also

- `IBomTableAnnotation.GetComponents2`