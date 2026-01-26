---
type: method
interface: IComponent2
member: SetTransformAndSolve2
returns: System.Boolean
parameters:
  -
    name: XformIn
    type: MathTransform
    description: Pointer to the IMathTransform object to use to set and solve
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetSpecificTransform
  - IComponent2.GetTotalTransform
  - IComponent2.Transform2
keywords:
  - settransformandsolve2
  - icomponent2
  - component2
  - transform
  - solve2
  - xform
  - math
  - boolean
---

# IComponent2.SetTransformAndSolve2

Obsolete. Superseded by IComponent2::SetTransformAndSolve3.

## Signature

```csharp
System.Boolean SetTransformAndSolve2( 
   MathTransform
XformIn
)
```
## Parameters

- `XformIn` (MathTransform): Pointer to the IMathTransform object to use to set and solve

## Return Value

True if the transform was set and solved, false if not

## Remarks

If making multiple calls to this method, consider using
IDragOperator::Drag
, which is more efficient because it reuses the solver. However, DragOperator::Drag does not support clash detection or dynamic clearance.
The transform specified must be in relation to the root component. See
IConfiguration::GetRootComponent
or
IConfiguration::IGetRootComponent2
.
SOLIDWORKS moves the destination component, or any component above it in the assembly tree, so that the destination component's transform is set to the desired one. Transforming an object using this method can cause SOLIDWORKS to transform other mated or constrained objects.
After you have changed a component's transform, you can call
IAssemblyDoc::UpdateBox
to avoid clipping in shaded display mode.

## See Also

- `IComponent2.GetSpecificTransform`
- `IComponent2.GetTotalTransform`
- `IComponent2.Transform2`