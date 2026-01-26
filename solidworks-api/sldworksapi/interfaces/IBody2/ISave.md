---
type: method
interface: IBody2
member: ISave
returns: void
parameters:
  -
    name: StreamIn
    type: System.Object
    description: Stream to use for the save
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - file-io
  - geometry
related:
  - IBody2.Save
  - IModeler.IRestore2
  - IModeler.Restore
keywords:
  - isave
  - ibody2
  - body2
  - save
  - stream
  - object
  - void
---

# IBody2.ISave

Saves this body.

## Signature

```csharp
void ISave( 
   System.Object
StreamIn
)
```
## Parameters

- `StreamIn` (System.Object): Stream to use for the save

## Return Value

Unknown.

## Remarks

If you want to save the solid body associated with the document, then save the document.

## See Also

- `IBody2.Save`
- `IModeler.IRestore2`
- `IModeler.Restore`