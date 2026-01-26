---
type: method
interface: IOneBendFeatureData
member: IFlatPatternSketchSegments
returns: SketchSegment
parameters:
  -
    name: SegmentsCount
    type: System.Int32
    description: Number of sketch segments (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
  - sketches
related:
  - IOneBendFeatureData.FlatPatternSketchSegments
keywords:
  - iflatpatternsketchsegments
  - ionebendfeaturedata
  - one
  - bend
  - feature
  - data
  - flat
  - pattern
  - sketch
  - segments
  - count
  - int32
  - segment
---

# IOneBendFeatureData.IFlatPatternSketchSegments

Obsolete. Superseded by IOneBendFeatureData::IFlatPatternSketchSegments2.

## Signature

```csharp
SketchSegment IFlatPatternSketchSegments( 
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
IOneBendFeatureData::GetFlatPatternSketchSegmentCount
to populate SegmentsCount.
The sketch segments are calculated in the flattened model. Before calling this method, flatten the model either by un-suppressing the flat pattern in the FeatureManager design tree or by calling
IModelDoc2::SetBendState
to set BendState to
swSMBendState_e
.swSMBendStateFlattened.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IOneBendFeatureData.FlatPatternSketchSegments`