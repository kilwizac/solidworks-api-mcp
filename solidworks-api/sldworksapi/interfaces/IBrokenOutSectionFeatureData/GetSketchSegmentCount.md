---
type: method
interface: IBrokenOutSectionFeatureData
member: GetSketchSegmentCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related:
  - IBrokenOutSectionFeatureData.SketchSegment
keywords:
  - getsketchsegmentcount
  - ibrokenoutsectionfeaturedata
  - broken
  - out
  - section
  - feature
  - data
  - sketch
  - segment
  - count
  - int32
  - vba
  - vb
  - net
---

# IBrokenOutSectionFeatureData.GetSketchSegmentCount

Gets the number of sketch segments that form the border of this broken-out section feature.

## Signature

```csharp
System.Int32 GetSketchSegmentCount()
```
## Parameters

None.

## Return Value

Number of sketch segments

## Remarks

Before calling this method you must set
IBrokenOutSectionFeatureData::EditSketch
to true.
Call this method to set the Count parameter of
IBrokenOutSectionFeatureData::IGetSketchSegment
.

## Examples

- Get Broken-Out Section Feature Data (VBA) (Get_Broken_Out_Section_Feature_Data_Example_VB.htm)
- Get Broken-Out Section Feature Data (VB.NET) (Get_Broken_Out_Section_Feature_Data_Example_VBNET.htm)
- Get Broken-Out Section Feature Data (C#) (Get_Broken_Out_Section_Feature_Data_Example_CSharp.htm)

## See Also

- `IBrokenOutSectionFeatureData.SketchSegment`