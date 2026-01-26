---
type: method
interface: IDimPatternFeatureData
member: GetInstanceNameByIndex
returns: System.String
parameters:
  -
    name: TableRowIndex
    type: System.Int32
    description: 1-based index of the pattern instance in the pattern table (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - getinstancenamebyindex
  - idimpatternfeaturedata
  - dim
  - pattern
  - feature
  - data
  - instance
  - name
  - index
  - table
  - row
  - int32
  - string
  - insert
  - variable
  - vb
  - net
  - vba
---

# IDimPatternFeatureData.GetInstanceNameByIndex

Gets the name of the pattern instance at the specified index in the pattern table in this variable pattern feature.

## Signature

```csharp
System.String GetInstanceNameByIndex( 
   System.Int32
TableRowIndex
)
```
## Parameters

- `TableRowIndex` (System.Int32): 1-based index of the pattern instance in the pattern table (see Remarks )

## Return Value

Name of the pattern instance

## Remarks

Use
IDimPatternFeatureData::GetInstanceCount
to get TableRowIndex.

## Examples

- Insert Variable Pattern Feature (C#) (Insert_Advanced_Variable_Pattern_Feature_Example_CSharp.htm)
- Insert Variable Pattern Feature (VB.NET) (Insert_Advanced_Variable_Pattern_Feature_Example_VBNET.htm)
- Insert Variable Pattern Feature (VBA) (Insert_Advanced_Variable_Pattern_Feature_Example_VB.htm)