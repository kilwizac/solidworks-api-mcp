---
type: property
interface: IFace2
member: INormal
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IFace2.Normal
keywords:
  - inormal
  - iface2
  - face2
  - normal
  - double
readonly: null
---

# IFace2.INormal

Gets the unit normal vector for any planar face.

## Signature

```csharp
System.Double INormal {get; set;}
```
## Parameters

None.

## Return Value

Pointer to an array of 3 doubles (i,j,k)

## Remarks

This property is read-only.
If the face is not a planar face, then this property returns 0,0,0.

## See Also

- `IFace2.Normal`