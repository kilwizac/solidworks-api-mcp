---
type: property
interface: IOneBendFeatureData
member: FlatPatternSketchSegments2
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related:
  - IOneBendFeatureData.GetFlatPatternSketchSegmentCount2
  - IOneBendFeatureData.IFlatPatternSketchSegments2
keywords:
  - bends
  - flat
  - pattern
  - flatpatternsketchsegments2
  - ionebendfeaturedata
  - one
  - bend
  - feature
  - data
  - sketch
  - segments2
  - object
  - names
  - segments
  - vba
readonly: true
---

# IOneBendFeatureData.FlatPatternSketchSegments2

Gets the sketch segments and bend lines for this bend.

## Signature

```csharp
System.Object FlatPatternSketchSegments2 {get;}
```
## Parameters

None.

## Return Value

Array of ISketchSegment s

## Remarks

The sketch segments are calculated in the flattened model. Before calling this method, flatten the model either by unsuppressing the flat pattern in the FeatureManager design tree or by calling
IModelDoc2::SetBendState
to set BendState to
swSMBendState_e
.swSMBendStateFlattened.
This property returns the bend lines for older parts that do not have flat patterns.
See
Accessing Selections that Define Features
for additional details on using this method.

## Examples

- Get Names of Sketch Segments (VBA) (Get_Names_of_Sketch_Segments_Example_VB.htm)

## See Also

- `IOneBendFeatureData.GetFlatPatternSketchSegmentCount2`
- `IOneBendFeatureData.IFlatPatternSketchSegments2`