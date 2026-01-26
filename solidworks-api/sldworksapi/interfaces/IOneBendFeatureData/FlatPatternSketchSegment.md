---
type: property
interface: IOneBendFeatureData
member: FlatPatternSketchSegment
returns: SketchSegment
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
  - sketches
related: []
keywords:
  - flatpatternsketchsegment
  - ionebendfeaturedata
  - one
  - bend
  - feature
  - data
  - flat
  - pattern
  - sketch
  - segment
readonly: true
---

# IOneBendFeatureData.FlatPatternSketchSegment

Obsolete. Superseded by IOneBendFeatureData::FlatPatternSketchSegments.

## Signature

```csharp
SketchSegment FlatPatternSketchSegment {get;}
```
## Parameters

None.

## Return Value

Sketch segment for this bend

## Remarks

The sketch segment is not calculated until the part is unfolded through the user interface or by
IModelDoc2::SetBendState
with BendState of swSMBendStateFlattened.
See
Accessing Selections that Define Features
for additional details on using this method.