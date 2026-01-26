---
type: method
interface: IEnumDrSections
member: Clone
returns: void
parameters:
  -
    name: Ppenum
    type: EnumDrSections
    description: Pointer to the cloned section views enumeration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
related: []
keywords:
  - clone
  - ienumdrsections
  - dr
  - sections
  - ppenum
  - void
---

# IEnumDrSections.Clone

Clones the section views enumeration.

## Signature

```csharp
void Clone( 
   out EnumDrSections
Ppenum
)
```
## Parameters

- `Ppenum` (EnumDrSections): Pointer to the cloned section views enumeration

## Return Value

Unknown.

## Remarks

For use in in-process DLLs only.