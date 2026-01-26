---
type: method
interface: IFace2
member: SetFaceId
returns: void
parameters:
  -
    name: IdIn
    type: System.Int32
    description: Face ID
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IFace2.RemoveFaceId
keywords:
  - id
  - face
  - see
  - also
  - iface2
  - setfaceid
  - face2
  - int32
  - void
---

# IFace2.SetFaceId

Sets the face ID on an imported body.

## Signature

```csharp
void SetFaceId( 
   System.Int32
IdIn
)
```
## Parameters

- `IdIn` (System.Int32): Face ID

## Return Value

Unknown.

## Remarks

SOLIDWORKS uses face IDs to track specific faces of imported bodies (for example, IGES imports).
Prior to setting a face ID, you should examine all faces in the model to
get their face IDs
, if any, to ensure that the face ID you are setting is unique to the model.
Face IDs are saved with the document, but face IDs are removed whenever the document is rebuilt. Typically you assign face IDs to a read-only copy of the finalized model.
Any third-party application can change a face ID. The intent is that you assign face IDs so that you can refer to those faces within your application.
To store data with a face, use the
IAttribute
object.

## See Also

- `IFace2.RemoveFaceId`