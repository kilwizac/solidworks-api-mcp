---
type: method
interface: IModeler
member: CreateSheetFromFaces
returns: Body2
parameters:
  -
    name: FaceArr
    type: System.Object
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
  - IModeler.CreateSheetFromSurface
  - IModeler.ICreateSheetFromFaces
  - IModeler.ICreateSheetFromSurface2
keywords:
  - sheet
  - bodies
  - see
  - also
  - ibody2
  - createsheetfromfaces
  - imodeler
  - modeler
  - create
  - faces
  - face
  - arr
  - object
  - body2
  - body
  - feature
  - vba
---

# IModeler.CreateSheetFromFaces

Creates a sheet (surface) body from connected faces.

## Signature

```csharp
Body2 CreateSheetFromFaces( 
   System.Object
FaceArr
)
```
## Parameters

- `FaceArr` (System.Object): Array of connected faces

## Return Value

Newly created body

## Examples

- Create Sheet Body From Faces and Feature From Sheet Body (VBA) (Create_Sheet_Body_From_Faces_and_Feature_from_Sheet_Body_Example_VB.htm)

## See Also

- `IFace2.CreateSheetBody`
- `IFace2.CreateSheetBodyByFaceExtension`
- `IFace2.ICreateSheetBody`
- `IFace2.ICreateSheetBodyByFaceExtension`
- `IModeler.CreateSheetFromSurface`
- `IModeler.ICreateSheetFromFaces`
- `IModeler.ICreateSheetFromSurface2`