---
type: method
interface: IDimPatternFeatureData
member: GetInstanceSuppressStateByIndex
returns: System.Boolean
parameters:
  -
    name: TableRowIndex
    type: System.Int32
    description: Index of the pattern instance in the pattern table (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IDimPatternFeatureData.GetInstanceSuppressStateByName
  - IDimPatternFeatureData.SetInstanceSuppressStateByIndex
  - IDimPatternFeatureData.SetInstanceSuppressStateByName
keywords:
  - getinstancesuppressstatebyindex
  - idimpatternfeaturedata
  - dim
  - pattern
  - feature
  - data
  - instance
  - suppress
  - state
  - index
  - table
  - row
  - int32
  - boolean
  - insert
  - variable
  - vb
  - net
  - vba
---

# IDimPatternFeatureData.GetInstanceSuppressStateByIndex

Gets whether the pattern instance at the specified index in the pattern table is suppressed in this variable pattern feature.

## Signature

```csharp
System.Boolean GetInstanceSuppressStateByIndex( 
   System.Int32
TableRowIndex
)
```
## Parameters

- `TableRowIndex` (System.Int32): Index of the pattern instance in the pattern table (see Remarks )

## Return Value

True if the pattern instance is suppressed, false if not

## Remarks

Use
IDimPatternFeatureData::GetTableRowIndex
to get TableRowIndex.

## Examples

- Insert Variable Pattern Feature (C#) (Insert_Advanced_Variable_Pattern_Feature_Example_CSharp.htm)
- Insert Variable Pattern Feature (VB.NET) (Insert_Advanced_Variable_Pattern_Feature_Example_VBNET.htm)
- Insert Variable Pattern Feature (VBA) (Insert_Advanced_Variable_Pattern_Feature_Example_VB.htm)

## See Also

- `IDimPatternFeatureData.GetInstanceSuppressStateByName`
- `IDimPatternFeatureData.SetInstanceSuppressStateByIndex`
- `IDimPatternFeatureData.SetInstanceSuppressStateByName`