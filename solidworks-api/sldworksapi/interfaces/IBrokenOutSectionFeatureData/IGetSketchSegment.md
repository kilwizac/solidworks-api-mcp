---
type: method
interface: IBrokenOutSectionFeatureData
member: IGetSketchSegment
returns: SketchSegment
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of sketch segments
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related:
  - IBrokenOutSectionFeatureData.SketchSegment
keywords:
  - igetsketchsegment
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
---

# IBrokenOutSectionFeatureData.IGetSketchSegment

Gets the sketch segments that form the border of this broken-out section feature.

## Signature

```csharp
SketchSegment IGetSketchSegment( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of sketch segments

## Return Value

In-process, unmanaged C++: Pointer to an array of ISketchSegment s VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

To get the sketch segments that form the border of this broken-out section feature:
Set the property
IBrokenOutSectionFeatureData::EditSketch
to true.
Call
IBrokenOutSectionFeatureData::GetSketchSegmentCount
to set the value of this method's Count parameter.
Call this method.

## See Also

- `IBrokenOutSectionFeatureData.SketchSegment`