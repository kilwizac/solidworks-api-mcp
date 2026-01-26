---
type: method
interface: IView
member: IGetBodies
returns: Body2
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of bodies of a multibody part in the drawing view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.Bodies
  - IView.ISetBodies
keywords:
  - bodies
  - see
  - also
  - ibody2
  - views
  - view
  - iview
  - igetbodies
  - count
  - int32
  - body2
---

# IView.IGetBodies

Gets the bodies of a multibody part in the drawing view.

## Signature

```csharp
Body2 IGetBodies( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of bodies of a multibody part in the drawing view

## Return Value

in-process, unmanaged C++: Pointer to an array of bodies VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IView::GetBodiesCount
to get the value of Count.

## See Also

- `IView.Bodies`
- `IView.ISetBodies`