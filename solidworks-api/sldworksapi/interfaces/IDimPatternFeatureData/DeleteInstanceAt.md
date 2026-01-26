---
type: method
interface: IDimPatternFeatureData
member: DeleteInstanceAt
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index indicating where to delete this pattern instance in the pattern table and pattern; -1 indicates to delete this pattern instance at the end of the pattern table and pattern (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IDimPatternFeatureData.AddInstanceAt
keywords:
  - deleteinstanceat
  - idimpatternfeaturedata
  - dim
  - pattern
  - feature
  - data
  - delete
  - instance
  - index
  - int32
  - boolean
  - instances
  - dimensions
  - variable
  - vb
  - net
  - vba
---

# IDimPatternFeatureData.DeleteInstanceAt

Deletes the specified pattern instance in this variable pattern feature.

## Signature

```csharp
System.Boolean DeleteInstanceAt( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): 0-based index indicating where to delete this pattern instance in the pattern table and pattern; -1 indicates to delete this pattern instance at the end of the pattern table and pattern (see Remarks )

## Return Value

True if the pattern instance is deleted, false if not

## Remarks

Use
IDimPatternFeatureData::GetInstanceCount
to get the number of pattern instances.

## Examples

- Delete Instances and Dimensions in Variable Pattern Feature (C#) (Delete_Instances_and_Dimensions_in_Variable_Pattern_Feature_Example_CSharp.htm)
- Delete Instances and Dimensions in Variable Pattern Feature (VB.NET) (Delete_Instances_and_Dimensions_in_Variable_Pattern_Feature_Example_VBNET.htm)
- Delete Instances and Dimensions in Variable Pattern Feature (VBA) (Delete_Instances_and_Dimensions_in_Variable_Pattern_Feature_Example_VB.htm)

## See Also

- `IDimPatternFeatureData.AddInstanceAt`