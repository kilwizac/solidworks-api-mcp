---
type: property
interface: IBrokenOutSectionFeatureData
member: EditSketch
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related: []
keywords:
  - editsketch
  - ibrokenoutsectionfeaturedata
  - broken
  - out
  - section
  - feature
  - data
  - edit
  - sketch
  - boolean
  - vb
  - net
  - vba
readonly: null
---

# IBrokenOutSectionFeatureData.EditSketch

Gets or sets whether to place this broken-out section feature in edit sketch mode.

## Signature

```csharp
System.Boolean EditSketch {get; set;}
```
## Parameters

None.

## Return Value

True to place this feature in edit sketch mode, false to not (see Remarks )

## Remarks

To get the sketch segments that circumscribe this broken-out section feature:
Set this property to true.
Call
IBrokenOutSectionFeatureData::SketchSegment
or
IBrokenOutSectionFeatureData::IGetSketchSegment
.
To set the depth or depth reference for this broken-out section feature:
Set this property to false.
Call
IBrokenOutSectionFeatureData::Depth
or
IBrokenOutSectionFeatureData::DepthReference
.

## Examples

- Get Broken-Out Section Feature Data (C#) (Get_Broken_Out_Section_Feature_Data_Example_CSharp.htm)
- Get Broken-Out Section Feature Data (VB.NET) (Get_Broken_Out_Section_Feature_Data_Example_VBNET.htm)
- Get Broken-Out Section Feature Data (VBA) (Get_Broken_Out_Section_Feature_Data_Example_VB.htm)