---
type: method
interface: IBomTableAnnotation
member: GetModelPathNamesCount
returns: System.Int32
parameters:
  -
    name: RowIndex
    type: System.Int32
    description: Row in the BOM table; 0-based index
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IBomTableAnnotation.GetModelPathNames
keywords:
  - bill
  - materials
  - models
  - getmodelpathnamescount
  - ibomtableannotation
  - bom
  - table
  - annotation
  - model
  - path
  - names
  - count
  - row
  - index
  - int32
  - pathnames
  - vb
  - net
  - vba
---

# IBomTableAnnotation.GetModelPathNamesCount

Gets the number of model pathnames in the specified row of this BOM table annotation.

## Signature

```csharp
System.Int32 GetModelPathNamesCount( 
   System.Int32
RowIndex
)
```
## Parameters

- `RowIndex` (System.Int32): Row in the BOM table; 0-based index

## Return Value

Number of model pathnames in the specified row

## Remarks

Call this method before calling
IBomTableAnnotation::IGetModelPathNames
to determine the size of the array for that method.

## Examples

- Get Model Pathnames in BOM Table (C#) (Get_Model_Path_Names_in_BOM_Table_Example_CSharp.htm)
- Get Model Pathnames in BOM Table (VB.NET) (Get_Model_Path_Names_in_BOM_Table_Example_VBNET.htm)
- Get Model Pathnames in BOM Table (VBA) (Get_Model_Path_Names_in_BOM_Table_Example_VB.htm)

## See Also

- `IBomTableAnnotation.GetModelPathNames`