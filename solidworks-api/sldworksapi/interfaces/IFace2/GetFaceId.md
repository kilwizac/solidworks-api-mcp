---
type: method
interface: IFace2
member: GetFaceId
returns: System.Int32
parameters: []
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
  - getfaceid
  - iface2
  - face2
  - int32
---

# IFace2.GetFaceId

Gets the face ID of an imported body.

## Signature

```csharp
System.Int32 GetFaceId()
```
## Parameters

None.

## Return Value

Face ID

## Remarks

SOLIDWORKS uses face IDs to track specific faces of imported bodies (for example, IGES imports).
Prior to
setting a face ID
, you should examine all faces in the model to get their face IDs, if any, to ensure that the face ID you are setting is unique to the model.
Face IDs are saved with the document, but face IDs are removed whenever the document is rebuilt. Typically you assign face IDs to a read-only copy of the finalized model.
Any third-party application can change a face ID. The intent is that you assign face IDs so that you can refer to those faces within your application.
Use the
IAttribute
object to store data with a face.

## See Also

- `IFace2.RemoveFaceId`