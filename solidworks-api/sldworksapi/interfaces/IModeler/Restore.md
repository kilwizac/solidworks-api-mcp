---
type: method
interface: IModeler
member: Restore
returns: System.Object
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
  - IModeler.IRestore2
keywords:
  - temporary
  - bodies
  - stream
  - see
  - also
  - ibody2
  - restore
  - imodeler
  - modeler
  - object
---

# IModeler.Restore

Restores a temporary body object from the specified stream.

## Signature

```csharp
System.Object Restore( 
   System.Object
StreamIn
)
```
## Parameters

- `StreamIn` (System.Object): IStream interface for storage inside the SOLIDWORKS document

## Return Value

Unknown.

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

- `IModeler.IRestore2`