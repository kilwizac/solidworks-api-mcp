---
type: method
interface: IDimPatternFeatureData
member: GetTableRowIndex
returns: System.Int32
parameters:
  -
    name: InstanceName
    type: System.String
    description: Name of the pattern instance (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IDimPatternFeatureData.GetInstanceIndex
keywords:
  - gettablerowindex
  - idimpatternfeaturedata
  - dim
  - pattern
  - feature
  - data
  - table
  - row
  - index
  - instance
  - name
  - string
  - int32
  - insert
  - variable
  - vb
  - net
  - vba
---

# IDimPatternFeatureData.GetTableRowIndex

Gets the index of the specified pattern instance in the pattern table in this variable pattern feature.

## Signature

```csharp
System.Int32 GetTableRowIndex( 
   System.String
InstanceName
)
```
## Parameters

- `InstanceName` (System.String): Name of the pattern instance (see Remarks )

## Return Value

Index in the pattern table for InstanceName (see Remarks )

## Remarks

Use
IDimPatternFeatureData::GetInstanceNameByIndex
to get InstanceName.
NOTE
: The index returned by this method is a value in a row in the
Instance
column in the pattern table.

## Examples

- Insert Variable Pattern Feature (C#) (Insert_Advanced_Variable_Pattern_Feature_Example_CSharp.htm)
- Insert Variable Pattern Feature (VB.NET) (Insert_Advanced_Variable_Pattern_Feature_Example_VBNET.htm)
- Insert Variable Pattern Feature (VBA) (Insert_Advanced_Variable_Pattern_Feature_Example_VB.htm)

## See Also

- `IDimPatternFeatureData.GetInstanceIndex`