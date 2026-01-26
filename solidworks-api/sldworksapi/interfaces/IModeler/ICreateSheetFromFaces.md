---
type: method
interface: IModeler
member: ICreateSheetFromFaces
returns: Body2
parameters:
  -
    name: FaceCount
    type: System.Int32
    description: Number of connected faces
  -
    name: FaceArr
    type: Face2
    description: Array of connected faces
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IFace2.CreateSheetBody
  - IFace2.CreateSheetBodyByFaceExtension
  - IFace2.ICreateSheetBody
  - IFace2.ICreateSheetBodyByFaceExtension
  - IModeler.CreateSheetFromFaces
  - IModeler.CreateSheetFromSurface
  - IModeler.ICreateSheetFromSurface2
keywords:
  - sheet
  - bodies
  - see
  - also
  - ibody2
  - icreatesheetfromfaces
  - imodeler
  - modeler
  - create
  - faces
  - face
  - count
  - int32
  - arr
  - face2
  - body2
---

# IModeler.ICreateSheetFromFaces

Creates a sheet (surface) body from connected faces.

## Signature

```csharp
Body2 ICreateSheetFromFaces( 
   System.Int32
FaceCount
,
   ref Face2
FaceArr
)
```
## Parameters

- `FaceCount` (System.Int32): Number of connected faces
- `FaceArr` (Face2): Array of connected faces

## Return Value

Newly created body

## See Also

- `IFace2.CreateSheetBody`
- `IFace2.CreateSheetBodyByFaceExtension`
- `IFace2.ICreateSheetBody`
- `IFace2.ICreateSheetBodyByFaceExtension`
- `IModeler.CreateSheetFromFaces`
- `IModeler.CreateSheetFromSurface`
- `IModeler.ICreateSheetFromSurface2`