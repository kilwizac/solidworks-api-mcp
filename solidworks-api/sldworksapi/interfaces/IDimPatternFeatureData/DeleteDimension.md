---
type: method
interface: IDimPatternFeatureData
member: DeleteDimension
returns: System.Boolean
parameters:
  -
    name: DimensionColumnName
    type: System.String
    description: Name of the column of dimensions to delete (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - features
related:
  - IDimPatternFeatureData.AddDimension
keywords:
  - deletedimension
  - idimpatternfeaturedata
  - dim
  - pattern
  - feature
  - data
  - delete
  - dimension
  - column
  - name
  - string
  - boolean
  - instances
  - dimensions
  - variable
  - vb
  - net
  - vba
---

# IDimPatternFeatureData.DeleteDimension

Deletes the specified column of dimensions in the pattern table in this variable pattern feature.

## Signature

```csharp
System.Boolean DeleteDimension( 
   System.String
DimensionColumnName
)
```
## Parameters

- `DimensionColumnName` (System.String): Name of the column of dimensions to delete (see Remarks )

## Return Value

True if the column of dimensions is deleted, false if not

## Remarks

The name of a column corresponds to the dimension name and feature name, separated by an @ symbol; e.g.,
D3@Fillet1
.
There are various ways of getting the name of the column of dimensions to delete from a pattern table. For example, you can traverse the features, get the dimensions, and get the names of the dimensions. You can also select a dimension and get its name. See the examples for details.
NOTE:
You cannot delete a column containing the dimensions of a parent sketch or feature.

## Examples

- Delete Instances and Dimensions in Variable Pattern Feature (C#) (Delete_Instances_and_Dimensions_in_Variable_Pattern_Feature_Example_CSharp.htm)
- Delete Instances and Dimensions in Variable Pattern Feature (VB.NET) (Delete_Instances_and_Dimensions_in_Variable_Pattern_Feature_Example_VBNET.htm)
- Delete Instances and Dimensions in Variable Pattern Feature (VBA) (Delete_Instances_and_Dimensions_in_Variable_Pattern_Feature_Example_VB.htm)

## See Also

- `IDimPatternFeatureData.AddDimension`