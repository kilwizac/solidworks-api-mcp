---
type: method
interface: IView
member: ISetBodies
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of bodies in a multibody part
  -
    name: BodyArray
    type: Body2
    description: in-process, unmanaged C++: Pointer to an array of bodies VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.Bodies
  - IView.IGetBodies
keywords:
  - bodies
  - see
  - also
  - ibody2
  - views
  - view
  - iview
  - isetbodies
  - count
  - int32
  - body
  - array
  - body2
  - void
---

# IView.ISetBodies

Sets the bodies of a multibody part to include in the view.

## Signature

```csharp
void ISetBodies( 
   System.Int32
Count
,
   ref Body2
BodyArray
)
```
## Parameters

- `Count` (System.Int32): Number of bodies in a multibody part
- `BodyArray` (Body2): in-process, unmanaged C++: Pointer to an array of bodies VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## See Also

- `IView.Bodies`
- `IView.IGetBodies`