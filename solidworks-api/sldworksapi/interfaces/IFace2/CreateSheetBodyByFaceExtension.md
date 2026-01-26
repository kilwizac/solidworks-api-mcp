---
type: method
interface: IFace2
member: CreateSheetBodyByFaceExtension
returns: System.Object
parameters:
  -
    name: BoxLowIn
    type: System.Object
    description: Array of 3 doubles (x,y,z)
  -
    name: BoxHighIn
    type: System.Object
    description: Array of 3 doubles (x,y,z)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.DeleteFacesMakeSheetBodies
  - IBody2.IDeleteFacesMakeSheetBodies
  - IBody2.IDeleteFacesMakeSheetBodiesCount
  - IFace2.CreateSheetBody
  - IFace2.ICreateSheetBody
  - IFace2.ICreateSheetBodyByFaceExtension
  - IModeler.CreateSheetFromFaces
  - IModeler.ICreateSheetFromFaces
keywords:
  - sheet
  - bodies
  - createsheetbodybyfaceextension
  - iface2
  - face2
  - create
  - body
  - face
  - extension
  - box
  - low
  - object
  - high
---

# IFace2.CreateSheetBodyByFaceExtension

Creates a sheet body by extending the face.

## Signature

```csharp
System.Object CreateSheetBodyByFaceExtension( 
   System.Object
BoxLowIn
,
   System.Object
BoxHighIn
)
```
## Parameters

- `BoxLowIn` (System.Object): Array of 3 doubles (x,y,z)
- `BoxHighIn` (System.Object): Array of 3 doubles (x,y,z)

## Return Value

Newly created sheet body

## Remarks

A sheet body is a surface body.

## See Also

- `IBody2.DeleteFacesMakeSheetBodies`
- `IBody2.IDeleteFacesMakeSheetBodies`
- `IBody2.IDeleteFacesMakeSheetBodiesCount`
- `IFace2.CreateSheetBody`
- `IFace2.ICreateSheetBody`
- `IFace2.ICreateSheetBodyByFaceExtension`
- `IModeler.CreateSheetFromFaces`
- `IModeler.ICreateSheetFromFaces`