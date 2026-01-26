---
type: method
interface: ISketchHatch
member: GetFace
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - geometry
  - sketches
related:
  - ISketchHatch.IGetFace2
keywords:
  - getface
  - isketchhatch
  - sketch
  - hatch
  - face
  - object
---

# ISketchHatch.GetFace

Gets the face associated with this sketch hatch.

## Signature

```csharp
System.Object GetFace()
```
## Parameters

None.

## Return Value

Face associated with the sketch hatch or null if the operation fails

## Remarks

This method returns the face in the space of the sketch or drawing view. You should not select the returned face. Only use the returned face for getting the geometry of the sketch hatch: loops, edges, equations for the edges, and so on. Do not hold on to the pointer to the face after it is used as the face is transient.

## Examples

- ISketchHatch (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketchHatch)

## See Also

- `ISketchHatch.IGetFace2`