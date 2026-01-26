---
type: property
interface: IBrokenOutSectionFeatureData
member: Depth
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - depth
  - ibrokenoutsectionfeaturedata
  - broken
  - out
  - section
  - feature
  - data
  - double
  - vb
  - net
  - vba
readonly: null
---

# IBrokenOutSectionFeatureData.Depth

Gets or sets the depth of exposure of inner details of the model in the broken-out section feature.

## Signature

```csharp
System.Double Depth {get; set;}
```
## Parameters

None.

## Return Value

Depth exposure of inner details (see Remarks )

## Remarks

Before setting this property, you must set
IBrokenOutSectionFeatureData::EditSketch
to false.
This property is valid only if
IBrokenOutSectionFeatureData::DepthReference
is null and the selection list is empty.

## Examples

- Get Broken-Out Section Feature Data (C#) (Get_Broken_Out_Section_Feature_Data_Example_CSharp.htm)
- Get Broken-Out Section Feature Data (VB.NET) (Get_Broken_Out_Section_Feature_Data_Example_VBNET.htm)
- Get Broken-Out Section Feature Data (VBA) (Get_Broken_Out_Section_Feature_Data_Example_VB.htm)