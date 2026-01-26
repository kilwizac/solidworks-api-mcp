---
type: method
interface: IEnumDocuments2
member: Clone
returns: void
parameters:
  -
    name: Ppenum
    type: EnumDocuments2
    description: Pointer to the cloned documents enumeration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
related: []
keywords:
  - clone
  - ienumdocuments2
  - documents2
  - ppenum
  - void
---

# IEnumDocuments2.Clone

Clones the documents enumeration.

## Signature

```csharp
void Clone( 
   out EnumDocuments2
Ppenum
)
```
## Parameters

- `Ppenum` (EnumDocuments2): Pointer to the cloned documents enumeration

## Return Value

Unknown.

## Remarks

For use in in-process DLLs only.