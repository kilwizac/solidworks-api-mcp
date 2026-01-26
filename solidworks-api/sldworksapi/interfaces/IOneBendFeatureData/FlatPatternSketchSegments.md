---
type: property
interface: IOneBendFeatureData
member: FlatPatternSketchSegments
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
  - sketches
related:
  - IOneBendFeatureData.GetFlatPatternSketchSegmentCount
  - IOneBendFeatureData.IFlatPatternSketchSegments
keywords:
  - flatpatternsketchsegments
  - ionebendfeaturedata
  - one
  - bend
  - feature
  - data
  - flat
  - pattern
  - sketch
  - segments
  - object
  - names
  - vba
  - vb
  - net
readonly: true
---

# IOneBendFeatureData.FlatPatternSketchSegments

Obsolete. Superseded by IOneBendFeatureData::FlatPatternSketchSegments2.

## Signature

```csharp
System.Object FlatPatternSketchSegments {get;}
```
## Parameters

None.

## Return Value

Array of ISketchSegment s

## Remarks

The sketch segments are calculated in the flattened model. Before calling this method, flatten the model either by un-suppressing the flat pattern in the FeatureManager design tree or by calling
IModelDoc2::SetBendState
to set BendState to
swSMBendState_e
.swSMBendStateFlattened.
See
Accessing Selections that Define Features
for additional details on using this method.

## Examples

- Get Names of Sketch Segments (VBA) (Get_Names_of_Sketch_Segments_Example_VB.htm)
- Get Names of Sketch Segments (VB.NET) (Get_Names_of_Sketch_Segments_Example_VBNET.htm)
- Get Names of Sketch Segments (C#) (Get_Names_of_Sketch_Segments_Example_CSharp.htm)

## See Also

- `IOneBendFeatureData.GetFlatPatternSketchSegmentCount`
- `IOneBendFeatureData.IFlatPatternSketchSegments`