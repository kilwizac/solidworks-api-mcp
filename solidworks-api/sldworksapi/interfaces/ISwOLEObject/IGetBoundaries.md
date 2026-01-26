---
type: method
interface: ISwOLEObject
member: IGetBoundaries
returns: void
parameters:
  -
    name: Boundary
    type: System.Double
    description: in-process, unmanaged C++: Pointer to an array of doubles of these coordinates: Drawings: sheet coordinates Parts or assemblies: screen pixel coordinates VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISwOLEObject.Boundaries
  - ISwOLEObject.ISetBoundaries
keywords:
  - igetboundaries
  - iswoleobject
  - sw
  - ole
  - object
  - boundaries
  - boundary
  - double
  - void
---

# ISwOLEObject.IGetBoundaries

Gets the boundaries for this OLE object.

## Signature

```csharp
void IGetBoundaries( 
   out System.Double
Boundary
)
```
## Parameters

- `Boundary` (System.Double): in-process, unmanaged C++: Pointer to an array of doubles of these coordinates: Drawings: sheet coordinates Parts or assemblies: screen pixel coordinates VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## See Also

- `ISwOLEObject.Boundaries`
- `ISwOLEObject.ISetBoundaries`