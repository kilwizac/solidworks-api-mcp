---
type: method
interface: IEnumModelViews
member: Clone
returns: void
parameters:
  -
    name: Ppenum
    type: EnumModelViews
    description: Pointer to the model views enumeration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - clone
  - ienummodelviews
  - model
  - views
  - ppenum
  - void
---

# IEnumModelViews.Clone

Clones the model views enumeration.

## Signature

```csharp
void Clone( 
   out EnumModelViews
Ppenum
)
```
## Parameters

- `Ppenum` (EnumModelViews): Pointer to the model views enumeration

## Return Value

Unknown.

## Remarks

For use in in-process DLLs only.