---
type: method
interface: IOneBendFeatureData
member: IFlatPatternSketchSegments2
returns: SketchSegment
parameters:
  -
    name: SegmentsCount
    type: System.Int32
    description: Number of sketch segments (see Remarks )
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
  - iflatpatternsketchsegments2
  - ionebendfeaturedata
  - one
  - bend
  - feature
  - data
  - sketch
  - segments2
  - segments
  - count
  - int32
  - segment
---

# IOneBendFeatureData.IFlatPatternSketchSegments2

Gets the sketch segments and bend lines for this bend.

## Signature

```csharp
SketchSegment IFlatPatternSketchSegments2( 
   System.Int32
SegmentsCount
)
```
## Parameters

- `SegmentsCount` (System.Int32): Number of sketch segments (see Remarks )

## Return Value

in-process, unmanaged C++: Pointer to an array of ISketchSegment s VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IOneBendFeatureData::GetFlatPatternSketchSegmentCount2
to populate SegmentsCount.
The sketch segments are calculated in the flattened model. Before calling this method, flatten the model either by unsuppressing the flat pattern in the FeatureManager design tree or by calling
IModelDoc2::SetBendState
to set BendState to
swSMBendState_e
.swSMBendStateFlattened.
This property returns the bend lines for older parts that do not have flat patterns.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IOneBendFeatureData.FlatPatternSketchSegments2`