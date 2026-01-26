---
type: method
interface: ILocalSketchPatternFeatureData
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
  - ILocalSketchPatternFeatureData.ReferencePoint
  - ILocalSketchPatternFeatureData.SelectedPoint
keywords:
  - getreferencepointtype
  - ilocalsketchpatternfeaturedata
  - local
  - sketch
  - pattern
  - feature
  - data
  - reference
  - point
  - type
  - int32
  - create
  - driven
  - vb
  - net
  - vba
---

# ILocalSketchPatternFeatureData.GetReferencePointType

Gets the type of reference point of this sketch-driven component pattern feature.

## Signature

```csharp
System.Int32 GetReferencePointType()
```
## Parameters

None.

## Return Value

Type of reference point as defined in swLocalSketchPatternReferencePoint_e ; -1 for default, orgin, or none

## Examples

- Create Local Sketch-driven Pattern (C#) (Create_Local_Sketch-driven_Pattern_Example_CSharp.htm)
- Create Local Sketch-driven Pattern (VB.NET) (Create_Local_Sketch-driven_Pattern_Example_VBNET.htm)
- Create Local Sketch-driven Pattern (VBA) (Create_Local_Sketch-driven_Pattern_Example_VB.htm)

## See Also

- `ILocalSketchPatternFeatureData.ReferencePoint`
- `ILocalSketchPatternFeatureData.SelectedPoint`