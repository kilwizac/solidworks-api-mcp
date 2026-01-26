---
type: property
interface: IBrokenOutSectionFeatureData
member: SketchSegment
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related:
  - IBrokenOutSectionFeatureData.GetSketchSegmentCount
keywords:
  - sketchsegment
  - ibrokenoutsectionfeaturedata
  - broken
  - out
  - section
  - feature
  - data
  - sketch
  - segment
  - object
  - vba
  - vb
  - net
readonly: true
---

# IBrokenOutSectionFeatureData.SketchSegment

Gets the sketch segments that form the border of this broken-out section feature.

## Signature

```csharp
System.Object SketchSegment {get;}
```
## Parameters

None.

## Return Value

Array of ISketchSegment s

## Remarks

To get the sketch segments that form the border of this broken-out section feature:
Set the property
IBrokenOutSectionFeatureData::EditSketch
to true.
Call this property.

## Examples

- Get Broken-Out Section Feature Data (VBA) (Get_Broken_Out_Section_Feature_Data_Example_VB.htm)
- Get Broken-Out Section Feature Data (VB.NET) (Get_Broken_Out_Section_Feature_Data_Example_VBNET.htm)
- Get Broken-Out Section Feature Data (C#) (Get_Broken_Out_Section_Feature_Data_Example_CSharp.htm)

## See Also

- `IBrokenOutSectionFeatureData.GetSketchSegmentCount`