---
type: method
interface: IEnumLoops2
member: Next
returns: void
parameters:
  -
    name: Celt
    type: System.Int32
    description: Number of loops for the loops enumeration
  -
    name: Rgelt
    type: Loop2
    description: Pointer to an array of loops of size Celt
  -
    name: PceltFetched
    type: System.Int32
    description: Pointer to the number of loops returned from the list; this value can be less than celt if you ask for more loops than exist, or it can be NULL if no more loops exist
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
related: []
keywords:
  - next
  - ienumloops2
  - loops2
  - celt
  - int32
  - rgelt
  - loop2
  - pcelt
  - fetched
  - void
---

# IEnumLoops2.Next

Gets the next loop in the loops enumeration.

## Signature

```csharp
void Next( 
   System.Int32
Celt
,
   out Loop2
Rgelt
,
   out System.Int32
PceltFetched
)
```
## Parameters

- `Celt` (System.Int32): Number of loops for the loops enumeration
- `Rgelt` (Loop2): Pointer to an array of loops of size Celt
- `PceltFetched` (System.Int32): Pointer to the number of loops returned from the list; this value can be less than celt if you ask for more loops than exist, or it can be NULL if no more loops exist

## Return Value

Unknown.

## Remarks

For use in in-process DLLs only.