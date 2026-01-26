---
type: method
interface: IEnumModelViews
member: Next
returns: void
parameters:
  -
    name: Celt
    type: System.Int32
    description: Number of model views for the model views enumeration
  -
    name: Rgelt
    type: ModelView
    description: Pointer to an array of model views of size Celt
  -
    name: PceltFetched
    type: System.Int32
    description: Pointer to the number of model views returned from the list; this value can be less than celt if you ask for more model views than exist, or it can be NULL if no more model views exist
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - next
  - ienummodelviews
  - model
  - views
  - celt
  - int32
  - rgelt
  - view
  - pcelt
  - fetched
  - void
---

# IEnumModelViews.Next

Gets the next model view in the model views enumeration.

## Signature

```csharp
void Next( 
   System.Int32
Celt
,
   out ModelView
Rgelt
,
   out System.Int32
PceltFetched
)
```
## Parameters

- `Celt` (System.Int32): Number of model views for the model views enumeration
- `Rgelt` (ModelView): Pointer to an array of model views of size Celt
- `PceltFetched` (System.Int32): Pointer to the number of model views returned from the list; this value can be less than celt if you ask for more model views than exist, or it can be NULL if no more model views exist

## Return Value

Unknown.

## Remarks

For use in in-process DLLs only.