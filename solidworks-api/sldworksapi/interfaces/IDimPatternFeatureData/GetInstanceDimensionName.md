---
type: method
interface: IDimPatternFeatureData
member: GetInstanceDimensionName
returns: System.String
parameters:
  -
    name: InstanceName
    type: System.String
    description: Name of the pattern instance (see Remarks )
  -
    name: ControllingDimName
    type: System.String
    description: Controlling dimension of the pattern instance (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - features
related:
  - IDimPatternFeatureData.SetInstanceDimensionValue
keywords:
  - getinstancedimensionname
  - idimpatternfeaturedata
  - dim
  - pattern
  - feature
  - data
  - instance
  - dimension
  - name
  - string
  - controlling
  - insert
  - variable
  - vb
  - net
  - vba
---

# IDimPatternFeatureData.GetInstanceDimensionName

Gets the name of the pattern dimension for the pattern instance in this variable pattern feature.

## Signature

```csharp
System.String GetInstanceDimensionName( 
   System.String
InstanceName
,
   System.String
ControllingDimName
)
```
## Parameters

- `InstanceName` (System.String): Name of the pattern instance (see Remarks )
- `ControllingDimName` (System.String): Controlling dimension of the pattern instance (see Remarks )

## Return Value

Name of the pattern dimension

## Remarks

Use..
To get...
IDimPatternFeatureData::GetInstanceNameByIndex
InstanceName
IDimPatternFeatureData::GetControllingDimensionName
ControllingDimName

## Examples

- Insert Variable Pattern Feature (C#) (Insert_Advanced_Variable_Pattern_Feature_Example_CSharp.htm)
- Insert Variable Pattern Feature (VB.NET) (Insert_Advanced_Variable_Pattern_Feature_Example_VBNET.htm)
- Insert Variable Pattern Feature (VBA) (Insert_Advanced_Variable_Pattern_Feature_Example_VB.htm)

## See Also

- `IDimPatternFeatureData.SetInstanceDimensionValue`