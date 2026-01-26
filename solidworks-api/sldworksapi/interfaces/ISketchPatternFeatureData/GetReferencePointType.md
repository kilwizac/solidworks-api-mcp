---
type: method
interface: ISketchPatternFeatureData
member: GetReferencePointType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related:
  - ISketchPatternFeatureData.ReferencePoint
keywords:
  - getreferencepointtype
  - isketchpatternfeaturedata
  - sketch
  - pattern
  - feature
  - data
  - reference
  - point
  - type
  - int32
---

# ISketchPatternFeatureData.GetReferencePointType

Gets the type of reference point for this sketch pattern feature.

## Signature

```csharp
System.Int32 GetReferencePointType()
```
## Parameters

None.

## Return Value

Type of reference point: -1 = centroid 0 = closed curve 1 = sketch point 2 = vertex

## Examples

- ISketchPatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketchPatternFeatureData)

## See Also

- `ISketchPatternFeatureData.ReferencePoint`