---
type: method
interface: IEnumDrSections
member: Next
returns: void
parameters:
  -
    name: Celt
    type: System.Int32
    description: Number of section views for the section views enumeration
  -
    name: Rgelt
    type: DrSection
    description: Pointer to an array of section views of size Celt
  -
    name: PceltFetched
    type: System.Int32
    description: Pointer to the number of drawing sections returned from the list; this value can be less than Celt if you ask for more drawing sections than exist, or it can be NULL if no more drawing sections exist
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
related: []
keywords:
  - next
  - ienumdrsections
  - dr
  - sections
  - celt
  - int32
  - rgelt
  - section
  - pcelt
  - fetched
  - void
---

# IEnumDrSections.Next

Gets the next section view in the section views enumeration.

## Signature

```csharp
void Next( 
   System.Int32
Celt
,
   out DrSection
Rgelt
,
   out System.Int32
PceltFetched
)
```
## Parameters

- `Celt` (System.Int32): Number of section views for the section views enumeration
- `Rgelt` (DrSection): Pointer to an array of section views of size Celt
- `PceltFetched` (System.Int32): Pointer to the number of drawing sections returned from the list; this value can be less than Celt if you ask for more drawing sections than exist, or it can be NULL if no more drawing sections exist

## Return Value

Unknown.

## Remarks

For use in in-process DLLs only.