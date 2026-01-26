---
type: method
interface: IDrawingDoc
member: DeleteAllCosmeticThreads
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - ICThread
keywords:
  - cosmetic
  - threads
  - see
  - also
  - icosmeticthreadfeaturedata
  - icthread
  - interfaces
  - delete
  - drawings
  - idrawingdoc
  - deleteallcosmeticthreads
  - drawing
  - doc
  - all
  - void
---

# IDrawingDoc.DeleteAllCosmeticThreads

Deletes all cosmetic threads, which do not have callouts, in a drawing of an assembly only.

## Signature

```csharp
void DeleteAllCosmeticThreads()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

This method only deletes cosmetic threads in a drawing of an assembly; this method does not delete cosmetic threads in a drawing of a part.
By default, cosmetic threads are not imported into an drawing of an assembly for performance reasons, but are imported into a drawing of part and belong to the features in the part; thus, they cannot be deleted using this method.
This method also does not delete any cosmetic threads with callouts in a drawing of an assembly.

## See Also

- `ICThread`