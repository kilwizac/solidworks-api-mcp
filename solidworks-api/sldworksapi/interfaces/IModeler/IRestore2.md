---
type: method
interface: IModeler
member: IRestore2
returns: Body2
parameters:
  -
    name: StreamIn
    type: System.Object
    description: IStream interface for storage inside the SOLIDWORKS document
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IModeler.Restore
keywords:
  - temporary
  - bodies
  - stream
  - see
  - also
  - ibody2
  - irestore2
  - imodeler
  - modeler
  - restore2
  - object
  - body2
---

# IModeler.IRestore2

Restores a temporary body object from the specified stream.

## Signature

```csharp
Body2 IRestore2( 
   System.Object
StreamIn
)
```
## Parameters

- `StreamIn` (System.Object): IStream interface for storage inside the SOLIDWORKS document

## Return Value

Temporary body

## Remarks

You can use a temporary body object for display purposes. You can generate temporary bodies using such methods as
IModeler::CreateBodyFromFaces2
or
IModeler::ICreateBodyFromFaces3
. Temporary bodies are not saved with the document unless you explicitly save them using
IBody2::Save
or
IBody2::ISave
.
You can obtain the StreamIn object by calling
IModelDoc2::IGet3rdPartyStorage
and by specifying the stream name that was used during the body save operation.

## See Also

- `IModeler.Restore`