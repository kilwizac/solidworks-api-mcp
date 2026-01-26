---
type: method
interface: IEnumEdges
member: Next
returns: void
parameters:
  -
    name: Celt
    type: System.Int32
    description: Number edges for the edges enumeration
  -
    name: Rgelt
    type: Edge
    description: Pointer to an array of edges of size Celt
  -
    name: PceltFetched
    type: System.Int32
    description: Pointer to the number of edges returned from the list; this value can be less than Celt if you ask for more edges than exist, or it can be NULL if no more edges exist.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - geometry
related: []
keywords:
  - next
  - ienumedges
  - edges
  - celt
  - int32
  - rgelt
  - edge
  - pcelt
  - fetched
  - void
---

# IEnumEdges.Next

Gets the next edge in the edges enumeration.

## Signature

```csharp
void Next( 
   System.Int32
Celt
,
   out Edge
Rgelt
,
   out System.Int32
PceltFetched
)
```
## Parameters

- `Celt` (System.Int32): Number edges for the edges enumeration
- `Rgelt` (Edge): Pointer to an array of edges of size Celt
- `PceltFetched` (System.Int32): Pointer to the number of edges returned from the list; this value can be less than Celt if you ask for more edges than exist, or it can be NULL if no more edges exist.

## Return Value

Unknown.

## Remarks

For use in in-process DLLs only.