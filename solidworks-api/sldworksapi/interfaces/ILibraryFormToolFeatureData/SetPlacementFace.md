---
type: method
interface: ILibraryFormToolFeatureData
member: SetPlacementFace
returns: void
parameters:
  -
    name: Face
    type: System.Object
    description: IFace2
  -
    name: PickPoint
    type: System.Object
    description: IMathPoint
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ILibraryFormToolFeatureData.PlacementFace
keywords:
  - setplacementface
  - ilibraryformtoolfeaturedata
  - library
  - form
  - tool
  - feature
  - data
  - placement
  - face
  - object
  - pick
  - point
  - void
---

# ILibraryFormToolFeatureData.SetPlacementFace

Specifies the face and pickpoint where the forming tool is inserted.

## Signature

```csharp
void SetPlacementFace( 
   System.Object
Face
,
   System.Object
PickPoint
)
```
## Parameters

- `Face` (System.Object): IFace2
- `PickPoint` (System.Object): IMathPoint

## Return Value

Unknown.

## Examples

- ILibraryFormToolFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ILibraryFormToolFeatureData)

## See Also

- `ILibraryFormToolFeatureData.PlacementFace`