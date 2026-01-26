---
type: method
interface: IEnumBodies2
member: Next
returns: void
parameters:
  -
    name: Celt
    type: System.Int32
    description: Number of bodies for the bodies enumeration
  -
    name: Rgelt
    type: Body2
    description: Pointer to an array of bodies of size Celt
  -
    name: PceltFetched
    type: System.Int32
    description: Pointer to the number of bodies returned from the list; this value can be less than Celt if you request more bodies than exist, or it can be NULL if no more bodies exist
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
related: []
keywords:
  - bodies
  - see
  - also
  - ibody2
  - next
  - ienumbodies2
  - bodies2
  - celt
  - int32
  - rgelt
  - body2
  - pcelt
  - fetched
  - void
  - enumerate
---

# IEnumBodies2.Next

Gets the next body in the bodies enumeration.

## Signature

```csharp
void Next( 
   System.Int32
Celt
,
   out Body2
Rgelt
,
   out System.Int32
PceltFetched
)
```
## Parameters

- `Celt` (System.Int32): Number of bodies for the bodies enumeration
- `Rgelt` (Body2): Pointer to an array of bodies of size Celt
- `PceltFetched` (System.Int32): Pointer to the number of bodies returned from the list; this value can be less than Celt if you request more bodies than exist, or it can be NULL if no more bodies exist

## Return Value

Unknown.

## Remarks

For use in in-process DLLs only.

## Examples

- Enumerate Bodies (C++) (Enumerate_Bodies_Example_CPlusPlus_COM.htm)