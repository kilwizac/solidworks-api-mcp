---
type: method
interface: IDimPatternFeatureData
member: SetInstanceDimensionValue
returns: System.String
parameters:
  -
    name: TableRowIndex
    type: System.Int32
    description: Index of the pattern instance in the pattern table (see Remarks )
  -
    name: ControlDimName
    type: System.String
    description: Name of the controlling dimension of the pattern instance (see Remarks )
  -
    name: NewValue
    type: System.Double
    description: New value for the pattern dimension
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - features
related:
  - IDimPatternFeatureData.GetInstanceDimensionName
keywords:
  - setinstancedimensionvalue
  - idimpatternfeaturedata
  - dim
  - pattern
  - feature
  - data
  - instance
  - dimension
  - value
  - table
  - row
  - index
  - int32
  - control
  - name
  - string
  - new
  - double
  - delete
  - insert
  - instances
  - variable
  - vb
  - net
  - vba
---

# IDimPatternFeatureData.SetInstanceDimensionValue

Sets a new value for the pattern dimension of the specified pattern instance in this variable pattern feature.

## Signature

```csharp
System.String SetInstanceDimensionValue( 
   System.Int32
TableRowIndex
,
   System.String
ControlDimName
,
   System.Double
NewValue
)
```
## Parameters

- `TableRowIndex` (System.Int32): Index of the pattern instance in the pattern table (see Remarks )
- `ControlDimName` (System.String): Name of the controlling dimension of the pattern instance (see Remarks )
- `NewValue` (System.Double): New value for the pattern dimension

## Return Value

If a new value for the pattern dimension is... Then Return Value is an... Set Empty string indicating success Not set Error string

## Remarks

Use:
IDimPatternFeatureData::GetTableRowIndex
to get TableRowIndex.
IDimPatternFeatureData::GetControllingDimensionName
to get ControlDimName.

## Examples

- Delete and Insert Instances in Variable Pattern Feature (C#) (Delete_and_Insert_Instances_in_Variable_Pattern_Feature_Example_CSharp.htm)
- Delete and Insert Instances in Variable Pattern Feature (VB.NET) (Delete_and_Insert_Instances_in_Variable_Pattern_Feature_Example_VBNET.htm)
- Delete and Insert Instances in Variable Pattern Feature (VBA) (Delete_and_Insert_Instances_in_Variable_Pattern_Feature_Example_VB.htm)

## See Also

- `IDimPatternFeatureData.GetInstanceDimensionName`