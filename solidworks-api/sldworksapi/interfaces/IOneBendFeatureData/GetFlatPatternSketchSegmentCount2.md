---
type: method
interface: IOneBendFeatureData
member: GetFlatPatternSketchSegmentCount2
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related:
  - IOneBendFeatureData.FlatPatternSketchSegments2
keywords:
  - bends
  - flat
  - pattern
  - getflatpatternsketchsegmentcount2
  - ionebendfeaturedata
  - one
  - bend
  - feature
  - data
  - sketch
  - segment
  - count2
  - int32
  - names
  - segments
  - vba
---

# IOneBendFeatureData.GetFlatPatternSketchSegmentCount2

Gets the number of sketch segments, including bend lines, in this bend.

## Signature

```csharp
System.Int32 GetFlatPatternSketchSegmentCount2()
```
## Parameters

None.

## Return Value

Number of sketch segments in this bend

## Remarks

Call this method to populate SegmentsCount in
IOneBendFeatureData::IFlatPatternSketchSegments2
.

## Examples

- Get Names of Sketch Segments (VBA) (Get_Names_of_Sketch_Segments_Example_VB.htm)

## See Also

- `IOneBendFeatureData.FlatPatternSketchSegments2`