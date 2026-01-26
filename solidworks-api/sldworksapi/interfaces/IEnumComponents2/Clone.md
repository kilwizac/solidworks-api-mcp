---
type: method
interface: IEnumComponents2
member: Clone
returns: void
parameters:
  -
    name: Ppenum
    type: EnumComponents2
    description: Pointer to the cloned components enumeraton
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
related: []
keywords:
  - clone
  - ienumcomponents2
  - components2
  - ppenum
  - void
---

# IEnumComponents2.Clone

Clones the components enumeration.

## Signature

```csharp
void Clone( 
   out EnumComponents2
Ppenum
)
```
## Parameters

- `Ppenum` (EnumComponents2): Pointer to the cloned components enumeraton

## Return Value

Unknown.

## Remarks

For use in in-process DLLs only.