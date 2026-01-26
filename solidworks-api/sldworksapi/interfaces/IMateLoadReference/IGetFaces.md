---
type: method
interface: IMateLoadReference
member: IGetFaces
returns: Face2
parameters:
  -
    name: WhichOne
    type: System.Int32
    description: 0 = Component1 1 = Component2
  -
    name: FaceCount
    type: System.Int32
    description: Number of supplemental faces
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - geometry
related:
  - IMateLoadReference.GetFaces
keywords:
  - igetfaces
  - imateloadreference
  - mate
  - load
  - reference
  - faces
  - which
  - one
  - int32
  - face
  - count
  - face2
---

# IMateLoadReference.IGetFaces

Gets the supplemental faces of the mate associated with the specified component.

## Signature

```csharp
Face2 IGetFaces( 
   System.Int32
WhichOne
,
   System.Int32
FaceCount
)
```
## Parameters

- `WhichOne` (System.Int32): 0 = Component1 1 = Component2
- `FaceCount` (System.Int32): Number of supplemental faces

## Return Value

in-process, unmanaged C++: Pointer to an array of supplemental faces VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The supplemental faces can belong to one of two components. Specify the component that owns the supplemental faces that you want to access.
Before calling this method, call
IMateLoadReference::GetFacesCount
to determine the size of the array for that method.

## See Also

- `IMateLoadReference.GetFaces`