---
type: method
interface: IFace2
member: ICreateSheetBodyByFaceExtension
returns: Body2
parameters:
  -
    name: BoxLowIn
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z)
  -
    name: BoxHighIn
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z)
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
  - IFace2.CreateSheetBodyByFaceExtension
  - IFace2.ICreateSheetBody
  - IModeler.CreateBodiesFromSheets2
  - IModeler.ICreateBodiesFromSheets2
keywords:
  - sheet
  - bodies
  - icreatesheetbodybyfaceextension
  - iface2
  - face2
  - create
  - body
  - face
  - extension
  - box
  - low
  - double
  - high
  - body2
---

# IFace2.ICreateSheetBodyByFaceExtension

Creates a sheet body by extending the face.

## Signature

```csharp
Body2 ICreateSheetBodyByFaceExtension( 
   ref System.Double
BoxLowIn
,
   ref System.Double
BoxHighIn
)
```
## Parameters

- `BoxLowIn` (System.Double): Pointer to an array of 3 doubles (x,y,z)
- `BoxHighIn` (System.Double): Pointer to an array of 3 doubles (x,y,z)

## Return Value

Pointer to the newly created sheet body

## See Also

- `IBody2.DeleteFacesMakeSheetBodies`
- `IBody2.IDeleteFacesMakeSheetBodies`
- `IBody2.IDeleteFacesMakeSheetBodiesCount`
- `IFace2.CreateSheetBody`
- `IFace2.CreateSheetBodyByFaceExtension`
- `IFace2.ICreateSheetBody`
- `IModeler.CreateBodiesFromSheets2`
- `IModeler.ICreateBodiesFromSheets2`