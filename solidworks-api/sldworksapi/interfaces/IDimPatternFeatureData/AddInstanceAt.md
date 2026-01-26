---
type: method
interface: IDimPatternFeatureData
member: AddInstanceAt
returns: System.Boolean
parameters:
  -
    name: IsSuppressed
    type: System.Boolean
    description: True to suppress this pattern instance, false to not
  -
    name: Index
    type: System.Int32
    description: 0-based index indicating where to add this pattern instance in the pattern table and pattern; -1 indicates to add this pattern instance to the end of the pattern table and pattern (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IDimPatternFeatureData.DeleteInstanceAt
keywords:
  - addinstanceat
  - idimpatternfeaturedata
  - dim
  - pattern
  - feature
  - data
  - add
  - instance
  - suppressed
  - boolean
  - index
  - int32
  - delete
  - insert
  - instances
  - variable
  - vb
  - net
  - vba
---

# IDimPatternFeatureData.AddInstanceAt

Adds a pattern instance to this variable pattern feature.

## Signature

```csharp
System.Boolean AddInstanceAt( 
   System.Boolean
IsSuppressed
,
   System.Int32
Index
)
```
## Parameters

- `IsSuppressed` (System.Boolean): True to suppress this pattern instance, false to not
- `Index` (System.Int32): 0-based index indicating where to add this pattern instance in the pattern table and pattern; -1 indicates to add this pattern instance to the end of the pattern table and pattern (see Remarks )

## Return Value

True if the pattern instance is added, false if not

## Remarks

Use
IDimPatternFeatureData::GetInstanceCount
to get the number of pattern instances.
By default, this pattern instance inherits the default values of the parent sketch or feature of the variable pattern feature. Use
IDimPatternFeatureData::SetInstanceDimensionValue
to modify this pattern instance's values.

## Examples

- Delete and Insert Instances in Variable Pattern Feature (C#) (Delete_and_Insert_Instances_in_Variable_Pattern_Feature_Example_CSharp.htm)
- Delete and Insert Instances in Variable Pattern Feature (VB.NET) (Delete_and_Insert_Instances_in_Variable_Pattern_Feature_Example_VBNET.htm)
- Delete and Insert Instances in Variable Pattern Feature (VBA) (Delete_and_Insert_Instances_in_Variable_Pattern_Feature_Example_VB.htm)

## See Also

- `IDimPatternFeatureData.DeleteInstanceAt`