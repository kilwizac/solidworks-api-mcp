---
type: method
interface: IEnumComponents2
member: Next
returns: void
parameters:
  -
    name: Celt
    type: System.Int32
    description: Number of components for the components enumeration
  -
    name: Rgelt
    type: Component2
    description: Pointer to an array components of size Celt
  -
    name: PceltFetched
    type: System.Int32
    description: Pointer to the number of components returned from the list.; this value can be less than Celt if you ask for more components than exist, or it can be NULL if no more components exist
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
related: []
keywords:
  - next
  - ienumcomponents2
  - components2
  - celt
  - int32
  - rgelt
  - component2
  - pcelt
  - fetched
  - void
---

# IEnumComponents2.Next

Gets the next component in the components enumeration.

## Signature

```csharp
void Next( 
   System.Int32
Celt
,
   out Component2
Rgelt
,
   out System.Int32
PceltFetched
)
```
## Parameters

- `Celt` (System.Int32): Number of components for the components enumeration
- `Rgelt` (Component2): Pointer to an array components of size Celt
- `PceltFetched` (System.Int32): Pointer to the number of components returned from the list.; this value can be less than Celt if you ask for more components than exist, or it can be NULL if no more components exist

## Return Value

Unknown.

## Remarks

For use in in-process DLLs only.