---
type: method
interface: IModelDoc2
member: IInsertGtol
returns: Gtol
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.InsertGtol
keywords:
  - geometric
  - tolerancing
  - see
  - also
  - igtol
  - insert
  - iinsertgtol
  - imodeldoc2
  - model
  - doc2
  - gtol
---

# IModelDoc2.IInsertGtol

Creates a new geometric tolerance symbol (GTol) in this document.

## Signature

```csharp
Gtol IInsertGtol()
```
## Parameters

None.

## Return Value

Newly created GTol

## Remarks

The leader attachment points for the newly created GTol object come from the selections made before calling this method. The initial location of the symbol is near the selection location. If there are no selections, then the GTol does not have a leader, is free standing, and is initially at the origin of the model or drawing.
This method creates an empty symbol. To fill in the text and symbols of this GTol, use the pointer
returned by this method to access the various get and set methods of the
IGTol
interface, such as
IGtol::SetFrameSymbols2
and
IGtol::SetFrameValues
. Use
IGtol::GetAnnotation
to retrieve the
IAnnotation
object.

## See Also

- `IModelDoc2.InsertGtol`