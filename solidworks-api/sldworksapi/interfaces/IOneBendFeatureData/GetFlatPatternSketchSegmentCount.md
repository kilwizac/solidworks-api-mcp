---
type: method
interface: IOneBendFeatureData
member: GetFlatPatternSketchSegmentCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
  - sketches
related:
  - IOneBendFeatureData.FlatPatternSketchSegments
keywords:
  - getflatpatternsketchsegmentcount
  - ionebendfeaturedata
  - one
  - bend
  - feature
  - data
  - flat
  - pattern
  - sketch
  - segment
  - count
  - int32
---

# IOneBendFeatureData.GetFlatPatternSketchSegmentCount

Obsolete. Superseded by IOneBendFeatureData::GetFlatPatternSketchSegmentCount2.

## Signature

```csharp
System.Int32 GetFlatPatternSketchSegmentCount()
```
## Parameters

None.

## Return Value

Number of sketch segments

## Remarks

Call this method to populate SegmentsCount in
IOneBendFeatureData::IFlatPatternSketchSegments
.

## See Also

- `IOneBendFeatureData.FlatPatternSketchSegments`