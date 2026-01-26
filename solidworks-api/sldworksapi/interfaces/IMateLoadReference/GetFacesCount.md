---
type: method
interface: IMateLoadReference
member: GetFacesCount
returns: System.Int32
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
  - IMateLoadReference.GetFaces
keywords:
  - getfacescount
  - imateloadreference
  - mate
  - load
  - reference
  - faces
  - count
  - which
  - one
  - int32
  - insert
  - vb
  - net
  - vba
---

# IMateLoadReference.GetFacesCount

Gets the number of supplemental faces of the mate associated with the specified component.

## Signature

```csharp
System.Int32 GetFacesCount( 
   System.Int32
WhichOne
)
```
## Parameters

- `WhichOne` (System.Int32): 0 = Component1 1 = Component2

## Return Value

Number of supplemental faces of the mate associated with the specified component

## Remarks

The supplemental faces can belong to one of two components. Specify the component that owns the supplemental faces that you want to access.
Call this method before calling
IMateLoadReference::IGetFaces
to determine the size of the array.

## Examples

- Insert Mate Load Reference (C#) (Insert_Mate_Load_Reference_Example_CSharp.htm)
- Insert Mate Load Reference (VB.NET) (Insert_Mate_Load_Reference_Example_VBNET.htm)
- Insert Mate Load Reference (VBA) (Insert_Mate_Load_Reference_Example_VB.htm)

## See Also

- `IMateLoadReference.GetFaces`