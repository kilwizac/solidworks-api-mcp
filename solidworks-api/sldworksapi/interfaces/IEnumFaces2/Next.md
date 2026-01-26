---
type: method
interface: IEnumFaces2
member: Next
returns: void
parameters:
  -
    name: Celt
    type: System.Int32
    description: Number of faces for the faces enumeration
  -
    name: Rgelt
    type: Face2
    description: Pointer to an array of faces of size Celt
  -
    name: PceltFetched
    type: System.Int32
    description: Pointer to the number of faces returned from the list; this value can be less than Celt if you asked for more faces than exist, or it can be NULL if no more faces exist
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - geometry
related: []
keywords:
  - next
  - ienumfaces2
  - faces2
  - celt
  - int32
  - rgelt
  - face2
  - pcelt
  - fetched
  - void
---

# IEnumFaces2.Next

Gets the next face in the faces enumeration.

## Signature

```csharp
void Next( 
   System.Int32
Celt
,
   out Face2
Rgelt
,
   out System.Int32
PceltFetched
)
```
## Parameters

- `Celt` (System.Int32): Number of faces for the faces enumeration
- `Rgelt` (Face2): Pointer to an array of faces of size Celt
- `PceltFetched` (System.Int32): Pointer to the number of faces returned from the list; this value can be less than Celt if you asked for more faces than exist, or it can be NULL if no more faces exist

## Return Value

Unknown.

## Remarks

For use in in-process DLLs only.