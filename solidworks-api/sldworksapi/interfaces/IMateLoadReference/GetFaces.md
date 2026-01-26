---
type: method
interface: IMateLoadReference
member: GetFaces
returns: System.Object
parameters:
  -
    name: WhichOne
    type: System.Int32
    description: 0 = Component1 1 = Component2
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - geometry
related:
  - IMateLoadReference.GetFacesCount
  - IMateLoadReference.IGetFaces
keywords:
  - getfaces
  - imateloadreference
  - mate
  - load
  - reference
  - faces
  - which
  - one
  - int32
  - object
---

# IMateLoadReference.GetFaces

Gets the supplemental faces of the mate associated with the specified component.

## Signature

```csharp
System.Object GetFaces( 
   System.Int32
WhichOne
)
```
## Parameters

- `WhichOne` (System.Int32): 0 = Component1 1 = Component2

## Return Value

Array of supplemental faces

## Remarks

The supplemental faces can belong to one of two components. Specify the component that owns the supplemental faces that you want to access.

## See Also

- `IMateLoadReference.GetFacesCount`
- `IMateLoadReference.IGetFaces`