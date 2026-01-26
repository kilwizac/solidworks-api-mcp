---
type: method
interface: IDimPatternFeatureData
member: GetControllingDimensionName
returns: System.String
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the controlling dimension pattern (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - features
related: []
keywords:
  - getcontrollingdimensionname
  - idimpatternfeaturedata
  - dim
  - pattern
  - feature
  - data
  - controlling
  - dimension
  - name
  - index
  - int32
  - string
  - insert
  - variable
  - vb
  - net
  - vba
---

# IDimPatternFeatureData.GetControllingDimensionName

Gets the name of the controlling dimension for the pattern instance at the specified index in this variable pattern feature.

## Signature

```csharp
System.String GetControllingDimensionName( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the controlling dimension pattern (see Remarks )

## Return Value

Name of the controlling dimension of the pattern instance

## Remarks

Use
IDimPatternFeatureData::GetControllingDimensionCount
to get the number of controlling dimensions.

## Examples

- Insert Variable Pattern Feature (C#) (Insert_Advanced_Variable_Pattern_Feature_Example_CSharp.htm)
- Insert Variable Pattern Feature (VB.NET) (Insert_Advanced_Variable_Pattern_Feature_Example_VBNET.htm)
- Insert Variable Pattern Feature (VBA) (Insert_Advanced_Variable_Pattern_Feature_Example_VB.htm)