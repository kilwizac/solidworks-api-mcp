---
type: method
interface: ISketchHatch
member: IGetFace2
returns: Face2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - geometry
  - sketches
related:
  - ISketchHatch.GetFace
keywords:
  - igetface2
  - isketchhatch
  - sketch
  - hatch
  - face2
---

# ISketchHatch.IGetFace2

Gets the face associated with this sketch hatch.

## Signature

```csharp
Face2 IGetFace2()
```
## Parameters

None.

## Return Value

Face associated with the sketch hatch or null if the operation fails

## Remarks

You should not select the returned face. Only use the returned face for getting the geometry of the sketch hatch: loops, edges, equations for the edges, and so on. Do not hold onto the pointer the face after it is used as the face is transient.

## See Also

- `ISketchHatch.GetFace`