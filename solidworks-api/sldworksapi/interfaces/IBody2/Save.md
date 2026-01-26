---
type: method
interface: IBody2
member: Save
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
  - IBody2.ISave
  - IModeler.IRestore2
  - IModeler.Restore
keywords:
  - save
  - ibody2
  - body2
  - stream
  - object
  - void
---

# IBody2.Save

Saves this body.

## Signature

```csharp
void Save( 
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

- `IBody2.ISave`
- `IModeler.IRestore2`
- `IModeler.Restore`